"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const sectorOptions = [
  "Kamu & Belediye",
  "Finans & Bankacılık",
  "Sigorta",
  "Perakende & E-Ticaret",
  "Enerji & Altyapı",
  "Çağrı Merkezi & BPO",
  "Diğer",
];

export function ContactForm() {
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  return (
    <div className="glass-card p-8 md:p-10 rounded-3xl">
      <h2 className="text-2xl font-bold font-headline mb-8">Mesaj Gönderin</h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Ad Soyad <span className="text-error">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="Adınız Soyadınız"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Şirket Adı <span className="text-error">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="Şirketinizin adı"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              E-posta <span className="text-error">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="ornek@sirket.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Telefon <span className="text-error">*</span>
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="+90 (5XX) XXX XX XX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface mb-2">Sektör</label>
          <select className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
            <option value="">Sektör seçiniz</option>
            {sectorOptions.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface mb-2">Mesajınız</label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
            placeholder="Mesajınızı buraya yazın..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="kvkk"
            checked={kvkkAccepted}
            onChange={(e) => setKvkkAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
          />
          <label htmlFor="kvkk" className="text-sm text-on-surface-variant leading-relaxed">
            Kişisel verilerimin CriTT tarafından işlenmesini kabul ediyorum.{" "}
            <a href="/kvkk" className="text-primary underline">
              KVKK Aydınlatma Metni
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={!kvkkAccepted}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-full font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          <Send size={20} />
          Mesaj Gönder
        </button>
      </form>
    </div>
  );
}
