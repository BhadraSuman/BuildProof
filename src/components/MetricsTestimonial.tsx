export default function MetricsTestimonial() {
  const metrics = [
    {
      value: "120+",
      label: "Independent Residential Audits Conducted",
    },
    {
      value: "5,200+",
      label: "NABL Destructive & Mechanical Tests Executed",
    },
    {
      value: "₹1.4 Cr+",
      label: "Client Capital Protected from Defective Work",
    },
  ];

  return (
    <section className="py-14 sm:py-20 border-b border-brand-border bg-brand-bgLight">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-10 sm:pb-14 border-b border-brand-border">
          {metrics.map((m) => (
            <div key={m.label} className="text-left">
              <div className="text-3xl sm:text-4xl font-bold text-brand-navy font-mono">
                {m.value}
              </div>
              <div className="text-xs sm:text-[13px] text-brand-muted mt-1 leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Client Testimonial */}
        <div className="pt-8 sm:pt-12 max-w-3xl">
          <blockquote className="text-base sm:text-[17px] md:text-[19px] font-medium text-brand-navy leading-relaxed italic">
            “BuildProof caught substandard steel delivered to our New Town villa while I was working in London. Saved us over ₹8 Lakhs and prevented catastrophic deflection. Worth every single rupee.”
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs shrink-0">
              AM
            </div>
            <div>
              <div className="text-xs sm:text-[13px] font-bold text-brand-navy">Anirban Mukherjee</div>
              <div className="text-[11px] sm:text-[12px] text-brand-muted">NRI Property Owner • London / Kolkata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
