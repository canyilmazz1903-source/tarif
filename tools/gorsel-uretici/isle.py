# Üretilen PNG'leri uygulama boyutlarına indirger ve webp'e çevirir.
# Boyut bütçesi (v1.1.1 brief G-1.4): kart webp ortalama <= 40 KB, toplam <= 15 MB.
# Kalite 80'den başlar; ortalama aşılırsa kalite düşürülür, yine aşılırsa kart 448'e iner.
# Gereksinim: Pillow (ComfyUI gömülü Python'da mevcut).

import os

from PIL import Image

BURASI = os.path.dirname(os.path.abspath(__file__))
CIKTI = os.path.join(BURASI, "cikti")
WEBP = os.path.join(BURASI, "webp")

HEDEF_ORT_KART_KB = 40
HEDEF_TOPLAM_MB = 15


def tum_pngler():
    isler = []
    for tip in sorted(os.listdir(CIKTI)):
        klasor = os.path.join(CIKTI, tip)
        if not os.path.isdir(klasor):
            continue
        for dosya in sorted(os.listdir(klasor)):
            if dosya.endswith(".png"):
                isler.append((tip, dosya[:-4]))
    return isler


def isle(kart_boy: int, kalite: int) -> tuple[int, int]:
    """Hepsini dönüştürür; (kart_toplam_bayt, dosya_sayisi) döner."""
    kart_toplam = 0
    say = 0
    for tip, slug in tum_pngler():
        hedef_klasor = os.path.join(WEBP, tip)
        os.makedirs(hedef_klasor, exist_ok=True)
        img = Image.open(os.path.join(CIKTI, tip, slug + ".png")).convert("RGB")

        hedef_512 = os.path.join(hedef_klasor, slug + ".webp")
        img.resize((kart_boy, kart_boy), Image.LANCZOS).save(hedef_512, "WEBP", quality=kalite)
        kart_toplam += os.path.getsize(hedef_512)

        hedef_192 = os.path.join(hedef_klasor, slug + "_ikon.webp")
        img.resize((192, 192), Image.LANCZOS).save(hedef_192, "WEBP", quality=kalite)
        say += 1
    return kart_toplam, say


def main():
    denemeler = [(512, 80), (512, 70), (448, 70), (448, 60)]
    for kart_boy, kalite in denemeler:
        kart_toplam, say = isle(kart_boy, kalite)
        if say == 0:
            print("Islenecek PNG yok.")
            return
        ort_kb = kart_toplam / say / 1024
        toplam_mb = sum(
            os.path.getsize(os.path.join(kok, f))
            for kok, _, dosyalar in os.walk(WEBP)
            for f in dosyalar
        ) / (1024 * 1024)
        print(f"boy={kart_boy} kalite={kalite}: {say} gorsel, kart ort {ort_kb:.1f} KB, toplam {toplam_mb:.1f} MB")
        if ort_kb <= HEDEF_ORT_KART_KB and toplam_mb <= HEDEF_TOPLAM_MB:
            print("Butce tutturuldu.")
            return
        print("Butce asildi, bir kademe dusuruluyor...")
    print("UYARI: en dusuk kademede de butce asildi; eldeki sonuc kullanilacak.")


if __name__ == "__main__":
    main()
