import type { Tarif } from '@/types/tarif';
import { normalize } from '@/lib/ara';
import type { KacinmaGrubu } from '@/stores/ayarlar';

// Etiket bazlı kaçınma: grup seçiliyken ilgili "-siz" etiketi OLMAYAN tarif gizlenir.
const ETIKET_KURALI: Partial<Record<KacinmaGrubu, 'glutensiz' | 'laktozsuz'>> = {
  gluten: 'glutensiz',
  laktoz: 'laktozsuz',
};

// Malzeme bazlı kaçınma grupları.
const GRUP_MALZEMELERI: Record<KacinmaGrubu, string[]> = {
  gluten: [],
  laktoz: [],
  deniz: ['hamsi', 'levrek', 'somon', 'ton balığı (konserve)', 'karides', 'midye'],
  'findik-fistik': [
    'fındık içi',
    'antep fıstığı',
    'çam fıstığı',
    'yer fıstığı ezmesi',
    'badem',
    'ceviz içi',
  ],
};

export const KACINMA_GRUPLARI: Array<{ key: KacinmaGrubu; ad: string }> = [
  { key: 'gluten', ad: 'Gluten' },
  { key: 'laktoz', ad: 'Laktoz' },
  { key: 'deniz', ad: 'Kabuklu deniz ürünü & balık' },
  { key: 'findik-fistik', ad: 'Fındık & fıstık' },
];

export interface AlerjiTercihleri {
  yiyemedikleri: string[];
  kacinmaGruplari: KacinmaGrubu[];
  alerjiFiltresiAcik: boolean;
}

/**
 * Tarifin, kullanıcının yiyemediklerine takılıp takılmadığını döner.
 * Takılıyorsa `sebepler` hangi malzeme/grup yüzünden olduğunu listeler
 * (doğrudan linkle açılan tarifte uyarı bandında gösterilir).
 */
export function tarifEngelleri(tarif: Tarif, tercih: AlerjiTercihleri): string[] {
  const sebepler: string[] = [];
  const yasakli = new Set(tercih.yiyemedikleri.map((a) => normalize(a)));
  for (const g of tercih.kacinmaGruplari) {
    for (const m of GRUP_MALZEMELERI[g]) yasakli.add(normalize(m));
  }

  for (const m of tarif.malzemeler) {
    if (yasakli.has(normalize(m.ad))) sebepler.push(m.ad);
  }

  for (const g of tercih.kacinmaGruplari) {
    const etiket = ETIKET_KURALI[g];
    if (etiket && !tarif.beslenmeEtiketleri.includes(etiket)) {
      sebepler.push(g === 'gluten' ? 'gluten' : 'laktoz');
    }
  }

  return [...new Set(sebepler)];
}

/** Global filtre: yiyemediklerini içeren tarifler hiçbir listede görünmez. */
export function alerjiFiltresi(tarifler: Tarif[], tercih: AlerjiTercihleri): Tarif[] {
  if (!tercih.alerjiFiltresiAcik) return tarifler;
  if (tercih.yiyemedikleri.length === 0 && tercih.kacinmaGruplari.length === 0) return tarifler;
  return tarifler.filter((t) => tarifEngelleri(t, tercih).length === 0);
}
