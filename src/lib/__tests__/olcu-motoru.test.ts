import { cevir, gramaCevir, kesirYazi, miktarYazi, porsiyonla, pratikKesir } from '@/lib/olcu-motoru';

describe('ölçü motoru — grama çevirme', () => {
  it('1 su bardağı un = 130 g', () => {
    expect(gramaCevir(1, 'su bardağı', 'un')).toBe(130);
  });

  it('1 su bardağı toz şeker = 180 g', () => {
    expect(gramaCevir(1, 'su bardağı', 'toz şeker')).toBe(180);
  });

  it('1 su bardağı pirinç = 200 g', () => {
    expect(gramaCevir(1, 'su bardağı', 'pirinç')).toBe(200);
  });

  it('2 yemek kaşığı tereyağı = 30 g', () => {
    expect(gramaCevir(2, 'yemek kaşığı', 'tereyağı')).toBe(30);
  });

  it('3 adet yumurta = 180 g', () => {
    expect(gramaCevir(3, 'adet', 'yumurta')).toBe(180);
  });

  it('gram zaten gramdır', () => {
    expect(gramaCevir(250, 'g', 'kıyma')).toBe(250);
  });

  it('sözlükte olmayan malzeme + bardak ölçüsü → null (sessizce atla)', () => {
    expect(gramaCevir(1, 'su bardağı', 'ejderha meyvesi')).toBeNull();
  });

  it('katsayısı olmayan birim → null', () => {
    expect(gramaCevir(1, 'paket', 'un')).toBeNull();
  });
});

describe('ölçü motoru — ölçü ↔ gram toggle', () => {
  it('bardak → gram dönüşümü', () => {
    expect(cevir(2, 'su bardağı', 'gram', 'un')).toEqual({ miktar: 260, birim: 'g' });
  });

  it('gram → bardak dönüşümü', () => {
    const sonuc = cevir(260, 'g', 'olcu', 'un');
    expect(sonuc?.birim).toBe('su bardağı');
    expect(sonuc?.miktar).toBeCloseTo(2);
  });

  it('zaten gram olan satır gram modunda değişmez (null)', () => {
    expect(cevir(500, 'g', 'gram', 'kıyma')).toBeNull();
  });

  it('katsayısız malzeme dönüşmez (null)', () => {
    expect(cevir(1, 'su bardağı', 'gram', 'bilinmeyen-şey')).toBeNull();
  });
});

describe('ölçü motoru — porsiyonlama', () => {
  it('4 → 6 porsiyon: miktar 1.5 katına çıkar', () => {
    expect(porsiyonla(2, 4, 6)).toBe(3);
  });

  it('4 → 2 porsiyon: miktar yarıya iner', () => {
    expect(porsiyonla(500, 4, 2)).toBe(250);
  });

  it('geçersiz eski porsiyon miktarı bozmaz', () => {
    expect(porsiyonla(100, 0, 4)).toBe(100);
  });
});

describe('ölçü motoru — akıllı gösterim', () => {
  it('1.33 su bardağı → 1⅓', () => {
    expect(miktarYazi(4 / 3, 'su bardağı')).toBe('1⅓ su bardağı');
  });

  it('0.5 → ½', () => {
    expect(kesirYazi(0.5)).toBe('½');
  });

  it('247 g → 245 g (5\'e yuvarlama)', () => {
    expect(miktarYazi(247, 'g')).toBe('245 g');
  });

  it('0.4 adet yumurta → ½ adet (yarımdan aşağı inmez)', () => {
    expect(miktarYazi(0.4, 'adet')).toBe('½ adet');
  });

  it('pratik kesir: 1.4 → 1⅓ değil 1.5 mi? En yakın: 1⅓ (0.4→0.33)', () => {
    expect(pratikKesir(1.36)).toBeCloseTo(1 + 1 / 3);
  });

  it('tam sayılar dokunulmaz', () => {
    expect(kesirYazi(3)).toBe('3');
  });
});
