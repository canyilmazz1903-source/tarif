import type { Tarif } from '@/types/tarif';

// Pratik makarnalar paketi — 5 özgün tarif.
export const PRATIK_MAKARNALAR: Tarif[] = [
  {
    id: 'kiymali-besamelli-firin-makarna',
    baslik: 'Kıymalı Beşamelli Fırın Makarna',
    altBaslik: 'Kıymalı harç ve ipeksi beşamelle katmanlanan, üzeri kaşarlı nostaljik fırın makarna',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🍝',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 500, birim: 'g', not: 'burgu ya da kalem' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'Kıymalı harç için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Kıymalı harç için', not: 'ince doğranmış' },
      { ad: 'domates salçası', miktar: 2, birim: 'yemek kaşığı', grup: 'Kıymalı harç için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Kıymalı harç için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Kıymalı harç için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Kıymalı harç için' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Beşamel için' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı', grup: 'Beşamel için', not: 'silme' },
      { ad: 'süt', miktar: 4, birim: 'su bardağı', grup: 'Beşamel için', not: 'oda sıcaklığında' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Beşamel için' },
      { ad: 'kaşar peyniri', miktar: 150, birim: 'g', grup: 'Üzeri için', not: 'rendelenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı diri haşla',
        aciklama:
          'Makarnayı bol kaynar tuzlu suda paket süresinden 2 dakika az haşlayıp süz; fırında pişmeye devam edeceği için diri kalmalı.',
        sureSn: 480,
      },
      {
        baslik: 'Kıymalı harcı kavur',
        aciklama:
          'Zeytinyağında soğanı pembeleşene dek kavur, kıymayı ekleyip suyunu çekene kadar pişir. Salçayı, tuzu ve karabiberi katıp 2 dakika daha çevir.',
        sureSn: 600,
      },
      {
        baslik: 'Beşameli pişir',
        aciklama:
          'Tereyağını eritip unu kokusu çıkana dek kavur. Sütü azar azar dökerek telle çırp; topaksız, kaşık sırtını kaplayan bir sos elde edince tuzunu ayarla.',
        sureSn: 480,
      },
      {
        baslik: 'Karıştırıp tepsiye al',
        aciklama:
          'Haşlanmış makarnayı kıymalı harç ve beşamelin üçte ikisiyle harmanla. Yağlanmış fırın kabına yay, kalan beşameli üzerine dök.',
      },
      {
        baslik: 'Kaşarla fırınla',
        aciklama:
          'Rendelenmiş kaşarı serpip önceden ısıtılmış 200 derece fırında üzeri kızarana kadar 20 dakika pişir. 10 dakika dinlendirip dilimle.',
        sureSn: 1200,
      },
    ],
    pufNoktasi:
      'Beşamele sütü soğuk değil oda sıcaklığında eklersen topaklanmaz; sos ilk anda sulu görünse de fırında toparlar, koyulaştırmak için fazla pişirme.',
  },
  {
    id: 'yogurtlu-kiymali-makarna',
    baslik: 'Yoğurtlu Makarna',
    altBaslik: 'Sarımsaklı yoğurt ve kıymalı salça sosuyla mantı tadında, yarım saatlik hafta içi klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: [],
    emoji: '🥣',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'burgu ya da kelebek' },
      { ad: 'yoğurt', miktar: 300, birim: 'g', grup: 'Yoğurtlu sos için', not: 'oda sıcaklığında' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Yoğurtlu sos için', not: 'ezilmiş' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Yoğurtlu sos için' },
      { ad: 'kıyma', miktar: 200, birim: 'g', grup: 'Kıymalı sos için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı', grup: 'Kıymalı sos için' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı haşla',
        aciklama:
          'Makarnayı bol kaynar tuzlu suda paket süresince haşla, süzüp geniş bir servis kabına al. Ilıması için birkaç dakika beklet.',
        sureSn: 600,
      },
      {
        baslik: 'Yoğurtlu sosu çırp',
        aciklama:
          'Yoğurdu ezilmiş sarımsak ve tuzla pürüzsüzleşene kadar çırp. Soğuk yoğurt makarnayı katılaştırır; mutlaka oda sıcaklığında kullan.',
      },
      {
        baslik: 'Kıymalı sosu hazırla',
        aciklama:
          'Tereyağında kıymayı suyunu çekip kavrulana dek pişir. Salçayı ekleyip 1 dakika çevir; ateşten alıp pul biber ve kuru naneyi karıştır.',
        sureSn: 420,
      },
      {
        baslik: 'Katmanla ve servis et',
        aciklama:
          'Ilık makarnanın üzerine sarımsaklı yoğurdu yay, en üste kızgın kıymalı sosu gezdir. Karıştırmadan, kaşıkla katmanlı servis et.',
      },
    ],
    pufNoktasi:
      'Makarna sıcakken yoğurt kesilir, soğukken lezzet birleşmez; elini yakmayacak ılıklıkta buluşturmak dengeyi kurar.',
  },
  {
    id: 'tereyagli-peynirli-eriste',
    baslik: 'Tereyağlı Peynirli Erişte',
    altBaslik: 'Kızdırılmış tereyağı, beyaz peynir ve dövülmüş cevizle 15 dakikada Anadolu klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['15-dakika', 'tek-tencere'],
    emoji: '🍜',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'erişte', miktar: 250, birim: 'g' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'beyaz peynir', miktar: 100, birim: 'g', not: 'elle ufalanmış' },
      { ad: 'ceviz içi', miktar: 30, birim: 'g', not: 'iri dövülmüş' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', not: 'haşlama suyu için' },
    ],
    adimlar: [
      {
        baslik: 'Erişteyi haşla',
        aciklama:
          'Erişteyi kaynar tuzlu suda dirilik kalacak şekilde 6-7 dakika haşla. Bir çay bardağı haşlama suyunu ayırıp gerisini süz.',
        sureSn: 420,
      },
      {
        baslik: 'Tereyağında çevir',
        aciklama:
          'Aynı tencerede tereyağını hafifçe kokusu çıkana dek kızdır. Erişteyi geri ekle, gerekirse ayırdığın sudan bir iki kaşık katıp parlatarak çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Peynir ve cevizle bitir',
        aciklama:
          'Ocağı kapat; ufalanmış peyniri ve dövülmüş cevizi serp, karabiberle tatlandır. Bir kez harmanlayıp bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Tereyağını fındık kokusu alana kadar kızdırmak eriştenin sade lezzetini derinleştirir; yakmamak için renk koyulaşır koyulaşmaz erişteyi ekle.',
  },
  {
    id: 'domates-soslu-kiymali-makarna',
    baslik: 'Domates Soslu Kıymalı Makarna',
    altBaslik: 'Rendelenmiş taze domates ve kekikli kıyma sosuyla herkesin sevdiği aile makarnası',
    kategori: 'ana-yemek',
    koleksiyonlar: [],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 510,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'kalem ya da burgu' },
      { ad: 'kıyma', miktar: 250, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Kıymayı kavur',
        aciklama:
          'Zeytinyağında soğanı yumuşayana dek çevir, sarımsağı ve kıymayı ekle. Kıyma suyunu çekip renk alana kadar orta ateşte kavur.',
        sureSn: 480,
      },
      {
        baslik: 'Sosu pişir',
        aciklama:
          'Salçayı 1 dakika kavurup rendelenmiş domatesi ekle. Tuz, karabiber ve kekikle tatlandır; sos koyulaşana kadar kısık ateşte pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Makarnayı haşla',
        aciklama:
          'Sos pişerken makarnayı bol kaynar tuzlu suda diri kalacak şekilde haşla. Yarım çay bardağı haşlama suyunu ayırıp süz.',
        sureSn: 540,
      },
      {
        baslik: 'Sosla buluştur',
        aciklama:
          'Makarnayı sosun içine aktar, ayırdığın haşlama suyuyla açarak 1-2 dakika birlikte çevir. Sos her parçayı sarınca sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Nişastalı haşlama suyu sosu makarnaya yapıştıran doğal bağlayıcıdır; sosu asla makarnanın üzerine dökme, makarnayı sosun içinde pişir.',
  },
  {
    id: 'sebzeli-firin-makarna',
    baslik: 'Sebzeli Fırın Makarna',
    altBaslik: 'Soteli kabak, biber ve mantarla renklenen sütlü soslu etsiz fırın makarna',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥦',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'kelebek ya da burgu' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'mantar', miktar: 150, birim: 'g', not: 'dilimlenmiş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'süt', miktar: 2, birim: 'su bardağı', grup: 'Sos için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Sos için' },
      { ad: 'kaşar peyniri', miktar: 150, birim: 'g', grup: 'Sos için', not: 'rendelenmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı diri haşla',
        aciklama:
          'Makarnayı kaynar tuzlu suda paket süresinden 2 dakika az haşlayıp süz; fırında sosu çekerken pişmeye devam edecek.',
        sureSn: 480,
      },
      {
        baslik: 'Sebzeleri sotele',
        aciklama:
          'Zeytinyağını geniş tavada kızdır; önce mantarları suyunu salıp çekene dek, sonra kabak ve biberi ekleyerek diri kalacak şekilde sotele. Kekikle tatlandır.',
        sureSn: 420,
      },
      {
        baslik: 'Sütlü sosu çırp',
        aciklama:
          'Sütü, yumurtaları ve kaşarın yarısını bir kapta tuz ve karabiberle çırp; makarnayı fırında bir arada tutacak sos bu karışımdır.',
      },
      {
        baslik: 'Birleştirip tepsiye yay',
        aciklama:
          'Makarnayı soteli sebzelerle harmanlayıp yağlanmış fırın kabına aktar. Sütlü sosu her yere ulaşacak şekilde üzerine dök.',
      },
      {
        baslik: 'Kaşarla fırınla',
        aciklama:
          'Kalan kaşarı serp, önceden ısıtılmış 190 derece fırında üzeri kızarıp sos tutana kadar 25 dakika pişir. 5 dakika dinlendirip dilimle.',
        sureSn: 1500,
      },
    ],
    pufNoktasi:
      'Kabak ve mantarı iyice soteleyip suyunu uçurmadan tepsiye koyarsan makarna sulanır; sebzeler tavada kuruyana kadar sabret.',
  },
];
