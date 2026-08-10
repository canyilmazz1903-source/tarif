import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTema } from '@/hooks/use-tema';

/** Sekme ekranları için zemin + üst güvenli alan. */
export function Ekran({ children, ustBosluk = true }: PropsWithChildren<{ ustBosluk?: boolean }>) {
  const { palet } = useTema();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: palet.zemin, paddingTop: ustBosluk ? insets.top : 0 }}>
      {children}
    </View>
  );
}
