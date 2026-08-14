import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';

import { BolumBasligi } from '@/components/BolumBasligi';
import { MiniKapak, MiniTarifKarti, TarifKarti } from '@/components/TarifKarti';
import { Cip } from '@/components/ui/Cip';
import { Yazi } from '@/components/ui/Yazi';
import { Ekran } from '@/components/ui/Ekran';
import { Bosluk, Yaricap } from '@/constants/theme';
import { KATEGORILER, TARIFLER } from '@/data/tarifler';
import { useTarifler } from '@/hooks/use-tarifler';
import { useTema } from '@/hooks/use-tema';
import { gunlukOneriler, mevsimindekiler } from '@/lib/oneri';
import { useAyarlar } from '@/stores/ayarlar';
import type { Kategori, Tarif } from '@/types/tarif';

const AY_ADLARI = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

function Ray({ baslik, tarifler }: { baslik: string; tarifler: Tarif[] }) {
  if (tarifler.length === 0) return null;
  return (
    <View style={{ gap: Bosluk.s }}>
      <Yazi varyant="altBaslik" style={{ paddingHorizontal: Bosluk.l }}>
        {baslik}
      </Yazi>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: Bosluk.l, gap: Bosluk.m }}
      >
        {tarifler.map((t) => (
          <MiniTarifKarti key={t.id} tarif={t} />
        ))}
      </ScrollView>
    </View>
  );
}

