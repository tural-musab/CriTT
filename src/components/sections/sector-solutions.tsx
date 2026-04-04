import Image from "next/image";

const sectors = [
  {
    title: "Kamu",
    alt: "Kamu Sektörü",
    src: "/images/sector-kamu.webp",
  },
  {
    title: "Finans",
    alt: "Finans Sektörü",
    src: "/images/sector-finans.webp",
  },
  {
    title: "Sigorta",
    alt: "Sigorta Sektörü",
    src: "/images/sector-sigorta.webp",
  },
  {
    title: "Perakende",
    alt: "Perakende Sektörü",
    src: "/images/sector-perakende.webp",
  },
  {
    title: "Enerji",
    alt: "Enerji Sektörü",
    src: "/images/sector-enerji.webp",
  },
  {
    title: "Çağrı Merkezleri",
    alt: "Çağrı Merkezleri",
    src: "/images/sector-cagri.webp",
  },
];

export function SectorSolutions() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4">
          ● SEKTÖREL ÇÖZÜMLER
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector) => (
          <div
            key={sector.title}
            className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-xl"
          >
            <Image
              src={sector.src}
              alt={sector.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8 transition-colors group-hover:bg-primary/40">
              <h4 className="text-white font-headline font-bold text-2xl">
                {sector.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
