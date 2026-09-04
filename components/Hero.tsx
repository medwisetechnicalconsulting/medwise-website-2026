'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2, ArrowRight, Award, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24 text-white min-h-[75vh] flex items-center border-b border-slate-800">
      {/* Authentic Hero Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Medwise Technical Consulting biomedical engineers evaluating clinical medical equipment"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center opacity-40 pointer-events-none"
      />

      {/* Solid Flat Overlay for Strong Text Contrast & Professional Hierarchy */}
      <div className="absolute inset-0 bg-slate-950/75 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Editorial Label */}
          <div className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-3.5 py-1.5 text-xs font-semibold text-slate-200">
            <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
            <span>Independent Medical Equipment Advisory • Kisumu &amp; Nairobi, Kenya</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Buy the Right Medical Equipment. The First Time.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Medwise Technical Consulting is an independent biomedical engineering firm based in Kenya. We evaluate your facility&apos;s clinical workload, space, and power infrastructure to recommend, source, install, and calibrate high-value medical devices without single-brand sales pressure.
          </p>

          {/* Practical Call to Action Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors shadow-xs"
            >
              <MessageSquare className="h-4 w-4 fill-white stroke-none" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 hover:border-slate-500 transition-colors shadow-xs"
            >
              <Phone className="h-4 w-4 text-red-500" />
              <span>Call {SITE_CONFIG.telephone}</span>
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white py-2 sm:px-2 transition-colors group"
            >
              <span>Explore Equipment Catalog</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Core Engineering Trust Pillars */}
          <div className="pt-6 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Brand Neutral</h3>
                <p className="text-xs text-slate-400 mt-0.5">We evaluate models against clinical needs, not sales commissions.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800">
              <Award className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Transparent Costs</h3>
                <p className="text-xs text-slate-400 mt-0.5">Clear pricing in KSh with upfront total cost of ownership modeling.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800">
              <Wrench className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Field Support</h3>
                <p className="text-xs text-slate-400 mt-0.5">Rapid dispatch from Kisumu HQ and Nairobi for calibration and repairs.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


