"use client";

import { useState } from "react";
import { Download, AlertCircle, Check, ZoomIn, X, ChevronRight, FileSpreadsheet } from "lucide-react";

interface Specimen {
  material: string;
  id: string;
  testDesc: string;
  measured: string;
  standard: string;
  date: string;
  status: "Passed" | "FAILED";
  failedHighlight?: boolean;
}

const sampleData: Specimen[] = [
  {
    material: "M25 Concrete",
    id: "CUB-0142",
    testDesc: "7-Day Compressive Strength",
    measured: "21.4 N/mm²",
    standard: "IS 456 (min 17.0)",
    date: "14 Feb",
    status: "Passed",
  },
  {
    material: "Fe 500D TMT Rebar",
    id: "STL-0089",
    testDesc: "Tensile Yield & Elongation",
    measured: "545 N/mm² / 16.2%",
    standard: "IS 1786 (min 500)",
    date: "10 Feb",
    status: "Passed",
  },
  {
    material: "Common Clay Brick",
    id: "BRK-0034",
    testDesc: "Crushing & Absorption",
    measured: "2.8 N/mm² (Defective)",
    standard: "IS 1077 (min 3.5)",
    date: "08 Feb",
    status: "FAILED",
    failedHighlight: true,
  },
  {
    material: "OPC 53 Cement",
    id: "CEM-0056",
    testDesc: "Initial Setting & Soundness",
    measured: "42 min / 2.1 mm",
    standard: "IS 12269 (>30m, <10mm)",
    date: "02 Feb",
    status: "Passed",
  },
];

interface ClientPortalProps {
  onOpenDocModal: (title: string, id: string) => void;
}

