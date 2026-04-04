import Link from "next/link";

export function PricingCta() {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-32">
      <div className="bg-gradient-to-br from-primary to-secondary rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]" />

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10 font-headline">
          Doğru planı birlikte belirleyelim
        </h2>
        <p className="text-lg text-indigo-100 mb-12 max-w-2xl mx-auto relative z-10">
          Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümü sunmak için hazır.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
          <Link href="/iletisim" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl font-headline">
            Demo Talep Et
          </Link>
          <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors font-headline">
            Bize Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
}
