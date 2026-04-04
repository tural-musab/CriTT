"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Deneme süresi var mı?",
    answer:
      "Evet, tüm planlar için 14 günlük ücretsiz deneme sunuyoruz. Deneme süresinde tüm özelliklere erişebilirsiniz.",
  },
  {
    question: "Kaç kullanıcı ekleyebilirim?",
    answer:
      "Kullanıcı sayısı planınıza göre belirlenir. Enterprise planlarda sınırsız kullanıcı desteği mevcuttur.",
  },
  {
    question: "Mevcut sistemimle entegre olur mu?",
    answer:
      "Evet, RESTful API ve webhook desteği ile mevcut ERP, muhasebe ve iletişim sistemlerinizle entegre çalışır.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Starter planlar aynı gün aktif olur. Enterprise planlar için ortalama 2-4 haftalık implementasyon süreci uygulanır.",
  },
  {
    question: "Eğitim ve destek dahil mi?",
    answer:
      "Tüm planlarda online eğitim ve e-posta desteği dahildir. Professional ve Enterprise planlarda canlı eğitim ve öncelikli destek sunulur.",
  },
  {
    question: "Verilerim güvende mi? KVKK uyumlu mu?",
    answer:
      "Evet, tüm veriler Türkiye'deki veri merkezlerinde saklanır ve KVKK mevzuatına tam uyum sağlar.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-on-surface tracking-tight font-headline">
          Sıkça Sorulan Sorular
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="glass-card rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-headline font-bold text-on-surface pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`shrink-0 text-primary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
