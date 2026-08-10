import type { Birim, Malzeme } from '@/types/tarif';
import { malzemeBul } from '@/data/malzemeler';

// Türk mutfağı ölçü standartları (ml).
export const SU_BARDAGI_ML = 200;
export const CAY_BARDAGI_ML = 100;
export const YEMEK_KASIGI_ML = 15;
export const TATLI_KASIGI_ML = 10;
export const CAY_KASIGI_ML = 5;

const KESIRLER: Array<[number, string]> = [
  [0.25, '¼'],
  [1 / 3, '⅓'],
  [0.5, '½'],
  [2 / 3, '⅔'],
  [0.75, '¾'],
];

/** Hacim birimi → ml katsayısı. Hacim birimi değilse null. */
function mlKatsayisi(birim: Birim): number | null {
  switch (birim) {
    case 'ml':
      return 1;
    case 'lt':
      return 1000;
    case 'su bardağı':
      return SU_BARDAGI_ML;
    case 'çay bardağı':
      return CAY_BARDAGI_ML;
    case 'yemek kaşığı':
      return YEMEK_KASIGI_ML;
    case 'tatlı kaşığı':
      return TATLI_KASIGI_ML;
    case 'çay kaşığı':
      return CAY_KASIGI_ML;
    default:
      return null;
  }
}

/** Malzemeye özel: verilen birimdeki miktarı grama çevirir. Çevrilemiyorsa null. */
export function gramaCevir(miktar: number, birim: Birim, malzemeAd: string): number | null {
  const m = malzemeBul(malzemeAd);
  switch (birim) {
    case 'g':
      return miktar;
    case 'kg':
      return miktar * 1000;
    case 'su bardağı':
      return m?.gramPerSuBardagi != null ? miktar * m.gramPerSuBardagi : null;
    case 'çay bardağı':
      return m?.gramPerSuBardagi != null ? miktar * m.gramPerSuBardagi * (CAY_BARDAGI_ML / SU_BARDAGI_ML) : null;
    case 'yemek kaşığı':
      return m?.gramPerYemekKasigi != null ? miktar * m.gramPerYemekKasigi : null;
    case 'tatlı kaşığı':
      return m?.gramPerYemekKasigi != null ? miktar * m.gramPerYemekKasigi * (TATLI_KASIGI_ML / YEMEK_KASIGI_ML) : null;
    case 'çay kaşığı':
      if (m?.gramPerCayKasigi != null) return miktar * m.gramPerCayKasigi;
      return m?.gramPerYemekKasigi != null ? miktar * m.gramPerYemekKasigi * (CAY_KASIGI_ML / YEMEK_KASIGI_ML) : null;
    case 'adet':
    case 'diş':
    case 'demet':
    case 'dilim':
      return m?.gramPerAdet != null ? miktar * m.gramPerAdet : null;
    case 'ml':
      // Yoğunluk yaklaşımı: su bardağı katsayısı varsa oradan, yoksa 1 g/ml.
      return m?.gramPerSuBardagi != null ? miktar * (m.gramPerSuBardagi / SU_BARDAGI_ML) : miktar;
    case 'lt':
      return m?.gramPerSuBardagi != null ? miktar * 1000 * (m.gramPerSuBardagi / SU_BARDAGI_ML) : miktar * 1000;
    case 'tutam':
      return miktar * 2;
    case 'paket':
    case 'dal':
      return null;
  }
}

/**
 * Bir malzeme satırını hedef gösterime çevirir.
 * mod 'gram': su bardağı/kaşık ölçülerini grama çevirir.
 * mod 'olcu': gram/ml ölçülerini pratik su bardağı/kaşık ölçüsüne çevirir.
 * Dönüşüm katsayısı yoksa null döner (satır olduğu gibi kalır — brief: sessizce atla).
 */
