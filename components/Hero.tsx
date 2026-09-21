'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2, ArrowRight, Award, Wrench, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Hero() {
  return (
    <section className="relative bg-[#0A1B2D] text-white py-16 sm:py-20 lg:py-24 border-b border-[#1E3A5F] overflow-hidden">
      {/* Authentic High-Resolution Clinical Engineering Background */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Medwise Technical Consulting biomedical engineers evaluating medical equipment"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center opacity-30 pointer-events-none"
      />

      {/* Solid High-Contrast Flat Tint (Zero Gradients) */}
      <div className="absolute inset-0 bg-[#0A1B2D]/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Clinical Accreditation Badge */}
          <div className="inline-flex items-center gap-2 rounded-md border border-[#2B4C74] bg-[#0F2942] px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#DC2626] shrink-0"></span>
            <span className="text-white font-bold">Independent Biomedical Advisory</span>
            <span className="text-slate-400">• Kisumu HQ &amp; Nairobi Field Hub</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Buy the Right Medical Equipment. <span className="text-slate-100">The First Time.</span>
          </h1>

          {/* Supporting Copy Grounded in Kenyan Clinical Practice */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Medwise Technical Consulting is an independent biomedical engineering firm based in Kenya. We evaluate your facility&apos;s daily patient volume, space, and power infrastructure to recommend, source, install, and calibrate diagnostic devices without single-brand sales pressure.
          </p>

          {/* Practical Call to Action Actions (min 44px touch targets) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition-colors shadow-xs min-h-[44px]"
            >
              <MessageSquare className="h-4.5 w-4.5 fill-white shrink-0" />
              <span>WhatsApp Senior Engineer</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2B4C74] bg-[#0F2942] hover:bg-[#1E3A5F] px-5 py-3 text-sm font-bold text-white transition-colors shadow-xs min-h-[44px]"
            >
              <Phone className="h-4.5 w-4.5 text-[#DC2626] shrink-0" />
              <span>Call {SITE_CONFIG.telephone}</span>
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-300 hover:text-white py-3 sm:px-3 transition-colors group min-h-[44px]"
            >
              <span>Explore Equipment Catalog</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-[#DC2626]" />
            </Link>
          </div>

          {/* 3 Physical Engineering Trust Pillars (Uiverse.io inspired tactile cards) */}
          <div className="pt-6 border-t border-[#1E3A5F] grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0F2942] border border-[#1E3A5F] shadow-xs">
              <div className="h-8 w-8 rounded bg-[#1E3A5F] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Brand Neutral</h3>
                <p className="text-xs text-slate-300 mt-0.5">Objective model evaluation based on clinical throughput, zero vendor quotas.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0F2942] border border-[#1E3A5F] shadow-xs">
              <div className="h-8 w-8 rounded bg-[#1E3A5F] flex items-center justify-center shrink-0 mt-0.5">
                <Award className="h-4.5 w-4.5 text-[#DC2626]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Transparent TCO</h3>
                <p className="text-xs text-slate-300 mt-0.5">Upfront KSh pricing including annual reagents, power draw, and maintenance costs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0F2942] border border-[#1E3A5F] shadow-xs">
              <div className="h-8 w-8 rounded bg-[#1E3A5F] flex items-center justify-center shrink-0 mt-0.5">
                <Wrench className="h-4.5 w-4.5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Rapid Dispatch</h3>
                <p className="text-xs text-slate-300 mt-0.5">Prompt technical response from Kisumu HQ and Nairobi for emergency repairs.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
