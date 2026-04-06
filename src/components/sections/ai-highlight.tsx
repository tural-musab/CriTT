import Image from "next/image";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Satış süreçleriniz için daha fazla satış",
  "Hizmetleriniz için daha çok memnuniyet",
  "İç süreçleriniz için verimlilik elde etme zamanı!",
];

export function AiHighlight() {
  return (
    <section className="py-24 px-8 bg-surface-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="font-headline font-extrabold text-4xl lg:text-5xl leading-tight mb-8 text-white">
            Yapay zeka modüllerimiz ile{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              daha kısa sürede...
            </span>
          </h2>

          <ul className="space-y-6 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-4 text-on-surface-variant">
                <CheckCircle className="text-primary mt-1 shrink-0" size={24} />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

          <button className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-headline font-bold shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:scale-105 transition-all">
            AI Özelliklerini Keşfet
          </button>
        </div>

        <div className="relative">
          <div className="glass-card p-1 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ai-visualization.jpg"
              alt="AI Visualization"
              width={640}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
