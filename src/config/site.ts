export const site = {
  brand: "Yeni Hayat Belgrad",
  domain: "yenihayatbelgrad.com",
  locale: "tr_TR",
  city: "Belgrad",

  // wa.me için numara: ülke kodu ile, + olmadan (örn: 3816XXXXXXXX)
  whatsappNumber: "3816XXXXXXXX", // TODO: numaranı yaz

  whatsappTexts: {
    general:
      "Merhaba, Belgrad kurye danışmanlığı için yazıyorum. Uygunluk kontrolü almak istiyorum.",
    offer:
      "Merhaba, Belgrad’da kurye olarak başlamak istiyorum. Araç tercihim: (bisiklet/motor/araba/kararsız). Ne zaman gelebilirim: (tarih). Teklif almak istiyorum.",
    documents:
      "Merhaba, Belgrad kurye için gerekli evrak listesini paylaşır mısınız?",
  },

  socials: {
    instagram: "https://instagram.com/INSTAGRAM_KULLANICIADI",
    tiktok: "https://www.tiktok.com/@TIKTOK_KULLANICIADI",
  },

  title: "Belgrad Kurye Danışmanlığı | Şirket + Oturum + İşe Başlatma",
  description:
    "Belgrad’da kurye olarak başlamak isteyenler için şirket kuruluşu, oturum başvurusu, platform hesap açılışı, konaklama ve araç desteği. İletişim WhatsApp üzerinden.",
} as const;

export function getWhatsAppUrl(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
