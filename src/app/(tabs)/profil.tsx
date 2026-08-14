import { useMemo, useState } from 'react';
import { ScrollView, Switch, TextInput, View } from 'react-native';

import { Cip } from '@/components/ui/Cip';
import { MALZEMELER } from '@/data/malzemeler';
import { normalize } from '@/lib/ara';
import { KACINMA_GRUPLARI } from '@/lib/alerji';
import { Font } from '@/constants/theme';
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
  const [malzemeAra, setMalzemeAra] = useState('');

  // Arama boşken yalnız seçilenler görünür; aramada sözlükten eşleşenler listelenir.
  const yiyemedikleriListesi = useMemo(() => {
    const q = normalize(malzemeAra.trim());
    if (!q) return ayarlar.yiyemedikleri;
    const eslesenler = MALZEMELER.filter((m) => normalize(m.ad).includes(q))
      .map((m) => m.ad)
      .slice(0, 12);
    return [...new Set([...ayarlar.yiyemedikleri, ...eslesenler])];
  }, [malzemeAra, ayarlar.yiyemedikleri]);

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

        <Kutu baslik="🚫 Yiyemediklerim">
          <Yazi varyant="kucuk" renk="metinIkincil">
            Seçtiklerini içeren tarifler hiçbir listede görünmez; paylaşılan linkler uyarıyla
            açılır.
          </Yazi>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.s }}>
            {KACINMA_GRUPLARI.map((g) => (
              <Cip
                key={g.key}
                baslik={g.ad}
                secili={ayarlar.kacinmaGruplari.includes(g.key)}
                onPress={() => ayarlar.toggleKacinmaGrubu(g.key)}
              />
            ))}
          </View>
          <TextInput
            value={malzemeAra}
            onChangeText={setMalzemeAra}
            placeholder="Malzeme ara ve ekle…"
            placeholderTextColor={palet.metinIkincil}
            style={{
              backgroundColor: palet.kartIkincil,
              borderRadius: Yaricap.s,
              paddingHorizontal: Bosluk.m,
              minHeight: 44,
              color: palet.metin,
              fontFamily: Font.govde,
            }}
          />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.s }}>
            {yiyemedikleriListesi.map((ad) => (
              <Cip
                key={ad}
                baslik={ayarlar.yiyemedikleri.includes(ad) ? `${ad} ✕` : ad}
                secili={ayarlar.yiyemedikleri.includes(ad)}
                onPress={() => ayarlar.toggleYiyemedigi(ad)}
              />
            ))}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.m }}>
            <View style={{ flex: 1 }}>
              <Yazi varyant="etiket">Filtre açık</Yazi>
              <Yazi varyant="kucuk" renk="metinIkincil">
                Misafir için pişiriyorsan geçici kapatabilirsin.
              </Yazi>
            </View>
            <Switch
              value={ayarlar.alerjiFiltresiAcik}
              onValueChange={ayarlar.setAlerjiFiltresiAcik}
              trackColor={{ true: palet.birincil, false: palet.cizgi }}
              accessibilityLabel="Yiyemediklerim filtresi"
            />
          </View>
        </Kutu>

        <Kutu baslik="🍳 Pişirme görünümü">
          <Yazi varyant="kucuk" renk="metinIkincil">
            Tarifleri nasıl takip etmeyi seversin? Her tarifte geçici değiştirilebilir.
          </Yazi>
          <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
            <Cip
              baslik="▸ Adım Adım"
              secili={ayarlar.pisirmeGorunumu === 'adim'}
              onPress={() => ayarlar.setPisirmeGorunumu('adim')}
            />
            <Cip
              baslik="☰ Sayfa"
              secili={ayarlar.pisirmeGorunumu === 'sayfa'}
              onPress={() => ayarlar.setPisirmeGorunumu('sayfa')}
            />
          </View>
        </Kutu>

        <Kutu baslik="ℹ️ Tencere hakkında">
          <Yazi varyant="govde" renk="metinIkincil">
            Tencere; "Bugün ne pişirsem?" sorusunu 10 saniyede cevaplayan, mutfakta eller serbest
            kullanılan, israfı ve maliyeti düşünen tarif uygulamasıdır.
          </Yazi>
          <Yazi varyant="kucuk" renk="metinIkincil">
            • {TARIFLER.length} denenmiş, ölçülü tarif — tamamı internetsiz çalışır{'\n'}
            • Klasik Türk mutfağı + Yeni Nesil Mutfak paketi{'\n'}
            • Ölçü motoru: su bardağı ↔ gram dönüşümü{'\n'}
            • Pişirme Modu: kararmayan ekran + adım zamanlayıcıları{'\n'}
            • Sürüm 1.1.0
          </Yazi>
        </Kutu>
      </ScrollView>
    </Ekran>
  );
}
