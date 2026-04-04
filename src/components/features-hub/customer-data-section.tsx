import Image from "next/image";

const customerFeatures = [
  {
    title: "Müşteri / Vatandaş Yönetimi",
    description: "Tüm iletişim geçmişini, demografik bilgileri ve etkileşim puanlarını tek bir profilde birleştirin.",
  },
  {
    title: "Kurumsal Hafıza",
    description: "Personel değişikliklerinden etkilenmeyen, kurumunuzun tüm geçmiş etkileşimlerini saklayan güvenli bir depo.",
  },
  {
    title: "Veri Toplama",
    description: "Farklı kaynaklardan gelen verileri otomatik olarak normalize edin ve temizleyin.",
  },
  {
    title: "Akıllı Kaynak Planlama",
    description: "Eldeki verileri kullanarak iş gücü ve envanter planlamasını en verimli şekilde gerçekleştirin.",
  },
];

export function CustomerDataSection() {
  return (
    <section className="bg-surface-container text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Image
          src="/images/data-visualization.webp"
          alt="Data visualization"
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-16">
          <span className="text-tertiary-fixed font-bold text-xs tracking-widest uppercase block mb-4">
            ● MÜŞTERİ & VERİ YÖNETİMİ
          </span>
          <h2 className="text-4xl font-bold tracking-tight font-headline">
            360° Müşteri Görünümü
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customerFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-4 font-headline">{feature.title}</h3>
              <p className="text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
