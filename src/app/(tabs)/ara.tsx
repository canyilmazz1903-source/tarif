import { useMemo, useState } from 'react';
import { FlatList, ScrollView, TextInput, View } from 'react-native';

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
import { artaniDegerlendir, dolaptaNeVar, normalize, tarifAra, type AramaFiltresi } from '@/lib/ara';
import { useDolap } from '@/stores/dolap';
import type { BeslenmeEtiketi, Kategori, Zorluk } from '@/types/tarif';

type Mod = 'ara' | 'dolap';

const BESLENMELER: BeslenmeEtiketi[] = ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'];
const SURELER = [20, 40, 60] as const;
const ZORLUKLAR: Zorluk[] = ['kolay', 'orta', 'zor'];

export default function Ara() {
  const { palet } = useTema();
  const [mod, setMod] = useState<Mod>('ara');
  const [sorgu, setSorgu] = useState('');
  const [filtre, setFiltre] = useState<AramaFiltresi>({});
  const [artanModu, setArtanModu] = useState(false);
  const dolap = useDolap();

  const sonuclar = useMemo(() => tarifAra(TARIFLER, sorgu, filtre), [sorgu, filtre]);
  const dolapSonuclari = useMemo(
    () =>
      dolap.malzemeler.length === 0
        ? []
        : artanModu
          ? artaniDegerlendir(TARIFLER, dolap.malzemeler)
          : dolaptaNeVar(TARIFLER, dolap.malzemeler),
    [dolap.malzemeler, artanModu],
  );

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
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.s }}>
                <Yazi varyant="altBaslik" style={{ flex: 1 }}>
                  Dolabındakiler ({dolap.malzemeler.length})
                </Yazi>
                <Cip
                  baslik="♻️ Elimde kalan var"
                  secili={artanModu}
                  onPress={() => setArtanModu((a) => !a)}
                />
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Bosluk.s }}>
                {malzemeArama.slice(0, 40).map((m) => (
                  <Cip
                    key={m.ad}
                    baslik={m.ad}
                    secili={dolap.malzemeler.includes(m.ad)}
                    onPress={() => dolap.toggle(m.ad)}
                  />
                ))}
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
