import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

/**
 * aktif=true iken her `aralikMs`de bir şimdiki zamanı döner → bileşeni tazeler.
 * Sayaç doğruluğu store'daki bitiş timestamp'inden gelir; bu hook yalnız görüntü
 * katmanını tazeler (v1.1.1 brief S-1). Kilitten dönüşte AppState dinleyicisi
 * ilk kareyi beklemeden doğru değeri bastırır. Pasifken interval kurulmaz (pil dostu).
 */
export function useSimdi(aktif: boolean, aralikMs = 500): number {
  const [simdi, setSimdi] = useState(() => Date.now());
  useEffect(() => {
    if (!aktif) return;
    setSimdi(Date.now()); // aktifleşince anında senkron
    const id = setInterval(() => setSimdi(Date.now()), aralikMs);
    const sub = AppState.addEventListener('change', (d) => {
      if (d === 'active') setSimdi(Date.now()); // kilitten dönüşte anında doğru değer
    });
    return () => {
      clearInterval(id);
      sub.remove();
    };
  }, [aktif, aralikMs]);
  return simdi;
}
