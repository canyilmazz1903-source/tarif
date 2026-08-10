import { View } from 'react-native';

import { Yazi } from '@/components/ui/Yazi';
import { Bosluk } from '@/constants/theme';

export function BosDurum({ emoji, baslik, aciklama }: { emoji: string; baslik: string; aciklama: string }) {
  return (
    <View style={{ alignItems: 'center', gap: Bosluk.s, paddingVertical: Bosluk.xxl, paddingHorizontal: Bosluk.xl }}>
      <Yazi style={{ fontSize: 44, lineHeight: 56 }}>{emoji}</Yazi>
      <Yazi varyant="altBaslik" style={{ textAlign: 'center' }}>
        {baslik}
      </Yazi>
      <Yazi varyant="kucuk" renk="metinIkincil" style={{ textAlign: 'center' }}>
        {aciklama}
      </Yazi>
    </View>
  );
}
