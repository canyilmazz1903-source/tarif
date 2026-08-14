import Ionicons from '@expo/vector-icons/Ionicons';
import * as Haptics from 'expo-haptics';
import { useKeepAwake } from 'expo-keep-awake';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BosDurum } from '@/components/BosDurum';
import { Kapak } from '@/components/TarifKarti';
import { Buton } from '@/components/ui/Buton';
import { Ekran } from '@/components/ui/Ekran';
import { Rozet } from '@/components/ui/Rozet';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, DokunmaHedefi, PisirmeDokunmaHedefi, Yaricap } from '@/constants/theme';
import { tarifBul } from '@/data/tarifler';
import { useTema } from '@/hooks/use-tema';
import { normalize } from '@/lib/ara';
import { miktarYazi, porsiyonla } from '@/lib/olcu-motoru';
import { useAyarlar, type PisirmeGorunumu } from '@/stores/ayarlar';
import { useKayitli } from '@/stores/kayitli';
import { kalanSaniye, useSayac } from '@/stores/sayac';
import type { Tarif, TarifAdim } from '@/types/tarif';

function sureYazi(sn: number): string {
  const dk = Math.floor(sn / 60);
  const kalan = sn % 60;
  return `${String(dk).padStart(2, '0')}:${String(kalan).padStart(2, '0')}`;
}

/**
 * Gömülü zamanlayıcı — doğruluk kaynağı persist store'daki bitiş timestamp'i.
 * Kilit/arka plan sonrası kalan süre yeniden hesaplanır; bildirim store'da kurulur.
 */
