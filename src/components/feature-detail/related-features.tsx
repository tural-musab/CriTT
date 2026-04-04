import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface RelatedFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface RelatedFeaturesProps {
  features: RelatedFeature[];
}

export function RelatedFeatures({ features }: RelatedFeaturesProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="mb-12">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● İLGİLİ ÖZELLİKLER
        </span>
        <h2 className="text-3xl font-bold text-on-surface tracking-tight font-headline">
          Birlikte Daha Güçlü
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.title}
              href={feature.href}
              className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold font-headline mb-2">{feature.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4">{feature.description}</p>
              <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Detaylı İncele <ArrowRight size={14} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
