import { TARIFLER, tarifBul } from '@/data/tarifler';
import { alternatifOner, haftalikMenuOner } from '@/lib/menu-oner';

// v1.2.2 kullanıcı şikayeti düzeltmesi: "haftalık planda 4 akşam çorba çıkıyor".
// Akşam sofrasının temeli ana yemektir; çorba akşam planına ana öğün olarak girmez.
describe('haftalık menü kural motoru', () => {
  const baslangic = new Date(2026, 7, 17); // sabit tarih — deterministik plan

  const tumOgunlerPlani = haftalikMenuOner(
    TARIFLER,
    { ogunler: ['kahvalti', 'ogle', 'aksam'], dolaptakiler: [], kisi: 4 },
    baslangic,
  );
  const aksamlar = tumOgunlerPlani
    .filter((k) => k.ogun === 'aksam')
    .map((k) => tarifBul(k.tarifId)!);

  it('7 akşamın tamamı planlanır ve hiçbiri çorba değildir', () => {
    expect(aksamlar).toHaveLength(7);
    for (const t of aksamlar) {
      expect(t.kategori).not.toBe('corba');
    }
  });

  it('akşamların en az 6sı ana yemektir (en fazla 1 değişiklik günü)', () => {
    const anaSayisi = aksamlar.filter((t) => t.kategori === 'ana-yemek').length;
    expect(anaSayisi).toBeGreaterThanOrEqual(6);
  });

  it('tatlı ve içecek hiçbir öğüne girmez', () => {
    for (const k of tumOgunlerPlani) {
      const t = tarifBul(k.tarifId)!;
      expect(t.kategori).not.toBe('tatli');
      expect(t.kategori).not.toBe('icecek');
    }
  });

  it('kahvaltı öğünleri kahvaltılık (veya hamur işi) kategorisindendir', () => {
    for (const k of tumOgunlerPlani.filter((x) => x.ogun === 'kahvalti')) {
      const t = tarifBul(k.tarifId)!;
      expect(['kahvaltilik', 'hamur-isi']).toContain(t.kategori);
    }
  });

  it('hafta içinde hiçbir tarif tekrarlanmaz', () => {
    const idler = tumOgunlerPlani.map((k) => k.tarifId);
    expect(new Set(idler).size).toBe(idler.length);
  });

  it('art arda iki akşam aynı ilk kelimeyle başlayan yemek gelmez (çeşitlilik)', () => {
    for (let i = 1; i < aksamlar.length; i++) {
      const dun = aksamlar[i - 1].baslik.split(' ')[0].toLocaleLowerCase('tr');
      const bugun = aksamlar[i].baslik.split(' ')[0].toLocaleLowerCase('tr');
      expect(bugun).not.toBe(dun);
    }
  });

  it('sadece akşam planı yalnız akşam öğünleri içerir', () => {
    const plan = haftalikMenuOner(
      TARIFLER,
      { ogunler: ['aksam'], dolaptakiler: [], kisi: 2 },
      baslangic,
    );
    expect(plan).toHaveLength(7);
    expect(plan.every((k) => k.ogun === 'aksam')).toBe(true);
  });

  it('dolaptaki malzemeler akşam seçimlerini yönlendirir', () => {
    const plan = haftalikMenuOner(
      TARIFLER,
      { ogunler: ['aksam'], dolaptakiler: ['patlıcan', 'kıyma'], kisi: 4 },
      baslangic,
    );
    const malzemeIceren = plan.filter((k) => {
      const t = tarifBul(k.tarifId)!;
      return t.malzemeler.some((m) => m.ad === 'patlıcan' || m.ad === 'kıyma');
    });
    expect(malzemeIceren.length).toBeGreaterThanOrEqual(3);
  });

  it('akşam alternatifi her zaman ana yemektir', () => {
    for (let tohum = 0; tohum < 5; tohum++) {
      const t = alternatifOner(TARIFLER, 'aksam', [], [], tohum);
      expect(t?.kategori).toBe('ana-yemek');
    }
  });
});
