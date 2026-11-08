export default function StandardsMatrix() {
  const standards = [
    {
      group: "Concrete & RMC (Slab & Pavements)",
      code: "IS 456 / IS 516 & CPWD Cl. 5",
      tests: "7 & 28-day compressive crushing strength, core extraction, slump cone workability, density.",
      turnaround: "7 & 28 Days",
    },
    {
      group: "Structural Steel (TMT & Structural)",
      code: "IS 1786 / IS 1608 & MoRTH Cl. 1000",
      tests: "0.2% Proof yield stress, UTS/YS ratio, bend & re-bend ductility, total elongation percentage.",
      turnaround: "48 Hours",
    },
    {
      group: "Cement & Mineral Admixtures",
      code: "IS 12269 / IS 4031 & CPWD Cl. 4",
      tests: "Blaine fineness, standard consistency, initial & final setting times, Le-Chatelier soundness expansion.",
      turnaround: "72 Hours",
    },
    {
      group: "Masonry (Clay Bricks & AAC Blocks)",
      code: "IS 1077 / IS 3495 & CPWD Cl. 6",
      tests: "Compressive crushing strength, 24-hour cold water absorption percentage, chemical efflorescence classification.",
      turnaround: "5 Days",
    },
    {
      group: "Foundation Strata & Road Sub-Base",
      code: "IS 6403 / IS 2720 & MoRTH Cl. 400",
      tests: "Standard Penetration Test (SPT N-value), Safe Bearing Capacity (SBC), CBR, flakiness & aggregate impact.",
      turnaround: "4 Days",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-brand-border bg-[#f8fafc]" id="standards">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-orange uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            04 / Testing Scope &amp; Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-navy tracking-tight leading-tight">
            Bureau of Indian Standards (BIS) &amp; CPWD Scope
          </h2>
          <p className="text-sm text-brand-muted mt-3 leading-relaxed">
            Destructive and physical audits executed exclusively inside ISO/IEC 17025 accredited laboratories adhering to state and central statutory civil specifications.
          </p>
        </div>

        {/* Compact Table */}
        <div className="border border-brand-border rounded-[8px] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse text-xs min-w-[680px]">
              <thead>
                <tr className="bg-brand-bgLight border-b border-brand-border text-[10px] font-semibold text-brand-muted uppercase tracking-wider">
                  <th className="py-3 px-4 sm:px-5">Material Group</th>
                  <th className="py-3 px-3 sm:px-4">Statutory Standard</th>
                  <th className="py-3 px-4 sm:px-5">Core Laboratory Tests</th>
                  <th className="py-3 px-4 sm:px-5 text-right">Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {standards.map((item) => (
                  <tr key={item.group} className="hover:bg-brand-bgLight/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-5 font-bold text-brand-navy whitespace-nowrap">
                      {item.group}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4">
                      <span className="font-mono text-[10.5px] bg-brand-bgLight text-brand-navy px-2 py-0.5 rounded border border-brand-border whitespace-nowrap font-medium">
                        {item.code}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-brand-muted leading-relaxed">
                      {item.tests}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-right whitespace-nowrap font-medium text-brand-navy">
                      {item.turnaround}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
