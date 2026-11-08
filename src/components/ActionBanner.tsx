"use client";

import { Phone } from "lucide-react";

interface ActionBannerProps {
  onRequestAudit: () => void;
}

export default function ActionBanner({ onRequestAudit }: ActionBannerProps) {
  return (
    <section className="py-14 sm:py-20 bg-brand-navy text-white" id="audit">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs sm:text-[12px] font-mono text-brand-orange">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
              PROTECT YOUR CAPITAL DISBURSEMENTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Know what is going into your building.
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed max-w-2xl">
              Schedule an initial site inspection or consult with our senior civil engineering desk prior to your next foundation or slab casting.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <button
                type="button"
                onClick={onRequestAudit}
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-semibold px-6 py-3 rounded-[6px] transition-colors text-center active:scale-98 shadow-sm"
              >
                Request a Site Audit
              </button>
              <a
                className="border border-white/20 hover:bg-white/10 text-white text-sm font-semibold px-5 py-3 rounded-[6px] transition-colors flex items-center justify-center gap-2 text-center"
                href="tel:+919830012345"
              >
                <Phone className="w-4 h-4" />
                +91 98300 12345
              </a>
            </div>
            <div className="text-[11px] sm:text-[12px] text-slate-400 pt-1">
              Engineering desk response time: within 2 business hours • Zero promotional spam
            </div>
          </div>
          <div className="lg:col-span-4 bg-brand-navyDark border border-brand-borderDark p-5 sm:p-6 rounded-[6px] space-y-3">
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase">
              Audit Desk Hotline
            </div>
            <div className="text-base sm:text-[18px] font-bold text-white">Civil QA Division</div>
            <div className="text-xs sm:text-[13px] text-slate-300">
              New Town, Action Area II, Kolkata, WB 700156
            </div>
            <div className="pt-3 border-t border-brand-borderDark text-[11px] sm:text-[12px] text-slate-400">
              Direct Inquiries:{" "}
              <a className="text-white hover:underline" href="mailto:desk@buildproof.in">
                desk@buildproof.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
