# Çınaraltı Yol — Interactive Mobile App Demo

> **İzlemekten yaşamaya.**

Çınaraltı Eğitim ve Kültür Merkezi için tasarlanmış konsept bir dijital öğrenme platformu prototipi.

## 🚀 Nasıl Çalıştırılır

1. `index.html` dosyasını tarayıcıda açın
2. İnternet bağlantısı gereklidir (Google Fonts + Lucide Icons CDN)
3. Kurulum veya build adımı gerekmez

## 📱 Ekranlar

| Ekran | Açıklama |
|-------|----------|
| **Splash** | Markalı açılış ekranı |
| **Onboarding** | 3 adımlı tanışma akışı (ilgi alanları + günlük hedef) |
| **Bugün** | Günlük görevler, ilerleme, seri, AI önerisi |
| **Keşfet** | İçerik keşfi, arama, kategoriler, derinleşme |
| **Yolculuk** | Yapılandırılmış öğrenme yolculukları |
| **Topluluk** | Etkinlikler, birlikte öğrenme hedefi |
| **Ben** | Profil, istatistikler, başarılar, kaydedilenler |
| **AI Rehber** | Simüle edilmiş sohbet asistanı |
| **Anlat Bana** | Simüle sesli anlatım özelliği |
| **Mini Test** | İnteraktif quiz sistemi |

## ✨ Demo Özellikleri

- **Tam interaktif**: Her buton çalışır, ilerleme güncellenir
- **LocalStorage**: Tüm veriler tarayıcıda saklanır
- **Mobil-öncelikli**: 390×844px tasarım hedefi
- **Masaüstü modu**: 600px üstü genişlikte telefon çerçevesi
- **Animasyonlar**: Sayfa geçişleri, ilerleme çubuğu, toast bildirimleri
- **Arama**: Gerçek zamanlı içerik araması
- **Quiz**: Anlık geri bildirimli test sistemi
- **AI Rehber**: Anahtar kelime tabanlı simüle sohbet
- **3 dakikalık demo**: Tam akış baştan sona test edilebilir

## 📊 Demo İçerik

- 20 video
- 10 podcast
- 10 makale/okuma
- 8 yolculuk
- 20 quiz sorusu
- 10 etkinlik
- 8 başarı

## 🔌 Gelecek API Entegrasyon Noktaları

| Bölüm | Entegrasyon |
|-------|-------------|
| AI Rehber | OpenAI / Gemini API ile gerçek sohbet |
| İçerikler | CMS veya backend API |
| Video | YouTube Data API / kendi video servisi |
| Anlat Bana | Web Speech API (gerçek ses tanıma) |
| Kimlik | Firebase Auth / OAuth |
| Bildirimler | Firebase Cloud Messaging |
| Etkinlikler | Gerçek etkinlik veritabanı |
| Topluluk | Gerçek zamanlı sayaçlar (Firebase Realtime DB) |

## 🛠 Teknoloji

- HTML5
- CSS3 (CSS Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript ES6+
- LocalStorage
- Lucide Icons (CDN)
- Google Fonts: Inter + Playfair Display (CDN)

## 📁 Dosya Yapısı

```
cinaralti-yol/
├── index.html      # Ana HTML dosyası
├── style.css       # Tasarım sistemi + tüm stiller
├── app.js          # Uygulama mantığı + veri + ekranlar
├── assets/
│   ├── logo.svg    # Ağaç logosu
│   └── avatar.svg  # Profil avatarı
└── README.md       # Bu dosya
```

## ⚠️ Not

Bu bir **demo prototipidir**. Tüm içerikler örnek amaçlıdır ve gerçek Çınaraltı içeriklerini temsil etmez.
Simüle edilen özellikler: AI sohbet, ses tanıma, bildirimler.
