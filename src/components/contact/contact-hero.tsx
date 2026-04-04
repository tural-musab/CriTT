export function ContactHero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block py-1 px-4 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase mb-6">
          ● İLETİŞİM
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-8 font-headline">
          Bize{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-fixed-dim">
            Ulaşın
          </span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Sorularınız, demo talepleriniz ve iş birliği önerileriniz için bize
          yazın.
        </p>
      </div>
    </section>
  );
}
