import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { BeslenmeEtiketi } from '@/types/tarif';

export type TemaModu = 'sistem' | 'acik' | 'koyu';

/** Hızlı kaçınma çipleri: etiket bazlı eşleşen alerjen grupları. */
export type KacinmaGrubu = 'gluten' | 'laktoz' | 'deniz' | 'findik-fistik';

export type PisirmeGorunumu = 'adim' | 'sayfa';

interface AyarlarState {
  temaModu: TemaModu;
  beslenmeTercihleri: BeslenmeEtiketi[];
  onboardingTamam: boolean;
  /** Yiyemediği malzeme adları (sözlük adları). */
  yiyemedikleri: string[];
  kacinmaGruplari: KacinmaGrubu[];
  /** "Misafir için pişiriyorum" — filtreyi geçici kapat. */
  alerjiFiltresiAcik: boolean;
  pisirmeGorunumu: PisirmeGorunumu;
  pisirmeGorunumuSoruldu: boolean;
  setTemaModu: (m: TemaModu) => void;
  toggleBeslenme: (b: BeslenmeEtiketi) => void;
  setOnboardingTamam: () => void;
  toggleYiyemedigi: (ad: string) => void;
  toggleKacinmaGrubu: (g: KacinmaGrubu) => void;
  setAlerjiFiltresiAcik: (acik: boolean) => void;
  setPisirmeGorunumu: (g: PisirmeGorunumu) => void;
}

export const useAyarlar = create<AyarlarState>()(
  persist(
    (set) => ({
      temaModu: 'sistem',
      beslenmeTercihleri: [],
      onboardingTamam: false,
      yiyemedikleri: [],
      kacinmaGruplari: [],
      alerjiFiltresiAcik: true,
      pisirmeGorunumu: 'adim',
      pisirmeGorunumuSoruldu: false,
      setTemaModu: (temaModu) => set({ temaModu }),
      toggleBeslenme: (b) =>
        set((s) => ({
          beslenmeTercihleri: s.beslenmeTercihleri.includes(b)
            ? s.beslenmeTercihleri.filter((x) => x !== b)
            : [...s.beslenmeTercihleri, b],
        })),
      setOnboardingTamam: () => set({ onboardingTamam: true }),
      toggleYiyemedigi: (ad) =>
        set((s) => ({
          yiyemedikleri: s.yiyemedikleri.includes(ad)
            ? s.yiyemedikleri.filter((x) => x !== ad)
            : [...s.yiyemedikleri, ad],
        })),
      toggleKacinmaGrubu: (g) =>
        set((s) => ({
          kacinmaGruplari: s.kacinmaGruplari.includes(g)
            ? s.kacinmaGruplari.filter((x) => x !== g)
            : [...s.kacinmaGruplari, g],
        })),
      setAlerjiFiltresiAcik: (alerjiFiltresiAcik) => set({ alerjiFiltresiAcik }),
      setPisirmeGorunumu: (pisirmeGorunumu) =>
        set({ pisirmeGorunumu, pisirmeGorunumuSoruldu: true }),
    }),
    { name: 'tencere-ayarlar', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
