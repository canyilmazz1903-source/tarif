# TENCERE — Türk Yemek Tarifleri Uygulaması
## Claude Code Master Brief (Tek Seferde Tam Uygulama)

> **Bu dosyayı Claude Code'a olduğu gibi ver.** Aşağıdaki sıra bir "yol haritası" değil, tek oturumda uygulanacak kesin bir inşa talimatıdır. Her bölüm bağımsız doğrulanabilir kabul kriterleri içerir. Faz sırası bağımlılık sırasıdır; atlama yapma.

---

# BÖLÜM 0 — REKABET ANALİZİ ÖZETİ (Neden bu kararlar alındı)

## Rakipler ve dersler

### Lokma (Piri Medya) — 4.9★ / 109 oy
**İyi yanları (bizde de olacak):**
- "Dolapta Ne Var" malzeme bazlı tarif bulma
- Tarif maliyeti gösterimi (malzeme fiyatları → tahmini maliyet)
- Kalori + zorluk seviyesi + süre filtreleri
- "Mutfağa Giriş 101" başlangıç dersleri
- Osmanlı Mutfağı gibi niş editoryal koleksiyonlar
- Beslenme tercihleri (vegan, glutensiz, diyabetik)

**Eksikleri (bizim fırsatımız):**
- İnternetsiz ÇALIŞMIYOR (açıkça yazıyorlar)
- Bug'lı: "geri tuşuna basınca ekran kararıyor" şikayeti yıllardır duruyor
- Topluluk yok, yorum/etkileşim zayıf
- Çok seyrek güncelleme, ölü proje izlenimi

### Yemek.com (Onedio Medya) — 4.8★ / 628 oy
**İyi yanları:**
- 20.000+ denenmiş, editoryal kaliteli tarif
- "Tarif Modu": kararmayan ekran + adım adım takip
- Videolu + adım adım fotoğraflı anlatım
- Besin değerleri (uzman hazırlıklı)
- Kişisel tarif listeleri (açık/gizli)
- Şef/yazar takip sistemi
- Karanlık mod, arama geçmişi (yeni eklendi)

