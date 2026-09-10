# Mevcut LISANS.csv kayıtlarını geriye dönük doğrular ve yemekle alakasız
# referansları (yanlış eşleşme, aynı görselin birden fazla tarife atanması)
# temizler. Kullanıcı şikayeti: bazı referans fotoğrafların (havuç tarator,
# hamsi buğulama, haydari, gül sulu muhallebi...) tarifle hiç ilgisi yoktu —
# kök neden Wikimedia/Openverse'in kelime-eşleşmeli aramasının bazen tablo/
# mücevher/gazete taraması/çiçek gibi tamamen alakasız CC-lisanslı içerik
# döndürmesiydi. referans_indir.py artık bu tür sonuçları baştan eliyor
# (KARA_LISTE); bu script GEÇMİŞTE indirilmiş olanları aynı ölçütle süzer.
#
# Kullanım: python referans_dogrula.py
# Çıktı: referans/LISANS.csv güncellenir (kötü kayıtlar silinir),
#        referans/{slug}.jpg silinir, referans/silinen-rapor.json yazılır.
#        Silinen slug'lar bir sonraki referans_indir.py çalıştırmasında
#        (artık düzeltilmiş sorgu/filtre ile) yeniden denenecek.

import csv
import json
import os
import sys
import time
import urllib.parse

BURASI = os.path.dirname(os.path.abspath(__file__))
if BURASI not in sys.path:
    sys.path.insert(0, BURASI)  # embedded python'un ._pth'i betik dizinini otomatik eklemiyor

from referans_indir import KARA_LISTE, YIL_PARANTEZ, UA, openverse_ara  # noqa: E402
REFERANS = os.path.join(BURASI, "referans")
LISANS_CSV = os.path.join(REFERANS, "LISANS.csv")


def wikimedia_dosya_adi(kaynak_url: str) -> str:
    if "/wiki/File:" not in kaynak_url:
        return ""
    ad = kaynak_url.split("/wiki/File:")[-1]
    ad = urllib.parse.unquote(ad).replace("_", " ")
    return ad


def kara_listede_mi(metin: str) -> bool:
    m = metin.lower()
    if any(k in m for k in KARA_LISTE):
        return True
    if YIL_PARANTEZ.search(m):
        return True
    return False


def main():
    with open(LISANS_CSV, encoding="utf-8", newline="") as f:
        satirlar = list(csv.DictReader(f))
    with open(os.path.join(BURASI, "sorgu-listesi.json"), encoding="utf-8") as f:
        sorgular = {s["slug"]: s for s in json.load(f)}

    sil = {}  # slug -> sebep

    # 1) Aynı kaynak görsel birden fazla tarife atanmış mı? (kesin işaret)
    url_sahipleri: dict[str, list[str]] = {}
    for s in satirlar:
        url_sahipleri.setdefault(s["kaynak_url"], []).append(s["slug"])
    for url, sluglar in url_sahipleri.items():
        if len(sluglar) > 1:
            for sl in sluglar:
                sil[sl] = f"yinelenen_gorsel ({'/'.join(sluglar)})"

    # 2) Wikimedia: dosya adını URL'den çıkar, kara liste + yıl kalıbı kontrolü.
    wikimedia_kontrol = 0
    for s in satirlar:
        if s["slug"] in sil:
            continue
        if s["kaynak"] != "Wikimedia Commons":
            continue
        dosya_adi = wikimedia_dosya_adi(s["kaynak_url"])
        wikimedia_kontrol += 1
        if dosya_adi and kara_listede_mi(dosya_adi):
            sil[s["slug"]] = f"kara_liste_baslik ({dosya_adi[:80]})"

    # 3) Openverse: aynı sorgularla taze arama yap, kayıtlı URL hâlâ (filtrelenmiş)
    #    sonuçlar arasında mı diye bak. Yoksa şüpheli say.
    openverse_satirlar = [s for s in satirlar if s["slug"] not in sil and s["kaynak"] == "Openverse"]
    for i, s in enumerate(openverse_satirlar):
        slug = s["slug"]
        q = sorgular.get(slug, {})
        tr = (q.get("tr", "") or "").split("(")[0].strip()
        ascii_tr = tr.translate(str.maketrans("çğıöşüÇĞİÖŞÜ", "cgiosuCGIOSU"))
        en_kisa = " ".join((q.get("en", "") or "").split()[:4])
        bulundu = False
        for sorgu in dict.fromkeys([q for q in [tr, ascii_tr, en_kisa] if q]):
            taze = openverse_ara(sorgu, adet=8)
            if any(u == s["kaynak_url"] for (_url, _y, _l, u) in taze):
                bulundu = True
                break
            time.sleep(0.6)
        if not bulundu:
            sil[slug] = "openverse_dogrulanamadi"
        print(f"[openverse {i+1}/{len(openverse_satirlar)}] {slug}: {'OK' if bulundu else 'SUPHELI'}", flush=True)

    # Uygula: kötü kayıtları sil (dosya + CSV satırı).
    silinenler = []
    kalanlar = []
    for s in satirlar:
        if s["slug"] in sil:
            silinenler.append({"slug": s["slug"], "sebep": sil[s["slug"]], "eski_kaynak_url": s["kaynak_url"]})
            hedef = os.path.join(REFERANS, s["slug"] + ".jpg")
            if os.path.exists(hedef):
                os.remove(hedef)
        else:
            kalanlar.append(s)

    with open(LISANS_CSV, "w", encoding="utf-8", newline="") as f:
        alanlar = ["slug", "kaynak_url", "yazar", "lisans", "kaynak", "tarih"]
        w = csv.DictWriter(f, fieldnames=alanlar)
        w.writeheader()
        for s in sorted(kalanlar, key=lambda x: x["slug"]):
            w.writerow({a: s.get(a, "") for a in alanlar})

    with open(os.path.join(REFERANS, "silinen-rapor.json"), "w", encoding="utf-8") as f:
        json.dump(silinenler, f, ensure_ascii=False, indent=1)

    print(f"\nToplam kayit: {len(satirlar)}")
    print(f"Wikimedia kontrol edildi: {wikimedia_kontrol}")
    print(f"Openverse yeniden dogrulandi: {len(openverse_satirlar)}")
    print(f"SILINEN (yanlis/supheli): {len(silinenler)}")
    for s in silinenler:
        print(f"  - {s['slug']}: {s['sebep']}")
    print(f"Kalan temiz referans: {len(kalanlar)}")


if __name__ == "__main__":
    main()
