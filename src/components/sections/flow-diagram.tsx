import {
  MessageCircle,
  Tags,
  UserSearch,
  Users,
  ClipboardCheck,
  Bell,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FlowStep {
  icon: LucideIcon;
  label: string;
  isAi?: boolean;
}

const steps: FlowStep[] = [
  { icon: MessageCircle, label: "İletişim Kanalları" },
  { icon: Tags, label: "Kategorizasyon (AI)", isAi: true },
  { icon: UserSearch, label: "Müşteri Tanımlama" },
  { icon: Users, label: "İş Birimleri" },
  { icon: ClipboardCheck, label: "Görev Yönetim (AI)", isAi: true },
  { icon: Bell, label: "Bildirim Kanalları" },
  { icon: BarChart3, label: "Raporlama (AI)", isAi: true },
];

export function FlowDiagram() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4">
          ● UÇTAN UCA OTOMASYON
        </span>
        <h2 className="font-headline font-extrabold text-4xl">
          Mobil, platform bağımsız, tam zamanında
        </h2>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 py-12 px-4">
        <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 z-0" />

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="z-10 flex flex-col items-center group">
              <div
                className={`glass-card ${step.isAi ? "ai-card" : ""} p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className="text-primary" size={24} />
              </div>
              <span className="text-xs font-bold font-headline uppercase tracking-tighter text-center">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
