"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      sector: formData.get("sector") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Bir hata oluştu.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Bir hata oluştu.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card p-8 md:p-10 rounded-3xl text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h2 className="text-2xl font-bold font-headline mb-2">Mesajınız Alındı!</h2>
        <p className="text-on-surface-variant">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 md:p-10 rounded-3xl">
      <h2 className="text-2xl font-bold font-headline mb-8">Mesaj Gönderin</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Ad Soyad <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="name"
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
              name="company"
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
              name="email"
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
              name="phone"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="+90 (5XX) XXX XX XX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface mb-2">Sektör</label>
          <select
            name="sector"
            className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          >
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
            name="message"
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

        {status === "error" && (
          <p className="text-error text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={!kvkkAccepted || status === "loading"}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-full font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Send size={20} />
              Mesaj Gönder
            </>
          )}
        </button>
      </form>
    </div>
  );
}
