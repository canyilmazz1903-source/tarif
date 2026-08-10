import { Text, type TextProps } from 'react-native';

import { Font } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';

type Varyant = 'devBaslik' | 'baslik' | 'altBaslik' | 'govde' | 'etiket' | 'kucuk';

const STILLER: Record<Varyant, { fontFamily: string; fontSize: number; lineHeight: number }> = {
  devBaslik: { fontFamily: Font.baslikKalin, fontSize: 30, lineHeight: 36 },
  baslik: { fontFamily: Font.baslik, fontSize: 22, lineHeight: 28 },
  altBaslik: { fontFamily: Font.govdeKalin, fontSize: 16, lineHeight: 22 },
  govde: { fontFamily: Font.govde, fontSize: 15, lineHeight: 22 },
  etiket: { fontFamily: Font.govdeOrta, fontSize: 13, lineHeight: 18 },
  kucuk: { fontFamily: Font.govde, fontSize: 12, lineHeight: 16 },
};

interface Props extends TextProps {
  varyant?: Varyant;
  renk?: 'metin' | 'metinIkincil' | 'birincil' | 'ikincil' | 'hata';
}

export function Yazi({ varyant = 'govde', renk = 'metin', style, ...rest }: Props) {
  const { palet } = useTema();
  return (
    <Text
      allowFontScaling
      style={[STILLER[varyant], { color: palet[renk] }, style]}
      {...rest}
    />
  );
}
