'use client';

import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function ContactForm() {
  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-border shadow-xs space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">Request a Technical Consultation</h2>
        <p className="text-sm text-slate-600 mt-1 font-normal">
          Complete the form below or message our engineering team directly on WhatsApp for guidance.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Brian Musango"
              className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-light focus:outline-hidden min-h-[44px] transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Facility / Hospital Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Thagana County Medical Center"
              className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-light focus:outline-hidden min-h-[44px] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              required
              placeholder="+254 7XX XXX XXX"
              className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-light focus:outline-hidden min-h-[44px] transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Email Address</label>
            <input
              type="email"
              placeholder="facility@example.com"
              className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-light focus:outline-hidden min-h-[44px] transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">Service Category Needed *</label>
          <select className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-light focus:outline-hidden min-h-[44px] transition-all">
            <option>Pre-Purchase Consulting &amp; Equipment Selection</option>
            <option>Medical Device Sourcing &amp; Procurement</option>
            <option>Device Installation &amp; Room Setup</option>
            <option>Calibration &amp; Quality Control (QC) Verification</option>
            <option>Routine Maintenance &amp; Motor Drive Board Repairs</option>
            <option>Staff Training &amp; Operational Support</option>
            <option>Consumables &amp; Reagents Supply</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">How can our engineers help your facility?</label>
          <textarea
            rows={4}
            placeholder="Describe your equipment requirements, machine model (e.g. Zybio Z3 hematology analyzer, Mindray BS-240), timeline, or issue..."
            className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-light focus:outline-hidden transition-all"
          ></textarea>
        </div>

        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20request%20a%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors min-h-[44px] text-center"
        >
          <MessageSquare className="h-4.5 w-4.5 fill-white shrink-0" />
          <span className="hidden sm:inline">Submit Consultation Request via WhatsApp</span>
          <span className="sm:hidden">Request Consultation on WhatsApp</span>
        </a>
      </form>
    </div>
  );
}
