import type { Metadata } from "next";
import {
  AlertTriangle,
  Shield,
  Clock,
  Globe,
  Lock,
  Mic,
  TrendingUp,
  ShieldCheck,
  Timer,
  BarChart3,
  Ban,
  Database,
  FileSearch,
} from "lucide-react";
import { SolutionDetailHero } from "@/components/solution-detail/solution-detail-hero";
import { PainPoints } from "@/components/solution-detail/pain-points";
import { SolutionModules } from "@/components/solution-detail/solution-modules";
import { ScenarioFlow } from "@/components/solution-detail/scenario-flow";
import { FinanceDashboard } from "@/components/solution-detail/finance-dashboard";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedSectors } from "@/components/solution-detail/related-sectors";
import { SolutionCta } from "@/components/solution-detail/solution-cta";

export const metadata: Metadata = {
  title: "Finans & Bankacılık — CriTT CRM | Sektöre Özel CRM Çözümleri",
  description:
    "Finans ve bankacılık sektörüne özel yapay zeka destekli CRM çözümleri. 7/24 AI müşteri karşılama, uyumluluk takibi ve performans raporlama.",
};

export default function FinansBankacilikPage() {
  return (
    <div className="relative overflow-hidden">
      <SolutionDetailHero
        badge="FİNANS & BANKACILIK"
        title="Finansal Hizmetlerde Yapay Zeka Destekli CRM"
        highlightWord="Yapay Zeka"
        subtitle="Yüksek hacimli müşteri taleplerini yönetin, uyumluluk gereksinimlerini karşılayın, 7/24 AI destekli hizmet sunun."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBbSJrn6DSEiMFo7uRwji7ags2LFG3pRs70XDGFV1IVYa-o5N-GdhXVJDn6SKWViMs9gdKJm54kAXMB1Mxmc644PCa5QXKi9ekTV5yHA21LGyCleWx6MkfMlCXk1r3aXmuxJWuI4CvuUbpiocSjOqnFhrihr7YcEKA6N7EUbh9LtqzGfUYlunEFycj972Nn2puMeY-hVUx6oeMtyuxDvCzw2PtFLQDD1XA-m5mVKbmS7g293hygdR0jbco_1M57ejDRSNQHEwEBS-Q"
        imageAlt="Finans & Bankacılık CRM Dashboard"
      />

      <div className="relative">
        <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
        <div className="absolute inset-0 radial-glow -z-10" />

        <PainPoints
          points={[
            { icon: AlertTriangle, text: "Yüksek hacimli müşteri talepleri" },
            { icon: Shield, text: "Uyumluluk ve denetim gereklilikleri" },
            { icon: Clock, text: "Hızlı çözüm beklentisi" },
            { icon: Globe, text: "Çok kanallı iletişim yönetimi" },
            { icon: Lock, text: "Veri güvenliği ve erişim kontrolü" },
          ]}
        />

        <SolutionModules
          modules={[
            {
              icon: Mic,
              title: "AI Sesli Ajanlar",
              description: "7/24 müşteri karşılama, hesap bilgisi sorgulama, şube yönlendirme.",
              isAi: true,
            },
            {
              icon: TrendingUp,
              title: "Konuşma Zekası",
              description: "Müşteri memnuniyet analizi, risk tespiti ve kalite puanlama.",
              isAi: true,
            },
            {
              icon: ShieldCheck,
              title: "Yetkilendirme",
              description: "Departman ve pozisyon bazlı sıkı erişim kontrolü.",
            },
            {
              icon: Timer,
              title: "SLA Yönetimi",
              description: "Düzenleyici gerekliliklere uygun süre takibi ve uyarı.",
            },
            {
              icon: BarChart3,
              title: "Raporlama & KPI",
              description: "Personel performansı, çağrı istatistikleri, çözüm oranları.",
            },
            {
              icon: Ban,
              title: "Kara Liste",
              description: "Dolandırıcılık şüphelilerine tüm kanallarda iletişim engeli.",
            },
            {
              icon: Database,
              title: "Kurumsal Hafıza",
              description: "Müşteri bazlı tüm finansal iletişim geçmişi.",
            },
            {
              icon: FileSearch,
              title: "Log & Denetim",
              description: "Yasal denetim için tam işlem kaydı ve şeffaflık.",
            },
          ]}
        />

        <FinanceDashboard />

        <ScenarioFlow
          title="Bir Müşteri Talebi Nasıl İşlenir?"
          steps={[
            { label: "Müşteri bankayı arar" },
            { label: "AI sesli ajan karşılar ve niyeti anlar", isAi: true },
            { label: "Hesap sorgusu otomatik yanıtlanır", isAi: true },
            { label: "Karmaşık talep doğru uzmana yönlendirilir" },
            { label: "SLA takibi başlar, işlem loglanır" },
            { label: "Müşteriye otomatik bildirim gönderilir" },
          ]}
        />

        <FeatureStats
          stats={[
            { value: "+%42", label: "Verimlilik Artışı" },
            { value: "99.9%", label: "Uyumluluk Oranı" },
            { value: "<200ms", label: "Yanıt Süresi" },
            { value: "%60", label: "Maliyet Tasarrufu" },
          ]}
        />

        <RelatedSectors
          sectors={[
            { title: "Sigorta Şirketleri", href: "/cozumler" },
            { title: "Kamu & Belediye", href: "/cozumler" },
            { title: "Çağrı Merkezi & BPO", href: "/cozumler" },
          ]}
        />

        <SolutionCta
          title="Finans sektörüne özel demo talep edin"
          subtitle="Uzman ekibimiz, finansal hizmetlere özel CRM çözümünü sizinle birlikte yapılandırsın."
        />
      </div>
    </div>
  );
}
