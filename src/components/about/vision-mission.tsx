import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-10 rounded-3xl">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Eye size={28} />
          </div>
          <h3 className="text-2xl font-bold font-headline mb-4">Vizyonumuz</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Kişi ve kurumlarla ilişkilerde kritik öneme sahip süreçleri uçtan uca
            yönetmek üzere tasarlanmış yapay zekâ destekli yenilikçi bir CRM ve
            hizmet ekosistemi sunmak.
          </p>
        </div>

        <div className="glass-card p-10 rounded-3xl">
          <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
            <Target size={28} />
          </div>
          <h3 className="text-2xl font-bold font-headline mb-4">Misyonumuz</h3>
          <p className="text-on-surface-variant leading-relaxed">
            İşletmelere ve kurumlara yalnızca verimlilik değil; aynı zamanda
            sürekli gelişim, sürdürülebilir büyüme ve güçlü bir operasyonel
            zemin sunmak.
          </p>
        </div>
      </div>
    </section>
  );
}
