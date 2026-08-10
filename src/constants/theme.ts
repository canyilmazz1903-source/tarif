// Tencere tasarım sistemi — sıcak, iştah açıcı, gürültüsüz.

export interface Palet {
  zemin: string;
  kart: string;
  kartIkincil: string;
  metin: string;
  metinIkincil: string;
  cizgi: string;
  birincil: string;
  birincilYumusak: string;
  ikincil: string;
  ikincilYumusak: string;
  amber: string;
  amberYumusak: string;
  hata: string;
}

export const Renkler: { light: Palet; dark: Palet } = {
  light: {
    zemin: '#FDF9F4',
    kart: '#FFFFFF',
    kartIkincil: '#F6EFE7',
    metin: '#2B2119',
    metinIkincil: '#8A7A6D',
    cizgi: '#EFE6DB',
    birincil: '#E8590C',
    birincilYumusak: '#FDEBDD',
    ikincil: '#2B8A3E',
    ikincilYumusak: '#E3F3E8',
    amber: '#E8A20C',
    amberYumusak: '#FBF3DD',
    hata: '#C92A2A',
  },
  dark: {
    zemin: '#1A1614',
    kart: '#252019',
    kartIkincil: '#2E2820',
    metin: '#F5EDE4',
    metinIkincil: '#A6988B',
    cizgi: '#38302A',
    birincil: '#FF7A2F',
    birincilYumusak: '#3A2417',
    ikincil: '#51CF66',
    ikincilYumusak: '#1E3324',
    amber: '#FFC94D',
    amberYumusak: '#3A3118',
    hata: '#FF6B6B',
  },
};

export const Bosluk = {
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 32,
} as const;

export const Yaricap = {
  s: 10,
  m: 16,
  l: 22,
  tam: 999,
} as const;

export const Font = {
  baslik: 'Fraunces_600SemiBold',
  baslikKalin: 'Fraunces_700Bold',
  govde: 'Inter_400Regular',
  govdeOrta: 'Inter_500Medium',
  govdeKalin: 'Inter_600SemiBold',
} as const;

// Dokunma hedefleri (brief: ≥44pt, pişirme modunda ≥64pt).
export const DokunmaHedefi = 44;
export const PisirmeDokunmaHedefi = 64;
