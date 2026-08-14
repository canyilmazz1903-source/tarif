import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, TextInput, View } from 'react-native';

import { KOLEKSIYON_KARTLARI } from '@/app/kategori/[slug]';
import { KATEGORI_TON } from '@/components/TarifKarti';

import { BosDurum } from '@/components/BosDurum';
import { TarifKarti } from '@/components/TarifKarti';
import { Cip } from '@/components/ui/Cip';
import { Ekran } from '@/components/ui/Ekran';
import { Rozet } from '@/components/ui/Rozet';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, Font, Yaricap } from '@/constants/theme';
import { MALZEMELER } from '@/data/malzemeler';
import { KATEGORILER, TARIFLER } from '@/data/tarifler';
import { useTema } from '@/hooks/use-tema';
import { KATEGORI_GORSELLERI, malzemeGorseli, tarifGorseli } from '@/data/gorseller';
import {
  adayPasifMi,
  artaniDegerlendir,
  dolaptaNeVar,
  kapsayanTarifler,
  normalize,
  tarifAra,
  type AramaFiltresi,
} from '@/lib/ara';
import { useDolap } from '@/stores/dolap';
import { useTarifler } from '@/hooks/use-tarifler';
import type { BeslenmeEtiketi, Kategori, Malzeme, Zorluk } from '@/types/tarif';
import { Image } from 'react-native';

const MALZEME_SEKMELERI: Array<{ key: Malzeme['kategori'][]; ad: string }> = [
  { key: ['sebze', 'meyve'], ad: 'Sebze & Meyve' },
  { key: ['et-tavuk-balik'], ad: 'Et & Tavuk' },
  { key: ['sut-urunu'], ad: 'Süt Ürünü' },
  { key: ['bakliyat-tahil', 'kuruyemis'], ad: 'Bakliyat & Tahıl' },
  { key: ['sos-temel', 'baharat'], ad: 'Temel' },
];

type Mod = 'ara' | 'dolap';

const BESLENMELER: BeslenmeEtiketi[] = ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'];
const SURELER = [20, 40, 60] as const;
const ZORLUKLAR: Zorluk[] = ['kolay', 'orta', 'zor'];

function KategoriIzgara() {
  const { palet, koyu } = useTema();
  const router = useRouter();
  const tarifler = useTarifler();
  const kartlar = [
    ...KATEGORILER.map((k) => ({
      slug: k.key as string,
      ad: k.ad,
      gorsel: KATEGORI_GORSELLERI[k.key],
      sayi: tarifler.filter((t) => t.kategori === k.key).length,
      ton: KATEGORI_TON[k.key][koyu ? 1 : 0],
    })),
    ...KOLEKSIYON_KARTLARI.map((k) => ({
      slug: k.slug as string,
      ad: k.ad,
      gorsel: tarifGorseli('_fallback'),
      sayi: tarifler.filter((t) => t.koleksiyonlar.includes(k.slug)).length,
      ton: palet.kartIkincil,
    })),
  ].filter((k) => k.sayi > 0);

  return (
    <View style={{ gap: Bosluk.m, paddingBottom: Bosluk.l }}>
      <Yazi varyant="baslik">Kategoriler</Yazi>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.m }}>
        {kartlar.map((k) => (
          <Pressable
            key={k.slug}
            accessibilityRole="button"
            accessibilityLabel={`${k.ad}, ${k.sayi} tarif`}
            onPress={() => router.push({ pathname: '/kategori/[slug]', params: { slug: k.slug } })}
            style={({ pressed }) => ({
              width: '47.5%',
              backgroundColor: k.ton,
              borderRadius: Yaricap.m,
              padding: Bosluk.l,
              gap: Bosluk.xs,
              opacity: pressed ? 0.85 : 1,
            })}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: palet.kart,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {k.gorsel != null ? (
                <Image
                  source={k.gorsel}
                  resizeMode="cover"
                  style={{ width: '100%', height: '100%' }}
                  accessibilityIgnoresInvertColors
                />
              ) : (
                <Yazi varyant="baslik">{k.ad.slice(0, 1)}</Yazi>
              )}
            </View>
            <Yazi varyant="altBaslik" numberOfLines={1}>
              {k.ad}
            </Yazi>
            <Yazi varyant="kucuk" renk="metinIkincil">
              {k.sayi} tarif
            </Yazi>
          </Pressable>
        ))}
      </View>
      <Yazi varyant="baslik">Tüm sonuçlar</Yazi>
    </View>
  );
}

