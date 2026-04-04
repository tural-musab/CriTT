import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  isAi?: boolean;
}

interface HowItWorksProps {
  steps: Step[];
}

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● NASIL ÇALIŞIR?
        </span>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
          3 Adımda Akıllı İletişim
        </h2>
      </div>

      <div className="relative">
        <div className="absolute hidden md:block top-20 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-headline font-bold text-sm mb-6 relative z-10">
                  {i + 1}
                </div>
                <div
                  className={`${step.isAi ? "ai-card bg-white/55 backdrop-blur-[20px]" : "glass-card"} p-8 rounded-3xl`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.isAi ? "bg-gradient-to-br from-primary to-secondary text-white" : "bg-primary/10 text-primary"} flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold font-headline mb-3">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
