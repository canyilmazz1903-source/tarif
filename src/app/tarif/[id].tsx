import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Share, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BosDurum } from '@/components/BosDurum';
import { Kapak, zorlukYazi } from '@/components/TarifKarti';
import { Buton } from '@/components/ui/Buton';
import { Cip } from '@/components/ui/Cip';
import { Ekran } from '@/components/ui/Ekran';
import { Rozet } from '@/components/ui/Rozet';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, DokunmaHedefi, Yaricap } from '@/constants/theme';
import { kategoriAdi, tarifBul } from '@/data/tarifler';
import { useTema } from '@/hooks/use-tema';
import { tarifEngelleri } from '@/lib/alerji';
import { useAyarlar } from '@/stores/ayarlar';
import { maliyetYazi, porsiyonMaliyeti } from '@/lib/maliyet';
import { cevir, miktarYazi, porsiyonla } from '@/lib/olcu-motoru';
import { useAlisveris } from '@/stores/alisveris';
import { useKayitli } from '@/stores/kayitli';

export default function TarifDetay() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const tarif = tarifBul(id ?? '');
  const { palet } = useTema();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const kayitli = useKayitli();
  const alisveris = useAlisveris();

  const [porsiyon, setPorsiyon] = useState(tarif?.porsiyon ?? 4);
  const [gramModu, setGramModu] = useState(false);
  const [isaretliler, setIsaretliler] = useState<Set<number>>(new Set());

  const maliyet = useMemo(() => (tarif ? porsiyonMaliyeti(tarif) : 0), [tarif]);

  // Doğrudan link/paylaşımla açılan tarif gizlenmez; kırmızı uyarı bandı gösterilir.
  const yiyemedikleri = useAyarlar((s) => s.yiyemedikleri);
  const kacinmaGruplari = useAyarlar((s) => s.kacinmaGruplari);
  const alerjiFiltresiAcik = useAyarlar((s) => s.alerjiFiltresiAcik);
  const engeller = useMemo(
    () =>
      tarif && alerjiFiltresiAcik
        ? tarifEngelleri(tarif, { yiyemedikleri, kacinmaGruplari, alerjiFiltresiAcik })
        : [],
    [tarif, yiyemedikleri, kacinmaGruplari, alerjiFiltresiAcik],
  );

  if (!tarif) {
    return (
      <Ekran>
        <BosDurum emoji="🤔" baslik="Tarif bulunamadı" aciklama="Bu tarif kaldırılmış olabilir." />
      </Ekran>
    );
  }

  const kayitliMi = kayitli.kayitliMi(tarif.id);
  const sure = tarif.hazirlikDk + tarif.pisirmeDk;

  const satirYazi = (i: number): string => {
    const m = tarif.malzemeler[i];
    const miktar = porsiyonla(m.miktar, tarif.porsiyon, porsiyon);
    if (gramModu) {
      const donusum = cevir(miktar, m.birim, 'gram', m.ad);
      if (donusum) return miktarYazi(donusum.miktar, donusum.birim);
    }
    return miktarYazi(miktar, m.birim);
  };

  const gruplar = [...new Set(tarif.malzemeler.map((m) => m.grup ?? 'Malzemeler'))];

  const eksikleriListeyeEkle = () => {
    const eksikler = tarif.malzemeler
      .map((m, i) => ({ m, i }))
      .filter(({ i }) => !isaretliler.has(i))
      .map(({ m }) => ({
        ad: m.ad,
        miktar: porsiyonla(m.miktar, tarif.porsiyon, porsiyon),
        birim: m.birim,
        kaynakTarifId: tarif.id,
      }));
    alisveris.topluEkle(eksikler);
    router.push('/alisveris');
  };

  return (
    <Ekran ustBosluk={false}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 + insets.bottom }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingTop: insets.top + Bosluk.s, paddingHorizontal: Bosluk.l, gap: Bosluk.l }}>
          {/* Üst bar */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Geri dön"
              onPress={() => router.back()}
              style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, justifyContent: 'center' }}
            >
              <Ionicons name="chevron-back" size={26} color={palet.metin} />
            </Pressable>
            <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Paylaş"
                onPress={() =>
                  Share.share({ message: `${tarif.baslik} — Tencere uygulamasında: tencere://tarif/${tarif.id}` })
                }
                style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
              >
                <Ionicons name="share-outline" size={24} color={palet.metin} />
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={kayitliMi ? 'Defterden çıkar' : 'Deftere kaydet'}
                onPress={() => kayitli.toggle(tarif.id)}
                style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
              >
                <Ionicons
                  name={kayitliMi ? 'bookmark' : 'bookmark-outline'}
                  size={24}
                  color={kayitliMi ? palet.birincil : palet.metin}
                />
              </Pressable>
            </View>
          </View>

          <Kapak tarif={tarif} boy={190} />

          {engeller.length > 0 ? (
            <View
              accessibilityRole="alert"
              style={{
                backgroundColor: palet.hata,
                borderRadius: Yaricap.m,
                padding: Bosluk.l,
                flexDirection: 'row',
                alignItems: 'center',
                gap: Bosluk.m,
              }}
            >
              <Ionicons name="warning" size={22} color="#FFFFFF" />
              <Yazi varyant="etiket" style={{ color: '#FFFFFF', flex: 1 }}>
                Bu tarif yiyemediklerinden {engeller.join(', ')} içeriyor.
              </Yazi>
            </View>
          ) : null}

          <View style={{ gap: Bosluk.s }}>
            <Yazi varyant="devBaslik">{tarif.baslik}</Yazi>
            <Yazi varyant="govde" renk="metinIkincil">
              {tarif.altBaslik}
            </Yazi>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.s }}>
              {tarif.editorOnayli ? <Rozet metin="Editör Onaylı ✓" ton="ikincil" /> : null}
              <Rozet metin={kategoriAdi(tarif.kategori)} />
              <Rozet metin={`⏱ ${sure} dk`} />
              <Rozet metin={zorlukYazi(tarif.zorluk)} />
              <Rozet metin={`${tarif.kaloriPerPorsiyon} kcal/porsiyon`} />
              <Rozet metin={`${maliyetYazi(maliyet)}/porsiyon`} ton="amber" />
              {tarif.beslenmeEtiketleri.map((b) => (
                <Rozet key={b} metin={b} ton="ikincil" />
              ))}
            </View>
          </View>

          {/* Porsiyon + ölçü değiştirici */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: palet.kart,
              borderRadius: Yaricap.m,
              borderWidth: 1,
              borderColor: palet.cizgi,
              padding: Bosluk.m,
              gap: Bosluk.m,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.m, flex: 1 }}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Porsiyonu azalt"
                onPress={() => setPorsiyon((p) => Math.max(1, p - 1))}
                style={{
                  width: DokunmaHedefi,
                  height: DokunmaHedefi,
                  borderRadius: Yaricap.s,
                  backgroundColor: palet.kartIkincil,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="remove" size={22} color={palet.metin} />
              </Pressable>
              <View style={{ alignItems: 'center' }}>
                <Yazi varyant="altBaslik">{porsiyon}</Yazi>
                <Yazi varyant="kucuk" renk="metinIkincil">
                  porsiyon
                </Yazi>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Porsiyonu artır"
                onPress={() => setPorsiyon((p) => Math.min(24, p + 1))}
                style={{
                  width: DokunmaHedefi,
                  height: DokunmaHedefi,
                  borderRadius: Yaricap.s,
                  backgroundColor: palet.kartIkincil,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="add" size={22} color={palet.metin} />
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
              <Cip baslik="Ölçü" secili={!gramModu} onPress={() => setGramModu(false)} />
              <Cip baslik="Gram" secili={gramModu} onPress={() => setGramModu(true)} />
            </View>
          </View>

          {/* Malzemeler */}
          <View style={{ gap: Bosluk.m }}>
            <Yazi varyant="baslik">Malzemeler</Yazi>
            {gruplar.map((grup) => (
              <View key={grup} style={{ gap: Bosluk.s }}>
                {gruplar.length > 1 ? (
                  <Yazi varyant="etiket" renk="metinIkincil">
                    {grup}
                  </Yazi>
                ) : null}
                {tarif.malzemeler.map((m, i) => {
                  if ((m.grup ?? 'Malzemeler') !== grup) return null;
                  const isaretli = isaretliler.has(i);
                  return (
                    <Pressable
                      key={i}
                      accessibilityRole="checkbox"
                      accessibilityState={{ checked: isaretli }}
                      accessibilityLabel={`${satirYazi(i)} ${m.ad}`}
                      onPress={() =>
                        setIsaretliler((s) => {
                          const yeni = new Set(s);
                          if (yeni.has(i)) yeni.delete(i);
                          else yeni.add(i);
                          return yeni;
                        })
                      }
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: Bosluk.m,
                        minHeight: DokunmaHedefi,
                        backgroundColor: palet.kart,
                        borderRadius: Yaricap.s,
                        borderWidth: 1,
                        borderColor: palet.cizgi,
                        paddingHorizontal: Bosluk.m,
                        paddingVertical: Bosluk.s,
                      }}
                    >
                      <Ionicons
                        name={isaretli ? 'checkbox' : 'square-outline'}
                        size={22}
                        color={isaretli ? palet.ikincil : palet.metinIkincil}
                      />
                      <View style={{ flex: 1 }}>
                        <Yazi
                          varyant="govde"
                          style={isaretli ? { textDecorationLine: 'line-through', opacity: 0.6 } : undefined}
                        >
                          <Yazi varyant="altBaslik">{satirYazi(i)}</Yazi> {m.ad}
                          {m.not ? ` (${m.not})` : ''}
                        </Yazi>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            ))}
            <Buton
              baslik="Eksikleri alışveriş listesine ekle"
              varyant="yumusak"
              onPress={eksikleriListeyeEkle}
            />
          </View>

          {/* Adım önizleme */}
          <View style={{ gap: Bosluk.m }}>
            <Yazi varyant="baslik">Adımlar ({tarif.adimlar.length})</Yazi>
            {tarif.adimlar.map((a, i) => (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  gap: Bosluk.m,
                  backgroundColor: palet.kart,
                  borderRadius: Yaricap.s,
                  borderWidth: 1,
                  borderColor: palet.cizgi,
                  padding: Bosluk.m,
                }}
              >
                <Yazi varyant="altBaslik" style={{ color: palet.birincil, width: 24 }}>
                  {i + 1}
                </Yazi>
                <View style={{ flex: 1, gap: 2 }}>
                  <Yazi varyant="altBaslik">{a.baslik}</Yazi>
                  <Yazi varyant="kucuk" renk="metinIkincil" numberOfLines={2}>
                    {a.aciklama}
                  </Yazi>
                  {a.sureSn ? (
                    <Rozet metin={`⏲ ${Math.round(a.sureSn / 60)} dk`} ton="birincil" />
                  ) : null}
                </View>
              </View>
            ))}
          </View>

          {tarif.pufNoktasi ? (
            <View
              style={{
                backgroundColor: palet.amberYumusak,
                borderRadius: Yaricap.m,
                padding: Bosluk.l,
                gap: Bosluk.xs,
              }}
            >
              <Yazi varyant="etiket" style={{ color: palet.amber }}>
                💡 Püf noktası
              </Yazi>
              <Yazi varyant="govde">{tarif.pufNoktasi}</Yazi>
            </View>
          ) : null}
        </View>
      </ScrollView>

      {/* Sabit alt buton */}
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: Bosluk.l,
          paddingBottom: insets.bottom + Bosluk.m,
          backgroundColor: palet.zemin,
          borderTopWidth: 1,
          borderTopColor: palet.cizgi,
        }}
      >
        <Buton
          baslik="🔥 PİŞİRMEYE BAŞLA"
          buyuk
          onPress={() => router.push({ pathname: '/pisirme/[id]', params: { id: tarif.id, porsiyon: String(porsiyon) } })}
        />
      </View>
    </Ekran>
  );
}
