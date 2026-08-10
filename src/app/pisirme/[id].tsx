import Ionicons from '@expo/vector-icons/Ionicons';
import * as Haptics from 'expo-haptics';
import { useKeepAwake } from 'expo-keep-awake';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BosDurum } from '@/components/BosDurum';
import { Buton } from '@/components/ui/Buton';
import { Ekran } from '@/components/ui/Ekran';
import { Rozet } from '@/components/ui/Rozet';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, PisirmeDokunmaHedefi, Yaricap } from '@/constants/theme';
import { tarifBul } from '@/data/tarifler';
import { useTema } from '@/hooks/use-tema';
import { normalize } from '@/lib/ara';
import { miktarYazi, porsiyonla } from '@/lib/olcu-motoru';
import { useKayitli } from '@/stores/kayitli';

function sureYazi(sn: number): string {
  const dk = Math.floor(sn / 60);
  const kalan = sn % 60;
  return `${String(dk).padStart(2, '0')}:${String(kalan).padStart(2, '0')}`;
}

export default function PisirmeModu() {
  useKeepAwake();
  const { id, porsiyon: porsiyonParam } = useLocalSearchParams<{ id: string; porsiyon?: string }>();
  const tarif = tarifBul(id ?? '');
  const { palet } = useTema();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const kayitli = useKayitli();

  const [adimIdx, setAdimIdx] = useState(0);
  const [bitti, setBitti] = useState(false);
  const [kalanSn, setKalanSn] = useState<number | null>(null);
  const [sayacCalisiyor, setSayacCalisiyor] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const porsiyon = Number(porsiyonParam) || tarif?.porsiyon || 4;
  const adim = tarif?.adimlar[adimIdx];

  // Adım değişince zamanlayıcıyı sıfırla, okumayı durdur.
  useEffect(() => {
    setKalanSn(adim?.sureSn ?? null);
    setSayacCalisiyor(false);
    Speech.stop();
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [adimIdx, adim?.sureSn]);

  // Geri sayım.
  useEffect(() => {
    if (!sayacCalisiyor) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(() => {
      setKalanSn((s) => {
        if (s == null) return s;
        if (s <= 1) {
          setSayacCalisiyor(false);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [sayacCalisiyor]);

  // Bu adımda geçen malzemeler (adım metniyle eşleştir).
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

  const ileri = () => {
    Haptics.selectionAsync();
    if (son) {
      Speech.stop();
      setBitti(true);
    } else {
      setAdimIdx((i) => i + 1);
    }
  };

  const geri = () => {
    Haptics.selectionAsync();
    if (adimIdx > 0) setAdimIdx((i) => i - 1);
  };

  const sesliOku = () => {
    Speech.stop();
    Speech.speak(`${adim.baslik}. ${adim.aciklama}`, { language: 'tr-TR' });
  };

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
      <View style={{ flex: 1, padding: Bosluk.l, gap: Bosluk.l }}>
        {/* Üst bar */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Pişirme modundan çık"
            onPress={() => {
              Speech.stop();
              router.back();
            }}
            style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}
          >
            <Ionicons name="close" size={28} color={palet.metin} />
          </Pressable>
          <Yazi varyant="etiket" renk="metinIkincil">
            {tarif.baslik}
          </Yazi>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Adımı sesli oku"
            onPress={sesliOku}
            style={{ minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="volume-high-outline" size={26} color={palet.birincil} />
          </Pressable>
        </View>

        {/* İlerleme noktaları */}
        <View style={{ flexDirection: 'row', gap: 6, justifyContent: 'center' }}>
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

        {/* Adım kartı */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ gap: Bosluk.l }}
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
              Adım {adimIdx + 1} / {tarif.adimlar.length}
            </Yazi>
            <Yazi varyant="devBaslik">{adim.baslik}</Yazi>
            <Yazi varyant="govde" style={{ fontSize: 17, lineHeight: 26 }}>
              {adim.aciklama}
            </Yazi>

            {adim.beklemeAdimi ? (
              <Rozet metin="☕ Bekleme sırasında tezgahı toparla, bulaşıkları hallet" ton="amber" />
            ) : null}

            {/* Gömülü zamanlayıcı */}
            {adim.sureSn ? (
              <View
                style={{
                  backgroundColor: kalanSn === 0 ? palet.ikincilYumusak : palet.birincilYumusak,
                  borderRadius: Yaricap.m,
                  padding: Bosluk.l,
                  alignItems: 'center',
                  gap: Bosluk.m,
                }}
              >
                <Yazi
                  varyant="devBaslik"
                  style={{ fontSize: 44, lineHeight: 52, color: kalanSn === 0 ? palet.ikincil : palet.birincil }}
                >
                  {kalanSn === 0 ? 'Süre doldu ✓' : sureYazi(kalanSn ?? adim.sureSn)}
                </Yazi>
                {kalanSn !== 0 ? (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={sayacCalisiyor ? 'Zamanlayıcıyı duraklat' : 'Zamanlayıcıyı başlat'}
                    onPress={() => {
                      Haptics.selectionAsync();
                      setSayacCalisiyor((c) => !c);
                    }}
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
                    <Ionicons name={sayacCalisiyor ? 'pause' : 'play'} size={22} color="#FFFFFF" />
                    <Yazi varyant="altBaslik" style={{ color: '#FFFFFF' }}>
                      {sayacCalisiyor ? 'Duraklat' : 'Zamanlayıcıyı başlat'}
                    </Yazi>
                  </Pressable>
                ) : null}
              </View>
            ) : null}
          </View>

          {/* Bu adımın malzemeleri */}
          {adimMalzemeleri.length > 0 ? (
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
              {adimMalzemeleri.map((m, i) => (
                <Yazi key={i} varyant="govde">
                  • {miktarYazi(porsiyonla(m.miktar, tarif.porsiyon, porsiyon), m.birim)} {m.ad}
                </Yazi>
              ))}
            </View>
          ) : null}
        </ScrollView>

        {/* Alt navigasyon — unlu parmak dostu ≥64pt */}
        <View style={{ flexDirection: 'row', gap: Bosluk.m, paddingBottom: insets.bottom }}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Önceki adım"
            onPress={geri}
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
      </View>
    </Ekran>
  );
}
