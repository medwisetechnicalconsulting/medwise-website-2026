'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2, ArrowRight, Award, Wrench, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-28 text-white min-h-[80vh] flex items-center">
      {/* Background Image with Next.js Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Medwise Technical Consulting biomedical engineers evaluating medical equipment"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center opacity-30 filter brightness-90 pointer-events-none"
      />

      {/* Transparent Dark Gradient Overlays for Crystal-Clear Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 pointer-events-none" />

      {/* Ambient Morphing Lighting Effects */}
      <div className="absolute top-1/4 left-10 h-96 w-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-morph-pulse" />
      <div className="absolute bottom-10 right-10 h-80 w-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-morph-pulse" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-7">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-900/80 px-4 py-2 text-xs sm:text-sm font-bold text-blue-200 shadow-lg backdrop-blur-md"
          >
            <ShieldCheck className="h-4 w-4 text-red-500 animate-pulse shrink-0" />
            <span>Independent Medical Equipment Advisory • Kisumu Kakamega Road</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-400 shrink-0" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-sm"
          >
            Buy the Right Medical Equipment.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
              The First Time.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl leading-relaxed font-normal drop-shadow-xs"
          >
            Medwise Technical Consulting is a Kenya-based independent medical engineering firm. We evaluate your facility&apos;s clinical needs and budget to advise, source, install, train, and maintain high-value medical devices—without single-brand bias.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500 transition-all border border-blue-500/30"
            >
              <MessageSquare className="h-5 w-5 fill-white stroke-none" />
              <span>Chat on WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${SITE_CONFIG.telephone}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-bold text-white shadow-lg backdrop-blur-md hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              <Phone className="h-5 w-5 text-red-500" />
              <span>Call {SITE_CONFIG.telephone}</span>
            </motion.a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-blue-300 hover:text-white py-2 sm:px-3 transition-colors group"
            >
              <span>Book 15-Min Free Consultation</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* 3 Core Trust Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-7 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm group hover:border-slate-700 transition-colors">
              <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Neutral Advice</h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">Comparing options based on clinical need, not sales margins.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm group hover:border-slate-700 transition-colors">
              <Award className="h-5 w-5 text-red-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Value for Money</h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">Competitive pricing & transparent procurement costs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm group hover:border-slate-700 transition-colors">
              <Wrench className="h-5 w-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">After-Sales Support</h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">Flawless installation, calibration & maintenance.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

