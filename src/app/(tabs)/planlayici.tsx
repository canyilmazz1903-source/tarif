import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, TextInput, View } from 'react-native';

import { BosDurum } from '@/components/BosDurum';
import { MiniKapak } from '@/components/TarifKarti';
import { Buton } from '@/components/ui/Buton';
import { Cip } from '@/components/ui/Cip';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, DokunmaHedefi, Font, Yaricap } from '@/constants/theme';
import { tarifBul } from '@/data/tarifler';
import { useTarifler } from '@/hooks/use-tarifler';
import { useTema } from '@/hooks/use-tema';
import { normalize } from '@/lib/ara';
import { porsiyonMaliyeti } from '@/lib/maliyet';
import { alternatifOner, haftalikMenuOner } from '@/lib/menu-oner';
import { useAlisveris } from '@/stores/alisveris';
import { useDolap } from '@/stores/dolap';
import { OGUNLER, tarihKey, usePlan, type Ogun, type PlanKaydi } from '@/stores/plan';

const GUN_ADLARI = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
const OGUN_ADI: Record<Ogun, string> = { kahvalti: 'Kahvaltı', ogle: 'Öğle', aksam: 'Akşam' };

export default function Planlayici() {
  const { palet } = useTema();
  const router = useRouter();
  const plan = usePlan();
  const alisveris = useAlisveris();
  const dolap = useDolap();
  const tarifler = useTarifler();

  const [secim, setSecim] = useState<{ tarih: string; ogun: Ogun } | null>(null);
  const [arama, setArama] = useState('');

  // Sihirbaz durumu (brief P1-6: üç soruluk akış, form hissi vermeden).
  const [sihirbazAcik, setSihirbazAcik] = useState(false);
  const [ogunSecimi, setOgunSecimi] = useState<'hepsi' | 'aksam'>('aksam');
  const [dolabimdan, setDolabimdan] = useState(true);
  const [kisi, setKisi] = useState(4);
  const [butce, setButce] = useState('');
  const [onerilen, setOnerilen] = useState<PlanKaydi[] | null>(null);
  const [degistirmeSayaci, setDegistirmeSayaci] = useState(0);
  const [dusulenler, setDusulenler] = useState<string[] | null>(null);

  const gunler = useMemo(() => {
    const bugun = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(bugun);
      d.setDate(bugun.getDate() + i);
      return d;
    });
  }, []);

  const haftaninTarihleri = useMemo(() => gunler.map(tarihKey), [gunler]);
  const haftaKayitlari = plan.kayitlar.filter((k) => haftaninTarihleri.includes(k.tarih));

  const tahminiMaliyet = useMemo(
    () =>
      haftaKayitlari.reduce((toplam, k) => {
        const t = tarifBul(k.tarifId);
        return t ? toplam + porsiyonMaliyeti(t) * t.porsiyon : toplam;
      }, 0),
    [haftaKayitlari],
  );

  /** Plan→liste: dolapta ZATEN OLAN malzemeler listeye eklenmez (brief P1-6). */
  const listeyiCikar = (kayitlar: PlanKaydi[]) => {
    const dolaptakiler = new Set(dolap.malzemeler.map((a) => normalize(a)));
    const dusulen = new Set<string>();
    const kalemler = kayitlar.flatMap((k) => {
      const t = tarifBul(k.tarifId);
      if (!t) return [];
      return t.malzemeler
        .filter((m) => {
          if (m.ad === 'su') return false;
          if (dolaptakiler.has(normalize(m.ad))) {
            dusulen.add(m.ad);
            return false;
          }
          return true;
        })
        .map((m) => ({ ad: m.ad, miktar: m.miktar, birim: m.birim, kaynakTarifId: t.id }));
    });
    alisveris.topluEkle(kalemler);
    setDusulenler([...dusulen]);
    router.push('/alisveris');
  };

  const menuOlustur = () => {
    const secilenOgunler: Ogun[] = ogunSecimi === 'aksam' ? ['aksam'] : ['kahvalti', 'ogle', 'aksam'];
    const butceTl = Number(butce.replace(/\D/g, '')) || undefined;
    const sonuc = haftalikMenuOner(
      tarifler,
      {
        ogunler: secilenOgunler,
        dolaptakiler: dolabimdan ? dolap.malzemeler : [],
        kisi,
        butceTl,
      },
      new Date(),
    );
    setOnerilen(sonuc);
  };

  const alternatifDegistir = (kayit: PlanKaydi) => {
    if (!onerilen) return;
    const yeni = alternatifOner(
      tarifler,
      kayit.ogun,
      onerilen.map((k) => k.tarifId),
      dolabimdan ? dolap.malzemeler : [],
      degistirmeSayaci,
    );
    setDegistirmeSayaci((x) => x + 1);
    if (!yeni) return;
    setOnerilen(
      onerilen.map((k) =>
        k.tarih === kayit.tarih && k.ogun === kayit.ogun && k.tarifId === kayit.tarifId
          ? { ...k, tarifId: yeni.id }
          : k,
      ),
    );
  };

  const planiKaydet = () => {
    if (!onerilen) return;
    for (const k of onerilen) plan.ekle(k);
    setSihirbazAcik(false);
  };

  const secimSonuclari = useMemo(() => {
    const q = normalize(arama);
    return q ? tarifler.filter((t) => normalize(t.baslik).includes(q)) : tarifler;
  }, [tarifler, arama]);

  return (
    <Ekran>
      <ScrollView
        contentContainerStyle={{ padding: Bosluk.l, paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: Bosluk.xs }}>
          <Yazi varyant="devBaslik">Haftalık Plan</Yazi>
          <Yazi varyant="kucuk" renk="metinIkincil">
            Öğünlere tarif ekle; tek dokunuşla alışveriş listeni çıkar.
          </Yazi>
        </View>

        <Buton
          baslik="✨ Menümü Oluştur"
          buyuk
          onPress={() => {
            setOnerilen(null);
            setDusulenler(null);
            setSihirbazAcik(true);
          }}
        />

        {gunler.map((gun, gi) => {
          const key = tarihKey(gun);
          const bugunMu = gi === 0;
          return (
            <View
              key={key}
              style={{
                backgroundColor: palet.kart,
                borderRadius: Yaricap.m,
                borderWidth: 1,
                borderColor: bugunMu ? palet.birincil : palet.cizgi,
                padding: Bosluk.l,
                gap: Bosluk.m,
              }}
            >
              <Yazi varyant="altBaslik" style={bugunMu ? { color: palet.birincil } : undefined}>
                {bugunMu ? 'Bugün' : GUN_ADLARI[gun.getDay()]} · {gun.getDate()}.{gun.getMonth() + 1}
              </Yazi>
              {OGUNLER.map((ogun) => {
                const kayitlar = haftaKayitlari.filter((k) => k.tarih === key && k.ogun === ogun.key);
                return (
                  <View key={ogun.key} style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.m }}>
                    <Yazi varyant="kucuk" renk="metinIkincil" style={{ width: 62 }}>
                      {ogun.ad}
                    </Yazi>
                    <View style={{ flex: 1, gap: Bosluk.xs }}>
                      {kayitlar.map((k) => {
                        const t = tarifBul(k.tarifId);
                        if (!t) return null;
                        return (
                          <View
                            key={k.tarifId}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: Bosluk.s,
                              backgroundColor: palet.kartIkincil,
                              borderRadius: Yaricap.s,
                              paddingHorizontal: Bosluk.m,
                              minHeight: 40,
                            }}
                          >
                            <Pressable
                              accessibilityRole="button"
                              accessibilityLabel={t.baslik}
                              style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: Bosluk.s }}
                              onPress={() => router.push({ pathname: '/tarif/[id]', params: { id: t.id } })}
                            >
                              <MiniKapak tarif={t} boy={28} />
                              <Yazi varyant="etiket" numberOfLines={1} style={{ flex: 1 }}>
                                {t.baslik}
                              </Yazi>
                            </Pressable>
                            <Pressable
                              accessibilityRole="button"
                              accessibilityLabel={`${t.baslik} planından çıkar`}
                              onPress={() => plan.cikar(k)}
                              style={{ minWidth: 32, minHeight: 40, alignItems: 'center', justifyContent: 'center' }}
                            >
                              <Ionicons name="close-circle" size={18} color={palet.metinIkincil} />
                            </Pressable>
                          </View>
                        );
                      })}
                      <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={`${ogun.ad} öğününe tarif ekle`}
                        onPress={() => {
                          setArama('');
                          setSecim({ tarih: key, ogun: ogun.key });
                        }}
                        style={{
                          minHeight: 36,
                          borderRadius: Yaricap.s,
                          borderWidth: 1,
                          borderStyle: 'dashed',
                          borderColor: palet.cizgi,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Yazi varyant="kucuk" renk="metinIkincil">
                          + Tarif ekle
                        </Yazi>
                      </Pressable>
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}

        {haftaKayitlari.length > 0 ? (
          <View style={{ gap: Bosluk.m }}>
            <View
              style={{
                backgroundColor: palet.ikincilYumusak,
                borderRadius: Yaricap.m,
                padding: Bosluk.l,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Yazi varyant="etiket" style={{ color: palet.ikincil }}>
                Haftanın tahmini maliyeti
              </Yazi>
              <Yazi varyant="baslik" style={{ color: palet.ikincil }}>
                ≈{Math.round(tahminiMaliyet)} TL
              </Yazi>
            </View>
            {dusulenler && dusulenler.length > 0 ? (
              <Yazi varyant="kucuk" renk="metinIkincil">
                Dolabında var: {dusulenler.join(', ')} — listeye eklenmedi.
              </Yazi>
            ) : null}
            <Buton
              baslik="🛒 Haftanın alışveriş listesini çıkar"
              buyuk
              onPress={() => listeyiCikar(haftaKayitlari)}
            />
          </View>
        ) : (
          <BosDurum
            emoji="🗓"
            baslik="Haftan henüz boş"
            aciklama="Sihirbazla saniyeler içinde menü kur ya da öğünlere elle tarif ekle."
          />
        )}

        <Buton baslik="Alışveriş listesine git" varyant="yumusak" onPress={() => router.push('/alisveris')} />
      </ScrollView>

      {/* ————— Menümü Oluştur sihirbazı ————— */}
      <Modal visible={sihirbazAcik} animationType="slide" onRequestClose={() => setSihirbazAcik(false)}>
        <Ekran>
          <ScrollView
            contentContainerStyle={{ padding: Bosluk.l, paddingBottom: Bosluk.xxl, gap: Bosluk.l }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Yazi varyant="devBaslik">Menümü Oluştur</Yazi>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Kapat"
                onPress={() => setSihirbazAcik(false)}
                style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
              >
                <Ionicons name="close" size={26} color={palet.metin} />
              </Pressable>
            </View>

            {onerilen == null ? (
              <>
                {/* Soru 1 */}
                <View style={{ backgroundColor: palet.kart, borderRadius: Yaricap.m, borderWidth: 1, borderColor: palet.cizgi, padding: Bosluk.l, gap: Bosluk.m }}>
                  <Yazi varyant="altBaslik">1 · Neyi planlayalım?</Yazi>
                  <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
                    <Cip baslik="Sadece akşam yemekleri" secili={ogunSecimi === 'aksam'} onPress={() => setOgunSecimi('aksam')} />
                    <Cip baslik="Tüm öğünler" secili={ogunSecimi === 'hepsi'} onPress={() => setOgunSecimi('hepsi')} />
                  </View>
                </View>

                {/* Soru 2 */}
                <View style={{ backgroundColor: palet.kart, borderRadius: Yaricap.m, borderWidth: 1, borderColor: palet.cizgi, padding: Bosluk.l, gap: Bosluk.m }}>
                  <Yazi varyant="altBaslik">2 · Dolabındakileri kullanalım mı?</Yazi>
                  <Yazi varyant="kucuk" renk="metinIkincil">
                    Dolabında {dolap.malzemeler.length} malzeme işaretli. "Dolabımdan başla" seçersen
                    onları kullanan tarifler öne alınır, israf azalır.
                  </Yazi>
                  <View style={{ flexDirection: 'row', gap: Bosluk.s }}>
                    <Cip baslik="🧺 Dolabımdan başla" secili={dolabimdan} onPress={() => setDolabimdan(true)} />
                    <Cip baslik="Fark etmez" secili={!dolabimdan} onPress={() => setDolabimdan(false)} />
                  </View>
                </View>

                {/* Soru 3 */}
                <View style={{ backgroundColor: palet.kart, borderRadius: Yaricap.m, borderWidth: 1, borderColor: palet.cizgi, padding: Bosluk.l, gap: Bosluk.m }}>
                  <Yazi varyant="altBaslik">3 · Bütçe & kişi</Yazi>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.m }}>
                    <Yazi varyant="govde" style={{ width: 60 }}>
                      Kişi
                    </Yazi>
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel="Kişi azalt"
                      onPress={() => setKisi((k) => Math.max(1, k - 1))}
                      style={{ width: DokunmaHedefi, height: DokunmaHedefi, borderRadius: Yaricap.s, backgroundColor: palet.kartIkincil, alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Ionicons name="remove" size={20} color={palet.metin} />
                    </Pressable>
                    <Yazi varyant="altBaslik">{kisi}</Yazi>
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel="Kişi artır"
                      onPress={() => setKisi((k) => Math.min(12, k + 1))}
                      style={{ width: DokunmaHedefi, height: DokunmaHedefi, borderRadius: Yaricap.s, backgroundColor: palet.kartIkincil, alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Ionicons name="add" size={20} color={palet.metin} />
                    </Pressable>
                  </View>
                  <TextInput
                    value={butce}
                    onChangeText={setButce}
                    placeholder="Haftalık bütçe (TL, isteğe bağlı)"
                    placeholderTextColor={palet.metinIkincil}
                    keyboardType="number-pad"
                    style={{
                      backgroundColor: palet.kartIkincil,
                      borderRadius: Yaricap.s,
                      paddingHorizontal: Bosluk.m,
                      minHeight: 48,
                      color: palet.metin,
                      fontFamily: Font.govde,
                    }}
                  />
                </View>

                <Buton baslik="Menüyü oluştur ✨" buyuk onPress={menuOlustur} />
              </>
            ) : (
              <>
                {/* Önizleme */}
                {gunler.map((gun, gi) => {
                  const key = tarihKey(gun);
                  const gunKayitlari = onerilen.filter((k) => k.tarih === key);
                  if (gunKayitlari.length === 0) return null;
                  return (
                    <View
                      key={key}
                      style={{ backgroundColor: palet.kart, borderRadius: Yaricap.m, borderWidth: 1, borderColor: palet.cizgi, padding: Bosluk.l, gap: Bosluk.s }}
                    >
                      <Yazi varyant="etiket" renk="metinIkincil">
                        {gi === 0 ? 'Bugün' : GUN_ADLARI[gun.getDay()]} · {gun.getDate()}.{gun.getMonth() + 1}
                      </Yazi>
                      {gunKayitlari.map((k) => {
                        const t = tarifBul(k.tarifId);
                        if (!t) return null;
                        return (
                          <View key={`${k.ogun}-${k.tarifId}`} style={{ flexDirection: 'row', alignItems: 'center', gap: Bosluk.s }}>
                            <Yazi varyant="kucuk" renk="metinIkincil" style={{ width: 58 }}>
                              {OGUN_ADI[k.ogun]}
                            </Yazi>
                            <MiniKapak tarif={t} boy={28} />
                            <Yazi varyant="etiket" numberOfLines={1} style={{ flex: 1 }}>
                              {t.baslik}
                            </Yazi>
                            <Yazi varyant="kucuk" renk="metinIkincil">
                              ≈₺{Math.round(porsiyonMaliyeti(t) * kisi)}
                            </Yazi>
                            <Pressable
                              accessibilityRole="button"
                              accessibilityLabel={`${t.baslik} yerine alternatif öner`}
                              onPress={() => alternatifDegistir(k)}
                              style={{ minWidth: 40, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
                            >
                              <Ionicons name="refresh" size={18} color={palet.birincil} />
                            </Pressable>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}

                <View
                  style={{
                    backgroundColor: palet.ikincilYumusak,
                    borderRadius: Yaricap.m,
                    padding: Bosluk.l,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Yazi varyant="etiket" style={{ color: palet.ikincil }}>
                    Haftanın tahmini maliyeti ({kisi} kişi)
                  </Yazi>
                  <Yazi varyant="baslik" style={{ color: palet.ikincil }}>
                    ≈₺
                    {Math.round(
                      onerilen.reduce((t, k) => {
                        const tr = tarifBul(k.tarifId);
                        return tr ? t + porsiyonMaliyeti(tr) * kisi : t;
                      }, 0),
                    )}
                  </Yazi>
                </View>

                <Buton baslik="✓ Planı Kaydet" buyuk onPress={planiKaydet} />
                <Buton
                  baslik="🛒 Alışveriş Listesini Çıkar"
                  varyant="yumusak"
                  onPress={() => {
                    for (const k of onerilen) plan.ekle(k);
                    setSihirbazAcik(false);
                    listeyiCikar(onerilen);
                  }}
                />
                <Buton baslik="↻ Baştan oluştur" varyant="cizgili" onPress={() => setOnerilen(null)} />
              </>
            )}
          </ScrollView>
        </Ekran>
      </Modal>

      {/* Tarif seçici */}
      <Modal visible={secim !== null} animationType="slide" onRequestClose={() => setSecim(null)}>
        <Ekran>
          <View style={{ flex: 1, padding: Bosluk.l, gap: Bosluk.m }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Yazi varyant="baslik">Tarif seç</Yazi>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Kapat"
                onPress={() => setSecim(null)}
                style={{ minWidth: DokunmaHedefi, minHeight: DokunmaHedefi, alignItems: 'center', justifyContent: 'center' }}
              >
                <Ionicons name="close" size={26} color={palet.metin} />
              </Pressable>
            </View>
            <TextInput
              value={arama}
              onChangeText={setArama}
              placeholder="Tarif ara…"
              placeholderTextColor={palet.metinIkincil}
              style={{
                backgroundColor: palet.kart,
                borderRadius: Yaricap.m,
                borderWidth: 1,
                borderColor: palet.cizgi,
                paddingHorizontal: Bosluk.l,
                minHeight: 48,
                color: palet.metin,
                fontFamily: Font.govde,
              }}
            />
            <FlatList
              data={secimSonuclari}
              keyExtractor={(t) => t.id}
              contentContainerStyle={{ gap: Bosluk.s, paddingBottom: Bosluk.xl }}
              renderItem={({ item }) => (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={item.baslik}
                  onPress={() => {
                    if (secim) plan.ekle({ ...secim, tarifId: item.id });
                    setSecim(null);
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: Bosluk.m,
                    backgroundColor: palet.kart,
                    borderRadius: Yaricap.s,
                    borderWidth: 1,
                    borderColor: palet.cizgi,
                    padding: Bosluk.m,
                    minHeight: DokunmaHedefi,
                  }}
                >
                  <MiniKapak tarif={item} boy={40} />
                  <View style={{ flex: 1 }}>
                    <Yazi varyant="etiket">{item.baslik}</Yazi>
                    <Yazi varyant="kucuk" renk="metinIkincil">
                      ⏱ {item.hazirlikDk + item.pisirmeDk} dk · {item.porsiyon} porsiyon
                    </Yazi>
                  </View>
                  <Ionicons name="add-circle" size={24} color={palet.birincil} />
                </Pressable>
              )}
            />
          </View>
        </Ekran>
      </Modal>
    </Ekran>
  );
}
