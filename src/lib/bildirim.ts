import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Uygulama açıkken de bildirim görünsün (sayaç başka ekranda dolarsa).
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

let kanalHazir = false;

async function kanalOlustur() {
  if (kanalHazir || Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync('sayac', {
    name: 'Pişirme zamanlayıcıları',
    importance: Notifications.AndroidImportance.HIGH,
    sound: 'default',
    vibrationPattern: [0, 300, 200, 300],
  });
  kanalHazir = true;
}

export async function bildirimIzniIste(): Promise<boolean> {
  const mevcut = await Notifications.getPermissionsAsync();
  if (mevcut.granted) return true;
  const sonuc = await Notifications.requestPermissionsAsync();
  return sonuc.granted;
}

/** Bitiş zamanına yerel bildirim kurar; bildirim id döner (iptal için). */
export async function sayacBildirimiKur(adimBaslik: string, bitisMs: number): Promise<string | null> {
  try {
    const izin = await bildirimIzniIste();
    if (!izin) return null;
    await kanalOlustur();
    const saniye = Math.max(1, Math.round((bitisMs - Date.now()) / 1000));
    return await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Süre doldu ✓',
        body: `${adimBaslik} — sıradaki adıma geçebilirsin.`,
        sound: 'default',
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: saniye,
        channelId: Platform.OS === 'android' ? 'sayac' : undefined,
      },
    });
  } catch {
    return null;
  }
}

export async function sayacBildirimiIptal(id: string | null | undefined) {
  if (!id) return;
  try {
    await Notifications.cancelScheduledNotificationAsync(id);
  } catch {
    // sessiz: bildirim zaten tetiklenmiş olabilir
  }
}
