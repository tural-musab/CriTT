import { Check } from "lucide-react";

interface Plan {
  name: string;
  badge: string;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    badge: "Başlangıç",
    features: [
      "Temel CRM özellikleri",
      "Bilet & Görev Yönetimi",
      "Müşteri Yönetimi",
      "Temel Raporlama",
      "E-posta desteği",
    ],
  },
  {
    name: "Professional",
    badge: "En Popüler",
    highlighted: true,
    features: [
      "Starter'daki her şey",
      "İş Akışı Otomasyonu",
      "WhatsApp & Sosyal Medya Entegrasyonu",
      "Çağrı Merkezi Entegrasyonu",
      "Dinamik Formlar",
      "Gelişmiş Raporlama & Dashboard",
      "Mobil Uygulama",
    ],
  },
  {
    name: "Enterprise",
    badge: "Kurumsal",
    features: [
      "Professional'daki her şey",
      "AI Sesli Ajanlar",
      "AI Kategorizasyon & Cevaplama",
      "Konuşma Zekası",
      "AI Raporlama",
      "SLA Yönetimi",
      "Özel API erişimi",
      "Ayrılmış destek ekibi",
    ],
  },
];

export function PricingCards() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-[20px] p-8 flex flex-col ${
              plan.highlighted
                ? "ai-card bg-white/65 backdrop-blur-[20px] md:scale-105 md:-my-4 shadow-xl"
                : "glass-card"
            }`}
          >
            <div className="mb-6">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-surface-container-high text-on-surface-variant"
                }`}
              >
                {plan.badge}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold font-headline mb-2">{plan.name}</h3>
            <p className="text-on-surface-variant text-sm mb-8">
              Teklif için bizimle iletişime geçin
            </p>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-primary" : "text-primary/60"}`}
                    size={18}
                  />
                  <span className="text-sm text-on-surface-variant">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-full font-headline font-bold text-sm transition-all active:scale-95 ${
                plan.highlighted
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90"
                  : "glass-card border border-primary/20 text-primary hover:bg-surface-container-high"
              }`}
            >
              Teklif Al
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
