const stats = [
  { value: "6+", label: "Sektör", sub: "Sektöre özel çözüm" },
  { value: "25+", label: "Modül", sub: "Entegre özellik" },
  { value: "7/24", label: "AI Destek", sub: "Kesintisiz yapay zeka" },
];

export function SolutionsStats() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="glass-card p-10 rounded-3xl text-center border-none shadow-lg"
          >
            <div className="font-headline font-extrabold text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <p className="text-on-surface font-headline font-bold text-lg">{stat.label}</p>
            <p className="text-on-surface-variant text-sm mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
