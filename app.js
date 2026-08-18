/* ============================================
   ÇINARALTI YOL — APPLICATION
   Interactive Mobile App Demo
   ============================================ */

// =============================================
// SECTION 1: DEMO CONTENT DATA
// =============================================

const VIDEOS = [
  { id: 'v1', type: 'video', title: 'Gerçekten Bir Yaratıcı Var mı?', duration: '12 dk', category: 'İman', tags: ['iman', 'yaratıcı', 'allah'], desc: 'Kâinattaki mükemmel düzen ve yaratılış delilleri üzerinden iman konusunu ele alıyoruz.', thumbnail: '🌍' },
  { id: 'v2', type: 'video', title: 'Kaderi Nasıl Anlamalıyız?', duration: '15 dk', category: 'İman', tags: ['kader', 'iman', 'irade'], desc: 'Kader ile irade arasındaki dengeyi anlamak için temel bir sohbet.', thumbnail: '🔮' },
  { id: 'v3', type: 'video', title: 'Namaz Neden Bu Kadar Önemli?', duration: '10 dk', category: 'İbadet', tags: ['namaz', 'ibadet', 'günlük'], desc: 'Namazın hayatımızdaki yeri ve manevi önemi üzerine düşünceler.', thumbnail: '🕌' },
  { id: 'v4', type: 'video', title: 'Gençlik ve Nefis Mücadelesi', duration: '14 dk', category: 'Gençlik', tags: ['gençlik', 'nefis', 'mücadele'], desc: 'Gençlik döneminde nefisle mücadelenin yolları ve yöntemleri.', thumbnail: '💪' },
  { id: 'v5', type: 'video', title: 'Ölümden Neden Korkuyoruz?', duration: '11 dk', category: 'Ahiret', tags: ['ölüm', 'ahiret', 'korku'], desc: 'Ölüm korkusunun ötesine geçmek: İman perspektifinden bir bakış.', thumbnail: '🌅' },
  { id: 'v6', type: 'video', title: 'Ahirete İman Hayatımızı Nasıl Değiştirir?', duration: '13 dk', category: 'Ahiret', tags: ['ahiret', 'iman', 'hayat'], desc: 'Ahiret inancının günlük yaşamımıza ve kararlarımıza etkisi.', thumbnail: '✨' },
  { id: 'v7', type: 'video', title: 'Risale-i Nur\'a Nereden Başlamalı?', duration: '18 dk', category: 'Risale-i Nur', tags: ['risale', 'başlangıç', 'rehber'], desc: 'Risale-i Nur külliyatına yeni başlayanlar için kapsamlı bir rehber.', thumbnail: '📚' },
  { id: 'v8', type: 'video', title: 'Dua Neden Bazen Kabul Olmuyor Gibi Geliyor?', duration: '9 dk', category: 'İbadet', tags: ['dua', 'ibadet', 'sabır'], desc: 'Duanın kabul edilmesi meselesi ve sabır erdemi üzerine.', thumbnail: '🤲' },
  { id: 'v9', type: 'video', title: 'Şüphelerle Nasıl Baş Edilir?', duration: '16 dk', category: 'Şüpheler', tags: ['şüphe', 'iman', 'akıl'], desc: 'Modern çağın şüphelerine karşı iman ve akıl dengesini kurmak.', thumbnail: '🧠' },
  { id: 'v10', type: 'video', title: 'Evlilikte Huzurun Temeli', duration: '12 dk', category: 'Evlilik', tags: ['evlilik', 'aile', 'huzur'], desc: 'İslami perspektiften mutlu bir evliliğin temel taşları.', thumbnail: '💑' },
  { id: 'v11', type: 'video', title: 'Allah\'a İman ve Günlük Hayat', duration: '8 dk', category: 'İman', tags: ['iman', 'allah', 'günlük'], desc: 'İmanın günlük hayata nasıl yansıdığını keşfedin.', thumbnail: '🌿' },
  { id: 'v12', type: 'video', title: 'Kur\'an\'ı Anlamak İçin İlk Adımlar', duration: '14 dk', category: 'Kur\'an', tags: ['kuran', 'anlama', 'başlangıç'], desc: 'Kur\'an-ı Kerim\'i daha derin anlamak için temel yaklaşımlar.', thumbnail: '📖' },
  { id: 'v13', type: 'video', title: 'Sabır ve Şükür Dengesi', duration: '10 dk', category: 'İman', tags: ['sabır', 'şükür', 'iman'], desc: 'Hayatın zorluklarında sabır ve nimetlerinde şükür dengesi.', thumbnail: '⚖️' },
  { id: 'v14', type: 'video', title: 'Hz. Muhammed\'in Gençlere Tavsiyeleri', duration: '12 dk', category: 'Siyer', tags: ['siyer', 'gençlik', 'peygamber'], desc: 'Peygamber Efendimiz\'in gençlere yönelik öğütleri.', thumbnail: '🌟' },
  { id: 'v15', type: 'video', title: 'İslam\'da Aile Bağları', duration: '11 dk', category: 'Aile', tags: ['aile', 'bağ', 'sevgi'], desc: 'Aile içi ilişkilerin güçlendirilmesi üzerine İslami perspektif.', thumbnail: '🏡' },
  { id: 'v16', type: 'video', title: 'İmanın Altı Şartı — Genel Bakış', duration: '20 dk', category: 'İman', tags: ['iman', 'şartlar', 'temel'], desc: 'İmanın altı temel şartının kapsamlı bir değerlendirmesi.', thumbnail: '🔑' },
  { id: 'v17', type: 'video', title: 'Risale-i Nur\'dan Hayat Dersleri', duration: '15 dk', category: 'Risale-i Nur', tags: ['risale', 'hayat', 'ders'], desc: 'Risale-i Nur külliyatından günlük hayata dair çıkarımlar.', thumbnail: '📘' },
  { id: 'v18', type: 'video', title: 'Günah ve Tövbe Kapısı', duration: '9 dk', category: 'İbadet', tags: ['günah', 'tövbe', 'af'], desc: 'Tövbe kapısının her zaman açık olduğunu hatırlatan bir sohbet.', thumbnail: '🚪' },
  { id: 'v19', type: 'video', title: 'Sosyal Medya ve Manevi Hayat', duration: '13 dk', category: 'Gençlik', tags: ['gençlik', 'sosyal medya', 'manevi'], desc: 'Dijital çağda manevi dengenin korunması.', thumbnail: '📱' },
  { id: 'v20', type: 'video', title: 'Kalbin Huzuru — İç Barış', duration: '10 dk', category: 'İman', tags: ['kalp', 'huzur', 'iman'], desc: 'Kalp huzurunun kaynağı ve onu korumanın yolları.', thumbnail: '❤️' },
];

const PODCASTS = [
  { id: 'p1', type: 'podcast', title: 'Sabah Sohbeti: Güne Başlarken', duration: '20 dk', category: 'Günlük Hayat', tags: ['sabah', 'günlük', 'motivasyon'], desc: 'Her güne huzurla başlamak için kısa bir sohbet.', thumbnail: '🎧' },
  { id: 'p2', type: 'podcast', title: 'Risale Okumaları — Birinci Söz', duration: '25 dk', category: 'Risale-i Nur', tags: ['risale', 'okuma', 'söz'], desc: 'Risale-i Nur\'un Birinci Söz\'ünün sesli okuması ve açıklaması.', thumbnail: '🎙️' },
  { id: 'p3', type: 'podcast', title: 'Gençlik Muhabbeti', duration: '30 dk', category: 'Gençlik', tags: ['gençlik', 'muhabbet', 'sohbet'], desc: 'Gençlerin günlük sorunları ve İslami çözümler.', thumbnail: '🎧' },
  { id: 'p4', type: 'podcast', title: 'İman ve Bilim', duration: '22 dk', category: 'İman', tags: ['iman', 'bilim', 'akıl'], desc: 'Bilim ile iman arasındaki uyum üzerine.', thumbnail: '🔬' },
  { id: 'p5', type: 'podcast', title: 'Evlilik Yolculuğu', duration: '28 dk', category: 'Evlilik', tags: ['evlilik', 'hazırlık', 'aile'], desc: 'Evliliğe hazırlık ve mutlu bir yuva kurma rehberi.', thumbnail: '💍' },
  { id: 'p6', type: 'podcast', title: 'Kur\'an Sohbetleri', duration: '18 dk', category: 'Kur\'an', tags: ['kuran', 'sohbet', 'tefsir'], desc: 'Kur\'an ayetleri üzerine günlük düşünceler.', thumbnail: '📻' },
  { id: 'p7', type: 'podcast', title: 'Siyer-i Nebi — Mekke Dönemi', duration: '35 dk', category: 'Siyer', tags: ['siyer', 'mekke', 'peygamber'], desc: 'Peygamber Efendimiz\'in Mekke dönemine dair bir yolculuk.', thumbnail: '🏜️' },
  { id: 'p8', type: 'podcast', title: 'Namaz Rehberi', duration: '15 dk', category: 'Namaz', tags: ['namaz', 'rehber', 'ibadet'], desc: 'Namazın adab ve erkanı üzerine pratik bilgiler.', thumbnail: '🕋' },
  { id: 'p9', type: 'podcast', title: 'Şüphelere Cevaplar', duration: '24 dk', category: 'Şüpheler', tags: ['şüphe', 'cevap', 'akıl'], desc: 'Sıkça sorulan iman sorularına samimi cevaplar.', thumbnail: '❓' },
  { id: 'p10', type: 'podcast', title: 'Ahiret Bilinci', duration: '20 dk', category: 'Ahiret', tags: ['ahiret', 'bilinç', 'hazırlık'], desc: 'Ahiret hayatına bilinçli bir hazırlık için düşünceler.', thumbnail: '🌙' },
];

