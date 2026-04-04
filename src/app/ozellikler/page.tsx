import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features-hub/features-hero";
import { CommunicationSection } from "@/components/features-hub/communication-section";
import { AiSection } from "@/components/features-hub/ai-section";
import { TaskProcessSection } from "@/components/features-hub/task-process-section";
import { CustomerDataSection } from "@/components/features-hub/customer-data-section";
import { OperationalToolsSection } from "@/components/features-hub/operational-tools-section";
import { FeaturesCta } from "@/components/features-hub/features-cta";

export const metadata: Metadata = {
  title: "Özellikler — CriTT CRM | 25+ Entegre Modül",
  description:
    "WhatsApp entegrasyonu, AI sesli ajanlar, iş akışı otomasyonu, raporlama ve daha fazlası. CriTT'in tüm özelliklerini keşfedin.",
};

export default function OzelliklerPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <FeaturesHero />
      <CommunicationSection />
      <AiSection />
      <TaskProcessSection />
      <CustomerDataSection />
      <OperationalToolsSection />
      <FeaturesCta />
    </div>
  );
}
