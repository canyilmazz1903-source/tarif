import { useMemo } from 'react';

import { TARIFLER } from '@/data/tarifler';
import { alerjiFiltresi } from '@/lib/alerji';
import { useAyarlar } from '@/stores/ayarlar';

/**
 * Yiyemedikleri filtresi uygulanmış tarif listesi.
 * Keşfet, arama, dolap ve planlayıcı hep bunun üzerinden çalışır —
 * yiyemediği malzemeyi içeren tarif hiçbir listede görünmez (brief P1-3).
 */
export function useTarifler() {
  const yiyemedikleri = useAyarlar((s) => s.yiyemedikleri);
  const kacinmaGruplari = useAyarlar((s) => s.kacinmaGruplari);
  const alerjiFiltresiAcik = useAyarlar((s) => s.alerjiFiltresiAcik);

  return useMemo(
    () => alerjiFiltresi(TARIFLER, { yiyemedikleri, kacinmaGruplari, alerjiFiltresiAcik }),
    [yiyemedikleri, kacinmaGruplari, alerjiFiltresiAcik],
  );
}
