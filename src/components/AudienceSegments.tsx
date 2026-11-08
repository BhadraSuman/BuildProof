import { Check } from "lucide-react";

export default function AudienceSegments() {
  const segments = [
    {
      code: "Segment A",
      title: "Individual Home Builders",
      desc: "Constructing an independent villa or floor. Remove the stress of arguing over unverified concrete grades or on-site material deliveries.",
      bullets: [
        "Milestone payout clearance certificates",
        "Plain-language executive summaries",
      ],
    },
    {
      code: "Segment B",
      title: "NRIs & Remote Owners",
      desc: "Managing high-value builds from abroad. Gain complete ground visibility without relying on biased contractor video updates.",
      bullets: [
        "24/7 web repository with timestamped logs",
        "Geotagged high-definition verification records",
      ],
      isPopular: true,
    },
    {
      code: "Segment C",
      title: "Boutique Developers",
      desc: "Developing luxury apartments. Command premium pricing and accelerate buyer trust with an unalterable third-party civil QA dossier.",
      bullets: [
        "RERA evidentiary compliance documentation",
        "Third-party buyer quality certificates",
      ],
    },
  ];

  return (
    <section className="py-14 sm:py-18 md:py-20 border-b border-brand-border bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block mb-1">
            06 / Tailored Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
            Engineered verification built for your operational profile.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {segments.map((seg) => (
            <div
              key={seg.code}
              className={`p-5 rounded-[6px] border transition-all flex flex-col justify-between ${
                seg.isPopular
                  ? "border-brand-orange/40 bg-brand-orange/5 ring-1 ring-brand-orange/20"
                  : "border-brand-border bg-brand-bgLight/30 hover:border-brand-navy/30 hover:bg-white"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-orange uppercase">
                  {seg.code}
                </span>
                <h3 className="text-base font-bold text-brand-navy mt-1">
                  {seg.title}
                </h3>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  {seg.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-brand-border/60 space-y-2 text-xs text-brand-navy">
                {seg.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-brand-passBg text-brand-pass flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
