import type { BeslenmeEtiketi, Kategori, Tarif, Zorluk } from '@/types/tarif';
import { porsiyonMaliyeti } from '@/lib/maliyet';

export interface AramaFiltresi {
  kategori?: Kategori;
  maksSureDk?: number;
  zorluk?: Zorluk;
  maksKalori?: number;
  beslenme?: BeslenmeEtiketi[];
  maksMaliyetTl?: number;
}

/** Türkçe duyarlı normalize: küçük harf + aksan sadeleştirme. */
export function normalize(s: string): string {
  return s
    .toLocaleLowerCase('tr')
    .replaceAll('ı', 'i')
    .replaceAll('ğ', 'g')
    .replaceAll('ü', 'u')
    .replaceAll('ş', 's')
    .replaceAll('ö', 'o')
    .replaceAll('ç', 'c');
}

export function tarifAra(tarifler: Tarif[], sorgu: string, filtre: AramaFiltresi = {}): Tarif[] {
  const q = normalize(sorgu.trim());
  return tarifler
    .filter((t) => {
      if (filtre.kategori && t.kategori !== filtre.kategori) return false;
      if (filtre.maksSureDk != null && t.hazirlikDk + t.pisirmeDk > filtre.maksSureDk) return false;
      if (filtre.zorluk && t.zorluk !== filtre.zorluk) return false;
      if (filtre.maksKalori != null && t.kaloriPerPorsiyon > filtre.maksKalori) return false;
      if (filtre.beslenme?.length && !filtre.beslenme.every((b) => t.beslenmeEtiketleri.includes(b)))
        return false;
      if (filtre.maksMaliyetTl != null && porsiyonMaliyeti(t) > filtre.maksMaliyetTl) return false;
      if (!q) return true;
      const metin = normalize(
        `${t.baslik} ${t.altBaslik} ${t.malzemeler.map((m) => m.ad).join(' ')}`,
      );
      return q.split(/\s+/).every((kelime) => metin.includes(kelime));
    })
    .sort((a, b) => {
      if (!q) return 0;
      const aBaslik = normalize(a.baslik).includes(q) ? 1 : 0;
      const bBaslik = normalize(b.baslik).includes(q) ? 1 : 0;
      return bBaslik - aBaslik;
    });
}

export interface DolapSonucu {
  tarif: Tarif;
  /** Ana malzemelerden kaçı dolapta var. */
  varSayisi: number;
  toplamAna: number;
  eksikler: string[];
}

/** Tarifin "ana" malzemeleri: temel kiler malzemeleri (tuz, su, yağ, baharat) sayılmaz. */
const KILER = new Set([
  'tuz',
  'su',
  'karabiber',
  'pul biber',
  'kimyon',
  'kuru nane',
  'kekik',
  'tarçın',
  'vanilin',
  'kabartma tozu',
  'zeytinyağı',
  'ayçiçek yağı',
  'sirke',
  'toz şeker',
]);

/** Dolapta Ne Var: seçilen malzemelere göre en çok eşleşen tarifler, eksik listesiyle. */
export function dolaptaNeVar(tarifler: Tarif[], dolaptakiler: string[]): DolapSonucu[] {
  const dolap = new Set(dolaptakiler.map((a) => normalize(a)));
  return tarifler
    .map((tarif) => {
      const ana = tarif.malzemeler.filter((m) => !KILER.has(m.ad.toLocaleLowerCase('tr')));
      const eksikler = ana.filter((m) => !dolap.has(normalize(m.ad))).map((m) => m.ad);
      return {
        tarif,
        varSayisi: ana.length - eksikler.length,
        toplamAna: ana.length,
        eksikler,
      };
    })
    .filter((s) => s.varSayisi > 0)
    .sort(
      (a, b) =>
        b.varSayisi / b.toplamAna - a.varSayisi / a.toplamAna || a.eksikler.length - b.eksikler.length,
    );
}

/** Artanı Değerlendir: eldeki artan malzemeye göre israf-önleme tarifleri öne gelir. */
export function artaniDegerlendir(tarifler: Tarif[], artanlar: string[]): DolapSonucu[] {
  const sonuclar = dolaptaNeVar(tarifler, artanlar);
  return sonuclar.sort((a, b) => {
    const aArtan = a.tarif.koleksiyonlar.includes('artan') ? 1 : 0;
    const bArtan = b.tarif.koleksiyonlar.includes('artan') ? 1 : 0;
    return bArtan - aArtan || b.varSayisi - a.varSayisi;
  });
}
