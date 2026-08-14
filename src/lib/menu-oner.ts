import type { Kategori, Tarif } from '@/types/tarif';
import { normalize } from '@/lib/ara';
import { porsiyonMaliyeti } from '@/lib/maliyet';
import { tarihKey, type Ogun, type PlanKaydi } from '@/stores/plan';

export interface MenuSecenekleri {
  /** Planlanacak öğünler ('sadece akşam' → ['aksam']). */
  ogunler: Ogun[];
  /** Dolaptaki malzeme adları; doluysa bunları kullanan tarifler öncelenir. */
  dolaptakiler: string[];
  kisi: number;
  /** Haftalık bütçe (TL); doluysa pahalı seçenekler elenmeye çalışılır. */
  butceTl?: number;
}

const OGUN_KATEGORILERI: Record<Ogun, Kategori[]> = {
  kahvalti: ['kahvaltilik'],
  ogle: ['corba', 'pilav-bakliyat', 'salata', 'hamur-isi'],
  aksam: ['ana-yemek', 'corba', 'zeytinyagli'],
};

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function puanla(t: Tarif, dolap: Set<string>, kullanildi: Set<string>, tohum: string): number {
  let puan = 0;
  // Dolap kullanımı: israfı azaltan kombinasyon öne (brief P1-6).
  for (const m of t.malzemeler) {
    if (dolap.has(normalize(m.ad))) puan += 10;
  }
  if (t.editorOnayli) puan += 2;
  if (kullanildi.has(t.id)) puan -= 100; // hafta içinde tekrarlama
  puan += hash(`${t.id}-${tohum}`) % 5; // hafif çeşitlilik
  return puan;
}

/** Kural motoru: 7 günlük dengeli menü. Bütçe aşımında güne en ucuz uygun alternatif seçilir. */
export function haftalikMenuOner(
  tarifler: Tarif[],
  sec: MenuSecenekleri,
  baslangic: Date,
): PlanKaydi[] {
  const dolap = new Set(sec.dolaptakiler.map((a) => normalize(a)));
  const kullanildi = new Set<string>();
  const plan: PlanKaydi[] = [];
  let toplamMaliyet = 0;

  for (let g = 0; g < 7; g++) {
    const gun = new Date(baslangic);
    gun.setDate(baslangic.getDate() + g);
    const tarih = tarihKey(gun);

    for (const ogun of sec.ogunler) {
      const adaylar = tarifler.filter((t) => OGUN_KATEGORILERI[ogun].includes(t.kategori));
      if (adaylar.length === 0) continue;

      const sirali = [...adaylar].sort(
        (a, b) => puanla(b, dolap, kullanildi, tarih) - puanla(a, dolap, kullanildi, tarih),
      );

      let secilen = sirali[0];
      if (sec.butceTl != null) {
        const kalanButce = sec.butceTl - toplamMaliyet;
        const kalanOgun = (7 - g) * sec.ogunler.length - sec.ogunler.indexOf(ogun);
        const ogunButcesi = kalanButce / Math.max(1, kalanOgun);
        // Bütçeyi aşan seçimde ucuz alternatife düş.
        const uygun = sirali.find((t) => porsiyonMaliyeti(t) * sec.kisi <= ogunButcesi);
        if (uygun) secilen = uygun;
        else secilen = [...sirali].sort((a, b) => porsiyonMaliyeti(a) - porsiyonMaliyeti(b))[0];
      }

      kullanildi.add(secilen.id);
      toplamMaliyet += porsiyonMaliyeti(secilen) * sec.kisi;
      plan.push({ tarih, ogun, tarifId: secilen.id });
    }
  }
  return plan;
}

/** Bir öğün için alternatif öner: aynı öğün kategorisinden, planda kullanılmamış en iyi aday. */
export function alternatifOner(
  tarifler: Tarif[],
  ogun: Ogun,
  mevcutPlanIdleri: string[],
  dolaptakiler: string[],
  tohum: number,
): Tarif | undefined {
  const dolap = new Set(dolaptakiler.map((a) => normalize(a)));
  const kullanildi = new Set(mevcutPlanIdleri);
  const adaylar = tarifler.filter(
    (t) => OGUN_KATEGORILERI[ogun].includes(t.kategori) && !kullanildi.has(t.id),
  );
  return [...adaylar].sort(
    (a, b) => puanla(b, dolap, kullanildi, String(tohum)) - puanla(a, dolap, kullanildi, String(tohum)),
  )[0];
}
