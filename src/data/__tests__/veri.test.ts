import { MALZEMELER, malzemeBul } from '@/data/malzemeler';
import { KLASIK_TARIFLER, TARIFLER, YENI_NESIL_TARIFLER } from '@/data/tarifler';
import { maliyetRozeti, porsiyonMaliyeti } from '@/lib/maliyet';

// Brief kabul kriterleri: 50 klasik + 55 yeni nesil tarif, kısa başlıklar, tutarlı veri.
describe('tarif verisi bütünlüğü', () => {
  it('50 klasik + 55 yeni nesil = 105 tarif var', () => {
    expect(KLASIK_TARIFLER).toHaveLength(50);
    expect(YENI_NESIL_TARIFLER).toHaveLength(55);
    expect(TARIFLER).toHaveLength(105);
  });

  it('yeni nesil paketin tamamı yeni-nesil koleksiyon etiketli', () => {
    for (const t of YENI_NESIL_TARIFLER) {
      expect(t.koleksiyonlar).toContain('yeni-nesil');
    }
  });

  it('id\'ler benzersiz', () => {
    const idler = TARIFLER.map((t) => t.id);
    expect(new Set(idler).size).toBe(idler.length);
  });

  it('başlıklar ≤ 40 karakter (Yemek.com dersi)', () => {
    for (const t of TARIFLER) {
      expect(t.baslik.length).toBeLessThanOrEqual(40);
    }
  });

  it('alt başlıklar ≤ 90 karakter', () => {
    for (const t of TARIFLER) {
      expect(t.altBaslik.length).toBeLessThanOrEqual(90);
    }
  });

  it('adım başlıkları ≤ 40 karakter', () => {
    for (const t of TARIFLER) {
      for (const a of t.adimlar) {
        expect(a.baslik.length).toBeLessThanOrEqual(40);
      }
    }
  });

  it('her tarifte en az 2 malzeme ve 3 adım var', () => {
    for (const t of TARIFLER) {
      expect(t.malzemeler.length).toBeGreaterThanOrEqual(2);
      expect(t.adimlar.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('klasik paketin kategori dağılımı brief ile uyumlu (25 tarifin ×2 ölçeği)', () => {
    const say = (k: string) => KLASIK_TARIFLER.filter((t) => t.kategori === k).length;
    expect(say('corba')).toBe(8);
    expect(say('ana-yemek')).toBe(12);
    expect(say('hamur-isi')).toBe(8);
    expect(say('tatli')).toBe(8);
    expect(say('zeytinyagli')).toBe(6);
    expect(say('kahvaltilik')).toBe(4);
    expect(say('salata')).toBe(4);
  });

  it('en az 5 tarif israf-önleme (artan) etiketli', () => {
    const artanlar = TARIFLER.filter((t) => t.koleksiyonlar.includes('artan'));
    expect(artanlar.length).toBeGreaterThanOrEqual(5);
  });

  it('süre ve porsiyon alanları mantıklı', () => {
    for (const t of TARIFLER) {
      expect(t.porsiyon).toBeGreaterThanOrEqual(1);
      expect(t.porsiyon).toBeLessThanOrEqual(24);
      expect(t.hazirlikDk).toBeGreaterThan(0);
      expect(t.pisirmeDk).toBeGreaterThanOrEqual(0);
      expect(t.kaloriPerPorsiyon).toBeGreaterThan(0);
    }
  });

  it('malzemelerin büyük çoğunluğu sözlükle eşleşiyor (ölçü motoru çalışsın)', () => {
    let toplam = 0;
    let eslesen = 0;
    for (const t of TARIFLER) {
      for (const m of t.malzemeler) {
        toplam += 1;
        if (malzemeBul(m.ad)) eslesen += 1;
      }
    }
    expect(eslesen / toplam).toBeGreaterThan(0.85);
  });

  it('her tarifin porsiyon maliyeti hesaplanabiliyor ve pozitif', () => {
    for (const t of TARIFLER) {
      const tl = porsiyonMaliyeti(t);
      expect(tl).toBeGreaterThan(0);
      expect(['₺', '₺₺', '₺₺₺']).toContain(maliyetRozeti(t));
    }
  });

  it('zamanlayıcılı adımlar gerçekçi sürelerde (30 sn – 12 saat)', () => {
    for (const t of TARIFLER) {
      for (const a of t.adimlar) {
        if (a.sureSn != null) {
          expect(a.sureSn).toBeGreaterThanOrEqual(30);
          expect(a.sureSn).toBeLessThanOrEqual(12 * 3600);
        }
      }
    }
  });
});

describe('malzeme sözlüğü', () => {
  it('en az 60 malzeme var', () => {
    expect(MALZEMELER.length).toBeGreaterThanOrEqual(60);
  });

  it('adlar benzersiz', () => {
    const adlar = MALZEMELER.map((m) => m.ad);
    expect(new Set(adlar).size).toBe(adlar.length);
  });

  it('temel dönüşümler brief standardında', () => {
    expect(malzemeBul('un')?.gramPerSuBardagi).toBe(130);
    expect(malzemeBul('toz şeker')?.gramPerSuBardagi).toBe(180);
    expect(malzemeBul('pirinç')?.gramPerSuBardagi).toBe(200);
    expect(malzemeBul('su')?.gramPerSuBardagi).toBe(200);
  });
});
