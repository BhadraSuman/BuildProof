export default function StandardsMatrix() {
  const standards = [
    {
      group: "Concrete & RMC",
      code: "IS 456 / IS 516",
      tests: "7 & 28-day compressive crushing strength, slump workability, density.",
      turnaround: "7 & 28 Days",
    },
    {
      group: "Structural Steel (TMT)",
      code: "IS 1786 / IS 1608",
      tests: "0.2% Proof yield stress, UTS/YS ratio, bend & re-bend ductility, elongation.",
      turnaround: "48 Hours",
    },
    {
      group: "Cement & Binding",
      code: "IS 12269 / IS 4031",
      tests: "Blaine fineness, standard consistency, setting times, Le-Chatelier soundness.",
      turnaround: "72 Hours",
    },
    {
      group: "Masonry (Bricks & AAC)",
      code: "IS 1077 / IS 3495",
      tests: "Compressive crushing strength, 24h cold water absorption, efflorescence classification.",
      turnaround: "5 Days",
    },
    {
      group: "Foundation Soil & Strata",
      code: "IS 6403 / IS 2720",
      tests: "Standard Penetration Test (SPT), Safe Bearing Capacity (SBC), direct shear limits.",
      turnaround: "4 Days",
    },
  ];

  return (
    <section className="py-14 sm:py-18 md:py-20 border-b border-brand-border bg-brand-bgLight" id="standards">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block mb-1">
            04 / Testing Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
            Bureau of Indian Standards (BIS) Matrix
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Every test is executed inside ISO/IEC 17025 accredited laboratories adhering to statutory civil codes.
          </p>
        </div>

        {/* Compact Table */}
        <div className="border border-brand-border rounded-[8px] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse text-xs min-w-[620px]">
              <thead>
                <tr className="bg-brand-bgLight border-b border-brand-border text-[10px] font-semibold text-brand-muted uppercase tracking-wider">
                  <th className="py-2.5 px-4">Material Group</th>
                  <th className="py-2.5 px-3">BIS Code</th>
                  <th className="py-2.5 px-4">Core Laboratory Tests</th>
                  <th className="py-2.5 px-4 text-right">Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {standards.map((item) => (
                  <tr key={item.group} className="hover:bg-brand-bgLight/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-brand-navy whitespace-nowrap">
                      {item.group}
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-mono text-[10px] bg-brand-bgLight text-brand-navy px-1.5 py-0.5 rounded border border-brand-border whitespace-nowrap">
                        {item.code}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-brand-muted leading-relaxed">
                      {item.tests}
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap font-medium text-brand-navy">
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
