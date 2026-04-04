import type { Metadata } from "next";
import {
  GitBranch,
  Webhook,
  ShieldCheck,
  Zap,
  GripVertical,
  Clock,
  FileInput,
  Ticket,
  Tags,
  BarChart3,
} from "lucide-react";
import { FeatureDetailHero } from "@/components/feature-detail/feature-detail-hero";
import { HowItWorks } from "@/components/feature-detail/how-it-works";
import { SubFeatures } from "@/components/feature-detail/sub-features";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedFeatures } from "@/components/feature-detail/related-features";
import { FeatureCta } from "@/components/feature-detail/feature-cta";

export const metadata: Metadata = {
  title:
    "İş Akışı Otomasyonu — CriTT CRM | Süreçlerinizi Dijitalleştirin",
  description:
    "Sürükle-bırak akış tasarımcısı, SLA yönetimi, dinamik formlar ve webhook entegrasyonu ile iş süreçlerinizi otomatikleştirin.",
};

export default function IsAkisiOtomasyonuPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="OTOMASYON"
        title="İş Süreçlerinizi dijitalleştirin"
        highlightWord="dijitalleştirin"
        subtitle="Tekrarlayan görevleri otomatikleştirin, kurallarla yönetin ve her adımı izleyin. Kod yazmadan, sürükle-bırak ile."
        icon={GitBranch}
      />

      <HowItWorks
        steps={[
          {
            icon: Webhook,
            title: "Tetiklenir",
            description:
              "Webhook, API çağrısı veya gelen e-posta ile iş akışı otomatik başlatılır.",
          },
          {
            icon: ShieldCheck,
            title: "Kurallar Çalışır",
            description:
              "Yetkilendirme, veri doğrulama, alan değiştirme ve bildirim kuralları sırayla uygulanır.",
            isAi: true,
          },
          {
            icon: Zap,
            title: "Aksiyon Alınır",
            description:
              "Otomatik atama, iş emri oluşturma veya bildirim gönderme ile süreç tamamlanır.",
          },
        ]}
      />

      <SubFeatures
        features={[
          {
            icon: GripVertical,
            title: "Sürükle-Bırak Akış Tasarımcısı",
            points: [
              "Görsel iş akışı tasarım arayüzü",
              "Departman bazlı otomatik atama",
              "Çok adımlı inceleme ve onay süreçleri",
              "Koşullu dallanma ve paralel akışlar",
              "Şablon akışlar ile hızlı başlangıç",
            ],
          },
          {
            icon: Clock,
            title: "SLA Yönetimi",
            points: [
              "Bilet türüne göre süre özelleştirme",
              "SLA aşımında otomatik aksiyon tetikleme",
              "Otomatik iş emri oluşturma",
              "Eskalasyon ve bildirim zincirleri",
              "Gerçek zamanlı SLA dashboard",
            ],
          },
          {
            icon: FileInput,
            title: "Dinamik Formlar",
            points: [
              "Lead kaynağına göre otomatik form açılması",
              "Yanıtlara göre otomatik görev oluşturma",
              "Koşullu alan gösterimi ve doğrulama",
              "Form verisi ile iş akışı entegrasyonu",
              "Çoklu form şablonu desteği",
            ],
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "\u221E", label: "Akış Senaryosu" },
          { value: "4", label: "Kural Türü" },
          { value: "SLA", label: "Otomatik Takip" },
          { value: "3", label: "Sonuç Yolu" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: Ticket,
            title: "Görev & Bilet Yönetimi",
            description:
              "Bilet sistemi, SLA takibi ve tam denetim geçmişi.",
            href: "/ozellikler/gorev-bilet-yonetimi",
          },
          {
            icon: Tags,
            title: "AI Kategorizasyon",
            description:
              "Yapay zeka ile otomatik sınıflandırma ve yönlendirme.",
            href: "/ozellikler/ai-kategorizasyon",
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
        title="İş süreçlerinizi otomatikleştirin"
        subtitle="Kurallar, akışlar ve otomasyonlarla operasyonel verimliliğinizi artırın."
      />
    </div>
  );
}
