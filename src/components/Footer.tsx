import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-brand-border text-brand-muted py-14 sm:py-16 text-xs sm:text-[13px]">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-brand-border">
          <div className="sm:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-brand-navy flex items-center justify-center rounded-[5px] text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-base sm:text-[17px] text-brand-navy">BuildProof</span>
            </div>
            <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed max-w-sm">
              Independent civil engineering verification, NABL-accredited materials testing, and digital quality auditing for private residential, commercial, and government infrastructure projects.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy text-[11px] sm:text-[12px] uppercase tracking-wider mb-3">
              Testing Scope
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#standards">
                  Concrete &amp; RMC (IS 456 / CPWD)
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#standards">
                  TMT Steel Rebar (IS 1786)
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#standards">
                  Cement &amp; Mortar (IS 12269)
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#standards">
                  Clay Bricks &amp; AAC (IS 1077)
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#standards">
                  Road Sub-Base &amp; Pavements (MoRTH)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy text-[11px] sm:text-[12px] uppercase tracking-wider mb-3">
              Platform &amp; Sectors
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#how-it-works">
                  Workflow &amp; Protocols
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#dashboard">
                  Client Dashboard Demo
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#segments">
                  Government &amp; PWD Works
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#segments">
                  NRI &amp; Remote Property Owners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy text-[11px] sm:text-[12px] uppercase tracking-wider mb-3">
              Governance
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#governance">
                  NABL Laboratory Directory
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#governance">
                  RERA Compliance Support
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#governance">
                  Vigilance Audit Documentation
                </a>
              </li>
              <li>
                <a className="hover:text-brand-navy transition-colors" href="#governance">
                  Privacy &amp; Ethics Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-[12px] text-center sm:text-left">
          <div>© 2025 BuildProof Technologies India Pvt Ltd. All rights reserved.</div>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 text-brand-muted">
            <span>ISO/IEC 17025 Laboratory Auditing Standard</span>
            <span className="hidden sm:inline">•</span>
            <span>BIS, CPWD &amp; MoRTH Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
