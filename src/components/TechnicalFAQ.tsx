import { ChevronDown } from "lucide-react";

export default function TechnicalFAQ() {
  const faqs = [
    {
      q: "Do you replace or manage my construction contractor?",
      a: "No. BuildProof functions purely as an independent third-party quality auditor. We do not manage daily laborers, procure raw materials, or dictate day-to-day site logistics. We sample, test, audit against Indian Standards, and issue objective reports to you, the client.",
    },
    {
      q: "Which testing facilities are utilized?",
      a: "All physical, destructive, and chemical tests are conducted exclusively in NABL-accredited (National Accreditation Board for Testing and Calibration Laboratories) testing centers adhering to ISO/IEC 17025 specifications. Each report carries a QR code linked to the testing laboratory's registry.",
    },
    {
      q: "Does my contractor need to sign an authorization MOU?",
      a: "No. As the legal property owner and project financer, you retain full rights to draw samples of materials delivered to your property and inspect work underway. We recommend including our testing clause into your contractor milestone contract so payouts are bound to third-party reports.",
    },
    {
      q: "What happens when a material fails test specifications?",
      a: "Our civil desk immediately flags the non-conformance via WhatsApp and email, referencing the specific BIS clause violated. We generate a formal Non-Conformance Report (NCR) that you can hand directly to the contractor to demand consignment replacement or withhold the relevant milestone payout.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-white" id="faq">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider block mb-2">
            07 / Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
            Frequently Asked Technical Questions
          </h2>
          <p className="text-xs sm:text-[14px] text-brand-muted mt-2">
            Details on operational jurisdiction, legal status of lab results, and contractor interaction.
          </p>
        </div>
        <div className="max-w-3xl divide-y divide-brand-border border-y border-brand-border">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group py-4 sm:py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm sm:text-[15px] font-bold text-brand-navy gap-4">
                <span>{faq.q}</span>
                <ChevronDown className="w-4 h-4 text-brand-muted group-open:rotate-180 transition-transform duration-200 shrink-0" />
              </summary>
              <div className="mt-3 text-xs sm:text-[14px] text-brand-muted leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
