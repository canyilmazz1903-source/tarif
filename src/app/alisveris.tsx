import Ionicons from '@expo/vector-icons/Ionicons';
import { useKeepAwake } from 'expo-keep-awake';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BosDurum } from '@/components/BosDurum';
import { Buton } from '@/components/ui/Buton';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, DokunmaHedefi, Font, PisirmeDokunmaHedefi, Yaricap } from '@/constants/theme';
import { FIYAT_GUNCELLEME_TARIHI, malzemeBul } from '@/data/malzemeler';
import { useTema } from '@/hooks/use-tema';
import { gramaCevir, miktarYazi } from '@/lib/olcu-motoru';
import { useAlisveris, type AlisverisKalemi } from '@/stores/alisveris';

const REYON_SIRASI = [
  'sebze',
  'meyve',
  'et-tavuk-balik',
  'sut-urunu',
  'bakliyat-tahil',
  'kuruyemis',
  'sos-temel',
  'baharat',
  'diger',
] as const;

const REYON_ADI: Record<string, string> = {
  sebze: '🥬 Manav — Sebze',
  meyve: '🍎 Manav — Meyve',
  'et-tavuk-balik': '🥩 Kasap & Şarküteri',
  'sut-urunu': '🥛 Süt Ürünleri',
  'bakliyat-tahil': '🌾 Bakliyat & Tahıl',
  kuruyemis: '🥜 Kuruyemiş',
  'sos-temel': '🫙 Temel Gıda',
  baharat: '🧂 Baharat',
  diger: '🛒 Diğer',
};

/** Kalemin tahmini fiyatı (TL); miktar/birim/fiyat bilinmiyorsa null. */
function kalemFiyati(k: AlisverisKalemi): number | null {
  const m = malzemeBul(k.ad);
  if (!m?.fiyatTlPerKg || k.miktar == null || k.birim == null) return null;
  const gram = gramaCevir(k.miktar, k.birim, k.ad);
  if (gram == null) return null;
  return (gram / 1000) * m.fiyatTlPerKg;
}

interface Reyon {
  reyon: string;
  kalemler: AlisverisKalemi[];
  altToplam: number;
  bilinmeyen: number;
}

function grupla(kalemler: AlisverisKalemi[]): Reyon[] {
  const gruplar = new Map<string, AlisverisKalemi[]>();
  for (const k of kalemler) {
    const reyon = malzemeBul(k.ad)?.kategori ?? 'diger';
    const liste = gruplar.get(reyon) ?? [];
    liste.push(k);
    gruplar.set(reyon, liste);
  }
  return REYON_SIRASI.filter((r) => gruplar.has(r)).map((r) => {
    const grup = gruplar.get(r) ?? [];
    let altToplam = 0;
    let bilinmeyen = 0;
    for (const k of grup) {
      const f = kalemFiyati(k);
      if (f == null) bilinmeyen += 1;
      else altToplam += f;
    }
    return { reyon: r, kalemler: grup, altToplam, bilinmeyen };
  });
}

