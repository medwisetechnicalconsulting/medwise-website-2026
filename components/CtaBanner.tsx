'use client';

import Link from 'next/link';
import { MessageSquare, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function CtaBanner() {
  return (
    <section className="bg-[#0A1B2D] border-t border-[#1E3A5F] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        <div className="inline-flex items-center gap-2 rounded-md border border-[#2B4C74] bg-[#0F2942] px-3.5 py-1 text-xs font-semibold text-slate-300">
          <ShieldCheck className="h-4 w-4 text-[#DC2626]" />
          <span>Independent Technical Guidance • Zero Sales Quotas</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Need Guidance Choosing or Servicing Medical Equipment?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Speak with our biomedical engineering team before committing your capital budget. We evaluate your clinic&apos;s daily volume, power setup, and test menus without sales pressure.
        </p>

        {/* Buttons (min 44px touch targets) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise,%20I%20would%20like%20to%20consult%20an%20engineer%20regarding%20medical%20equipment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="med-btn-tactile med-btn-tactile-emerald w-full sm:w-auto"
          >
            <MessageSquare className="h-4.5 w-4.5 fill-white stroke-none shrink-0" />
            <span>WhatsApp Senior Engineer</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="med-btn-tactile med-btn-tactile-secondary w-full sm:w-auto"
          >
            <Phone className="h-4 w-4 text-[#DC2626] shrink-0" />
            <span>Call Kisumu HQ ({SITE_CONFIG.telephone})</span>
          </a>

          <Link
            href="/contact"
            className="med-btn-tactile med-btn-tactile-primary w-full sm:w-auto"
          >
            <Calendar className="h-4 w-4 text-slate-300 shrink-0" />
            <span>Book Facility Consultation</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
