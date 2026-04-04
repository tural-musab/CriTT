const categories = [
  { label: "İletişim & Entegrasyon", active: true },
  { label: "Yapay Zeka (AI)" },
  { label: "Görev & Süreç" },
  { label: "Müşteri & Veri" },
  { label: "Operasyonel Araçlar" },
];

export function FeaturesHero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block py-1 px-4 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase mb-6">
          ● PLATFORM ÖZELLİKLERİ
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-8 font-headline">
          Basit, bütünleşik,{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-fixed-dim">
            kabiliyetli
          </span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
          Operasyonel verimliliğinizi yapay zeka ve bütünleşik iletişim
          araçlarıyla yeniden tanımlayın. CriTT CRM, iş süreçlerinizi tek bir
          merkezden yönetmeniz için tasarlanmış en gelişmiş ekosistemdir.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`glass-card px-6 py-3 font-headline ${
              cat.active
                ? "text-primary font-bold shadow-md border-primary/20"
                : "text-on-surface-variant font-medium hover:bg-surface-container-high transition-all"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
