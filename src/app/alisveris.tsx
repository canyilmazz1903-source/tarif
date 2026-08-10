import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BosDurum } from '@/components/BosDurum';
import { Buton } from '@/components/ui/Buton';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, DokunmaHedefi, Font, Yaricap } from '@/constants/theme';
import { malzemeBul } from '@/data/malzemeler';
import { useTema } from '@/hooks/use-tema';
import { gramaCevir, miktarYazi } from '@/lib/olcu-motoru';
import { useAlisveris } from '@/stores/alisveris';

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

export default function AlisverisListesi() {
  const { palet } = useTema();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const alisveris = useAlisveris();
  const [yeniKalem, setYeniKalem] = useState('');

  const gruplu = useMemo(() => {
    const gruplar = new Map<string, typeof alisveris.kalemler>();
    for (const k of alisveris.kalemler) {
      const reyon = malzemeBul(k.ad)?.kategori ?? 'diger';
      const liste = gruplar.get(reyon) ?? [];
      liste.push(k);
      gruplar.set(reyon, liste);
    }
    return REYON_SIRASI.filter((r) => gruplar.has(r)).map((r) => ({
      reyon: r,
      kalemler: gruplar.get(r) ?? [],
    }));
  }, [alisveris.kalemler]);

  const tahminiToplam = useMemo(
    () =>
      alisveris.kalemler.reduce((toplam, k) => {
        if (k.alindi) return toplam;
        const m = malzemeBul(k.ad);
        if (!m?.fiyatTlPerKg || k.miktar == null || k.birim == null) return toplam;
        const gram = gramaCevir(k.miktar, k.birim, k.ad);
        return gram == null ? toplam : toplam + (gram / 1000) * m.fiyatTlPerKg;
      }, 0),
    [alisveris.kalemler],
  );

  const duz = gruplu.flatMap((g) => [
    { tip: 'baslik' as const, id: `b-${g.reyon}`, reyon: g.reyon },
    ...g.kalemler.map((k) => ({ tip: 'kalem' as const, id: k.id, kalem: k })),
  ]);

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

        {tahminiToplam > 0 ? (
          <View
            style={{
              backgroundColor: palet.amberYumusak,
              borderRadius: Yaricap.m,
              padding: Bosluk.m,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Yazi varyant="etiket" style={{ color: palet.amber }}>
              Tahmini sepet tutarı
            </Yazi>
            <Yazi varyant="baslik" style={{ color: palet.amber }}>
              ≈{Math.round(tahminiToplam)} TL
            </Yazi>
          </View>
        ) : null}

        <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
          <TextInput
            value={yeniKalem}
            onChangeText={setYeniKalem}
            placeholder="Elle kalem ekle…"
            placeholderTextColor={palet.metinIkincil}
            onSubmitEditing={() => {
              if (yeniKalem.trim()) {
                alisveris.ekle({ ad: yeniKalem.trim() });
                setYeniKalem('');
              }
            }}
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
            onPress={() => {
              if (yeniKalem.trim()) {
                alisveris.ekle({ ad: yeniKalem.trim() });
                setYeniKalem('');
              }
            }}
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
              <Yazi varyant="etiket" renk="metinIkincil" style={{ marginTop: Bosluk.s }}>
                {REYON_ADI[item.reyon]}
              </Yazi>
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
    </Ekran>
  );
}