const ARTICLES = [
  { id: 'a1', type: 'article', title: 'İmanın Temelleri — Giriş Yazısı', duration: '5 dk okuma', category: 'İman', tags: ['iman', 'temel', 'giriş'], desc: 'İman kavramının temel yapı taşlarına genel bir bakış.', thumbnail: '📝' },
  { id: 'a2', type: 'article', title: 'Günlük Dua Rehberi', duration: '3 dk okuma', category: 'İbadet', tags: ['dua', 'günlük', 'rehber'], desc: 'Her gün okunabilecek dualar ve anlamları.', thumbnail: '📄' },
  { id: 'a3', type: 'article', title: 'Risale-i Nur Okuma Planı', duration: '4 dk okuma', category: 'Risale-i Nur', tags: ['risale', 'plan', 'okuma'], desc: 'Sistematik Risale-i Nur okuma programı önerisi.', thumbnail: '📋' },
  { id: 'a4', type: 'article', title: 'Kader Meselesi — Temel Kavramlar', duration: '6 dk okuma', category: 'İman', tags: ['kader', 'kavram', 'iman'], desc: 'Kader kavramını anlamak için gerekli temel bilgiler.', thumbnail: '📝' },
  { id: 'a5', type: 'article', title: 'Gençlere Mektup', duration: '4 dk okuma', category: 'Gençlik', tags: ['gençlik', 'mektup', 'nasihat'], desc: 'Genç nesle yönelik samimi bir mektup.', thumbnail: '✉️' },
  { id: 'a6', type: 'article', title: 'İbadetlerin Hikmeti', duration: '7 dk okuma', category: 'İbadet', tags: ['ibadet', 'hikmet', 'anlam'], desc: 'İbadetlerin ardındaki derin hikmetler.', thumbnail: '📖' },
  { id: 'a7', type: 'article', title: 'Aile İçi İletişim Rehberi', duration: '5 dk okuma', category: 'Aile', tags: ['aile', 'iletişim', 'rehber'], desc: 'Aile içi sağlıklı iletişimin İslami temelleri.', thumbnail: '📄' },
  { id: 'a8', type: 'article', title: 'Kalp ve İman İlişkisi', duration: '5 dk okuma', category: 'İman', tags: ['kalp', 'iman', 'ilişki'], desc: 'Kalbin imanla olan derin bağlantısı.', thumbnail: '📝' },
  { id: 'a9', type: 'article', title: 'Namaz Vakitleri ve Anlamları', duration: '4 dk okuma', category: 'Namaz', tags: ['namaz', 'vakit', 'anlam'], desc: 'Beş vakit namazın zamanları ve her birinin özel anlamı.', thumbnail: '📋' },
  { id: 'a10', type: 'article', title: 'Evlilik Öncesi Bilmeniz Gerekenler', duration: '6 dk okuma', category: 'Evlilik', tags: ['evlilik', 'hazırlık', 'bilgi'], desc: 'Evliliğe adım atmadan önce bilinmesi gereken temel konular.', thumbnail: '📄' },
];

const ALL_CONTENT = [...VIDEOS, ...PODCASTS, ...ARTICLES];

const JOURNEYS = [
  {
    id: 'j1', icon: '🌱', title: '7 Günlük İman Yolculuğu', duration: '7 gün', daily: '10–15 dk/gün', level: 'Başlangıç', color: '#E8F5EE',
    desc: 'İmanın temel kavramlarını keşfet ve günlük hayatına yansıt.',
    days: [
      { title: 'Allah\'ı Tanımak', contentId: 'v1' },
      { title: 'Kâinata Bakmak', contentId: 'v13' },
      { title: 'İman ve Akıl', contentId: 'v9' },
      { title: 'Şüphelerle Yüzleşmek', contentId: 'v9' },
      { title: 'Kalp ve İman', contentId: 'v20' },
      { title: 'Hayata Yansımak', contentId: 'v11' },
      { title: 'Yolculuğu Tamamlamak', contentId: 'a1' },
    ]
  },
  {
    id: 'j2', icon: '📖', title: 'Risale-i Nur\'a Başlangıç', duration: '21 gün', daily: '15 dk/gün', level: 'Başlangıç', color: '#FFF3E0',
    desc: 'Risale-i Nur külliyatını tanımak ve sistematik okumaya başlamak için.',
    days: [
      { title: 'Risale-i Nur Nedir?', contentId: 'v7' },
      { title: 'Birinci Söz', contentId: 'p2' },
      { title: 'İkinci Söz', contentId: 'a3' },
      { title: 'Üçüncü Söz', contentId: 'a3' },
      { title: 'Dördüncü Söz', contentId: 'v17' },
      { title: 'Okuma Alışkanlığı', contentId: 'a3' },
      { title: 'Haftalık Değerlendirme', contentId: 'a3' },
    ]
  },
  {
    id: 'j3', icon: '🕌', title: 'Namazı Hayatına Yerleştir', duration: '14 gün', daily: '10 dk/gün', level: 'Alışkanlık', color: '#EEF0FF',
    desc: 'Namazı günlük hayatının doğal bir parçası haline getir.',
    days: [
      { title: 'Namazın Önemi', contentId: 'v3' },
      { title: 'Namaz Rehberi', contentId: 'p8' },
      { title: 'Vakitlerin Anlamı', contentId: 'a9' },
      { title: 'Huşu Nedir?', contentId: 'a6' },
      { title: 'Alışkanlık Oluşturmak', contentId: 'v3' },
      { title: 'İlk Hafta Değerlendirmesi', contentId: 'a6' },
      { title: 'Derinleşmek', contentId: 'v3' },
    ]
  },
  {
    id: 'j4', icon: '🧠', title: 'Şüphelerden Hakikate', duration: '10 gün', daily: '20 dk/gün', level: 'Orta Seviye', color: '#F3E8FF',
    desc: 'Modern çağın sorularına güçlü ve samimi cevaplar bul.',
    days: [
      { title: 'Şüphe Nedir?', contentId: 'v9' },
      { title: 'Akıl ve İman', contentId: 'p4' },
      { title: 'Bilim ve Din', contentId: 'p4' },
      { title: 'Cevaplar Aramak', contentId: 'p9' },
      { title: 'İmanın Güçlenmesi', contentId: 'v16' },
    ]
  },
  {
    id: 'j5', icon: '🌿', title: 'Gençlik ve Nefis', duration: '7 gün', daily: '15 dk/gün', level: 'Gençler', color: '#E0F7FA',
    desc: 'Gençlik döneminin zorluklarına karşı güçlü bir duruş sergile.',
    days: [
      { title: 'Gençlik Enerjisi', contentId: 'v4' },
      { title: 'Nefis Nedir?', contentId: 'v4' },
      { title: 'Sosyal Medya Dengesi', contentId: 'v19' },
      { title: 'Peygamber Tavsiyeleri', contentId: 'v14' },
      { title: 'Hedef Belirleme', contentId: 'a5' },
      { title: 'Arkadaş Çevresi', contentId: 'p3' },
      { title: 'Yolculuğu Tamamla', contentId: 'v4' },
    ]
  },
  {
    id: 'j6', icon: '💑', title: 'Evliliğe Hazırlık', duration: '10 gün', daily: '15 dk/gün', level: 'Yetişkin', color: '#FDE8E8',
    desc: 'Huzurlu bir evlilik için İslami temel bilgiler ve hazırlık.',
    days: [
      { title: 'Evliliğin Anlamı', contentId: 'v10' },
      { title: 'İletişim Temelleri', contentId: 'a7' },
      { title: 'Sorumluluklar', contentId: 'p5' },
      { title: 'Aile Bağları', contentId: 'v15' },
      { title: 'Bilmeniz Gerekenler', contentId: 'a10' },
    ]
  },
  {
    id: 'j7', icon: '🌙', title: 'Ahiret Bilinci', duration: '7 gün', daily: '10 dk/gün', level: 'Başlangıç', color: '#E8E0F0',
    desc: 'Ahiret inancının hayatımıza kattığı anlam ve derinlik.',
    days: [
      { title: 'Ahirete Neden İnanırız?', contentId: 'v6' },
      { title: 'Ölüm Gerçeği', contentId: 'v5' },
      { title: 'Ahiret Bilinci', contentId: 'p10' },
      { title: 'Günlük Hayata Etkisi', contentId: 'v6' },
      { title: 'Hazırlık ve Amel', contentId: 'a6' },
    ]
  },
  {
    id: 'j8', icon: '📖', title: 'Kur\'an\'ı Anlamak', duration: '14 gün', daily: '15 dk/gün', level: 'Başlangıç', color: '#E8F0E8',
    desc: 'Kur\'an-ı Kerim\'i daha derin anlamak için adım adım rehber.',
    days: [
      { title: 'Kur\'an\'a Yaklaşım', contentId: 'v12' },
      { title: 'İlk Sureler', contentId: 'p6' },
      { title: 'Tefsir Okumak', contentId: 'p6' },
      { title: 'Günlük Ayet', contentId: 'a1' },
      { title: 'Kur\'an ve Hayat', contentId: 'v12' },
    ]
  },
];

