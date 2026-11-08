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
    <section className="py-14 sm:py-20 border-b border-brand-border bg-brand-navy text-white">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-white/10 text-center">
          {metrics.map((m, i) => (
            <div key={m.label} className={`${i > 0 ? "sm:border-l border-white/10 sm:pl-8" : ""}`}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-mono tracking-tight">
                {m.value}
              </div>
              <div className="text-sm text-slate-300 mt-2 font-medium leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Testimonial */}
        <div className="pt-10 max-w-3xl mx-auto text-center">
          <div className="text-brand-orange text-3xl mb-3 leading-none font-serif">&ldquo;</div>
          <blockquote className="text-sm sm:text-base lg:text-[18px] font-medium text-white leading-relaxed">
            &ldquo;BuildProof caught substandard steel delivered to our New Town villa while I was working in London. Saved us over ₹8 Lakhs and prevented catastrophic deflection. Their civil team treats client funds with clinical seriousness.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-white flex items-center justify-center font-bold text-sm shrink-0">
              AM
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Anirban Mukherjee</div>
              <div className="text-[11px] text-slate-400">NRI Property Owner • London / Kolkata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
