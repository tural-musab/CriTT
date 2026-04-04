import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { FlowDiagram } from "@/components/sections/flow-diagram";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { AiHighlight } from "@/components/sections/ai-highlight";
import { SectorSolutions } from "@/components/sections/sector-solutions";
import { Stats } from "@/components/sections/stats";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FlowDiagram />
      <FeaturesGrid />
      <AiHighlight />
      <SectorSolutions />
      <Stats />
      <CtaSection />
    </>
  );
}