/** Marketteyim — tam ekran, reyon reyon ilerleyen mod. */
function MarketModu({ kapat }: { kapat: () => void }) {
  useKeepAwake();
  const { palet } = useTema();
  const insets = useSafeAreaInsets();
  const alisveris = useAlisveris();
  const [reyonIdx, setReyonIdx] = useState(0);

  const reyonlar = useMemo(() => grupla(alisveris.kalemler), [alisveris.kalemler]);
  const alinan = alisveris.kalemler.filter((k) => k.alindi).length;
  const kalanTl = alisveris.kalemler
    .filter((k) => !k.alindi)
    .reduce((t, k) => t + (kalemFiyati(k) ?? 0), 0);

  const aktif = reyonlar[Math.min(reyonIdx, Math.max(0, reyonlar.length - 1))];
  const sonrakiReyon = () => setReyonIdx((i) => (i + 1) % Math.max(1, reyonlar.length));

  if (!aktif) {
    return (
      <Ekran>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <BosDurum emoji="🛒" baslik="Liste boş" aciklama="Önce listeye malzeme ekle." />
          <Buton baslik="Kapat" onPress={kapat} style={{ marginHorizontal: Bosluk.xl }} />
        </View>
      </Ekran>
    );
  }

  const grupTamam = aktif.kalemler.every((k) => k.alindi);

  return (
    <Ekran>
      <View style={{ flex: 1, padding: Bosluk.l, paddingBottom: insets.bottom + Bosluk.l, gap: Bosluk.l }}>
        {/* Üst bant: canlı sayaç */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.m }}>
          <View style={{ flex: 1 }}>
            <Yazi varyant="baslik">
              {alinan}/{alisveris.kalemler.length} alındı
            </Yazi>
            <Yazi varyant="etiket" renk="metinIkincil">
              tahmini kalan ≈₺{Math.round(kalanTl)}
            </Yazi>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Market modundan çık"
            onPress={kapat}
            style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="close" size={30} color={palet.metin} />
          </Pressable>
        </View>

        {/* Reyon şeridi */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: Bosluk.s }} style={{ flexGrow: 0 }}>
          {reyonlar.map((r, i) => {
            const tamam = r.kalemler.every((k) => k.alindi);
            return (
              <Pressable
                key={r.reyon}
                accessibilityRole="button"
                accessibilityLabel={REYON_ADI[r.reyon]}
                onPress={() => setReyonIdx(i)}
                style={{
                  paddingHorizontal: Bosluk.l,
                  minHeight: DokunmaHedefi,
                  borderRadius: Yaricap.tam,
                  backgroundColor: i === reyonIdx ? palet.birincil : tamam ? palet.ikincilYumusak : palet.kartIkincil,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Yazi varyant="etiket" style={{ color: i === reyonIdx ? '#FFFFFF' : tamam ? palet.ikincil : palet.metin }}>
                  {tamam ? '✓ ' : ''}
                  {REYON_ADI[r.reyon]}
                </Yazi>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Aktif reyon satırları — büyük dokunma hedefleri */}
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: Bosluk.m }} showsVerticalScrollIndicator={false}>
          {[...aktif.kalemler]
            .sort((a, b) => Number(a.alindi) - Number(b.alindi))
            .map((k) => {
              const f = kalemFiyati(k);
              return (
                <Pressable
                  key={k.id}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: k.alindi }}
                  accessibilityLabel={k.ad}
                  onPress={() => alisveris.toggle(k.id)}
                  style={{
                    minHeight: PisirmeDokunmaHedefi,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: Bosluk.l,
                    backgroundColor: k.alindi ? palet.ikincilYumusak : palet.kart,
                    borderRadius: Yaricap.m,
                    borderWidth: 1,
                    borderColor: k.alindi ? palet.ikincilYumusak : palet.cizgi,
                    paddingHorizontal: Bosluk.l,
                  }}
                >
                  <Ionicons
                    name={k.alindi ? 'checkmark-circle' : 'ellipse-outline'}
                    size={30}
                    color={k.alindi ? palet.ikincil : palet.metinIkincil}
                  />
                  <View style={{ flex: 1 }}>
                    <Yazi
                      varyant="altBaslik"
                      style={[{ fontSize: 18 }, k.alindi ? { textDecorationLine: 'line-through', opacity: 0.55 } : null]}
                    >
                      {k.miktar != null && k.birim ? `${miktarYazi(k.miktar, k.birim)} ` : ''}
                      {k.ad}
                    </Yazi>
                    {f != null ? (
                      <Yazi varyant="etiket" renk="metinIkincil">
                        ≈₺{Math.round(f)}
                      </Yazi>
                    ) : null}
                  </View>
                </Pressable>
              );
            })}
          {grupTamam ? (
            <Yazi varyant="etiket" style={{ color: palet.ikincil, textAlign: 'center', paddingVertical: Bosluk.m }}>
              ✓ Bu reyon tamam!
            </Yazi>
          ) : null}
        </ScrollView>

        {/* Tek elle kullanım: büyük alt buton */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Sonraki reyona atla"
          onPress={sonrakiReyon}
          style={{
            minHeight: PisirmeDokunmaHedefi,
            borderRadius: Yaricap.m,
            backgroundColor: palet.birincil,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: Bosluk.s,
          }}
        >
          <Yazi varyant="altBaslik" style={{ color: '#FFFFFF', fontSize: 18 }}>
            Sonraki reyon
          </Yazi>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </Pressable>
      </View>
    </Ekran>
  );
}

