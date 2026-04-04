import type { LucideIcon } from "lucide-react";

interface SolutionModule {
  icon: LucideIcon;
  title: string;
  description: string;
  isAi?: boolean;
}

interface SolutionModulesProps {
  modules: SolutionModule[];
}

export function SolutionModules({ modules }: SolutionModulesProps) {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
            ● CRİTT ÇÖZÜMLERİ
          </span>
          <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
            Sektöre Özel Modüller
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className={`${mod.isAi ? "ai-card bg-white/65 backdrop-blur-[20px]" : "glass-card"} p-6 rounded-[20px] hover:-translate-y-2 transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${mod.isAi ? "bg-gradient-to-br from-primary to-secondary text-white" : "bg-primary/10 text-primary"} flex items-center justify-center mb-4`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-bold font-headline mb-2">{mod.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
