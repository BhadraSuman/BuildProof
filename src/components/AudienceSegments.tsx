import { Check, Landmark, Home, Globe2, Building2 } from "lucide-react";

export default function AudienceSegments() {
  const segments = [
    {
      icon: Home,
      code: "Segment A",
      title: "Individual Home Builders",
      desc: "Constructing an independent villa or residence. Eliminate the risk of contractor material dilution and unverified concrete grades.",
      bullets: [
        "Milestone payout clearance certificates",
        "Plain-language executive summaries",
      ],
    },
    {
      icon: Globe2,
      code: "Segment B",
      title: "NRIs & Remote Owners",
      desc: "Managing high-value construction from abroad. Secure complete operational transparency without relying on biased contractor video updates.",
      bullets: [
        "24/7 web repository with timestamped logs",
        "Geotagged high-definition inspection records",
      ],
      isPopular: true,
    },
    {
      icon: Building2,
      code: "Segment C",
      title: "Boutique Developers",
      desc: "Developing residential and commercial projects. Differentiate your brand and speed up buyer sales with an unalterable third-party civil QA dossier.",
      bullets: [
        "RERA compliance documentation dossier",
        "Third-party buyer quality certificates",
      ],
    },
    {
      icon: Landmark,
      code: "Segment D",
      title: "Government & Public Works",
      desc: "Municipal corporations, State PWD, CPWD, and public infrastructure works requiring vigilant statutory material testing and audit oversight.",
      bullets: [
        "CPWD, MoRTH & State PWD specification compliance",
        "Vigilance-ready audit dossiers & NABL test registry",
      ],
      isGovt: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-brand-border bg-[#f8fafc]" id="segments">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-orange uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            06 / Sector Scope
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-navy tracking-tight leading-tight">
            Engineered verification built for your operational profile.
          </h2>
          <p className="text-sm text-brand-muted mt-3 leading-relaxed">
            From single-family luxury residences to state municipal infrastructure projects, our civil QA desk operates with zero contractor bias.
          </p>
        </div>

        {/* 4-Column Grid on Wide Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.code}
                className={`p-5 rounded-[10px] border transition-all flex flex-col justify-between shadow-sm ${
                  seg.isGovt
                    ? "border-brand-navy/40 bg-brand-navy/5 shadow-md shadow-brand-navy/10"
                    : seg.isPopular
                    ? "border-brand-orange/40 bg-brand-orange/5 ring-1 ring-brand-orange/20 shadow-md shadow-brand-orange/10"
                    : "border-brand-border bg-white hover:border-brand-navy/30 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-brand-orange uppercase">
                      {seg.code}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-xs ${
                        seg.isGovt
                          ? "bg-brand-navy text-white"
                          : seg.isPopular
                          ? "bg-brand-orange text-white"
                          : "bg-white border border-brand-border text-brand-navy"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-brand-navy leading-snug">
                    {seg.title}
                  </h3>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    {seg.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-brand-border/60 space-y-2 text-xs text-brand-navy">
                  {seg.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-brand-passBg text-brand-pass flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
