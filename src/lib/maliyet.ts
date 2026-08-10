import type { Tarif } from '@/types/tarif';
import { gramaCevir } from '@/lib/olcu-motoru';
import { malzemeBul } from '@/data/malzemeler';

export type MaliyetRozeti = '₺' | '₺₺' | '₺₺₺';

/** Tarifin porsiyon başına tahmini maliyeti (TL). Fiyatı bilinmeyen malzemeler atlanır. */
export function porsiyonMaliyeti(tarif: Tarif): number {
  let toplam = 0;
  for (const satir of tarif.malzemeler) {
    const m = malzemeBul(satir.ad);
    if (!m?.fiyatTlPerKg) continue;
    const gram = gramaCevir(satir.miktar, satir.birim, satir.ad);
    if (gram == null) continue;
    toplam += (gram / 1000) * m.fiyatTlPerKg;
  }
  return toplam / Math.max(1, tarif.porsiyon);
}

export function maliyetRozeti(tarif: Tarif): MaliyetRozeti {
  const tl = porsiyonMaliyeti(tarif);
  if (tl < 30) return '₺';
  if (tl < 70) return '₺₺';
  return '₺₺₺';
}

export function maliyetYazi(tl: number): string {
  return `≈${Math.round(tl)} TL`;
}
