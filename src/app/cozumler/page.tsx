import type { Metadata } from "next";
import { SolutionsHero } from "@/components/solutions/solutions-hero";
import { SectorGrid } from "@/components/solutions/sector-grid";
import { SolutionsStats } from "@/components/solutions/solutions-stats";
import { SolutionsCta } from "@/components/solutions/solutions-cta";

export const metadata: Metadata = {
  title: "Çözümler — CriTT CRM | Sektörel CRM Çözümleri",
  description:
    "Kamu, finans, sigorta, perakende, enerji ve çağrı merkezi sektörlerine özel yapay zeka destekli CRM çözümleri.",
};

export default function CozumlerPage() {
  return (
    <div className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <SolutionsHero />
      <SectorGrid />
      <SolutionsStats />
      <SolutionsCta />
    </div>
  );
}
