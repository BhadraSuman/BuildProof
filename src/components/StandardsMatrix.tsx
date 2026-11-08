export default function StandardsMatrix() {
  const standards = [
    {
      group: "1. Concrete & RMC",
      tests:
        "7-day & 28-day compressive crushing strength (cube testing), slump cone workability, compaction factor, density audit.",
      code: "IS 456 / IS 516",
      turnaround: "7 & 28 Days",
    },
    {
      group: "2. Structural Steel (TMT)",
      tests:
        "0.2% Proof yield stress, ultimate tensile strength (UTS), UTS/YS ratio, bend & re-bend ductility, total elongation percentage.",
      code: "IS 1786 / IS 1608",
      turnaround: "48 Hours",
    },
    {
      group: "3. Cement & Binding",
      tests:
        "Fineness (Blaine air permeability), standard consistency, initial & final setting times, Le-Chatelier soundness expansion.",
      code: "IS 12269 / IS 4031",
      turnaround: "72 Hours",
    },
    {
      group: "4. Masonry (Bricks & AAC)",
      tests:
        "Compressive crushing strength, 24-hour cold water absorption percentage, chemical efflorescence salt classification, dry density.",
      code: "IS 1077 / IS 3495",
      turnaround: "5 Days",
    },
    {
      group: "5. Foundation Soil & Strata",
      tests:
        "Standard Penetration Test (SPT N-value), Safe Bearing Capacity (SBC calculation), liquid/plastic limits, direct shear parameters.",
      code: "IS 6403 / IS 2720",
      turnaround: "4 Days",
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-brand-bgLight" id="standards">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider block mb-2">
            04 / Testing Scope &amp; Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
            Bureau of Indian Standards (BIS) Laboratory Matrix
          </h2>
          <p className="text-xs sm:text-[14px] text-brand-muted mt-2">
            Every test strictly adheres to official Indian Standard civil codes conducted exclusively inside accredited testing environments.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="border border-brand-border rounded-[8px] bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse text-xs sm:text-[13px] min-w-[640px]">
              <thead>
                <tr className="bg-brand-bgLight border-b border-brand-border text-[10px] sm:text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
                  <th className="py-3 px-4 sm:px-5">Material Group</th>
                  <th className="py-3 px-4 sm:px-5">Target Laboratory Tests</th>
                  <th className="py-3 px-4 sm:px-5">Bureau of Indian Standards (BIS) Code</th>
                  <th className="py-3 px-4 sm:px-5 text-right">Lab Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {standards.map((item) => (
                  <tr key={item.group} className="hover:bg-brand-bgLight/50 transition-colors">
                    <td className="py-4 px-4 sm:px-5 font-bold text-brand-navy align-top whitespace-nowrap sm:whitespace-normal">
                      {item.group}
                    </td>
                    <td className="py-4 px-4 sm:px-5 text-brand-muted leading-relaxed">
                      {item.tests}
                    </td>
                    <td className="py-4 px-4 sm:px-5 font-mono text-[11px] sm:text-[12px] text-brand-navy align-top whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-4 px-4 sm:px-5 font-mono text-[11px] sm:text-[12px] text-brand-navy text-right align-top whitespace-nowrap">
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
