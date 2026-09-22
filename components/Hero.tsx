'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white py-14 sm:py-20 min-h-[85vh] flex items-center px-4 sm:px-8 md:px-[72px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >

          {/* H1 Headline */}
          <h1 className="font-extrabold text-[clamp(2.8rem,5.2vw,5.4rem)] tracking-[-0.04em] leading-[0.96] text-[hsl(var(--foreground))]">
            Medical <br />
            Equipment <br />
            <span className="text-[hsl(var(--primary))]">Done Right.</span>
          </h1>

          {/* Subline */}
          <p className="font-light text-base text-[hsl(var(--muted-foreground))] leading-[1.75] mt-7 max-w-[430px]">
            Independent biomedical engineers for Kenyan hospitals and clinics. Flat-rate pricing, same-day field dispatch, and certified metrological calibration on all equipment.
          </p>

          {/* Trust Chips Row */}
          <div className="flex flex-wrap gap-2 mt-8">
            <div className="inline-flex items-center gap-1.5 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-full px-3.5 py-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[hsl(var(--success))]" />
              <span className="font-medium text-[0.72rem] text-[hsl(var(--foreground))]">Licensed Biomedical Engineers</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-full px-3.5 py-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[hsl(var(--success))]" />
              <span className="font-medium text-[0.72rem] text-[hsl(var(--foreground))]">Certified Metrology Calibration</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-full px-3.5 py-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[hsl(var(--success))]" />
              <span className="font-medium text-[0.72rem] text-[hsl(var(--foreground))]">Brand-Neutral Advisory</span>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-3.5 items-center mt-10">
            <Link
              href="/contact"
              className="btn-pill-primary h-12 px-9 font-semibold text-sm"
            >
              <span>Get a Free Quote</span>
            </Link>

            <Link
              href="/services"
              className="btn-pill-secondary h-12 px-8 font-semibold text-sm"
            >
              <span>View Services</span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Stadium Photo with Floating Stat Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative lg:pl-6 overflow-visible py-6"
        >
          {/* Stadium Photo Container */}
          <div className="stadium-shape relative w-full h-[420px] sm:h-[500px] lg:h-[560px] bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[hsl(var(--border))]">
            <Image
              src="/images/services/pre-purchase-consulting.png"
              alt="Medwise biomedical engineer performing clinical equipment advisory in Kenya"
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Card — Bottom-Left (stat-card) */}
          <div className="stat-card bottom-8 left-[-10px] sm:left-[-24px] lg:left-[-32px] max-w-[240px] z-10 hidden sm:block">
            <span className="font-semibold text-[0.62rem] tracking-[0.18em] uppercase text-[hsl(var(--muted-foreground))] block">
              PRECISION CALIBRATION
            </span>
            <span className="font-bold text-base text-[hsl(var(--foreground))] mt-1 block">
              Certified Metrology
            </span>
            <span className="font-light text-xs text-[hsl(var(--muted-foreground))] mt-0.5 block leading-tight">
              Traceable to international hospital standards
            </span>
          </div>

          {/* Floating Card — Top-Right (stat-card-blue) */}
          <div className="stat-card-blue top-8 right-[-10px] sm:right-[-20px] lg:right-[-24px] z-10 hidden sm:block text-white">
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold text-2xl tracking-[-0.03em]">4hr</span>
              <span className="font-light text-sm text-white/60">avg</span>
            </div>
            <span className="font-light text-xs text-white/80 mt-0.5 block">
              Emergency Dispatch
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