**Eksikleri:**
- Tarif isimleri SEO için gereksiz uzun → listede ne tarifi olduğu anlaşılmıyor (birebir kullanıcı şikayeti)
- Sadece iPhone, iPad yok
- İnternetsiz çalışmıyor
- Ağır kişisel veri takibi (App Privacy'de görünüyor)

### Nefis Yemek Tarifleri (NYT) — 4.8★ / 1.5K oy
**İyi yanları:**
- 900.000+ UGC tarif, Türkiye'nin en büyük yemek topluluğu
- Soru-Cevap bölümü
- Menüler (çay saati, doğum günü vb.)
- Yazar/üye profilleri, "denedim" fotoğrafları
- Reklamsız abonelik: $0.99/ay, $9.99/yıl (fiyat çıpası olarak referans)

**Eksikleri (en kritik dersler burada):**
- AGRESİF REKLAM: "Bir tarif izliyorum, başka tarife geçince reklam çıkıyor, uygulamayı sileceğim" — Şikayetvar'da tekrarlayan tema. Telefon ısınması şikayetleri (muhtemelen ağır reklam SDK yükü).
- Kalite kontrolü YOK: "göz kararı" ölçüsüz tarifler, yanlış pişirme süreleri, "çöplüğe dönüşüyor" eleştirisi
- 214 MB uygulama boyutu
- Arayüz "rough", geçmişte açılışta crash

## Üç rakibin de KAPATAMADIĞI boşluklar → bizim farkımız
1. **Offline çalışma** — üçü de internetsiz çalışmıyor. Kaydedilen tarifler + son gezilen içerik offline erişilebilir olacak.
2. **Gerçek Pişirme Asistanı** — kararmayan ekrandan öteye: adım başına gömülü zamanlayıcılar, sesli komut ("sıradaki adım"), eller hamurluyken kullanım.
3. **Ölçü standardizasyonu** — "su bardağı ↔ gram ↔ ml" Türk mutfağı dönüşüm motoru. Nefis'in en büyük kalite şikayetine doğrudan cevap.
4. **İsraf Önleme / "Artanı Değerlendir"** — kalan malzemeden tarif önerisi. Enflasyon döneminde güçlü değer önerisi; hiçbir rakipte yok.
5. **Akıllı maliyet motoru** — Lokma'nın maliyet fikri + porsiyon başına maliyet + "bütçeye göre haftalık menü".
6. **Ramazan / mevsimsellik zekası** — iftar-sahur menüleri, mevsiminde ürünler; rakiplerde ancak kampanya düzeyinde.
7. **Saygılı reklam mimarisi** — Nefis'in kaybettiği kullanıcıları kazanacak şekilde tasarlanmış, aşağıda kural kural tanımlı.
8. **Kısa, standart tarif isimleri** — Yemek.com şikayetine cevap: `başlık ≤ 40 karakter` kuralı + ayrı SEO alt başlığı alanı.

---

# BÖLÜM 1 — ÜRÜN KONSEPTİ

**Uygulama adı (çalışma adı):** `Tencere` (değiştirilebilir; kodda `APP_NAME` sabitinden yönet)
**Platform:** iOS + Android (Expo / React Native)
**Dil:** Türkçe (i18n altyapısı kurulacak, `tr` varsayılan; `en` iskeleti boş bırakılacak)
**Hedef kitle:** Türkiye'de günlük yemek pişiren kullanıcılar; ikincil: yurt dışında yaşayan, Türk mutfağı özleyen diaspora

**Konumlandırma cümlesi:** "Bugün ne pişirsem?" sorusunu 10 saniyede cevaplayan, mutfakta eller serbest kullanılan, israfı ve maliyeti düşünen tarif uygulaması.

**Üç ekran kuralı:** Kullanıcı, uygulamayı açtıktan en fazla 3 dokunuşta pişirmeye başlayabilmeli.

---

# BÖLÜM 2 — TEKNOLOJİ YIĞINI (kesin, tartışmasız)

| Katman | Seçim | Not |
|---|---|---|
| Framework | Expo SDK (en güncel stabil) + React Native | Managed workflow, EAS Build |
| Dil | TypeScript (strict) | `noImplicitAny`, `strictNullChecks` açık |
| Navigasyon | expo-router (file-based) | Deep link desteği dahil |
| State | Zustand + React Query (TanStack) | Server state React Query'de, UI state Zustand'da |
| Backend | Supabase (Postgres + Auth + Storage + Edge Functions) | RLS zorunlu, aşağıda şema var |
| Offline | React Query persist + expo-sqlite cache katmanı | Kaydedilen tarifler tam offline |
| Ödeme/Abonelik | RevenueCat | `premium` entitlement |
| Reklam | react-native-google-mobile-ads (AdMob) | Sadece Bölüm 7'deki kurallarla |
| Analitik | PostHog (self-serve, ücretsiz tier) | Kişisel veri minimum; ATT izni yalnızca gerekiyorsa |
| Görsel | expo-image + Supabase Storage + CDN transform | Tüm görseller webp, lazy |
| Sesli komut | expo-speech-recognition (veya @react-native-voice/voice) | Sadece Pişirme Modu'nda, izinle |
| Bildirim | expo-notifications | Günlük "bugün ne pişirsem" opsiyonel |
| Test | Jest + React Native Testing Library | Kritik akışlara test zorunlu |

**Proje yapısı:**
```
app/                    # expo-router ekranları
  (tabs)/
    index.tsx           # Keşfet
    ara.tsx             # Arama + Dolapta Ne Var
    pisir.tsx           # Pişirme Modu hub / aktif oturum
    kayitli.tsx         # Defterim (offline)
    profil.tsx
  tarif/[id].tsx
  pisirme/[id].tsx      # Tam ekran pişirme modu
  planlayici/           # Haftalık menü
  onboarding/
src/
  components/
  features/             # feature-slice: tarifler, pisirme, planlayici, reklam, premium...
  lib/                  # supabase, revenuecat, admob, olcu-motoru
  stores/
  types/
supabase/
  migrations/           # SQL migration dosyaları (aşağıdaki şemadan üret)
  functions/            # edge functions
```

---

# BÖLÜM 3 — VERİTABANI ŞEMASI (Supabase / Postgres)

Migration dosyaları olarak yaz (`supabase/migrations/`). Tüm tablolarda RLS aktif; politikaları her tablonun altındaki nota göre yaz.

```sql
-- profiles: auth.users'a 1-1
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  kullanici_adi text unique not null check (char_length(kullanici_adi) between 3 and 24),
  ad_soyad text,
  avatar_url text,
  bio text,
  beslenme_tercihleri text[] default '{}',       -- 'vegan','vejetaryen','glutensiz','diyabetik','laktozsuz'
  premium boolean default false,                  -- RevenueCat webhook günceller
  created_at timestamptz default now()
);
-- RLS: herkes okur; sadece sahibi yazar.

-- malzemeler: normalize malzeme sözlüğü (ölçü motoru ve maliyet motoru buna bağlı)
create table malzemeler (
  id bigint generated always as identity primary key,
  ad text unique not null,                        -- 'un', 'tereyağı', 'kıyma (dana)'
  kategori text not null,                         -- 'bakliyat','süt ürünü','et','sebze','baharat'...
  varsayilan_birim text not null,                 -- 'g','ml','adet'
  gram_per_su_bardagi numeric,                    -- ölçü motoru: 1 su bardağı kaç gram
  gram_per_yemek_kasigi numeric,
  gram_per_cay_kasigi numeric,
  ortalama_fiyat_tl_per_kg numeric,               -- maliyet motoru; admin/edge function günceller
  fiyat_guncelleme timestamptz,
  mevsim_aylari int[] default '{}'                -- sebze/meyve için: {6,7,8} = Haz-Ağu
);
-- RLS: herkes okur; yazma sadece service_role.

-- tarifler
create table tarifler (
  id uuid primary key default gen_random_uuid(),
  yazar_id uuid references profiles(id) on delete set null,
  baslik text not null check (char_length(baslik) <= 40),   -- Yemek.com dersine cevap
  alt_baslik text check (char_length(alt_baslik) <= 90),    -- SEO/açıklama buraya
  slug text unique not null,
  kapak_url text,
  video_url text,
  kategori text not null,
  alt_kategori text,
  porsiyon int not null default 4 check (porsiyon between 1 and 24),
  hazirlik_dk int not null,
  pisirme_dk int not null,
  zorluk text not null check (zorluk in ('kolay','orta','zor')),
  kalori_per_porsiyon int,
  beslenme_etiketleri text[] default '{}',
  koleksiyonlar text[] default '{}',              -- 'ramazan','osmanli','101','15-dakika','tek-tencere'
  durum text not null default 'taslak' check (durum in ('taslak','incelemede','yayinda','reddedildi')),
  editor_onayli boolean default false,            -- kalite rozeti (Nefis dersine cevap)
  denenme_sayisi int default 0,
  ort_puan numeric default 0,
  created_at timestamptz default now()
);
-- RLS: yayinda olanları herkes okur; yazar kendi taslağını okur/yazar; durum değişikliği service_role.

-- tarif_malzemeleri: normalize (ölçü motoru için ŞART)
create table tarif_malzemeleri (
  id bigint generated always as identity primary key,
  tarif_id uuid references tarifler(id) on delete cascade,
  malzeme_id bigint references malzemeler(id),
  serbest_ad text,                                -- sözlükte yoksa serbest metin
  miktar numeric not null,
  birim text not null,                            -- 'g','ml','adet','su bardağı','yemek kaşığı','çay kaşığı','paket','tutam'
  grup text default 'Malzemeler',                 -- 'Hamuru için','Şerbeti için'
  sira int not null default 0
);

-- tarif_adimlari: pişirme asistanının kalbi
create table tarif_adimlari (
  id bigint generated always as identity primary key,
  tarif_id uuid references tarifler(id) on delete cascade,
  sira int not null,
  baslik text not null check (char_length(baslik) <= 40),   -- 'Soğanları kavur'
  aciklama text not null,
  gorsel_url text,
  sure_sn int,                                    -- doluysa adımda gömülü zamanlayıcı çıkar
  bekleme_adimi boolean default false             -- 'mayalanmaya bırak' tipi adımlar
);

-- etkileşim tabloları
create table kayitli_tarifler (
  kullanici_id uuid references profiles(id) on delete cascade,
  tarif_id uuid references tarifler(id) on delete cascade,
  liste_adi text default 'Defterim',
  created_at timestamptz default now(),
  primary key (kullanici_id, tarif_id, liste_adi)
);

create table denemeler (
  id bigint generated always as identity primary key,
  kullanici_id uuid references profiles(id) on delete cascade,
  tarif_id uuid references tarifler(id) on delete cascade,
  puan int check (puan between 1 and 5),
  yorum text,
  foto_url text,
  created_at timestamptz default now()
);

create table alisveris_listesi (
  id bigint generated always as identity primary key,
  kullanici_id uuid references profiles(id) on delete cascade,
  malzeme_id bigint references malzemeler(id),
  serbest_ad text,
  miktar numeric,
  birim text,
  alindi boolean default false,
  kaynak_tarif_id uuid references tarifler(id) on delete set null
);

create table haftalik_plan (
  id bigint generated always as identity primary key,
  kullanici_id uuid references profiles(id) on delete cascade,
  tarih date not null,
  ogun text not null check (ogun in ('kahvalti','ogle','aksam','iftar','sahur','atistirmalik')),
  tarif_id uuid references tarifler(id) on delete cascade,
  unique (kullanici_id, tarih, ogun, tarif_id)
);

-- dolap: kullanıcının evdeki malzemeleri (Dolapta Ne Var + Artanı Değerlendir)
create table dolap (
  kullanici_id uuid references profiles(id) on delete cascade,
  malzeme_id bigint references malzemeler(id),
  eklenme timestamptz default now(),
  primary key (kullanici_id, malzeme_id)
);
```

**İndeksler:** `tarifler(kategori, durum)`, `tarifler using gin(koleksiyonlar)`, `tarifler using gin(beslenme_etiketleri)`, `tarif_malzemeleri(malzeme_id)`, full-text: `tarifler` üzerinde `to_tsvector('turkish', baslik || ' ' || alt_baslik)` GIN indeksi.

**Edge Functions:**
1. `dolapta-ne-var`: body'de malzeme_id[] alır → en çok eşleşen yayındaki tarifleri "eksik malzeme sayısı"yla sıralı döner (SQL: eşleşme oranı + eksikleri listele).
2. `maliyet-hesapla`: tarif_id → malzeme fiyatlarından porsiyon başına tahmini TL maliyet.
3. `revenuecat-webhook`: entitlement değişince `profiles.premium` günceller.
4. `haftalik-menu-oner`: bütçe (TL) + kişi sayısı + beslenme tercihi alır → 7 günlük dengeli menü döner (basit kural motoru: her güne 1 çorba/ana/yardımcı rotasyonu, bütçe aşımında ucuz alternatife düş).

**Seed verisi:** `supabase/seed.sql` içinde: 60 malzeme (ölçü dönüşümleriyle — un 1 su bardağı=130g, şeker=180g, pirinç=200g, sıvı=200ml standardı), 25 tam tarif (adımlar + süreler + malzemeler dahil; kategori dağılımı: 4 çorba, 6 ana yemek, 4 hamur işi, 4 tatlı, 3 zeytinyağlı, 2 kahvaltılık, 2 salata). Tarifleri gerçekçi, ölçülü ve adım sürelerini mantıklı yaz.

---

# BÖLÜM 4 — EKRAN EKRAN SPESİFİKASYON

## 4.1 Onboarding (3 ekran, atlanabilir)
1. Değer önerisi: "Bugün ne pişirsem? 10 saniyede cevap."
2. Beslenme tercihleri seçimi (çoklu; atlanabilir).
3. Bildirim izni isteği — **ertelenmiş**: burada değil, kullanıcı ilk tarif kaydettiğinde sor.
Kayıt zorunlu DEĞİL: misafir modu var (Supabase anonymous auth). Kaydetme/yorum anında kayıt istenir.

## 4.2 Keşfet (ana sekme)
- Üstte tek satır selamlama + "Bugün ne pişirsem?" büyük CTA kartı → rastgele değil: saat + mevsim + beslenme tercihine göre 3 öneri (öğleden önce kahvaltı/çorba ağırlıklı, akşam ana yemek).
- Yatay koleksiyon rayları: "15 Dakikada", "Tek Tencere", "Mevsiminde" (ay bazlı otomatik), "Editör Onaylı", Ramazan ayıysa "İftar Menüleri" otomatik en üste.
- Dikey akış: kart = kapak görseli + KISA başlık + süre + zorluk + maliyet rozeti (₺, ₺₺, ₺₺₺) + kalori.
- Native reklam kartı yerleşimi: Bölüm 7 kurallarına göre.

## 4.3 Arama + Dolapta Ne Var
- Tek arama çubuğu; altında iki mod sekmesi: "Tarif Ara" / "Dolapta Ne Var".
- Tarif Ara: full-text + filtre paneli (kategori, süre ≤, zorluk, kalori ≤, beslenme, maliyet).
- Dolapta Ne Var: malzeme çipleri (kategoriye göre gruplu, arama ile ekle) → sonuçlar "3/4 malzeme sende var, eksik: krema" formatında. Kullanıcının dolabı `dolap` tablosunda kalıcı.
- **Artanı Değerlendir** (yenilik): "Elimde kalan var" girişi — 1-3 malzeme seç (haşlanmış patates, bayat ekmek...) → özel etiketli israf-önleme tarifleri öne gelir. Seed tariflerinden en az 5'i `koleksiyonlar: ['artan']` etiketli olsun.

## 4.4 Tarif Detay
- Kapak, kısa başlık, alt başlık, yazar, rozetler (Editör Onaylı ✓, süre, zorluk, kalori, tahmini maliyet/porsiyon).
- **Porsiyon ayarlayıcı**: – 4 + → tüm miktarlar anında yeniden hesaplanır.
- **Ölçü değiştirici** (yenilik, tek dokunuş): "Su bardağı" ↔ "Gram" toggle. `malzemeler` tablosundaki dönüşüm katsayılarıyla; katsayı yoksa o satır değişmez ve küçük "≈" uyarısı gösterilmez (sessizce atla).
- Malzeme satırında checkbox → işaretlenmeyenler tek dokunuşla alışveriş listesine.
- Adımlar önizleme + büyük "PİŞİRMEYE BAŞLA" butonu.
- Denemeler bölümü: kullanıcı fotoğrafları + puan + yorum.
- Paylaş (deep link).

## 4.5 Pişirme Modu (uygulamanın taçı — tam ekran, `pisirme/[id]`)
- Ekran uyku kapalı (`expo-keep-awake`).
- Adım başına tam ekran kart: büyük başlık, açıklama, varsa görsel, varsa **gömülü zamanlayıcı** (sure_sn) — tek dokunuşla başlar, arka planda çalışır, bitince yerel bildirim + ses.
- Alt navigasyon: geri / ilerleme noktaları / ileri. Kaydırma da çalışır.
- **Sesli komut** (izin verilirse): "sıradaki", "geri", "tekrar oku", "zamanlayıcı başlat". Adım metnini `expo-speech` ile sesli okuma butonu.
- O adımda geçen malzemeler kartın altında miktarlarıyla mini liste (adım metnindeki malzeme adlarını `tarif_malzemeleri` ile eşleştir; eşleşmeyeni gösterme).
- Bekleme adımlarında ("mayalanmaya bırak" `bekleme_adimi=true`): "Bekleme sırasında bulaşıkları hallet ☕" tarzı tek satır mikro-kopya + uygulamayı kapatsa bile zamanlayıcı bildirimi.
- Son adımda kutlama ekranı: "Afiyet olsun! Fotoğrafını çek, denemeni paylaş" → denemeler akışına.
- **Pişirme Modu'nda ASLA reklam yok.** (Bölüm 7'nin 1 numaralı kuralı.)

