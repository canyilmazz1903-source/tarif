import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BosDurum } from '@/components/BosDurum';
import { TarifKarti } from '@/components/TarifKarti';
import { Cip } from '@/components/ui/Cip';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, DokunmaHedefi } from '@/constants/theme';
import { KATEGORILER } from '@/data/tarifler';
import { useTarifler } from '@/hooks/use-tarifler';
import type { Koleksiyon, Zorluk } from '@/types/tarif';

/** Izgaradaki koleksiyon kartları: slug → başlık + filtre. */
export const KOLEKSIYON_KARTLARI: Array<{ slug: Koleksiyon; ad: string; emoji: string }> = [
  { slug: 'osmanli-saray', ad: 'Osmanlı Saray Mutfağı', emoji: '🏛' },
  { slug: 'yeni-nesil', ad: 'Trend', emoji: '🔥' },
  { slug: 'viral-tatli', ad: 'Yeni Tatlılar', emoji: '🍰' },
  { slug: 'airfryer', ad: 'Airfryer', emoji: '🍟' },
  { slug: 'demlik-fincan', ad: 'Demlik & Fincan', emoji: '☕' },
];

const SURELER = [20, 40, 60] as const;
const ZORLUKLAR: Zorluk[] = ['kolay', 'orta', 'zor'];

export default function KategoriDetay() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [maksSure, setMaksSure] = useState<number | null>(null);
  const [zorluk, setZorluk] = useState<Zorluk | null>(null);
  const TARIFLER = useTarifler();

  const kategori = KATEGORILER.find((k) => k.key === slug);
  const koleksiyon = KOLEKSIYON_KARTLARI.find((k) => k.slug === slug);
  const baslik = kategori ? `${kategori.emoji} ${kategori.ad}` : koleksiyon ? `${koleksiyon.emoji} ${koleksiyon.ad}` : slug ?? '';

  const tarifler = useMemo(() => {
    const taban = kategori
      ? TARIFLER.filter((t) => t.kategori === kategori.key)
      : koleksiyon
        ? TARIFLER.filter((t) => t.koleksiyonlar.includes(koleksiyon.slug))
        : [];
    return taban.filter((t) => {
      if (maksSure != null && t.hazirlikDk + t.pisirmeDk > maksSure) return false;
      if (zorluk != null && t.zorluk !== zorluk) return false;
      return true;
    });
  }, [kategori, koleksiyon, maksSure, zorluk]);

  return (
    <Ekran ustBosluk={false}>
      <FlatList
        data={tarifler}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ paddingHorizontal: Bosluk.l, paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ paddingTop: insets.top + Bosluk.s, gap: Bosluk.m, paddingBottom: Bosluk.s }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.s }}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Geri dön"
                onPress={() => router.back()}
                style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, justifyContent: 'center' }}
              >
                <Ionicons name="chevron-back" size={26} color="#888" />
              </Pressable>
              <View style={{ flex: 1 }}>
                <Yazi varyant="devBaslik">{baslik}</Yazi>
                <Yazi varyant="kucuk" renk="metinIkincil">
                  {tarifler.length} tarif
                </Yazi>
              </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: Bosluk.s }}>
              {SURELER.map((s) => (
                <Cip
                  key={s}
                  baslik={`≤ ${s} dk`}
                  secili={maksSure === s}
                  onPress={() => setMaksSure(maksSure === s ? null : s)}
                />
              ))}
              {ZORLUKLAR.map((z) => (
                <Cip
                  key={z}
                  baslik={z === 'kolay' ? 'Kolay' : z === 'orta' ? 'Orta' : 'Zor'}
                  secili={zorluk === z}
                  onPress={() => setZorluk(zorluk === z ? null : z)}
                />
              ))}
            </ScrollView>
          </View>
        }
        renderItem={({ item }) => <TarifKarti tarif={item} />}
        ListEmptyComponent={
          <BosDurum emoji="🔍" baslik="Bu filtrede tarif yok" aciklama="Filtreleri azaltmayı dene." />
        }
      />
    </Ekran>
  );
}