const QUIZ_QUESTIONS = [
  { id: 'q1', question: 'İman yalnızca bilgi sahibi olmak mıdır?', options: ['Evet', 'Hayır, bilgiyle birlikte tasdik ve hayatla ilişkiyi de kapsar.', 'Sadece ibadettir.', 'Yalnızca duygudur.'], correct: 1, category: 'İman' },
  { id: 'q2', question: 'Kader inancı insanın iradesini ortadan kaldırır mı?', options: ['Evet, tamamen kaldırır.', 'Hayır, insan iradesiyle kader birlikte işler.', 'Kader sadece geçmiş için geçerlidir.', 'İrade kavramı İslam\'da yoktur.'], correct: 1, category: 'İman' },
  { id: 'q3', question: 'Namazın günde beş vakit kılınmasının hikmeti nedir?', options: ['Sadece bir gelenektir.', 'Günün farklı zamanlarında Allah\'ı hatırlamak ve manevi bağı sürdürmek.', 'Fiziksel egzersiz içindir.', 'Sadece gece kılınmalıdır.'], correct: 1, category: 'Namaz' },
  { id: 'q4', question: 'Risale-i Nur külliyatının temel amacı nedir?', options: ['Siyasi bir hareket başlatmak.', 'İmanın hakikatlerini akli ve kalbi delillerle anlatmak.', 'Tarih kitabı yazmak.', 'Edebiyat eseri oluşturmak.'], correct: 1, category: 'Risale-i Nur' },
  { id: 'q5', question: 'Duanın kabul edilmemesi ne anlama gelir?', options: ['Allah duayı duymamıştır.', 'Dua farklı şekillerde kabul edilebilir veya daha hayırlısı verilir.', 'Dua etmek gereksizdir.', 'Sadece peygamberlerin duası kabul olur.'], correct: 1, category: 'İbadet' },
  { id: 'q6', question: 'Ahiret inancının dünya hayatına etkisi nedir?', options: ['Hiçbir etkisi yoktur.', 'Hayata anlam, sorumluluk ve umut katar.', 'Dünyadan tamamen uzaklaştırır.', 'Sadece yaşlılar için önemlidir.'], correct: 1, category: 'Ahiret' },
  { id: 'q7', question: 'Gençlik döneminde en büyük manevi tehlike nedir?', options: ['Çok uyumak.', 'Gaflet ve nefsin isteklerine kapılmak.', 'Spor yapmak.', 'Kitap okumak.'], correct: 1, category: 'Gençlik' },
  { id: 'q8', question: 'İslam\'da aile kurumunun önemi nereden gelir?', options: ['Toplumsal baskıdan.', 'Ailenin toplumun temel yapı taşı olmasından ve huzurun kaynağı olmasından.', 'Ekonomik nedenlerden.', 'Sadece çocuk yetiştirmek içindir.'], correct: 1, category: 'Aile' },
  { id: 'q9', question: 'Şüphelere karşı en güçlü silah nedir?', options: ['Görmezden gelmek.', 'İlim, tefekkür ve samimi araştırma.', 'Tartışmak.', 'İnternetten uzak durmak.'], correct: 1, category: 'Şüpheler' },
  { id: 'q10', question: 'Tövbe kapısı ne zaman kapanır?', options: ['Büyük günah işleyince.', 'Son nefes gelene kadar açıktır.', 'Gençlikten sonra kapanır.', 'Üç günahtan sonra kapanır.'], correct: 1, category: 'İbadet' },
  { id: 'q11', question: 'Sabır kavramı İslam\'da neyi ifade eder?', options: ['Pasif beklemek.', 'Zorluklar karşısında Allah\'a güvenle direnmek ve metanet göstermek.', 'Hiçbir şey yapmamak.', 'Sadece acı çekmek.'], correct: 1, category: 'İman' },
  { id: 'q12', question: 'Kur\'an\'ın temel mesajı nedir?', options: ['Tarih anlatmak.', 'Allah\'ın birliğini, insanın sorumluluğunu ve ahiret hakikatini bildirmek.', 'Bilimsel keşifler yapmak.', 'Sadece hukuki kurallar koymak.'], correct: 1, category: 'Kur\'an' },
  { id: 'q13', question: 'Sosyal medya kullanımında ölçü nasıl olmalıdır?', options: ['Tamamen bırakılmalı.', 'Bilinçli, kontrollü ve faydalı şekilde kullanılmalıdır.', 'Sınırsız kullanılabilir.', 'Sadece dini içerik paylaşılmalı.'], correct: 1, category: 'Gençlik' },
  { id: 'q14', question: 'Evlilikte iletişimin temeli nedir?', options: ['Sadece sevgi.', 'Saygı, sabır, empati ve açık iletişim.', 'Ekonomik güç.', 'Ailelerin uyumu.'], correct: 1, category: 'Evlilik' },
  { id: 'q15', question: 'Hz. Muhammed\'in en belirgin özelliği nedir?', options: ['Zenginlik.', 'Güvenilirlik (Muhammedü\'l-Emin).', 'Siyasi güç.', 'Askeri başarı.'], correct: 1, category: 'Siyer' },
  { id: 'q16', question: 'İmanın altı şartından biri hangisidir?', options: ['Oruç tutmak.', 'Ahirete iman.', 'Hac yapmak.', 'Zekat vermek.'], correct: 1, category: 'İman' },
  { id: 'q17', question: 'Nefis terbiyesinin amacı nedir?', options: ['Nefsi yok etmek.', 'Nefsi kontrol altına alıp onu hayra yönlendirmek.', 'Her istediğini yapmak.', 'Sadece aç kalmak.'], correct: 1, category: 'Gençlik' },
  { id: 'q18', question: 'İslam\'da bilgiye verilen değer nasıl ifade edilir?', options: ['İlim yalnızca alimlere gereklidir.', '"Beşikten mezara kadar ilim talep ediniz" anlayışıyla.', 'Sadece dini ilimler öğrenilmelidir.', 'İlim gereksizdir.'], correct: 1, category: 'İslami İlimler' },
  { id: 'q19', question: 'Kainattaki düzen neyi ispat eder?', options: ['Tesadüfü.', 'Bir Yaratıcı\'nın varlığını ve hikmetini.', 'Hiçbir şeyi.', 'Sadece bilimi.'], correct: 1, category: 'İman' },
  { id: 'q20', question: 'Şükür neden önemlidir?', options: ['Adet olduğu için.', 'Nimetlerin farkında olmak, artmasına vesile olmak ve Allah\'a yakınlaşmak için.', 'Sadece sözel bir ifadedir.', 'Önemli değildir.'], correct: 1, category: 'İman' },
];

const EVENTS = [
  { id: 'e1', title: 'Çınaraltı Cumartesi Sohbeti', city: 'Ankara', date: 'Cumartesi', time: '20:00', location: 'Çınaraltı Merkez, Kızılay', desc: 'Her hafta cumartesi akşamı düzenlenen geleneksel sohbet programımıza davetlisiniz.' },
  { id: 'e2', title: 'Cuma Sohbeti', city: 'İstanbul', date: 'Cuma', time: '20:00', location: 'Çınaraltı İstanbul, Üsküdar', desc: 'Cuma akşamlarına özel sohbet ve muhabbet programı.' },
  { id: 'e3', title: 'Gençlik Buluşması', city: 'Ankara', date: 'Pazar', time: '14:00', location: 'Çınaraltı Merkez, Kızılay', desc: 'Gençlere özel interaktif sohbet ve etkinlik programı.' },
  { id: 'e4', title: 'Risale Okuma Halkası', city: 'İstanbul', date: 'Çarşamba', time: '19:30', location: 'Çınaraltı İstanbul, Fatih', desc: 'Haftalık Risale-i Nur okuma ve müzakere halkası.' },
  { id: 'e5', title: 'Aile Sohbeti', city: 'Ankara', date: 'Perşembe', time: '20:00', location: 'Çınaraltı Merkez, Çankaya', desc: 'Aileler için özel sohbet ve paylaşım programı.' },
  { id: 'e6', title: 'Çınaraltı Kahvaltısı', city: 'Ankara', date: 'Pazar', time: '10:00', location: 'Çınaraltı Merkez, Kızılay', desc: 'Pazar sabahı kahvaltı ve sohbet buluşması.' },
  { id: 'e7', title: 'Genç Erkekler Programı', city: 'İstanbul', date: 'Cumartesi', time: '15:00', location: 'Çınaraltı İstanbul, Kadıköy', desc: 'Genç erkeklere özel spor ve sohbet etkinliği.' },
  { id: 'e8', title: 'Kitap Kulübü', city: 'Ankara', date: 'Salı', time: '19:00', location: 'Çınaraltı Merkez, Kızılay', desc: 'Aylık kitap değerlendirme ve tartışma toplantısı.' },
  { id: 'e9', title: 'Online Sohbet — Kader', city: 'Online', date: 'Çarşamba', time: '21:00', location: 'Zoom', desc: 'Kader konusunda derinlemesine online sohbet programı.' },
  { id: 'e10', title: 'Çınaraltı Piknik', city: 'Ankara', date: 'Cumartesi', time: '11:00', location: 'Gölbaşı Piknik Alanı', desc: 'Doğayla iç içe sohbet ve piknik etkinliği.' },
];

const ACHIEVEMENTS = [
  { id: 'ach1', icon: '🌱', title: 'İlk Adım', desc: 'İlk yolculuğunu tamamladın.', condition: 'firstJourney' },
  { id: 'ach2', icon: '🔥', title: '7 Gün', desc: '7 gün üst üste devam ettin.', condition: 'streak7' },
  { id: 'ach3', icon: '📖', title: 'İlk 100 Sayfa', desc: '100 sayfalık okuma hedefini tamamladın.', condition: 'pages100' },
  { id: 'ach4', icon: '🎓', title: 'Öğrenci', desc: 'İlk eğitimini tamamladın.', condition: 'firstLesson' },
  { id: 'ach5', icon: '🧠', title: 'Test Ustası', desc: '10 mini test tamamladın.', condition: 'quizzes10' },
  { id: 'ach6', icon: '🌟', title: 'Keşifçi', desc: '20 farklı içerik tamamladın.', condition: 'content20' },
  { id: 'ach7', icon: '🤝', title: 'Topluluk Üyesi', desc: 'İlk etkinliğine katıldın.', condition: 'firstEvent' },
  { id: 'ach8', icon: '💪', title: '30 Gün', desc: '30 gün üst üste devam ettin.', condition: 'streak30' },
];

const AI_RESPONSES = {
  'kader': {
    text: 'Kader konusu gerçekten derin bir konu. İstersen seni başlangıç seviyesinden ilerletecek bir yolculuk hazırlayabilirim. Şu içeriklerle başlayabilirsin:',
    suggestions: ['5 Günlük Yolculuk Oluştur', 'İçerikleri Göster'],
    content: ['v2', 'a4', 'p9'],
  },
  'iman': {
    text: 'İman konusunda çok güzel içeriklerimiz var. Seni 7 günlük İman Yolculuğu\'na davet edebilirim. İşte başlangıç için önerilerim:',
    suggestions: ['İman Yolculuğuna Başla', 'Daha Fazla Göster'],
    content: ['v1', 'v11', 'a1'],
  },
  'namaz': {
    text: 'Namaz konusunda hem pratik hem de manevi derinlik sunan içeriklerimiz mevcut. İşte sana özel seçtiklerim:',
    suggestions: ['Namaz Yolculuğuna Başla', 'İçerikleri Göster'],
    content: ['v3', 'p8', 'a9'],
  },
  'risale': {
    text: 'Risale-i Nur\'a başlamak harika bir karar! 21 günlük bir yolculuk programımız var. Başlangıç olarak şunları öneriyorum:',
    suggestions: ['Risale Yolculuğuna Başla', 'Okuma Planını Gör'],
    content: ['v7', 'p2', 'a3'],
  },
  'gençlik': {
    text: 'Gençlik dönemi hem zorlukları hem de fırsatlarıyla dolu. İşte sana yol gösterecek içerikler:',
    suggestions: ['Gençlik Yolculuğuna Başla', 'İçerikleri Gör'],
    content: ['v4', 'v19', 'p3'],
  },
  'evlilik': {
    text: 'Evlilik konusunda hem hazırlık hem de mevcut evlilikler için faydalı içeriklerimiz var:',
    suggestions: ['Evlilik Yolculuğuna Başla', 'Detaylı Gör'],
    content: ['v10', 'p5', 'a10'],
  },
  'ölüm': {
    text: 'Ölüm ve ahiret konusu, hayata anlam katan en derin konulardan biri. İşte sana yardımcı olacak içerikler:',
    suggestions: ['Ahiret Yolculuğuna Başla', 'İçerikleri Gör'],
    content: ['v5', 'v6', 'p10'],
  },
  'ahiret': {
    text: 'Ahiret bilinci, hayatımıza anlam ve sorumluluk katar. İşte başlangıç için önerilerim:',
    suggestions: ['Ahiret Yolculuğuna Başla', 'Daha Fazla'],
    content: ['v5', 'v6', 'p10'],
  },
  'şüphe': {
    text: 'Şüpheler, aslında hakikate ulaşmanın basamakları olabilir. İşte bu konuda sana yardımcı olacak içerikler:',
    suggestions: ['Şüpheler Yolculuğuna Başla', 'İçerikleri Gör'],
    content: ['v9', 'p9', 'p4'],
  },
  'default': {
    text: 'Bu konuda Çınaraltı arşivinden sana içerik önerebilirim. Daha spesifik bir konu belirtirsen daha iyi yönlendirebilirim. Örneğin: iman, kader, namaz, risale, gençlik, evlilik gibi konularda sana yol gösterebilirim.',
    suggestions: ['İman hakkında', 'Kader hakkında', 'Namaz hakkında'],
    content: ['v1', 'v2', 'v3'],
  }
};

const CATEGORIES = ['İman', 'Kur\'an', 'Risale-i Nur', 'Gençlik', 'Aile', 'Evlilik', 'Ahiret', 'Namaz', 'Siyer', 'Şüpheler', 'Günlük Hayat'];

