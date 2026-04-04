import type { Metadata } from "next";
import {
  BarChart3,
  Mic,
  Layers,
  Lock,
  Sparkles,
  ClipboardList,
  Workflow,
} from "lucide-react";
import { FeatureDetailHero } from "@/components/feature-detail/feature-detail-hero";
import { SubFeatures } from "@/components/feature-detail/sub-features";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedFeatures } from "@/components/feature-detail/related-features";
import { FeatureCta } from "@/components/feature-detail/feature-cta";

export const metadata: Metadata = {
  title: "Raporlama & Dashboard — CriTT CRM | AI Destekli Akıllı Raporlama",
  description:
    "CriTT AI asistanı ile sesli veya komut bazlı raporlar oluşturun. 7 rapor kategorisi, sınırsız rapor çeşidi ve tam yetkilendirme kontrolü.",
};

export default function RaporlamaDashboardPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="ANALİTİK"
        title="Standart Raporlamanın Ötesine Geçin"
        highlightWord="Ötesine"
        subtitle="AI asistanınızla sesli komutlarla raporlarınızı oluşturun, istediğiniz formatta indirin. Mobil ve web uyumlu dashboard ile verilerinizi her yerden takip edin."
        icon={BarChart3}
      />

      <SubFeatures
        features={[
          {
            icon: Mic,
            title: "AI Raporlama",
            points: [
              "Sesli veya komut bazlı rapor oluşturma",
              "İstediğiniz formatta indirme (PDF, Excel, CSV)",
              "Mobil ve web uyumlu arayüz",
              "Doğal dil ile rapor sorgulama",
              "Otomatik periyodik rapor gönderimi",
            ],
          },
          {
            icon: Layers,
            title: "7 Rapor Kategorisi",
            points: [
              "Vatandaş başvuru raporları",
              "Çağrı merkezi performans raporları",
              "Görev ve iş akışı raporları",
              "Dinamik form raporları",
              "Mola takibi raporları",
              "Veri hareketleri ve log raporları",
              "Genel KPI dashboard",
            ],
          },
          {
            icon: Lock,
            title: "Yetkilendirme",
            points: [
              "Departman, görev ve pozisyon bazlı erişim kontrolü",
              "Yöneticiler kolayca yetki tanımlayabilir",
              "Yetki ağacı: ülke, sektör, kayıtlar, çağrı, sohbet",
              "Şehir, ilçe ve departman bazlı filtreleme",
              "Tam denetim ve güvenlik uyumluluğu",
            ],
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "∞", label: "Rapor Çeşidi" },
          { value: "7", label: "Kategori" },
          { value: "<1s", label: "AI Yanıt" },
          { value: "%100", label: "Yetki Kontrolü" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: Sparkles,
            title: "AI Sesli Ajanlar",
            description:
              "7/24 kesintisiz AI destekli müşteri karşılama ve yönlendirme.",
            href: "/ozellikler/ai-sesli-ajanlar",
          },
          {
            icon: ClipboardList,
            title: "Görev & Bilet Yönetimi",
            description:
              "Otomatik görev atama, bilet takibi ve önceliklendirme.",
            href: "/ozellikler/gorev-bilet-yonetimi",
          },
          {
            icon: Workflow,
            title: "İş Akışı Otomasyonu",
            description:
              "Süreçlerinizi otomatikleştirin, verimliliği artırın.",
            href: "/ozellikler/is-akisi-otomasyonu",
          },
        ]}
      />

      <FeatureCta
        title="Raporlamanızı akıllı hale getirin"
        subtitle="AI destekli raporlama ile verilerinizi anlık takip edin, hızlı kararlar alın."
      />
    </div>
  );
}
