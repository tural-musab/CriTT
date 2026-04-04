interface FlowStep {
  label: string;
  isAi?: boolean;
}

interface ScenarioFlowProps {
  title: string;
  steps: FlowStep[];
}

export function ScenarioFlow({ title, steps }: ScenarioFlowProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● ÖRNEK SENARYO
        </span>
        <h2 className="text-3xl font-bold text-on-surface tracking-tight font-headline">
          {title}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute hidden md:block top-8 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center flex-1 relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold text-sm mb-4 ${
                  step.isAi
                    ? "bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30"
                    : "bg-primary/80"
                }`}
              >
                {i + 1}
              </div>
              <div
                className={`${step.isAi ? "ai-card bg-white/55 backdrop-blur-[20px]" : "glass-card"} p-4 rounded-2xl w-full`}
              >
                <p className="text-xs font-medium text-on-surface leading-relaxed">
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
