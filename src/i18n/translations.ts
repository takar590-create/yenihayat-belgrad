export type Lang = "tr" | "az";

export const translations = {
  tr: {
    nav: {
      services: "Hizmetler",
      process: "Süreç",
      faq: "SSS",
      blog: "Blog",
      contact: "İletişim",
      packages: "Paketler",
    },
    cta: {
      getOffer: "Teklif Al",
      offerShort: "Teklif",
      whatsapp: "WhatsApp",
    },

    // ✅ Sosyal label'lar (ContactLinks vb. için)
    social: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      tiktok: "TikTok",
    },

    footer: {
      kvkk: "KVKK & Gizlilik",
      disclaimer:
        "Bilgilendirme amaçlıdır. Resmî kurum değildir; süreç ve sonuçlar dosyaya göre değişebilir.",
    },

    // ✅ SSS metinleri (TR)
    faq: {
      pageTitle: "SSS | Yeni Hayat Belgrad",
      metaDescription:
        "Belgrad kurye danışmanlığı hakkında sık sorulan sorular ve net cevaplar.",
      heading: "Sık Sorulan Sorular",
      intro:
        "En güncel bilgi dosyana göre değişebilir. En hızlı netleştirmek için WhatsApp’tan kısa bilgi yazabilirsin.",
      topicsTitle: "Konu başlıkları",
      buttons: {
        askEligibility: "WhatsApp’tan Uygunluk Sor",
        getOffer: "Teklif Al",
        requestDocs: "Evrak Listesi İste",
      },
      waText: {
        general:
          "Merhaba, Belgrad kurye danışmanlığı için yazıyorum. Uygunluk kontrolü almak istiyorum.",
        offer: "Merhaba, bana özel teklif almak istiyorum. Kısa bilgi paylaşacağım.",
        documents:
          "Merhaba, Belgrad kurye için gerekli evrak listesini paylaşır mısınız?",
      },
      search: {
        label: "SSS içinde ara",
        help:
          "Soru veya cevap içinde arama yapabilirsin (örn: “oturum”, “wolt”, “araba”).",
        placeholder: "Aramak istediğin kelime…",
        clear: "Temizle",
        noResults: "Sonuç bulunamadı.",
        resultsFound: "{n} sonuç bulundu.",
      },
      quickNote: {
        title: "Hızlı not",
        desc:
          "Süreç ve ücret kalemleri dönemsel olarak değişebilir. En doğru bilgi için WhatsApp üzerinden kısa bir ön değerlendirme yapıyoruz.",
      },
      items: [
        // Şirket & Oturum
        {
          cat: "Şirket & Oturum",
          q: "Şirket açılışı ne kadar sürer?",
          a: "Başvurudan itibaren şirket açılışı genellikle 5–8 iş günü içinde tamamlanır. Süre, resmi yoğunluk ve dosya durumuna göre değişebilir.",
        },
        {
          cat: "Şirket & Oturum",
          q: "Şirket açılışından sonra oturum başvurusu ne zaman yapılır?",
          a: "Şirket açılış işlemlerinden 1 gün sonra oturum başvurusu yapılır. Evrakların hazır olmasına göre süreç hızlanabilir.",
        },
        {
          cat: "Şirket & Oturum",
          q: "Oturum kartı (oturum sonucu) ne kadar sürede çıkar?",
          a: "Dosya yoğunluğuna bağlı olarak oturum sonucu genellikle 5–6 hafta içinde çıkar. Bu süre resmi yoğunluk ve başvuru dönemine göre değişebilir.",
        },
        {
          cat: "Şirket & Oturum",
          q: "Oturum kartını aldıktan sonra sigorta (SGK) süreci nasıl oluyor?",
          a: "Oturum kartınızı aldıktan sonra sizi notere götürüp yaklaşık 50€ karşılığında sigorta girişinizi yaptırıyoruz. Aylık sigorta ödemesi yaklaşık 9.000 dinardır.",
        },

        // Şirket türleri
        {
          cat: "Şirket Türleri (PR / Limited)",
          q: "PR şirketin aylık sabit giderleri nedir?",
          a: "PR şirket için aylık sabit giderler genel olarak yaklaşık 220€ (vergi vb.) + muhasebe ücretidir. Muhasebe ücretleri minimum 50€’dan başlayıp iş yüküne göre artabilir.",
        },
        {
          cat: "Şirket Türleri (PR / Limited)",
          q: "PR şirketin en önemli avantajı nedir?",
          a: "PR şirketin önemli avantajlarından biri, belirli ciro sınırları içinde KDV ve gelir vergisi açısından muafiyet/avantaj sağlayabilmesidir. Net durum dosyaya göre değişebilir.",
        },
        {
          cat: "Şirket Türleri (PR / Limited)",
          q: "PR şirkette vergi muafiyeti sınırları nelerdir?",
          a: "Genel bilgi olarak: yıllık 55.000€’ya kadar belirli vergi avantajları ve aylık 4.200€’ya kadar faturalama durumunda KDV/gelir vergisi avantajları söz konusu olabilir. Uygulama ve detaylar dosyaya göre değişebilir.",
        },
        {
          cat: "Şirket Türleri (PR / Limited)",
          q: "Limited şirket açma maliyetleri nedir?",
          a: "Limited şirket maliyetleri dosyaya göre değiştiği için WhatsApp üzerinden kısa ön değerlendirme ile net bilgi veriyoruz.",
        },

        // Glovo / Wolt
        {
          cat: "Glovo / Wolt Hesapları",
          q: "Glovo veya Wolt platform hesapları kimin üzerine açılıyor?",
          a: "Glovo/Wolt platform hesaplarını kendi şahsi adınız ve pasaport numaranız üzerine açıyoruz.",
        },
        {
          cat: "Glovo / Wolt Hesapları",
          q: "Ödemeler ne sıklıkla yapılır?",
          a: "Wolt ödemeleri genellikle 15 günde 1; Glovo ödemeleri genellikle haftalık olarak yapılır. Dönemsel değişiklikler olabilir.",
        },
        {
          cat: "Glovo / Wolt Hesapları",
          q: "Acenta kesintileri nedir?",
          a: "Genel bilgi: Acentamızın aylık kesintisi 12.000 dinardır. Wolt’ta 15 günde 1 6.000 dinar, Glovo’da haftada 1 3.000 dinar kesinti vardır.",
        },

        // Araç & destek
        {
          cat: "Araç & Sahada Destek",
          q: "Motor / elektrikli bisiklet / araba: hangisiyle başlamalıyım?",
          a: "Bütçen, çalışma düzenin ve hedef teslimat temposuna göre birlikte karar veriyoruz. Belgrad’da koşullara göre en mantıklı başlangıcı planlıyoruz.",
        },
        {
          cat: "Araç & Sahada Destek",
          q: "Araçlarınızın durumu nasıl? Yolda kalırsam ne olur?",
          a: "Araçlarımız temiz ve bakımlıdır. Yolda kalma durumlarında bize ulaşman yeterli; tek bir arama ile yakın destek sağlarız.",
        },
        {
          cat: "Araç & Sahada Destek",
          q: "Araç kiraları ne kadar?",
          a: "Genel bilgi: Araba 300–350€, motor 200–250€, elektrikli bisiklet 150–190€ aralığındadır. Duruma/stoğa göre değişebilir.",
        },

        // Yaşam & para transferi
        {
          cat: "Yaşam & Kazanç",
          q: "Türkiye’ye kazancımı nasıl gönderirim?",
          a: "Kazançlarınızı Türkiye’ye Western Union ile gönderebilirsiniz. Kişisel bankacılık durumunuza göre alternatifleri de konuşabiliriz.",
        },
        {
          cat: "Yaşam & Kazanç",
          q: "Aylık market (mutfak) gideri ne olur?",
          a: "Genel bir örnek olarak, 200€’luk bir mutfak alışverişi birçok kişi için yaklaşık 1 ay yeterli olabiliyor. Bu tamamen kişisel tüketim alışkanlığına göre değişir.",
        },

        // Ödeme şeffaflığı
        {
          cat: "Ödeme & Şeffaflık",
          q: "Elden ödeme var mı?",
          a: "Hayır. Acentamız bünyesinde ödemeler hiçbir şekilde elden yapılmamaktadır.",
        },
        {
          cat: "Ödeme & Şeffaflık",
          q: "Ödemeyi nasıl alabilirim?",
          a: "Dileyen çalışanlar fatura keserek ödeme alabilir. Fatura kesmek istemeyenler ise Glovo/Wolt ID numaraları ve pasaportları ile yönlendirdiğimiz noktalar üzerinden ödemelerini alabilir.",
        },
      ],
    },

    // ✅ Ana sayfa metinleri (TR)
    home: {
      waText: {
        general:
          "Merhaba, Belgrad kurye danışmanlığı hakkında bilgi almak istiyorum.",
        offer: "Merhaba, bana özel teklif almak istiyorum. Kısa bilgi paylaşacağım.",
      },
      hero: {
        badge: "Belgrad odaklı • WhatsApp ile hızlı iletişim",
        title: "Belgrad’da kurye olarak başlamak için uçtan uca danışmanlık",
        desc:
          "Şirket kuruluşu, oturum başvurusu, platform hesabı, araç ve konaklama desteği. Tüm süreç WhatsApp üzerinden şeffaf şekilde ilerler.",
        btnWhatsapp: "WhatsApp’tan Hemen Yaz",
        btnProcess: "Süreç Nasıl İşliyor?",
        cards: [
          { t: "Hızlı Ön Değerlendirme", d: "2 dakikada uygunluk kontrolü." },
          { t: "Belgrad’da Yerel Ekip", d: "Sahada destek, yönlendirme." },
          { t: "Uçtan Uca Plan", d: "Şirket → oturum → işe başlangıç." },
        ],
      },
      faqBox: {
        title: "En çok sorulanlar",
        items: [
          "Şirket açılışı nasıl oluyor?",
          "Oturum işlemleri ne kadar sürer?",
          "Motor / bisiklet / araba: hangisi mantıklı?",
          "Konaklama ve banka hesabı desteği var mı?",
        ],
        btn: "SSS’ye Git",
      },
      services: {
        title: "Hizmetler",
        items: [
          {
            t: "Şirket Kuruluşu",
            d: "Belgrad’da şirket açılış süreci planlama ve koordinasyon.",
          },
          { t: "Oturum Başvurusu", d: "Başvuru hazırlığı ve süreç takibi." },
          {
            t: "Glovo & Wolt Hesap Açılışı",
            d: "Şahsi hesap açılışı ve işe başlangıç planı.",
          },
          { t: "Konaklama", d: "Hostel/ev seçenekleri, ilk gün planı." },
          {
            t: "Araç Desteği",
            d: "Bisiklet/motor/araba seçeneklerinin kıyaslanması.",
          },
          {
            t: "Banka Hesabı",
            d: "Kişisel/şirket hesabı için adım adım yönlendirme.",
          },
        ],
        btnAll: "Tüm Hizmetleri Gör",
      },
      activation: {
        title: "Aktivasyon ve ödeme düzeni",
        desc: "En çok sorulan iki konu: Glovo/Wolt aktivasyon takvimi ve ödemeler/kesintiler.",
        card1Title: "Glovo / Wolt aktivasyon takvimi",
        card1Items: [
          {
            a: "Wolt:",
            b: "Pazar → Pazartesiye bağlayan güne kadar gönderilirse genelde Pazartesi aktif edilir.",
          },
          {
            a: "Glovo:",
            b: "Başvurular genelde Çarşamba’ya kadar aktif edilir.",
          },
        ],
        card1Note:
          "Not: Aktivasyon günleri dönemsel yoğunluğa göre değişebilir. En güncel takvimi WhatsApp’tan teyit ediyoruz.",
        card2Title: "Ödeme düzeni ve kesintiler",
        card2Items: [
          "Acenta aylık kesinti: 12.000 dinar",
          "Glovo ödemeleri: haftalık",
          "Wolt ödemeleri: 15 günde 1",
          "Glovo acente kesintisi: haftalık 3.000 dinar",
          "Wolt acente kesintisi: 15 günde 1, 6.000 dinar",
        ],
        card2Note:
          "Not: Kesintiler/ödeme periyotları platform şartlarına göre değişebilir.",
        btnDetail: "Süreç Sayfasında Detay",
        btnAsk: "WhatsApp’tan Sor",
      },
      earnings: {
        title: "Kazanç örnekleri",
        desc:
          "Aşağıdaki rakamlar örnek senaryolardır. Çalışma saati, bölge yoğunluğu, performans, bonus koşulları ve dönemsel şartlara göre değişebilir. En güncel planı WhatsApp’tan netleştiriyoruz.",
        wolt: {
          title: "Wolt (Araba / Motor)",
          badge: "e-bike bonus yok",
          bullets: [
            "Günlük 30 paket → 6 günde 180 paket bonus hedefi",
            "Haftalık bonus: 18.000 dinar",
            "En düşük paket ücreti: 170 dinar",
            "Cash paketler: 100 paketten sonra açılır ve paket kazancı 2x olabilir",
            "Ortalama paket: 230 dinar",
          ],
          cardA: {
            title: "6 günlük örnek kazanç",
            line1: "30 paket ≈ 7.000 dinar/gün → 6 günde ≈ 41.400 dinar",
            line2: "Bonuslar eklenince ≈ 61.400 dinar (örnek: ~530€)",
          },
          cardB: {
            title: "Aylık net (örnek)",
            line: "Yaklaşık 2.200€ (en düşük paket sayısı + bahşiş yok varsayımı)",
          },
          btn: "Bana göre kazanç planı çıkar",
        },
        glovo: {
          title: "Glovo (Araba / Motor / e-bike)",
          badge: "Cash paket hemen",
          bullets: [
            "Bonus hedefi: Araba/Motor 205 paket",
            "Bisiklet bonus hedefi: 215 paket",
            "Sabit en düşük ücret: yok",
            "Cash paketler: başlar başlamaz",
            "Ortalama paket: 240 dinar",
            "Haftalık bonus: 20.000 dinar",
          ],
          cardA: {
            title: "6 günlük örnek kazanç",
            line1: "34 paket ≈ 8.200 dinar/gün → 6 günde ≈ 49.000 dinar",
            line2:
              "Hafta sonu bonusu + çarpanlı saatlerle ≈ 600€ seviyesine çıkabilir",
          },
          cardB: {
            title: "Aylık net (örnek)",
            line: "Yaklaşık 2.400€ (örnek: günlük ~12 saat çalışma varsayımı)",
          },
          btn: "Bana göre kazanç planı çıkar",
        },
        warning:
          "Uyarı: Rakamlar bilgilendirme amaçlıdır. Kazanç; bölge, saat, yoğunluk, bonus şartları, performans ve platform politikalarına göre değişir.",
      },
      packagesPreview: {
        title: "Paketler",
        desc:
          "En çok tercih edilen seçeneklerden (en uygun 2 paket) — detaylar ve kapsam için paketler sayfasına geçebilirsin.",
        p3: {
          title: "Paket 3",
          price: "450€",
          desc: "Uygun fiyatlı temel paket.",
          items: [
            "Avukatlık ücretleri",
            "Şirket açılışı",
            "Oturum başvurusu",
            "Banka hesap açılışları",
            "Havaalanı karşılama",
          ],
        },
        p2: {
          title: "Paket 2",
          price: "700€",
          desc: "Şirket + oturum odaklı.",
          items: [
            "Avukatlık ücretleri",
            "Şirket açılışı",
            "Oturum başvurusu",
            "Yasal harçlar",
          ],
        },
        btnGo: "Paketlere Git",
        btnOffer: "WhatsApp’tan Teklif Al",
        note:
          "Not: Kapsam ve resmi ücretler dosyaya göre değişebilir. En doğru teklif için WhatsApp’tan kısa bilgi alıyoruz.",
      },
      offer: {
        title: "Teklif al",
        desc: "Fiyatlar dosyaya göre değişir. En doğru teklif için WhatsApp’tan kısa bilgi paylaşman yeterli.",
        btnOffer: "WhatsApp’tan Teklif Al",
        btnContact: "İletişim Sayfası",
      },
    },

    // ✅ Hizmetler sayfası (TR)
    services: {
      pageTitle: "Hizmetler",
      subtitle: "Belgrad odaklı uçtan uca destek.",
      metaDescription:
        "Belgrad kurye danışmanlığı hizmetleri: şirket, oturum, işe başlatma, konaklama, araç, banka.",
      items: [
        {
          t: "Şirket Kuruluşu",
          d: "Belgrad’da şirket açılış sürecini planlar, doğru adımlarla ilerlersin.",
        },
        {
          t: "Oturum Başvurusu",
          d: "Başvuru hazırlığı, randevu planı ve süreç takibi.",
        },
        {
          t: "Glovo & Wolt Hesap Açılışı",
          d: "Hesap açılışı ve işe başlangıç adımları için yönlendirme.",
        },
        {
          t: "Araç Kiralama",
          d: "Bisiklet/motor/araba seçeneklerinden birisini bütçene ve hedeflerine göre kiralarız.",
        },
        { t: "Konaklama", d: "Hostel/ev seçenekleri ve ilk gün planlaması." },
        {
          t: "Banka Hesabı",
          d: "Kişisel/şirket hesabı için gerekli adımların netleştirilmesi.",
        },
      ],
    },

    // ✅ İletişim sayfası (TR) - nested şema
    contact: {
      pageTitle: "İletişim",
      metaDescription:
        "Belgrad kurye danışmanlığı için WhatsApp, Instagram ve TikTok üzerinden iletişime geçin.",
      heading: "İletişim",
      intro:
        "En hızlı iletişim WhatsApp üzerinden. Sosyal medya hesaplarımızdan da bize ulaşabilirsin.",
      cards: {
        offer: {
          title: "Teklif almak için",
          desc: "Araç tercihini (bisiklet/motor/araba) ve ne zaman gelebileceğini yaz.",
          btn: "WhatsApp’tan Teklif Al",
        },
        docs: {
          title: "Evrak listesi",
          desc: "Gerekli evrak listesini iste, sana hızlıca gönderelim.",
          btn: "Evrak Listesi İste",
        },
        eligibility: {
          title: "Uygunluk kontrolü",
          desc: "Kısa sorularla uygunluk ve yol haritası çıkaralım.",
          btn: "Uygunluk Kontrolü",
        },
      },
      note: "Not: Bu site bilgilendirme amaçlıdır; resmî kurum değildir.",
    },

    // ✅ Paketler sayfası (TR)
    packages: {
      pageTitle: "Paketler",
      metaDescription:
        "Belgrad kurye danışmanlığı paketleri: şirket, oturum, Glovo/Wolt, konaklama ve araç destek seçenekleri.",
      lead:
        "İhtiyacına göre en uygun paketi seç. Detayları WhatsApp üzerinden netleştirip yol haritasını çıkaralım.",
      priceNote: "Detaylar dosyaya göre değişebilir.",
      labels: {
        included: "Dahil olanlar",
        notes: "Notlar",
        info: "Bilgi",
      },
      buttons: {
        askEligibility: "WhatsApp’tan Uygunluk Sor",
        contact: "İletişim",
        selectPackage: "Bu Paketi Seç (WhatsApp)",
        viewProcess: "Süreç Nasıl İşliyor?",
      },
      waText: {
        packageInterest:
          "Merhaba, {city} kurye danışmanlığı için {title} ile ilgileniyorum. Uygunluk ve gerekli adımlar hakkında bilgi almak istiyorum.",
      },
      importantNote: {
        title: "Önemli Not",
        desc:
          "Bu paketler bilgilendirme amaçlıdır. Zaman planlaması için WhatsApp üzerinden kısa bilgi paylaşman yeterli.",
      },
      items: [
        {
          id: "paket-1",
          title: "Paket 1 (Full + Konaklama + Araç)",
          price: "1250€ (dahil)",
          highlight: "En kapsamlı paket",
          included: [
            "1 ay ücretsiz konaklama",
            "1 ay ücretsiz araç",
            "Şirket açılışı ve oturum başvurusu işlemleri",
            "Avukatlık ücreti",
            "Glovo ve Wolt şahsi hesap açılışı",
            "Banka hesabı açılışı",
            "Havaalanı karşılama",
            "Tüm yasal harçlar",
          ],
          notes: [
            "Şirket açılış harcı: 2.000 dinar",
            "Oturum başvuru harcı: 23.000 dinar",
            "Diploma çeviri ücreti: 3.000 dinar",
            "(Bu kalemler dahildir.)",
          ],
        },
        {
          id: "paket-2",
          title: "Paket 2 (Yasal Süreç Temel)",
          price: "700€ (dahil)",
          included: [
            "Avukatlık ücretleri",
            "Şirket açılışı",
            "Oturum başvurusu",
            "Yasal harçlar",
            "Banka hesap açılışları",
            "Glovo ve Wolt hesap aktivasyonları",
          ],
          notes: [
            "Şirket açılış harcı: 2.000 dinar",
            "Oturum başvuru harcı: 23.000 dinar",
            "Diploma çeviri ücreti: 3.000 dinar",
          ],
        },
        {
          id: "paket-3",
          title: "Paket 3 (Temel + Banka + Karşılama)",
          price: "450€ (dahil)",
          included: [
            "Avukatlık ücretleri",
            "Şirket açılışı",
            "Oturum başvurusu",
            "Banka hesap açılışları",
            "Havaalanı karşılama",
          ],
          notes: [
            "Şirket açılış harcı: 2.000 dinar",
            "Oturum başvuru harcı: 23.000 dinar",
            "Diploma çeviri ücreti: 3.000 dinar",
            "(Bu kalemler dahil değildir.)",
          ],
        },
        {
          id: "paket-4",
          title: "Paket 4 (Geniş + Glovo/Wolt + Konaklama Desteği)",
          price: "750€ (dahil)",
          highlight: "Popüler seçim",
          included: [
            "Şirket açılışı",
            "Oturum başvurusu",
            "Havaalanı karşılama",
            "Avukatlık ücreti",
            "Yasal harçlar",
            "Banka hesabı açılışı",
            "Glovo ve Wolt şahsi hesap açılışı",
            "Ev bulma ve hostel bulma desteği",
          ],
          disclaimer: "Diploma tercüme ücreti size aittir (3.000 dinar).",
        },
        {
          id: "paket-5",
          title: "Paket 5 (Araç + SIM + Glovo/Wolt)",
          price: "800€ (dahil)",
          included: [
            "Havaalanı karşılama",
            "Şirket açılışı",
            "Oturum başvurusu",
            "Glovo ve Wolt şahsi hesap açılışı",
            "Banka hesabı açılışı",
            "Ücretsiz SIM kart",
            "1 ay ücretsiz araba",
          ],
          disclaimer:
            "Şirket açılış harcı, diploma tercüme ücreti tarafımıza aittir. Oturum başvuru harcı size aittir.",
        },
      ],
    },

    // ✅ Süreç sayfası (TR)
    process: {
      pageTitle: "Süreç",
      metaDescription:
        "Türkiye’den Belgrad’da kurye olarak başlama süreci: WhatsApp ön değerlendirme → evrak → şirket → banka → adres kaydı (Bela Karton) → oturum başvurusu → Glovo/Wolt hesabı → işe başlangıç.",
      lead:
        "Sırbistan’da şirket kurarak oturum alma ve kurye olarak çalışma sürecini adım adım yönetiyoruz. Süreç dosyana ve resmi yoğunluğa göre değişebilir; en doğru planı WhatsApp üzerinden çıkarıyoruz.",
      waText: {
        docs: "Merhaba, Belgrad kurye için gerekli evrak listesini paylaşır mısınız?",
      },
      buttons: {
        startWhatsapp: "WhatsApp’tan Başla",
        askDocs: "Evrak Listesi İste",
        viewPackages: "Paketleri Gör",
      },
      flow: {
        title: "Genel akış",
        desc:
          "Aşağıdaki adımlar çoğu dosyada aynı sırayla ilerler. Bazı adımlar, durumuna göre eklenebilir veya farklılaşabilir.",
      },
      stepLabel: "Adım",
      steps: [
        {
          t: "WhatsApp üzerinden iletişim ve evrak listesi",
          d: "Bize yazdığında kısa bir ön değerlendirme yaparız ve durumuna göre gerekli evrak listesini paylaşırız.",
        },
        {
          t: "Başlangıç evrakları ile sürecin başlatılması",
          d: "Mezuniyet belgesi, pasaport ve avukata verilecek vekâlet ile süreci başlatırız. Mezuniyet belgesinin tercümesi tamamlandıktan sonra şirket kuruluş adımlarına geçilir.",
        },
        {
          t: "Şirketin aktif hale gelmesi",
          d: "Mezuniyet belgesi tercümesinden sonra şirketiniz genellikle yaklaşık 1 hafta içinde aktif hale gelir (resmi yoğunluğa göre değişebilir).",
        },
        {
          t: "Banka hesabı açılışları",
          d: "Şirket açıldıktan sonra sizinle birlikte şirket evraklarıyla banka hesabı açılış işlemlerini tamamlarız.",
        },
        {
          t: "Adres kaydı ve “Bela Karton” (beyaz kâğıt)",
          d: "Oturum başvurusu için kiraladığınız evin sahibiyle birlikte karakola gidip adres kaydını yaptırırız ve “Bela Karton” belgesini alırız.",
        },
        {
          t: "Oturum başvurusu (avukat ile)",
          d: "Bela Karton ve şirket evraklarınızla, avukatlarımız aracılığıyla oturum başvuru sürecini başlatırız.",
        },
        {
          t: "Tax/harç ödemesi ve sisteme yükleme",
          d: "Başvurudan sonra ödeme için Tax/harç tutarı çıkar. İsterseniz bankanızdan, isterseniz yönlendirdiğimiz menjačnica üzerinden ödeyip sisteme yükleriz.",
        },
        {
          t: "Başvuru evrakının e-posta ile gelmesi",
          d: "Ödeme sisteme yüklendikten sonra oturum başvuru evrağınız e-posta adresinize gelir. Süreci şeffaf şekilde birlikte takip ederiz.",
        },
        {
          t: "Glovo/Wolt hesabı ve işe başlangıç",
          d: "İsterseniz acentemiz bünyesinde şahsi (bireysel) adınıza platform hesabı açılışı yapılır. Araç/konaklama planı ve çalışma düzeni birlikte netleştirilir.",
        },
      ],
      cta: {
        title: "Hazırsan başlayalım",
        desc:
          "2 dakikalık kısa bilgi ile uygunluğunu kontrol edelim, sana net bir yol haritası çıkaralım.",
        btnWhatsapp: "WhatsApp’tan Yaz",
        btnFaq: "SSS’ye Git",
        btnContact: "İletişim",
      },
    },
  },

  az: {
    nav: {
      services: "Xidmətlər",
      process: "Proses",
      faq: "Tez-tez verilən suallar",
      blog: "Bloq",
      contact: "Əlaqə",
      packages: "Paketlər",
    },
    cta: {
      getOffer: "Təklif al",
      offerShort: "Təklif",
      whatsapp: "WhatsApp",
    },

    // ✅ Sosyal label'lar (ContactLinks vb. için)
    social: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      tiktok: "TikTok",
    },

    footer: {
      kvkk: "Məxfilik",
      disclaimer:
        "Məlumat xarakterlidir. Rəsmi qurum deyil; proses və nəticələr işə görə dəyişə bilər.",
    },

    // ✅ Paketler sayfası (AZ)
    packages: {
      pageTitle: "Paketlər",
      metaDescription:
        "Belqrad kuryer məsləhət paketləri: şirkət, oturum, Glovo/Wolt, yaşayış və nəqliyyat dəstək seçimləri.",
      lead:
        "Ehtiyacına uyğun paketi seç. Detalları WhatsApp-da dəqiqləşdirək və yol xəritəsini çıxaraq.",
      priceNote: "Detallar işə görə dəyişə bilər.",
      labels: {
        included: "Daxil olanlar",
        notes: "Qeydlər",
        info: "Məlumat",
      },
      buttons: {
        askEligibility: "WhatsApp-da uyğunluğu soruş",
        contact: "Əlaqə",
        selectPackage: "Bu paketi seç (WhatsApp)",
        viewProcess: "Proses necə gedir?",
      },
      waText: {
        packageInterest:
          "Salam, {city} kuryer məsləhəti üçün {title} paketi ilə maraqlanıram. Uyğunluq və lazım olan addımlar barədə məlumat almaq istəyirəm.",
      },
      importantNote: {
        title: "Vacib qeyd",
        desc:
          "Bu paketlər məlumat xarakterlidir. Zaman planlaması üçün WhatsApp-da qısa məlumat paylaşmağın kifayətdir.",
      },
      items: [
        {
          id: "paket-1",
          title: "Paket 1 (Tam + Yaşayış + Nəqliyyat)",
          price: "1250€ (daxildir)",
          highlight: "Ən geniş paket",
          included: [
            "1 ay pulsuz yaşayış",
            "1 ay pulsuz nəqliyyat",
            "Şirkət açılışı və oturum müraciəti prosesləri",
            "Hüquq (vəkillik) xidməti",
            "Glovo və Wolt şəxsi hesab açılışı",
            "Bank hesabının açılışı",
            "Hava limanında qarşılama",
            "Bütün rəsmi rüsumlar",
          ],
          notes: [
            "Şirkət açılış rüsumu: 2.000 dinar",
            "Oturum müraciət rüsumu: 23.000 dinar",
            "Diplom tərcümə haqqı: 3.000 dinar",
            "(Bu maddələr daxildir.)",
          ],
        },
        {
          id: "paket-2",
          title: "Paket 2 (Hüquqi proses – əsas)",
          price: "700€ (daxildir)",
          included: [
            "Hüquq (vəkillik) xərcləri",
            "Şirkət açılışı",
            "Oturum müraciəti",
            "Rəsmi rüsumlar",
            "Bank hesablarının açılışı",
            "Glovo və Wolt hesab aktivləşdirmələri",
          ],
          notes: [
            "Şirkət açılış rüsumu: 2.000 dinar",
            "Oturum müraciət rüsumu: 23.000 dinar",
            "Diplom tərcümə haqqı: 3.000 dinar",
          ],
        },
        {
          id: "paket-3",
          title: "Paket 3 (Əsas + Bank + Qarşılama)",
          price: "450€ (daxildir)",
          included: [
            "Hüquq (vəkillik) xərcləri",
            "Şirkət açılışı",
            "Oturum müraciəti",
            "Bank hesablarının açılışı",
            "Hava limanında qarşılama",
          ],
          notes: [
            "Şirkət açılış rüsumu: 2.000 dinar",
            "Oturum müraciət rüsumu: 23.000 dinar",
            "Diplom tərcümə haqqı: 3.000 dinar",
            "(Bu maddələr daxil deyil.)",
          ],
        },
        {
          id: "paket-4",
          title: "Paket 4 (Geniş + Glovo/Wolt + Yaşayış dəstəyi)",
          price: "750€ (daxildir)",
          highlight: "Populyar seçim",
          included: [
            "Şirkət açılışı",
            "Oturum müraciəti",
            "Hava limanında qarşılama",
            "Hüquq (vəkillik) xidməti",
            "Rəsmi rüsumlar",
            "Bank hesabının açılışı",
            "Glovo və Wolt şəxsi hesab açılışı",
            "Ev və hostel tapmaqda dəstək",
          ],
          disclaimer: "Diplom tərcümə haqqı sizə aiddir (3.000 dinar).",
        },
        {
          id: "paket-5",
          title: "Paket 5 (Nəqliyyat + SIM + Glovo/Wolt)",
          price: "800€ (daxildir)",
          included: [
            "Hava limanında qarşılama",
            "Şirkət açılışı",
            "Oturum müraciəti",
            "Glovo və Wolt şəxsi hesab açılışı",
            "Bank hesabının açılışı",
            "Pulsuz SIM kart",
            "1 ay pulsuz avtomobil",
          ],
          disclaimer:
            "Şirkət açılış rüsumu və diplom tərcümə haqqı bizə aiddir. Oturum müraciət rüsumu sizə aiddir.",
        },
      ],
    },

    // ✅ SSS metinleri (AZ)
    faq: {
      pageTitle: "Tez-tez verilən suallar | Yeni Hayat Belgrad",
      metaDescription:
        "Belqrad kuryer məsləhəti barədə tez-tez verilən suallar və aydın cavablar.",
      heading: "Tez-tez verilən suallar",
      intro:
        "Ən aktual məlumat işinə görə dəyişə bilər. Tez dəqiqləşdirmək üçün WhatsApp-da qısa mesaj yaza bilərsən.",
      topicsTitle: "Mövzu başlıqları",
      buttons: {
        askEligibility: "WhatsApp-da uyğunluğu soruş",
        getOffer: "Təklif al",
        requestDocs: "Sənəd siyahısını istə",
      },
      waText: {
        general:
          "Salam, Belqrad kuryer məsləhəti üçün yazıram. Uyğunluq yoxlaması etmək istəyirəm.",
        offer: "Salam, mənə uyğun təklif almaq istəyirəm. Qısa məlumat paylaşacağam.",
        documents:
          "Salam, Belqrad kuryer üçün lazım olan sənəd siyahısını paylaşa bilərsiniz?",
      },
      search: {
        label: "FAQ daxilində axtar",
        help:
          "Sual və ya cavab daxilində axtara bilərsən (məs: “oturum”, “wolt”, “avtomobil”).",
        placeholder: "Axtarmaq istədiyin söz…",
        clear: "Təmizlə",
        noResults: "Nəticə tapılmadı.",
        resultsFound: "{n} nəticə tapıldı.",
      },
      quickNote: {
        title: "Qısa qeyd",
        desc:
          "Proses və xərclər dövri olaraq dəyişə bilər. Dəqiq məlumat üçün WhatsApp-da qısa ön qiymətləndirmə edirik.",
      },
      items: [
        {
          cat: "Şirkət və Oturum",
          q: "Şirkət açılışı nə qədər çəkir?",
          a: "Müraciətdən sonra şirkət açılışı adətən 5–8 iş günü ərzində tamamlanır. Müddət rəsmi sıxlıq və işin vəziyyətinə görə dəyişə bilər.",
        },
        {
          cat: "Şirkət və Oturum",
          q: "Şirkət açıldıqdan sonra oturum müraciəti nə vaxt edilir?",
          a: "Şirkət açılışından təxminən 1 gün sonra oturum müraciəti edilir. Sənədlər hazırdırsa proses daha sürətli ola bilər.",
        },
        {
          cat: "Şirkət və Oturum",
          q: "Oturum kartı (nəticə) nə qədər müddətdə çıxır?",
          a: "İş yükünə görə oturum nəticəsi adətən 5–6 həftə ərzində çıxır. Bu müddət rəsmi sıxlıq və müraciət dövrünə görə dəyişə bilər.",
        },
        {
          cat: "Şirkət və Oturum",
          q: "Oturum kartını aldıqdan sonra sığorta prosesi necə olur?",
          a: "Oturum kartını aldıqdan sonra səni notariusa aparıb təxminən 50€ qarşılığında sığorta girişini edirik. Aylıq sığorta ödənişi təxminən 9.000 dinardır.",
        },

        {
          cat: "Şirkət növləri (PR / Limited)",
          q: "PR şirkətin aylıq sabit xərcləri nədir?",
          a: "PR şirkət üçün aylıq sabit xərclər ümumən təxminən 220€ (vergi və s.) + mühasibat haqqıdır. Mühasibat haqları minimum 50€-dan başlayıb iş yükünə görə arta bilər.",
        },
        {
          cat: "Şirkət növləri (PR / Limited)",
          q: "PR şirkətin ən böyük üstünlüyü nədir?",
          a: "PR şirkətin üstünlüklərindən biri, müəyyən dövriyyə hədləri daxilində KDV və gəlir vergisi baxımından güzəşt/üstünlük verə bilməsidir. Dəqiq durum işə görə dəyişə bilər.",
        },
        {
          cat: "Şirkət növləri (PR / Limited)",
          q: "PR şirkətdə vergi güzəşti hədləri nədir?",
          a: "Ümumi məlumat: illik 55.000€-a qədər müəyyən vergi üstünlükləri və aylıq 4.200€-a qədər fakturalaşdırmada KDV/gəlir vergisi üstünlüyü ola bilər. Detallar işə görə dəyişə bilər.",
        },
        {
          cat: "Şirkət növləri (PR / Limited)",
          q: "Limited şirkət açma xərci nədir?",
          a: "Limited şirkət xərcləri işə görə dəyişdiyi üçün WhatsApp-da qısa ön qiymətləndirmə ilə dəqiq məlumat veririk.",
        },

        {
          cat: "Glovo / Wolt hesabları",
          q: "Glovo və ya Wolt hesabları kimin adına açılır?",
          a: "Glovo/Wolt hesablarını sənin şəxsi adın və pasport nömrən üzərinə açırıq.",
        },
        {
          cat: "Glovo / Wolt hesabları",
          q: "Ödənişlər nə qədər tez-tez edilir?",
          a: "Wolt ödənişləri adətən 15 gündə 1 dəfə, Glovo ödənişləri isə adətən həftəlik edilir. Mövsümi dəyişikliklər ola bilər.",
        },
        {
          cat: "Glovo / Wolt hesabları",
          q: "Agentlik kəsintiləri nədir?",
          a: "Ümumi məlumat: agentliyin aylıq kəsintisi 12.000 dinardır. Wolt-da 15 gündə 1 dəfə 6.000 dinar, Glovo-da həftədə 1 dəfə 3.000 dinar kəsinti olur.",
        },

        {
          cat: "Nəqliyyat və sahədə dəstək",
          q: "Motor / e-velosiped / avtomobil: hansıyla başlamalıyam?",
          a: "Büdcən, iş rejimin və hədəflərinə görə birlikdə qərar veririk. Belqrad şərtlərinə uyğun ən məntiqli başlanğıcı planlayırıq.",
        },
        {
          cat: "Nəqliyyat və sahədə dəstək",
          q: "Nəqliyyatların vəziyyəti necədir? Yolda qalsam nə olacaq?",
          a: "Nəqliyyatlarımız təmiz və baxımlıdır. Yolda qalma halında bizə yazmağın kifayətdir; yaxın dəstəyi təmin edirik.",
        },
        {
          cat: "Nəqliyyat və sahədə dəstək",
          q: "Nəqliyyat icarəsi nə qədərdir?",
          a: "Ümumi məlumat: avtomobil 300–350€, motor 200–250€, elektrikli velosiped 150–190€ aralığındadır. Stoka və şərtlərə görə dəyişə bilər.",
        },

        {
          cat: "Yaşayış və gəlir",
          q: "Qazancımı Türkiyəyə necə göndərə bilərəm?",
          a: "Qazancını Türkiyəyə Western Union ilə göndərə bilərsən. Bankçılıq vəziyyətinə görə alternativləri də danışa bilərik.",
        },
        {
          cat: "Yaşayış və gəlir",
          q: "Aylıq market (mətbəx) xərci nə qədər olur?",
          a: "Ümumi nümunə kimi, 200€-luq mətbəx alış-verişi bir çox insan üçün təxminən 1 ay yetə bilir. Bu, şəxsi istifadə vərdişinə görə dəyişir.",
        },

        {
          cat: "Ödəniş və şəffaflıq",
          q: "Əldən ödəniş varmı?",
          a: "Xeyr. Agentlik daxilində ödənişlər heç bir şəkildə əldən edilmir.",
        },
        {
          cat: "Ödəniş və şəffaflıq",
          q: "Ödənişi necə ala bilərəm?",
          a: "İstəyənlər faktura kəsərək ödəniş ala bilər. Faktura istəməyənlər isə Glovo/Wolt ID nömrələri və pasportları ilə yönləndirdiyimiz nöqtələrdən ödənişlərini ala bilər.",
        },
      ],
    },

    // ✅ Ana sayfa metinleri (AZ)
    home: {
      waText: {
        general:
          "Salam, Belqrad kuryer məsləhəti barədə məlumat almaq istəyirəm.",
        offer: "Salam, mənə uyğun təklif almaq istəyirəm. Qısa məlumat paylaşacağam.",
      },
      hero: {
        badge: "Belqrad yönümlü • WhatsApp ilə sürətli əlaqə",
        title: "Belqrad’da kuryer kimi başlamaq üçün uçdan-uca məsləhət",
        desc:
          "Şirkətin qurulması, oturum müraciəti, platform hesabı, nəqliyyat və yaşayış dəstəyi. Bütün proses WhatsApp üzərindən şəffaf şəkildə idarə olunur.",
        btnWhatsapp: "WhatsApp-dan dərhal yaz",
        btnProcess: "Proses necə gedir?",
        cards: [
          { t: "Sürətli ön qiymətləndirmə", d: "2 dəqiqədə uyğunluq yoxlanışı." },
          { t: "Belqrad’da yerli komanda", d: "Sahədə dəstək və yönləndirmə." },
          { t: "Ucdan-uca plan", d: "Şirkət → oturum → işə başlama." },
        ],
      },
      faqBox: {
        title: "Ən çox verilən suallar",
        items: [
          "Şirkət açılışı necə olur?",
          "Oturum prosesi nə qədər çəkir?",
          "Motor / velosiped / avtomobil: hansısı daha məntiqlidir?",
          "Yaşayış və bank hesabı dəstəyi varmı?",
        ],
        btn: "SSS-ə keç",
      },
      services: {
        title: "Xidmətlər",
        items: [
          {
            t: "Şirkətin qurulması",
            d: "Belqrad’da şirkət açılışı prosesinin planlanması və koordinasiyası.",
          },
          { t: "Oturum müraciəti", d: "Müraciətin hazırlanması və prosesin izlənməsi." },
          {
            t: "Glovo & Wolt hesab açılışı",
            d: "Şəxsi hesabın açılması və işə başlama planı.",
          },
          { t: "Yaşayış", d: "Hostel/ev seçimləri, ilk gün planı." },
          {
            t: "Nəqliyyat dəstəyi",
            d: "Velosiped/motor/avtomobil variantlarının müqayisəsi.",
          },
          {
            t: "Bank hesabı",
            d: "Şəxsi/şirkət hesabı üçün addım-addım yönləndirmə.",
          },
        ],
        btnAll: "Bütün xidmətlər",
      },
      activation: {
        title: "Aktivasiya və ödəniş qaydası",
        desc: "Ən çox soruşulan iki mövzu: Glovo/Wolt aktivasiya təqvimi və ödənişlər/kəsintilər.",
        card1Title: "Glovo / Wolt aktivasiya təqvimi",
        card1Items: [
          {
            a: "Wolt:",
            b: "Bazar → bazar ertəsinə keçən gecəyə qədər göndərilərsə, adətən bazar ertəsi aktiv edilir.",
          },
          {
            a: "Glovo:",
            b: "Müraciətlər adətən çərşənbəyədək aktiv edilir.",
          },
        ],
        card1Note:
          "Qeyd: Aktivasiya günləri mövsümi sıxlığa görə dəyişə bilər. Ən aktual təqvimi WhatsApp-dan dəqiqləşdiririk.",
        card2Title: "Ödənişlər və kəsintilər",
        card2Items: [
          "Agentliyin aylıq kəsintisi: 12.000 dinar",
          "Glovo ödənişləri: həftəlik",
          "Wolt ödənişləri: 15 gündə 1 dəfə",
          "Glovo agentlik kəsintisi: həftəlik 3.000 dinar",
          "Wolt agentlik kəsintisi: 15 gündə 1 dəfə, 6.000 dinar",
        ],
        card2Note:
          "Qeyd: Kəsintilər/ödəniş dövrləri platform şərtlərinə görə dəyişə bilər.",
        btnDetail: "Proses səhifəsində detallı",
        btnAsk: "WhatsApp-dan soruş",
      },
      earnings: {
        title: "Gəlir nümunələri",
        desc:
          "Aşağıdakı rəqəmlər nümunə ssenarilərdir. İş saatı, bölgə sıxlığı, performans, bonus şərtləri və mövsümi amillərə görə dəyişə bilər. Ən aktual planı WhatsApp-dan dəqiqləşdiririk.",
        wolt: {
          title: "Wolt (Avtomobil / Motor)",
          badge: "e-bike bonus yoxdur",
          bullets: [
            "Gündəlik 30 paket → 6 gündə 180 paket bonus hədəfi",
            "Həftəlik bonus: 18.000 dinar",
            "Minimum paket haqqı: 170 dinar",
            "Cash paketlər: 100 paketdən sonra açılır və qazanc 2x ola bilər",
            "Orta paket: 230 dinar",
          ],
          cardA: {
            title: "6 günlük gəlir nümunəsi",
            line1: "30 paket ≈ 7.000 dinar/gün → 6 gündə ≈ 41.400 dinar",
            line2: "Bonuslar əlavə olunanda ≈ 61.400 dinar (nümunə: ~530€)",
          },
          cardB: {
            title: "Aylıq net (nümunə)",
            line: "Təxminən 2.200€ (minimum paket + bəxşiş yoxdur fərziyyəsi)",
          },
          btn: "Mənə uyğun gəlir planı hazırla",
        },
        glovo: {
          title: "Glovo (Avtomobil / Motor / e-bike)",
          badge: "Cash paket dərhal",
          bullets: [
            "Bonus hədəfi: Avtomobil/Motor 205 paket",
            "Velosiped bonus hədəfi: 215 paket",
            "Sabit minimum haqq: yoxdur",
            "Cash paketlər: elə əvvəldən",
            "Orta paket: 240 dinar",
            "Həftəlik bonus: 20.000 dinar",
          ],
          cardA: {
            title: "6 günlük gəlir nümunəsi",
            line1: "34 paket ≈ 8.200 dinar/gün → 6 gündə ≈ 49.000 dinar",
            line2:
              "Həftəsonu bonusu + çarpanlı saatlarla ≈ 600€ səviyyəsinə çıxa bilər",
          },
          cardB: {
            title: "Aylıq net (nümunə)",
            line: "Təxminən 2.400€ (nümunə: gündə ~12 saat işləmə fərziyyəsi)",
          },
          btn: "Mənə uyğun gəlir planı hazırla",
        },
        warning:
          "Xəbərdarlıq: Rəqəmlər məlumat xarakterlidir. Gəlir; bölgə, saat, sıxlıq, bonus şərtləri, performans və platform siyasətlərinə görə dəyişir.",
      },
      packagesPreview: {
        title: "Paketlər",
        desc:
          "Ən çox seçilən variantlardan (ən uyğun 2 paket) — detallı məzmun üçün paketlər səhifəsinə keçə bilərsən.",
        p3: {
          title: "Paket 3",
          price: "450€",
          desc: "Uyğun qiymətli əsas paket.",
          items: [
            "Hüquq xidmətləri",
            "Şirkət açılışı",
            "Oturum müraciəti",
            "Bank hesabının açılması",
            "Hava limanında qarşılama",
          ],
        },
        p2: {
          title: "Paket 2",
          price: "700€",
          desc: "Şirkət + oturum yönümlü.",
          items: [
            "Hüquq xidmətləri",
            "Şirkət açılışı",
            "Oturum müraciəti",
            "Rəsmi rüsumlar",
          ],
        },
        btnGo: "Paketlərə keç",
        btnOffer: "WhatsApp-dan təklif al",
        note:
          "Qeyd: Məzmun və rəsmi ödənişlər işə görə dəyişə bilər. Dəqiq təklif üçün WhatsApp-da qısa məlumat alırıq.",
      },
      offer: {
        title: "Təklif al",
        desc: "Qiymətlər işə görə dəyişir. Dəqiq təklif üçün WhatsApp-da qısa məlumat paylaşmağın kifayətdir.",
        btnOffer: "WhatsApp-dan təklif al",
        btnContact: "Əlaqə səhifəsi",
      },
    },

    // ✅ Hizmetler sayfası (AZ)
    services: {
      pageTitle: "Xidmətlər",
      subtitle: "Belqrad yönümlü uçdan-uca dəstək.",
      metaDescription:
        "Belqrad kuryer məsləhət xidməti: şirkət, oturum, işə başlama, yaşayış, nəqliyyat, bank.",
      items: [
        {
          t: "Şirkətin qurulması",
          d: "Belqrad’da şirkət açılışı prosesini planlayır, doğru addımlarla irəliləyirsən.",
        },
        {
          t: "Oturum müraciəti",
          d: "Müraciətin hazırlanması, görüş planı və prosesin izlənməsi.",
        },
        {
          t: "Glovo & Wolt hesab açılışı",
          d: "Hesabın açılması və işə başlama addımları üçün yönləndirmə.",
        },
        {
          t: "Nəqliyyat icarəsi",
          d: "Velosiped/motor/avtomobil seçimlərindən büdcənə və hədəflərinə uyğun olanı icarəyə götürməyə kömək edirik.",
        },
        { t: "Yaşayış", d: "Hostel/ev seçimləri və ilk gün planlaması." },
        {
          t: "Bank hesabı",
          d: "Şəxsi/şirkət hesabı üçün lazım olan addımların dəqiqləşdirilməsi.",
        },
      ],
    },

    // ✅ İletişim sayfası (AZ) - nested şema
    contact: {
      pageTitle: "Əlaqə",
      metaDescription:
        "Belqrad kuryer məsləhəti üçün WhatsApp, Instagram və TikTok üzərindən bizimlə əlaqə saxlayın.",
      heading: "Əlaqə",
      intro:
        "Ən sürətli əlaqə WhatsApp-dır. Sosial media hesablarımızdan da yaza bilərsən.",
      cards: {
        offer: {
          title: "Təklif almaq üçün",
          desc:
            "Nəqliyyat seçimini (velosiped/motor/avtomobil) və nə vaxt gələ biləcəyini yaz.",
          btn: "WhatsApp-dan təklif al",
        },
        docs: {
          title: "Sənəd siyahısı",
          desc: "Lazım olan sənədlərin siyahısını istə, tez göndərək.",
          btn: "Sənəd siyahısı istə",
        },
        eligibility: {
          title: "Uyğunluq yoxlaması",
          desc: "Qısa suallarla uyğunluğu və yol xəritəsini çıxaraq.",
          btn: "Uyğunluq yoxlaması",
        },
      },
      note: "Qeyd: Bu sayt məlumat xarakterlidir; rəsmi qurum deyil.",
    },

    // ✅ Proses sayfası (AZ)
    process: {
      pageTitle: "Proses",
      metaDescription:
        "Türkiyədən Belqradda kuryer kimi başlama prosesi: WhatsApp ilkin qiymətləndirmə → sənədlər → şirkət → bank → ünvan qeydiyyatı (Bela Karton) → oturum müraciəti → Glovo/Wolt hesabı → işə başlama.",
      lead:
        "Serbiyada şirkət quraraq oturum alma və kuryer kimi çalışma prosesini addım-addım idarə edirik. Proses işinə və rəsmi sıxlığa görə dəyişə bilər; ən doğru planı WhatsApp üzərindən müəyyənləşdiririk.",
      waText: {
        docs: "Salam, Belqrad kuryer üçün lazım olan sənədlərin siyahısını paylaşa bilərsiniz?",
      },
      buttons: {
        startWhatsapp: "WhatsApp-dan başla",
        askDocs: "Sənəd siyahısı istə",
        viewPackages: "Paketlərə bax",
      },
      flow: {
        title: "Ümumi axın",
        desc:
          "Aşağıdakı addımlar əksər işlərdə eyni ardıcıllıqla gedir. Bəzi addımlar vəziyyətinə görə əlavə oluna və ya dəyişə bilər.",
      },
      stepLabel: "Addım",
      steps: [
        {
          t: "WhatsApp vasitəsilə əlaqə və sənəd siyahısı",
          d: "Yazdıqda qısa ilkin qiymətləndirmə edirik və vəziyyətinə uyğun sənəd siyahısını paylaşırıq.",
        },
        {
          t: "Başlanğıc sənədləri ilə prosesin başladılması",
          d: "Diplom sənədi, pasport və vəkilə veriləcək etibarnamə ilə prosesi başladırıq. Diplom tərcüməsi tamamlandıqdan sonra şirkət quruluş addımlarına keçilir.",
        },
        {
          t: "Şirkətin aktivləşməsi",
          d: "Diplom tərcüməsindən sonra şirkət adətən təxminən 1 həftə ərzində aktiv olur (rəsmi sıxlığa görə dəyişə bilər).",
        },
        {
          t: "Bank hesablarının açılması",
          d: "Şirkət açıldıqdan sonra şirkət sənədləri ilə birlikdə bank hesablarının açılışını tamamlayırıq.",
        },
        {
          t: "Ünvan qeydiyyatı və “Bela Karton”",
          d: "Oturum müraciəti üçün kirayə evin sahibi ilə polisə gedib ünvan qeydiyyatını edirik və “Bela Karton” sənədini alırıq.",
        },
        {
          t: "Oturum müraciəti (vəkil ilə)",
          d: "Bela Karton və şirkət sənədləri ilə vəkillərimiz vasitəsilə oturum müraciət prosesini başladırıq.",
        },
        {
          t: "Vergi/rüsum ödənişi və sistemə yükləmə",
          d: "Müraciətdən sonra vergi/rüsum məbləği çıxır. İstəsən bankdan, istəsən yönləndirdiyimiz menjačnica vasitəsilə ödəyib sistemə yükləyirik.",
        },
        {
          t: "Müraciət sənədinin e-poçtla gəlməsi",
          d: "Ödəniş sistemə yükləndikdən sonra oturum müraciət sənədi e-poçt ünvanına gəlir. Prosesi şəffaf şəkildə birlikdə izləyirik.",
        },
        {
          t: "Glovo/Wolt hesabı və işə başlama",
          d: "İstəsən agentliyimiz vasitəsilə şəxsi adınla platform hesabı açılır. Nəqliyyat/yaşayış planı və iş rejimi birlikdə dəqiqləşdirilir.",
        },
      ],
      cta: {
        title: "Hazırsansa başlayaq",
        desc:
          "2 dəqiqəlik qısa məlumatla uyğunluğunu yoxlayaq və sənə aydın yol xəritəsi çıxaraq.",
        btnWhatsapp: "WhatsApp-dan yaz",
        btnFaq: "SSS-ə keç",
        btnContact: "Əlaqə",
      },
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
