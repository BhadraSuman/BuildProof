export default function Governance() {
  const cards = [
    {
      index: "01. Zero Conflicts",
      title: "100% Client-Aligned",
      desc: "We take no contractor referrals, supplier kickbacks, or material commissions. We represent only the paying property owner.",
    },
    {
      index: "02. NABL Accredited",
      title: "Legal Evidentiary Reports",
      desc: "Every test certificate is backed by ISO 17025 accredited partner labs, legally admissible in consumer forums and RERA arbitrations.",
    },
    {
      index: "03. Stage Gating",
      title: "Payment Protection",
      desc: "Contractors receive stage milestone disbursements only after our civil desk validates structural integrity and curing compliance.",
    },
    {
      index: "04. Rapid Alerts",
      title: "Immediate Defect Intercept",
      desc: "Defects are flagged on your smartphone hours after specimen testing, preventing permanent concrete coverage over defective rebar.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-white" id="governance">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider block">
              05 / Financial Leverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Why independent oversight changes contractor behavior.
            </h2>
            <p className="text-xs sm:text-[14px] text-brand-muted leading-relaxed">
              When contractors know every cement consignment and concrete pour is sampled physically for laboratory testing, substandard materials are never dispatched to your plot.
            </p>
            <p className="text-xs sm:text-[14px] text-brand-muted leading-relaxed">
              By tying stage payouts strictly to BuildProof engineering sign-offs, property financiers eliminate emotional arguments and contractor delays with objective legal evidence.
            </p>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {cards.map((card) => (
              <div
                key={card.index}
                className="p-4 sm:p-5 border border-brand-border rounded-[6px] bg-brand-bgLight hover:border-brand-navy/30 transition-all"
              >
                <span className="text-[11px] sm:text-[12px] font-bold text-brand-orange uppercase font-mono">
                  {card.index}
                </span>
                <h3 className="text-sm sm:text-[15px] font-bold text-brand-navy mt-1">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-brand-muted mt-1 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
