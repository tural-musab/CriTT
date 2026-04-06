import type { Metadata } from "next";
import {
  FileText,
  MapPin,
  Globe,
  Clock,
  Ticket,
  FileInput,
  Smartphone,
  Brain,
  GitBranch,
  Phone,
  Mic,
} from "lucide-react";
import { SolutionDetailHero } from "@/components/solution-detail/solution-detail-hero";
import { PainPoints } from "@/components/solution-detail/pain-points";
import { SolutionModules } from "@/components/solution-detail/solution-modules";
import { ScenarioFlow } from "@/components/solution-detail/scenario-flow";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedSectors } from "@/components/solution-detail/related-sectors";
import { SolutionCta } from "@/components/solution-detail/solution-cta";

export const metadata: Metadata = {
  title: "Sigorta — CriTT CRM | Sektöre Özel CRM Çözümleri",
  description:
    "Sigorta şirketleri için hasar süreçlerinde uçtan uca otomasyon. AI destekli hasar sınıflandırma, saha koordinasyonu ve çok kanallı iletişim.",
};

export default function SigortaPage() {
  return (
    <div className="relative overflow-hidden">
      <SolutionDetailHero
        badge="SİGORTA ŞİRKETLERİ"
        title="Hasar Süreçlerinde Uçtan Uca Otomasyon"
        highlightWord="Otomasyon"
        subtitle="Hasar bildirimlerini hızlandırın, saha koordinasyonunu güçlendirin, müşteri memnuniyetini artırın."
        imageSrc="/images/sector-sigorta.jpg"
        imageAlt="Sigorta CRM Dashboard"
      />

      <div className="relative">
        <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
        <div className="absolute inset-0 radial-glow -z-10" />

        <PainPoints
          points={[
            { icon: FileText, text: "Hasar süreçlerinin karmaşıklığı" },
            { icon: MapPin, text: "Saha eksper koordinasyonu" },
            { icon: Globe, text: "Çok kanallı müşteri iletişimi" },
            { icon: Clock, text: "Hızlı geri dönüş beklentisi" },
          ]}
        />

        <SolutionModules
          modules={[
            {
              icon: Ticket,
              title: "Bilet Yönetimi",
              description: "Hasar bildirimlerini tek merkezden takip edin ve yönetin.",
            },
            {
              icon: FileInput,
              title: "Dinamik Formlar",
              description: "Hasar tipine göre özelleşen bildirim formları.",
            },
            {
              icon: Smartphone,
              title: "Mobil Uygulama",
              description: "Saha eksperleri için mobil hasar tespit ve raporlama.",
            },
            {
              icon: Brain,
              title: "AI Kategorizasyon",
              description: "Hasar bildirimlerini yapay zeka ile otomatik sınıflandırın.",
              isAi: true,
            },
            {
              icon: GitBranch,
              title: "İş Akışı Otomasyonu",
              description: "Hasar süreçlerini uçtan uca otomatikleştirin.",
            },
            {
              icon: Phone,
              title: "Otomatik Arama",
              description: "Müşterilere otomatik durum bilgilendirme aramaları yapın.",
            },
            {
              icon: Mic,
              title: "Ses Kaydı + AI Analiz",
              description: "Görüşme kayıtlarını yapay zeka ile analiz edin ve raporlayın.",
              isAi: true,
            },
          ]}
        />

        <ScenarioFlow
          title="Hasar Bildirimi Nasıl İşlenir?"
          steps={[
            { label: "Müşteri hasar bildiriminde bulunur" },
            { label: "AI hasar tipini otomatik sınıflandırır", isAi: true },
            { label: "Saha eksperine atama yapılır" },
            { label: "Mobil uygulama ile hasar tespiti gerçekleşir" },
            { label: "Otomatik poliçe ve teminat kontrolü yapılır" },
            { label: "Müşteriye sonuç bildirimi gönderilir" },
          ]}
        />

        <FeatureStats
          stats={[
            { value: "%70", label: "Otomasyon" },
            { value: "<4s", label: "İlk Yanıt" },
            { value: "AI", label: "Hasar Sınıflama" },
            { value: "%100", label: "Poliçe Takip" },
          ]}
        />

        <RelatedSectors
          sectors={[
            { title: "Finans & Bankacılık", href: "/cozumler/finans-bankacilik" },
            { title: "Perakende & E-Ticaret", href: "/cozumler/perakende-eticaret" },
            { title: "Kamu & Belediye", href: "/cozumler/kamu-belediye" },
          ]}
        />

        <SolutionCta
          title="Sigorta sektörüne özel demo"
          subtitle="Uzman ekibimiz, sigorta sektörüne özel CRM çözümünü sizinle birlikte yapılandırsın."
        />
      </div>
    </div>
  );
}
