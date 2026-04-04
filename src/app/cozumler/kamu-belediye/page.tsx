import type { Metadata } from "next";
import {
  AlertTriangle,
  Link2,
  Clock,
  MapPin,
  Eye,
  Ticket,
  GitBranch,
  MessageCircle,
  Globe,
  Brain,
  Smartphone,
  BarChart3,
  FileSearch,
} from "lucide-react";
import { SolutionDetailHero } from "@/components/solution-detail/solution-detail-hero";
import { PainPoints } from "@/components/solution-detail/pain-points";
import { SolutionModules } from "@/components/solution-detail/solution-modules";
import { ScenarioFlow } from "@/components/solution-detail/scenario-flow";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedSectors } from "@/components/solution-detail/related-sectors";
import { SolutionCta } from "@/components/solution-detail/solution-cta";

export const metadata: Metadata = {
  title: "Kamu & Belediye — CriTT CRM | Sektöre Özel CRM Çözümleri",
  description:
    "Kamu kurumları ve belediyeler için vatandaş odaklı dijital CRM çözümleri. Başvuru takibi, departman koordinasyonu ve şeffaflık.",
};

export default function KamuBelediyePage() {
  return (
    <div className="relative overflow-hidden">
      <SolutionDetailHero
        badge="KAMU KURUMLARI & BELEDİYELER"
        title="Vatandaş Odaklı Dijital Belediye CRM"
        highlightWord="Dijital"
        subtitle="Vatandaş başvurularını uçtan uca yönetin, departmanlar arası koordinasyonu güçlendirin, şeffaflığı artırın."
        imageSrc="/images/sector-kamu.webp"
        imageAlt="Kamu & Belediye CRM Dashboard"
      />

      <div className="relative">
        <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
        <div className="absolute inset-0 radial-glow -z-10" />

        <PainPoints
          points={[
            { icon: AlertTriangle, text: "Vatandaş başvuru takibinde kayıplar" },
            { icon: Link2, text: "Departmanlar arası kopukluklar" },
            { icon: Clock, text: "SLA süreleri kontrolsüz" },
            { icon: MapPin, text: "Saha ekiplerinin koordinasyonu" },
            { icon: Eye, text: "Şeffaflık ve hesap verebilirlik eksikliği" },
          ]}
        />

        <SolutionModules
          modules={[
            {
              icon: Ticket,
              title: "Bilet Yönetimi",
              description: "Vatandaş başvurularını tek merkezden takip edin ve yönetin.",
            },
            {
              icon: GitBranch,
              title: "İş Akışı Otomasyonu",
              description: "Departmanlar arası iş akışlarını otomatikleştirin.",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp Entegrasyonu",
              description: "Vatandaşlarla WhatsApp üzerinden anlık iletişim kurun.",
            },
            {
              icon: Globe,
              title: "Sosyal Medya Yönetimi",
              description: "Sosyal medya kanallarından gelen talepleri merkezi yönetin.",
            },
            {
              icon: Brain,
              title: "AI Kategorizasyon",
              description: "Başvuruları yapay zeka ile otomatik sınıflandırın ve yönlendirin.",
              isAi: true,
            },
            {
              icon: Smartphone,
              title: "Saha Mobil Uygulama",
              description: "Saha ekiplerinin mobil cihazlardan iş takibi yapmasını sağlayın.",
            },
            {
              icon: BarChart3,
              title: "Raporlama & KPI",
              description: "Belediye performansını anlık raporlarla izleyin.",
            },
            {
              icon: FileSearch,
              title: "Log & Denetim",
              description: "Tüm işlem kayıtlarını şeffaflık için saklayın ve denetleyin.",
            },
          ]}
        />

        <ScenarioFlow
          title="Vatandaş Başvurusu Nasıl İşlenir?"
          steps={[
            { label: "Vatandaş WhatsApp üzerinden bildirim yapar" },
            { label: "AI başvuruyu otomatik sınıflandırır", isAi: true },
            { label: "Park & Bahçe müdürlüğüne atanır" },
            { label: "SLA süresi başlar" },
            { label: "Saha ekibi müdahaleye gider" },
            { label: "Vatandaşa otomatik bildirim gönderilir" },
          ]}
        />

        <FeatureStats
          stats={[
            { value: "%95", label: "Başvuru Çözüm" },
            { value: "<24s", label: "Yanıt Süresi" },
            { value: "7/24", label: "Vatandaş Hattı" },
            { value: "%100", label: "Şeffaflık" },
          ]}
        />

        <RelatedSectors
          sectors={[
            { title: "Finans & Bankacılık", href: "/cozumler/finans-bankacilik" },
            { title: "Enerji & Altyapı", href: "/cozumler/enerji-altyapi" },
            { title: "Çağrı Merkezi & BPO", href: "/cozumler/cagri-merkezi-bpo" },
          ]}
        />

        <SolutionCta
          title="Belediyenize özel demo talep edin"
          subtitle="Uzman ekibimiz, kamu kurumlarına özel CRM çözümünü sizinle birlikte yapılandırsın."
        />
      </div>
    </div>
  );
}
