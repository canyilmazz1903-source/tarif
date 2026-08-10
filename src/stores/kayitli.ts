import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const VARSAYILAN_LISTE = 'Defterim';

interface KayitliState {
  /** liste adı → tarif id listesi. Veri uygulamada gömülü olduğundan kayıtlılar tam offline. */
  listeler: Record<string, string[]>;
  kaydet: (tarifId: string, liste?: string) => void;
  cikar: (tarifId: string, liste?: string) => void;
  toggle: (tarifId: string, liste?: string) => void;
  kayitliMi: (tarifId: string) => boolean;
  listeOlustur: (ad: string) => void;
  listeSil: (ad: string) => void;
}

export const useKayitli = create<KayitliState>()(
  persist(
    (set, get) => ({
      listeler: { [VARSAYILAN_LISTE]: [] },
      kaydet: (tarifId, liste = VARSAYILAN_LISTE) =>
        set((s) => {
          const mevcut = s.listeler[liste] ?? [];
          if (mevcut.includes(tarifId)) return s;
          return { listeler: { ...s.listeler, [liste]: [...mevcut, tarifId] } };
        }),
      cikar: (tarifId, liste = VARSAYILAN_LISTE) =>
        set((s) => ({
          listeler: {
            ...s.listeler,
            [liste]: (s.listeler[liste] ?? []).filter((id) => id !== tarifId),
          },
        })),
      toggle: (tarifId, liste = VARSAYILAN_LISTE) => {
        const mevcut = get().listeler[liste] ?? [];
        if (mevcut.includes(tarifId)) get().cikar(tarifId, liste);
        else get().kaydet(tarifId, liste);
      },
      kayitliMi: (tarifId) =>
        Object.values(get().listeler).some((ids) => ids.includes(tarifId)),
      listeOlustur: (ad) =>
        set((s) => (s.listeler[ad] ? s : { listeler: { ...s.listeler, [ad]: [] } })),
      listeSil: (ad) =>
        set((s) => {
          if (ad === VARSAYILAN_LISTE) return s;
          const { [ad]: _silinen, ...kalan } = s.listeler;
          return { listeler: kalan };
        }),
    }),
    { name: 'tencere-kayitli', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
