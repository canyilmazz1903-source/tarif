# Lisansı temiz referans fotoğraf toplayıcı (v1.2.1 i2i hattı).
# Kaynak sırası: Wikimedia Commons -> Openverse -> Unsplash (varsa UNSPLASH_ACCESS_KEY) ->
#                Pixabay (varsa PIXABAY_API_KEY) -> Pexels (varsa PEXELS_API_KEY).
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
import re
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

# Başlık/açıklama kara listesi: yemekle alakasız ama kelime eşleşmesiyle üste
# çıkan sonuçları eler (tarihi belge/tablo, mücevher, gazete taraması, doğa
# fotoğrafı vb.). "gerçek referans yanlış olursa yanlış üretir" riskinden
# kaçınmak için referanssız (txt2img'e düşen) tercih edilir.
KARA_LISTE = (
    "gallica", "bnf", "manuscript", "manuscrit", "engraving", "lithograph",
    "woodcut", "painting", "portrait", "postcard", "stamp", "coin", "jewelry",
    "jewellery", "pendant", "necklace", "earring", "bracelet", "brooch",
    "gemstone", "coat of arms", "newspaper", "gazette", "advertisement",
    "flag of", "map of", "statue", "sculpture", "botanical illustration",
    "butterfly", "beetle", "insect", "wildlife", "songbird", "postage",
    ", part ", "commercial appeal", "press-scimitar", "tribune", "biography",
    "obituary", "atherosclerosis", "histology", "histopatholog", "pathology",
    "biopsy", "carcinoma", "tumor", "tumour", "lesion", "specimen", "autopsy",
    "cadaver", "hematoxylin", "eosin", " h&e ", "microscop", "anatomy",
    "anatomical", "x-ray", "radiograph", "mri scan", "ct scan", "surgery",
    "surgical", "diagnosis", "syndrome", "disease", "virus", "bacteria",
    "cell nucleus", "pathologic",
)
# Tek yıl "(1946)", doğum-ölüm aralığı "(1887-1952)" ya da tam tarih
# "October 4, 1946" — hepsi tarihi arşiv/gazete/biyografi fotoğrafı işareti;
# modern bir yemek fotoğrafının dosya adında bu kalıplar bulunmaz.
YIL_PARANTEZ = re.compile(r"\((1[3-9]\d{2}|20[0-2]\d)(\s*-\s*(1[3-9]\d{2}|20[0-2]\d))?\)")
TAM_TARIH = re.compile(
    r"(january|february|march|april|may|june|july|august|september|october|"
    r"november|december)\s+\d{1,2},?\s+(1[89]\d{2}|20[0-2]\d)",
    re.IGNORECASE,
)


def baslik_temiz_mi(*parcalar: str) -> bool:
    """True: başlık/açıklama kara listeye ya da tarihi-belge kalıbına girmiyor."""
    metin = " ".join(p for p in parcalar if p).lower()
    if any(k in metin for k in KARA_LISTE):
        return False
    if YIL_PARANTEZ.search(metin) or TAM_TARIH.search(metin):
        return False
    return True


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
        baslik = sayfa.get("title", "")
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
            aciklama = (meta.get("ImageDescription", {}).get("value", "") or "")
            if not baslik_temiz_mi(baslik, aciklama):
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
        etiketler = " ".join(t.get("name", "") for t in (r.get("tags") or []) if isinstance(t, dict))
        if not baslik_temiz_mi(r.get("title", ""), etiketler):
            continue
        sonuc.append((r.get("url"), r.get("creator", ""), r.get("license", ""), r.get("foreign_landing_url", "")))
        if len(sonuc) >= adet:
            break
    return sonuc


def unsplash_ara(sorgu: str, adet: int = 3):
    anahtar = os.environ.get("UNSPLASH_ACCESS_KEY")
    if not anahtar:
        return []
    q = urllib.parse.quote(sorgu)
    url = f"https://api.unsplash.com/search/photos?query={q}&per_page={adet}&orientation=squarish"
    try:
        istek = urllib.request.Request(
            url, headers={"User-Agent": UA, "Authorization": f"Client-ID {anahtar}"}
        )
        with urllib.request.urlopen(istek, timeout=30) as y:
            veri = json.loads(y.read())
    except Exception:
        return []
    sonuc = []
    for r in veri.get("results", []):
        en, boy = r.get("width") or 0, r.get("height") or 0
        if en and boy and max(en, boy) / max(1, min(en, boy)) > 2:
            continue
        aciklama = " ".join(filter(None, [r.get("description"), r.get("alt_description")]))
        if not baslik_temiz_mi(aciklama):
            continue
        yazar = ((r.get("user") or {}).get("name", "") or "")[:120]
        sonuc.append((r["urls"]["regular"], yazar, "Unsplash License", r.get("links", {}).get("html", "")))
    return sonuc


def pixabay_ara(sorgu: str, adet: int = 3):
    anahtar = os.environ.get("PIXABAY_API_KEY")
    if not anahtar:
        return []
    q = urllib.parse.quote(sorgu)
    url = (
        f"https://pixabay.com/api/?key={anahtar}&q={q}&image_type=photo"
        f"&category=food&safesearch=true&per_page={max(3, adet)}"
    )
    try:
        istek = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(istek, timeout=30) as y:
            veri = json.loads(y.read())
    except Exception:
        return []
    sonuc = []
    for r in veri.get("hits", []):
        en, boy = r.get("imageWidth") or 0, r.get("imageHeight") or 0
        if en and boy and (min(en, boy) < 512 or max(en, boy) / max(1, min(en, boy)) > 2):
            continue
        if not baslik_temiz_mi(r.get("tags", "")):
            continue
        sonuc.append((r.get("largeImageURL"), r.get("user", ""), "Pixabay License", r.get("pageURL", "")))
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
        # Not: tek/iki kelimelik kısa sorgular ("Gül Sulu Su", "bowl of" gibi)
        # yemekle alakasız ama kelime eşleşen sonuçlara (çiçek, mücevher, tarihi
        # belge) yol açtığı görüldü — Wikimedia/Openverse'de SADECE tam, tarif-
        # spesifik sorgular kullanılır. Kısaltılmış varyantlar denenmez.
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
            adaylar = unsplash_ara(en_kisa)
            kaynak_adi = "Unsplash"
        if not adaylar and en_kisa:
            adaylar = pixabay_ara(en_kisa)
            kaynak_adi = "Pixabay"
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
