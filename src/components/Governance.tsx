import { ShieldCheck, Scale, Lock, Zap } from "lucide-react";

export default function Governance() {
  const cards = [
    {
      icon: ShieldCheck,
      index: "01",
      title: "100% Client-Aligned",
      desc: "Zero contractor kickbacks or material commissions. We represent only the paying property owner.",
    },
    {
      icon: Scale,
      index: "02",
      title: "Legal Evidentiary Reports",
      desc: "ISO 17025 accredited partner lab certificates, legally admissible before RERA and consumer forums.",
    },
    {
      icon: Lock,
      index: "03",
      title: "Stage Payment Gating",
      desc: "Release milestone funds only after third-party lab sign-offs validate structural curing and grade compliance.",
    },
    {
      icon: Zap,
      index: "04",
      title: "Immediate Defect Intercept",
      desc: "Substandard batches flagged within hours, preventing permanent concrete coverage over defective rebar.",
    },
  ];

  return (
    <section className="py-14 sm:py-18 md:py-20 border-b border-brand-border bg-white" id="governance">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block">
              05 / Financial Leverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Why independent oversight changes contractor behavior.
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              When contractors know materials are sampled unannounced and tested in accredited labs, substandard consignments are stopped before pouring.
            </p>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.index}
                  className="p-4 rounded-[6px] border border-brand-border bg-brand-bgLight/40 hover:bg-white hover:border-brand-navy/30 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-brand-orange uppercase">
                      Pillar {card.index}
                    </span>
                    <div className="w-6 h-6 rounded bg-white border border-brand-border flex items-center justify-center text-brand-navy">
                      <Icon className="w-3.5 h-3.5 text-brand-navy" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    {card.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
