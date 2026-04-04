import type { Metadata } from "next";
import {
  Sparkles,
  MessageSquare,
  Brain,
  Zap,
  Tags,
  Heart,
  Bot,
  Mic,
  Link2,
  GitBranch,
} from "lucide-react";
import { FeatureDetailHero } from "@/components/feature-detail/feature-detail-hero";
import { HowItWorks } from "@/components/feature-detail/how-it-works";
import { SubFeatures } from "@/components/feature-detail/sub-features";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedFeatures } from "@/components/feature-detail/related-features";
import { FeatureCta } from "@/components/feature-detail/feature-cta";

export const metadata: Metadata = {
  title:
    "AI Kategorizasyon — CriTT CRM | Yapay Zeka ile Doğru Müdahale",
  description:
    "Gelen mesajları yapay zeka ile otomatik sınıflandırın, duygu analizi yapın ve %20+ insansız çözüm oranına ulaşın.",
};

export default function AiKategorizasyonPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="YAPAY ZEKA MODÜLÜ"
        title="Her Mesaja doğru müdahale"
        highlightWord="doğru müdahale"
        subtitle="Yapay zeka gelen her mesajı analiz eder, sınıflandırır ve doğru aksiyonu başlatır. Duygu durumu, talep türü ve müşteri geçmişi tek bir bakışta."
        icon={Sparkles}
      />

      <HowItWorks
        steps={[
          {
            icon: MessageSquare,
            title: "Mesaj Gelir",
            description:
              "Herhangi bir kanaldan gelen mesaj anında AI motoruna iletilir.",
          },
          {
            icon: Brain,
            title: "AI Analiz Eder",
            description:
              "Kim yazdı, ne istedi, duygu durumu nedir — yapay zeka saniyeler içinde belirler.",
            isAi: true,
          },
          {
            icon: Zap,
            title: "Aksiyon Başlar",
            description:
              "Otomatik cevap verilir, ilgili departmana yönlendirilir veya bilet oluşturulur.",
          },
        ]}
      />

      <SubFeatures
        features={[
          {
            icon: Tags,
            title: "Otomatik Sınıflandırma",
            points: [
              "Şikayet, ürün sorusu ve ödeme talebi ayrımı",
              "%20+ insansız otomatik çözüm oranı",
              "Talep türüne göre önceliklendirme",
              "Kategori bazlı raporlama ve istatistik",
              "Sürekli öğrenen ve gelişen AI modeli",
            ],
          },
          {
            icon: Heart,
            title: "Duygu Tarama & Yönlendirme",
            points: [
              "Müşteri duygusal durumu analizi (memnun, öfkeli, endişeli)",
              "Duygu durumuna göre dinamik akış değiştirme",
              "Geçmiş etkileşimlere dayalı akıllı yönlendirme",
              "Kritik duygu durumlarında anında eskalasyon",
              "Duygu trendi raporlama ve takip",
            ],
          },
          {
            icon: Bot,
            title: "Otonom Akışlar",
            points: [
              "Lead yönetimi ve otomatik niteleme",
              "Sözleşme süreçleri otomasyonu",
              "Teklif ve sipariş oluşturma akışları",
              "Sesli yanıt sistemi entegrasyonu",
              "Çoklu kanal üzerinden otonom işlem",
            ],
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "%20+", label: "İnsansız Çözüm" },
          { value: "<1s", label: "Analiz Süresi" },
          { value: "7/24", label: "Otonom Çalışma" },
          { value: "6+", label: "Süreç Entegrasyonu" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: Mic,
            title: "AI Sesli Ajanlar",
            description:
              "7/24 yapay zeka sesli müşteri karşılama ve yönlendirme.",
            href: "/ozellikler/ai-sesli-ajanlar",
          },
          {
            icon: Link2,
            title: "İletişim Kanalları",
            description:
              "Tüm müşteri kanallarını tek platformda birleştirin.",
            href: "/ozellikler/iletisim-kanallari",
          },
          {
            icon: GitBranch,
            title: "İş Akışı Otomasyonu",
            description:
              "Sürükle-bırak akışlar, SLA yönetimi ve dinamik formlar.",
            href: "/ozellikler/is-akisi-otomasyonu",
          },
        ]}
      />

      <FeatureCta
        title="AI kategorizasyonu deneyimleyin"
        subtitle="Yapay zeka ile mesajları otomatik sınıflandırın, doğru aksiyonu anında başlatın."
      />
    </div>
  );
}
