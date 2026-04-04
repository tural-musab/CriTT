import { Mail, Phone, MapPin, Globe, AtSign } from "lucide-react";

const infoCards = [
  { icon: Mail, label: "E-posta", value: "info@critt.com.tr" },
  { icon: Phone, label: "Telefon", value: "+90 (212) 555 00 00" },
  { icon: MapPin, label: "Adres", value: "Mecidiyeköy, İstanbul" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {infoCards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Icon size={22} />
            </div>
            <div>
              <p className="text-sm text-on-surface-variant">{card.label}</p>
              <p className="font-headline font-bold text-on-surface">{card.value}</p>
            </div>
          </div>
        );
      })}

      <div className="glass-card p-6 rounded-2xl">
        <p className="text-sm text-on-surface-variant mb-4">Sosyal Medya</p>
        <div className="flex gap-4">
          {[Globe, AtSign].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Harita/Ofis Placeholder */}
      <div className="glass-card rounded-2xl overflow-hidden h-48">
        <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-primary mx-auto mb-2" size={32} />
            <p className="font-headline font-bold text-on-surface">Mecidiyeköy, İstanbul</p>
            <p className="text-sm text-on-surface-variant">Büyükdere Cad. No: 123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
