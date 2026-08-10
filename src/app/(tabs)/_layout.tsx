import Ionicons from '@expo/vector-icons/Ionicons';
import { Redirect, Tabs } from 'expo-router';

import { Font } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';
import { useAyarlar } from '@/stores/ayarlar';

export default function SekmeLayout() {
  const { palet } = useTema();
  const onboardingTamam = useAyarlar((s) => s.onboardingTamam);

  if (!onboardingTamam) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palet.birincil,
        tabBarInactiveTintColor: palet.metinIkincil,
        tabBarStyle: { backgroundColor: palet.kart, borderTopColor: palet.cizgi },
        tabBarLabelStyle: { fontFamily: Font.govdeOrta, fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Keşfet',
          tabBarIcon: ({ color, size }) => <Ionicons name="restaurant" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ara"
        options={{
          title: 'Ara',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="planlayici"
        options={{
          title: 'Planlayıcı',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="kayitli"
        options={{
          title: 'Defterim',
          tabBarIcon: ({ color, size }) => <Ionicons name="bookmark" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
