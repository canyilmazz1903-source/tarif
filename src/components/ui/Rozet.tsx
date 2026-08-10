import { View } from 'react-native';

import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, Yaricap } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';

interface Props {
  metin: string;
  ton?: 'notr' | 'birincil' | 'ikincil' | 'amber';
}

export function Rozet({ metin, ton = 'notr' }: Props) {
  const { palet } = useTema();
  const zemin =
    ton === 'birincil'
      ? palet.birincilYumusak
      : ton === 'ikincil'
        ? palet.ikincilYumusak
        : ton === 'amber'
          ? palet.amberYumusak
          : palet.kartIkincil;
  const renk =
    ton === 'birincil'
      ? palet.birincil
      : ton === 'ikincil'
        ? palet.ikincil
        : ton === 'amber'
          ? palet.amber
          : palet.metinIkincil;
  return (
    <View
      style={{
        backgroundColor: zemin,
        borderRadius: Yaricap.s,
        paddingHorizontal: Bosluk.s,
        paddingVertical: 3,
        alignSelf: 'flex-start',
      }}
    >
      <Yazi varyant="kucuk" style={{ color: renk, fontFamily: 'Inter_500Medium' }}>
        {metin}
      </Yazi>
    </View>
  );
}
