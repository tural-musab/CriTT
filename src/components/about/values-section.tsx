import { Sparkles, Layers, Heart, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Sparkles,
    title: "Yenilikçilik",
    description: "Yapay zeka destekli sürekli gelişim ve inovasyon.",
  },
  {
    icon: Layers,
    title: "Bütünleşik Yaklaşım",
    description: "Uçtan uca çözüm, parçalı değil entegre platform.",
  },
  {
    icon: Heart,
    title: "Müşteri Odaklılık",
    description: "Her ölçekten işletmeye özelleştirilebilir platform.",
  },
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Veri güvenliği, KVKK uyumu ve tam şeffaflık.",
  },
];

export function ValuesSection() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● DEĞERLERİMİZ
        </span>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
          Bizi biz yapan değerler
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold font-headline mb-3">{value.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
