interface Stat {
  value: string;
  label: string;
}

interface FeatureStatsProps {
  stats: Stat[];
}

export function FeatureStats({ stats }: FeatureStatsProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="glass-card p-8 rounded-3xl text-center border-none shadow-lg"
          >
            <div className="font-headline font-extrabold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <p className="text-on-surface-variant font-medium text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
