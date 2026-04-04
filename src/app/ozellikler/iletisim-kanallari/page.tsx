import type { Metadata } from "next";
import {
  Link2,
  MessageSquare,
  Phone,
  Share2,
  Mail,
  Globe,
  Building,
  Camera,
  Mic,
  FileText,
  MapPin,
  Database,
  FileSpreadsheet,
  Code,
  Tags,
  Users,
  Headphones,
} from "lucide-react";
import { FeatureDetailHero } from "@/components/feature-detail/feature-detail-hero";
import { ProblemSolution } from "@/components/feature-detail/problem-solution";
import { HowItWorks } from "@/components/feature-detail/how-it-works";
import { SubFeatures } from "@/components/feature-detail/sub-features";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedFeatures } from "@/components/feature-detail/related-features";
import { FeatureCta } from "@/components/feature-detail/feature-cta";

export const metadata: Metadata = {
  title:
    "İletişim Kanalları — CriTT CRM | Tüm Kanallar Tek Merkezde",
  description:
    "WhatsApp, çağrı, sosyal medya, e-posta, web ve şube kanallarını tek platformda birleştirin. Yazışmadan bilete, ERP'den API'ye veri entegrasyonu.",
};

export default function IletisimKanallariPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="İLETİŞİM MODÜLÜ"
        title="Tüm İletişim Kanallarınız Tek Merkezde"
        highlightWord="Tek Merkezde"
        subtitle="WhatsApp, çağrı merkezi, sosyal medya, e-posta, web formları ve şube girişleri — tüm müşteri iletişiminiz tek bir platformda birleşir."
        icon={Link2}
      />

      <ProblemSolution
        problems={[
          "Her kanal için ayrı panel ve giriş bilgisi",
          "Müşteri geçmişi kanallar arasında kayboluyor",
          "Hangi kanaldan ne geldi takip edilemiyor",
          "Veri tekrarı ve tutarsız müşteri kayıtları",
          "Entegrasyon maliyetleri sürekli artıyor",
        ]}
        solutions={[
          "Tüm kanallar tek ekranda, tek oturum ile yönetilir",
          "Müşteri geçmişi kanal fark etmeksizin birleşik görüntülenir",
          "Her etkileşim otomatik olarak kaynağıyla birlikte kaydedilir",
          "Tekrarlı kayıtlar otomatik eşleştirilir ve birleştirilir",
          "Hazır entegrasyonlarla ek maliyet olmadan bağlanır",
        ]}
      />

      <HowItWorks
        steps={[
          {
            icon: MessageSquare,
            title: "Mesaj Gelir",
            description:
              "WhatsApp, sosyal medya, e-posta veya web formu — hangi kanaldan gelirse gelsin mesaj sisteme düşer.",
          },
          {
            icon: Database,
            title: "Sistem Tanır",
            description:
              "Müşteri otomatik eşleştirilir, geçmiş kayıtları ve kanal bilgisi anında ilişkilendirilir.",
            isAi: true,
          },
          {
            icon: Share2,
            title: "Yönlendirilir",
            description:
              "Mesaj ilgili departmana veya temsilciye otomatik atanır, bilet oluşturulur.",
          },
        ]}
      />

      <SubFeatures
        features={[
          {
            icon: Globe,
            title: "Omnichannel İletişim",
            points: [
              "WhatsApp Business entegrasyonu",
              "Çağrı merkezi (inbound & outbound)",
              "Sosyal medya mesajları (Instagram, Facebook, X)",
              "E-posta entegrasyonu",
              "Web formları ve canlı destek",
              "Şube ve fiziksel kanal girişleri",
            ],
          },
          {
            icon: Camera,
            title: "Yazışmadan Bilete",
            points: [
              "Fotoğraf ve görsel dosyalar otomatik eklenir",
              "Ses kayıtları ve sesli mesajlar dönüştürülür",
              "Yazışma geçmişi bilete bağlanır",
              "Adres ve konum bilgisi otomatik çekilir",
              "Belge ve dökümanlar bilete ilişkilendirilir",
            ],
          },
          {
            icon: Database,
            title: "Veri Import & Entegrasyon",
            points: [
              "ERP sistemlerinden otomatik veri aktarımı",
              "SQL veritabanı bağlantısı",
              "Excel ve CSV toplu import",
              "REST API entegrasyonu",
              "Sosyal medya form verileri aktarımı",
            ],
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "8+", label: "Kanal Entegrasyonu" },
          { value: "%100", label: "Veri Birleşimi" },
          { value: "7/24", label: "Kesintisiz" },
          { value: "1", label: "Tek Platform" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: Tags,
            title: "AI Kategorizasyon",
            description:
              "Gelen talepleri yapay zeka ile otomatik sınıflandırma ve yönlendirme.",
            href: "/ozellikler/ai-kategorizasyon",
          },
          {
            icon: Users,
            title: "Müşteri Yönetimi",
            description:
              "360 derece müşteri profili, segmentasyon ve etkileşim geçmişi.",
            href: "/ozellikler",
          },
          {
            icon: Headphones,
            title: "Çağrı Merkezi",
            description:
              "Tam entegre çağrı merkezi yönetimi ve performans raporlama.",
            href: "/ozellikler",
          },
        ]}
      />

      <FeatureCta
        title="Tüm kanallarınızı birleştirin"
        subtitle="Dağınık iletişim kanallarını tek platformda toplayın, müşteri deneyimini yükseltin."
      />
    </div>
  );
}
