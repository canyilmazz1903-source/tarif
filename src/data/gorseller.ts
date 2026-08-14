// Tarif/kategori görsel haritası.
// tools/gorsel-uretici hattı görselleri üretip bu haritayı yeniden yazar
// (assets/gorseller/ altındaki webp dosyalarına statik require'lar).
// Harita boşken uygulama emoji kapaklara düşer — görseller geldikçe emoji kaybolur.

export const TARIF_GORSELLERI: Record<string, number> = {};

export const KATEGORI_GORSELLERI: Record<string, number> = {};

export const MALZEME_GORSELLERI: Record<string, number> = {};

export function tarifGorseli(id: string): number | undefined {
  return TARIF_GORSELLERI[id];
}

export function malzemeGorseli(ad: string): number | undefined {
  return MALZEME_GORSELLERI[ad.toLocaleLowerCase('tr')];
}
