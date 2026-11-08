import { ShieldCheck, Scale, Lock, Zap } from "lucide-react";

export default function Governance() {
  const cards = [
    {
      icon: ShieldCheck,
      index: "01",
      title: "100% Client-Aligned",
      desc: "Zero contractor kickbacks or material commissions. We represent strictly the property owner or public procuring entity.",
    },
    {
      icon: Scale,
      index: "02",
      title: "RERA & Vigilance Ready",
      desc: "ISO 17025 accredited certificates with digital audit hashes, legally admissible before RERA benches, consumer dispute courts, and state vigilance audits.",
    },
    {
      icon: Lock,
      index: "03",
      title: "Milestone Bill Gating",
      desc: "Contractors receive stage bill releases only after independent physical testing clears curing duration and design strength.",
    },
    {
      icon: Zap,
      index: "04",
      title: "Real-Time Snag Intercept",
      desc: "Substandard consignments quarantined within hours, preventing irreversible concrete coverage over defective rebars or failed aggregates.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 border-b border-brand-border bg-white" id="governance">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block">
              05 / Financial &amp; Statutory Leverage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
              Why independent oversight changes contractor behavior.
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              When contractors know materials are sampled unannounced and tested in accredited laboratories, substandard consignments are stopped before pouring.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              By tying running account (RA) bill releases to BuildProof civil sign-offs, owners and project engineers eliminate emotional disputes with unalterable technical proof.
            </p>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.index}
                  className="p-5 rounded-[8px] border border-brand-border bg-brand-bgLight/40 hover:bg-white hover:border-brand-navy/30 transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-brand-orange uppercase">
                      Pillar {card.index}
                    </span>
                    <div className="w-7 h-7 rounded bg-white border border-brand-border flex items-center justify-center text-brand-navy shadow-2xs">
                      <Icon className="w-4 h-4 text-brand-navy" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-brand-navy">
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
