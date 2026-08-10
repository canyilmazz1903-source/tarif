# 🍲 Tencere — Türk Yemek Tarifleri

**"Bugün ne pişirsem?" sorusunu 10 saniyede cevaplayan, mutfakta eller serbest kullanılan, israfı ve maliyeti düşünen tarif uygulaması.**

Expo (React Native) ile geliştirildi. **50 denenmiş, ölçülü Türk yemeği tarifi** uygulamaya gömülüdür — internet bağlantısı olmadan tüm özellikler çalışır.

## Özellikler

- **Keşfet** — saat + mevsim + beslenme tercihine göre günlük 3 öneri; "15 Dakikada", "Tek Tencere", "Mevsiminde", "Artanı Değerlendir", "Osmanlı Mutfağı", "Editör Onaylı" koleksiyon rayları
- **Pişirme Modu** — kararmayan ekran (keep-awake), adım başına gömülü zamanlayıcı, sesli adım okuma (TR), unlu parmak dostu ≥64pt butonlar
- **Ölçü motoru** — su bardağı ↔ gram dönüşümü (un 1 bardak = 130 g, şeker = 180 g, pirinç = 200 g…), porsiyon ayarında akıllı kesir yuvarlama (1⅓ su bardağı)
- **Dolapta Ne Var** — evdeki malzemeleri işaretle, "3/4 malzeme sende var, eksik: krema" formatında sonuç
- **Artanı Değerlendir** — kalan malzemeden israf-önleme tarifleri (tirit, ekmek köftesi, kol böreği, ekmek tatlısı…)
- **Maliyet motoru** — malzeme fiyatlarından porsiyon başına tahmini TL + ₺/₺₺/₺₺₺ rozetleri
- **Haftalık Planlayıcı** — öğünlere tarif ekle, haftanın tahmini maliyetini gör, tek dokunuşla birleştirilmiş alışveriş listesi (reyona göre gruplu)
- **Defterim** — kayıtlı tarifler tamamen offline
- **Koyu mod** — sistem takipli + manuel; Fraunces + Inter tipografi

## Kurulum (yerel geliştirme)

```bash
npm install
npx expo start
```

Testler ve tip kontrolü:

```bash
npm run typecheck
npm test
```

## Codemagic ile build

Repo kökündeki [codemagic.yaml](codemagic.yaml) üç workflow içerir:

| Workflow | Gereksinim | Çıktı |
|---|---|---|
| `android-onizleme` | **Hiçbir kurulum gerektirmez** | Test APK'sı |
| `ios-appstore` | App Store Connect API anahtarı (ad: `tencere-asc`) | TestFlight'a otomatik IPA |
| `android-playstore` | Keystore (referans adı: `tencere_keystore`) | İmzalı AAB |

İlk denemede `android-onizleme` çalıştırarak pipeline'ın yeşil olduğunu doğrula; sonra mağaza workflow'larını kur. Adım adım kurulum rehberi için Claude artifact'ine bak.

- **Bundle ID / Package:** `com.canyilmaz.tencere`
- Native klasörler (`ios/`, `android/`) repoda tutulmaz; her build'de `npx expo prebuild` ile üretilir (CNG).

## App Store gizlilik beyanı (özet)

Uygulama **hiçbir kişisel veri toplamaz**: hesap yok, analitik yok, reklam SDK'sı yok, ağ çağrısı yok. Tüm veriler (kayıtlı tarifler, dolap, plan, alışveriş listesi) cihazda AsyncStorage'da saklanır.

- App Privacy: **"Data Not Collected"**
- ATT (App Tracking Transparency): **gerekmez**
- Şifreleme beyanı: `ITSAppUsesNonExemptEncryption = false` (app.json'da hazır)

## Proje yapısı

```
src/
  app/                  # expo-router ekranları
    (tabs)/             # Keşfet, Ara, Planlayıcı, Defterim, Profil
    tarif/[id].tsx      # Tarif detay (porsiyon + ölçü toggle)
    pisirme/[id].tsx    # Tam ekran Pişirme Modu
    alisveris.tsx       # Alışveriş listesi (modal)
    onboarding.tsx
  components/           # TarifKarti, ui/ (Buton, Cip, Rozet, Yazi, Ekran)
  data/
    malzemeler.ts       # 90+ malzeme sözlüğü (dönüşüm katsayıları + fiyatlar)
    tarifler/           # 50 tarif, kategoriye göre 7 dosya
  lib/                  # olcu-motoru, maliyet, ara, oneri (+testler)
  stores/               # zustand persist: ayarlar, kayitli, dolap, plan, alisveris
  types/tarif.ts
```

## Kritik akış (manuel test senaryosu)

1. Uygulamayı aç → onboarding'i geç
2. Keşfet'te günlük 3 öneriden birine dokun
3. Tarif detayında porsiyonu 4 → 6 yap, "Gram" toggle'ına bas
4. "PİŞİRMEYE BAŞLA" → adımlarda ilerle, zamanlayıcıyı başlat
5. Bitir → deftere kaydet
6. Planlayıcı'da bir öğüne tarif ekle → "Alışveriş listesini çıkar"
7. Uçak moduna al → Defterim'den kayıtlı tarifi aç (tam çalışır)
