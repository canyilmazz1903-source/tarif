import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

import { Yazi } from '@/components/ui/Yazi';
import { DokunmaHedefi, Yaricap, Bosluk } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';

interface Props {
  baslik: string;
  onPress: () => void;
  varyant?: 'dolu' | 'yumusak' | 'cizgili';
  buyuk?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

export function Buton({
  baslik,
  onPress,
  varyant = 'dolu',
  buyuk = false,
  disabled = false,
  style,
  accessibilityLabel,
}: Props) {
  const { palet } = useTema();
  const zemin =
    varyant === 'dolu' ? palet.birincil : varyant === 'yumusak' ? palet.birincilYumusak : 'transparent';
  const metinRengi = varyant === 'dolu' ? '#FFFFFF' : palet.birincil;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? baslik}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        {
          minHeight: buyuk ? 60 : DokunmaHedefi,
          borderRadius: Yaricap.m,
          backgroundColor: zemin,
          borderWidth: varyant === 'cizgili' ? 1.5 : 0,
          borderColor: palet.birincil,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: Bosluk.xl,
          paddingVertical: Bosluk.m,
          opacity: disabled ? 0.4 : pressed ? 0.85 : 1,
        },
        style,
      ]}
    >
      <Yazi
        varyant={buyuk ? 'altBaslik' : 'etiket'}
        style={{ color: metinRengi, fontSize: buyuk ? 18 : 15 }}
      >
        {baslik}
      </Yazi>
    </Pressable>
  );
}
