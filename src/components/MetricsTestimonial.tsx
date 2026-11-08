export default function MetricsTestimonial() {
  const metrics = [
    {
      value: "120+",
      label: "Independent Audits Completed",
    },
    {
      value: "5,200+",
      label: "NABL Lab Tests Executed",
    },
    {
      value: "₹1.4 Cr+",
      label: "Capital Protected from Defects",
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-brand-border bg-brand-bgLight">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 sm:pb-10 border-b border-brand-border text-center sm:text-left">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-3xl sm:text-4xl font-bold text-brand-navy font-mono">
                {m.value}
              </div>
              <div className="text-xs text-brand-muted mt-1 font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Testimonial */}
        <div className="pt-8 max-w-2xl">
          <blockquote className="text-sm sm:text-base font-medium text-brand-navy leading-relaxed italic">
            “BuildProof caught substandard steel delivered to our New Town villa while I was working in London. Saved us over ₹8 Lakhs and prevented catastrophic deflection.”
          </blockquote>
          <div className="mt-3 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-[11px] shrink-0">
              AM
            </div>
            <div>
              <div className="text-xs font-bold text-brand-navy">Anirban Mukherjee</div>
              <div className="text-[10px] text-brand-muted">NRI Property Owner • London / Kolkata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
