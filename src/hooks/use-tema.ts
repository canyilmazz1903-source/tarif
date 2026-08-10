import { useColorScheme } from 'react-native';

import { Renkler, type Palet } from '@/constants/theme';
import { useAyarlar } from '@/stores/ayarlar';

export function useTema(): { palet: Palet; koyu: boolean } {
  const sistem = useColorScheme();
  const temaModu = useAyarlar((s) => s.temaModu);
  const koyu = temaModu === 'sistem' ? sistem === 'dark' : temaModu === 'koyu';
  return { palet: koyu ? Renkler.dark : Renkler.light, koyu };
}