const TODAY_TASKS = [
  { id: 'tt1', icon: '🎥', iconClass: 'video', title: '8 dk İman Sohbeti', desc: 'Allah\'a iman ve günlük hayat', action: 'İzle', contentId: 'v11' },
  { id: 'tt2', icon: '📖', iconClass: 'read', title: '5 dk Risale Okuması', desc: 'Bugünün seçkisi', action: 'Oku', contentId: 'a1' },
  { id: 'tt3', icon: '🧠', iconClass: 'quiz', title: '3 Soruluk Mini Test', desc: 'Bugünkü öğrendiklerini pekiştir', action: 'Başla', contentId: null },
  { id: 'tt4', icon: '🤲', iconClass: 'dua', title: 'Bugünün Duası', desc: 'Günün duasını oku ve tefekkür et', action: 'Oku', contentId: null },
];


// =============================================
// SECTION 2: STATE MANAGEMENT
// =============================================

const DEFAULT_STATE = {
  onboardingCompleted: false,
  userName: 'Erhan',
  interests: [],
  dailyGoal: 20,
  streak: 7,
  completedTasks: [],
  bookmarks: [],
  journeyProgress: {},
  quizResults: {},
  completedContent: [],
  joinedEvents: [],
  collectiveJoined: false,
  achievementsUnlocked: ['ach1', 'ach2', 'ach4'],
  totalContentCompleted: 46,
  totalQuizzes: 31,
  totalJourneys: 8,
  daysActive: 12,
};

let state = {};
let currentScreen = 'home';
let navigationStack = [];
let currentQuizIndex = 0;
let currentQuizQuestions = [];
let quizScore = 0;
let voiceTimerInterval = null;

function loadState() {
  try {
    const saved = localStorage.getItem('cinaraltiYolState');
    if (saved) {
      state = { ...DEFAULT_STATE, ...JSON.parse(saved) };
    } else {
      state = { ...DEFAULT_STATE };
    }
  } catch (e) {
    state = { ...DEFAULT_STATE };
  }
}

function saveState() {
  try {
    localStorage.setItem('cinaraltiYolState', JSON.stringify(state));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }
}

function completeTask(taskId) {
  if (!state.completedTasks.includes(taskId)) {
    state.completedTasks.push(taskId);
    saveState();
  }
}

function completeContent(contentId) {
  if (!state.completedContent.includes(contentId)) {
    state.completedContent.push(contentId);
    state.totalContentCompleted++;
    saveState();
  }
}

function toggleBookmark(contentId) {
  const idx = state.bookmarks.indexOf(contentId);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
  } else {
    state.bookmarks.push(contentId);
  }
  saveState();
}

function updateStreak() {
  // Demo: streak is pre-set
  saveState();
}

function saveQuizResult(quizId, score, total) {
  state.quizResults[quizId] = { score, total, date: new Date().toISOString() };
  state.totalQuizzes++;
  saveState();
}

function saveJourneyProgress(journeyId, dayIndex) {
  if (!state.journeyProgress[journeyId]) {
    state.journeyProgress[journeyId] = { currentDay: 0, completedDays: [] };
  }
  if (!state.journeyProgress[journeyId].completedDays.includes(dayIndex)) {
    state.journeyProgress[journeyId].completedDays.push(dayIndex);
  }
  state.journeyProgress[journeyId].currentDay = dayIndex + 1;
  saveState();
}


// =============================================
// SECTION 3: NAVIGATION & UI UTILITIES
// =============================================

function navigateTo(screen, data = null, pushToStack = true) {
  if (pushToStack && currentScreen) {
    navigationStack.push({ screen: currentScreen, data: null });
  }
  currentScreen = screen;
  const content = document.getElementById('screen-content');
  if (!content) return;

  content.classList.remove('page-enter', 'page-enter-back');
  void content.offsetWidth; // force reflow
  content.classList.add('page-enter');

  renderScreen(screen, data);
  updateNav(screen);
  content.scrollTop = 0;
}

function goBack() {
  if (navigationStack.length > 0) {
    const prev = navigationStack.pop();
    currentScreen = prev.screen;
    const content = document.getElementById('screen-content');
    if (content) {
      content.classList.remove('page-enter', 'page-enter-back');
      void content.offsetWidth;
      content.classList.add('page-enter-back');
    }
    renderScreen(prev.screen, prev.data);
    updateNav(prev.screen);
  }
}

function updateNav(screen) {
  const navItems = document.querySelectorAll('.nav-item');
  const tabMap = { home: 0, discover: 1, journeys: 2, community: 3, profile: 4 };
  navItems.forEach((item, i) => {
    item.classList.toggle('active', i === tabMap[screen]);
  });
}

