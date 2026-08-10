import { useMemo, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';

import { BosDurum } from '@/components/BosDurum';
import { TarifKarti } from '@/components/TarifKarti';
import { Cip } from '@/components/ui/Cip';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk } from '@/constants/theme';
import { tarifBul } from '@/data/tarifler';
import { useKayitli, VARSAYILAN_LISTE } from '@/stores/kayitli';

export default function Defterim() {
  const listeler = useKayitli((s) => s.listeler);
  const [aktifListe, setAktifListe] = useState(VARSAYILAN_LISTE);

  const listeAdlari = Object.keys(listeler);
  const tarifler = useMemo(
    () =>
      (listeler[aktifListe] ?? [])
        .map((id) => tarifBul(id))
        .filter((t): t is NonNullable<typeof t> => t != null),
    [listeler, aktifListe],
  );

  return (
    <Ekran>
      <FlatList
        data={tarifler}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ padding: Bosluk.l, paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ gap: Bosluk.m, paddingBottom: Bosluk.s }}>
            <Yazi varyant="devBaslik">Defterim</Yazi>
            <Yazi varyant="kucuk" renk="metinIkincil">
              Kaydettiğin tarifler cihazında saklanır — internetsiz de açılır ✈️
            </Yazi>
            {listeAdlari.length > 1 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: Bosluk.s }}>
                {listeAdlari.map((ad) => (
                  <Cip key={ad} baslik={ad} secili={aktifListe === ad} onPress={() => setAktifListe(ad)} />
                ))}
              </ScrollView>
            ) : null}
          </View>
        }
        renderItem={({ item }) => <TarifKarti tarif={item} />}
        ListEmptyComponent={
          <BosDurum
            emoji="🔖"
            baslik="Defterin henüz boş"
            aciklama="Beğendiğin tariflerde yer imi simgesine dokun; burada biriksinler."
          />
        }
      />
    </Ekran>
  );
}
