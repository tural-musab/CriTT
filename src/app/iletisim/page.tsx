import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "İletişim — CriTT CRM | Bize Ulaşın",
  description:
    "CriTT CRM hakkında sorularınız, demo talepleriniz ve iş birliği önerileriniz için bize ulaşın.",
};

export default function IletisimPage() {
  return (
    <div className="relative pt-32 pb-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <ContactHero />

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
