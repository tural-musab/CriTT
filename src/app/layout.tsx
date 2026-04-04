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
  title: "CriTT CRM | Akıllı İletişim, Güçlü Yönetim",
  description:
    "Kişi ve kurumlarla ilişkilerde kritik öneme sahip süreçleri uçtan uca yönetmek üzere tasarlanmış yapay zekâ destekli yenilikçi CRM ve hizmet ekosistemi.",
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
        <ThemeProvider>
          <Header />
          <main className="dot-grid">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
