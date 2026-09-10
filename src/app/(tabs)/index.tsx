import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';

import { BolumBasligi } from '@/components/BolumBasligi';
import { MiniKapak, MiniTarifKarti, TarifKarti } from '@/components/TarifKarti';
import { Cip } from '@/components/ui/Cip';
import { Yazi } from '@/components/ui/Yazi';
import { Ekran } from '@/components/ui/Ekran';
import { Bosluk, Yaricap } from '@/constants/theme';
import { DUNYA_TARIFLER, KATEGORILER, TARIFLER, YORESEL_TARIFLER } from '@/data/tarifler';
import { useTarifler } from '@/hooks/use-tarifler';
import { useTema } from '@/hooks/use-tema';
import { gunlukOneriler, mevsimindekiler } from '@/lib/oneri';
import { useAyarlar } from '@/stores/ayarlar';
import type { Kategori, Tarif } from '@/types/tarif';

const AY_ADLARI = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

/**
 * Ana akış "ilgi çekme" puanı: uygulamada kalma süresini artıracak şekilde
 * çorba/tatlı gibi tek boyutlu bloklar yerine yüksek etkileşim ihtimali olan
 * (ana yemek, editör onaylı, hızlı hazırlanan) tarifleri öne çıkarır.
 */
const KATEGORI_ILGI_AGIRLIGI: Record<Kategori, number> = {
  'ana-yemek': 40,
  tatli: 34,
  kahvaltilik: 30,
  'hamur-isi': 28,
  'pilav-bakliyat': 24,
  zeytinyagli: 22,
  corba: 18,
  salata: 16,
  icecek: 10,
};

function hashla(id: string, tohum: number): number {
  let h = tohum;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function ilgiPuani(t: Tarif, gunTohumu: number): number {
  let p = KATEGORI_ILGI_AGIRLIGI[t.kategori] ?? 12;
  if (t.editorOnayli) p += 6;
  if (t.hazirlikDk + t.pisirmeDk <= 25) p += 5; // hızlı karar → akışta kalma
  if (t.koleksiyonlar.length > 0) p += 2; // vitrin değeri olan koleksiyonlar
  p += hashla(t.id, gunTohumu) % 9; // günlük rotasyon, aynı tarifler her gün üstte kalmasın
  return p;
}

/**
 * Puana göre sıralar, ama aynı kategoriden art arda en fazla 2 kart gösterir —
 * uygulamanın çeşitliliğini (yöresel, dünya, tatlı, çorba…) sürekli görünür
 * kılmak, kaydırma boyunca tekdüzelikten kaynaklı bırakmaları azaltmak için.
 */
function cesitlilikliDiz(tarifler: Tarif[], gunTohumu: number): Tarif[] {
  const ARDISIK_SINIR = 2;
  const kalan = [...tarifler].sort((a, b) => ilgiPuani(b, gunTohumu) - ilgiPuani(a, gunTohumu));
  const sonuc: Tarif[] = [];
  while (kalan.length > 0) {
    let idx = 0;
    if (sonuc.length >= ARDISIK_SINIR) {
      const sonKategori = sonuc[sonuc.length - 1].kategori;
      const oncekiHepsiAyni = sonuc
        .slice(-ARDISIK_SINIR)
        .every((t) => t.kategori === sonKategori);
      if (oncekiHepsiAyni) {
        const farkli = kalan.findIndex((t) => t.kategori !== sonKategori);
        if (farkli > 0) idx = farkli;
      }
    }
    sonuc.push(kalan[idx]);
    kalan.splice(idx, 1);
  }
  return sonuc;
}

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
  // Akış sıralaması: uygulamada kalma süresini artıracak "ilgi puanı" +
  // kategori çeşitliliği (art arda en fazla 2 aynı kategori) — bkz. ilgiPuani/cesitlilikliDiz.
  const akis = useMemo(() => {
    if (kategori) return tarifler.filter((t) => t.kategori === kategori);
    const gunTohumu = simdi.getFullYear() * 400 + simdi.getMonth() * 31 + simdi.getDate();
    return cesitlilikliDiz(tarifler, gunTohumu);
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
            <Ray
              baslik="🗺 Yöresel Lezzetler"
              tarifler={(() => {
                const idler = new Set(YORESEL_TARIFLER.map((t) => t.id));
                return tarifler.filter((t) => idler.has(t.id));
              })()}
            />
            <Ray
              baslik="🌍 Dünya Mutfağı"
              tarifler={(() => {
                const idler = new Set(DUNYA_TARIFLER.map((t) => t.id));
                return tarifler.filter((t) => idler.has(t.id));
              })()}
            />
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
