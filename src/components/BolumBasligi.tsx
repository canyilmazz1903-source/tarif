import { View } from 'react-native';

import { Yazi } from '@/components/ui/Yazi';
import { Bosluk } from '@/constants/theme';

export function BolumBasligi({ baslik, aciklama }: { baslik: string; aciklama?: string }) {
  return (
    <View style={{ gap: 2, marginBottom: Bosluk.m }}>
      <Yazi varyant="baslik">{baslik}</Yazi>
      {aciklama ? (
        <Yazi varyant="kucuk" renk="metinIkincil">
          {aciklama}
        </Yazi>
      ) : null}
    </View>
  );
}
