import { Fraunces_600SemiBold, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from '@expo-google-fonts/inter';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Renkler } from '@/constants/theme';
import { useTema } from '@/hooks/use-tema';

SplashScreen.preventAutoHideAsync();

export default function KokLayout() {
  const { palet, koyu } = useTema();
  const [fontlarHazir] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    if (fontlarHazir) SplashScreen.hideAsync();
  }, [fontlarHazir]);

  if (!fontlarHazir) return null;

  const navTema = koyu
    ? {
        ...DarkTheme,
        colors: { ...DarkTheme.colors, background: Renkler.dark.zemin, card: Renkler.dark.kart },
      }
    : {
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: Renkler.light.zemin, card: Renkler.light.kart },
      };

  return (
    <ThemeProvider value={navTema}>
      <StatusBar style={koyu ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: palet.zemin },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="tarif/[id]" />
        <Stack.Screen name="pisirme/[id]" options={{ gestureEnabled: false }} />
        <Stack.Screen name="alisveris" options={{ presentation: 'modal' }} />
        <Stack.Screen name="onboarding" options={{ animation: 'fade' }} />
      </Stack>
    </ThemeProvider>
  );
}
