import { Truck, FlaskConical, Camera, ShieldAlert } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Truck,
      phase: "Phase 01",
      title: "Unannounced Site Sampling",
      desc: "Our civil engineers arrive on site unnotified to extract raw specimens (cube moulds, rebar cut-pieces, cement bags) directly from delivery lorries.",
      code: "IS 1199 & IS 5454",
    },
    {
      icon: FlaskConical,
      phase: "Phase 02",
      title: "NABL Destructive Lab Testing",
      desc: "Barcoded specimens are tested in ISO/IEC 17025 accredited labs for tensile yield, elongation, chemical efflorescence, and hydraulic crushing strength.",
      code: "ISO/IEC 17025 Accredited",
    },
    {
      icon: Camera,
      phase: "Phase 03",
      title: "Geotagged Reinforcement Audits",
      desc: "Prior to slab or column pours, auditors verify rebar spacing, laps (50d check), and cover block placement with timestamped GPS photo logs.",
      code: "Lat/Long Geotagged Registry",
    },
    {
      icon: ShieldAlert,
      phase: "Phase 04",
      title: "Snag Intercept & Milestone Gating",
      desc: "Instant pass/fail notices hit your portal. Failed batches generate legal Non-Conformance Reports (NCR) empowering you to withhold stage payments.",
      code: "Payment Gating Protection",
      isHighlight: true,
    },
  ];

  return (
    <section className="py-14 sm:py-18 md:py-20 border-b border-brand-border bg-brand-bgLight" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Header */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block">
              02 / Execution Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Independent civil oversight from excavation to handover.
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              We operate strictly outside the contractor&apos;s hierarchy. Every sample is physical, unannounced, and bound by Bureau of Indian Standards testing codes.
            </p>
          </div>

          {/* Sequential Track */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.phase}
                    className={`p-4 sm:p-5 rounded-[6px] border bg-white flex flex-col justify-between transition-all ${
                      step.isHighlight
                        ? "border-brand-orange/40 ring-1 ring-brand-orange/20"
                        : "border-brand-border hover:border-brand-navy/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider">
                          {step.phase}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-xs ${
                            step.isHighlight
                              ? "bg-brand-orange/10 text-brand-orange"
                              : "bg-brand-bgLight text-brand-navy"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-[15px] font-bold text-brand-navy leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-brand-muted mt-1.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-brand-border/60">
                      <span className="inline-block text-[10px] font-medium text-brand-navy bg-brand-bgLight px-2 py-0.5 rounded border border-brand-border">
                        {step.code}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
