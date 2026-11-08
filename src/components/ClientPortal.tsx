"use client";

import { useState } from "react";
import { Download, AlertCircle, Check, ChevronRight, FileSpreadsheet, Building2, Landmark, Smartphone, Laptop, BellRing } from "lucide-react";

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

const sampleDataResidential: Specimen[] = [
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

const sampleDataGovt: Specimen[] = [
  {
    material: "M40 Ready Mix Concrete",
    id: "PWD-CUB-091",
    testDesc: "28-Day Flyover Deck Compressive Strength",
    measured: "44.8 N/mm²",
    standard: "MoRTH / IS 456 (min 40.0)",
    date: "12 Feb",
    status: "Passed",
  },
  {
    material: "Fe 550D TMT Pier Rebar",
    id: "PWD-STL-044",
    testDesc: "Proof Stress & Bend/Re-bend Ductility",
    measured: "582 N/mm² / 17.1%",
    standard: "IS 1786:2008 (min 550)",
    date: "09 Feb",
    status: "Passed",
  },
  {
    material: "Sub-Base Aggregates (40mm)",
    id: "PWD-AGG-012",
    testDesc: "Aggregate Impact & Flakiness Index",
    measured: "34.2% (Exceeds Limit)",
    standard: "MoRTH Cl. 401 (max 30%)",
    date: "06 Feb",
    status: "FAILED",
    failedHighlight: true,
  },
  {
    material: "Pavement Bitumen VG-30",
    id: "PWD-BIT-008",
    testDesc: "Penetration & Softening Point",
    measured: "62 dmm / 51.5 °C",
    standard: "IS 73:2013 (50-70 dmm)",
    date: "01 Feb",
    status: "Passed",
  },
];

interface ClientPortalProps {
  onOpenDocModal: (title: string, id: string) => void;
}

export default function ClientPortal({ onOpenDocModal }: ClientPortalProps) {
  const [activeProject, setActiveProject] = useState<"residential" | "govt">("residential");
  const [filter, setFilter] = useState<"all" | "passed" | "failed">("all");

  const activeData = activeProject === "residential" ? sampleDataResidential : sampleDataGovt;

  const filteredData = activeData.filter((item) => {
    if (filter === "passed") return item.status === "Passed";
    if (filter === "failed") return item.status === "FAILED";
    return true;
  });

  return (
    <section className="py-16 sm:py-24 border-b border-brand-border bg-white relative overflow-hidden" id="dashboard">
      {/* Modern subtle ambient glow behind dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-orange/5 via-blue-50/50 to-brand-navy/5 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/8 border border-brand-orange/20 px-3 py-1 rounded-full mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              03 / Unalterable Software Portal
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-navy tracking-tight leading-tight">
              Civil QA Client Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1.5 max-w-xl">
              Inspect live engineering records, batch certificates, and defect notices across private and public infrastructure projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Project Switcher */}
            <div className="inline-flex rounded-[8px] border border-brand-border/80 bg-brand-bgLight/80 backdrop-blur-sm p-1 text-xs font-semibold shadow-xs">
              <button
                type="button"
                onClick={() => {
                  setActiveProject("residential");
                  setFilter("all");
                }}
                className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
                  activeProject === "residential"
                    ? "bg-white text-brand-navy font-bold shadow-2xs"
                    : "text-brand-muted hover:text-brand-navy"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Private / Residential</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveProject("govt");
                  setFilter("all");
                }}
                className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
                  activeProject === "govt"
                    ? "bg-white text-brand-navy font-bold shadow-2xs"
                    : "text-brand-muted hover:text-brand-navy"
                }`}
              >
                <Landmark className="w-3.5 h-3.5 text-brand-orange" />
                <span>Govt / PWD Infrastructure</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenDocModal(
                  activeProject === "residential"
                    ? "Sharma Residence Complete Audit Dossier"
                    : "KMDA Municipal Infrastructure Quality Audit Dossier",
                  activeProject === "residential" ? "BP-2025-084-ALL" : "BP-PWD-2025-019"
                )
              }
              className="cursor-pointer inline-flex items-center gap-1.5 bg-brand-navy hover:bg-brand-navyDark text-white text-xs font-semibold px-3.5 py-2 rounded-[6px] transition-all shadow-xs active:scale-98"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Dossier (PDF)</span>
            </button>
          </div>
        </div>

        {/* DASHBOARD CONTAINER */}
        <div className="border border-brand-border/90 rounded-[14px] bg-white overflow-hidden shadow-xl shadow-brand-navy/5 backdrop-blur-sm">
          {/* Topbar */}
          <div className="bg-brand-navy text-white px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-brand-borderDark">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-bold text-sm sm:text-[15px] tracking-tight">
                {activeProject === "residential" ? "Sharma Residence (Plot 42)" : "PWD Flyover Expansion & Underpass"}
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono text-slate-300">
                {activeProject === "residential" ? "BP-2025-084" : "GOVT-WB-PWD-09"}
              </span>
              <span className="text-[10px] bg-brand-pass text-white font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Active Audit
              </span>
            </div>
            <div className="text-xs text-slate-300 flex items-center gap-2">
              <span>{activeProject === "residential" ? "New Town Zone 1, Kolkata" : "KMDA Sector V Link"}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline font-mono text-[11px] text-brand-orange bg-white/10 px-1.5 py-0.5 rounded">Live Cloud Sync</span>
            </div>
          </div>

          {/* Milestone Tracker (Responsive: Progress bar on mobile, full steps on md+) */}
          <div className="bg-[#f8fafc] px-4 sm:px-5 py-3 border-b border-brand-border">
            {/* Mobile View: No horizontal scrolling */}
            <div className="md:hidden py-0.5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-navy">
                  Milestone <span className="text-brand-orange font-bold">4 of 6</span>: Deck Slab Casting
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" /> Auditing
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-brand-orange h-full rounded-full transition-all duration-300" style={{ width: "66%" }} />
              </div>
              <div className="flex items-center justify-between text-[11px] text-brand-muted">
                <span>✓ Phases 1–3 Cleared</span>
                <span>Next: Wearing Coat</span>
              </div>
            </div>

            {/* Desktop / Tablet View */}
            <div className="hidden md:flex items-center gap-2 text-xs overflow-x-auto scrollbar-thin">
              <div className="flex items-center gap-1.5 font-semibold text-brand-navy shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-pass text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                1. Excavation &amp; SBC
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 font-semibold text-brand-navy shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-pass text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                2. Foundation Piles
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 font-semibold text-brand-navy shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-pass text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                3. Sub-Structure Piers
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded border border-brand-orange/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping"></span>
                4. Deck Slab Casting (Auditing)
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 text-brand-muted shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-border text-brand-muted flex items-center justify-center text-[10px]">5</span>
                5. Wearing Coat &amp; Barriers
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-border shrink-0" />
              <div className="flex items-center gap-1.5 text-brand-muted shrink-0">
                <span className="w-4 h-4 rounded-full bg-brand-border text-brand-muted flex items-center justify-center text-[10px]">6</span>
                6. Vigilance Sign-off
              </div>
            </div>
          </div>

          {/* CRITICAL SNAG ALERT CALLOUT */}
          <div className="mx-4 sm:mx-5 my-4 p-3.5 bg-brand-failBg border-l-4 border-brand-fail rounded-[6px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-brand-fail shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-brand-fail uppercase text-[10px] block">
                  {activeProject === "residential"
                    ? "Defect Notice #NCR-04: Consignment BR-04 Failed IS 1077"
                    : "Statutory Defect Notice #PWD-NCR-09: Aggregates Failed MoRTH Flakiness"}
                </span>
                <span className="text-brand-navy">
                  {activeProject === "residential"
                    ? "Red clay bricks measured 2.8 N/mm² (Mandatory: 3.5 N/mm²). Withhold Stage 4 masonry disbursement until re-test."
                    : "Sub-base aggregates flakiness index 34.2% exceeds MoRTH Clause 401 limit of 30%. Withhold contractor running bill clearance."}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenDocModal(
                  activeProject === "residential"
                    ? "Non-Conformance Dispute Notice #NCR-04"
                    : "PWD Statutory Non-Conformance Directive #PWD-NCR-09",
                  activeProject === "residential" ? "NCR-04" : "PWD-NCR-09"
                )
              }
              className="cursor-pointer text-xs font-bold text-brand-fail hover:underline shrink-0 self-end sm:self-center whitespace-nowrap"
            >
              Download Dispute Notice →
            </button>
          </div>

          {/* DATA TABLE SECTION */}
          <div className="px-4 sm:px-5 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3.5 gap-2">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-brand-navy" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  NABL Certified Lab Test Registry
                </span>
                <span className="text-[11px] text-brand-muted">({activeData.length} Specimens Logged)</span>
              </div>

              {/* Filter Tabs */}
              <div className="inline-flex self-start sm:self-auto rounded-[6px] border border-brand-border bg-brand-bgLight p-0.5 text-[10px] font-semibold">
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className={`cursor-pointer px-2.5 py-1 rounded transition-colors ${
                    filter === "all" ? "bg-white text-brand-navy font-bold shadow-2xs" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  All ({activeData.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("passed")}
                  className={`cursor-pointer px-2.5 py-1 rounded transition-colors ${
                    filter === "passed" ? "bg-white text-brand-pass font-bold shadow-2xs" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  Passed (3)
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("failed")}
                  className={`cursor-pointer px-2.5 py-1 rounded transition-colors ${
                    filter === "failed" ? "bg-white text-brand-fail font-bold shadow-2xs" : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  Failed (1)
                </button>
              </div>
            </div>

            {/* Mobile Specimen Cards (md:hidden) — No horizontal scrolling */}
            <div className="md:hidden space-y-3">
              {filteredData.map((row) => (
                <div
                  key={row.id}
                  className={`p-3.5 rounded-[8px] border transition-all ${
                    row.failedHighlight
                      ? "bg-brand-failBg/40 border-brand-fail/30"
                      : "bg-white border-brand-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-brand-border/60">
                    <div>
                      <div className={`font-bold text-sm ${row.failedHighlight ? "text-brand-fail" : "text-brand-navy"}`}>
                        {row.material}
                      </div>
                      <div className="font-mono text-[11px] text-brand-muted mt-0.5">
                        ID: {row.id} • {row.date}
                      </div>
                    </div>
                    {row.status === "Passed" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-pass bg-brand-passBg px-2 py-0.5 rounded border border-brand-pass/20 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" /> Passed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-fail bg-brand-failBg px-2 py-0.5 rounded border border-brand-fail/30 shrink-0">
                        <AlertCircle className="w-2.5 h-2.5" /> FAILED
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <span className="text-[10px] text-brand-muted uppercase block font-semibold">Test Scope</span>
                      <span className="text-brand-navy font-medium text-[11.5px] leading-tight block">{row.testDesc}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-muted uppercase block font-semibold">Measured Yield</span>
                      <span className={`font-bold text-[11.5px] block ${row.failedHighlight ? "text-brand-fail" : "text-brand-navy"}`}>
                        {row.measured}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] text-brand-muted uppercase block font-semibold">Specification</span>
                      <span className="text-brand-muted text-[11px]">{row.standard}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenDocModal(
                        row.status === "Passed"
                          ? `NABL Test Certificate: ${row.material} (${row.id})`
                          : `Defect Notice: ${row.material} (${row.id})`,
                        row.id
                      )
                    }
                    className={`cursor-pointer w-full py-2 px-3 rounded-[6px] text-xs font-semibold text-center transition-colors active:scale-98 ${
                      row.status === "Passed"
                        ? "bg-brand-bgLight text-brand-navy hover:bg-brand-navy hover:text-white border border-brand-border"
                        : "bg-brand-fail text-white hover:bg-red-700 shadow-xs"
                    }`}
                  >
                    {row.status === "Passed" ? "View NABL Certificate PDF →" : "View Non-Conformance Notice →"}
                  </button>
                </div>
              ))}
            </div>

            {/* Desktop / Tablet Table (hidden md:block) */}
            <div className="hidden md:block border border-brand-border rounded-[8px] overflow-x-auto scrollbar-thin">
              <table className="w-full text-left border-collapse text-xs min-w-[660px]">
                <thead>
                  <tr className="bg-brand-bgLight border-b border-brand-border text-[10px] font-semibold text-brand-muted uppercase tracking-wider">
                    <th className="py-2.5 px-3">Material</th>
                    <th className="py-2.5 px-2.5">ID</th>
                    <th className="py-2.5 px-3">Test Scope</th>
                    <th className="py-2.5 px-3">Measured Yield</th>
                    <th className="py-2.5 px-3">Specification</th>
                    <th className="py-2.5 px-2.5">Status</th>
                    <th className="py-2.5 px-3 text-right">Certificate</th>
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
                      <td className={`py-3 px-3 font-semibold ${row.failedHighlight ? "text-brand-fail" : "text-brand-navy"}`}>
                        {row.material}
                      </td>
                      <td className="py-3 px-2.5 font-mono text-[11px] text-brand-muted">
                        {row.id}
                      </td>
                      <td className="py-3 px-3 text-brand-navy">{row.testDesc}</td>
                      <td className={`py-3 px-3 font-semibold ${row.failedHighlight ? "text-brand-fail" : "text-brand-navy"}`}>
                        {row.measured}
                      </td>
                      <td className="py-3 px-3 text-brand-muted text-[11px]">{row.standard}</td>
                      <td className="py-3 px-2.5">
                        {row.status === "Passed" ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-pass bg-brand-passBg px-2 py-0.5 rounded border border-brand-pass/20">
                            <Check className="w-2.5 h-2.5 stroke-[3]" /> Passed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-fail bg-brand-failBg px-2 py-0.5 rounded border border-brand-fail/30">
                            <AlertCircle className="w-2.5 h-2.5" /> FAILED
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            onOpenDocModal(
                              row.status === "Passed"
                                ? `NABL Test Certificate: ${row.material} (${row.id})`
                                : `Defect Notice: ${row.material} (${row.id})`,
                              row.id
                            )
                          }
                          className={`cursor-pointer text-xs underline font-medium ${
                            row.status === "Passed" ? "text-brand-navy hover:text-brand-orange" : "text-brand-fail"
                          }`}
                        >
                          {row.status === "Passed" ? "View PDF" : "Notice"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MODERN MULTI-PLATFORM ECOSYSTEM STRIP (Replacing dashboard images) */}
            <div className="mt-5 pt-5 border-t border-brand-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
                <div>
                  <span className="text-[11px] font-bold text-brand-navy uppercase tracking-wider block">
                    Real-Time Service Access • Web &amp; Mobile Ecosystem
                  </span>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Monitor site compliance, review laboratory certificates, and authorize contractor payments from anywhere.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-navy bg-brand-bgLight px-2.5 py-1 rounded-full border border-brand-border">
                    <Laptop className="w-3.5 h-3.5 text-brand-orange" /> Web Portal
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-navy bg-brand-bgLight px-2.5 py-1 rounded-full border border-brand-border">
                    <Smartphone className="w-3.5 h-3.5 text-brand-orange" /> Mobile App (iOS &amp; Android)
                  </span>
                </div>
              </div>

              {/* 3 Modern Feature Capability Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-3.5 rounded-[10px] border border-brand-border/80 bg-brand-bgLight/40 hover:bg-white hover:border-brand-navy/30 transition-all space-y-1.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-[6px] bg-white border border-brand-border flex items-center justify-center text-brand-orange shadow-xs">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-brand-navy">
                    Executive Web Dashboard
                  </h4>
                  <p className="text-[11.5px] text-brand-muted leading-relaxed">
                    Full engineering registry with tamper-evident PDF dossiers, historical slump curves, and running bill payment gating.
                  </p>
                </div>

                <div className="p-3.5 rounded-[10px] border border-brand-border/80 bg-brand-bgLight/40 hover:bg-white hover:border-brand-navy/30 transition-all space-y-1.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-[6px] bg-white border border-brand-border flex items-center justify-center text-brand-orange shadow-xs">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-brand-navy">
                    Mobile Companion App
                  </h4>
                  <p className="text-[11.5px] text-brand-muted leading-relaxed">
                    Native iOS &amp; Android app for owners, site engineers, and government officials to review inspections on the move.
                  </p>
                </div>

                <div className="p-3.5 rounded-[10px] border border-brand-border/80 bg-brand-bgLight/40 hover:bg-white hover:border-brand-navy/30 transition-all space-y-1.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-[6px] bg-white border border-brand-border flex items-center justify-center text-brand-orange shadow-xs">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-brand-navy">
                    Instant Non-Conformance Alerts
                  </h4>
                  <p className="text-[11.5px] text-brand-muted leading-relaxed">
                    Real-time push notifications the moment a material consignment fails IS / CPWD specifications, preventing concrete pouring.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
