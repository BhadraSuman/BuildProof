"use client";

import { FileText, AlertTriangle, Download, X } from "lucide-react";

interface DocumentPreviewModalProps {
  isOpen: boolean;
  docTitle: string;
  docId: string;
  onClose: () => void;
}

export default function DocumentPreviewModal({
  isOpen,
  docTitle,
  docId,
  onClose,
}: DocumentPreviewModalProps) {
  if (!isOpen) return null;

  const isFailedDoc =
    docTitle.toLowerCase().includes("non-conformance") ||
    docTitle.toLowerCase().includes("dispute") ||
    docTitle.toLowerCase().includes("defect");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navyDark/65 backdrop-blur-md p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white/95 backdrop-blur-xl rounded-[12px] max-w-2xl w-full overflow-hidden shadow-2xl border border-white/60 my-auto">
        {/* Document Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-brand-navy text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            {isFailedDoc ? (
              <AlertTriangle className="w-4 h-4 text-brand-orange shrink-0" />
            ) : (
              <FileText className="w-4 h-4 text-slate-200 shrink-0" />
            )}
            <div className="text-xs sm:text-[13px] font-semibold truncate">{docTitle}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-slate-300 hover:text-white transition-colors p-1 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper Document Representation */}
        <div className="p-4 sm:p-6 bg-brand-bgLight max-h-[68vh] sm:max-h-[75vh] overflow-y-auto">
          <div className="bg-white p-5 sm:p-8 border border-brand-border shadow-xs rounded-[4px] text-brand-navy space-y-5 sm:space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start border-b border-brand-border pb-4 gap-2">
              <div>
                <div className="text-base sm:text-[18px] font-bold text-brand-navy tracking-tight">BUILDPROOF</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-brand-muted font-semibold">
                  Independent Civil Engineering &amp; Materials Testing Desk
                </div>
                <div className="text-[10px] sm:text-[11px] text-brand-muted mt-0.5">
                  NABL Partner Testing Laboratory • Reg: NABL/TC-5892 • ISO/IEC 17025
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono bg-brand-bgLight px-2 py-0.5 rounded border border-brand-border font-bold">
                  {docId}
                </span>
                <div className="text-[10px] sm:text-[11px] text-brand-muted mt-0.5">Date: 14 Feb 2025</div>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[11px] sm:text-[12px] bg-brand-bgLight/70 p-3 rounded">
              <div>
                <span className="text-brand-muted block">Project / Site:</span>
                <strong className="text-brand-navy">Sharma Residence (Plot 42, New Town Zone 1)</strong>
              </div>
              <div>
                <span className="text-brand-muted block">Contractor Agency:</span>
                <strong className="text-brand-navy">Apex Buildcon Pvt Ltd</strong>
              </div>
              <div>
                <span className="text-brand-muted block">Sampling Protocol:</span>
                <span>Unannounced Direct Lot Sampling (IS 1199 / IS 5454)</span>
              </div>
              <div>
                <span className="text-brand-muted block">Verification Officer:</span>
                <span>Er. P. K. Banerjee, M.Tech (Structures)</span>
              </div>
            </div>

            {/* Body Description */}
            {isFailedDoc ? (
              <div className="space-y-3">
                <div className="p-3 bg-brand-failBg border-l-4 border-brand-fail rounded-[2px]">
                  <div className="text-[11px] sm:text-[12px] font-bold text-brand-fail uppercase">
                    Formal Non-Conformance Finding (#NCR-04)
                  </div>
                  <div className="text-xs sm:text-[12px] text-brand-navy mt-1 leading-snug">
                    Lot BRK-0034 Red Clay Bricks exhibits severe compressive deficit (2.8 N/mm² observed vs 3.5 N/mm² mandatory threshold under IS 1077). Water absorption 23.4% violates max tolerance of 20%.
                  </div>
                </div>
                <div className="text-xs sm:text-[12px] text-brand-muted leading-relaxed">
                  <strong>Mandated Statutory Civil Directive:</strong> The lot must be rejected in entirety and quarantined off-site within 48 hours. The project financier is advised to hold stage release payment for brick masonry until verified replacement.
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3 bg-brand-passBg border-l-4 border-brand-pass rounded-[2px]">
                  <div className="text-[11px] sm:text-[12px] font-bold text-brand-pass uppercase">
                    Test Conformance Certification
                  </div>
                  <div className="text-xs sm:text-[12px] text-brand-navy mt-1 leading-snug">
                    Specimen tested in accordance with standard Bureau of Indian Standards procedures. Measured compressive yield meets structural criteria with a 1.259 safety ratio above minimum standard threshold.
                  </div>
                </div>
                <div className="text-xs sm:text-[12px] text-brand-muted leading-relaxed">
                  This test certificate carries legal evidentiary validity under Indian Evidence Act Section 45 and is admissible before RERA arbitration benches and consumer dispute commissions.
                </div>
              </div>
            )}

            {/* Stamp & Signature Footer */}
            <div className="pt-5 sm:pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] sm:text-[11px] text-brand-muted">
              <div>
                <div className="font-semibold text-brand-navy">Geotag Digital Hash:</div>
                <div className="font-mono text-[9px] sm:text-[10px] break-all">sha256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f</div>
              </div>
              <div className="sm:text-right">
                <div className="inline-block border border-dashed border-brand-navy/40 px-3 py-1 rounded text-brand-navy font-bold text-[9px] sm:text-[10px] uppercase">
                  ✓ Digitally Certified NABL Lab Seal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-4 sm:px-6 py-3 bg-white border-t border-brand-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-[11px] sm:text-xs text-brand-muted text-center sm:text-left">
            Format: Official Engineering Dossier PDF (Encrypted)
          </div>
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs sm:text-[12px] font-semibold text-brand-muted hover:text-brand-navy"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                alert(`Downloaded sample certificate for ${docId}`);
                onClose();
              }}
              className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-brand-navy hover:bg-brand-navyDark text-white text-xs sm:text-[12px] font-semibold rounded-[4px] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
