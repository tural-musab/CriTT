import { Phone, SmilePlus, Frown, Meh, Clock, CheckCircle, Globe } from "lucide-react";

export function DashboardMockup() {
  return (
    <section className="bg-[#0b1326] py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-tertiary-fixed-dim/15 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-tertiary-fixed-dim font-bold text-xs tracking-widest uppercase block mb-4">
            ● CANLI DASHBOARD
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight font-headline">
            AI Sesli Ajan Kontrol Paneli
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] p-8 shadow-2xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 font-headline font-bold text-sm">12 Aktif Çağrı</span>
            </div>
            <span className="text-white/40 text-xs">Son güncelleme: Şimdi</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Sentiment Analysis */}
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Duygu Analizi</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SmilePlus className="text-green-400" size={18} />
                  <div className="flex-1 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-green-400" style={{ width: "68%" }} />
                  </div>
                  <span className="text-white/80 text-xs font-bold">%68</span>
                </div>
                <div className="flex items-center gap-3">
                  <Meh className="text-amber-400" size={18} />
                  <div className="flex-1 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-amber-400" style={{ width: "22%" }} />
                  </div>
                  <span className="text-white/80 text-xs font-bold">%22</span>
                </div>
                <div className="flex items-center gap-3">
                  <Frown className="text-red-400" size={18} />
                  <div className="flex-1 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-red-400" style={{ width: "10%" }} />
                  </div>
                  <span className="text-white/80 text-xs font-bold">%10</span>
                </div>
              </div>
            </div>

            {/* Active Calls */}
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Aktif Çağrılar</h4>
              <div className="space-y-3">
                {[
                  { name: "Ayşe K.", type: "Hesap Sorgusu", status: "AI Yanıtlıyor", color: "bg-primary" },
                  { name: "Mehmet D.", type: "Şikayet", status: "Uzmana Aktar", color: "bg-amber-500" },
                  { name: "Fatma Y.", type: "Randevu", status: "AI Çözüldü", color: "bg-green-500" },
                ].map((call) => (
                  <div key={call.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="text-white/40" size={14} />
                      <div>
                        <span className="text-white/80 text-sm font-medium">{call.name}</span>
                        <span className="text-white/40 text-xs ml-2">{call.type}</span>
                      </div>
                    </div>
                    <span className={`${call.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                      {call.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Clock, value: "<200ms", label: "Ort. Yanıt Süresi" },
              { icon: CheckCircle, value: "%94", label: "Çözüm Oranı" },
              { icon: Globe, value: "31+", label: "Aktif Dil" },
              { icon: Phone, value: "1.2K", label: "Günlük Çağrı" },
            ].map((kpi) => {
              const Icon = kpi.icon;
              return (
                <div key={kpi.label} className="text-center rounded-xl bg-white/[0.04] border border-white/5 p-4">
                  <Icon className="text-primary-fixed-dim mx-auto mb-2" size={18} />
                  <div className="text-white font-headline font-extrabold text-lg">{kpi.value}</div>
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
