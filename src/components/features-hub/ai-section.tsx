import Link from "next/link";
import { Mic, Tags, TrendingUp, LineChart, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AiFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

const aiFeatures: AiFeature[] = [
  {
    icon: Mic,
    title: "AI Sesli Ajanlar",
    description: "Doğal dil işleme ile donatılmış sesli botlar, rutin talepleri insan müdahalesi olmadan çözer.",
    href: "/ozellikler/ai-sesli-ajanlar",
  },
  {
    icon: Tags,
    title: "AI Kategorizasyon",
    description: "Gelen tüm talepleri otomatik olarak analiz eder, önem sırasına göre ilgili departmanlara atar.",
  },
  {
    icon: TrendingUp,
    title: "Konuşma Zekası",
    description: "Müşteri görüşmelerindeki duygu durumunu ve anahtar kelimeleri tespit ederek satış stratejinizi optimize eder.",
  },
  {
    icon: LineChart,
    title: "AI Raporlama",
    description: "Karmaşık verileri anlamlı içgörülere dönüştürür ve gelecekteki trendleri tahmin eder.",
  },
  {
    icon: Bot,
    title: "Otomatik Mesaj Üreticileri",
    description: "Müşteri bağlamına uygun en ideal yanıtları saniyeler içinde taslak olarak hazır hale getirir.",
  },
];

export function AiSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase block mb-4">
            ● YAPAY ZEKA (AI)
          </span>
          <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
            Akıllı Otomasyon, Gerçek Zamanlı Zeka
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature) => {
            const Icon = feature.icon;
            const cardContent = (
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
            const className = "ai-card p-10 flex flex-col justify-between min-h-[320px] rounded-[20px] bg-white/65 backdrop-blur-[20px] hover:-translate-y-2 transition-all duration-300";
            return feature.href ? (
              <Link key={feature.title} href={feature.href} className={className}>
                {cardContent}
              </Link>
            ) : (
              <div key={feature.title} className={className}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
