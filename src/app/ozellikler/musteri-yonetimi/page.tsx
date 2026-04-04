import type { Metadata } from "next";
import {
  Users,
  UserCircle,
  Monitor,
  Ban,
  Headphones,
  ShoppingCart,
  Building,
  Landmark,
  Phone,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { FeatureDetailHero } from "@/components/feature-detail/feature-detail-hero";
import { SubFeatures } from "@/components/feature-detail/sub-features";
import { UseCases } from "@/components/feature-detail/use-cases";
import { FeatureStats } from "@/components/feature-detail/feature-stats";
import { RelatedFeatures } from "@/components/feature-detail/related-features";
import { FeatureCta } from "@/components/feature-detail/feature-cta";

export const metadata: Metadata = {
  title:
    "Müşteri Yönetimi — CriTT CRM | 360° Profil ve Agent Workspace",
  description:
    "CriTT ile müşterilerinizi 360° tanıyın. Agent Workspace, AI otomatik tanıma, kara liste yönetimi ve tüm kanallardan tek profil.",
};

export default function MusteriYonetimiPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeatureDetailHero
        badge="MÜŞTERİ YÖNETİMİ"
        title="Radar ve Kokpit bir arada. Agent Workspace!"
        highlightWord="Agent Workspace!"
        subtitle="Tüm kanallardan gelen müşteri verilerini tek bir 360° profilde birleştirin. AI destekli otomatik tanıma, geçmiş etkileşimler ve akıllı iletişim önerileri."
        icon={Users}
      />

      <SubFeatures
        features={[
          {
            icon: UserCircle,
            title: "360° Müşteri Profili",
            points: [
              "Genel bilgiler, iletişim ve segmentasyon",
              "Adresler, bilgilendirmeler ve arama kayıtları",
              "Ticket, notlar ve sohbet geçmişi",
              "Tüm kanallardan tek profilde birleştirme",
              "Müşteri yaşam döngüsü takibi",
            ],
          },
          {
            icon: Monitor,
            title: "Agent Workspace",
            points: [
              "Müşteriler AI ile otomatik tanınır",
              "Geçmiş yazışmalar ve görüşme notları",
              "Sesli görüşme özetleri ve sosyal medya geçmişi",
              "Teklifler, e-mailler ve geri bildirimler",
              "AI destekli iletişim önerisi",
            ],
          },
          {
            icon: Ban,
            title: "Kara Liste",
            points: [
              "Tüm kanallarda tek noktadan engelleme",
              "Arama, SMS, e-posta veya tümünü engelleme",
              "Yasal mevzuata tam uyumluluk",
              "Engel geçmişi ve denetim kaydı",
              "Toplu engelleme ve kaldırma",
            ],
          },
        ]}
      />

      <UseCases
        cases={[
          {
            icon: Headphones,
            sector: "Çağrı Merkezi",
            scenario:
              "Gelen arama anında müşterinin 360° profili ekrana gelir. Temsilci geçmiş etkileşimleri görerek kişiselleştirilmiş hizmet sunar.",
          },
          {
            icon: ShoppingCart,
            sector: "Satış",
            scenario:
              "Lead nurturing süreçleri ve satın alma geçmişi tek ekranda. Satış ekibi doğru zamanda doğru teklifle müşteriye ulaşır.",
          },
          {
            icon: Landmark,
            sector: "Belediye",
            scenario:
              "Vatandaş bazlı işlem geçmişi, başvuru takibi ve hizmet kayıtları tek profilde toplanır.",
          },
          {
            icon: Building,
            sector: "E-Ticaret",
            scenario:
              "Sipariş, iade ve kampanya geçmişi ile müşteri davranış analizi. Kişiselleştirilmiş kampanya önerileri.",
          },
        ]}
      />

      <FeatureStats
        stats={[
          { value: "360°", label: "Müşteri Görünümü" },
          { value: "9+", label: "Profil Sekmesi" },
          { value: "AI", label: "Otomatik Tanıma" },
          { value: "%100", label: "Kanal Engeli" },
        ]}
      />

      <RelatedFeatures
        features={[
          {
            icon: Phone,
            title: "İletişim Kanalları",
            description:
              "Telefon, e-posta, SMS, chat ve sosyal medya entegrasyonu.",
            href: "/ozellikler/iletisim-kanallari",
          },
          {
            icon: Sparkles,
            title: "AI Sesli Ajanlar",
            description:
              "7/24 kesintisiz AI destekli müşteri karşılama ve yönlendirme.",
            href: "/ozellikler/ai-sesli-ajanlar",
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
        title="Müşterilerinizi 360° tanıyın"
        subtitle="Agent Workspace ile müşteri deneyimini üst seviyeye taşıyın. Hemen demo talep edin."
      />
    </div>
  );
}