function showToast(message, duration = 2500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check-circle" style="width:18px;height:18px;flex-shrink:0"></i><span>${message}</span>`;
  container.appendChild(toast);
  if (window.lucide) lucide.createIcons({ nodes: [toast] });
  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function openBottomSheet(contentHTML) {
  const existing = document.querySelector('.bottom-sheet-overlay');
  if (existing) existing.remove();
  const existingSheet = document.querySelector('.bottom-sheet');
  if (existingSheet) existingSheet.remove();

  const overlay = document.createElement('div');
  overlay.className = 'bottom-sheet-overlay';
  overlay.onclick = closeBottomSheet;

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.innerHTML = `<div class="bottom-sheet-handle"></div>${contentHTML}`;

  const appRoot = document.getElementById('app-root');
  appRoot.appendChild(overlay);
  appRoot.appendChild(sheet);
  if (window.lucide) lucide.createIcons({ nodes: [sheet] });
}

function closeBottomSheet() {
  const overlay = document.querySelector('.bottom-sheet-overlay');
  const sheet = document.querySelector('.bottom-sheet');
  if (overlay) {
    overlay.style.animation = 'fadeIn 0.2s ease reverse forwards';
    setTimeout(() => overlay.remove(), 200);
  }
  if (sheet) {
    sheet.style.animation = 'slideDown 0.3s ease forwards';
    setTimeout(() => sheet.remove(), 300);
  }
}

function getContentById(id) {
  return ALL_CONTENT.find(c => c.id === id);
}

function getCompletionPercent() {
  const completed = state.completedTasks.length;
  const total = TODAY_TASKS.length;
  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

function getTypeIcon(type) {
  switch (type) {
    case 'video': return '🎥';
    case 'podcast': return '🎧';
    case 'article': return '📝';
    default: return '📄';
  }
}

function getTypeLabel(type) {
  switch (type) {
    case 'video': return 'Video';
    case 'podcast': return 'Podcast';
    case 'article': return 'Okuma';
    default: return 'İçerik';
  }
}


// =============================================
// SECTION 4: SCREEN RENDERERS
// =============================================

function renderScreen(screen, data) {
  const content = document.getElementById('screen-content');
  if (!content) return;

  // Close any existing overlays
  const detailScreen = document.querySelector('.detail-screen');
  if (detailScreen) detailScreen.remove();
  const quizScreen = document.querySelector('.quiz-screen');
  if (quizScreen) quizScreen.remove();

  switch (screen) {
    case 'home': renderHome(content); break;
    case 'discover': renderDiscover(content); break;
    case 'journeys': renderJourneys(content); break;
    case 'community': renderCommunity(content); break;
    case 'profile': renderProfile(content); break;
    case 'ai': renderAI(content); break;
    default: renderHome(content);
  }

  if (window.lucide) lucide.createIcons();
}


// --- HOME ---
function renderHome(container) {
  const pct = getCompletionPercent();
  const circumference = 2 * Math.PI * 26;
  const offset = circumference - (pct / 100) * circumference;
  const streakDays = ['P', 'S', 'Ç', 'P', 'C', 'C', 'P'];

  let tasksHTML = '';
  TODAY_TASKS.forEach(task => {
    const done = state.completedTasks.includes(task.id);
    tasksHTML += `
      <div class="task-card ${done ? 'completed' : ''}" onclick="${done ? '' : `handleTaskClick('${task.id}', '${task.contentId}')`}">
        <div class="task-icon ${task.iconClass}">${task.icon}</div>
        <div class="task-info">
          <div class="task-title">${task.title}</div>
          <div class="task-desc">${task.desc}</div>
        </div>
        ${done ? '<div class="task-check"><i data-lucide="check" style="width:16px;height:16px"></i></div>' : `<button class="task-action">${task.action}</button>`}
      </div>
    `;
  });

  container.innerHTML = `
    <div class="home-greeting">
      <span class="home-greeting-text">Selam ${state.userName} 👋</span>
    </div>
    <h1 class="home-title">Bugünkü Yolculuğun</h1>

    <div class="progress-ring-container">
      <div class="progress-ring">
        <svg viewBox="0 0 64 64">
          <circle class="progress-ring-bg" cx="32" cy="32" r="26"/>
          <circle class="progress-ring-fill" cx="32" cy="32" r="26"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${offset}"/>
        </svg>
        <div class="progress-ring-text">%${pct}</div>
      </div>
      <div class="progress-ring-info">
        <h3>${pct === 100 ? 'Tamamlandı! 🎉' : 'Bugünkü ilerlemen'}</h3>
        <p>${state.completedTasks.length} / ${TODAY_TASKS.length} görev tamamlandı</p>
      </div>
    </div>

    ${tasksHTML}

    <div class="section-header">
      <span class="section-title">Devam Et</span>
      <span class="section-link">Tümü</span>
    </div>

    <div class="h-scroll">
      <div class="h-scroll-card" onclick="openJourneyDetail('j1')">
        <div class="continue-card-thumbnail">📚</div>
        <div class="continue-card-title">İman Serisi</div>
        <div class="continue-progress-bar"><div class="continue-progress-fill" style="width:57%"></div></div>
        <div class="continue-progress-text">4 / 7 tamamlandı</div>
      </div>
      <div class="h-scroll-card" onclick="openJourneyDetail('j5')">
        <div class="continue-card-thumbnail" style="background:linear-gradient(135deg,#2F6B58,#3F8062)">🌿</div>
        <div class="continue-card-title">Gençlik ve Nefis</div>
        <div class="continue-progress-bar"><div class="continue-progress-fill" style="width:40%"></div></div>
        <div class="continue-progress-text">2 / 5 tamamlandı</div>
      </div>
    </div>

    <div class="ai-card" onclick="navigateTo('ai')" style="margin-top:16px;cursor:pointer">
      <div class="ai-card-label">✨ Sana Özel</div>
      <div class="ai-card-title">Bugün 8 dakikalık bir sohbet sana iyi gelebilir.</div>
      <div class="ai-card-desc">Son günlerde iman konularına daha fazla ilgi gösteriyorsun.</div>
      <button class="ai-card-btn" onclick="event.stopPropagation();navigateTo('ai')">
        Öneriyi Gör <i data-lucide="arrow-right" style="width:16px;height:16px"></i>
      </button>
    </div>

    <div class="anlat-bana-card" onclick="openVoiceDemo()">
      <div class="anlat-bana-icon">🎙️</div>
      <div class="anlat-bana-info">
        <div class="anlat-bana-title">Anlat Bana</div>
        <div class="anlat-bana-desc">Bugün öğrendiğin konuyu 60 saniyede anlat.</div>
      </div>
    </div>

    <div class="streak-container" style="margin-bottom:20px">
      <div class="streak-header">
        <span class="streak-fire">🔥</span>
        <span class="streak-text">${state.streak} günlük istikrar</span>
      </div>
      <div class="streak-days">
        ${streakDays.map((d, i) => {
          const isActive = i < state.streak % 7 || state.streak >= 7;
          const isToday = i === new Date().getDay() - 1 || (new Date().getDay() === 0 && i === 6);
          return `
            <div class="streak-day">
              <span class="streak-day-label">${d}</span>
              <div class="streak-day-dot ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}">
                ${isActive ? '✓' : ''}
              </div>
            </div>`;
        }).join('')}
      </div>
      <div class="streak-caption">${state.streak} gündür yolculuğundasın.</div>
    </div>
  `;
}


// --- DISCOVER ---
function renderDiscover(container) {
  const categoriesHTML = CATEGORIES.map(cat => `
    <button class="category-pill" onclick="filterByCategory('${cat}')">${cat}</button>
  `).join('');

  const recommendedHTML = VIDEOS.slice(0, 5).map(v => createContentCard(v)).join('');
  const sohbetHTML = VIDEOS.filter(v => v.category === 'İman').slice(0, 4).map(v => createContentCard(v)).join('');
  const podcastHTML = PODCASTS.slice(0, 5).map(p => createContentCard(p)).join('');
  const newHTML = ALL_CONTENT.slice(-5).map(c => createContentCard(c)).join('');

  container.innerHTML = `
    <div style="padding:16px 20px 4px">
      <h2 style="font-size:24px;font-weight:700">Keşfet</h2>
    </div>

    <div class="search-bar" onclick="openSearchScreen()">
      <i data-lucide="search"></i>
      <input type="text" placeholder="Ne öğrenmek istiyorsun?" id="discover-search" oninput="handleSearch(this.value)" onclick="event.stopPropagation()">
    </div>

    <div id="search-results-area"></div>

    <div id="discover-browse">
      <div class="category-pills">${categoriesHTML}</div>

      <div class="section-header">
        <span class="section-title">Sana Önerilen</span>
      </div>
      <div class="h-scroll">${recommendedHTML}</div>

      <div class="section-header">
        <span class="section-title">Çınaraltı Sohbetleri</span>
      </div>
      <div class="h-scroll">${sohbetHTML}</div>

      <div class="section-header">
        <span class="section-title">En Çok Dinlenenler</span>
      </div>
      <div class="h-scroll">${podcastHTML}</div>

      <div class="section-header">
        <span class="section-title">Yeni İçerikler</span>
      </div>
      <div class="h-scroll">${newHTML}</div>

      <div class="section-header">
        <span class="section-title">Bir Konuyu Derinleştir</span>
      </div>
      <div class="deep-dive-card" style="margin-bottom:20px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span class="demo-badge">DEMO İÇERİK</span>
        </div>
        <div class="deep-dive-topic">Kader</div>
        <div class="deep-dive-stats">
          <span class="deep-dive-stat"><i data-lucide="video"></i> 3 video</span>
          <span class="deep-dive-stat"><i data-lucide="headphones"></i> 1 podcast</span>
          <span class="deep-dive-stat"><i data-lucide="book-open"></i> 1 okuma</span>
          <span class="deep-dive-stat"><i data-lucide="brain"></i> 5 soruluk test</span>
        </div>
        <button class="btn-primary" style="max-width:none" onclick="filterByCategory('İman')">Konuyu Keşfet</button>
      </div>
    </div>
  `;
}

function createContentCard(item) {
  const colors = {
    'İman': 'linear-gradient(135deg,#123C32,#2F6B58)',
    'Kur\'an': 'linear-gradient(135deg,#1a4a3a,#3d8a70)',
    'Risale-i Nur': 'linear-gradient(135deg,#2a4a3a,#4a7a60)',
    'Gençlik': 'linear-gradient(135deg,#1a5244,#3F8062)',
    'İbadet': 'linear-gradient(135deg,#2F6B58,#5AB87E)',
    'Ahiret': 'linear-gradient(135deg,#1a3a4a,#2a6a8a)',
    'Evlilik': 'linear-gradient(135deg,#4a2a3a,#8a4a6a)',
    'Aile': 'linear-gradient(135deg,#3a2a1a,#6a5a3a)',
    'Siyer': 'linear-gradient(135deg,#3a3a1a,#6a6a3a)',
    'Namaz': 'linear-gradient(135deg,#2a2a4a,#4a4a8a)',
    'Şüpheler': 'linear-gradient(135deg,#3a1a4a,#6a3a8a)',
    'Günlük Hayat': 'linear-gradient(135deg,#1a4a2a,#3a8a5a)',
    'İslami İlimler': 'linear-gradient(135deg,#2a3a4a,#4a6a8a)',
  };
  const bg = colors[item.category] || colors['İman'];

  return `
    <div class="content-card" onclick="openContentDetail('${item.id}')">
      <div class="content-card-thumbnail" style="background:${bg}">
        <div class="play-icon"><i data-lucide="${item.type === 'video' ? 'play' : item.type === 'podcast' ? 'headphones' : 'book-open'}" style="width:18px;height:18px;color:#fff"></i></div>
        <span class="content-card-duration">${item.duration}</span>
      </div>
      <div class="content-card-title">${item.title}</div>
      <div class="content-card-meta">${item.category} • ${getTypeLabel(item.type)}</div>
    </div>
  `;
}

function handleSearch(query) {
  const resultsArea = document.getElementById('search-results-area');
  const browseArea = document.getElementById('discover-browse');
  if (!resultsArea || !browseArea) return;

  if (!query || query.length < 2) {
    resultsArea.innerHTML = '';
    browseArea.style.display = '';
    return;
  }

  browseArea.style.display = 'none';
  const q = query.toLowerCase();
  const results = ALL_CONTENT.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.tags.some(t => t.includes(q)) ||
    c.desc.toLowerCase().includes(q)
  ).slice(0, 10);

  if (results.length === 0) {
    resultsArea.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-title">Sonuç bulunamadı</div>
        <div class="empty-state-desc">"${query}" için içerik bulunamadı.</div>
      </div>
    `;
    return;
  }

  resultsArea.innerHTML = `
    <div class="search-results">
      ${results.map(item => `
        <div class="search-result-item" onclick="openContentDetail('${item.id}')">
          <div class="search-result-icon">${getTypeIcon(item.type)}</div>
          <div class="search-result-info">
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-meta">${item.category} • ${item.duration}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function filterByCategory(cat) {
  const searchInput = document.getElementById('discover-search');
  if (searchInput) {
    searchInput.value = cat;
    handleSearch(cat);
  }
}

function openSearchScreen() {
  const searchInput = document.getElementById('discover-search');
  if (searchInput) searchInput.focus();
}


// --- CONTENT DETAIL ---
function openContentDetail(contentId) {
  const item = getContentById(contentId);
  if (!item) return;

  const isBookmarked = state.bookmarks.includes(contentId);
  const isCompleted = state.completedContent.includes(contentId);

  const related = ALL_CONTENT.filter(c => c.category === item.category && c.id !== item.id).slice(0, 4);
  const relatedHTML = related.map(r => `
    <div class="search-result-item" onclick="document.querySelector('.detail-screen').remove();openContentDetail('${r.id}')">
      <div class="search-result-icon">${getTypeIcon(r.type)}</div>
      <div class="search-result-info">
        <div class="search-result-title">${r.title}</div>
        <div class="search-result-meta">${r.duration} • ${getTypeLabel(r.type)}</div>
      </div>
    </div>
  `).join('');

  const detailHTML = `
    <div class="detail-screen">
      <div class="detail-hero">
        <button class="detail-back" onclick="document.querySelector('.detail-screen').remove()">
          <i data-lucide="arrow-left" style="width:20px;height:20px;color:#fff"></i>
        </button>
        <div class="play-btn" onclick="handleContentPlay('${contentId}')">
          <i data-lucide="${item.type === 'video' ? 'play' : item.type === 'podcast' ? 'headphones' : 'book-open'}"></i>
        </div>
      </div>
      <div class="detail-body">
        <span class="demo-badge" style="margin-bottom:10px">DEMO İÇERİK</span>
        <h1 class="detail-title">${item.title}</h1>
        <div class="detail-meta">
          <span>${item.duration}</span>
          <div class="detail-meta-dot"></div>
          <span>${item.category}</span>
          <div class="detail-meta-dot"></div>
          <span>${getTypeLabel(item.type)}</span>
        </div>
        <p class="detail-desc">${item.desc}</p>
        <div class="detail-actions">
          <button class="detail-action-btn primary" onclick="handleContentPlay('${contentId}')">
            <i data-lucide="${item.type === 'video' ? 'play' : 'book-open'}" style="width:18px;height:18px"></i>
            ${item.type === 'video' ? 'İzle' : item.type === 'podcast' ? 'Dinle' : 'Oku'}
          </button>
          <button class="detail-action-btn secondary ${isBookmarked ? 'bookmarked' : ''}" onclick="handleBookmark('${contentId}', this)">
            <i data-lucide="bookmark" style="width:18px;height:18px"></i>
            ${isBookmarked ? 'Kaydedildi' : 'Kaydet'}
          </button>
        </div>

        ${isCompleted ? '<div style="padding:12px;background:var(--success-light);border-radius:var(--radius);color:var(--success);font-size:14px;font-weight:500;margin-bottom:20px;text-align:center">✓ Bu içeriği tamamladın</div>' : ''}

        <div class="section-header" style="padding:0;margin:24px 0 14px">
          <span class="section-title">Bu Konuyu Derinleştir</span>
        </div>
        <div class="search-results" style="padding:0">${relatedHTML}</div>
      </div>
    </div>
  `;

  const appRoot = document.getElementById('app-root');
  const div = document.createElement('div');
  div.innerHTML = detailHTML;
  const detailEl = div.firstElementChild;
  appRoot.appendChild(detailEl);
  if (window.lucide) lucide.createIcons();
}

function handleContentPlay(contentId) {
  completeContent(contentId);
  showToast('✓ İçerik tamamlandı');
  const detailScreen = document.querySelector('.detail-screen');
  if (detailScreen) {
    detailScreen.classList.add('exiting');
    setTimeout(() => {
      detailScreen.remove();
      if (currentScreen === 'home') renderScreen('home');
    }, 300);
  }
}

function handleBookmark(contentId, btn) {
  toggleBookmark(contentId);
  const isNow = state.bookmarks.includes(contentId);
  if (btn) {
    btn.classList.toggle('bookmarked', isNow);
    btn.innerHTML = `<i data-lucide="bookmark" style="width:18px;height:18px"></i>${isNow ? 'Kaydedildi' : 'Kaydet'}`;
    if (window.lucide) lucide.createIcons({ nodes: [btn] });
  }
  showToast(isNow ? '🔖 Kaydedildi' : '🔖 Kayıttan çıkarıldı');
}


// --- TASK CLICK ---
function handleTaskClick(taskId, contentId) {
  if (taskId === 'tt3') {
    openQuiz();
    return;
  }
  if (taskId === 'tt4') {
    openDuaSheet();
    return;
  }
  if (contentId) {
    completeTask(taskId);
    openContentDetail(contentId);
    showToast('✓ Bugünün görevi tamamlandı');
    setTimeout(() => {
      if (currentScreen === 'home') renderScreen('home');
    }, 500);
  }
}

function openDuaSheet() {
  completeTask('tt4');
  openBottomSheet(`
    <h3 style="font-size:18px;font-weight:600;margin-bottom:12px">Bugünün Duası</h3>
    <p style="font-family:var(--font-serif);font-size:18px;color:var(--primary);line-height:1.8;margin-bottom:16px;text-align:center">
      "Rabbim! Göğsümü aç, işimi kolaylaştır."
    </p>
    <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:16px;text-align:center">
      — Tâhâ Suresi, 25-26
    </p>
    <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:20px">
      Bugün bu duayı tekrar ederek günün zorluklarına karşı manevi bir güç edin.
    </p>
    <button class="btn-primary" style="max-width:none" onclick="closeBottomSheet();showToast('✓ Bugünün duası tamamlandı');if(currentScreen==='home')renderScreen('home')">
      Okudum ✓
    </button>
  `);
  setTimeout(() => {
    if (currentScreen === 'home') renderScreen('home');
  }, 300);
}


// --- JOURNEYS ---
function renderJourneys(container) {
  const journeysHTML = JOURNEYS.map(j => {
    const progress = state.journeyProgress[j.id];
    const pct = progress ? Math.round((progress.completedDays.length / j.days.length) * 100) : 0;

    return `
      <div class="journey-card" onclick="openJourneyDetail('${j.id}')">
        <div class="journey-card-icon" style="background:${j.color}">${j.icon}</div>
        <div class="journey-card-info">
          <div class="journey-card-title">${j.title}</div>
          <div class="journey-card-meta">
            <span>${j.duration}</span>
            <span>${j.daily}</span>
          </div>
          <span class="journey-card-tag">${j.level}</span>
          ${pct > 0 ? `<div class="continue-progress-bar" style="margin-top:8px"><div class="continue-progress-fill" style="width:${pct}%"></div></div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="journey-header">
      <h1 class="journey-header-title">Yolculuklar</h1>
      <p class="journey-header-sub">"Bir içerik değil, bir süreç."</p>
    </div>
    ${journeysHTML}
  `;
}

function openJourneyDetail(journeyId) {
  const j = JOURNEYS.find(j => j.id === journeyId);
  if (!j) return;

  const progress = state.journeyProgress[journeyId] || { currentDay: 0, completedDays: [] };
  const pct = Math.round((progress.completedDays.length / j.days.length) * 100);

  const daysHTML = j.days.map((day, i) => {
    const isCompleted = progress.completedDays.includes(i);
    const isCurrent = i === progress.currentDay;
    const isLocked = i > progress.currentDay && !isCompleted;

    return `
      <div class="journey-day ${isLocked ? 'locked' : ''}" onclick="${!isLocked ? `handleJourneyDay('${journeyId}', ${i}, '${day.contentId}')` : ''}">
        <div class="journey-day-indicator ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
          ${isCompleted ? '✓' : i + 1}
        </div>
        <div class="journey-day-title">${day.title}</div>
      </div>
    `;
  }).join('');

  const detailHTML = `
    <div class="detail-screen" style="background:var(--background)">
      <div style="padding:20px;background:${j.color};position:relative">
        <button class="detail-back" style="position:static;background:rgba(0,0,0,0.1);margin-bottom:16px" onclick="document.querySelector('.detail-screen').remove()">
          <i data-lucide="arrow-left" style="width:20px;height:20px;color:var(--primary)"></i>
        </button>
        <div style="font-size:40px;margin-bottom:12px">${j.icon}</div>
        <h1 style="font-size:22px;font-weight:700;margin-bottom:6px">${j.title}</h1>
        <div style="display:flex;gap:16px;font-size:13px;color:var(--text-secondary)">
          <span>${j.duration}</span>
          <span>${j.daily}</span>
          <span>${j.level}</span>
        </div>
      </div>
      <div class="detail-body">
        <p style="font-size:15px;color:var(--text-secondary);line-height:1.6;margin-bottom:16px">${j.desc}</p>
        <div class="journey-detail-progress">
          <div class="journey-detail-progress-fill" style="width:${pct}%"></div>
        </div>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:20px">${progress.completedDays.length} / ${j.days.length} tamamlandı</p>

        <h3 style="font-size:17px;font-weight:600;margin-bottom:14px">Program</h3>
        ${daysHTML}

        <button class="btn-primary" style="max-width:none;margin-top:20px" onclick="handleJourneyDay('${journeyId}', ${progress.currentDay}, '${j.days[Math.min(progress.currentDay, j.days.length - 1)].contentId}')">
          ${progress.currentDay === 0 ? 'Yolculuğa Başla' : 'Bugünkü Güne Başla'}
        </button>
      </div>
    </div>
  `;

  const appRoot = document.getElementById('app-root');
  const div = document.createElement('div');
  div.innerHTML = detailHTML;
  appRoot.appendChild(div.firstElementChild);
  if (window.lucide) lucide.createIcons();
}

function handleJourneyDay(journeyId, dayIndex, contentId) {
  saveJourneyProgress(journeyId, dayIndex);
  const j = JOURNEYS.find(j => j.id === journeyId);
  showToast(`✓ ${j ? j.days[dayIndex].title : 'Gün'} tamamlandı`);
  document.querySelector('.detail-screen')?.remove();
  if (contentId) {
    openContentDetail(contentId);
  }
}


// --- QUIZ ---
function openQuiz() {
  currentQuizQuestions = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5);
  currentQuizIndex = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (currentQuizIndex >= currentQuizQuestions.length) {
    renderQuizResult();
    return;
  }

  const q = currentQuizQuestions[currentQuizIndex];
  const progress = ((currentQuizIndex) / currentQuizQuestions.length) * 100;
  const letters = ['A', 'B', 'C', 'D'];

  const quizHTML = `
    <div class="quiz-screen">
      <div class="quiz-header">
        <button class="top-header-btn" onclick="closeQuiz()">
          <i data-lucide="x" style="width:22px;height:22px"></i>
        </button>
        <span class="caption">${currentQuizIndex + 1} / ${currentQuizQuestions.length}</span>
      </div>
      <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
      <div class="quiz-body">
        <div class="quiz-question-num">Soru ${currentQuizIndex + 1}</div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" onclick="handleQuizAnswer(${i}, ${q.correct}, this)" data-index="${i}">
              <span class="quiz-option-letter">${letters[i]}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback"></div>
      </div>
      <div class="quiz-footer">
        <button class="btn-primary" id="quiz-next-btn" style="max-width:none;display:none" onclick="nextQuizQuestion()">
          Devam Et
        </button>
      </div>
    </div>
  `;

  const existing = document.querySelector('.quiz-screen');
  if (existing) existing.remove();

  const appRoot = document.getElementById('app-root');
  const div = document.createElement('div');
  div.innerHTML = quizHTML;
  appRoot.appendChild(div.firstElementChild);
  if (window.lucide) lucide.createIcons();
}

function handleQuizAnswer(selected, correct, btn) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => {
    opt.style.pointerEvents = 'none';
    const idx = parseInt(opt.dataset.index);
    if (idx === correct) opt.classList.add('correct');
    if (idx === selected && idx !== correct) opt.classList.add('wrong');
  });

  const feedback = document.getElementById('quiz-feedback');
  if (selected === correct) {
    quizScore++;
    feedback.className = 'quiz-feedback show correct';
    feedback.textContent = '✓ Doğru cevap!';
  } else {
    feedback.className = 'quiz-feedback show wrong';
    feedback.textContent = '✗ Yanlış cevap. Doğrusu işaretlendi.';
  }

  document.getElementById('quiz-next-btn').style.display = '';
}

function nextQuizQuestion() {
  currentQuizIndex++;
  renderQuizQuestion();
}

function renderQuizResult() {
  const existing = document.querySelector('.quiz-screen');
  if (existing) existing.remove();

  completeTask('tt3');
  saveQuizResult('daily-' + Date.now(), quizScore, currentQuizQuestions.length);

  const pct = Math.round((quizScore / currentQuizQuestions.length) * 100);
  let message = '';
  if (pct >= 80) message = 'Harika. Bu konuyu büyük ölçüde kavramışsın.';
  else if (pct >= 60) message = 'İyi gidiyorsun. Birkaç konuyu tekrar etmen faydalı olabilir.';
  else message = 'Endişelenme. Tekrar ederek daha da güçleneceksin.';

  const resultHTML = `
    <div class="quiz-screen">
      <div class="quiz-header">
        <button class="top-header-btn" onclick="closeQuiz()">
          <i data-lucide="x" style="width:22px;height:22px"></i>
        </button>
        <span></span>
      </div>
      <div class="quiz-result">
        <div class="quiz-result-score">${quizScore}/${currentQuizQuestions.length}</div>
        <h2 class="quiz-result-title">Test Tamamlandı!</h2>
        <p class="quiz-result-desc">${message}</p>
      </div>
      <div class="quiz-footer">
        <button class="btn-primary" style="max-width:none" onclick="closeQuiz();showToast('✓ Mini test tamamlandı');if(currentScreen==='home')renderScreen('home')">
          Tamam
        </button>
      </div>
    </div>
  `;

  const appRoot = document.getElementById('app-root');
  const div = document.createElement('div');
  div.innerHTML = resultHTML;
  appRoot.appendChild(div.firstElementChild);
  if (window.lucide) lucide.createIcons();
}

function closeQuiz() {
  const qs = document.querySelector('.quiz-screen');
  if (qs) qs.remove();
  if (currentScreen === 'home') renderScreen('home');
}


// --- COMMUNITY ---
function renderCommunity(container) {
  const eventsHTML = EVENTS.slice(0, 5).map(e => {
    const joined = state.joinedEvents.includes(e.id);
    return `
      <div class="event-card" onclick="openEventDetail('${e.id}')">
        <div class="event-card-top">
          <div>
            <div class="event-card-title">${e.title}</div>
            <div class="event-card-time">${e.date} • ${e.time}</div>
          </div>
          <div class="event-location-badge">📍 ${e.city}</div>
        </div>
        <button class="event-card-btn ${joined ? 'joined' : ''}" onclick="event.stopPropagation();handleJoinEvent('${e.id}', this)">
          ${joined ? '✓ Katılacağım' : 'Katılacağım'}
        </button>
      </div>
    `;
  }).join('');

  const collectivePct = 84.2;

  container.innerHTML = `
    <div class="community-header">
      <h1 style="font-size:24px;font-weight:700;margin-bottom:4px">Çınaraltı Topluluğu</h1>
      <p style="font-size:14px;color:var(--text-secondary)">Birlikte öğren, birlikte büyü.</p>
    </div>

    <div class="collective-card">
      <h3 class="collective-title">Birlikte Öğreniyoruz</h3>
      <p class="collective-desc">Bu hafta 8.420 kişi bir yolculuğa başladı.</p>
      <div class="collective-bar">
        <div class="collective-bar-fill" style="width:${collectivePct}%"></div>
      </div>
      <div class="collective-numbers">
        <span>8.420 kişi</span>
        <span>Hedef: 10.000</span>
      </div>
      <button class="btn-primary" style="max-width:none" onclick="handleCollectiveJoin(this)">
        ${state.collectiveJoined ? '✓ Katıldın' : 'Ben de Katıl'}
      </button>
    </div>

    <div class="section-header">
      <span class="section-title">Yaklaşan Etkinlikler</span>
      <span class="section-link">Tümü</span>
    </div>

    ${eventsHTML}
  `;
}

function openEventDetail(eventId) {
  const e = EVENTS.find(ev => ev.id === eventId);
  if (!e) return;
  const joined = state.joinedEvents.includes(eventId);

  const detailHTML = `
    <div class="detail-screen">
      <div class="event-detail-header">
        <button class="detail-back" onclick="document.querySelector('.detail-screen').remove()">
          <i data-lucide="arrow-left" style="width:20px;height:20px;color:#fff"></i>
        </button>
        <h1 class="event-detail-title" style="margin-top:40px">${e.title}</h1>
        <div class="event-detail-info">
          <div class="event-detail-row"><i data-lucide="calendar"></i><span>${e.date}</span></div>
          <div class="event-detail-row"><i data-lucide="clock"></i><span>${e.time}</span></div>
          <div class="event-detail-row"><i data-lucide="map-pin"></i><span>${e.location}</span></div>
        </div>
      </div>
      <div class="event-detail-body">
        <p class="event-detail-desc">${e.desc}</p>
        <div class="event-detail-actions">
          <button class="btn-primary" style="max-width:none" onclick="handleJoinEvent('${eventId}', this);showToast('✓ Etkinliğe katılım kaydedildi')">
            ${joined ? '✓ Katılacağım' : 'Katılacağım'}
          </button>
          <button class="btn-secondary" style="width:100%" onclick="showToast('📅 Takvime eklendi')">
            <i data-lucide="calendar-plus" style="width:16px;height:16px"></i> Takvime Ekle
          </button>
        </div>
        <span class="demo-badge" style="margin-top:16px">DEMO İÇERİK</span>
      </div>
    </div>
  `;

  const appRoot = document.getElementById('app-root');
  const div = document.createElement('div');
  div.innerHTML = detailHTML;
  appRoot.appendChild(div.firstElementChild);
  if (window.lucide) lucide.createIcons();
}

function handleJoinEvent(eventId, btn) {
  if (!state.joinedEvents.includes(eventId)) {
    state.joinedEvents.push(eventId);
    saveState();
  }
  if (btn) {
    btn.classList.add('joined');
    btn.textContent = '✓ Katılacağım';
  }
  showToast('✓ Etkinliğe katılım kaydedildi');
}

function handleCollectiveJoin(btn) {
  state.collectiveJoined = true;
  saveState();
  if (btn) {
    btn.textContent = '✓ Katıldın';
    btn.style.background = 'var(--success)';
  }
  showToast('🎉 Birlikte öğrenme hedefine katıldın!');
}


// --- PROFILE ---
function renderProfile(container) {
  const menuItems = [
    { icon: 'route', label: 'Benim Yolculuğum', action: 'showMyJourneys()' },
    { icon: 'bookmark', label: 'Kaydettiklerim', action: 'showBookmarks()' },
    { icon: 'check-circle', label: 'Tamamladıklarım', action: 'showCompleted()' },
    { icon: 'trophy', label: 'Başarılarım', action: 'showAchievements()' },
    { icon: 'target', label: 'Hedeflerim', action: 'showToast("Hedefler yakında!")' },
    { icon: 'bell', label: 'Bildirimler', action: 'showToast("Bildirim ayarları yakında!")' },
    { icon: 'settings', label: 'Ayarlar', action: 'showToast("Ayarlar yakında!")' },
  ];

  container.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="assets/avatar.svg" alt="Avatar">
      </div>
      <div class="profile-name">${state.userName}</div>
      <div class="profile-subtitle">${state.daysActive} gündür Çınaraltı Yolundasın.</div>
    </div>

    <div class="profile-stats">
      <div class="profile-stat">
        <div class="profile-stat-value">${state.daysActive}</div>
        <div class="profile-stat-label">gün</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-value">${state.totalContentCompleted}</div>
        <div class="profile-stat-label">İçerik</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-value">${state.totalJourneys}</div>
        <div class="profile-stat-label">Yolculuk</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-value">${state.totalQuizzes}</div>
        <div class="profile-stat-label">Mini test</div>
      </div>
    </div>

    <div class="profile-section">
      ${menuItems.map(item => `
        <div class="profile-menu-item" onclick="${item.action}">
          <div class="profile-menu-icon"><i data-lucide="${item.icon}"></i></div>
          <span class="profile-menu-text">${item.label}</span>
          <div class="profile-menu-arrow"><i data-lucide="chevron-right"></i></div>
        </div>
      `).join('')}
    </div>
  `;
}

function showBookmarks() {
  if (state.bookmarks.length === 0) {
    openBottomSheet(`
      <div class="empty-state">
        <div class="empty-state-icon">🔖</div>
        <div class="empty-state-title">Henüz kaydettiğin bir içerik yok.</div>
        <div class="empty-state-desc">İçerikleri keşfet ve beğendiklerini kaydet.</div>
        <button class="btn-primary" onclick="closeBottomSheet();navigateTo('discover',null,true)">Keşfetmeye Başla</button>
      </div>
    `);
    return;
  }

  const items = state.bookmarks.map(id => {
    const item = getContentById(id);
    if (!item) return '';
    return `
      <div class="search-result-item" onclick="closeBottomSheet();openContentDetail('${item.id}')">
        <div class="search-result-icon">${getTypeIcon(item.type)}</div>
        <div class="search-result-info">
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-meta">${item.category} • ${item.duration}</div>
        </div>
      </div>
    `;
  }).join('');

  openBottomSheet(`
    <h3 style="font-size:18px;font-weight:600;margin-bottom:14px">Kaydettiklerim</h3>
    <div class="search-results" style="padding:0">${items}</div>
  `);
}

function showCompleted() {
  if (state.completedContent.length === 0) {
    openBottomSheet(`
      <div class="empty-state">
        <div class="empty-state-icon">📚</div>
        <div class="empty-state-title">Henüz tamamladığın bir içerik yok.</div>
        <div class="empty-state-desc">Bugünkü görevlerine başla!</div>
        <button class="btn-primary" onclick="closeBottomSheet();navigateTo('home',null,true)">Bugüne Git</button>
      </div>
    `);
    return;
  }

  const items = state.completedContent.slice(-10).reverse().map(id => {
    const item = getContentById(id);
    if (!item) return '';
    return `
      <div class="search-result-item">
        <div class="search-result-icon">${getTypeIcon(item.type)}</div>
        <div class="search-result-info">
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-meta">${item.category} • ✓ Tamamlandı</div>
        </div>
      </div>
    `;
  }).join('');

  openBottomSheet(`
    <h3 style="font-size:18px;font-weight:600;margin-bottom:14px">Tamamladıklarım</h3>
    <div class="search-results" style="padding:0">${items}</div>
  `);
}

function showMyJourneys() {
  const active = Object.keys(state.journeyProgress);
  if (active.length === 0) {
    openBottomSheet(`
      <div class="empty-state">
        <div class="empty-state-icon">🗺️</div>
        <div class="empty-state-title">İlk yolculuğunu seç ve bugün başla.</div>
        <button class="btn-primary" onclick="closeBottomSheet();navigateTo('journeys',null,true)">Yolculukları Gör</button>
      </div>
    `);
    return;
  }

  const items = active.map(jId => {
    const j = JOURNEYS.find(jj => jj.id === jId);
    if (!j) return '';
    const prog = state.journeyProgress[jId];
    const pct = Math.round((prog.completedDays.length / j.days.length) * 100);
    return `
      <div class="journey-card" style="margin:0 0 10px" onclick="closeBottomSheet();openJourneyDetail('${jId}')">
        <div class="journey-card-icon" style="background:${j.color}">${j.icon}</div>
        <div class="journey-card-info">
          <div class="journey-card-title">${j.title}</div>
          <div class="continue-progress-bar"><div class="continue-progress-fill" style="width:${pct}%"></div></div>
          <div style="font-size:12px;color:var(--text-secondary);margin-top:4px">${pct}% tamamlandı</div>
        </div>
      </div>
    `;
  }).join('');

  openBottomSheet(`
    <h3 style="font-size:18px;font-weight:600;margin-bottom:14px">Benim Yolculuğum</h3>
    ${items}
  `);
}

function showAchievements() {
  const items = ACHIEVEMENTS.map(a => {
    const unlocked = state.achievementsUnlocked.includes(a.id);
    return `
      <div class="achievement-card">
        <div class="achievement-icon ${unlocked ? '' : 'locked'}">${a.icon}</div>
        <div>
          <div class="achievement-title">${a.title}</div>
          <div class="achievement-desc">${a.desc}</div>
        </div>
      </div>
    `;
  }).join('');

  openBottomSheet(`
    <h3 style="font-size:18px;font-weight:600;margin-bottom:14px">Başarılarım</h3>
    ${items}
  `);
}


// --- AI REHBER ---
function renderAI(container) {
  const mainApp = document.querySelector('.main-app');
  const bottomNav = document.querySelector('.bottom-nav');
  if (bottomNav) bottomNav.style.display = 'none';

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%">
      <div style="padding:16px 20px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--border-light)">
        <button class="top-header-btn" onclick="navigateFromAI()">
          <i data-lucide="arrow-left" style="width:20px;height:20px"></i>
        </button>
        <div>
          <div style="font-size:16px;font-weight:600">Çınaraltı Rehber</div>
          <div style="font-size:12px;color:var(--text-secondary)">Çınaraltı içerikleri arasında sana yol göstereyim.</div>
        </div>
      </div>

      <div class="chat-container" id="chat-messages">
        <div class="chat-bubble assistant">
          Merhaba ${state.userName}! 👋 Ben Çınaraltı Rehber. Çınaraltı'nın içerikleri arasında sana yol göstereyim. Hangi konuda yardımcı olabilirim?

          <div class="chat-suggestion-btns">
            <button class="chat-suggestion-btn" onclick="sendAIMessage('Kader hakkında nereden başlamalıyım?')">Kader hakkında</button>
            <button class="chat-suggestion-btn" onclick="sendAIMessage('İman konusunda içerik arıyorum')">İman hakkında</button>
            <button class="chat-suggestion-btn" onclick="sendAIMessage('Namaz konusunda bilgi istiyorum')">Namaz hakkında</button>
          </div>
        </div>
      </div>

      <div class="chat-input-container">
        <input class="chat-input" type="text" placeholder="Bir soru sor..." id="chat-input" onkeydown="if(event.key==='Enter')sendChatMessage()">
        <button class="chat-send-btn" onclick="sendChatMessage()">
          <i data-lucide="send"></i>
        </button>
      </div>
    </div>
  `;
}

function navigateFromAI() {
  const bottomNav = document.querySelector('.bottom-nav');
  if (bottomNav) bottomNav.style.display = '';
  goBack();
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  if (!input || !input.value.trim()) return;
  sendAIMessage(input.value.trim());
  input.value = '';
}

function sendAIMessage(message) {
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;

  // Add user message
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.textContent = message;
  chatMessages.appendChild(userBubble);

  // Find matching AI response
  const lowerMsg = message.toLowerCase();
  let responseKey = 'default';
  for (const key of Object.keys(AI_RESPONSES)) {
    if (key !== 'default' && lowerMsg.includes(key)) {
      responseKey = key;
      break;
    }
  }
  const response = AI_RESPONSES[responseKey];

  // Simulate typing delay
  setTimeout(() => {
    const assistantBubble = document.createElement('div');
    assistantBubble.className = 'chat-bubble assistant';

    // Content cards for recommended items
    const contentCards = response.content.map(id => {
      const item = getContentById(id);
      if (!item) return '';
      return `
        <div class="search-result-item" style="padding:10px 0;border-color:var(--border-light)" onclick="navigateFromAI();openContentDetail('${item.id}')">
          <div class="search-result-icon">${getTypeIcon(item.type)}</div>
          <div class="search-result-info">
            <div class="search-result-title" style="font-size:14px">${item.title}</div>
            <div class="search-result-meta">${item.duration} • ${getTypeLabel(item.type)}</div>
          </div>
        </div>
      `;
    }).join('');

    assistantBubble.innerHTML = `
      ${response.text}
      <div style="margin-top:10px">${contentCards}</div>
      <div class="chat-suggestion-btns" style="margin-top:10px">
        ${response.suggestions.map(s => `
          <button class="chat-suggestion-btn" onclick="sendAIMessage('${s}')">${s}</button>
        `).join('')}
      </div>
    `;

    chatMessages.appendChild(assistantBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    if (window.lucide) lucide.createIcons({ nodes: [assistantBubble] });
  }, 800);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}


// --- VOICE DEMO ---
function openVoiceDemo() {
  const detailHTML = `
    <div class="detail-screen" id="voice-detail">
      <div style="padding:16px 20px;display:flex;align-items:center;gap:12px">
        <button class="top-header-btn" onclick="closeVoiceDemo()">
          <i data-lucide="arrow-left" style="width:20px;height:20px"></i>
        </button>
        <div style="font-size:16px;font-weight:600">Anlat Bana</div>
      </div>
      <div class="voice-screen" id="voice-content">
        <div style="font-size:40px;margin-bottom:16px">🎙️</div>
        <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">Anlat Bana</h2>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:32px;max-width:280px">Bugün öğrendiğin konuyu 60 saniyede anlat.</p>

        <div class="voice-mic" id="voice-mic" onclick="startVoiceRecording()">
          <i data-lucide="mic" style="width:36px;height:36px;color:#fff"></i>
        </div>
        <div class="voice-timer" id="voice-timer">00:00</div>
        <p class="voice-status" id="voice-status">Başlamak için mikrofona dokun</p>
        <span class="demo-badge" style="margin-top:20px">DEMO — Simülasyon</span>
      </div>
    </div>
  `;

  const appRoot = document.getElementById('app-root');
  const div = document.createElement('div');
  div.innerHTML = detailHTML;
  appRoot.appendChild(div.firstElementChild);
  if (window.lucide) lucide.createIcons();
}

function startVoiceRecording() {
  const mic = document.getElementById('voice-mic');
  const timer = document.getElementById('voice-timer');
  const status = document.getElementById('voice-status');
  if (!mic) return;

  mic.classList.add('recording');
  mic.onclick = null;
  status.textContent = 'Dinleniyor...';

  let seconds = 0;
  voiceTimerInterval = setInterval(() => {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    timer.textContent = `${m}:${s}`;
  }, 1000);

  // Simulate 5 second recording
  setTimeout(() => {
    clearInterval(voiceTimerInterval);
    mic.classList.remove('recording');
    status.textContent = 'Analiz ediliyor...';

    setTimeout(() => {
      const voiceContent = document.getElementById('voice-content');
      if (voiceContent) {
        voiceContent.innerHTML = `
          <div class="voice-result">
            <div class="voice-score">%82</div>
            <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">Analiz Tamamlandı</h2>
            <p style="font-size:15px;color:var(--text-secondary);line-height:1.6;margin-bottom:8px">
              Konuyu temel hatlarıyla doğru anlattın.
            </p>
            <p style="font-size:14px;color:var(--accent-dark);line-height:1.5;margin-bottom:24px">
              Tekrar etmeni önerdiğimiz nokta: Kader ve irade arasındaki ilişki.
            </p>
            <button class="btn-primary" style="max-width:280px" onclick="closeVoiceDemo();showToast('✓ Anlat Bana tamamlandı')">
              Tamam
            </button>
            <span class="demo-badge" style="margin-top:16px">DEMO — Simülasyon</span>
          </div>
        `;
      }
    }, 1500);
  }, 5000);
}

function closeVoiceDemo() {
  clearInterval(voiceTimerInterval);
  const voiceDetail = document.getElementById('voice-detail');
  if (voiceDetail) voiceDetail.remove();
}


// =============================================
// SECTION 5: ONBOARDING
// =============================================

function renderOnboarding() {
  const onboardingEl = document.getElementById('onboarding');
  if (!onboardingEl) return;

  onboardingEl.style.display = '';
  onboardingEl.innerHTML = `
    <div class="onboarding-screen">
      <div class="onboarding-step active" id="onboarding-step-1">
        <div class="onboarding-dots">
          <div class="onboarding-dot active"></div>
          <div class="onboarding-dot"></div>
          <div class="onboarding-dot"></div>
        </div>
        <img src="assets/logo.svg" alt="Logo" class="onboarding-logo">
        <h1 class="onboarding-title">ÇINARALTI YOL</h1>
        <p class="onboarding-tagline">İzlemekten yaşamaya.</p>
        <p class="onboarding-subtitle">Çınaraltı'nın sohbetlerini, eğitimlerini ve içeriklerini kendi yolculuğuna dönüştür.</p>
        <button class="btn-primary" onclick="onboardingNext(1)">Başlayalım</button>
      </div>

      <div class="onboarding-step" id="onboarding-step-2">
        <div class="onboarding-dots">
          <div class="onboarding-dot"></div>
          <div class="onboarding-dot active"></div>
          <div class="onboarding-dot"></div>
        </div>
        <h1 class="onboarding-title" style="margin-bottom:4px">Seni hangi konular ilgilendiriyor?</h1>
        <p class="onboarding-subtitle">Birden fazla seçebilirsin.</p>
        <div class="interest-grid" id="interest-grid">
          ${['İman', 'Kur\'an', 'Risale-i Nur', 'İbadet', 'Gençlik', 'Aile', 'Evlilik', 'Siyer', 'Şüpheler', 'İslami İlimler'].map(i => `
            <button class="interest-chip" onclick="toggleInterest(this, '${i}')">${i}</button>
          `).join('')}
        </div>
        <button class="btn-primary" onclick="onboardingNext(2)">Devam Et</button>
      </div>

      <div class="onboarding-step" id="onboarding-step-3">
        <div class="onboarding-dots">
          <div class="onboarding-dot"></div>
          <div class="onboarding-dot"></div>
          <div class="onboarding-dot active"></div>
        </div>
        <h1 class="onboarding-title">Kendine bir başlangıç hedefi seç</h1>
        <p class="onboarding-subtitle">İstediğin zaman değiştirebilirsin.</p>
        <div class="goal-options" id="goal-options">
          <button class="goal-option" onclick="selectGoal(this, 10)">
            <div class="goal-icon">⏱️</div>
            <span>Her gün 10 dakika</span>
          </button>
          <button class="goal-option" onclick="selectGoal(this, 20)">
            <div class="goal-icon">📚</div>
            <span>Her gün 20 dakika</span>
          </button>
          <button class="goal-option" onclick="selectGoal(this, 30)">
            <div class="goal-icon">🎯</div>
            <span>Her gün 30 dakika</span>
          </button>
          <button class="goal-option" onclick="selectGoal(this, 0)">
            <div class="goal-icon">🌿</div>
            <span>Kendi tempom</span>
          </button>
        </div>
        <button class="btn-primary" onclick="completeOnboarding()">Yolculuğa Başla</button>
      </div>
    </div>
  `;
}

function onboardingNext(currentStep) {
  const current = document.getElementById(`onboarding-step-${currentStep}`);
  const next = document.getElementById(`onboarding-step-${currentStep + 1}`);
  if (current) current.classList.remove('active');
  if (next) {
    next.classList.add('active');
    next.style.animation = 'none';
    void next.offsetWidth;
    next.style.animation = '';
  }
}

function toggleInterest(btn, interest) {
  btn.classList.toggle('selected');
  const idx = state.interests.indexOf(interest);
  if (idx > -1) {
    state.interests.splice(idx, 1);
  } else {
    state.interests.push(interest);
  }
}

function selectGoal(btn, minutes) {
  document.querySelectorAll('.goal-option').forEach(o => o.classList.remove('selected'));
  btn.classList.add('selected');
  state.dailyGoal = minutes;
}

function completeOnboarding() {
  state.onboardingCompleted = true;
  saveState();

  const onboardingEl = document.getElementById('onboarding');
  if (onboardingEl) {
    onboardingEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    onboardingEl.style.opacity = '0';
    onboardingEl.style.transform = 'scale(1.03)';
    setTimeout(() => {
      onboardingEl.style.display = 'none';
      startMainApp();
    }, 400);
  }
}


// =============================================
// SECTION 6: APP INITIALIZATION
// =============================================

function startMainApp() {
  const mainApp = document.querySelector('.main-app');
  const bottomNav = document.querySelector('.bottom-nav');
  if (mainApp) mainApp.classList.add('active');
  if (bottomNav) bottomNav.style.display = '';

  currentScreen = 'home';
  navigationStack = [];
  renderScreen('home');
}

function initApp() {
  loadState();

  // Splash screen
  const splash = document.getElementById('splash');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('splash-out');
      setTimeout(() => {
        splash.remove();

        if (!state.onboardingCompleted) {
          renderOnboarding();
        } else {
          document.getElementById('onboarding').style.display = 'none';
          startMainApp();
        }
      }, 500);
    }, 1200);
  }

  // Bottom nav event listeners
  document.querySelectorAll('.nav-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      const screens = ['home', 'discover', 'journeys', 'community', 'profile'];
      navigationStack = [];
      navigateTo(screens[index], null, false);
    });
  });
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
