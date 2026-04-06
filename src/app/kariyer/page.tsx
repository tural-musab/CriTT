import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kariyer — CriTT CRM",
  description: "CriTT ekibine katılın. Açık pozisyonlar ve kariyer fırsatları yakında yayında.",
};

export default function KariyerPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-8 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
          <Rocket size={36} />
        </div>

        <span className="inline-block py-1 px-4 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase mb-6">
          ● KARİYER
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">
          Yakında{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-fixed-dim">
            burada
          </span>
        </h1>

        <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg mx-auto">
          CriTT ekibini büyütüyoruz. Açık pozisyonlarımız ve kariyer fırsatlarımız
          çok yakında bu sayfada yayınlanacak.
        </p>

        <div className="glass-card rounded-3xl p-8 mb-10 text-left">
          <h2 className="font-headline font-bold text-lg mb-4">Şimdilik bize ulaşın</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            İlgilendiğiniz pozisyon veya uzmanlık alanınızı belirterek özgeçmişinizi
            gönderebilirsiniz. Uygun bir pozisyon açıldığında sizinle iletişime geçeceğiz.
          </p>
          <a
            href="mailto:info@critt.com.tr?subject=Kariyer Başvurusu"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-headline font-bold text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            <Mail size={16} />
            info@critt.com.tr
          </a>
        </div>

        <Link
          href="/"
          className="text-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          ← Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}