## 4.6 Defterim (kayıtlı, offline)
- Listeler (varsayılan "Defterim" + kullanıcı listeleri).
- Kaydedilen her tarif metni+küçük görseli SQLite'a yazılır → uçak modunda tam açılır (kapak düşük çözünürlük yeterli).
- Offline durumda üst bantta ince "Çevrimdışısın — kayıtlı tariflerin hazır" bilgisi.

## 4.7 Haftalık Planlayıcı + Alışveriş Listesi
- Takvim şeridi (7 gün) × öğünler; tarif sürükle/ekle.
- "Menümü Oluştur" sihirbazı: kişi sayısı + haftalık bütçe (TL) + tercih → `haftalik-menu-oner` edge function.
- Tek dokunuş: "Haftanın alışveriş listesini çıkar" → aynı malzemeler birleştirilir, miktarlar toplanır, kategoriye göre gruplanır (manav/kasap/market düzeni), tahmini toplam TL gösterilir.
- Alışveriş listesi ekranı: işaretle, elle ekle, temizle. Offline çalışır, senkronize olur.

## 4.8 Profil
- Denemelerim, gönderdiğim tarifler, dolabım, tercihler, tema (sistem/açık/koyu).
- **Premium sayfası** (RevenueCat paywall): aşağıda.
- Tarif Gönder akışı: başlık (40 kr sayaç!), malzemeler (sözlükten seç + serbest), adımlar (süre alanıyla), foto. Gönderim `durum='incelemede'` düşer. Formda mikro-doğrulama: en az 2 malzeme, en az 3 adım, "göz kararı" gibi kalıpları yakalarsa nazik uyarı: "Ölçü verirsen tarifin Editör Onayı alabilir ✓".