export function cevir(
  miktar: number,
  birim: Birim,
  mod: 'gram' | 'olcu',
  malzemeAd: string,
): { miktar: number; birim: Birim } | null {
  const m = malzemeBul(malzemeAd);
  if (mod === 'gram') {
    if (birim === 'g' || birim === 'kg' || birim === 'ml' || birim === 'lt') return null;
    const gram = gramaCevir(miktar, birim, malzemeAd);
    if (gram == null) return null;
    return { miktar: Math.round(gram), birim: 'g' };
  }
  // mod === 'olcu': gram → su bardağı / kaşık
  if (birim !== 'g' && birim !== 'kg' && birim !== 'ml' && birim !== 'lt') return null;
  const gram = birim === 'kg' ? miktar * 1000 : birim === 'lt' ? miktar * 1000 : miktar;
  if (birim === 'ml' || birim === 'lt') {
    const ml = birim === 'lt' ? miktar * 1000 : miktar;
    if (ml >= 100 && ml % 25 === 0) {
      return { miktar: ml / SU_BARDAGI_ML, birim: 'su bardağı' };
    }
    if (ml >= 10) return { miktar: ml / YEMEK_KASIGI_ML, birim: 'yemek kaşığı' };
    return { miktar: ml / CAY_KASIGI_ML, birim: 'çay kaşığı' };
  }
  if (m?.gramPerSuBardagi != null && gram >= m.gramPerSuBardagi / 4) {
    return { miktar: gram / m.gramPerSuBardagi, birim: 'su bardağı' };
  }
  if (m?.gramPerYemekKasigi != null && gram >= m.gramPerYemekKasigi / 2) {
    return { miktar: gram / m.gramPerYemekKasigi, birim: 'yemek kaşığı' };
  }
  if (m?.gramPerCayKasigi != null) {
    return { miktar: gram / m.gramPerCayKasigi, birim: 'çay kaşığı' };
  }
  return null;
}

/** Porsiyon değişimi: miktar × (yeni / eski). */
export function porsiyonla(miktar: number, eskiPorsiyon: number, yeniPorsiyon: number): number {
  if (eskiPorsiyon <= 0) return miktar;
  return (miktar * yeniPorsiyon) / eskiPorsiyon;
}

/**
 * Akıllı miktar gösterimi:
 * - 1.33 → '1⅓', 0.5 → '½'
 * - gram/ml değerleri pratik sayılara yuvarlanır (247 → 250)
 * - adet bazlı kesirler '1 adet (yarısını kullan)' gibi nota dönüşmez; en yakın ½'ye yuvarlanır.
 */
export function miktarYazi(miktar: number, birim: Birim): string {
  if (birim === 'g' || birim === 'ml') {
    const v = miktar >= 100 ? Math.round(miktar / 5) * 5 : Math.round(miktar);
    return `${v} ${birim}`;
  }
  if (birim === 'kg' || birim === 'lt') {
    const v = Math.round(miktar * 100) / 100;
    return `${sayiYazi(v)} ${birim}`;
  }
  if (birim === 'adet' || birim === 'diş' || birim === 'dilim' || birim === 'dal') {
    // Yarım adetten küçük anlamsız; en yakın ½'ye yuvarla, min ½.
    const v = Math.max(0.5, Math.round(miktar * 2) / 2);
    return `${kesirYazi(v)} ${birim}`;
  }
  if (birim === 'tutam' || birim === 'demet' || birim === 'paket') {
    const v = Math.max(0.5, Math.round(miktar * 2) / 2);
    return `${kesirYazi(v)} ${birim}`;
  }
  // Bardak/kaşık ölçüleri: en yakın pratik kesire yuvarla.
  return `${kesirYazi(pratikKesir(miktar))} ${birim}`;
}

/** Bardak/kaşık miktarını en yakın pratik kesire (¼'lük ve ⅓'lük adımlar) yuvarlar. */
export function pratikKesir(miktar: number): number {
  const taban = Math.floor(miktar);
  const kalan = miktar - taban;
  if (kalan < 0.001) return taban;
  const adaylar = [0, 0.25, 1 / 3, 0.5, 2 / 3, 0.75, 1];
  let enYakin = adaylar[0];
  for (const a of adaylar) {
    if (Math.abs(kalan - a) < Math.abs(kalan - enYakin)) enYakin = a;
  }
  return taban + enYakin;
}

/** 1.5 → '1½', 0.33 → '⅓', 2 → '2'. */
export function kesirYazi(miktar: number): string {
  const taban = Math.floor(miktar);
  const kalan = miktar - taban;
  if (kalan < 0.05) return String(taban === 0 ? miktar : taban);
  for (const [deger, sembol] of KESIRLER) {
    if (Math.abs(kalan - deger) < 0.06) {
      return taban > 0 ? `${taban}${sembol}` : sembol;
    }
  }
  return sayiYazi(Math.round(miktar * 100) / 100);
}

function sayiYazi(v: number): string {
  return Number.isInteger(v) ? String(v) : String(v).replace('.', ',');
}

export function malzemeninSozlukKaydi(ad: string): Malzeme | undefined {
  return malzemeBul(ad);
}
