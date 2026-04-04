import { AlertTriangle, Sparkles } from "lucide-react";

interface ProblemSolutionProps {
  problems: string[];
  solutions: string[];
}

export function ProblemSolution({ problems, solutions }: ProblemSolutionProps) {
  return (
    <section className="max-w-5xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl border-l-4 border-l-red-400/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <AlertTriangle className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-bold font-headline">Mevcut Sorunlar</h3>
          </div>
          <ul className="space-y-3">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3 text-on-surface-variant text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="ai-card p-8 rounded-3xl bg-white/55 backdrop-blur-[20px] border-l-4 border-l-primary/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold font-headline">CriTT AI Çözümü</h3>
          </div>
          <ul className="space-y-3">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3 text-on-surface-variant text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