export default function Kesfet() {
  const { palet } = useTema();
  const router = useRouter();
  const tercihler = useAyarlar((s) => s.beslenmeTercihleri);
  const [kategori, setKategori] = useState<Kategori | null>(null);
  const tarifler = useTarifler();

  const simdi = useMemo(() => new Date(), []);
  const oneriler = useMemo(
    () => gunlukOneriler(tarifler, simdi, tercihler),
    [tarifler, simdi, tercihler],
  );
  const mevsim = useMemo(() => mevsimindekiler(tarifler, simdi), [tarifler, simdi]);
  // Akış sıralaması: paket sırası (çorbalar önde) yerine sofra öncelikli —
  // ana yemekler ve akşam kategorileri üstte, gün bazlı hafif rotasyonla.
  const akis = useMemo(() => {
    const taban = kategori ? tarifler.filter((t) => t.kategori === kategori) : tarifler;
    if (kategori) return taban;
    const oncelik: Record<string, number> = {
      'ana-yemek': 0,
      'pilav-bakliyat': 1,
      zeytinyagli: 2,
      corba: 3,
      'hamur-isi': 4,
      salata: 5,
      kahvaltilik: 6,
      tatli: 7,
      icecek: 8,
    };
    const gunTohumu = simdi.getFullYear() * 400 + simdi.getMonth() * 31 + simdi.getDate();
    const hashla = (id: string) => {
      let h = gunTohumu;
      for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
      return Math.abs(h) % 1000;
    };
    return [...taban].sort(
      (a, b) =>
        (oncelik[a.kategori] ?? 9) - (oncelik[b.kategori] ?? 9) || hashla(a.id) - hashla(b.id),
    );
  }, [tarifler, kategori, simdi]);
  const kol = (k: string) => tarifler.filter((t) => t.koleksiyonlar.includes(k as never));
  const aksamOnerileri = useMemo(() => {
    const gunTohumu = simdi.getDate() + simdi.getMonth() * 31;
    return tarifler
      .filter((t) => t.kategori === 'ana-yemek')
      .sort((a, b) => {
        const h = (id: string) => {
          let x = gunTohumu;
          for (let i = 0; i < id.length; i++) x = (x * 31 + id.charCodeAt(i)) | 0;
          return Math.abs(x);
        };
        return h(a.id) - h(b.id);
      })
      .slice(0, 10);
  }, [tarifler, simdi]);
  const onbes = tarifler.filter(
    (t) => t.koleksiyonlar.includes('15-dakika') || t.hazirlikDk + t.pisirmeDk <= 20,
  );

  const saat = simdi.getHours();
  const selam = saat < 11 ? 'Günaydın 🌞' : saat < 18 ? 'Merhaba 👋' : 'İyi akşamlar 🌙';

  return (
    <Ekran>
      <FlatList
        data={akis}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: Bosluk.l }}>
            <TarifKarti tarif={item} />
          </View>
        )}
        ListHeaderComponent={
          <View style={{ gap: Bosluk.xl, paddingTop: Bosluk.l, paddingBottom: Bosluk.s }}>
            <View style={{ paddingHorizontal: Bosluk.l, gap: Bosluk.xs }}>
              <Yazi varyant="kucuk" renk="metinIkincil">
                {selam}
              </Yazi>
              <Yazi varyant="devBaslik">Bugün ne pişirsem?</Yazi>
            </View>

            {/* Saat + mevsim + tercihe göre 3 öneri */}
            <View style={{ paddingHorizontal: Bosluk.l }}>
              <View
                style={{
                  backgroundColor: palet.birincilYumusak,
                  borderRadius: Yaricap.l,
                  padding: Bosluk.l,
                  gap: Bosluk.m,
                }}
              >
                <Yazi varyant="etiket" style={{ color: palet.birincil }}>
                  Sana özel 3 öneri — 10 saniyede karar ver
                </Yazi>
                {oneriler.map((t) => (
                  <Pressable
                    key={t.id}
                    accessibilityRole="button"
                    accessibilityLabel={t.baslik}
                    onPress={() => router.push({ pathname: '/tarif/[id]', params: { id: t.id } })}
                    style={({ pressed }) => ({
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: Bosluk.m,
                      backgroundColor: palet.kart,
                      borderRadius: Yaricap.m,
                      padding: Bosluk.m,
                      opacity: pressed ? 0.9 : 1,
                    })}
                  >
                    <MiniKapak tarif={t} boy={44} />
                    <View style={{ flex: 1 }}>
                      <Yazi varyant="altBaslik" numberOfLines={1}>
                        {t.baslik}
                      </Yazi>
                      <Yazi varyant="kucuk" renk="metinIkincil">
                        ⏱ {t.hazirlikDk + t.pisirmeDk} dk · {t.kaloriPerPorsiyon} kcal
                      </Yazi>
                    </View>
                    <Yazi varyant="altBaslik" style={{ color: palet.birincil }}>
                      ›
                    </Yazi>
                  </Pressable>
                ))}
              </View>
            </View>

            <Ray baslik="🌙 Bu Akşam Ne Pişirsem" tarifler={aksamOnerileri} />
            <Ray baslik="🔥 Yeni Nesil Mutfak" tarifler={kol('yeni-nesil')} />
            <Ray baslik="⚡ 15 Dakikada" tarifler={onbes} />
            <Ray baslik="🍲 Tek Tencere" tarifler={kol('tek-tencere')} />
            <Ray baslik={`🌿 ${AY_ADLARI[simdi.getMonth()]} Mevsiminde`} tarifler={mevsim} />
            <Ray baslik="♻️ Artanı Değerlendir" tarifler={kol('artan')} />
            <Ray
              baslik="🏛 Osmanlı Saray Mutfağı"
              tarifler={[...kol('osmanli-saray'), ...kol('osmanli')]}
            />
            <Ray baslik="☕ Demlik & Fincan" tarifler={kol('demlik-fincan')} />
            <Ray
              baslik="✓ Editör Onaylı"
              tarifler={tarifler.filter((t) => t.editorOnayli).slice(0, 10)}
            />

            <View style={{ gap: Bosluk.s }}>
              <View style={{ paddingHorizontal: Bosluk.l }}>
                <BolumBasligi
                  baslik="Tüm Tarifler"
                  aciklama={`${TARIFLER.length} denenmiş, ölçülü tarif`}
                />
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: Bosluk.l, gap: Bosluk.s }}
              >
                <Cip baslik="Hepsi" secili={kategori === null} onPress={() => setKategori(null)} />
                {KATEGORILER.map((k) => (
                  <Cip
                    key={k.key}
                    baslik={k.ad}
                    secili={kategori === k.key}
                    onPress={() => setKategori(kategori === k.key ? null : k.key)}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        }
      />
    </Ekran>
  );
}
