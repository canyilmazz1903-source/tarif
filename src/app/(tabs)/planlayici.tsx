import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, TextInput, View } from 'react-native';

import { BosDurum } from '@/components/BosDurum';
import { Buton } from '@/components/ui/Buton';
import { Ekran } from '@/components/ui/Ekran';
import { Yazi } from '@/components/ui/Yazi';
import { Bosluk, DokunmaHedefi, Font, Yaricap } from '@/constants/theme';
import { TARIFLER, tarifBul } from '@/data/tarifler';
import { useTema } from '@/hooks/use-tema';
import { normalize } from '@/lib/ara';
import { porsiyonMaliyeti } from '@/lib/maliyet';
import { useAlisveris } from '@/stores/alisveris';
import { OGUNLER, tarihKey, usePlan, type Ogun } from '@/stores/plan';

const GUN_ADLARI = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

export default function Planlayici() {
  const { palet } = useTema();
  const router = useRouter();
  const plan = usePlan();
  const alisveris = useAlisveris();
  const [secim, setSecim] = useState<{ tarih: string; ogun: Ogun } | null>(null);
  const [arama, setArama] = useState('');

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

  const listeyiCikar = () => {
    const kalemler = haftaKayitlari.flatMap((k) => {
      const t = tarifBul(k.tarifId);
      if (!t) return [];
      return t.malzemeler
        .filter((m) => m.ad !== 'su')
        .map((m) => ({ ad: m.ad, miktar: m.miktar, birim: m.birim, kaynakTarifId: t.id }));
    });
    alisveris.topluEkle(kalemler);
    router.push('/alisveris');
  };

  const secimSonuclari = useMemo(() => {
    const q = normalize(arama);
    return q ? TARIFLER.filter((t) => normalize(t.baslik).includes(q)) : TARIFLER;
  }, [arama]);

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
                              <Yazi>{t.emoji}</Yazi>
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
            <Buton baslik="🛒 Haftanın alışveriş listesini çıkar" buyuk onPress={listeyiCikar} />
          </View>
        ) : (
          <BosDurum
            emoji="🗓"
            baslik="Haftan henüz boş"
            aciklama="Öğünlere tarif ekle; malzemeleri tek listede toplayalım."
          />
        )}

        <Buton baslik="Alışveriş listesine git" varyant="yumusak" onPress={() => router.push('/alisveris')} />
      </ScrollView>

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
                  <Yazi style={{ fontSize: 24 }}>{item.emoji}</Yazi>
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
