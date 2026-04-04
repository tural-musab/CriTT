import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CriTT CRM | Yapay Zeka Destekli CRM Platformu",
    template: "%s — CriTT CRM",
  },
  description:
    "CriTT, kişi ve kurumlarla ilişkilerde kritik süreçleri uçtan uca yönetmek üzere tasarlanmış yapay zeka destekli CRM ve hizmet ekosistemidir. Çağrı merkezi, WhatsApp, AI sesli ajanlar, iş akışı otomasyonu.",
  keywords: [
    "CRM",
    "yapay zeka CRM",
    "AI CRM",
    "çağrı merkezi yazılımı",
    "müşteri ilişkileri yönetimi",
    "WhatsApp entegrasyonu",
    "iş akışı otomasyonu",
    "ticket yönetimi",
    "bilet yönetimi",
    "CriTT",
    "Türkiye CRM",
  ],
  metadataBase: new URL("https://critt.com.tr"),
  openGraph: {
    title: "CriTT CRM | Yapay Zeka Destekli CRM Platformu",
    description:
      "Akıllı iletişim, güçlü yönetim. 25+ entegre modül, AI sesli ajanlar, 7/24 kesintisiz hizmet.",
    url: "https://critt.com.tr",
    siteName: "CriTT CRM",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CriTT CRM | Yapay Zeka Destekli CRM",
    description: "Akıllı iletişim, güçlü yönetim. 25+ entegre modül.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CriTT CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Yapay zeka destekli CRM ve hizmet ekosistemi. Çağrı merkezi, WhatsApp, AI sesli ajanlar, iş akışı otomasyonu.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    description: "Demo için iletişime geçin",
  },
  provider: {
    "@type": "Organization",
    name: "CriTT",
    url: "https://critt.com.tr",
    email: "info@critt.com.tr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressRegion: "Mecidiyeköy",
      addressCountry: "TR",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}
    >
      <body suppressHydrationWarning className="font-body mesh-bg min-h-screen antialiased">
        {/* JSON-LD structured data — static trusted content, no user input */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Header />
          <main className="dot-grid">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
