import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

        <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6 relative z-10">
          CriTT ile tanışmaya hazır mısınız?
        </h2>
        <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto relative z-10">
          Akıllı iletişim ve güçlü yönetim için hemen demo talep edin.
        </p>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <Link href="/iletisim" className="bg-white text-primary px-10 py-5 rounded-full font-headline font-extrabold text-lg shadow-xl hover:scale-105 transition-all">
            Demo Talep Et
          </Link>
          <button className="border-2 border-white/40 text-white px-10 py-5 rounded-full font-headline font-extrabold text-lg hover:bg-white/10 transition-all">
            Bize Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
}
