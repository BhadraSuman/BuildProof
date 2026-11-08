import { ChevronDown } from "lucide-react";

export default function TechnicalFAQ() {
  const faqs = [
    {
      q: "Do you undertake Government, PWD, and Municipal Infrastructure QA?",
      a: "Yes. BuildProof handles third-party quality audits for Government and State PWD projects, Smart City municipal utilities, bridges, and public housing works adhering strictly to CPWD specifications, MoRTH standards, and ISO/IEC 17025 testing protocols.",
    },
    {
      q: "Do you replace or manage the construction contractor?",
      a: "No. BuildProof operates strictly as an independent third-party auditor. We do not supply materials or manage laborers; our engineers physically extract specimens, run certified lab tests, and furnish unalterable reports directly to project executives.",
    },
    {
      q: "Which testing laboratory accreditations are utilized?",
      a: "All destructive, mechanical, and chemical tests are conducted in government-recognized NABL-accredited laboratories adhering to ISO/IEC 17025 specifications. Each report carries a tamper-evident digital verification QR code.",
    },
    {
      q: "Does the contractor need to sign an authorization MOU?",
      a: "No. As the property owner or procuring public agency, you hold full statutory authority to test any materials arriving at your site. We recommend adding our testing clause to your agreement so running bills require lab clearance.",
    },
    {
      q: "What happens when a material fails laboratory test specifications?",
      a: "Our civil desk immediately flags the non-conformance via portal, WhatsApp, and email, citing the specific BIS or CPWD clause violated. A formal Non-Conformance Report (NCR) is issued to demand lot rejection and halt payment release.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-brand-border bg-[#f8fafc]" id="faq">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-brand-orange uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            07 / Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-brand-muted mt-3 leading-relaxed">
            Operational jurisdiction, government procurement, lab accreditations, and milestone gating.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-brand-border/70 border border-brand-border/80 rounded-[12px] overflow-hidden bg-white/85 backdrop-blur-md shadow-sm">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group px-5 py-4 sm:py-5 hover:bg-brand-bgLight/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm sm:text-[14.5px] font-semibold text-brand-navy gap-4 select-none">
                <span>{faq.q}</span>
                <ChevronDown className="w-4 h-4 text-brand-muted group-open:rotate-180 transition-transform duration-200 shrink-0" />
              </summary>
              <div className="mt-3 text-[13px] sm:text-sm text-brand-muted leading-relaxed max-w-2xl">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
