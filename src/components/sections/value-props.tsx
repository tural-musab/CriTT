import { Link2, Sparkles, Settings, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
  isAi?: boolean;
}

const cards: ValueCard[] = [
  {
    icon: Link2,
    title: "Bütünleşik İletişim",
    description: "Tüm kanallardan gelen talepleri tek bir merkezde toplayın ve yönetin.",
  },
  {
    icon: Sparkles,
    title: "Yapay Zeka Destekli",
    description: "Otomatik duygu analizi ve akıllı etiketleme ile iş yükünüzü hafifletin.",
    isAi: true,
  },
  {
    icon: Settings,
    title: "Uçtan Uca Otomasyon",
    description: "Tekrarlayan işleri robotlara devredin, stratejiye odaklanın.",
  },
  {
    icon: BookOpen,
    title: "Kurumsal Hafıza",
    description: "Hiçbir etkileşimi unutmayın, kurumsal bilginizi dijitalde koruyun.",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4">
          ● NEDEN CRITT?
        </span>
        <h2 className="font-headline font-extrabold text-4xl leading-tight max-w-2xl">
          Merkezi görev ve iletişim platformu, uçtan uca tam otomasyon
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`glass-card ${card.isAi ? "ai-card" : ""} p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div
                className={`${card.isAi ? "bg-primary/10" : "bg-surface-container-high"} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary`}
              >
                <Icon size={28} />
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
