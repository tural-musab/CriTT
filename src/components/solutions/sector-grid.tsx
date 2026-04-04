import Link from "next/link";
import Image from "next/image";
import {
  Landmark,
  TrendingUp,
  Shield,
  ShoppingBag,
  Zap,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Sector {
  icon: LucideIcon;
  title: string;
  description: string;
  modules: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const sectors: Sector[] = [
  {
    icon: Landmark,
    title: "Kamu Kurumları & Belediyeler",
    description:
      "Vatandaş başvurularını merkezi takip, departmanlar arası koordinasyon, saha ekipleri yönetimi ve tam şeffaflık.",
    modules: ["Bilet Yönetimi", "İş Akışı", "WhatsApp", "AI Kategorizasyon", "Saha & Mobil"],
    imageSrc:
      "/images/sector-kamu.webp",
    imageAlt: "Kamu Kurumları",
    href: "/cozumler/kamu-belediye",
  },
  {
    icon: TrendingUp,
    title: "Finans & Bankacılık",
    description:
      "Yüksek hacimli müşteri taleplerini yönetin, uyumluluk gereksinimlerini karşılayın, 7/24 AI destekli hizmet sunun.",
    modules: ["AI Sesli Ajanlar", "Konuşma Zekası", "Yetkilendirme", "SLA Yönetimi", "Raporlama"],
    imageSrc:
      "/images/sector-finans.webp",
    imageAlt: "Finans & Bankacılık",
    href: "/cozumler/finans-bankacilik",
  },
  {
    icon: Shield,
    title: "Sigorta Şirketleri",
    description:
      "Hasar bildirimi, poliçe süreçleri ve saha tespit ekiplerini tek platformda koordine edin.",
    modules: ["Bilet Yönetimi", "Dinamik Formlar", "Mobil Uygulama", "İş Akışı", "Otomatik Arama"],
    imageSrc:
      "/images/sector-sigorta.webp",
    imageAlt: "Sigorta Şirketleri",
    href: "/cozumler/sigorta",
  },
  {
    icon: ShoppingBag,
    title: "Perakende & E-Ticaret",
    description:
      "Reklam lead'lerini takip edin, sipariş süreçlerini yönetin, WhatsApp üzerinden müşteri deneyimi sunun.",
    modules: ["Veri Toplama", "WhatsApp", "Satış & Pazarlama", "AI Sesli Ajanlar", "Toplu İletişim"],
    imageSrc:
      "/images/sector-perakende.webp",
    imageAlt: "Perakende & E-Ticaret",
    href: "/cozumler/perakende-eticaret",
  },
  {
    icon: Zap,
    title: "Enerji & Altyapı",
    description:
      "Arıza bildirimi, saha müdahale koordinasyonu ve planlı kesinti bilgilendirmelerini otomatikleştirin.",
    modules: ["Bilet Yönetimi", "İş Akışı", "Saha & Mobil", "AI Kategorizasyon", "Toplu İletişim"],
    imageSrc:
      "/images/sector-enerji.webp",
    imageAlt: "Enerji & Altyapı",
    href: "/cozumler/enerji-altyapi",
  },
  {
    icon: Headphones,
    title: "Çağrı Merkezleri & BPO",
    description:
      "Yüksek hacimli çağrıları yönetin, operatör performansını izleyin, kalite kontrolü AI ile otomatikleştirin.",
    modules: ["Çağrı Merkezi", "AI Sesli Ajanlar", "Konuşma Zekası", "Mola Yönetimi", "Raporlama"],
    imageSrc:
      "/images/sector-cagri.webp",
    imageAlt: "Çağrı Merkezleri & BPO",
    href: "/cozumler/cagri-merkezi-bpo",
  },
];

export function SectorGrid() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector) => {
          const Icon = sector.icon;
          return (
            <Link
              key={sector.title}
              href={sector.href}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500 block"
            >
              <div className="relative h-80">
                <Image
                  src={sector.imageSrc}
                  alt={sector.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-headline font-bold text-xl">
                    {sector.title}
                  </h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.modules.map((mod) => (
                    <span
                      key={mod}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/10 text-slate-200 backdrop-blur-sm border border-white/10"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
