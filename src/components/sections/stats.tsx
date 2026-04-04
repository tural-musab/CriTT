const stats = [
  { value: "%20+", label: "Ticket Otomasyon" },
  { value: "31+", label: "Dil Desteği" },
  { value: "7/24", label: "Kesintisiz Hizmet" },
  { value: "3x", label: "Verimlilik Artışı" },
];

export function Stats() {
  return (
    <section className="py-24 px-8 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="glass-card p-10 rounded-3xl text-center border-none shadow-lg"
          >
            <div className="font-headline font-extrabold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <p className="text-on-surface-variant font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.05)_0%,_transparent_70%)] pointer-events-none" />
    </section>
  );
}
