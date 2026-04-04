import type { LucideIcon } from "lucide-react";

interface SubFeature {
  icon: LucideIcon;
  title: string;
  points: string[];
}

interface SubFeaturesProps {
  features: SubFeature[];
}

export function SubFeatures({ features }: SubFeaturesProps) {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase block mb-4">
            ● DETAYLI ÖZELLİKLER
          </span>
          <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
            Güçlü Yetenekler
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="ai-card p-10 rounded-[20px] bg-white/65 backdrop-blur-[20px] flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-headline mb-6">{feature.title}</h3>
                <ul className="space-y-3 flex-1">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-on-surface-variant text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
