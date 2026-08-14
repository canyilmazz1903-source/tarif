import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { sayacBildirimiIptal, sayacBildirimiKur } from '@/lib/bildirim';

/**
 * Tek aktif pişirme zamanlayıcısı.
 * KÖK KURAL: doğruluk kaynağı `bitisZamaniMs` timestamp'idir — JS interval'i yalnızca
 * ekranı tazeler. Kilit/arka plan sonrası kalan süre timestamp'ten yeniden hesaplanır,
 * süre kilitliyken dolarsa kurulu yerel bildirim uyarır (brief P1-4 sayaç düzeltmesi).
 */
interface SayacState {
  tarifId: string | null;
  adimIdx: number | null;
  /** Çalışıyorken bitiş zamanı (epoch ms); duraklatılmışken null. */
  bitisZamaniMs: number | null;
  /** Duraklatılmışken kalan saniye; çalışırken null. */
  duraklatmaKalanSn: number | null;
  bildirimId: string | null;
  baslat: (tarifId: string, adimIdx: number, sureSn: number, adimBaslik: string) => Promise<void>;
  duraklat: () => Promise<void>;
  devamEt: (adimBaslik: string) => Promise<void>;
  sifirla: () => Promise<void>;
}

export const useSayac = create<SayacState>()(
  persist(
    (set, get) => ({
      tarifId: null,
      adimIdx: null,
      bitisZamaniMs: null,
      duraklatmaKalanSn: null,
      bildirimId: null,

      baslat: async (tarifId, adimIdx, sureSn, adimBaslik) => {
        await sayacBildirimiIptal(get().bildirimId);
        const bitis = Date.now() + sureSn * 1000;
        const bildirimId = await sayacBildirimiKur(adimBaslik, bitis);
        set({ tarifId, adimIdx, bitisZamaniMs: bitis, duraklatmaKalanSn: null, bildirimId });
      },

      duraklat: async () => {
        const { bitisZamaniMs, bildirimId } = get();
        if (bitisZamaniMs == null) return;
        await sayacBildirimiIptal(bildirimId);
        const kalan = Math.max(0, Math.round((bitisZamaniMs - Date.now()) / 1000));
        set({ bitisZamaniMs: null, duraklatmaKalanSn: kalan, bildirimId: null });
      },

      devamEt: async (adimBaslik) => {
        const { duraklatmaKalanSn } = get();
        if (duraklatmaKalanSn == null || duraklatmaKalanSn <= 0) return;
        const bitis = Date.now() + duraklatmaKalanSn * 1000;
        const bildirimId = await sayacBildirimiKur(adimBaslik, bitis);
        set({ bitisZamaniMs: bitis, duraklatmaKalanSn: null, bildirimId });
      },

      sifirla: async () => {
        await sayacBildirimiIptal(get().bildirimId);
        set({
          tarifId: null,
          adimIdx: null,
          bitisZamaniMs: null,
          duraklatmaKalanSn: null,
          bildirimId: null,
        });
      },
    }),
    { name: 'tencere-sayac', storage: createJSONStorage(() => AsyncStorage) },
  ),
);

/** Bu tarif+adım için kalan saniye; sayaç o adım için kurulu değilse null. */
export function kalanSaniye(
  s: Pick<SayacState, 'tarifId' | 'adimIdx' | 'bitisZamaniMs' | 'duraklatmaKalanSn'>,
  tarifId: string,
  adimIdx: number,
): { kalan: number; calisiyor: boolean } | null {
  if (s.tarifId !== tarifId || s.adimIdx !== adimIdx) return null;
  if (s.bitisZamaniMs != null) {
    return { kalan: Math.max(0, Math.round((s.bitisZamaniMs - Date.now()) / 1000)), calisiyor: true };
  }
  if (s.duraklatmaKalanSn != null) {
    return { kalan: s.duraklatmaKalanSn, calisiyor: false };
  }
  return null;
}
