import { Phone, PhoneForwarded, Shield, TrendingUp, Clock, CheckCircle } from "lucide-react";

export function FinanceDashboard() {
  return (
    <section className="bg-[#0b1326] py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-tertiary-fixed-dim/10 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-tertiary-fixed-dim font-bold text-xs tracking-widest uppercase block mb-4">
            ● CRİTT EXECUTIVE DASHBOARD
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight font-headline">
            Finansal Operasyonlarınız Tek Ekranda
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Active Queue */}
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider">Aktif Müşteri Kuyruğu</h4>
                <span className="text-green-400 text-xs font-bold">12 AKTİF</span>
              </div>
              <div className="space-y-3">
                {[
                  { init: "M", name: "Murat Özkan", issue: "Kredi Başvurusu", status: "AI Yanıtlıyor" },
                  { init: "E", name: "Elif Yılmaz", issue: "Hesap Sorgusu", status: "AI TRANSFER" },
                  { init: "A", name: "Ali Demir", issue: "Kart Kaybı", status: "Uzmana Aktar" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-white text-xs font-bold">
                        {item.init}
                      </div>
                      <div>
                        <span className="text-white/80 text-sm font-medium">{item.name}</span>
                        <span className="text-white/40 text-xs ml-2">{item.issue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PhoneForwarded className="text-white/40" size={12} />
                      <span className="text-primary-fixed-dim text-[10px] font-bold">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Panel */}
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Uyumluluk Paneli</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="text-green-400" size={16} />
                    <span className="text-white/80 text-sm">KVKK Uyumu</span>
                  </div>
                  <span className="text-green-400 text-xs font-bold">%100</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-white/80 text-sm">İşlem Loglama</span>
                  </div>
                  <span className="text-green-400 text-xs font-bold">AKTİF</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="text-amber-400" size={16} />
                    <span className="text-white/80 text-sm">SLA Takibi</span>
                  </div>
                  <span className="text-amber-400 text-xs font-bold">3 AŞIM</span>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, value: "+%42", label: "Verimlilik Artışı", color: "text-green-400" },
              { icon: Shield, value: "99.9%", label: "Uyumluluk Oranı", color: "text-primary-fixed-dim" },
              { icon: Clock, value: "<200ms", label: "Yanıt Süresi", color: "text-tertiary-fixed-dim" },
              { icon: Phone, value: "%60", label: "Maliyet Tasarrufu", color: "text-amber-400" },
            ].map((kpi) => {
              const Icon = kpi.icon;
              return (
                <div key={kpi.label} className="text-center rounded-xl bg-white/[0.04] border border-white/5 p-4">
                  <Icon className={`${kpi.color} mx-auto mb-2`} size={18} />
                  <div className="text-white font-headline font-extrabold text-xl">{kpi.value}</div>
                  <div className="text-white/40 text-[10px]">{kpi.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
