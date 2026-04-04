const sections = [
  {
    title: "1. Veri Sorumlusu Kimliği",
    content:
      "CriTT Teknoloji A.Ş. (\"CriTT\") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz. Şirket merkezi: Mecidiyeköy, Büyükdere Cad. No: 123, İstanbul, Türkiye.",
  },
  {
    title: "2. İşlenen Kişisel Veriler",
    content:
      "Kimlik bilgileri (ad, soyad, T.C. kimlik numarası), iletişim bilgileri (e-posta, telefon, adres), müşteri işlem bilgileri (hizmet kullanım verileri, talep ve şikayet kayıtları), dijital iz bilgileri (IP adresi, çerez verileri, oturum bilgileri) ve iletişim kayıtları (çağrı ses kayıtları, mesaj içerikleri) işlenebilmektedir.",
  },
  {
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    content:
      "Kişisel verileriniz; hizmet sunumu ve sözleşme yükümlülüklerinin yerine getirilmesi, müşteri iletişimi ve destek hizmetleri, yasal yükümlülüklerin karşılanması, hizmet kalitesinin iyileştirilmesi ve açık rızanıza istinaden pazarlama faaliyetleri amaçlarıyla işlenmektedir.",
  },
  {
    title: "4. Kişisel Verilerin Aktarılması",
    content:
      "Kişisel verileriniz, yasal düzenlemelere uygun olarak; iş ortaklarımıza, bulut hizmet sağlayıcılarına (Türkiye merkezli veri merkezleri), yasal zorunluluk halinde yetkili kamu kurum ve kuruluşlarına aktarılabilmektedir.",
  },
  {
    title: "5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi",
    content:
      "Kişisel verileriniz; web sitemiz, mobil uygulamamız, çağrı merkezimiz ve fiziksel ofisimiz aracılığıyla toplanmaktadır. Hukuki sebepler: sözleşmenin kurulması ve ifası, meşru menfaat, yasal yükümlülük ve açık rıza.",
  },
  {
    title: "6. Kişisel Veri Sahibinin Hakları",
    content:
      "KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde/dışında aktarıldığı üçüncü kişileri bilme, eksik/yanlış işlenmiş verilerin düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, işlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz.",
  },
  {
    title: "7. Çerez (Cookie) Politikası",
    content:
      "Web sitemizde zorunlu çerezler (oturum yönetimi), analitik çerezler (site kullanım istatistikleri) ve pazarlama çerezleri (hedefli reklam) kullanılmaktadır. Çerez tercihlerinizi tarayıcı ayarlarınızdan veya çerez onay panelimizden yönetebilirsiniz.",
  },
  {
    title: "8. Veri Güvenliği Tedbirleri",
    content:
      "Kişisel verileriniz; SSL/TLS şifreleme, erişim kontrolleri ve yetkilendirme mekanizmaları, düzenli güvenlik denetimleri ve penetrasyon testleri, Türkiye merkezli veri merkezlerinde yedekli saklama ve çalışan farkındalık eğitimleri ile korunmaktadır.",
  },
  {
    title: "9. İletişim",
    content:
      "Kişisel verilerinize ilişkin tüm taleplerinizi kvkk@critt.com.tr adresine veya Mecidiyeköy, Büyükdere Cad. No: 123, İstanbul adresine yazılı olarak iletebilirsiniz. Talepleriniz en geç 30 gün içinde yanıtlanacaktır.",
  },
];

export function PrivacyContent() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-12">
      <div className="glass-card p-8 md:p-12 rounded-3xl">
        <p className="text-sm text-on-surface-variant mb-10">
          Son güncelleme: Nisan 2026
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold font-headline text-on-surface mb-4">
                {section.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant/20">
          <p className="text-xs text-on-surface-variant">
            Bu metin bilgilendirme amaçlıdır ve yasal danışmanlık yerine geçmez.
            Son halini hukuk ekibinizle birlikte doğrulamanızı öneririz.
          </p>
        </div>
      </div>
    </section>
  );
}
