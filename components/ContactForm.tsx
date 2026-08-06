'use client';

import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function ContactForm() {
  return (
    <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900">Request a Free Technical Consultation</h2>
        <p className="text-xs text-slate-500 mt-1">
          Fill out the form below or chat on WhatsApp for an immediate response from our biomedical team.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Brian Musango"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Facility / Hospital Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Thagana County Medical Center"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              required
              placeholder="+254 7XX XXX XXX"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Email Address</label>
            <input
              type="email"
              placeholder="medwisetechnicalconsulting@gmail.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">Service Category Needed *</label>
          <select className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none bg-white">
            <option>Pre-Purchase Consulting & Equipment Selection</option>
            <option>Medical Device Sourcing & Procurement</option>
            <option>Device Installation & Room Setup</option>
            <option>Calibration & Quality Control (QC) Verification</option>
            <option>Routine Maintenance & Motor Drive Board Repairs</option>
            <option>Staff Training & Operational Support</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">How can our engineers help your facility?</label>
          <textarea
            rows={4}
            placeholder="Describe your equipment requirements, machine model (e.g. Zybio Z3 hematology analyzer), timeline, or issue..."
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
          ></textarea>
        </div>

        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20request%20a%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-3.5 text-xs font-bold text-white shadow-md hover:bg-blue-800 transition-colors"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Submit Consultation Request via WhatsApp</span>
        </a>
      </form>
    </div>
  );
}
