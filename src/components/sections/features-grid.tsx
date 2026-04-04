import {
  MessageCircle,
  Globe,
  MessagesSquare,
  BarChart3,
  TrendingUp,
  Headphones,
  CheckSquare,
  Brain,
  Send,
  Handshake,
  Phone,
  Ticket,
  ShieldCheck,
  UserCircle,
  Coffee,
  Database,
  GitBranch,
  FolderOpen,
  Smartphone,
  LineChart,
  CalendarDays,
  Megaphone,
  HardDrive,
  Bot,
  FileInput,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  label: string;
  isAi?: boolean;
}

const features: Feature[] = [
  { icon: MessageCircle, label: "WhatsApp Entegrasyonu" },
  { icon: Globe, label: "Sosyal Medya Dinleme" },
  { icon: MessagesSquare, label: "Chat & Mesajlaşma" },
  { icon: BarChart3, label: "Raporlama & Dashboard" },
  { icon: TrendingUp, label: "Satış ve Pazarlama" },
  { icon: Headphones, label: "Çağrı Merkezi" },
  { icon: CheckSquare, label: "Görev Yönetimi" },
  { icon: Brain, label: "Yapay Zeka", isAi: true },
  { icon: Send, label: "Otomatik Bildirimler" },
  { icon: Handshake, label: "Hizmet Yönetimi" },
  { icon: Phone, label: "Otomatik Arama" },
  { icon: Ticket, label: "Bilet Yönetimi" },
  { icon: ShieldCheck, label: "Yetkilendirme" },
  { icon: UserCircle, label: "Müşteri Yönetimi" },
  { icon: Coffee, label: "Mola Yönetimi" },
  { icon: Database, label: "Veri Toplama" },
  { icon: GitBranch, label: "İş Akışı/Flow" },
  { icon: FolderOpen, label: "Dosya Yönetimi" },
  { icon: Smartphone, label: "Mobil Uygulama" },
  { icon: LineChart, label: "AI Raporlama", isAi: true },
  { icon: CalendarDays, label: "Takvim Yönetimi" },
  { icon: Megaphone, label: "Toplu İletişim" },
  { icon: HardDrive, label: "Kurumsal Hafıza" },
  { icon: Bot, label: "Akıllı Kaynak Planlama" },
  { icon: FileInput, label: "Dinamik Form" },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4">
          ● TÜM ÖZELLİKLER
        </span>
        <h2 className="font-headline font-extrabold text-4xl">
          Basit, bütünleşik, kabiliyetli
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.label}
              className={`glass-card ${feature.isAi ? "ai-card bg-primary/5" : "hover:bg-surface-container-high"} p-6 rounded-2xl transition-colors`}
            >
              <Icon className="text-primary mb-3" size={24} />
              <p className="font-headline font-bold text-sm">{feature.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
