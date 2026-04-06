import Link from "next/link";
import { Share2, Globe } from "lucide-react";

const productLinks = [
  { label: "Özellikler", href: "/ozellikler" },
  { label: "Yapay Zeka", href: "/ozellikler/ai-sesli-ajanlar" },
  { label: "Entegrasyonlar", href: "/ozellikler/iletisim-kanallari" },
  { label: "Fiyatlandırma", href: "/fiyatlandirma" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "İletişim", href: "/iletisim" },
];

const legalLinks = [
  { label: "Gizlilik Politikası", href: "/kvkk" },
  { label: "KVKK", href: "/kvkk" },
  { label: "Çerez Politikası", href: "/kvkk" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-on-surface-variant pt-20 pb-10 px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="text-2xl font-black text-on-surface mb-6 font-headline">CriTT</div>
          <p className="text-sm leading-relaxed mb-6">
            Akıllı iletişim, güçlü yönetim. Uçtan uca otomasyon ve yapay zeka
            ile iş süreçlerinizi modernize edin.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
            >
              <Share2 size={16} />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">
            Ürün
          </h4>
          <ul className="space-y-4 text-sm">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">
            Şirket
          </h4>
          <ul className="space-y-4 text-sm">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">
            Bize Ulaşın
          </h4>
          <p className="text-sm mb-4">Mecidiyeköy, İstanbul</p>
          <p className="text-sm mb-4">info@critt.com.tr</p>
          <p className="text-sm text-primary font-bold">+90 (212) 555 00 00</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>info@critt.com.tr &copy; 2026 CriTT. Akıllı iletişim, güçlü yönetim.</p>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-on-surface transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
