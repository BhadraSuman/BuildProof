export default function HowItWorks() {
  const steps = [
    {
      phase: "Phase 01",
      title: "Unannounced Site Visits & Sampling",
      desc: "Our certified civil engineers arrive on site without contractor pre-notification. Samples (cube moulds, rebar cut-pieces, cement bags, brick batches) are extracted directly from arriving lorries prior to pouring or laying.",
      tag: "Adheres to: IS 1199 (Fresh concrete sampling) & IS 5454 (Clay brick lot sampling)",
      isHighlight: false,
    },
    {
      phase: "Phase 02",
      title: "NABL-Accredited Laboratory Testing",
      desc: "Extracted specimens are barcoded with tamper-evident serials and delivered to government-recognized, ISO/IEC 17025 accredited labs. Destructive universal tensile checks, chemical efflorescence, and hydraulic crushing tests are executed.",
      tag: "Output: Verifiable test certificate with QR validation directly from the testing facility.",
      isHighlight: false,
    },
    {
      phase: "Phase 03",
      title: "Geotagged Reinforcement & Shuttering Audits",
      desc: "Prior to any slab or column pour, our auditor verifies rebar spacing, overlap laps (50d check), cover block placement (min 25mm–40mm), and formwork plumbness. Every inspection is photographic with embedded lat/long metadata.",
      tag: "Verification: Timestamped visual registry accessible 24/7 on the client portal.",
      isHighlight: false,
    },
    {
      phase: "Phase 04",
      title: "Real-Time Snag Dispatch & Payout Sign-off",
      desc: "Pass/fail notices hit your WhatsApp and email instantaneously. Failed test batches trigger formal civil dispute notes, arming you with clear legal documentation to withhold stage payments until defective work is rectified.",
      tag: "Protection: You release capital only after engineering verification, never on contractor claims.",
      isHighlight: true,
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-brand-bgLight" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider block">
              02 / Execution Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Independent civil oversight from excavation to handover.
            </h2>
            <p className="text-xs sm:text-[14px] text-brand-muted leading-relaxed">
              We operate strictly outside the contractor&apos;s hierarchy. Every sampling is physical, unannounced, and bound by Bureau of Indian Standards testing codes.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border-l-2 border-brand-border pl-5 sm:pl-6 space-y-8 sm:space-y-10 relative ml-2 sm:ml-0">
              {steps.map((step) => (
                <div key={step.phase} className="relative">
                  <div
                    className={`absolute -left-[27px] sm:-left-[31px] top-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-brand-bgLight ${
                      step.isHighlight ? "bg-brand-orange" : "bg-brand-navy"
                    }`}
                  />
                  <div className="text-[10px] sm:text-[11px] font-mono font-bold text-brand-orange uppercase">
                    {step.phase}
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-brand-navy mt-0.5 sm:mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-brand-muted mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="mt-2 text-[11px] sm:text-[12px] font-medium text-brand-navy">
                    {step.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
