import { ChevronDown } from "lucide-react";

export default function TechnicalFAQ() {
  const faqs = [
    {
      q: "Do you replace or manage my construction contractor?",
      a: "No. BuildProof is an independent third-party auditor. We do not manage labor or supply materials; we physically sample deliveries, test them against BIS codes, and deliver objective reports directly to you.",
    },
    {
      q: "Which testing facilities are utilized?",
      a: "All destructive and chemical tests are conducted in government-recognized NABL-accredited laboratories adhering to ISO/IEC 17025 specifications. Each report includes a verifiable QR code.",
    },
    {
      q: "Does my contractor need to sign an authorization MOU?",
      a: "No. As the property owner, you have the full legal right to sample materials delivered to your site. We recommend including our testing clause in your contract so milestone payouts require lab clearance.",
    },
    {
      q: "What happens when a material fails test specifications?",
      a: "Our civil engineering desk immediately flags the non-conformance via WhatsApp and email, citing the exact BIS code violated. You receive a formal dispute notice (NCR) to withhold milestone payment until rectified.",
    },
  ];

  return (
    <section className="py-14 sm:py-18 md:py-20 border-b border-brand-border bg-white" id="faq">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block mb-1">
            07 / Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Operational scope, lab credentials, and contractor milestone gating.
          </p>
        </div>

        <div className="max-w-3xl divide-y divide-brand-border border-y border-brand-border">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group py-3.5 sm:py-4">
              <summary className="flex items-center justify-between cursor-pointer list-none text-xs sm:text-sm font-bold text-brand-navy gap-4 select-none">
                <span>{faq.q}</span>
                <ChevronDown className="w-4 h-4 text-brand-muted group-open:rotate-180 transition-transform duration-200 shrink-0" />
              </summary>
              <div className="mt-2.5 text-xs text-brand-muted leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
