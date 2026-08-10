import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { Birim } from '@/types/tarif';

export interface AlisverisKalemi {
  id: string;
  ad: string;
  miktar?: number;
  birim?: Birim;
  alindi: boolean;
  kaynakTarifId?: string;
}

interface AlisverisState {
  kalemler: AlisverisKalemi[];
  ekle: (k: Omit<AlisverisKalemi, 'id' | 'alindi'>) => void;
  topluEkle: (kalemler: Array<Omit<AlisverisKalemi, 'id' | 'alindi'>>) => void;
  toggle: (id: string) => void;
  sil: (id: string) => void;
  alinanlariTemizle: () => void;
  hepsiniTemizle: () => void;
}

let sayac = 0;
function yeniId(): string {
  sayac += 1;
  return `k${Date.now().toString(36)}-${sayac}`;
}

/** Aynı ad+birim kalemleri birleştirir, miktarları toplar. */
function birlestir(
  mevcut: AlisverisKalemi[],
  yeni: Array<Omit<AlisverisKalemi, 'id' | 'alindi'>>,
): AlisverisKalemi[] {
  const sonuc = [...mevcut];
  for (const k of yeni) {
    const ayni = sonuc.find(
      (x) => !x.alindi && x.ad.toLocaleLowerCase('tr') === k.ad.toLocaleLowerCase('tr') && x.birim === k.birim,
    );
    if (ayni && ayni.miktar != null && k.miktar != null) {
      ayni.miktar = Math.round((ayni.miktar + k.miktar) * 100) / 100;
    } else {
      sonuc.push({ ...k, id: yeniId(), alindi: false });
    }
  }
  return sonuc;
}

export const useAlisveris = create<AlisverisState>()(
  persist(
    (set) => ({
      kalemler: [],
      ekle: (k) => set((s) => ({ kalemler: birlestir(s.kalemler, [k]) })),
      topluEkle: (kalemler) => set((s) => ({ kalemler: birlestir(s.kalemler, kalemler) })),
      toggle: (id) =>
        set((s) => ({
          kalemler: s.kalemler.map((k) => (k.id === id ? { ...k, alindi: !k.alindi } : k)),
        })),
      sil: (id) => set((s) => ({ kalemler: s.kalemler.filter((k) => k.id !== id) })),
      alinanlariTemizle: () => set((s) => ({ kalemler: s.kalemler.filter((k) => !k.alindi) })),
      hepsiniTemizle: () => set({ kalemler: [] }),
    }),
    { name: 'tencere-alisveris', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