---

# BÖLÜM 5 — ÖLÇÜ MOTORU (`src/lib/olcu-motoru.ts`)

Saf TypeScript modülü, %100 test kapsamı:
- `cevir(miktar, birim, hedefBirim, malzeme)` → gram/ml/su bardağı/yemek kaşığı/çay kaşığı arası dönüşüm; malzemeye özel katsayı `malzemeler` tablosundan.
- `porsiyonla(miktar, eskiPorsiyon, yeniPorsiyon)` → akıllı yuvarlama: 1.33 su bardağı → "1⅓ su bardağı"; 247g → "250 g"; 0.5 adet yumurta → "1 adet (yarısını kullan)".
- Kesir gösterimi: ½ ⅓ ¼ ⅔ ¾ unicode.
- Türk standartları sabitleri: su bardağı=200ml, çay bardağı=100ml, yemek kaşığı=15ml, çay kaşığı=5ml, tatlı kaşığı=10ml.

---

# BÖLÜM 6 — MONETİZASYON

## Premium (RevenueCat, entitlement: `premium`)
- Aylık ₺39,99 / Yıllık ₺299,99 (mağaza fiyat kademelerine yuvarla; Nefis $0.99–$9.99 çıpasının üstünde ama offline+planlayıcı değeriyle gerekçeli).
- Premium içerir: reklamsız kullanım, sınırsız haftalık plan (ücretsizde 1 aktif hafta), sınırsız kayıtlı liste (ücretsizde 3 liste), "Bütçeyle Menü Oluştur" sihirbazı, gelişmiş filtre kombinasyonları.
- Paywall: özellik karşılaştırma tablosu, yıllıkta "%37 tasarruf" rozeti, kapatma X'i İLK SANİYEDEN görünür (dark pattern yok).
- ÜCRETSİZ katman tek başına tam kullanışlı olmalı: tarif okuma, pişirme modu, dolapta ne var, alışveriş listesi hepsi ücretsiz. Premium "kısıtlamayı kaldırma" değil "güç kullanıcı" paketi.

