import { useRouter } from 'expo-router';
import { Image, Pressable, View } from 'react-native';

import { tarifGorseli } from '@/data/gorseller';

import { Rozet } from '@/components/ui/Rozet';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, Yaricap } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';
import { maliyetRozeti } from '@/lib/maliyet';
import type { Kategori, Tarif } from '@/types/tarif';

/** Kategoriye göre kapak zemin tonları (açık/koyu). */
export const KATEGORI_TON: Record<Kategori, [string, string]> = {
  corba: ['#FFE8CC', '#4A2E14'],
  'ana-yemek': ['#FFD8C2', '#4A2418'],
  'pilav-bakliyat': ['#F5E5C8', '#3F3216'],
  'hamur-isi': ['#FDEBC8', '#453317'],
  tatli: ['#FCE0EC', '#43222F'],
  zeytinyagli: ['#D8F0DC', '#1E3A26'],
  kahvaltilik: ['#FFF3BF', '#403A15'],
  salata: ['#DEF3D8', '#243A1E'],
  icecek: ['#DCEAF5', '#1E2E3A'],
};

export function zorlukYazi(z: Tarif['zorluk']): string {
  return z === 'kolay' ? 'Kolay' : z === 'orta' ? 'Orta' : 'Zor';
}

export function Kapak({ tarif, boy }: { tarif: Tarif; boy: number }) {
  const { koyu } = useTema();
  const ton = KATEGORI_TON[tarif.kategori][koyu ? 1 : 0];
  // Emoji fallback yok (v1.1.1 G-2): görsel haritada yoksa nötr _fallback görseli,
  // o da yoksa (üretim öncesi geliştirme hali) düz kategori tonlu zemin kalır.
  const gorsel = tarifGorseli(tarif.id) ?? tarifGorseli('_fallback');
  return (
    <View
      accessibilityLabel={`${tarif.baslik} görseli`}
      style={{
        height: boy,
        borderRadius: Yaricap.m,
        backgroundColor: ton,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {gorsel != null ? (
        <Image
          source={gorsel}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
          accessibilityIgnoresInvertColors
        />
      ) : null}
    </View>
  );
}

/** Liste satırları için küçük kapak (öneri kartları, plan satırları, tarif seçici). */
export function MiniKapak({ tarif, boy = 36 }: { tarif: Tarif; boy?: number }) {
  const { koyu } = useTema();
  const ton = KATEGORI_TON[tarif.kategori][koyu ? 1 : 0];
  const gorsel = tarifGorseli(tarif.id) ?? tarifGorseli('_fallback');
  return (
    <View
      accessibilityLabel={`${tarif.baslik} görseli`}
      style={{
        width: boy,
        height: boy,
        borderRadius: 8,
        backgroundColor: ton,
        overflow: 'hidden',
      }}
    >
      {gorsel != null ? (
        <Image
          source={gorsel}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
          accessibilityIgnoresInvertColors
        />
      ) : null}
    </View>
  );
}

export function TarifKarti({ tarif }: { tarif: Tarif }) {
  const { palet } = useTema();
  const router = useRouter();
  const sure = tarif.hazirlikDk + tarif.pisirmeDk;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${tarif.baslik}, ${sure} dakika, ${zorlukYazi(tarif.zorluk)}`}
      onPress={() => router.push({ pathname: '/tarif/[id]', params: { id: tarif.id } })}
      style={({ pressed }) => ({
        backgroundColor: palet.kart,
        borderRadius: Yaricap.l,
        padding: Bosluk.m,
        gap: Bosluk.m,
        borderWidth: 1,
        borderColor: palet.cizgi,
        opacity: pressed ? 0.92 : 1,
      })}
    >
      <Kapak tarif={tarif} boy={150} />
      <View style={{ gap: Bosluk.s }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.s }}>
          <Yazi varyant="baslik" style={{ flex: 1 }} numberOfLines={1}>
            {tarif.baslik}
          </Yazi>
          {tarif.editorOnayli ? <Rozet metin="Editör ✓" ton="ikincil" /> : null}
        </View>
        <Yazi varyant="kucuk" renk="metinIkincil" numberOfLines={2}>
          {tarif.altBaslik}
        </Yazi>
        <View style={{ flexDirection: 'row', gap: Bosluk.s, flexWrap: 'wrap' }}>
          <Rozet metin={`⏱ ${sure} dk`} />
          <Rozet metin={zorlukYazi(tarif.zorluk)} />
          <Rozet metin={maliyetRozeti(tarif)} ton="amber" />
          <Rozet metin={`${tarif.kaloriPerPorsiyon} kcal`} />
        </View>
      </View>
    </Pressable>
  );
}

export function MiniTarifKarti({ tarif }: { tarif: Tarif }) {
  const { palet } = useTema();
  const router = useRouter();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={tarif.baslik}
      onPress={() => router.push({ pathname: '/tarif/[id]', params: { id: tarif.id } })}
      style={({ pressed }) => ({
        width: 150,
        backgroundColor: palet.kart,
        borderRadius: Yaricap.m,
        padding: Bosluk.s,
        gap: Bosluk.s,
        borderWidth: 1,
        borderColor: palet.cizgi,
        opacity: pressed ? 0.92 : 1,
      })}
    >
      <Kapak tarif={tarif} boy={84} />
      <Yazi varyant="etiket" numberOfLines={2} style={{ minHeight: 36 }}>
        {tarif.baslik}
      </Yazi>
      <Yazi varyant="kucuk" renk="metinIkincil">
        ⏱ {tarif.hazirlikDk + tarif.pisirmeDk} dk · {zorlukYazi(tarif.zorluk)}
      </Yazi>
    </Pressable>
  );
}
