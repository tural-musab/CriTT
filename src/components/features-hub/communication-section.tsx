import { MessageCircle, Phone, Share2, MessagesSquare, Send, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resmi WhatsApp API entegrasyonu ile müşterilerinizle gerçek zamanlı ve kurumsal bir dilde iletişim kurun.",
  },
  {
    icon: Phone,
    title: "Çağrı Merkezi",
    description: "Gelen ve giden çağrıları CRM panelinden yönetin, ses kayıtlarını otomatik olarak müşteri kartına işleyin.",
  },
  {
    icon: Share2,
    title: "Sosyal Medya",
    description: "Instagram, Facebook ve X platformlarından gelen mesajları tek bir arayüzde toplayın ve yanıtlayın.",
  },
  {
    icon: MessagesSquare,
    title: "Chat",
    description: "Web siteniz için özelleştirilebilir canlı destek modülü ile ziyaretçilerinizi müşteriye dönüştürün.",
  },
  {
    icon: Send,
    title: "Toplu İletişim",
    description: "SMS ve E-posta kanallarıyla büyük kitlelere saniyeler içinde kampanya ve duyuru gönderin.",
  },
  {
    icon: RefreshCw,
    title: "Otomatik Arama",
    description: "Predictive dialer teknolojisi ile temsilcilerinizin verimliliğini artırın ve bekleme sürelerini azaltın.",
  },
];

export function CommunicationSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 border-t border-outline-variant/10">
      <div className="mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● İLETİŞİM & ENTEGRASYON
        </span>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
          Tüm Kanallarınız Tek Merkezde
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-headline">{feature.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
