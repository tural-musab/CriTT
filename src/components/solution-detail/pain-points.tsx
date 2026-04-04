import type { LucideIcon } from "lucide-react";

interface PainPoint {
  icon: LucideIcon;
  text: string;
}

interface PainPointsProps {
  points: PainPoint[];
}

export function PainPoints({ points }: PainPointsProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● SEKTÖR SORUNLARI
        </span>
        <h2 className="text-3xl font-bold text-on-surface tracking-tight font-headline">
          Sektörün Karşılaştığı Zorluklar
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.text}
              className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3 hover:-translate-y-1 transition-all"
            >
              <Icon className="text-red-400 shrink-0" size={20} />
              <span className="text-sm font-medium text-on-surface">{point.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
