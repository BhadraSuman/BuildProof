export default function MetricsTestimonial() {
  const metrics = [
    {
      value: "140+",
      label: "Private & Govt Audits Completed",
    },
    {
      value: "6,800+",
      label: "NABL Destructive Tests Executed",
    },
    {
      value: "₹2.1 Cr+",
      label: "Capital Protected from Structural Defects",
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-brand-border bg-brand-bgLight">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 sm:pb-10 border-b border-brand-border text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy font-mono">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm text-brand-muted mt-1.5 font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Testimonial */}
        <div className="pt-8 max-w-3xl">
          <blockquote className="text-sm sm:text-base lg:text-[17px] font-medium text-brand-navy leading-relaxed italic">
            “BuildProof caught substandard steel delivered to our New Town villa while I was working in London. Saved us over ₹8 Lakhs and prevented catastrophic deflection. Their civil team treats client funds with clinical seriousness.”
          </blockquote>
          <div className="mt-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs shrink-0">
              AM
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-brand-navy">Anirban Mukherjee</div>
              <div className="text-[11px] text-brand-muted">NRI Property Owner • London / Kolkata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
