import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { FaqSection } from "@/components/pricing/faq-section";
import { PricingCta } from "@/components/pricing/pricing-cta";

export const metadata: Metadata = {
  title: "Fiyatlandırma — CriTT CRM | İşletmenize Özel Çözüm",
  description:
    "CriTT CRM Starter, Professional ve Enterprise planları. İhtiyaçlarınıza göre özelleştirilmiş teklif alın.",
};

export default function FiyatlandirmaPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <FaqSection />
      <PricingCta />
    </div>
  );
}
