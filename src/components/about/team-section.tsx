import { ExternalLink } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  initials: string;
  color: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Ahmet Yılmaz",
    title: "CEO & Kurucu Ortak",
    initials: "AY",
    color: "from-primary to-secondary",
    bio: "15 yıllık CRM ve kurumsal yazılım deneyimiyle CriTT'in vizyonunu ve ürün stratejisini yönetiyor.",
  },
  {
    name: "Selin Kaya",
    title: "CTO & Kurucu Ortak",
    initials: "SK",
    color: "from-secondary to-tertiary-fixed-dim",
    bio: "Yapay zeka ve dağıtık sistem mimarisinde uzman; CriTT'in teknoloji altyapısının mimarı.",
  },
  {
    name: "Emre Doğan",
    title: "Ürün Direktörü",
    initials: "ED",
    color: "from-tertiary to-primary",
    bio: "Kullanıcı deneyimi ve ürün geliştirme süreçlerini yönetiyor; 8 yıllık SaaS ürün yönetimi tecrübesine sahip.",
  },
];

export function TeamSection() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
          ● EKİBİMİZ
        </span>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight font-headline">
          Ekibimizle tanışın
        </h2>
        <p className="text-on-surface-variant mt-4 max-w-lg mx-auto text-sm leading-relaxed">
          CriTT'i hayata geçiren ve her gün daha ileri taşıyan ekibimiz.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="glass-card rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
          >
            {/* Avatar */}
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}
            >
              <span className="text-white font-headline font-extrabold text-xl">
                {member.initials}
              </span>
            </div>

            <h3 className="font-headline font-bold text-lg mb-1">{member.name}</h3>
            <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">
              {member.title}
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              {member.bio}
            </p>

            <button
              aria-label={`${member.name} LinkedIn profili`}
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center mx-auto hover:bg-primary hover:text-white transition-colors"
            >
              <ExternalLink size={15} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
