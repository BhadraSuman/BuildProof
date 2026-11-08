import { ArrowRight } from "lucide-react";

export default function InspectionReality() {
  const vulnerabilities = [
    {
      number: "01.",
      title: "Uncontrolled material substitution",
      desc: "High-grade 53 OPC cement specified in structural drawings quietly substituted with blended fly-ash PPC; rebar supplied from local uncertified re-rolling mills without authentic mill test certificates or carbon equivalent tracking.",
      impact: "Measured impact: 20–35% reduction in intended 28-day tensile/load tolerance.",
    },
    {
      number: "02.",
      title: "Unverified curing cycles and stripped shuttering",
      desc: "Contractors rush staging timelines, stripping formwork props well before the mandatory 14–21 day curing intervals dictated by IS 456. Internal micro-fissuring forms while the concrete is in tensile deficit.",
      impact: "Measured impact: Premature deflection, latent slab sagging, and water percolation.",
    },
    {
      number: "03.",
      title: "Delayed discovery post-retention release",
      desc: "Masonry efflorescence, thermal cracks, and structural dampness emerge 12–24 months into occupancy—long after the standard 5% contractor retention sum has been fully disbursed and guarantees have lapsed.",
      impact: "Measured impact: Severe capital depreciation and expensive post-construction chemical retrofits.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-white" id="problem">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4">
            <span className="text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider block mb-2">
              01 / Critical Vulnerability
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Structural compromises contractors rarely disclose.
            </h2>
            <p className="text-sm sm:text-[14px] text-brand-muted mt-3 sm:mt-4 leading-relaxed">
              Without third-party physical extraction and lab validation, property financiers and owners absorb hidden structural risks that only reveal themselves years after final payment release.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-brand-border">
            {vulnerabilities.map((item) => (
              <div
                key={item.number}
                className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start"
              >
                <span className="sm:col-span-2 font-mono text-sm sm:text-[14px] font-bold text-brand-orange">
                  {item.number}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="text-base sm:text-[16px] font-bold text-brand-navy">{item.title}</h3>
                  <p className="text-xs sm:text-[14px] text-brand-muted mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-2 text-xs sm:text-[12px] font-medium text-brand-fail flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
