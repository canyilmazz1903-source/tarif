# Tüm referans/*.jpg dosyalarını etiketli ızgara (kontakt sayfası) halinde
# birleştirir; Claude'un görsel olarak hızlıca tarayıp yemekle alakasız
# fotoğrafları (kuş, tablo, heykel, histoloji vb.) tespit etmesi için.
# Kullanım: python kontakt_sayfa.py
# Çıktı: kontakt/sayfa-001.jpg, sayfa-002.jpg, ...

import csv
import os

from PIL import Image, ImageDraw, ImageFont

BURASI = os.path.dirname(os.path.abspath(__file__))
REFERANS = os.path.join(BURASI, "referans")
KONTAKT = os.path.join(BURASI, "kontakt")
SUTUN, SATIR = 5, 5
HUCRE = 180
ETIKET_YUKSEKLIK = 22

os.makedirs(KONTAKT, exist_ok=True)

sluglar = sorted(
    r["slug"] for r in csv.DictReader(open(os.path.join(REFERANS, "LISANS.csv"), encoding="utf-8"))
)

sayfa_boyut = SUTUN * SATIR
try:
    font = ImageFont.truetype("arial.ttf", 13)
except Exception:
    font = ImageFont.load_default()

for sayfa_no in range(0, len(sluglar), sayfa_boyut):
    grup = sluglar[sayfa_no : sayfa_no + sayfa_boyut]
    genislik = SUTUN * HUCRE
    yukseklik = SATIR * (HUCRE + ETIKET_YUKSEKLIK)
    sayfa = Image.new("RGB", (genislik, yukseklik), (255, 255, 255))
    ciz = ImageDraw.Draw(sayfa)
    for i, slug in enumerate(grup):
        x = (i % SUTUN) * HUCRE
        y = (i // SUTUN) * (HUCRE + ETIKET_YUKSEKLIK)
        yol = os.path.join(REFERANS, slug + ".jpg")
        try:
            img = Image.open(yol).convert("RGB")
            kisa = min(img.size)
            img = img.crop(
                (
                    (img.size[0] - kisa) // 2,
                    (img.size[1] - kisa) // 2,
                    (img.size[0] + kisa) // 2,
                    (img.size[1] + kisa) // 2,
                )
            ).resize((HUCRE, HUCRE), Image.LANCZOS)
            sayfa.paste(img, (x, y))
        except Exception:
            ciz.rectangle([x, y, x + HUCRE, y + HUCRE], fill=(230, 230, 230))
        ciz.rectangle([x, y + HUCRE, x + HUCRE, y + HUCRE + ETIKET_YUKSEKLIK], fill=(20, 20, 20))
        ciz.text((x + 3, y + HUCRE + 4), slug[:26], fill=(255, 255, 255), font=font)
    no = sayfa_no // sayfa_boyut + 1
    sayfa.save(os.path.join(KONTAKT, f"sayfa-{no:03d}.jpg"), quality=78)

print(f"{len(sluglar)} referans, {(len(sluglar) + sayfa_boyut - 1)//sayfa_boyut} sayfa -> {KONTAKT}")
