"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Ürün", href: "/ozellikler" },
  { label: "Çözümler", href: "/cozumler" },
  { label: "Fiyatlandırma", href: "/fiyatlandirma" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isEN = pathname.startsWith("/en");

  return (
    <nav className="fixed top-0 w-full z-50 glass-card !rounded-none border-b border-outline-variant/20 !border-t-0 !border-x-0">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {mounted ? (
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/images/logo/critt-logo-white.svg"
                  : "/images/logo/critt-logo.svg"
              }
              alt="CriTT CRM"
              width={100}
              height={28}
              priority
            />
          ) : (
            <div className="w-[100px] h-[28px]" />
          )}
        </Link>

        {/* Desktop Nav */}
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center gap-1 text-sm font-medium">
            <Link
              href="/"
              className={!isEN ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary transition-colors"}
            >
              TR
            </Link>
            <span className="text-on-surface-variant/40 select-none">|</span>
            <Link
              href="/en"
              className={isEN ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary transition-colors"}
            >
              EN
            </Link>
          </div>
          <Link
            href="/iletisim"
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-headline font-bold text-sm shadow-lg active:scale-95 duration-200 transition-all"
          >
            Demo Talep Et
          </Link>
        </div>

        {/* Mobile: ThemeToggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="w-9 h-9 rounded-full flex items-center justify-center glass-card border-none hover:scale-110 active:scale-95 transition-all"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X size={18} className="text-on-surface" />
            ) : (
              <Menu size={18} className="text-on-surface" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-card !rounded-none border-t border-outline-variant/20 px-6 py-5 flex flex-col"
        >
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline font-medium text-base py-3 border-b border-outline-variant/10 last:border-b-0 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary transition-colors"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-outline-variant/10">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className={!isEN ? "text-primary font-bold" : "text-on-surface-variant"}>TR</Link>
              <span className="text-on-surface-variant/40">|</span>
              <Link href="/en" className={isEN ? "text-primary font-bold" : "text-on-surface-variant"}>EN</Link>
            </div>
            <Link
              href="/iletisim"
              className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-full font-headline font-bold text-sm shadow-lg active:scale-95 transition-all"
            >
              Demo Talep Et
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