## Reklam felsefesi → Bölüm 7

---

# BÖLÜM 7 — SAYGILI REKLAM MİMARİSİ (kural kural, kod seviyesinde uygulanacak)

Nefis'in kullanıcı kaybettiği nokta burası. Bu kurallar `src/features/reklam/reklam-politikasi.ts` içinde sabitler olarak yaşayacak ve tüm reklam çağrıları bu modülden geçecek (tek kapı).

**MUTLAK YASAKLAR:**
1. Pişirme Modu'nda hiçbir reklam türü gösterilmez. Pişirme Modu'na giriş/çıkışta interstitial gösterilmez.
2. Tarif detay sayfası açılırken/kapanırken interstitial gösterilmez. (Nefis'in birebir şikayet konusu.)
3. Uygulama açılışında reklam gösterilmez (App Open Ad kullanılmaz).
4. Tarif adımlarının veya malzeme listesinin ARASINA reklam girmez.
5. Ses/video otomatik oynatılan reklam formatı kullanılmaz.
6. Alışveriş listesi ve planlayıcı ekranlarında reklam gösterilmez (üretkenlik alanı).

**İZİN VERİLENLER:**
- **Native reklam kartı** (tarif kartıyla aynı boyut/köşe yarıçapı, açık "Reklam" rozeti): Keşfet akışında **en erken 6. karttan sonra, sonra her 9 kartta bir**. Arama sonuçlarında: sonuç ≥ 12 ise en fazla 1 adet, 8. sırada.
- **Sabit banner (adaptive)**: yalnızca tarif detay sayfasının EN ALTINDA, denemeler bölümünün altında (içeriği itmez, sticky değil).
- **Interstitial**: yalnızca şu tek tetikleyicide — aynı oturumda 5. tarif detayı görüntülemesinden ÇIKARKEN, oturum başına en fazla 1, günde en fazla 2, iki gösterim arası ≥ 10 dk. İlk kullanım günü hiç interstitial yok (D0 koruması).
- **Rewarded (opsiyonel, kullanıcı isterse)**: "1 reklam izle, 24 saat premium filtreleri dene" — sadece kullanıcı butona basarsa.

**Frekans/koşul sayaçları** Zustand persist store'da tutulur (`reklamStore`): oturum tarif sayacı, son interstitial zamanı, günlük sayaç, kurulum tarihi. `premium=true` ise reklam modülü hiç initialize edilmez (SDK yükü de binmez — Nefis'in "telefon ısınıyor" dersine cevap).

