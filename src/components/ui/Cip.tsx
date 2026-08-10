import { Pressable } from 'react-native';

import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, Yaricap } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';

interface Props {
  baslik: string;
  secili?: boolean;
  onPress?: () => void;
}

export function Cip({ baslik, secili = false, onPress }: Props) {
  const { palet } = useTema();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: secili }}
      accessibilityLabel={baslik}
      onPress={onPress}
      style={({ pressed }) => ({
        minHeight: 38,
        paddingHorizontal: Bosluk.l,
        paddingVertical: Bosluk.s,
        borderRadius: Yaricap.tam,
        backgroundColor: secili ? palet.birincil : palet.kartIkincil,
        borderWidth: 1,
        borderColor: secili ? palet.birincil : palet.cizgi,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <Yazi varyant="etiket" style={{ color: secili ? '#FFFFFF' : palet.metin }}>
        {baslik}
      </Yazi>
    </Pressable>
  );
}
