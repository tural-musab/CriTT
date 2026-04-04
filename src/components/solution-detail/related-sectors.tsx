import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Sector {
  title: string;
  href: string;
}

interface RelatedSectorsProps {
  sectors: Sector[];
}

export function RelatedSectors({ sectors }: RelatedSectorsProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="mb-12">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● DİĞER SEKTÖRLER
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {sectors.map((sector) => (
          <Link
            key={sector.title}
            href={sector.href}
            className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 flex items-center justify-between"
          >
            <span className="font-headline font-bold text-on-surface">{sector.title}</span>
            <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
}
