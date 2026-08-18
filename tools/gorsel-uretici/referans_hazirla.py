# Referans fotoğrafları i2i girişine hazırlar: kare merkez kırpma + 512x512.
# --vinyet: kenarlara %10 krem vinyet karıştırır (stil dönüşümünü kolaylaştırma denemesi;
# pilotta aç/kapa karşılaştırılır).
# Kullanım: python referans_hazirla.py [--vinyet] [--sluglar a,b,c]
# Çıktı: referans-hazir/{slug}.png

import os
import sys

from PIL import Image, ImageDraw, ImageFilter

BURASI = os.path.dirname(os.path.abspath(__file__))
REFERANS = os.path.join(BURASI, "referans")
HAZIR = os.path.join(BURASI, "referans-hazir")
KREM = (253, 249, 244)


def vinyet_uygula(img: Image.Image) -> Image.Image:
    """Kenarlarda kreme karışan yumuşak maske (%10 bant)."""
    b = img.size[0]
    maske = Image.new("L", (b, b), 0)
    ciz = ImageDraw.Draw(maske)
    kenar = int(b * 0.10)
    ciz.rounded_rectangle([kenar, kenar, b - kenar, b - kenar], radius=kenar, fill=255)
    maske = maske.filter(ImageFilter.GaussianBlur(kenar // 2))
    zemin = Image.new("RGB", (b, b), KREM)
    return Image.composite(img, zemin, maske)


def main():
    vinyet = "--vinyet" in sys.argv
    secili = None
    if "--sluglar" in sys.argv:
        secili = set(sys.argv[sys.argv.index("--sluglar") + 1].split(","))

    os.makedirs(HAZIR, exist_ok=True)
    say = 0
    for dosya in sorted(os.listdir(REFERANS)):
        if not dosya.endswith(".jpg"):
            continue
        slug = dosya[:-4]
        if secili and slug not in secili:
            continue
        try:
            img = Image.open(os.path.join(REFERANS, dosya)).convert("RGB")
        except Exception:
            print(f"BOZUK: {dosya}")
            continue
        en, boy = img.size
        kisa = min(en, boy)
        img = img.crop(((en - kisa) // 2, (boy - kisa) // 2, (en + kisa) // 2, (boy + kisa) // 2))
        img = img.resize((512, 512), Image.LANCZOS)
        if vinyet:
            img = vinyet_uygula(img)
        img.save(os.path.join(HAZIR, slug + ".png"))
        say += 1
    print(f"{say} referans hazırlandı -> {HAZIR} (vinyet: {'açık' if vinyet else 'kapalı'})")


if __name__ == "__main__":
    main()