function Sayac({ tarif, adimIdx, adim, kucuk = false }: { tarif: Tarif; adimIdx: number; adim: TarifAdim; kucuk?: boolean }) {
  const { palet } = useTema();
  const sayac = useSayac();
  const [, tikla] = useState(0);

  const durum = kalanSaniye(sayac, tarif.id, adimIdx);
  const calisiyor = durum?.calisiyor ?? false;

  useEffect(() => {
    if (!calisiyor) return;
    const i = setInterval(() => tikla((x) => x + 1), 500);
    return () => clearInterval(i);
  }, [calisiyor]);

  if (!adim.sureSn) return null;
  const kalan = durum?.kalan ?? adim.sureSn;
  const doldu = durum != null && kalan === 0;

  const basDurdur = () => {
    Haptics.selectionAsync();
    if (durum == null) {
      sayac.baslat(tarif.id, adimIdx, adim.sureSn ?? 0, adim.baslik);
    } else if (calisiyor) {
      sayac.duraklat();
    } else if (kalan > 0) {
      sayac.devamEt(adim.baslik);
    } else {
      sayac.sifirla();
    }
  };

  if (kucuk) {
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Zamanlayıcı ${sureYazi(kalan)}`}
        onPress={basDurdur}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          backgroundColor: doldu ? palet.ikincilYumusak : palet.birincilYumusak,
          borderRadius: Yaricap.tam,
          paddingHorizontal: Bosluk.m,
          minHeight: 36,
          alignSelf: 'flex-start',
        }}
      >
        <Ionicons
          name={doldu ? 'checkmark' : calisiyor ? 'pause' : 'play'}
          size={14}
          color={doldu ? palet.ikincil : palet.birincil}
        />
        <Yazi varyant="etiket" style={{ color: doldu ? palet.ikincil : palet.birincil }}>
          {doldu ? 'Doldu' : sureYazi(kalan)}
        </Yazi>
      </Pressable>
    );
  }

  return (
    <View
      style={{
        backgroundColor: doldu ? palet.ikincilYumusak : palet.birincilYumusak,
        borderRadius: Yaricap.m,
        padding: Bosluk.l,
        alignItems: 'center',
        gap: Bosluk.m,
      }}
    >
      <Yazi
        varyant="devBaslik"
        style={{ fontSize: 44, lineHeight: 52, color: doldu ? palet.ikincil : palet.birincil }}
      >
        {doldu ? 'Süre doldu ✓' : sureYazi(kalan)}
      </Yazi>
      {!doldu ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={calisiyor ? 'Zamanlayıcıyı duraklat' : 'Zamanlayıcıyı başlat'}
          onPress={basDurdur}
          style={{
            minHeight: PisirmeDokunmaHedefi,
            minWidth: 200,
            borderRadius: Yaricap.m,
            backgroundColor: palet.birincil,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: Bosluk.s,
          }}
        >
          <Ionicons name={calisiyor ? 'pause' : 'play'} size={22} color="#FFFFFF" />
          <Yazi varyant="altBaslik" style={{ color: '#FFFFFF' }}>
            {calisiyor ? 'Duraklat' : durum ? 'Devam et' : 'Zamanlayıcıyı başlat'}
          </Yazi>
        </Pressable>
      ) : (
        <Yazi varyant="kucuk" renk="metinIkincil">
          Kilitliyken de bildirim geldi — sıradaki adıma geçebilirsin.
        </Yazi>
      )}
    </View>
  );
}

export default function PisirmeModu() {
  useKeepAwake();
  const { id, porsiyon: porsiyonParam } = useLocalSearchParams<{ id: string; porsiyon?: string }>();
  const tarif = tarifBul(id ?? '');
  const { palet } = useTema();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const kayitli = useKayitli();
  const ayarlar = useAyarlar();
  const sayacSifirla = useSayac((s) => s.sifirla);

  const [gorunum, setGorunum] = useState<PisirmeGorunumu>(ayarlar.pisirmeGorunumu);
  const [balonAcik, setBalonAcik] = useState(!ayarlar.pisirmeGorunumuSoruldu);
  const [adimIdx, setAdimIdx] = useState(0);
  const [bitti, setBitti] = useState(false);
  const [isaretliler, setIsaretliler] = useState<Set<number>>(new Set());
  const pager = useRef<PagerView>(null);

  const porsiyon = Number(porsiyonParam) || tarif?.porsiyon || 4;

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const adim = tarif?.adimlar[adimIdx];

  const adimMalzemeleri = useMemo(() => {
    if (!tarif || !adim) return [];
    const metin = normalize(`${adim.baslik} ${adim.aciklama}`);
    return tarif.malzemeler.filter((m) => {
      const kok = normalize(m.ad).split(' ')[0];
      return kok.length >= 3 && metin.includes(kok.slice(0, Math.max(4, kok.length - 2)));
    });
  }, [tarif, adim]);

  if (!tarif || !adim) {
    return (
      <Ekran>
        <BosDurum emoji="🤔" baslik="Tarif bulunamadı" aciklama="Pişirme modu açılamadı." />
      </Ekran>
    );
  }

  const son = adimIdx === tarif.adimlar.length - 1;

  const adimaGit = (i: number) => {
    Haptics.selectionAsync();
    Speech.stop();
    setAdimIdx(i);
    pager.current?.setPage(i);
  };

  const ileri = () => {
    if (son) {
      Speech.stop();
      sayacSifirla();
      setBitti(true);
    } else {
      adimaGit(adimIdx + 1);
    }
  };

  const sesliOku = () => {
    Speech.stop();
    Speech.speak(`${adim.baslik}. ${adim.aciklama}`, { language: 'tr-TR' });
  };

  const malzemeToggle = (i: number) =>
    setIsaretliler((s) => {
      const yeni = new Set(s);
      if (yeni.has(i)) yeni.delete(i);
      else yeni.add(i);
      return yeni;
    });

  if (bitti) {
    return (
      <Ekran>
        <View style={{ flex: 1, justifyContent: 'center', padding: Bosluk.xl, gap: Bosluk.l }}>
          <BosDurum
            emoji="🎉"
            baslik="Afiyet olsun!"
            aciklama={`${tarif.baslik} hazır. Beğendiysen deftere kaydet, bir dahaki sefere elinin altında olsun.`}
          />
          {!kayitli.kayitliMi(tarif.id) ? (
            <Buton baslik="🔖 Deftere kaydet" varyant="yumusak" onPress={() => kayitli.kaydet(tarif.id)} />
          ) : (
            <Buton baslik="✓ Defterinde kayıtlı" varyant="yumusak" onPress={() => {}} disabled />
          )}
          <Buton baslik="Kapat" buyuk onPress={() => router.dismissTo('/(tabs)')} />
        </View>
      </Ekran>
    );
  }

  return (
    <Ekran>
      <View style={{ flex: 1, paddingTop: Bosluk.s }}>
        {/* Üst bar: kapat · mod segmenti · sesli oku */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: Bosluk.l,
          }}
        >
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Pişirme modundan çık"
            onPress={() => {
              Speech.stop();
              sayacSifirla();
              router.back();
            }}
            style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, justifyContent: 'center' }}
          >
            <Ionicons name="close" size={28} color={palet.metin} />
          </Pressable>

          {/* Mod geçişi: durum (adım/işaretler) korunur */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: palet.kartIkincil,
              borderRadius: Yaricap.tam,
              padding: 3,
            }}
          >
            {(
              [
                { key: 'sayfa', ad: '☰ Sayfa' },
                { key: 'adim', ad: '▸ Adım' },
              ] as Array<{ key: PisirmeGorunumu; ad: string }>
            ).map((m) => (
              <Pressable
                key={m.key}
                accessibilityRole="button"
                accessibilityState={{ selected: gorunum === m.key }}
                accessibilityLabel={`${m.ad} görünümü`}
                onPress={() => setGorunum(m.key)}
                style={{
                  paddingHorizontal: Bosluk.l,
                  minHeight: 38,
                  borderRadius: Yaricap.tam,
                  backgroundColor: gorunum === m.key ? palet.kart : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Yazi varyant="etiket" renk={gorunum === m.key ? 'metin' : 'metinIkincil'}>
                  {m.ad}
                </Yazi>
              </Pressable>
            ))}
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Adımı sesli oku"
            onPress={sesliOku}
            style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="volume-high-outline" size={26} color={palet.birincil} />
          </Pressable>
        </View>

        {/* İlk kullanım balonu */}
        {balonAcik ? (
          <View
            style={{
              marginHorizontal: Bosluk.l,
              marginTop: Bosluk.s,
              backgroundColor: palet.birincilYumusak,
              borderRadius: Yaricap.m,
              padding: Bosluk.l,
              gap: Bosluk.m,
            }}
          >
            <Yazi varyant="etiket" style={{ color: palet.birincil }}>
              Nasıl takip etmeyi seversin?
            </Yazi>
            <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
              <Buton
                baslik="☰ Tek sayfada"
                varyant="cizgili"
                style={{ flex: 1 }}
                onPress={() => {
                  ayarlar.setPisirmeGorunumu('sayfa');
                  setGorunum('sayfa');
                  setBalonAcik(false);
                }}
              />
              <Buton
                baslik="▸ Adım adım"
                varyant="cizgili"
                style={{ flex: 1 }}
                onPress={() => {
                  ayarlar.setPisirmeGorunumu('adim');
                  setGorunum('adim');
                  setBalonAcik(false);
                }}
              />
            </View>
          </View>
        ) : null}

        {gorunum === 'sayfa' ? (
          /* ————— SAYFA MODU: basılı tarif kartı estetiği, tek scroll ————— */
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: Bosluk.l, paddingBottom: insets.bottom + Bosluk.xxl, gap: Bosluk.l }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ flexDirection: 'row', gap: Bosluk.l, alignItems: 'center' }}>
              <View style={{ flex: 1, gap: 4 }}>
                <Yazi varyant="devBaslik">{tarif.baslik}</Yazi>
                <Yazi varyant="etiket" renk="metinIkincil">
                  {porsiyon} porsiyon · {tarif.hazirlikDk + tarif.pisirmeDk} dk
                </Yazi>
              </View>
              <View style={{ width: 84 }}>
                <Kapak tarif={tarif} boy={84} />
              </View>
            </View>

            <View
              style={{
                backgroundColor: palet.kart,
                borderRadius: Yaricap.m,
                borderWidth: 1,
                borderColor: palet.cizgi,
                padding: Bosluk.l,
                gap: Bosluk.s,
              }}
            >
              <Yazi varyant="baslik">Malzemeler</Yazi>
              {tarif.malzemeler.map((m, i) => (
                <Pressable
                  key={i}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: isaretliler.has(i) }}
                  accessibilityLabel={m.ad}
                  onPress={() => malzemeToggle(i)}
                  style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.m, minHeight: DokunmaHedefi }}
                >
                  <Ionicons
                    name={isaretliler.has(i) ? 'checkbox' : 'square-outline'}
                    size={24}
                    color={isaretliler.has(i) ? palet.ikincil : palet.metinIkincil}
                  />
                  <Yazi
                    varyant="govde"
                    style={[
                      { fontSize: 17, lineHeight: 26, flex: 1 },
                      isaretliler.has(i) ? { textDecorationLine: 'line-through', opacity: 0.55 } : null,
                    ]}
                  >
                    <Yazi varyant="altBaslik" style={{ fontSize: 17 }}>
                      {miktarYazi(porsiyonla(m.miktar, tarif.porsiyon, porsiyon), m.birim)}
                    </Yazi>{' '}
                    {m.ad}
                  </Yazi>
                </Pressable>
              ))}
            </View>

            <View style={{ gap: Bosluk.m }}>
              <Yazi varyant="baslik">Hazırlanışı</Yazi>
              {tarif.adimlar.map((a, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    gap: Bosluk.m,
                    backgroundColor: palet.kart,
                    borderRadius: Yaricap.m,
                    borderWidth: 1,
                    borderColor: palet.cizgi,
                    padding: Bosluk.l,
                  }}
                >
                  <Yazi varyant="devBaslik" style={{ color: palet.birincil, width: 34, fontSize: 24 }}>
                    {i + 1}
                  </Yazi>
                  <View style={{ flex: 1, gap: Bosluk.s }}>
                    <Yazi varyant="altBaslik" style={{ fontSize: 17 }}>
                      {a.baslik}
                    </Yazi>
                    <Yazi varyant="govde" style={{ fontSize: 17, lineHeight: 27 }}>
                      {a.aciklama}
                    </Yazi>
                    <Sayac tarif={tarif} adimIdx={i} adim={a} kucuk />
                  </View>
                </View>
              ))}
            </View>

            <Buton baslik="Bitir 🎉" buyuk onPress={() => { sayacSifirla(); setBitti(true); }} />
          </ScrollView>
        ) : (
          /* ————— ADIM ADIM MODU: pager + swipe ————— */
          <>
            <View style={{ flexDirection: 'row', gap: 6, justifyContent: 'center', paddingVertical: Bosluk.m }}>
              {tarif.adimlar.map((_, i) => (
                <View
                  key={i}
                  style={{
                    width: i === adimIdx ? 22 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: i <= adimIdx ? palet.birincil : palet.cizgi,
                  }}
                />
              ))}
            </View>

            <PagerView
              ref={pager}
              style={{ flex: 1 }}
              initialPage={0}
              onPageSelected={(e) => {
                const i = e.nativeEvent.position;
                if (i !== adimIdx) {
                  Speech.stop();
                  setAdimIdx(i);
                }
              }}
            >
              {tarif.adimlar.map((a, i) => (
                <ScrollView
                  key={i}
                  contentContainerStyle={{ paddingHorizontal: Bosluk.l, gap: Bosluk.l, paddingBottom: Bosluk.l }}
                  showsVerticalScrollIndicator={false}
                >
                  <View
                    style={{
                      backgroundColor: palet.kart,
                      borderRadius: Yaricap.l,
                      borderWidth: 1,
                      borderColor: palet.cizgi,
                      padding: Bosluk.xl,
                      gap: Bosluk.l,
                    }}
                  >
                    <Yazi varyant="etiket" style={{ color: palet.birincil }}>
                      Adım {i + 1} / {tarif.adimlar.length}
                    </Yazi>
                    <Yazi varyant="devBaslik">{a.baslik}</Yazi>
                    <Yazi varyant="govde" style={{ fontSize: 17, lineHeight: 26 }}>
                      {a.aciklama}
                    </Yazi>
                    {a.beklemeAdimi ? (
                      <Rozet metin="☕ Bekleme sırasında tezgahı toparla, bulaşıkları hallet" ton="amber" />
                    ) : null}
                    <Sayac tarif={tarif} adimIdx={i} adim={a} />
                  </View>

                  {i === adimIdx && adimMalzemeleri.length > 0 ? (
                    <View
                      style={{
                        backgroundColor: palet.kartIkincil,
                        borderRadius: Yaricap.m,
                        padding: Bosluk.l,
                        gap: Bosluk.s,
                      }}
                    >
                      <Yazi varyant="etiket" renk="metinIkincil">
                        Bu adımda kullanacakların
                      </Yazi>
                      {adimMalzemeleri.map((m, j) => (
                        <Yazi key={j} varyant="govde">
                          • {miktarYazi(porsiyonla(m.miktar, tarif.porsiyon, porsiyon), m.birim)} {m.ad}
                        </Yazi>
                      ))}
                    </View>
                  ) : null}
                </ScrollView>
              ))}
            </PagerView>

            {/* Alt navigasyon — unlu parmak dostu ≥64pt; swipe de çalışır */}
            <View
              style={{
                flexDirection: 'row',
                gap: Bosluk.m,
                paddingHorizontal: Bosluk.l,
                paddingBottom: insets.bottom + Bosluk.s,
                paddingTop: Bosluk.s,
              }}
            >
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Önceki adım"
                onPress={() => adimaGit(Math.max(0, adimIdx - 1))}
                disabled={adimIdx === 0}
                style={{
                  minHeight: PisirmeDokunmaHedefi,
                  width: 90,
                  borderRadius: Yaricap.m,
                  backgroundColor: palet.kartIkincil,
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: adimIdx === 0 ? 0.4 : 1,
                }}
              >
                <Ionicons name="chevron-back" size={28} color={palet.metin} />
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={son ? 'Bitir' : 'Sıradaki adım'}
                onPress={ileri}
                style={{
                  flex: 1,
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
                  {son ? 'Bitir 🎉' : 'Sıradaki adım'}
                </Yazi>
                {!son ? <Ionicons name="chevron-forward" size={24} color="#FFFFFF" /> : null}
              </Pressable>
            </View>
          </>
        )}
      </View>
    </Ekran>
  );
}