export default function Ara() {
  const { palet } = useTema();
  const [mod, setMod] = useState<Mod>('ara');
  const [sorgu, setSorgu] = useState('');
  const [filtre, setFiltre] = useState<AramaFiltresi>({});
  const [artanModu, setArtanModu] = useState(false);
  const [malzemeSekmesi, setMalzemeSekmesi] = useState(0);
  const dolap = useDolap();
  const tarifler = useTarifler();

  const sonuclar = useMemo(() => tarifAra(tarifler, sorgu, filtre), [tarifler, sorgu, filtre]);

  // Canlı daraltma: seçilen malzemelerin TAMAMINI kullanan tarifler.
  // Artan modunda israf-önleme etiketlileri öne alan eski sıralama korunur.
  const dolapSonuclari = useMemo(() => {
    if (dolap.malzemeler.length === 0) return [];
    if (artanModu) return artaniDegerlendir(tarifler, dolap.malzemeler);
    const kapsayanlar = kapsayanTarifler(tarifler, dolap.malzemeler);
    const detay = dolaptaNeVar(kapsayanlar, dolap.malzemeler);
    return detay;
  }, [tarifler, dolap.malzemeler, artanModu]);

  const malzemeArama = useMemo(() => {
    const q = normalize(sorgu);
    if (mod !== 'dolap') return MALZEMELER;
    if (!q) return MALZEMELER;
    return MALZEMELER.filter((m) => normalize(m.ad).includes(q));
  }, [sorgu, mod]);

  return (
    <Ekran>
      <View style={{ padding: Bosluk.l, gap: Bosluk.m }}>
        <Yazi varyant="devBaslik">Ara</Yazi>
        <TextInput
          value={sorgu}
          onChangeText={setSorgu}
          placeholder={mod === 'ara' ? 'Tarif veya malzeme ara…' : 'Malzeme ara ve dolabına ekle…'}
          placeholderTextColor={palet.metinIkincil}
          accessibilityLabel="Arama çubuğu"
          style={{
            backgroundColor: palet.kart,
            borderRadius: Yaricap.m,
            borderWidth: 1,
            borderColor: palet.cizgi,
            paddingHorizontal: Bosluk.l,
            minHeight: 48,
            color: palet.metin,
            fontFamily: Font.govde,
            fontSize: 15,
          }}
        />
        <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
          <Cip baslik="Tarif Ara" secili={mod === 'ara'} onPress={() => setMod('ara')} />
          <Cip baslik="Dolapta Ne Var" secili={mod === 'dolap'} onPress={() => setMod('dolap')} />
        </View>
      </View>

      {mod === 'ara' ? (
        <FlatList
          data={sonuclar}
          keyExtractor={(t) => t.id}
          contentContainerStyle={{ paddingHorizontal: Bosluk.l, paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {sorgu.trim() === '' ? <KategoriIzgara /> : null}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: Bosluk.s, paddingBottom: Bosluk.m }}
              >
              {KATEGORILER.map((k) => (
                <Cip
                  key={k.key}
                  baslik={k.ad}
                  secili={filtre.kategori === k.key}
                  onPress={() =>
                    setFiltre((f) => ({
                      ...f,
                      kategori: f.kategori === k.key ? undefined : (k.key as Kategori),
                    }))
                  }
                />
              ))}
              {SURELER.map((s) => (
                <Cip
                  key={s}
                  baslik={`≤ ${s} dk`}
                  secili={filtre.maksSureDk === s}
                  onPress={() =>
                    setFiltre((f) => ({ ...f, maksSureDk: f.maksSureDk === s ? undefined : s }))
                  }
                />
              ))}
              {ZORLUKLAR.map((z) => (
                <Cip
                  key={z}
                  baslik={z === 'kolay' ? 'Kolay' : z === 'orta' ? 'Orta' : 'Zor'}
                  secili={filtre.zorluk === z}
                  onPress={() => setFiltre((f) => ({ ...f, zorluk: f.zorluk === z ? undefined : z }))}
                />
              ))}
              {BESLENMELER.map((b) => (
                <Cip
                  key={b}
                  baslik={b}
                  secili={filtre.beslenme?.includes(b) ?? false}
                  onPress={() =>
                    setFiltre((f) => ({
                      ...f,
                      beslenme: f.beslenme?.includes(b)
                        ? f.beslenme.filter((x) => x !== b)
                        : [...(f.beslenme ?? []), b],
                    }))
                  }
                />
              ))}
              </ScrollView>
            </View>
          }
          renderItem={({ item }) => <TarifKarti tarif={item} />}
          ListEmptyComponent={
            <BosDurum
              emoji="🔍"
              baslik="Sonuç bulunamadı"
              aciklama="Farklı bir kelime dene veya filtreleri azalt."
            />
          }
        />
      ) : (
        <FlatList
          data={dolapSonuclari}
          keyExtractor={(s) => s.tarif.id}
          contentContainerStyle={{ paddingHorizontal: Bosluk.l, paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{ gap: Bosluk.m, paddingBottom: Bosluk.m }}>
              {/* Seçilenler çubuğu + canlı sonuç başlığı */}
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.s }}>
                <Yazi varyant="altBaslik" style={{ flex: 1 }}>
                  {dolap.malzemeler.length === 0
                    ? 'Malzeme seç'
                    : `${dolap.malzemeler.length} malzemeyle ${dolapSonuclari.length} tarif`}
                </Yazi>
                <Cip
                  baslik="♻️ Elimde kalan var"
                  secili={artanModu}
                  onPress={() => setArtanModu((a) => !a)}
                />
              </View>
              {dolap.malzemeler.length > 0 ? (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: Bosluk.s }}
                >
                  {dolap.malzemeler.map((ad) => (
                    <Cip key={ad} baslik={`${ad} ✕`} secili onPress={() => dolap.toggle(ad)} />
                  ))}
                  <Cip baslik="Temizle" onPress={dolap.temizle} />
                </ScrollView>
              ) : null}

              {/* Kategori sekmeleri */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: Bosluk.s }}
              >
                {MALZEME_SEKMELERI.map((s, i) => (
                  <Cip
                    key={s.ad}
                    baslik={s.ad}
                    secili={malzemeSekmesi === i}
                    onPress={() => setMalzemeSekmesi(i)}
                  />
                ))}
              </ScrollView>

              {/* Görsel malzeme ızgarası + akıllı pasifleştirme */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.s }}>
                {malzemeArama
                  .filter(
                    (m) =>
                      sorgu.trim() !== '' ||
                      MALZEME_SEKMELERI[malzemeSekmesi].key.includes(m.kategori),
                  )
                  .map((m) => {
                    const secili = dolap.malzemeler.includes(m.ad);
                    const pasif =
                      !secili &&
                      !artanModu &&
                      dolap.malzemeler.length > 0 &&
                      adayPasifMi(tarifler, dolap.malzemeler, m.ad);
                    const gorsel = malzemeGorseli(m.ad);
                    return (
                      <Pressable
                        key={m.ad}
                        accessibilityRole="button"
                        accessibilityState={{ selected: secili, disabled: pasif }}
                        accessibilityLabel={m.ad}
                        disabled={pasif}
                        onPress={() => dolap.toggle(m.ad)}
                        style={{
                          width: '31%',
                          minHeight: 84,
                          borderRadius: Yaricap.m,
                          backgroundColor: secili ? palet.birincilYumusak : palet.kart,
                          borderWidth: 1.5,
                          borderColor: secili ? palet.birincil : palet.cizgi,
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 4,
                          padding: Bosluk.s,
                          opacity: pasif ? 0.35 : 1,
                        }}
                      >
                        {gorsel != null ? (
                          <Image
                            source={gorsel}
                            style={{ width: 36, height: 36 }}
                            accessibilityIgnoresInvertColors
                          />
                        ) : (
                          <View
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 18,
                              backgroundColor: secili ? palet.birincil : palet.kartIkincil,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Yazi
                              varyant="altBaslik"
                              style={{ color: secili ? '#FFFFFF' : palet.metinIkincil }}
                            >
                              {m.ad.slice(0, 1).toLocaleUpperCase('tr')}
                            </Yazi>
                          </View>
                        )}
                        <Yazi varyant="kucuk" numberOfLines={1} style={{ textAlign: 'center' }}>
                          {m.ad}
                        </Yazi>
                      </Pressable>
                    );
                  })}
              </View>
            </View>
          }
          renderItem={({ item }) => (
            <View style={{ gap: Bosluk.s }}>
              <TarifKarti tarif={item.tarif} />
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.s }}>
                <Rozet
                  metin={`${item.varSayisi}/${item.toplamAna} malzeme sende var`}
                  ton="ikincil"
                />
                {item.eksikler.length > 0 ? (
                  <Rozet metin={`Eksik: ${item.eksikler.slice(0, 3).join(', ')}`} ton="amber" />
                ) : (
                  <Rozet metin="Hepsi tamam, hemen başla!" ton="birincil" />
                )}
              </View>
            </View>
          )}
          ListEmptyComponent={
            <BosDurum
              emoji="🧺"
              baslik={artanModu ? 'Artan malzemeni seç' : 'Dolabına malzeme ekle'}
              aciklama={
                artanModu
                  ? 'Elinde kalan 1-3 malzemeyi seç; israf önleyen tarifler öne gelsin.'
                  : 'Evindeki malzemeleri işaretle; nelerle ne pişireceğini söyleyelim.'
              }
            />
          }
        />
      )}
    </Ekran>
  );
}
