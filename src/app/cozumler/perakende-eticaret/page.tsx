import type { Metadata } from "next";
import {
  TrendingUp,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  Globe,
  Database,
  Mic,
  Phone,
  Megaphone,
  Monitor,
} from "lucide-react";
import { SolutionDetailHero } from "@/components/solution-detail/solution-detail-hero";
import { PainPoints } from "@/components/solution-detail/pain-points";
import { SolutionModules } from "@/components/solution-detail/solution-modules";
import { ScenarioFlow } from "@/components/solution-detail/scenario-flow";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedSectors } from "@/components/solution-detail/related-sectors";
import { SolutionCta } from "@/components/solution-detail/solution-cta";

export const metadata: Metadata = {
  title: "Perakende & E-Ticaret — CriTT CRM | Sektöre Özel CRM Çözümleri",
  description:
    "Perakende ve e-ticaret sektörüne özel yapay zeka destekli CRM çözümleri. Lead yönetimi, WhatsApp entegrasyonu ve 360 derece müşteri görünümü.",
};

export default function PerakendeEticaretPage() {
  return (
    <div className="relative overflow-hidden">
      <SolutionDetailHero
        badge="PERAKENDE & E-TİCARET"
        title="Satış Süreçlerinizi Yapay Zeka ile Hızlandırın"
        highlightWord="Yapay Zeka"
        subtitle="Lead'den satışa tüm süreci yönetin, müşteri deneyimini kişiselleştirin, dönüşüm oranlarını artırın."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCks8ZuiujpuQyHJzr-vT9WwDkaXQUFgGWbAvjsl7DbQdkaXSBt4HjoP1tUPfWlHLTYDZzYPTGj0hgD9FOhAwpxw46uDJv-pm4_ELZaK1JqcwfnvCGQSI48mQJZ1WS4T-z4fKz4lr_GWfLXCbmER4emKmZ-j1PU2G-s3jD7OLmoqfDQqGuEdOoi2zqsueRU9vnDKCH-Tg8SBSfEpRSgMxEmfm14M8LBeHcpzTgXDgyWIfyyoCcpZSD1gIMmt7lK51nZEP7wRUbpWSc"
        imageAlt="Perakende & E-Ticaret CRM Dashboard"
      />

      <div className="relative">
        <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
        <div className="absolute inset-0 radial-glow -z-10" />

        <PainPoints
          points={[
            { icon: TrendingUp, text: "Lead takibinde kayıplar" },
            { icon: ShoppingCart, text: "Sipariş ve iade süreçleri karmaşıklığı" },
            { icon: MessageCircle, text: "WhatsApp iletişim yönetimi" },
            { icon: BarChart3, text: "Satış performansı görünürlüğü" },
            { icon: Globe, text: "Çok kanallı müşteri deneyimi" },
          ]}
        />

        <SolutionModules
          modules={[
            {
              icon: Database,
              title: "Veri Toplama & CRM",
              description: "Tüm kanallardan müşteri verilerini tek merkezde toplayın.",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp Entegrasyonu",
              description: "Müşterilerle WhatsApp üzerinden satış ve destek iletişimi kurun.",
            },
            {
              icon: TrendingUp,
              title: "Satış & Pazarlama",
              description: "Lead yönetimi, kampanya takibi ve satış hunisi optimizasyonu.",
            },
            {
              icon: Mic,
              title: "AI Sesli Ajanlar",
              description: "Müşteri aramalarını yapay zeka ile karşılayın ve yönlendirin.",
              isAi: true,
            },
            {
              icon: Phone,
              title: "Otomatik Arama",
              description: "Kampanya ve hatırlatma aramalarını otomatikleştirin.",
            },
            {
              icon: Megaphone,
              title: "Toplu İletişim",
              description: "SMS, e-posta ve WhatsApp ile toplu kampanya gönderimi.",
            },
            {
              icon: ShoppingCart,
              title: "Teklif & Sipariş Yönetimi",
              description: "Tekliften siparişe tüm satış sürecini dijitalleştirin.",
            },
            {
              icon: Monitor,
              title: "Agent Workspace",
              description: "Temsilciler için AI destekli birleşik çalışma alanı.",
              isAi: true,
            },
          ]}
        />

        <ScenarioFlow
          title="Lead'den Satışa"
          steps={[
            { label: "Lead web formu veya WhatsApp'tan gelir" },
            { label: "AI lead'i skorlar ve kategorize eder", isAi: true },
            { label: "Satış temsilcisine otomatik atanır" },
            { label: "WhatsApp üzerinden iletişim kurulur" },
            { label: "Teklif oluşturulur ve onaya gönderilir" },
            { label: "Sipariş tamamlanır, müşteri takibe alınır" },
          ]}
        />

        <FeatureStats
          stats={[
            { value: "3x", label: "Dönüşüm Artışı" },
            { value: "%40", label: "Lead Maliyeti\u2193" },
            { value: "7/24", label: "WhatsApp Destek" },
            { value: "360\u00B0", label: "Müşteri Görünümü" },
          ]}
        />

        <RelatedSectors
          sectors={[
            { title: "Finans & Bankacılık", href: "/cozumler/finans-bankacilik" },
            { title: "Sigorta Şirketleri", href: "/cozumler/sigorta" },
            { title: "Çağrı Merkezi & BPO", href: "/cozumler/cagri-merkezi-bpo" },
          ]}
        />

        <SolutionCta
          title="Perakende sektörüne özel demo"
          subtitle="Uzman ekibimiz, perakende ve e-ticaret sektörüne özel CRM çözümünü sizinle birlikte yapılandırsın."
        />
      </div>
    </div>
  );
}
