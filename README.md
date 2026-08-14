# 🍲 Tencere — Türk Yemek Tarifleri

**"Bugün ne pişirsem?" sorusunu 10 saniyede cevaplayan, mutfakta eller serbest kullanılan, israfı ve maliyeti düşünen tarif uygulaması.**

Expo (React Native) ile geliştirildi. **300 denenmiş, ölçülü tarif** uygulamaya gömülüdür — internet bağlantısı olmadan tüm özellikler çalışır. Katmanlar (v1.1):

- **Günlük Türk Mutfağı (180):** çorbalar, etli/sebzeli ana yemekler, pilav & bakliyat, hamur işleri, kahvaltılıklar, salata & mezeler, pratik makarnalar
- **Klasik Tatlılar (~50):** sütlü, şerbetli, kek-kurabiye ve meyveli tatlılar
- **Osmanlı Saray Mutfağı (25):** mutancana, mahmudiye, zerde, elmasiye gibi saray klasikleri (tarihi notlarıyla)
- **Yeni Nesil / Trend (80):** sokak lezzetleri, one-pot makarnalar, airfryer, brunch, fit & meal-prep, viral tatlılar
- **Demlik & Fincan (15):** Türk kahvesi çeşitleri, salep, kış çayları, limonatalar

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
    malzemeler.ts       # 125+ malzeme sözlüğü (dönüşüm katsayıları + fiyatlar)
    tarifler/           # 105 tarif: klasik paket (7 dosya) + yeni nesil paket (5 dosya)
  lib/                  # olcu-motoru, maliyet, ara, oneri (+testler)
  stores/               # zustand persist: ayarlar, kayitli, dolap, plan, alisveris
  types/tarif.ts
```

## v1.1 yenilikleri

- **Kategoriler ızgarası + kategori sayfaları** — Ara sekmesinde görsel kartlar, canlı tarif sayılarıyla
- **Marketteyim modu** — reyon reyon ilerleyen tam ekran alışveriş; canlı "12/23 alındı · kalan ₺" sayacı; satır fiyatları, grup alt toplamları ve "fiyatlar {tarih}" notu
- **Akıllı dolap filtresi** — kategori sekmeli görsel malzeme ızgarası; seçimle sonuçlar anında daralır; 0 sonuca götürecek malzemeler otomatik pasifleşir
- **Yiyemediklerim** — malzeme + hızlı grup (gluten, laktoz, deniz, fındık-fıstık) bazlı global filtre; paylaşılan linkler uyarı bandıyla açılır; "misafir için pişiriyorum" geçici kapatma
- **Pişirme Modu 2.0** — swipe ile adım geçişi (pager), Sayfa modu (tüm tarif tek scroll'da, ≥17pt), timestamp tabanlı sayaç (kilitte durmaz) + süre dolunca yerel bildirim
- **Menümü Oluştur sihirbazı** — 3 soru: öğünler (sadece akşam desteği) / dolabımdan başla / bütçe & kişi → haftalık plan + alternatif değiştirme + dolaptakileri düşen alışveriş listesi
- **Görsel üretim hattı** — tools/gorsel-uretici/ (SD 1.5 + DreamShaper v8, ComfyUI); ayrıntı için klasördeki README

### Live Activity notu (iOS kilit ekranı canlı sayacı)

Sayacın kilit ekranında canlı geri sayımı (ActivityKit / Dynamic Island) **custom native modül + widget extension** gerektirir; Expo managed akışta hazır-bakımlı bir paket olmadığından bu sürümde eklenmedi. Temel işlev native modülsüz tamamlandı: sayaç bitiş zamanı timestamp olarak saklanır (kilitte geçen süre kaybolmaz) ve süre dolunca `expo-notifications` yerel bildirimi ses ile uyarır. İleride eklenecekse: EAS dev build + küçük bir Swift ActivityKit modülü + config plugin gerekir.

## Kritik akış (manuel test senaryosu — v1.1)

1. Uygulamayı aç → onboarding'i geç
2. Ara → Dolapta Ne Var → görsel ızgaradan 2-3 malzeme seç (sonuç başlığı canlı daralır, uyumsuz malzemeler pasifleşir)
3. Planlayıcı → "Menümü Oluştur" → Sadece akşam + Dolabımdan başla + bütçe → planı kaydet → "Alışveriş Listesini Çıkar" (dolaptakiler düşer, bilgi satırı görünür)
4. Alışveriş → satır fiyatları + genel toplam → "Marketteyim" → reyon reyon işaretle
5. Keşfet → tarif → porsiyon 4 → 6, "Gram" toggle
6. "PİŞİRMEYE BAŞLA" → mod segmentinden Sayfa/Adım geçişi → sayacı başlat → telefonu kilitle, 2 dk sonra aç (kalan süre doğru; süre kilitliyken dolarsa bildirim gelir)
7. Bitir → deftere kaydet → uçak modunda Defterim'den aç (tam çalışır)
8. Profil → Yiyemediklerim'e "yumurta" ekle → menemen hiçbir listede görünmez; tarif linki uyarı bandıyla açılır