**Ölçüm:** her reklam gösterimi PostHog'a `ad_impression {format, ekran}`; kapatma/şikayet davranışını izlemek için `session_length` ile korelasyon panosu kurulacak varsayımıyla event'leri isimlendir.

---

# BÖLÜM 8 — TASARIM SİSTEMİ

- **Ton:** sıcak, iştah açıcı, gürültüsüz. Bol beyaz alan, büyük yemek fotoğrafı.
- **Renkler:** Primary `#E8590C` (kiremit-turuncu), Secondary `#2B8A3E` (yeşil, "mevsiminde/sağlıklı"), Nötr zemin `#FDF9F4` (kırık beyaz), koyu mod zemini `#1A1614`. Maliyet rozetleri: ₺ yeşil, ₺₺ amber, ₺₺₺ kiremit.
- **Tipografi:** Başlık `Fraunces` (Google Fonts, expo-google-fonts), gövde `Inter`. Türkçe karakter desteğini doğrula.
- **Bileşen kütüphanesi:** kendi hafif bileşenlerin (`src/components/ui/`): Button, Card, Chip, Sheet, Timer, Stepper. Harici UI kit kullanma.
- **Dokunma hedefleri ≥ 44pt**, mutfakta ıslak/unlu parmak senaryosu: Pişirme Modu butonları ≥ 64pt.
- Karanlık mod: sistem takipli + manuel.
- Erişilebilirlik: tüm görsellerde accessibilityLabel, Dynamic Type desteği, VoiceOver ile pişirme modu adım okuma.

