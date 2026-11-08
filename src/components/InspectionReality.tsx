import { AlertTriangle, TrendingDown, Clock, ShieldAlert } from "lucide-react";

export default function InspectionReality() {
  const vulnerabilities = [
    {
      icon: TrendingDown,
      number: "01",
      title: "Material Substitution",
      desc: "Grade 53 OPC cement quietly replaced with blended fly-ash PPC; uncertified local rebar delivered without mill certificates or carbon tracking.",
      impact: "20–35% reduction in 28-day tensile and load capacity",
    },
    {
      icon: Clock,
      number: "02",
      title: "Rushed Curing & Shuttering",
      desc: "Formwork props removed well before mandatory 14–21 day curing intervals dictated by IS 456, causing micro-fissuring during tensile deficit.",
      impact: "Premature deflection, latent slab sagging, and seepage",
    },
    {
      icon: ShieldAlert,
      number: "03",
      title: "Delayed Defect Discovery",
      desc: "Efflorescence, thermal cracks, and wall dampness surface 12–24 months into occupancy—long after the 5% retention sum has been released.",
      impact: "Severe capital depreciation and expensive chemical retrofits",
    },
  ];

  return (
    <section className="py-14 sm:py-18 md:py-20 border-b border-brand-border bg-white" id="problem">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Section Header */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block">
              01 / Critical Vulnerability
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Structural compromises contractors rarely disclose.
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
              Without third-party physical extraction and lab validation, property owners absorb hidden risks that only appear years after final handover.
            </p>
          </div>

          {/* Cards List */}
          <div className="lg:col-span-8 space-y-4">
            {vulnerabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="p-4 sm:p-5 rounded-[6px] border border-brand-border bg-brand-bgLight/40 hover:bg-white hover:border-brand-navy/30 transition-all flex flex-col sm:flex-row items-start gap-4"
                >
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {item.number}.
                    </span>
                    <div className="w-8 h-8 rounded-[4px] bg-white border border-brand-border flex items-center justify-center text-brand-navy shadow-2xs">
                      <Icon className="w-4 h-4 text-brand-navy" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-fail bg-brand-failBg px-2.5 py-1 rounded border border-brand-fail/20 mt-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>Impact: {item.impact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
