# Üretilen PNG'leri uygulama boyutlarına indirger ve webp'e çevirir.
# Gereksinim: pip install pillow
# Kullanım: python isle.py
# Girdi: cikti/{tip}/{slug}.png  ->  Çıktı: webp/{tip}/{slug}.webp (512) + webp/{tip}/{slug}_ikon.webp (192)

import os

from PIL import Image

BURASI = os.path.dirname(os.path.abspath(__file__))
CIKTI = os.path.join(BURASI, "cikti")
WEBP = os.path.join(BURASI, "webp")

def isle(kaynak: str, hedef_512: str, hedef_192: str):
    img = Image.open(kaynak).convert("RGB")
    img_512 = img.resize((512, 512), Image.LANCZOS)
    img_512.save(hedef_512, "WEBP", quality=80)
    img_192 = img.resize((192, 192), Image.LANCZOS)
    img_192.save(hedef_192, "WEBP", quality=80)

def main():
    toplam = 0
    for tip in os.listdir(CIKTI):
        kaynak_klasor = os.path.join(CIKTI, tip)
        if not os.path.isdir(kaynak_klasor):
            continue
        hedef_klasor = os.path.join(WEBP, tip)
        os.makedirs(hedef_klasor, exist_ok=True)
        for dosya in os.listdir(kaynak_klasor):
            if not dosya.endswith(".png"):
                continue
            slug = dosya[:-4]
            hedef_512 = os.path.join(hedef_klasor, slug + ".webp")
            hedef_192 = os.path.join(hedef_klasor, slug + "_ikon.webp")
            if os.path.exists(hedef_512):
                continue
            isle(os.path.join(kaynak_klasor, dosya), hedef_512, hedef_192)
            toplam += 1
    print(f"{toplam} görsel webp'e çevrildi -> {WEBP}")

if __name__ == "__main__":
    main()
