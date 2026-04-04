import { ClipboardList, Ticket, GitBranch, Bell, FileInput } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TaskFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const taskFeatures: TaskFeature[] = [
  {
    icon: ClipboardList,
    title: "Görev Yönetimi",
    description: "Ekipleriniz için görevler oluşturun, önceliklendirin ve tamamlanma sürelerini izleyin.",
  },
  {
    icon: Ticket,
    title: "Bilet Yönetimi",
    description: "Müşteri şikayet ve taleplerini biletleme sistemi ile uçtan uca takip edin.",
  },
  {
    icon: GitBranch,
    title: "İş Akışı / Flow",
    description: "Karmaşık iş süreçlerini sürükle-bırak arayüzü ile otomatize edin ve hızlandırın.",
  },
  {
    icon: Bell,
    title: "Otomatik Bildirimler",
    description: "Önemli olaylarda veya gecikmelerde ilgili kişilere anlık bildirimler gönderin.",
  },
  {
    icon: FileInput,
    title: "Dinamik Form Yönetimi",
    description: "Veri toplama süreçlerinizi özelleştirilebilir formlar ile dijitalleştirin.",
  },
];

export function TaskProcessSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● GÖREV & SÜREÇ YÖNETİMİ
        </span>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
          Her Görevi Kontrol Altında Tutun
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {taskFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 font-headline">
                <Icon className="text-primary" size={24} />
                {feature.title}
              </h3>
              <p className="text-on-surface-variant text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
