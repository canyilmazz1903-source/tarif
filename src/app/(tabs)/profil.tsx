import { ScrollView, View } from 'react-native';

import { Cip } from '@/components/ui/Cip';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, Yaricap } from '@/constants/theme';
import { TARIFLER } from '@/data/tarifler';
import { useTema } from '@/hooks/use-tema';
import { useAyarlar, type TemaModu } from '@/stores/ayarlar';
import { useDolap } from '@/stores/dolap';
import { useKayitli } from '@/stores/kayitli';
import type { BeslenmeEtiketi } from '@/types/tarif';

const TEMALAR: Array<{ key: TemaModu; ad: string }> = [
  { key: 'sistem', ad: 'Sistem' },
  { key: 'acik', ad: 'Açık' },
  { key: 'koyu', ad: 'Koyu' },
];

const BESLENMELER: Array<{ key: BeslenmeEtiketi; ad: string }> = [
  { key: 'vegan', ad: 'Vegan' },
  { key: 'vejetaryen', ad: 'Vejetaryen' },
  { key: 'glutensiz', ad: 'Glutensiz' },
  { key: 'laktozsuz', ad: 'Laktozsuz' },
  { key: 'diyabetik-dostu', ad: 'Diyabetik dostu' },
];

function Kutu({ baslik, children }: { baslik: string; children: React.ReactNode }) {
  const { palet } = useTema();
  return (
    <View
      style={{
        backgroundColor: palet.kart,
        borderRadius: Yaricap.m,
        borderWidth: 1,
        borderColor: palet.cizgi,
        padding: Bosluk.l,
        gap: Bosluk.m,
      }}
    >
      <Yazi varyant="altBaslik">{baslik}</Yazi>
      {children}
    </View>
  );
}

export default function Profil() {
  const { palet } = useTema();
  const ayarlar = useAyarlar();
  const kayitliSayisi = useKayitli((s) => Object.values(s.listeler).flat().length);
  const dolapSayisi = useDolap((s) => s.malzemeler.length);

  return (
    <Ekran>
      <ScrollView
        contentContainerStyle={{ padding: Bosluk.l, paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
        showsVerticalScrollIndicator={false}
      >
        <Yazi varyant="devBaslik">Profil</Yazi>

        <View style={{ flexDirection: 'row', gap: Bosluk.m }}>
          {[
            { sayi: TARIFLER.length, ad: 'tarif' },
            { sayi: kayitliSayisi, ad: 'kayıtlı' },
            { sayi: dolapSayisi, ad: 'dolapta' },
          ].map((x) => (
            <View
              key={x.ad}
              style={{
                flex: 1,
                backgroundColor: palet.birincilYumusak,
                borderRadius: Yaricap.m,
                padding: Bosluk.l,
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Yazi varyant="baslik" style={{ color: palet.birincil }}>
                {x.sayi}
              </Yazi>
              <Yazi varyant="kucuk" renk="metinIkincil">
                {x.ad}
              </Yazi>
            </View>
          ))}
        </View>

        <Kutu baslik="🎨 Tema">
          <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
            {TEMALAR.map((t) => (
              <Cip
                key={t.key}
                baslik={t.ad}
                secili={ayarlar.temaModu === t.key}
                onPress={() => ayarlar.setTemaModu(t.key)}
              />
            ))}
          </View>
        </Kutu>

        <Kutu baslik="🥗 Beslenme tercihlerin">
          <Yazi varyant="kucuk" renk="metinIkincil">
            Öneriler ve arama sonuçları tercihlerine göre şekillenir.
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
        </Kutu>

        <Kutu baslik="ℹ️ Tencere hakkında">
          <Yazi varyant="govde" renk="metinIkincil">
            Tencere; "Bugün ne pişirsem?" sorusunu 10 saniyede cevaplayan, mutfakta eller serbest
            kullanılan, israfı ve maliyeti düşünen tarif uygulamasıdır.
          </Yazi>
          <Yazi varyant="kucuk" renk="metinIkincil">
            • 50 denenmiş, ölçülü tarif — tamamı internetsiz çalışır{'\n'}
            • Ölçü motoru: su bardağı ↔ gram dönüşümü{'\n'}
            • Pişirme Modu: kararmayan ekran + adım zamanlayıcıları{'\n'}
            • Sürüm 1.0.0
          </Yazi>
        </Kutu>
      </ScrollView>
    </Ekran>
  );
}
