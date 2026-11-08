export default function AudienceSegments() {
  const segments = [
    {
      borderClass: "border-t-2 border-brand-navy",
      labelClass: "text-brand-muted",
      bulletClass: "bg-brand-navy",
      code: "Segment A",
      title: "Individual Home Builders",
      desc: "Constructing a standalone villa or multi-floor family house. Eliminate the exhausting need to physically oversee deliveries or argue over concrete grades you cannot personally verify.",
      bullets: [
        "Milestone payout clearance certificates",
        "Plain-language executive summaries",
      ],
    },
    {
      borderClass: "border-t-2 border-brand-orange",
      labelClass: "text-brand-orange",
      bulletClass: "bg-brand-orange",
      code: "Segment B",
      title: "NRIs & Remote Property Owners",
      desc: "Managing high-value construction in Indian metros from Singapore, Dubai, London, or the US. Secure total operational visibility without relying on biased family updates or contractor WhatsApp videos.",
      bullets: [
        "Timezone-independent web repository",
        "Geotagged high-definition verification logs",
      ],
    },
    {
      borderClass: "border-t-2 border-brand-navy",
      labelClass: "text-brand-muted",
      bulletClass: "bg-brand-navy",
      code: "Segment C",
      title: "Boutique Developers",
      desc: "Developing luxury apartments and independent floors. Differentiate your brand by offering buyers an unalterable third-party civil engineering dossier that commands higher price realizations.",
      bullets: [
        "RERA compliance documentation dossier",
        "Third-party quality certification for buyers",
      ],
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider block mb-2">
            06 / Scope by User Category
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
            Engineered verification built for your operational profile.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {segments.map((seg) => (
            <div key={seg.code} className={`${seg.borderClass} pt-5 sm:pt-6`}>
              <span className={`text-[11px] sm:text-[12px] font-mono font-bold uppercase ${seg.labelClass}`}>
                {seg.code}
              </span>
              <h3 className="text-base sm:text-[18px] font-bold text-brand-navy mt-1">
                {seg.title}
              </h3>
              <p className="text-xs sm:text-[14px] text-brand-muted mt-2 leading-relaxed">
                {seg.desc}
              </p>
              <ul className="mt-4 pt-4 border-t border-brand-border space-y-2 text-[11px] sm:text-[12px] text-brand-muted">
                {seg.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${seg.bulletClass}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
