import {
  LayoutDashboard,
  ShieldCheck,
  FolderOpen,
  Smartphone,
  CalendarDays,
  Megaphone,
  Package,
  Coffee,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface OpTool {
  icon: LucideIcon;
  label: string;
}

const tools: OpTool[] = [
  { icon: LayoutDashboard, label: "Raporlama & Dashboard" },
  { icon: ShieldCheck, label: "Yetkilendirme" },
  { icon: FolderOpen, label: "Dosya Yönetimi" },
  { icon: Smartphone, label: "Mobil Uygulama" },
  { icon: CalendarDays, label: "Takvim" },
  { icon: Megaphone, label: "Satış/Pazarlama" },
  { icon: Package, label: "Ürün Yönetimi" },
  { icon: Coffee, label: "Mola Yönetimi" },
];

export function OperationalToolsSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● OPERASYONEL ARAÇLAR
        </span>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
          Operasyonlarınızı Dijitalleştirin
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.label}
              className="glass-card p-6 text-center hover:bg-white transition-colors cursor-default"
            >
              <Icon className="text-primary mx-auto mb-3" size={28} />
              <p className="font-bold text-sm font-headline">{tool.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
