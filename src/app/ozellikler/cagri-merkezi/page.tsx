import type { Metadata } from "next";
import {
  Headphones,
  FileText,
  Coffee,
  CalendarDays,
  UserCheck,
  Upload,
  PhoneCall,
  Sparkles,
  ClipboardList,
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
    "Çağrı Merkezi — CriTT CRM | AI Transkript ve Akıllı Çağrı Yönetimi",
  description:
    "CriTT ile çağrı merkezinizi akıllı hale getirin. AI transkript, mola yönetimi, akıllı takvim ve otomatik arama görevleri.",
};

export default function CagriMerkeziPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="ÇAĞRI MERKEZİ"
        title="Çağrı Merkezinizi Akıllı Hale Getirin"
        highlightWord="Akıllı"
        subtitle="Arama raporları, ses kayıtları, müşteri notları ve AI transkript ile çağrı merkezi operasyonlarınızı uçtan uca yönetin."
        icon={Headphones}
      />

      <HowItWorks
        steps={[
          {
            icon: UserCheck,
            title: "Personel Seçin",
            description:
              "Arama kampanyası için uygun personeli seçin ve görev atayın.",
          },
          {
            icon: Upload,
            title: "Veri Yükleyin",
            description:
              "Aranacak müşteri listesini sisteme yükleyin, segmentasyon ve önceliklendirme yapın.",
          },
          {
            icon: PhoneCall,
            title: "Aramalar Otomatik Başlar",
            description:
              "Sistem otomatik olarak aramaları başlatır, sonuçları kaydeder ve raporlar.",
            isAi: true,
          },
        ]}
      />

      <SubFeatures
        features={[
          {
            icon: FileText,
            title: "Çağrı Raporları & AI Transkript",
            points: [
              "Gelen ve giden çağrı filtreleme",
              "Temsilci, müşteri ve süre detayları",
              "Ses kayıtlarını AI ile tam metne dönüştürme",
              "Otomatik görüşme özeti oluşturma",
              "Anahtar kelime ve niyet analizi",
            ],
          },
          {
            icon: Coffee,
            title: "Operatör Mola Yönetimi",
            points: [
              "Sistemden mola talep ve onay süreçleri",
              "Ekran otomatik kilit ile güvenlik",
              "Hat otomatik pasifleşir, çağrı yönlenmez",
              "Geri sayım ve süre takibi",
              "Süre dolunca otomatik aktif duruma geçiş",
            ],
          },
          {
            icon: CalendarDays,
            title: "Akıllı Takvim",
            points: [
              "Otomatik arama görevleri oluşturma",
              "Toplantı planlama ve hatırlatma",
              "Etkinlik seviyesi ve öncelik belirleme",
              "Çakışma önleme algoritması",
              "Otomatik bildirimler ve uyarılar",
            ],
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "AI", label: "Ses\u2192Metin" },
          { value: "%100", label: "Kayıt Arşivi" },
          { value: "3x", label: "Verimlilik" },
          { value: "7/24", label: "Otomasyon" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: Sparkles,
            title: "AI Sesli Ajanlar",
            description:
              "7/24 kesintisiz AI destekli müşteri karşılama ve yönlendirme.",
            href: "/ozellikler/ai-sesli-ajanlar",
          },
          {
            icon: ClipboardList,
            title: "Görev & Bilet Yönetimi",
            description:
              "Otomatik görev atama, bilet takibi ve önceliklendirme.",
            href: "/ozellikler/gorev-bilet-yonetimi",
          },
          {
            icon: BarChart3,
            title: "Raporlama & Dashboard",
            description:
              "AI destekli raporlama ve gerçek zamanlı analitik dashboard.",
            href: "/ozellikler/raporlama-dashboard",
          },
        ]}
      />

      <FeatureCta
        title="Çağrı merkezinizi dönüştürün"
        subtitle="AI destekli çağrı merkezi yönetimi ile verimliliğinizi 3 kata kadar artırın."
      />
    </div>
  );
}