---

# BÖLÜM 9 — UYGULAMA SIRASI (Claude Code için kesin inşa planı)

Tek oturumda, şu sırayla; her fazın sonunda "kabul" maddelerini kendin doğrula, sonra devam et:

**Faz 1 — İskelet + Veri (temel):**
Expo projesi, TypeScript strict, expo-router yapısı, tema/tasarım sistemi, Supabase migration'ları + seed, tip üretimi (`supabase gen types`), auth (anonim + e-posta + Apple/Google).
✅ Kabul: uygulama açılır, seed tarifler Keşfet'te listelenir, koyu mod çalışır.

**Faz 2 — Çekirdek okuma akışı:**
Keşfet + Arama/filtreler + Tarif Detay + porsiyon ayarlayıcı + ölçü motoru (testleriyle) + kaydetme + offline cache.
✅ Kabul: uçak modunda kayıtlı tarif tam açılır; porsiyon 4→6'da tüm miktarlar doğru; ölçü toggle çalışır; jest testleri geçer.

**Faz 3 — Pişirme Modu:**
Tam ekran akış, keep-awake, adım zamanlayıcıları + yerel bildirim, sesli okuma, sesli komut (izin reddedilirse sessizce butonlu moda düş).
✅ Kabul: zamanlayıcı arka planda biter ve bildirim gelir; "sıradaki" komutu adım atlatır.

