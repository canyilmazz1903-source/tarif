import { kalanSaniye } from '@/stores/sayac';

// v1.1.1 S-3: kalanSaniye saf fonksiyon testleri — sayaç doğruluğu timestamp'ten türetilir.
describe('kalanSaniye', () => {
  const taban = 1_700_000_000_000;

  it('çalışırken kalan, geçen zamanla birebir azalır', () => {
    const s = { tarifId: 't1', adimIdx: 2, bitisZamaniMs: taban + 60_000, duraklatmaKalanSn: null };
    expect(kalanSaniye(s, 't1', 2, taban)).toEqual({ kalan: 60, calisiyor: true });
    expect(kalanSaniye(s, 't1', 2, taban + 15_000)).toEqual({ kalan: 45, calisiyor: true });
    expect(kalanSaniye(s, 't1', 2, taban + 59_400)).toEqual({ kalan: 1, calisiyor: true });
  });

  it('süre geçtiyse negatif dönmez, 0a kırpılır', () => {
    const s = { tarifId: 't1', adimIdx: 0, bitisZamaniMs: taban, duraklatmaKalanSn: null };
    expect(kalanSaniye(s, 't1', 0, taban + 5_000)).toEqual({ kalan: 0, calisiyor: true });
    expect(kalanSaniye(s, 't1', 0, taban + 999_000)).toEqual({ kalan: 0, calisiyor: true });
  });

  it('duraklatılmışken zaman aksa da kalan sabittir (interval gerekmez)', () => {
    const s = { tarifId: 't1', adimIdx: 1, bitisZamaniMs: null, duraklatmaKalanSn: 42 };
    expect(kalanSaniye(s, 't1', 1, taban)).toEqual({ kalan: 42, calisiyor: false });
    expect(kalanSaniye(s, 't1', 1, taban + 300_000)).toEqual({ kalan: 42, calisiyor: false });
  });

  it('duraklat-devam turu doğru kalanla sürer (kilit senaryosu)', () => {
    // 60 sn'lik sayaç 20 sn çalıştı → duraklatıldı (kalan 40) → 5 dk sonra devam.
    const calisirken = { tarifId: 't1', adimIdx: 0, bitisZamaniMs: taban + 60_000, duraklatmaKalanSn: null };
    const kalan = kalanSaniye(calisirken, 't1', 0, taban + 20_000);
    expect(kalan).toEqual({ kalan: 40, calisiyor: true });
    const duraklatildi = { tarifId: 't1', adimIdx: 0, bitisZamaniMs: null, duraklatmaKalanSn: 40 };
    expect(kalanSaniye(duraklatildi, 't1', 0, taban + 320_000)?.kalan).toBe(40);
    // devamEt yeni bitiş kurar: simdi + 40 sn
    const devam = { tarifId: 't1', adimIdx: 0, bitisZamaniMs: taban + 320_000 + 40_000, duraklatmaKalanSn: null };
    expect(kalanSaniye(devam, 't1', 0, taban + 330_000)).toEqual({ kalan: 30, calisiyor: true });
  });

  it('başka tarif/adım için null döner', () => {
    const s = { tarifId: 't1', adimIdx: 0, bitisZamaniMs: taban + 10_000, duraklatmaKalanSn: null };
    expect(kalanSaniye(s, 't2', 0, taban)).toBeNull();
    expect(kalanSaniye(s, 't1', 3, taban)).toBeNull();
  });

  it('sayaç kurulu değilse null döner', () => {
    const s = { tarifId: null, adimIdx: null, bitisZamaniMs: null, duraklatmaKalanSn: null };
    expect(kalanSaniye(s, 't1', 0, taban)).toBeNull();
  });
});
