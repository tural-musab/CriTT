"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Ürün", href: "/ozellikler" },
  { label: "Çözümler", href: "/cozumler" },
  { label: "Fiyatlandırma", href: "/fiyatlandirma" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 glass-card !rounded-none border-b border-outline-variant/20 !border-t-0 !border-x-0">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={theme === "dark" ? "/images/logo/critt-logo-white.svg" : "/images/logo/critt-logo.svg"}
            alt="CriTT CRM"
            width={100}
            height={28}
            priority
          />
        </Link>

        <div className="hidden md:flex gap-8 font-headline font-medium text-sm tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <span className="text-sm font-medium text-on-surface-variant">TR | EN</span>
          <Link href="/iletisim" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-headline font-bold text-sm shadow-lg active:scale-95 duration-200 transition-all">
            Demo Talep Et
          </Link>
        </div>
      </div>
    </nav>
  );
}
