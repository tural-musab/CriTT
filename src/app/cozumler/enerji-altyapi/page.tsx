import type { Metadata } from "next";
import {
  AlertTriangle,
  MapPin,
  Megaphone,
  Users,
  Ticket,
  GitBranch,
  Smartphone,
  Brain,
  Timer,
  BarChart3,
} from "lucide-react";
import { SolutionDetailHero } from "@/components/solution-detail/solution-detail-hero";
import { PainPoints } from "@/components/solution-detail/pain-points";
import { SolutionModules } from "@/components/solution-detail/solution-modules";
import { ScenarioFlow } from "@/components/solution-detail/scenario-flow";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedSectors } from "@/components/solution-detail/related-sectors";
import { SolutionCta } from "@/components/solution-detail/solution-cta";

export const metadata: Metadata = {
  title: "Enerji & Altyapı — CriTT CRM | Sektöre Özel CRM Çözümleri",
  description:
    "Enerji ve altyapı sektörüne özel arıza yönetimi CRM çözümleri. Saha müdahale koordinasyonu, kesinti bildirimi ve SLA takibi.",
};

export default function EnerjiAltyapiPage() {
  return (
    <div className="relative overflow-hidden">
      <SolutionDetailHero
        badge="ENERJİ & ALTYAPI"
        title="Arıza Yönetiminde Dijital Dönüşüm"
        highlightWord="Dijital Dönüşüm"
        subtitle="Arıza bildirimlerini hızla yönetin, saha ekiplerini koordine edin, kesinti sürecini minimize edin."
        imageSrc="/images/sector-enerji.webp"
        imageAlt="Enerji & Altyapı CRM Dashboard"
      />

      <div className="relative">
        <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
        <div className="absolute inset-0 radial-glow -z-10" />

        <PainPoints
          points={[
            { icon: AlertTriangle, text: "Arıza bildirimlerinin hızlı yönetimi" },
            { icon: MapPin, text: "Saha müdahale koordinasyonu" },
            { icon: Megaphone, text: "Kesinti bildirim süreçleri" },
            { icon: Users, text: "Saha ekiplerinin yönetimi" },
          ]}
        />

        <SolutionModules
          modules={[
            {
              icon: Ticket,
              title: "Bilet Yönetimi",
              description: "Arıza bildirimlerini tek merkezden takip edin ve yönetin.",
            },
            {
              icon: GitBranch,
              title: "İş Akışı Otomasyonu",
              description: "Arıza müdahale süreçlerini otomatikleştirin.",
            },
            {
              icon: Smartphone,
              title: "Saha Mobil Uygulama",
              description: "Saha ekiplerinin mobil cihazlardan arıza takibi yapmasını sağlayın.",
            },
            {
              icon: Brain,
              title: "AI Kategorizasyon",
              description: "Arıza bildirimlerini yapay zeka ile otomatik sınıflandırın.",
              isAi: true,
            },
            {
              icon: Megaphone,
              title: "Toplu Kesinti Bildirimi",
              description: "Etkilenen bölgelere otomatik kesinti bildirimi gönderin.",
            },
            {
              icon: Timer,
              title: "SLA Yönetimi",
              description: "Arıza müdahale sürelerini SLA'lara göre takip edin.",
            },
            {
              icon: BarChart3,
              title: "Raporlama & KPI",
              description: "Arıza istatistikleri, müdahale süreleri ve performans raporları.",
            },
          ]}
        />

        <ScenarioFlow
          title="Arıza Müdahalesi Nasıl İşler?"
          steps={[
            { label: "Aboneden arıza bildirimi gelir" },
            { label: "AI arızayı otomatik kategorize eder", isAi: true },
            { label: "En yakın saha ekibine atanır" },
            { label: "SLA süresi başlar, ekip sahaya gider" },
            { label: "Arıza giderilir, sistem güncellenir" },
            { label: "Abonelere otomatik bildirim gönderilir" },
          ]}
        />

        <FeatureStats
          stats={[
            { value: "%85", label: "Arıza Çözüm" },
            { value: "<30dk", label: "Müdahale Süresi" },
            { value: "7/24", label: "Arıza Hattı" },
            { value: "%100", label: "Kesinti Bildirimi" },
          ]}
        />

        <RelatedSectors
          sectors={[
            { title: "Kamu & Belediye", href: "/cozumler/kamu-belediye" },
            { title: "Çağrı Merkezi & BPO", href: "/cozumler/cagri-merkezi-bpo" },
            { title: "Finans & Bankacılık", href: "/cozumler/finans-bankacilik" },
          ]}
        />

        <SolutionCta
          title="Enerji sektörüne özel demo"
          subtitle="Uzman ekibimiz, enerji ve altyapı sektörüne özel CRM çözümünü sizinle birlikte yapılandırsın."
        />
      </div>
    </div>
  );
}
