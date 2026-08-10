import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Buton } from '@/components/ui/Buton';
import { Cip } from '@/components/ui/Cip';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';
import { useAyarlar } from '@/stores/ayarlar';
import type { BeslenmeEtiketi } from '@/types/tarif';

const BESLENMELER: Array<{ key: BeslenmeEtiketi; ad: string }> = [
  { key: 'vegan', ad: '🌱 Vegan' },
  { key: 'vejetaryen', ad: '🥕 Vejetaryen' },
  { key: 'glutensiz', ad: '🌾 Glutensiz' },
  { key: 'laktozsuz', ad: '🥛 Laktozsuz' },
  { key: 'diyabetik-dostu', ad: '🍬 Diyabetik dostu' },
];

export default function Onboarding() {
  const { palet } = useTema();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const ayarlar = useAyarlar();
  const [sayfa, setSayfa] = useState(0);

  const bitir = () => {
    ayarlar.setOnboardingTamam();
    router.replace('/(tabs)');
  };

  return (
    <Ekran>
      <View
        style={{
          flex: 1,
          padding: Bosluk.xl,
          paddingBottom: insets.bottom + Bosluk.xl,
          justifyContent: 'space-between',
        }}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Tanıtımı atla"
          onPress={bitir}
          style={{ alignSelf: 'flex-end', minHeight: 44, justifyContent: 'center' }}
        >
          <Yazi varyant="etiket" renk="metinIkincil">
            Atla
          </Yazi>
        </Pressable>

        {sayfa === 0 ? (
          <View style={{ gap: Bosluk.l, alignItems: 'center' }}>
            <Yazi style={{ fontSize: 80, lineHeight: 96 }}>🍲</Yazi>
            <Yazi varyant="devBaslik" style={{ textAlign: 'center' }}>
              Bugün ne pişirsem?
            </Yazi>
            <Yazi varyant="govde" renk="metinIkincil" style={{ textAlign: 'center', fontSize: 17, lineHeight: 26 }}>
              10 saniyede cevap. Klasiklerden yeni nesil sokak lezzetlerine 100'den fazla
              denenmiş, ölçülü tarif — hepsi internetsiz çalışır. Eller hamurluyken bile
              kullanılan Pişirme Modu ile.
            </Yazi>
          </View>
        ) : (
          <View style={{ gap: Bosluk.l }}>
            <Yazi varyant="devBaslik">Beslenme tercihin var mı?</Yazi>
            <Yazi varyant="govde" renk="metinIkincil">
              Önerileri sana göre ayarlayalım. İstersen atlayabilirsin; sonra Profil'den
              değiştirilir.
            </Yazi>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.s }}>
              {BESLENMELER.map((b) => (
                <Cip
                  key={b.key}
                  baslik={b.ad}
                  secili={ayarlar.beslenmeTercihleri.includes(b.key)}
                  onPress={() => ayarlar.toggleBeslenme(b.key)}
                />
              ))}
            </View>
          </View>
        )}

        <View style={{ gap: Bosluk.m }}>
          <View style={{ flexDirection: 'row', gap: 6, justifyContent: 'center' }}>
            {[0, 1].map((i) => (
              <View
                key={i}
                style={{
                  width: i === sayfa ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: i === sayfa ? palet.birincil : palet.cizgi,
                }}
              />
            ))}
          </View>
          <Buton
            baslik={sayfa === 0 ? 'Devam' : 'Mutfağa gir 🔥'}
            buyuk
            onPress={() => (sayfa === 0 ? setSayfa(1) : bitir())}
          />
        </View>
      </View>
    </Ekran>
  );
}
