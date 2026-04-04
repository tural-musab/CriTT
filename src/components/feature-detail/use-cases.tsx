import type { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  sector: string;
  scenario: string;
}

interface UseCasesProps {
  cases: UseCase[];
}

export function UseCases({ cases }: UseCasesProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● KULLANIM SENARYOLARI
        </span>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
          Her Sektörde Çözüm
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((uc) => {
          const Icon = uc.icon;
          return (
            <div
              key={uc.sector}
              className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold font-headline">{uc.sector}</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{uc.scenario}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
