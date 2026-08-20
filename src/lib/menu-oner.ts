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

/**
 * Öğün-kategori uygunluğu (v1.2.2 düzeltmesi):
 * `temel` = öğünün olağan seçimi; `degisiklik` = haftada EN FAZLA bir kez
 * araya girebilen çeşit (zeytinyağlı günü, öğlen çorba-börek günü gibi).
 * Eski sürümdeki hata: akşam havuzuna çorba eşit ağırlıkla giriyordu ve
 * hafta planında 3-4 akşam çorba çıkabiliyordu — akşam sofrasının temeli
 * ana yemektir, çorba akşamda ancak yan rol oynar.
 */
const OGUN_KURALLARI: Record<Ogun, { temel: Kategori[]; degisiklik: Kategori[] }> = {
  kahvalti: { temel: ['kahvaltilik'], degisiklik: ['hamur-isi'] },
  ogle: { temel: ['ana-yemek', 'pilav-bakliyat'], degisiklik: ['corba', 'hamur-isi', 'salata'] },
  aksam: { temel: ['ana-yemek'], degisiklik: ['zeytinyagli', 'pilav-bakliyat'] },
};

/** Haftada öğün başına en fazla kaç "değişiklik" günü olabilir. */
const HAFTALIK_DEGISIKLIK_SINIRI = 1;

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function puanla(
  t: Tarif,
  dolap: Set<string>,
  kullanildi: Set<string>,
  oncekiBasliklar: string[],
  tohum: string,
): number {
  let puan = 0;
  // Dolap kullanımı: israfı azaltan kombinasyon öne (brief P1-6).
  for (const m of t.malzemeler) {
    if (dolap.has(normalize(m.ad))) puan += 10;
  }
  if (t.editorOnayli) puan += 2;
  if (kullanildi.has(t.id)) puan -= 1000; // hafta içinde tekrarlama
  // Çeşitlilik: dünkü/önceki günlerin yemeğiyle aynı ilk kelime (Kıymalı X,
  // Tavuklu Y kalıpları) art arda gelmesin.
  const ilkKelime = normalize(t.baslik).split(' ')[0];
  for (let g = 0; g < oncekiBasliklar.length; g++) {
    if (normalize(oncekiBasliklar[g]).split(' ')[0] === ilkKelime) {
      puan -= g === 0 ? 12 : 5; // dün aynıysa ağır, daha eskiyse hafif ceza
    }
  }
  puan += hash(`${t.id}-${tohum}`) % 5; // hafif gün-bazlı çeşitlilik
  return puan;
}

/**
 * Kural motoru: 7 günlük dengeli menü.
 * - Akşamlar ana yemek; haftada en fazla 1 akşam zeytinyağlı/pilav "değişiklik" günü.
 * - Tatlı ve içecek öğün planına asla girmez.
 * - Bütçe aşımında güne en ucuz uygun alternatif seçilir.
 */
export function haftalikMenuOner(
  tarifler: Tarif[],
  sec: MenuSecenekleri,
  baslangic: Date,
): PlanKaydi[] {
  const dolap = new Set(sec.dolaptakiler.map((a) => normalize(a)));
  const kullanildi = new Set<string>();
  const plan: PlanKaydi[] = [];
  const oncekiAksamlar: string[] = [];
  const degisiklikSayaci: Record<Ogun, number> = { kahvalti: 0, ogle: 0, aksam: 0 };
  let toplamMaliyet = 0;

  for (let g = 0; g < 7; g++) {
    const gun = new Date(baslangic);
    gun.setDate(baslangic.getDate() + g);
    const tarih = tarihKey(gun);

    for (const ogun of sec.ogunler) {
      const kural = OGUN_KURALLARI[ogun];
      const degisiklikHakki = degisiklikSayaci[ogun] < HAFTALIK_DEGISIKLIK_SINIRI;

      const temelAdaylar = tarifler.filter((t) => kural.temel.includes(t.kategori));
      const digerAdaylar = degisiklikHakki
        ? tarifler.filter((t) => kural.degisiklik.includes(t.kategori))
        : [];
      if (temelAdaylar.length === 0 && digerAdaylar.length === 0) continue;

      const oncekiler = ogun === 'aksam' ? oncekiAksamlar : [];
      const puanHesapla = (t: Tarif) => {
        let p = puanla(t, dolap, kullanildi, oncekiler, tarih);
        // Temel kategori her zaman önde: değişiklik ancak dolap eşleşmesi
        // güçlüyse veya çeşitlilik gerektiğinde araya girer.
        if (!kural.temel.includes(t.kategori)) p -= 15;
        return p;
      };

      const sirali = [...temelAdaylar, ...digerAdaylar].sort(
        (a, b) => puanHesapla(b) - puanHesapla(a),
      );

      let secilen = sirali[0];
      if (sec.butceTl != null) {
        const kalanButce = sec.butceTl - toplamMaliyet;
        const kalanOgun = Math.max(1, (7 - g) * sec.ogunler.length - sec.ogunler.indexOf(ogun));
        const ogunButcesi = kalanButce / kalanOgun;
        const uygun = sirali.find((t) => porsiyonMaliyeti(t) * sec.kisi <= ogunButcesi);
        if (uygun) secilen = uygun;
        else secilen = [...sirali].sort((a, b) => porsiyonMaliyeti(a) - porsiyonMaliyeti(b))[0];
      }

      kullanildi.add(secilen.id);
      if (!kural.temel.includes(secilen.kategori)) degisiklikSayaci[ogun] += 1;
      if (ogun === 'aksam') oncekiAksamlar.unshift(secilen.baslik);
      toplamMaliyet += porsiyonMaliyeti(secilen) * sec.kisi;
      plan.push({ tarih, ogun, tarifId: secilen.id });
    }
  }
  return plan;
}

/**
 * Bir öğün için alternatif öner: öğünün TEMEL kategorisinden, planda
 * kullanılmamış en iyi aday (akşam alternatifi her zaman ana yemektir).
 */
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
    (t) => OGUN_KURALLARI[ogun].temel.includes(t.kategori) && !kullanildi.has(t.id),
  );
  return [...adaylar].sort(
    (a, b) =>
      puanla(b, dolap, kullanildi, [], String(tohum)) -
      puanla(a, dolap, kullanildi, [], String(tohum)),
  )[0];
}

/** Elle tarif seçme ekranında listeyi öğüne uygunluğa göre sıralamak için. */
export function ogunUygunlukSirasi(ogun: Ogun): Kategori[] {
  const k = OGUN_KURALLARI[ogun];
  return [...k.temel, ...k.degisiklik];
}
