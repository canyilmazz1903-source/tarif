# Lisansı temiz referans fotoğraf toplayıcı (v1.2.1 i2i hattı).
# Kaynak sırası: Wikimedia Commons -> Openverse -> (varsa PEXELS_API_KEY ile Pexels).
# Google Görseller ASLA kullanılmaz. Kaydı LISANS.csv'de olmayan referans kullanılamaz.
#
# Kullanım:
#   python referans_indir.py                     # is-listesi.json'daki tüm tarifler
#   python referans_indir.py --sluglar a,b,c     # yalnız verilen slug'lar (pilot)
#
# Çıktı: referans/{slug}.jpg (en iyi aday), referans/_aday/{slug}_2.jpg...,
#        referans/LISANS.csv, referans/referanssiz.json

import csv
import json
import os
import sys
import time
import urllib.parse
import urllib.request

BURASI = os.path.dirname(os.path.abspath(__file__))
REFERANS = os.path.join(BURASI, "referans")
ADAY = os.path.join(REFERANS, "_aday")
LISANS_CSV = os.path.join(REFERANS, "LISANS.csv")
UA = "TencereGorselHatti/1.0 (yemek tarifi uygulamasi; egitim/stil transferi referansi)"
IZINLI_LISANSLAR = ("cc0", "cc-by", "cc by", "by", "by-sa", "cc-by-sa", "pd", "public domain")


def indir(url: str, hedef: str) -> bool:
    try:
        istek = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(istek, timeout=30) as y:
            veri = y.read()
        if len(veri) < 20_000:  # bozuk/ikon boyutlu dosyaları ele
            return False
        with open(hedef, "wb") as f:
            f.write(veri)
        return True
    except Exception:
        return False


def wikimedia_ara(sorgu: str, adet: int = 3):
    """Commons'ta arama; CC0/CC-BY/CC-BY-SA/PD olanları döner: (url, yazar, lisans, kaynak)."""
    q = urllib.parse.quote(sorgu)
    url = (
        "https://commons.wikimedia.org/w/api.php?action=query&format=json"
        f"&generator=search&gsrsearch={q}%20filetype:bitmap&gsrlimit=8&gsrnamespace=6"
        "&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=800"
    )
    try:
        istek = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(istek, timeout=30) as y:
            veri = json.loads(y.read())
    except Exception:
        return []
    sonuc = []
    for sayfa in (veri.get("query", {}).get("pages", {}) or {}).values():
        for info in sayfa.get("imageinfo", []):
            meta = info.get("extmetadata", {})
            lisans = (meta.get("LicenseShortName", {}).get("value", "") or "").lower()
            if not any(x in lisans for x in IZINLI_LISANSLAR):
                continue
            if info.get("width", 0) < 512 or info.get("height", 0) < 512:
                continue
            en, boy = info.get("width", 1), info.get("height", 1)
            if max(en, boy) / max(1, min(en, boy)) > 2:
                continue
            yazar = (meta.get("Artist", {}).get("value", "") or "")[:120]
            sonuc.append((info.get("thumburl") or info.get("url"), yazar, lisans, info.get("descriptionurl", "")))
            if len(sonuc) >= adet:
                return sonuc
    return sonuc


def openverse_ara(sorgu: str, adet: int = 3):
    q = urllib.parse.quote(sorgu)
    url = (
        f"https://api.openverse.org/v1/images/?q={q}&license=cc0,by,by-sa"
        "&size=medium,large&page_size=8"
    )
    try:
        istek = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(istek, timeout=30) as y:
            veri = json.loads(y.read())
    except Exception:
        return []
    sonuc = []
    for r in veri.get("results", []):
        en, boy = r.get("width") or 0, r.get("height") or 0
        if en and boy:
            if min(en, boy) < 512 or max(en, boy) / max(1, min(en, boy)) > 2:
                continue
        sonuc.append((r.get("url"), r.get("creator", ""), r.get("license", ""), r.get("foreign_landing_url", "")))
        if len(sonuc) >= adet:
            break
    return sonuc