**Faz 4 — Dolap + Planlayıcı + Alışveriş:**
Dolapta Ne Var (edge function), Artanı Değerlendir, haftalık plan, menü sihirbazı, birleştirilmiş alışveriş listesi + maliyet toplamı.
✅ Kabul: 3 malzeme seçince eksik-malzeme sıralı sonuç gelir; haftalık plandan tek dokunuşla liste çıkar ve miktarlar doğru toplanır.

**Faz 5 — Topluluk + Gönderim:**
Denemeler (foto+puan+yorum), tarif gönderme formu (doğrulamalarla), yazar profilleri.
✅ Kabul: gönderilen tarif 'incelemede' düşer ve akışta görünmez; deneme fotoğrafı Storage'a yüklenir.

**Faz 6 — Para + Reklam + Cila:**
RevenueCat entegrasyonu + paywall + webhook, AdMob'un Bölüm 7 politikasıyla entegrasyonu (test ID'leriyle), PostHog, onboarding, bildirimler, boş-durum ekranları, hata sınırları (error boundary), app icon + splash.
✅ Kabul: premium mock'landığında hiçbir reklam bileşeni mount olmaz; interstitial sayaç kuralları birim testle doğrulanır; `npx expo prebuild` ve tip kontrolü hatasız.

**Genel kabul (çıkış kriteri):**
- `tsc --noEmit` sıfır hata; ESLint sıfır error.
- Ölçü motoru + reklam politikası + porsiyon hesaplayıcı testleri yeşil.
- Kritik akış manuel senaryosu README'de: aç → keşfet → tarif → pişir → kaydet → plan → liste.
- README: kurulum, env değişkenleri (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `REVENUECAT_KEY_IOS/ANDROID`, `ADMOB_APP_ID_*`), EAS build komutları, mağaza gönderim notları (App Store gizlilik beyanı cevapları dahil — tracking YOK olarak tasarla, ATT gerektirmeyen non-personalized ads varsayılanıyla başla).

---

# BÖLÜM 10 — YAPMA LİSTESİ (anti-hedefler)

- 900.000 tarifle yarışmaya çalışma; 25 mükemmel seed tarif + kalite rozeti stratejisi yeterli başlangıç.
- SEO-şişkin uzun başlık üretme (40 karakter sınırı şemada zorlanıyor).
- Kayıt duvarı koyma; misafir her şeyi okuyabilir.
- App Open Ad, sticky banner, otomatik sesli reklam — asla.
- Harici ağır UI kütüphanesi ekleme (paket boyutu; Nefis 214MB dersi). Hedef: üretim IPA < 60 MB.
- Kullanıcı verisi minimizasyonu: e-posta dışında kişisel veri toplama; üçüncü taraf tracker ekleme.
