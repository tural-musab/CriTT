import Image from "next/image";

interface SolutionDetailHeroProps {
  badge: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export function SolutionDetailHero({
  badge,
  title,
  highlightWord,
  subtitle,
  imageSrc,
  imageAlt,
}: SolutionDetailHeroProps) {
  const parts = title.split(highlightWord);

  return (
    <section className="bg-surface-container text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-tertiary-fixed font-bold text-xs tracking-widest uppercase mb-6 border border-white/10">
            ● {badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-headline leading-[1.1]">
            {parts[0]}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed-dim">
              {highlightWord}
            </span>
            {parts[1] || ""}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-headline font-bold shadow-xl shadow-primary/30 hover:opacity-90 transition-all active:scale-95">
              Demo Talep Et
            </button>
            <button className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-headline font-bold hover:bg-white/10 transition-all active:scale-95">
              Çözümleri İncele
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-1 rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={640}
              height={400}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
