import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface DolapState {
  /** Kullanıcının evindeki malzeme adları (sözlük adları). */
  malzemeler: string[];
  toggle: (ad: string) => void;
  temizle: () => void;
}

export const useDolap = create<DolapState>()(
  persist(
    (set) => ({
      malzemeler: [],
      toggle: (ad) =>
        set((s) => ({
          malzemeler: s.malzemeler.includes(ad)
            ? s.malzemeler.filter((m) => m !== ad)
            : [...s.malzemeler, ad],
        })),
      temizle: () => set({ malzemeler: [] }),
    }),
    { name: 'tencere-dolap', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
