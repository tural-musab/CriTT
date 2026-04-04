import type { Metadata } from "next";
import {
  Phone,
  BarChart3,
  Coffee,
  Shield,
  Users,
  Headphones,
  Mic,
  TrendingUp,
  AudioLines,
  ShieldCheck,
  Monitor,
  CalendarDays,
} from "lucide-react";
import { SolutionDetailHero } from "@/components/solution-detail/solution-detail-hero";
import { PainPoints } from "@/components/solution-detail/pain-points";
import { SolutionModules } from "@/components/solution-detail/solution-modules";
import { ScenarioFlow } from "@/components/solution-detail/scenario-flow";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedSectors } from "@/components/solution-detail/related-sectors";
import { SolutionCta } from "@/components/solution-detail/solution-cta";

export const metadata: Metadata = {
  title: "Çağrı Merkezi & BPO — CriTT CRM | Sektöre Özel CRM Çözümleri",
  description:
    "Çağrı merkezi ve BPO operasyonları için AI destekli CRM çözümleri. Konuşma zekası, performans yönetimi ve kalite kontrol.",
};

export default function CagriMerkeziBpoPage() {
  return (
    <div className="relative overflow-hidden">
      <SolutionDetailHero
        badge="ÇAĞRI MERKEZLERİ & BPO"
        title="Çağrı Merkezi Operasyonlarınızı AI ile Optimize Edin"
        highlightWord="AI"
        subtitle="Çağrı hacmini yapay zeka ile yönetin, agent performansını artırın, kalite standartlarını yükseltin."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuC66jgZxRMR5IjCZMLOuFoao6FXWyQvbhIZpwthmFfaKuK-cXdafhhQGl5PcXPIeZ2d6AEC_oY_LMyG7wg4ww65-MnGPrvhUXzBDKLQw17IAEZTjOgPtycyr2kYA3rfDEIHEE3QodsE36F0poeDmW_R1N9X4YSeq3hh7pfBlDj0UO3xYI1TUlvzXRRM9fFHlR0NvJxwL5pEy-DLiRQ5QDBIc3LaHpjatXgiAW3WAWIxqrWerRhjYDAX5c93vqLGPqwxJrX7hrgdgQI"
        imageAlt="Çağrı Merkezi & BPO CRM Dashboard"
      />

      <div className="relative">
        <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
        <div className="absolute inset-0 radial-glow -z-10" />

        <PainPoints
          points={[
            { icon: Phone, text: "Yüksek çağrı hacmi yönetimi" },
            { icon: BarChart3, text: "Agent performans takibi" },
            { icon: Coffee, text: "Mola ve vardiya yönetimi" },
            { icon: Shield, text: "Kalite kontrol ve uyumluluk" },
            { icon: Users, text: "Çoklu müşteri BPO yönetimi" },
          ]}
        />

        <SolutionModules
          modules={[
            {
              icon: Headphones,
              title: "Çağrı Merkezi",
              description: "Gelen ve giden çağrıları tek platformdan yönetin.",
            },
            {
              icon: Mic,
              title: "AI Sesli Ajanlar",
              description: "Rutin çağrıları yapay zeka ile otomatik karşılayın.",
              isAi: true,
            },
            {
              icon: TrendingUp,
              title: "Konuşma Zekası",
              description: "Her görüşmeyi analiz edin, duygu ve niyet tespiti yapın.",
              isAi: true,
            },
            {
              icon: Coffee,
              title: "Mola Yönetimi",
              description: "Agent molalarını operasyonel verimliliğe göre planlayın.",
            },
            {
              icon: Phone,
              title: "Otomatik Arama",
              description: "Kampanya ve hatırlatma aramalarını otomatikleştirin.",
            },
            {
              icon: AudioLines,
              title: "Ses Kaydı + AI Analiz",
              description: "Tüm görüşmeleri kaydedin, AI ile kalite puanlayın.",
              isAi: true,
            },
            {
              icon: BarChart3,
              title: "Raporlama & KPI",
              description: "Agent ve kampanya performansını anlık izleyin.",
            },
            {
              icon: ShieldCheck,
              title: "Yetkilendirme",
              description: "Müşteri ve proje bazlı erişim kontrolü.",
            },
            {
              icon: Monitor,
              title: "Agent Workspace",
              description: "Temsilciler için birleşik çalışma alanı ve müşteri kartı.",
            },
            {
              icon: CalendarDays,
              title: "Akıllı Takvim",
              description: "Vardiya, mola ve görev planlamasını optimize edin.",
            },
          ]}
        />

        <ScenarioFlow
          title="Çağrı Nasıl İşlenir?"
          steps={[
            { label: "Müşteri çağrı merkezini arar" },
            { label: "AI sesli ajan karşılar ve niyeti anlar", isAi: true },
            { label: "Rutin talepler otomatik çözülür", isAi: true },
            { label: "Karmaşık talepler doğru agente yönlendirilir" },
            { label: "Görüşme kaydedilir ve AI ile analiz edilir", isAi: true },
            { label: "Kalite puanı ve performans raporu oluşturulur" },
          ]}
        />

        <FeatureStats
          stats={[
            { value: "3x", label: "Verimlilik" },
            { value: "%80", label: "AI Çözüm" },
            { value: "7/24", label: "Kesintisiz" },
            { value: "%95", label: "Kalite Skoru" },
          ]}
        />

        <RelatedSectors
          sectors={[
            { title: "Finans & Bankacılık", href: "/cozumler/finans-bankacilik" },
            { title: "Kamu & Belediye", href: "/cozumler/kamu-belediye" },
            { title: "Enerji & Altyapı", href: "/cozumler/enerji-altyapi" },
          ]}
        />

        <SolutionCta
          title="Çağrı merkezi çözümünü keşfedin"
          subtitle="Uzman ekibimiz, çağrı merkezi operasyonlarınıza özel CRM çözümünü sizinle birlikte yapılandırsın."
        />
      </div>
    </div>
  );
}
