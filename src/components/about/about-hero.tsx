export function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block py-1 px-4 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase mb-6">
          ● HAKKIMIZDA
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-8 font-headline">
          Kritik süreçlere, teknoloji{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-fixed-dim">
            dönüşümü
          </span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          CriTT, kişi ve kurumlarla ilişkilerde kritik öneme sahip süreçleri
          uçtan uca yönetmek üzere tasarlanmış yapay zekâ destekli yenilikçi bir
          CRM ve hizmet ekosistemidir.
        </p>
      </div>

      {/* İsim Anlamı */}
      <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
        <div className="glass-card p-8 rounded-3xl text-center">
          <div className="text-4xl font-extrabold font-headline text-primary mb-3">Crit</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Stratejik değer taşıyan işlevleri ve bütüncül yaklaşımı simgeler.
          </p>
        </div>

        <div className="text-center">
          <div className="text-6xl font-extrabold font-headline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CriTT
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl text-center">
          <div className="text-4xl font-extrabold font-headline text-secondary mb-3">TT</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Technology Transformation — Teknoloji Dönüşümü kavramını temsil eder.
          </p>
        </div>
      </div>
    </section>
  );
}
