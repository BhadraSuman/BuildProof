"use client";

import { useState } from "react";
import { Download, AlertCircle, Check, ZoomIn, X, ChevronRight } from "lucide-react";

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
    standard: "IS 456:2000 (min 17.0 N/mm²)",
    date: "14 Feb 2025",
    status: "Passed",
  },
  {
    material: "Fe 500D TMT Rebar",
    id: "STL-0089",
    testDesc: "Tensile Yield & Elongation",
    measured: "545 N/mm² / 16.2%",
    standard: "IS 1786:2008 (min 500 N/mm²)",
    date: "10 Feb 2025",
    status: "Passed",
  },
  {
    material: "Common Red Clay Brick",
    id: "BRK-0034",
    testDesc: "Compressive Strength & Efflorescence",
    measured: "2.8 N/mm² (Defective)",
    standard: "IS 1077 (min 3.5 N/mm²)",
    date: "08 Feb 2025",
    status: "FAILED",
    failedHighlight: true,
  },
  {
    material: "OPC 53 Cement",
    id: "CEM-0056",
    testDesc: "Initial Setting Time & Soundness",
    measured: "42 min / 2.1 mm",
    standard: "IS 12269:2013 (>30 min, <10mm)",
    date: "02 Feb 2025",
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
    <section className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-white" id="dashboard">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider block mb-2">
            03 / Inspection Software Interface
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
            Dense, unalterable engineering records at your fingertips.
          </h2>
          <p className="text-xs sm:text-[14px] text-brand-muted mt-2">
            The same interface our civil auditors use to log batch results, track milestone approvals, and issue formal non-conformance notices.
          </p>
        </div>

        {/* DASHBOARD CONTAINER */}
        <div className="border border-brand-border rounded-[8px] bg-white overflow-hidden shadow-sm">
          {/* Topbar */}
          <div className="bg-brand-navy text-white px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-brand-borderDark">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-bold text-sm sm:text-[15px] tracking-tight">Sharma Residence</span>
                <span className="text-[10px] sm:text-[11px] bg-white/10 px-2 py-0.5 rounded font-mono text-slate-200">
                  BP-2025-084
                </span>
                <span className="text-[10px] sm:text-[11px] bg-brand-pass text-white font-semibold px-2 py-0.5 rounded">
                  Active Build
                </span>
              </div>
              <div className="text-[11px] sm:text-[12px] text-slate-300 mt-1 leading-snug">
                Plot 42, New Town Zone 1, Kolkata (G+2 Residential) • Contractor: Apex Buildcon Pvt Ltd
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
              <div className="text-left md:text-right">
                <div className="text-[10px] sm:text-[11px] text-slate-300">Milestone Progress</div>
                <div className="text-xs sm:text-[14px] font-bold text-white">Level 1 Slab (45%)</div>
              </div>
              <button
                type="button"
                onClick={() => onOpenDocModal("Sharma Residence Complete Audit Dossier", "BP-2025-084-ALL")}
                className="cursor-pointer inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[4px] border border-white/20 transition-colors shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export Audit Dossier (PDF)</span>
                <span className="sm:hidden">Export PDF</span>
              </button>
            </div>
          </div>

          {/* Project Milestones Strip */}
          <div className="bg-brand-bgLight px-4 sm:px-6 py-3 border-b border-brand-border overflow-x-auto scrollbar-thin">
            <div className="flex items-center gap-2 sm:gap-3 text-xs min-w-[720px]">
              <div className="flex items-center gap-1.5 font-semibold text-brand-navy shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-pass text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                1. Excavation (18 Jan)
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 font-semibold text-brand-navy shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-pass text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                2. Foundation (27 Jan)
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 font-semibold text-brand-navy shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-pass text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                3. Plinth (05 Feb)
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping"></span>
                4. Slab L1 (Active Inspection)
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 text-brand-muted shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-border text-brand-muted flex items-center justify-center text-[10px]">5</span>
                5. Brickwork (Pending)
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 text-brand-muted shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-border text-brand-muted flex items-center justify-center text-[10px]">6</span>
                6. Finishing (Pending)
              </div>
            </div>
          </div>

          {/* CRITICAL SNAG ALERT CALLOUT */}
          <div className="mx-4 sm:mx-6 my-4 sm:my-5 p-3.5 sm:p-4 bg-brand-failBg border-l-4 border-brand-fail rounded-[4px] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-brand-fail shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] flex-1">
              <span className="font-bold text-brand-fail uppercase tracking-wider text-[10px] sm:text-[11px] block">
                CRITICAL SNAG: Material Non-Conformance Notice #NCR-04
              </span>
              <p className="text-brand-navy mt-1 leading-snug">
                Consignment #BR-04 Red Clay Bricks failed compressive strength test (
                <strong className="text-brand-fail">2.8 N/mm²</strong> vs IS 1077 minimum requirement of{" "}
                <strong className="text-brand-navy">3.5 N/mm²</strong>). Water absorption reached 23.4% (Threshold: 20%).
              </p>
              <div className="mt-2 text-[11px] sm:text-[12px] font-semibold text-brand-fail flex flex-wrap items-center gap-2">
                <span>ACTION MANDATED: Withhold Stage 4 masonry disbursement until consignment removal and replacement re-test.</span>
                <button
                  type="button"
                  onClick={() => onOpenDocModal("Official Non-Conformance Dispute Notice #NCR-04", "NCR-04")}
                  className="cursor-pointer underline text-brand-navy hover:text-brand-fail font-bold"
                >
                  Download Dispute Letter
                </button>
              </div>
            </div>
          </div>

          {/* DATA TABLE SECTION */}
          <div className="px-4 sm:px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
              <div>
                <span className="text-xs sm:text-[13px] font-bold text-brand-navy uppercase tracking-wider">
                  Certified Lab Test Registry
                </span>
                <span className="block sm:inline text-[11px] sm:text-[12px] text-brand-muted sm:ml-2">
                  {sampleData.length} Specimens Recorded • Tested under ISO/IEC 17025
                </span>
              </div>
              {/* Quick Filter Tabs */}
              <div className="inline-flex self-start sm:self-auto rounded-md border border-brand-border bg-brand-bgLight p-0.5 text-[10px] sm:text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className={`px-2 sm:px-2.5 py-1 rounded transition-colors ${
                    filter === "all" ? "bg-white text-brand-navy shadow-xs font-bold" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  All ({sampleData.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("passed")}
                  className={`px-2 sm:px-2.5 py-1 rounded transition-colors ${
                    filter === "passed" ? "bg-white text-brand-pass shadow-xs font-bold" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  Passed (3)
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("failed")}
                  className={`px-2 sm:px-2.5 py-1 rounded transition-colors ${
                    filter === "failed" ? "bg-white text-brand-fail shadow-xs font-bold" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  Failed (1)
                </button>
              </div>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="border border-brand-border rounded-[6px] overflow-x-auto scrollbar-thin">
              <table className="w-full text-left border-collapse text-xs sm:text-[13px] min-w-[680px]">
                <thead>
                  <tr className="bg-brand-bgLight border-b border-brand-border text-[10px] sm:text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
                    <th className="py-2.5 px-3 sm:px-4">Material</th>
                    <th className="py-2.5 px-2.5 sm:px-3">Specimen ID</th>
                    <th className="py-2.5 px-3 sm:px-4">Lab Test Description</th>
                    <th className="py-2.5 px-3 sm:px-4">Measured Value</th>
                    <th className="py-2.5 px-3 sm:px-4">IS Standard</th>
                    <th className="py-2.5 px-2.5 sm:px-3">Audit Date</th>
                    <th className="py-2.5 px-2.5 sm:px-3">Status</th>
                    <th className="py-2.5 px-3 sm:px-4 text-right">Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {filteredData.map((row) => (
                    <tr
                      key={row.id}
                      className={
                        row.failedHighlight
                          ? "bg-brand-failBg/40 hover:bg-brand-failBg/60 transition-colors"
                          : "hover:bg-brand-bgLight/60 transition-colors"
                      }
                    >
                      <td
                        className={`py-3 px-3 sm:px-4 ${
                          row.failedHighlight ? "font-bold text-brand-fail" : "font-semibold text-brand-navy"
                        }`}
                      >
                        {row.material}
                      </td>
                      <td
                        className={`py-3 px-2.5 sm:px-3 font-mono text-[11px] sm:text-[12px] ${
                          row.failedHighlight ? "text-brand-fail" : "text-brand-muted"
                        }`}
                      >
                        {row.id}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-brand-navy">{row.testDesc}</td>
                      <td
                        className={`py-3 px-3 sm:px-4 ${
                          row.failedHighlight
                            ? "font-bold text-brand-fail"
                            : "font-semibold text-brand-navy"
                        }`}
                      >
                        {row.measured}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-brand-muted text-[11px] sm:text-[12px]">{row.standard}</td>
                      <td className="py-3 px-2.5 sm:px-3 text-brand-muted text-[11px] sm:text-[12px]">{row.date}</td>
                      <td className="py-3 px-2.5 sm:px-3">
                        {row.status === "Passed" ? (
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-brand-pass bg-brand-passBg px-2 py-0.5 rounded border border-brand-pass/20">
                            <Check className="w-2.5 h-2.5 stroke-[3]" /> Passed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-brand-fail bg-brand-failBg px-2 py-0.5 rounded border border-brand-fail/30">
                            <AlertCircle className="w-2.5 h-2.5" /> FAILED
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right">
                        {row.status === "Passed" ? (
                          <button
                            type="button"
                            onClick={() =>
                              onOpenDocModal(`Test Certificate: ${row.material} (${row.id})`, row.id)
                            }
                            className="cursor-pointer text-xs sm:text-[12px] font-semibold text-brand-navy hover:text-brand-orange underline"
                          >
                            View PDF
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              onOpenDocModal(`Defect Non-Conformance Notice: ${row.material} (${row.id})`, row.id)
                            }
                            className="cursor-pointer text-xs sm:text-[12px] font-bold text-brand-fail hover:underline"
                          >
                            Download Notice
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* GEOTAGGED FIELD VERIFICATION STRIP */}
            <div className="mt-6 pt-5 border-t border-brand-border">
              <span className="text-xs sm:text-[12px] font-bold text-brand-navy uppercase tracking-wider block mb-3">
                Timestamped Field Verifications (Tap to Inspect)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  onClick={() =>
                    setSelectedPhoto({
                      title: "Slab 1 Rebar Spacing Audit",
                      geo: "Lat 22.5726° N, Long 88.3639° E • 14 Feb 10:15 IST",
                      note: "Cover block spacing: 25mm verified • Spacing conformant to IS 456 Table 16",
                      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB63ANUmNygn0NMc1NMCvhd-e4RDvGN0XrLXJiUhuZWv-wec3DAtuI0-37Je6ehVRMNRxoIure8Jqgk4BEOGkP1UzSngVne7lRYZ3_oMPRWWHshti-Uo0KsF3U1XM0G5wUYGO7qxTyj69Vxb1I-ClOKnnIUCSJ209tVhYXgwqMhJxuL-6lDsAmR7BCfQaeb6gTwnSPpgcSeGtq8B_9qiZ-rZ-JXc4w0e7-ap7ihegaL",
                      status: "pass",
                    })
                  }
                  className="cursor-pointer border border-brand-border rounded-[6px] overflow-hidden bg-brand-bgLight hover:border-brand-navy transition-all group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Rebar spacing verification"
                    className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB63ANUmNygn0NMc1NMCvhd-e4RDvGN0XrLXJiUhuZWv-wec3DAtuI0-37Je6ehVRMNRxoIure8Jqgk4BEOGkP1UzSngVne7lRYZ3_oMPRWWHshti-Uo0KsF3U1XM0G5wUYGO7qxTyj69Vxb1I-ClOKnnIUCSJ209tVhYXgwqMhJxuL-6lDsAmR7BCfQaeb6gTwnSPpgcSeGtq8B_9qiZ-rZ-JXc4w0e7-ap7ihegaL"
                  />
                  <div className="p-3 text-[11px] space-y-1">
                    <div className="font-bold text-brand-navy flex items-center justify-between">
                      <span>Slab 1 Rebar Spacing</span>
                      <ZoomIn className="w-3.5 h-3.5 text-brand-muted" />
                    </div>
                    <div className="text-brand-muted text-[10px]">Lat 22.5726° N, Long 88.3639° E • 14 Feb</div>
                    <div className="text-brand-pass font-semibold">Cover block spacing: 25mm verified</div>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setSelectedPhoto({
                      title: "Concrete Slump Workability",
                      geo: "Lat 22.5726° N, Long 88.3639° E • 14 Feb 11:30 IST",
                      note: "Measured: 105mm (True Slump Passed) • Target slump: 100±25mm for pumped concrete",
                      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRHq2BTTMz5x_5L8RwfyuK4kuhAL8mLOn0ouRcY6hVZGsDbNqd-lp-wPnJCgmlaZ7UQh_x1KreVcYtXu69XKd9lKKtEYSHMwPYOBfhOXO0aUkPsZS6EA2ZmaxeCwvGyqM820e20b48liTKMmc6JsE9cKdKb6NoOIjglIXexe5_R_klp8AUb7L49jR6M9z3r0q_wljY1XQb8GK1sXUG-f4x6HXG2YMiAVTxqBBojMYg",
                      status: "pass",
                    })
                  }
                  className="cursor-pointer border border-brand-border rounded-[6px] overflow-hidden bg-brand-bgLight hover:border-brand-navy transition-all group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Slump cone test"
                    className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRHq2BTTMz5x_5L8RwfyuK4kuhAL8mLOn0ouRcY6hVZGsDbNqd-lp-wPnJCgmlaZ7UQh_x1KreVcYtXu69XKd9lKKtEYSHMwPYOBfhOXO0aUkPsZS6EA2ZmaxeCwvGyqM820e20b48liTKMmc6JsE9cKdKb6NoOIjglIXexe5_R_klp8AUb7L49jR6M9z3r0q_wljY1XQb8GK1sXUG-f4x6HXG2YMiAVTxqBBojMYg"
                  />
                  <div className="p-3 text-[11px] space-y-1">
                    <div className="font-bold text-brand-navy flex items-center justify-between">
                      <span>Concrete Slump Workability</span>
                      <ZoomIn className="w-3.5 h-3.5 text-brand-muted" />
                    </div>
                    <div className="text-brand-muted text-[10px]">Lat 22.5726° N, Long 88.3639° E • 14 Feb</div>
                    <div className="text-brand-pass font-semibold">Measured: 105mm (True Slump Passed)</div>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setSelectedPhoto({
                      title: "Defective Lot: Consignment #BR-04",
                      geo: "Lat 22.5726° N, Long 88.3639° E • 13 Feb 16:20 IST",
                      note: "Flagged: Unsound, high porous absorption • Crushing strength tested under IS 3495 Part 1",
                      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWeaDsKB4T2whZcovVQUGfJ-jVA9IWNKpE7SvTc6hmv4geoA2gMLa51WqFePEqCl2gN5zjLoDCJf1s3r0FFw0_4Gevz7JvhHOcWhcy2iQxda0p353GWOZdn4bDppsGSF-zgirkJx0hij2QvbiRgrOFkHP0iQRtgnFj7P94SLwXNHrNpK96KtsBYkJH13-YKSOl83ecFVW2bqZaw99nlZnYaOWbuJwlwXvcGtzNAos",
                      status: "fail",
                    })
                  }
                  className="cursor-pointer border border-brand-fail/40 rounded-[6px] overflow-hidden bg-brand-failBg/20 hover:border-brand-fail transition-all group sm:col-span-2 md:col-span-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Rejected brick batch"
                    className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMWeaDsKB4T2whZcovVQUGfJ-jVA9IWNKpE7SvTc6hmv4geoA2gMLa51WqFePEqCl2gN5zjLoDCJf1s3r0FFw0_4Gevz7JvhHOcWhcy2iQxda0p353GWOZdn4bDppsGSF-zgirkJx0hij2QvbiRgrOFkHP0iQRtgnFj7P94SLwXNHrNpK96KtsBYkJH13-YKSOl83ecFVW2bqZaw99nlZnYaOWbuJwlwXvcGtzNAos"
                  />
                  <div className="p-3 text-[11px] space-y-1">
                    <div className="font-bold text-brand-fail flex items-center justify-between">
                      <span>Defective Lot: Consignment #BR-04</span>
                      <ZoomIn className="w-3.5 h-3.5 text-brand-fail" />
                    </div>
                    <div className="text-brand-muted text-[10px]">Lat 22.5726° N, Long 88.3639° E • 13 Feb</div>
                    <div className="text-brand-fail font-semibold">Flagged: Unsound, high absorption</div>
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
          <div className="bg-white rounded-[8px] max-w-xl w-full overflow-hidden shadow-2xl">
            <div className="px-4 sm:px-5 py-3.5 bg-brand-navy text-white flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm">{selectedPhoto.title}</span>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="text-white hover:text-brand-orange transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedPhoto.url} alt={selectedPhoto.title} className="w-full h-56 sm:h-72 object-cover" />
            <div className="p-4 sm:p-5 space-y-2">
              <div className="text-[11px] sm:text-xs font-mono text-brand-muted">{selectedPhoto.geo}</div>
              <div
                className={`text-xs sm:text-sm font-semibold ${
                  selectedPhoto.status === "fail" ? "text-brand-fail" : "text-brand-pass"
                }`}
              >
                {selectedPhoto.note}
              </div>
              <div className="pt-3 border-t border-brand-border flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold bg-brand-navy text-white rounded-[4px] hover:bg-brand-navyDark transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
