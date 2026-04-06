import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Brain, MessageCircle, BarChart3, Zap, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "CriTT CRM | AI-Powered CRM Platform",
  description:
    "CriTT is an AI-powered CRM and service ecosystem designed to manage critical processes end-to-end. Call center, WhatsApp, AI voice agents, workflow automation.",
  alternates: {
    languages: { tr: "/" },
  },
};

const features = [
  {
    icon: Brain,
    title: "AI Categorization",
    description: "Automatically classify and route every customer interaction with machine learning.",
  },
  {
    icon: MessageCircle,
    title: "Omnichannel Communication",
    description: "Unified inbox for WhatsApp, e-mail, phone, and social media channels.",
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description: "Real-time dashboards and actionable insights for your entire operation.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Build no-code automations that eliminate repetitive tasks and reduce errors.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "KVKK / GDPR compliant infrastructure with enterprise-grade data protection.",
  },
  {
    icon: Globe,
    title: "25+ Integrations",
    description: "Connect CriTT with your existing ERP, e-commerce, and billing systems.",
  },
];

export default function EnPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-20" />
        <div className="absolute inset-0 radial-glow -z-10" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-4 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase mb-6">
              ● AI-POWERED CRM
            </span>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-tertiary-fixed-dim bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              communication,
              <br />
              powerful management
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              An AI-powered CRM and service ecosystem designed to manage critical
              processes end-to-end — from call centers to WhatsApp, from workflow
              automation to real-time analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-headline font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
              >
                Request a Demo
              </Link>
              <Link
                href="/ozellikler"
                className="glass-card px-8 py-4 rounded-full font-headline font-bold border border-white/40 hover:bg-white/40 transition-all active:scale-95"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[2rem] p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                src="/images/hero-dashboard.webp"
                alt="CriTT CRM dashboard showing customer management, AI analytics, and omnichannel communication"
                width={640}
                height={400}
                className="w-full h-auto rounded-2xl shadow-inner"
                priority
                quality={90}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card ai-card p-6 rounded-2xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="text-primary" size={24} />
                <span className="text-sm font-bold font-headline">AI Analysis</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">
                Customer satisfaction increased 14% in the last 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
            ● FEATURES
          </span>
          <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
            Everything you need in one platform
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">
            25+ integrated modules that cover every touchpoint of the customer journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-8 pb-24 text-center">
        <div className="glass-card ai-card rounded-3xl p-12">
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl mb-4">
            Ready to modernize your operations?
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-md mx-auto">
            Join leading companies already using CriTT to deliver faster, smarter customer service.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
