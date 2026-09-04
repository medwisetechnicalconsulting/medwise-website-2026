'use client';

import Link from 'next/link';
import { MessageSquare, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function CtaBanner() {
  return (
    <section className="bg-slate-900 border-t border-slate-800 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        <div className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-850 px-3.5 py-1 text-xs font-semibold text-slate-300">
          <ShieldCheck className="h-4 w-4 text-blue-400" />
          <span>Independent Technical Guidance • Zero Sales Quotas</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
          Need Guidance Choosing or Servicing Medical Equipment?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Speak with our biomedical engineering team before committing your capital budget. We evaluate your clinic&apos;s daily volume, power setup, and test menus without sales pressure.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise,%20I%20would%20like%20to%20consult%20an%20engineer%20regarding%20medical%20equipment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors shadow-xs"
          >
            <MessageSquare className="h-4 w-4 fill-white stroke-none" />
            <span>WhatsApp Senior Engineer</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-5 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-xs"
          >
            <Phone className="h-4 w-4 text-red-400" />
            <span>Call {SITE_CONFIG.telephone}</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>Book Facility Consultation</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

