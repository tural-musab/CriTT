import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/privacy-content";

export const metadata: Metadata = {
  title: "KVKK & Gizlilik Politikası — CriTT CRM",
  description:
    "CriTT CRM kişisel verilerin korunması kanunu (KVKK) uyumlu gizlilik politikası.",
};

export default function KvkkPage() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase mb-6">
            ● YASAL
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-8 font-headline">
            KVKK & Gizlilik Politikası
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Kişisel verilerinizin korunması bizim için önceliktir.
          </p>
        </div>
      </section>

      <PrivacyContent />
    </div>
  );
}