export default function ClientPortal({ onOpenDocModal }: ClientPortalProps) {
  const [filter, setFilter] = useState<"all" | "passed" | "failed">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<{
    title: string;
    geo: string;
    note: string;
    url: string;
    status: "pass" | "fail";
  } | null>(null);

  const filteredData = sampleData.filter((item) => {
    if (filter === "passed") return item.status === "Passed";
    if (filter === "failed") return item.status === "FAILED";
    return true;
  });

  return (
    <section className="py-14 sm:py-18 md:py-20 border-b border-brand-border bg-white" id="dashboard">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block mb-1">
              03 / Live Audit Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Client Portal Interface
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Real-time engineering records, milestone sign-offs, and legal non-conformance notices.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenDocModal("Sharma Residence Audit Dossier", "BP-2025-084-ALL")}
            className="cursor-pointer inline-flex items-center gap-1.5 self-start sm:self-auto bg-brand-navy hover:bg-brand-navyDark text-white text-xs font-semibold px-3 py-2 rounded-[5px] transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Dossier (PDF)</span>
          </button>
        </div>

        {/* DASHBOARD CONTAINER */}
        <div className="border border-brand-border rounded-[8px] bg-white overflow-hidden shadow-xs">
          {/* Topbar */}
          <div className="bg-brand-navy text-white px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-borderDark">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-xs sm:text-sm tracking-tight">Sharma Residence</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono text-slate-300">
                BP-2025-084
              </span>
              <span className="text-[10px] bg-brand-pass text-white font-semibold px-1.5 py-0.5 rounded">
                G+2 Active
              </span>
            </div>
            <div className="text-[11px] text-slate-300">
              Plot 42, New Town Zone 1 • <span className="text-white font-medium">Stage 4: Level 1 Slab</span>
            </div>
          </div>

          {/* Minimalist Milestone Tracker */}
          <div className="bg-brand-bgLight px-4 sm:px-5 py-2.5 border-b border-brand-border overflow-x-auto scrollbar-thin">
            <div className="flex items-center gap-2 text-[11px] min-w-[620px]">
              <div className="flex items-center gap-1 font-semibold text-brand-navy shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-pass text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                1. Excavation
              </div>
              <ChevronRight className="w-3 h-3 text-brand-border shrink-0" />
              <div className="flex items-center gap-1 font-semibold text-brand-navy shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-pass text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                2. Foundation
              </div>
              <ChevronRight className="w-3 h-3 text-brand-border shrink-0" />
              <div className="flex items-center gap-1 font-semibold text-brand-navy shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-pass text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                3. Plinth
              </div>
              <ChevronRight className="w-3 h-3 text-brand-border shrink-0" />
              <div className="flex items-center gap-1 font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping"></span>
                4. Slab L1 (Auditing)
              </div>
              <ChevronRight className="w-3 h-3 text-brand-border shrink-0" />
              <div className="flex items-center gap-1 text-brand-muted shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-border text-brand-muted flex items-center justify-center text-[9px]">5</span>
                5. Brickwork
              </div>
              <ChevronRight className="w-3 h-3 text-brand-border shrink-0" />
              <div className="flex items-center gap-1 text-brand-muted shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-border text-brand-muted flex items-center justify-center text-[9px]">6</span>
                6. Handover
              </div>
            </div>
          </div>

          {/* CRITICAL SNAG ALERT CALLOUT */}
          <div className="mx-4 sm:mx-5 my-3.5 p-3 bg-brand-failBg border-l-4 border-brand-fail rounded-[4px] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-brand-fail shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-brand-fail uppercase text-[10px] block">
                  Defect Notice #NCR-04: Consignment BR-04 Failed
                </span>
                <span className="text-brand-navy">
                  Red clay bricks measured <strong className="text-brand-fail">2.8 N/mm²</strong> (Required: 3.5 N/mm² under IS 1077). Hold Stage 4 payout.
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenDocModal("Non-Conformance Dispute Notice #NCR-04", "NCR-04")}
              className="cursor-pointer text-xs font-bold text-brand-fail hover:underline shrink-0 self-end sm:self-center"
            >
              Download Dispute Letter →
            </button>
          </div>

          {/* DATA TABLE SECTION */}
          <div className="px-4 sm:px-5 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2.5 gap-2">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-3.5 h-3.5 text-brand-navy" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Lab Test Registry
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="inline-flex self-start sm:self-auto rounded border border-brand-border bg-brand-bgLight p-0.5 text-[10px] font-semibold">
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    filter === "all" ? "bg-white text-brand-navy font-bold shadow-2xs" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  All ({sampleData.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("passed")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    filter === "passed" ? "bg-white text-brand-pass font-bold shadow-2xs" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  Passed (3)
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("failed")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    filter === "failed" ? "bg-white text-brand-fail font-bold shadow-2xs" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  Failed (1)
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="border border-brand-border rounded-[6px] overflow-x-auto scrollbar-thin">
              <table className="w-full text-left border-collapse text-xs min-w-[620px]">
                <thead>
                  <tr className="bg-brand-bgLight border-b border-brand-border text-[10px] font-semibold text-brand-muted uppercase tracking-wider">
                    <th className="py-2 px-3">Material</th>
                    <th className="py-2 px-2">ID</th>
                    <th className="py-2 px-3">Test</th>
                    <th className="py-2 px-3">Measured Value</th>
                    <th className="py-2 px-3">Standard</th>
                    <th className="py-2 px-2">Status</th>
                    <th className="py-2 px-3 text-right">Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {filteredData.map((row) => (
                    <tr
                      key={row.id}
                      className={
                        row.failedHighlight
                          ? "bg-brand-failBg/30 hover:bg-brand-failBg/50 transition-colors"
                          : "hover:bg-brand-bgLight/50 transition-colors"
                      }
                    >
                      <td className={`py-2.5 px-3 font-semibold ${row.failedHighlight ? "text-brand-fail" : "text-brand-navy"}`}>
                        {row.material}
                      </td>
                      <td className="py-2.5 px-2 font-mono text-[11px] text-brand-muted">
                        {row.id}
                      </td>
                      <td className="py-2.5 px-3 text-brand-navy">{row.testDesc}</td>
                      <td className={`py-2.5 px-3 font-semibold ${row.failedHighlight ? "text-brand-fail" : "text-brand-navy"}`}>
                        {row.measured}
                      </td>
                      <td className="py-2.5 px-3 text-brand-muted text-[11px]">{row.standard}</td>
                      <td className="py-2.5 px-2">
                        {row.status === "Passed" ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-pass bg-brand-passBg px-1.5 py-0.5 rounded border border-brand-pass/20">
                            <Check className="w-2.5 h-2.5 stroke-[3]" /> Passed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-fail bg-brand-failBg px-1.5 py-0.5 rounded border border-brand-fail/30">
                            <AlertCircle className="w-2.5 h-2.5" /> FAILED
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            onOpenDocModal(
                              row.status === "Passed"
                                ? `Test Certificate: ${row.material} (${row.id})`
                                : `Defect Notice: ${row.material} (${row.id})`,
                              row.id
                            )
                          }
                          className={`cursor-pointer text-xs underline font-medium ${
                            row.status === "Passed" ? "text-brand-navy hover:text-brand-orange" : "text-brand-fail"
                          }`}
                        >
                          {row.status === "Passed" ? "PDF" : "Notice"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Geotagged Field Strip */}
            <div className="mt-4 pt-4 border-t border-brand-border">
              <span className="text-[11px] font-bold text-brand-navy uppercase tracking-wider block mb-2.5">
                Timestamped Field Audits (Tap to zoom)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  onClick={() =>
                    setSelectedPhoto({
                      title: "Slab 1 Rebar Spacing Audit",
                      geo: "Lat 22.5726° N, Long 88.3639° E • 14 Feb 10:15 IST",
                      note: "Cover block spacing: 25mm verified • IS 456 Table 16",
                      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB63ANUmNygn0NMc1NMCvhd-e4RDvGN0XrLXJiUhuZWv-wec3DAtuI0-37Je6ehVRMNRxoIure8Jqgk4BEOGkP1UzSngVne7lRYZ3_oMPRWWHshti-Uo0KsF3U1XM0G5wUYGO7qxTyj69Vxb1I-ClOKnnIUCSJ209tVhYXgwqMhJxuL-6lDsAmR7BCfQaeb6gTwnSPpgcSeGtq8B_9qiZ-rZ-JXc4w0e7-ap7ihegaL",
                      status: "pass",
                    })
                  }
                  className="cursor-pointer border border-brand-border rounded-[5px] overflow-hidden bg-brand-bgLight hover:border-brand-navy transition-all group flex sm:block items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Rebar spacing"
                    className="w-24 sm:w-full h-20 sm:h-24 object-cover group-hover:scale-103 transition-transform shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB63ANUmNygn0NMc1NMCvhd-e4RDvGN0XrLXJiUhuZWv-wec3DAtuI0-37Je6ehVRMNRxoIure8Jqgk4BEOGkP1UzSngVne7lRYZ3_oMPRWWHshti-Uo0KsF3U1XM0G5wUYGO7qxTyj69Vxb1I-ClOKnnIUCSJ209tVhYXgwqMhJxuL-6lDsAmR7BCfQaeb6gTwnSPpgcSeGtq8B_9qiZ-rZ-JXc4w0e7-ap7ihegaL"
                  />
                  <div className="p-2 text-[10px] space-y-0.5">
                    <div className="font-bold text-brand-navy flex items-center justify-between">
                      <span>Rebar Spacing</span>
                      <ZoomIn className="w-3 h-3 text-brand-muted" />
                    </div>
                    <div className="text-brand-pass font-semibold">25mm cover verified</div>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setSelectedPhoto({
                      title: "Concrete Slump Workability",
                      geo: "Lat 22.5726° N, Long 88.3639° E • 14 Feb 11:30 IST",
                      note: "Measured: 105mm (True Slump Passed)",
                      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRHq2BTTMz5x_5L8RwfyuK4kuhAL8mLOn0ouRcY6hVZGsDbNqd-lp-wPnJCgmlaZ7UQh_x1KreVcYtXu69XKd9lKKtEYSHMwPYOBfhOXO0aUkPsZS6EA2ZmaxeCwvGyqM820e20b48liTKMmc6JsE9cKdKb6NoOIjglIXexe5_R_klp8AUb7L49jR6M9z3r0q_wljY1XQb8GK1sXUG-f4x6HXG2YMiAVTxqBBojMYg",
                      status: "pass",
                    })
                  }
                  className="cursor-pointer border border-brand-border rounded-[5px] overflow-hidden bg-brand-bgLight hover:border-brand-navy transition-all group flex sm:block items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Slump test"
                    className="w-24 sm:w-full h-20 sm:h-24 object-cover group-hover:scale-103 transition-transform shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRHq2BTTMz5x_5L8RwfyuK4kuhAL8mLOn0ouRcY6hVZGsDbNqd-lp-wPnJCgmlaZ7UQh_x1KreVcYtXu69XKd9lKKtEYSHMwPYOBfhOXO0aUkPsZS6EA2ZmaxeCwvGyqM820e20b48liTKMmc6JsE9cKdKb6NoOIjglIXexe5_R_klp8AUb7L49jR6M9z3r0q_wljY1XQb8GK1sXUG-f4x6HXG2YMiAVTxqBBojMYg"
                  />
                  <div className="p-2 text-[10px] space-y-0.5">
                    <div className="font-bold text-brand-navy flex items-center justify-between">
                      <span>Slump Test</span>
                      <ZoomIn className="w-3 h-3 text-brand-muted" />
                    </div>
                    <div className="text-brand-pass font-semibold">105mm Passed</div>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setSelectedPhoto({
                      title: "Defective Lot: Consignment #BR-04",
                      geo: "Lat 22.5726° N, Long 88.3639° E • 13 Feb 16:20 IST",
                      note: "Flagged: Unsound, high absorption (23.4%)",
                      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWeaDsKB4T2whZcovVQUGfJ-jVA9IWNKpE7SvTc6hmv4geoA2gMLa51WqFePEqCl2gN5zjLoDCJf1s3r0FFw0_4Gevz7JvhHOcWhcy2iQxda0p353GWOZdn4bDppsGSF-zgirkJx0hij2QvbiRgrOFkHP0iQRtgnFj7P94SLwXNHrNpK96KtsBYkJH13-YKSOl83ecFVW2bqZaw99nlZnYaOWbuJwlwXvcGtzNAos",
                      status: "fail",
                    })
                  }
                  className="cursor-pointer border border-brand-fail/40 rounded-[5px] overflow-hidden bg-brand-failBg/20 hover:border-brand-fail transition-all group flex sm:block items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Rejected bricks"
                    className="w-24 sm:w-full h-20 sm:h-24 object-cover group-hover:scale-103 transition-transform shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMWeaDsKB4T2whZcovVQUGfJ-jVA9IWNKpE7SvTc6hmv4geoA2gMLa51WqFePEqCl2gN5zjLoDCJf1s3r0FFw0_4Gevz7JvhHOcWhcy2iQxda0p353GWOZdn4bDppsGSF-zgirkJx0hij2QvbiRgrOFkHP0iQRtgnFj7P94SLwXNHrNpK96KtsBYkJH13-YKSOl83ecFVW2bqZaw99nlZnYaOWbuJwlwXvcGtzNAos"
                  />
                  <div className="p-2 text-[10px] space-y-0.5">
                    <div className="font-bold text-brand-fail flex items-center justify-between">
                      <span>Rejected Bricks</span>
                      <ZoomIn className="w-3 h-3 text-brand-fail" />
                    </div>
                    <div className="text-brand-fail font-semibold">Flagged: Unsound</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geotagged Photo Modal Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
          <div className="bg-white rounded-[8px] max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-brand-navy text-white flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm">{selectedPhoto.title}</span>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="text-white hover:text-brand-orange transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedPhoto.url} alt={selectedPhoto.title} className="w-full h-60 object-cover" />
            <div className="p-4 space-y-2">
              <div className="text-xs font-mono text-brand-muted">{selectedPhoto.geo}</div>
              <div
                className={`text-xs font-semibold ${
                  selectedPhoto.status === "fail" ? "text-brand-fail" : "text-brand-pass"
                }`}
              >
                {selectedPhoto.note}
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-3 py-1.5 text-xs font-semibold bg-brand-navy text-white rounded-[4px] hover:bg-brand-navyDark transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
