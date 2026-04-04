import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { VisionMission } from "@/components/about/vision-mission";
import { ValuesSection } from "@/components/about/values-section";
import { AboutCta } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "Hakkımızda — CriTT CRM | Kritik Süreçlere Teknoloji Dönüşümü",
  description:
    "CriTT, stratejik değer taşıyan işlevleri ve teknoloji dönüşümünü simgeleyen yapay zeka destekli CRM ekosistemidir.",
};

export default function HakkimizdaPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <AboutHero />
      <VisionMission />
      <ValuesSection />
      <AboutCta />
    </div>
  );
}
