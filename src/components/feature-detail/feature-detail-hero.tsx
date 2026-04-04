import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface FeatureDetailHeroProps {
  badge: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  icon: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
}

export function FeatureDetailHero({
  badge,
  title,
  highlightWord,
  subtitle,
  icon: Icon,
  imageSrc,
  imageAlt,
}: FeatureDetailHeroProps) {
  const parts = title.split(highlightWord);

  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6 border border-primary/15">
            <Icon size={14} />
            {badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6 font-headline leading-[1.1]">
            {parts[0]}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-fixed-dim">
              {highlightWord}
            </span>
            {parts[1] || ""}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/iletisim" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-headline font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
              Demo Talep Et
            </Link>
            <button className="glass-card px-8 py-4 rounded-full font-headline font-bold border border-white/40 hover:bg-white/40 transition-all active:scale-95">
              Nasıl Çalışır?
            </button>
          </div>
        </div>

        {imageSrc && (
          <div className="relative">
            <div className="ai-card rounded-3xl p-1 overflow-hidden bg-white/55 backdrop-blur-[20px]">
              <Image
                src={imageSrc}
                alt={imageAlt || "Feature illustration"}
                width={640}
                height={400}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
