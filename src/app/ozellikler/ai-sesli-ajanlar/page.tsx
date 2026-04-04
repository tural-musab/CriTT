import type { Metadata } from "next";
import {
  Sparkles,
  Phone,
  Brain,
  Zap,
  Mic,
  PhoneOutgoing,
  AudioLines,
  Hospital,
  Wrench,
  ShoppingCart,
  Building,
  Tags,
  Headphones,
} from "lucide-react";
import { FeatureDetailHero } from "@/components/feature-detail/feature-detail-hero";
import { ProblemSolution } from "@/components/feature-detail/problem-solution";
import { HowItWorks } from "@/components/feature-detail/how-it-works";
import { SubFeatures } from "@/components/feature-detail/sub-features";
import { UseCases } from "@/components/feature-detail/use-cases";
import { DashboardMockup } from "@/components/feature-detail/dashboard-mockup";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedFeatures } from "@/components/feature-detail/related-features";
import { FeatureCta } from "@/components/feature-detail/feature-cta";

export const metadata: Metadata = {
  title: "AI Sesli Ajanlar — CriTT CRM | 7/24 Yapay Zeka Müşteri Karşılama",
  description:
    "CriTT AI sesli ajanları ile 7/24 kesintisiz müşteri karşılama, 31+ dil desteği, duygu analizi ve otomatik yönlendirme.",
};

export default function AiSesliAjanlarPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="YAPAY ZEKA MODÜLÜ"
        title="Müşteri Deneyiminizi Yapay Zeka Sesli Ajanlarla Devrimleştirin"
        highlightWord="Devrimleştirin"
        subtitle="7/24 kesintisiz iletişim. 31+ dil desteği. Doğal dil işleme ile akıllı müşteri karşılama. İş alanınıza özel eğitilebilir AI operatörler."
        icon={Sparkles}
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBOt4IJiXpatuHojlwH6Gt2a1TwJ9Y_Ua6kbkDAzYFyhkBWHXQaWtucli6MpMn3RX9mlsB8OOcdG7Vg18ojh9F0JjOW6UPA1hBPGazfJFDvq8R8uljqgCkEOTV2dCSVSIRN0NuDbX0r-HRp1lF_ijAtYQzeQIIwkULL70R94pwhuy_qsnI7EPj1acYYgQsNdCNgIiCQG5RX2dhWSFQiknDcKalSQfX0RgwRM8QAYTNDQXUwNFZJuBq25ou6Z0CKpVZd8xs1d_F3r2U"
        imageAlt="AI Voice Agent Dashboard"
      />

      <ProblemSolution
        problems={[
          "IVR menülerinde kaybolma ve uzun bekleme süreleri",
          "Kaçırılan aramalar ve müşteri memnuniyetsizliği",
          "7/24 insan operatör maliyeti çok yüksek",
          "Çok dilli müşteri desteği sağlanamaması",
          "Çağrı kalitesi ve performans takibi yetersiz",
        ]}
        solutions={[
          "AI operatörleri ile 7/24 kesintisiz, sıfır bekleme süreli karşılama",
          "Doğal dil işleme ile niyeti anlama ve anında yönlendirme",
          "31+ dilde otomatik sesli asistan desteği",
          "Gerçek zamanlı duygu analizi ve kalite puanlama",
          "Otomatik ticket oluşturma ve departman yönlendirme",
        ]}
      />

      <HowItWorks
        steps={[
          {
            icon: Phone,
            title: "Müşteri Arar",
            description:
              "Gelen arama AI tarafından anında karşılanır. Bekleme süresi sıfır, IVR menüsü yok.",
          },
          {
            icon: Brain,
            title: "AI Analiz Eder",
            description:
              "Doğal dil işleme ile niyeti anlar, duygu durumunu tespit eder, müşteriyi otomatik tanır.",
            isAi: true,
          },
          {
            icon: Zap,
            title: "Aksiyon Alır",
            description:
              "Otomatik yanıt verir, ticket oluşturur veya doğru departmana yönlendirir.",
          },
        ]}
      />

      <SubFeatures
        features={[
          {
            icon: Mic,
            title: "Otomatik Karşılama (Inbound)",
            points: [
              "7/24 bekleme süresi olmadan akıllı asistan",
              "İş alanına özel eğitilebilir AI operatörler",
              "31+ dil desteği",
              "Sesten sese, metinden sese, sesten metne dönüşüm",
              "LLM modelleri iş akışına özelleştirilebilir",
              "API ile veri kaynaklarına entegre çalışır",
            ],
          },
          {
            icon: PhoneOutgoing,
            title: "Giden Aramalar (Outbound)",
            points: [
              "Potansiyel müşteri niteleme aramaları",
              "Randevu hatırlatma ve onay",
              "Geri bildirim ve memnuniyet anketleri",
              "Proaktif kampanya aramaları",
              "Ekibinizin verimliliğini 3 kata kadar artırın",
            ],
          },
          {
            icon: AudioLines,
            title: "Konuşma Zekası",
            points: [
              "Gerçek zamanlı duygu analizi (memnuniyet, öfke, endişe)",
              "Anahtar kelime ve niyet takibi",
              "Müşteri talep türlerini otomatik sınıflandırma",
              "Temsilci performans ölçümleri ve çözüm süreleri",
              "Hem AI hem insan temsilci görüşmeleri izlenir",
            ],
          },
        ]}
      />

      <DashboardMockup />

      <UseCases
        cases={[
          {
            icon: Hospital,
            sector: "Sağlık",
            scenario:
              "Randevu çağrılarını otomatik karşılama, hastanın dil tercihine göre uygun doktor saatlerini sunma.",
          },
          {
            icon: Wrench,
            sector: "Teknik Servis",
            scenario:
              "Müşteri aramalarını sesten metne çevirip arıza kaydını otomatik oluşturma, servis sürecini başlatma.",
          },
          {
            icon: ShoppingCart,
            sector: "E-Ticaret",
            scenario:
              "Sipariş durumu veya iade taleplerini kendi veri kaynaklarına bağlanarak anlık yanıtlama.",
          },
          {
            icon: Building,
            sector: "Kurumsal",
            scenario:
              "Randevudan hizmet takibine, geri bildirim toplamadan operasyon yönetimine kadar tüm müşteri yolculuğunu otomatik hale getirme.",
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "7/24", label: "Kesintisiz Hizmet" },
          { value: "31+", label: "Dil Desteği" },
          { value: "3x", label: "Verimlilik Artışı" },
          { value: "%80+", label: "Otomatik Çözüm" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: Tags,
            title: "AI Kategorizasyon",
            description: "Gelen talepleri otomatik sınıflandırma ve cevaplama.",
            href: "/ozellikler",
          },
          {
            icon: AudioLines,
            title: "Konuşma Zekası",
            description: "Duygu analizi, niyet takibi ve performans raporlama.",
            href: "/ozellikler",
          },
          {
            icon: Headphones,
            title: "Çağrı Merkezi",
            description: "Tam entegre çağrı merkezi yönetimi ve raporlama.",
            href: "/ozellikler",
          },
        ]}
      />

      <FeatureCta
        title="AI Sesli Ajanları deneyimleyin"
        subtitle="7/24 kesintisiz, akıllı müşteri karşılama için hemen demo talep edin."
      />
    </div>
  );
}
