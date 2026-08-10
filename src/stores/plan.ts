import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Ogun = 'kahvalti' | 'ogle' | 'aksam';

export const OGUNLER: Array<{ key: Ogun; ad: string }> = [
  { key: 'kahvalti', ad: 'Kahvaltı' },
  { key: 'ogle', ad: 'Öğle' },
  { key: 'aksam', ad: 'Akşam' },
];

export interface PlanKaydi {
  /** 'YYYY-MM-DD' */
  tarih: string;
  ogun: Ogun;
  tarifId: string;
}

interface PlanState {
  kayitlar: PlanKaydi[];
  ekle: (k: PlanKaydi) => void;
  cikar: (k: PlanKaydi) => void;
  gunuTemizle: (tarih: string) => void;
  hepsiniTemizle: () => void;
}

export const usePlan = create<PlanState>()(
  persist(
    (set) => ({
      kayitlar: [],
      ekle: (k) =>
        set((s) => {
          const var_mi = s.kayitlar.some(
            (x) => x.tarih === k.tarih && x.ogun === k.ogun && x.tarifId === k.tarifId,
          );
          if (var_mi) return s;
          return { kayitlar: [...s.kayitlar, k] };
        }),
      cikar: (k) =>
        set((s) => ({
          kayitlar: s.kayitlar.filter(
            (x) => !(x.tarih === k.tarih && x.ogun === k.ogun && x.tarifId === k.tarifId),
          ),
        })),
      gunuTemizle: (tarih) =>
        set((s) => ({ kayitlar: s.kayitlar.filter((x) => x.tarih !== tarih) })),
      hepsiniTemizle: () => set({ kayitlar: [] }),
    }),
    { name: 'tencere-plan', storage: createJSONStorage(() => AsyncStorage) },
  ),
);

export function tarihKey(d: Date): string {
  const ay = String(d.getMonth() + 1).padStart(2, '0');
  const gun = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${ay}-${gun}`;
}
