"use client";

import { Phone, Mail, Clock, Landmark } from "lucide-react";

interface ActionBannerProps {
  onRequestAudit: () => void;
}

export default function ActionBanner({ onRequestAudit }: ActionBannerProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navyDark text-white relative overflow-hidden" id="audit">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/3 blur-3xl -z-0 pointer-events-none" />
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-3.5">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-brand-orange">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
              <span>PROTECT CAPITAL DISBURSEMENTS • PRIVATE &amp; GOVT INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
              Know what is going into your building.
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl">
              Schedule an unannounced site inspection or consult with our senior civil engineering desk prior to your next foundation, slab pour, or road sub-base clearance.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onRequestAudit}
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-[6px] transition-colors text-center active:scale-98 shadow-sm"
              >
                Request a Site Audit
              </button>
              <a
                className="border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-[6px] transition-colors flex items-center justify-center gap-2 text-center"
                href="tel:+919830012345"
              >
                <Phone className="w-4 h-4" />
                +91 98300 12345
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>Response within 2 business hours</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-brand-orange" />
                <span>Govt &amp; PWD Empanelled Desk</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/[0.06] backdrop-blur-md border border-white/12 p-5 sm:p-6 rounded-[12px] space-y-2.5 shadow-xl shadow-black/20">
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
              Civil QA Audit Division
            </div>
            <div className="text-base sm:text-lg font-bold text-white">Eastern India Regional Hub</div>
            <div className="text-xs text-slate-300 leading-relaxed">
              New Town, Action Area II, Kolkata, WB 700156
            </div>
            <div className="pt-3 border-t border-brand-borderDark space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <a className="hover:text-white hover:underline break-all" href="mailto:desk@buildproof.in">
                  desk@buildproof.in
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                <a className="hover:text-white hover:underline break-all" href="mailto:govt@buildproof.in">
                  govt@buildproof.in (PWD &amp; Smart City)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
