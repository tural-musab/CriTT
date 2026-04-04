import Image from "next/image";
import Link from "next/link";
import { Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-tertiary-fixed-dim bg-clip-text text-transparent">
              Akıllı
            </span>{" "}
            iletişim,
            <br />
            güçlü yönetim
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Kişi ve kurumlarla ilişkilerde kritik öneme sahip süreçleri uçtan
            uca yönetmek üzere tasarlanmış yapay zekâ destekli yenilikçi CRM ve
            hizmet ekosistemi.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/iletisim" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-headline font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
              Demo Talep Et
            </Link>
            <button className="glass-card px-8 py-4 rounded-full font-headline font-bold border border-white/40 hover:bg-white/40 transition-all active:scale-95">
              Ürünü Keşfet
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card rounded-[2rem] p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <Image
              src="/images/hero-dashboard.webp"
              alt="CRM Dashboard Mockup"
              width={640}
              height={400}
              className="w-full h-auto rounded-2xl shadow-inner"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card ai-card p-6 rounded-2xl max-w-[240px]">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="text-primary" size={24} />
              <span className="text-sm font-bold font-headline">AI Analizi</span>
            </div>
            <p className="text-xs text-on-surface-variant font-medium">
              Müşteri memnuniyeti son 24 saatte %14 arttı.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
