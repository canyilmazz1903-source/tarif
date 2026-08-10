import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { BeslenmeEtiketi } from '@/types/tarif';

export type TemaModu = 'sistem' | 'acik' | 'koyu';

interface AyarlarState {
  temaModu: TemaModu;
  beslenmeTercihleri: BeslenmeEtiketi[];
  onboardingTamam: boolean;
  setTemaModu: (m: TemaModu) => void;
  toggleBeslenme: (b: BeslenmeEtiketi) => void;
  setOnboardingTamam: () => void;
}

export const useAyarlar = create<AyarlarState>()(
  persist(
    (set) => ({
      temaModu: 'sistem',
      beslenmeTercihleri: [],
      onboardingTamam: false,
      setTemaModu: (temaModu) => set({ temaModu }),
      toggleBeslenme: (b) =>
        set((s) => ({
          beslenmeTercihleri: s.beslenmeTercihleri.includes(b)
            ? s.beslenmeTercihleri.filter((x) => x !== b)
            : [...s.beslenmeTercihleri, b],
        })),
      setOnboardingTamam: () => set({ onboardingTamam: true }),
    }),
    { name: 'tencere-ayarlar', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