export default function AlisverisListesi() {
  const { palet } = useTema();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const alisveris = useAlisveris();
  const [yeniKalem, setYeniKalem] = useState('');
  const [marketModu, setMarketModu] = useState(false);

  const reyonlar = useMemo(() => grupla(alisveris.kalemler), [alisveris.kalemler]);
  const toplam = reyonlar.reduce((t, r) => t + r.altToplam, 0);
  const bilinmeyenler = reyonlar.reduce((t, r) => t + r.bilinmeyen, 0);

  const duz = reyonlar.flatMap((g) => [
    { tip: 'baslik' as const, id: `b-${g.reyon}`, reyon: g.reyon, altToplam: g.altToplam },
    ...g.kalemler.map((k) => ({ tip: 'kalem' as const, id: k.id, kalem: k })),
  ]);

  const ekle = () => {
    if (yeniKalem.trim()) {
      alisveris.ekle({ ad: yeniKalem.trim() });
      setYeniKalem('');
    }
  };

  return (
    <Ekran>
      <View style={{ flex: 1, padding: Bosluk.l, gap: Bosluk.m, paddingBottom: insets.bottom + Bosluk.l }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Yazi varyant="devBaslik">Alışveriş</Yazi>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Kapat"
            onPress={() => router.back()}
            style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="close" size={26} color={palet.metin} />
          </Pressable>
        </View>

        {alisveris.kalemler.length > 0 ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Marketteyim modunu aç"
            onPress={() => setMarketModu(true)}
            style={{
              minHeight: PisirmeDokunmaHedefi,
              borderRadius: Yaricap.m,
              backgroundColor: palet.birincil,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: Bosluk.s,
            }}
          >
            <Ionicons name="cart" size={24} color="#FFFFFF" />
            <Yazi varyant="altBaslik" style={{ color: '#FFFFFF', fontSize: 18 }}>
              Marketteyim
            </Yazi>
          </Pressable>
        ) : null}

        <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
          <TextInput
            value={yeniKalem}
            onChangeText={setYeniKalem}
            placeholder="Elle kalem ekle…"
            placeholderTextColor={palet.metinIkincil}
            onSubmitEditing={ekle}
            style={{
              flex: 1,
              backgroundColor: palet.kart,
              borderRadius: Yaricap.m,
              borderWidth: 1,
              borderColor: palet.cizgi,
              paddingHorizontal: Bosluk.l,
              minHeight: 48,
              color: palet.metin,
              fontFamily: Font.govde,
            }}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Kalemi ekle"
            onPress={ekle}
            style={{
              width: 48,
              height: 48,
              borderRadius: Yaricap.m,
              backgroundColor: palet.birincil,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </Pressable>
        </View>

        <FlatList
          data={duz}
          keyExtractor={(x) => x.id}
          contentContainerStyle={{ gap: Bosluk.s, paddingBottom: Bosluk.xl }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            item.tip === 'baslik' ? (
              <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: Bosluk.s }}>
                <Yazi varyant="etiket" renk="metinIkincil" style={{ flex: 1 }}>
                  {REYON_ADI[item.reyon]}
                </Yazi>
                {item.altToplam > 0 ? (
                  <Yazi varyant="kucuk" renk="metinIkincil">
                    ≈₺{Math.round(item.altToplam)}
                  </Yazi>
                ) : null}
              </View>
            ) : (
              <Pressable
                accessibilityRole="checkbox"
                accessibilityState={{ checked: item.kalem.alindi }}
                accessibilityLabel={item.kalem.ad}
                onPress={() => alisveris.toggle(item.kalem.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Bosluk.m,
                  backgroundColor: palet.kart,
                  borderRadius: Yaricap.s,
                  borderWidth: 1,
                  borderColor: palet.cizgi,
                  paddingHorizontal: Bosluk.m,
                  minHeight: DokunmaHedefi,
                }}
              >
                <Ionicons
                  name={item.kalem.alindi ? 'checkbox' : 'square-outline'}
                  size={22}
                  color={item.kalem.alindi ? palet.ikincil : palet.metinIkincil}
                />
                <Yazi
                  varyant="govde"
                  style={[
                    { flex: 1 },
                    item.kalem.alindi ? { textDecorationLine: 'line-through', opacity: 0.5 } : null,
                  ]}
                >
                  {item.kalem.miktar != null && item.kalem.birim
                    ? `${miktarYazi(item.kalem.miktar, item.kalem.birim)} `
                    : ''}
                  {item.kalem.ad}
                </Yazi>
                {(() => {
                  const f = kalemFiyati(item.kalem);
                  return f != null ? (
                    <Yazi varyant="kucuk" renk="metinIkincil">
                      ≈₺{Math.round(f)}
                    </Yazi>
                  ) : null;
                })()}
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`${item.kalem.ad} sil`}
                  onPress={() => alisveris.sil(item.kalem.id)}
                  style={{ minWidth: 36, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
                >
                  <Ionicons name="trash-outline" size={18} color={palet.metinIkincil} />
                </Pressable>
              </Pressable>
            )
          }
          ListFooterComponent={
            alisveris.kalemler.length > 0 ? (
              <View style={{ gap: Bosluk.s, paddingTop: Bosluk.m }}>
                <View
                  style={{
                    backgroundColor: palet.amberYumusak,
                    borderRadius: Yaricap.m,
                    padding: Bosluk.l,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Yazi varyant="etiket" style={{ color: palet.amber }}>
                    Genel toplam{bilinmeyenler > 0 ? ` (+${bilinmeyenler} bilinmeyen)` : ''}
                  </Yazi>
                  <Yazi varyant="baslik" style={{ color: palet.amber }}>
                    ≈₺{Math.round(toplam)}
                  </Yazi>
                </View>
                <Yazi varyant="kucuk" renk="metinIkincil" style={{ textAlign: 'center' }}>
                  ₺ tahmini · ortalama fiyatlar {FIYAT_GUNCELLEME_TARIHI}
                </Yazi>
              </View>
            ) : null
          }
          ListEmptyComponent={
            <BosDurum
              emoji="🛒"
              baslik="Listen boş"
              aciklama="Tarif detayından veya haftalık plandan malzemeleri buraya gönderebilirsin."
            />
          }
        />

        {alisveris.kalemler.some((k) => k.alindi) ? (
          <Buton baslik="Alınanları temizle" varyant="yumusak" onPress={alisveris.alinanlariTemizle} />
        ) : null}
      </View>

      <Modal visible={marketModu} animationType="slide" onRequestClose={() => setMarketModu(false)}>
        <MarketModu kapat={() => setMarketModu(false)} />
      </Modal>
    </Ekran>
  );
}