def pexels_ara(sorgu: str, adet: int = 2):
    anahtar = os.environ.get("PEXELS_API_KEY")
    if not anahtar:
        return []
    q = urllib.parse.quote(sorgu)
    url = f"https://api.pexels.com/v1/search?query={q}&per_page={adet}"
    try:
        istek = urllib.request.Request(url, headers={"User-Agent": UA, "Authorization": anahtar})
        with urllib.request.urlopen(istek, timeout=30) as y:
            veri = json.loads(y.read())
    except Exception:
        return []
    return [
        (f["src"]["large"], f.get("photographer", ""), "Pexels License", f.get("url", ""))
        for f in veri.get("photos", [])
    ]


def main():
    os.makedirs(ADAY, exist_ok=True)
    with open(os.path.join(BURASI, "is-listesi.json"), encoding="utf-8") as f:
        liste = [k for k in json.load(f) if k["tip"] == "tarif" and k["slug"] != "_fallback"]
    with open(os.path.join(BURASI, "sorgu-listesi.json"), encoding="utf-8") as f:
        sorgular = {s["slug"]: s for s in json.load(f)}

    if "--sluglar" in sys.argv:
        istenen = set(sys.argv[sys.argv.index("--sluglar") + 1].split(","))
        liste = [k for k in liste if k["slug"] in istenen]

    # Lisans defteri: mevcut kayıtları koru, yenileri ekle.
    kayitlar = {}
    if os.path.exists(LISANS_CSV):
        with open(LISANS_CSV, encoding="utf-8", newline="") as f:
            for satir in csv.DictReader(f):
                kayitlar[satir["slug"]] = satir

    referanssiz = []
    for i, kalem in enumerate(liste):
        slug = kalem["slug"]
        hedef = os.path.join(REFERANS, slug + ".jpg")
        if os.path.exists(hedef) and slug in kayitlar:
            continue

        s = sorgular.get(slug, {})
        tr = (s.get("tr", "") or "").split("(")[0].strip()
        ascii_tr = tr.translate(str.maketrans("çğıöşüÇĞİÖŞÜ", "cgiosuCGIOSU"))
        en_kisa = " ".join((s.get("en", "") or "").split()[:4])
        sorgu_adaylari = [q for q in dict.fromkeys([tr, ascii_tr, en_kisa]) if q]

        adaylar = []
        kaynak_adi = ""
        for sorgu in sorgu_adaylari:
            adaylar = wikimedia_ara(sorgu)
            kaynak_adi = "Wikimedia Commons"
            if adaylar:
                break
            time.sleep(0.8)
        if not adaylar:
            for sorgu in sorgu_adaylari:
                adaylar = openverse_ara(sorgu)
                kaynak_adi = "Openverse"
                if adaylar:
                    break
                time.sleep(0.8)
        if not adaylar and en_kisa:
            adaylar = pexels_ara(en_kisa)
            kaynak_adi = "Pexels"

        indirildi = False
        for j, (url, yazar, lisans, kaynak_url) in enumerate(adaylar):
            cikti = hedef if not indirildi else os.path.join(ADAY, f"{slug}_{j+1}.jpg")
            if indir(url, cikti):
                if not indirildi:
                    kayitlar[slug] = {
                        "slug": slug,
                        "kaynak_url": kaynak_url or url,
                        "yazar": yazar,
                        "lisans": lisans,
                        "kaynak": kaynak_adi,
                        "tarih": time.strftime("%Y-%m-%d"),
                    }
                    indirildi = True
        if not indirildi:
            referanssiz.append(slug)
        print(f"[{i+1}/{len(liste)}] {slug}: {'OK (' + kaynak_adi + ')' if indirildi else 'REFERANSSIZ'}", flush=True)
        time.sleep(1.2)  # rate limit saygısı
        if (i + 1) % 50 == 0:
            time.sleep(10)

    with open(LISANS_CSV, "w", encoding="utf-8", newline="") as f:
        alanlar = ["slug", "kaynak_url", "yazar", "lisans", "kaynak", "tarih"]
        w = csv.DictWriter(f, fieldnames=alanlar)
        w.writeheader()
        for k in sorted(kayitlar):
            w.writerow({a: kayitlar[k].get(a, "") for a in alanlar})

    with open(os.path.join(REFERANS, "referanssiz.json"), "w", encoding="utf-8") as f:
        json.dump(sorted(referanssiz), f, ensure_ascii=False, indent=1)
    print(f"Bitti: {len(kayitlar)} referans, {len(referanssiz)} referanssiz (txt2img'de kalacak).")


if __name__ == "__main__":
    main()
