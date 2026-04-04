import type { Metadata } from "next";
import {
  Ticket,
  FileText,
  Bell,
  AtSign,
  Clock,
  Shield,
  MessageCircle,
  GitBranch,
  Link2,
  BarChart3,
} from "lucide-react";
import { FeatureDetailHero } from "@/components/feature-detail/feature-detail-hero";
import { SubFeatures } from "@/components/feature-detail/sub-features";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedFeatures } from "@/components/feature-detail/related-features";
import { FeatureCta } from "@/components/feature-detail/feature-cta";

export const metadata: Metadata = {
  title:
    "Görev & Bilet Yönetimi — CriTT CRM | Tüm Süreçler Tek Ekranda",
  description:
    "Bilet sistemi, SLA takibi, otomatik bildirimler, @mention ve tam denetim geçmişi ile görev yönetiminizi merkezileştirin.",
};

export default function GorevBiletYonetimiPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="SÜREÇ YÖNETİMİ"
        title="Görev ve Biletleriniz Tek Ekranda"
        highlightWord="Tek Ekranda"
        subtitle="Bilet detayları, alt görevler, departman atamaları, SLA takibi ve tam denetim geçmişi — merkezi bir panelden yönetin."
        icon={Ticket}
      />

      <SubFeatures
        features={[
          {
            icon: FileText,
            title: "Bilet Sistemi",
            points: [
              "Detaylı bilet görünümü ve durum takibi",
              "Alt biletler ile görev parçalama",
              "Dosya, belge ve medya ekleri",
              "Departman ve kişi bazlı atama",
              "Öncelik ve kategori yönetimi",
            ],
          },
          {
            icon: Bell,
            title: "Otomatik Bildirimler",
            points: [
              "SLA süre aşımı uyarıları",
              "SMS ile anlık bildirim",
              "WhatsApp üzerinden bilgilendirme",
              "Push notification desteği",
              "E-posta bildirimleri",
              "Koşul bazlı tetikleme kuralları",
            ],
          },
          {
            icon: AtSign,
            title: "@Mention & Tarihçe",
            points: [
              "Kişi ve ekip etiketleme ile hızlı iletişim",
              "Rich text editör ile zengin not ekleme",
              "Tam işlem geçmişi ve değişiklik logu",
              "Denetim ve uyumluluk için eksiksiz kayıt",
              "Bilet bazlı iç iletişim ve yorum zinciri",
            ],
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "SLA", label: "Süre Takibi" },
          { value: "%100", label: "Denetlenebilirlik" },
          { value: "5+", label: "Bildirim Kanalı" },
          { value: "\u221E", label: "İşlem Geçmişi" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: GitBranch,
            title: "İş Akışı Otomasyonu",
            description:
              "Sürükle-bırak iş akışları, SLA yönetimi ve dinamik formlar.",
            href: "/ozellikler/is-akisi-otomasyonu",
          },
          {
            icon: Link2,
            title: "İletişim Kanalları",
            description:
              "Tüm müşteri kanallarını tek platformda birleştirin.",
            href: "/ozellikler/iletisim-kanallari",
          },
          {
            icon: BarChart3,
            title: "Raporlama & Analiz",
            description:
              "Gerçek zamanlı dashboard, KPI takibi ve özelleştirilebilir raporlar.",
            href: "/ozellikler",
          },
        ]}
      />

      <FeatureCta
        title="Görev yönetiminizi merkezileştirin"
        subtitle="Biletler, bildirimler ve denetim geçmişi tek panelde. Hemen deneyin."
      />
    </div>
  );
}
