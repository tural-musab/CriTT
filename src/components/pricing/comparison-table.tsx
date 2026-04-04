import { Check, Minus } from "lucide-react";

interface Feature {
  name: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
}

const features: Feature[] = [
  { name: "Bilet & Görev Yönetimi", starter: true, professional: true, enterprise: true },
  { name: "Müşteri Yönetimi", starter: true, professional: true, enterprise: true },
  { name: "Temel Raporlama", starter: true, professional: true, enterprise: true },
  { name: "E-posta Desteği", starter: true, professional: true, enterprise: true },
  { name: "İş Akışı Otomasyonu", starter: false, professional: true, enterprise: true },
  { name: "WhatsApp Entegrasyonu", starter: false, professional: true, enterprise: true },
  { name: "Sosyal Medya Dinleme", starter: false, professional: true, enterprise: true },
  { name: "Çağrı Merkezi", starter: false, professional: true, enterprise: true },
  { name: "Dinamik Formlar", starter: false, professional: true, enterprise: true },
  { name: "Mobil Uygulama", starter: false, professional: true, enterprise: true },
  { name: "AI Sesli Ajanlar", starter: false, professional: false, enterprise: true },
  { name: "AI Kategorizasyon", starter: false, professional: false, enterprise: true },
  { name: "Konuşma Zekası", starter: false, professional: false, enterprise: true },
  { name: "AI Raporlama", starter: false, professional: false, enterprise: true },
  { name: "SLA Yönetimi", starter: false, professional: false, enterprise: true },
  { name: "Özel API Erişimi", starter: false, professional: false, enterprise: true },
];

function Cell({ available }: { available: boolean }) {
  return available ? (
    <Check className="text-primary mx-auto" size={18} />
  ) : (
    <Minus className="text-outline-variant mx-auto" size={18} />
  );
}

export function ComparisonTable() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-on-surface tracking-tight font-headline">
          Detaylı Özellik Karşılaştırması
        </h2>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-outline-variant/20">
              <th className="text-left p-6 text-sm font-headline font-bold text-on-surface">
                Özellik
              </th>
              <th className="p-6 text-center text-sm font-headline font-bold text-on-surface-variant">
                Starter
              </th>
              <th className="p-6 text-center text-sm font-headline font-bold text-primary">
                Professional
              </th>
              <th className="p-6 text-center text-sm font-headline font-bold text-on-surface-variant">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr
                key={feature.name}
                className={`border-b border-outline-variant/10 ${i % 2 === 0 ? "bg-surface-container-lowest/30" : ""}`}
              >
                <td className="p-4 px-6 text-sm text-on-surface">{feature.name}</td>
                <td className="p-4 text-center">
                  <Cell available={feature.starter} />
                </td>
                <td className="p-4 text-center bg-primary/[0.03]">
                  <Cell available={feature.professional} />
                </td>
                <td className="p-4 text-center">
                  <Cell available={feature.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
