'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2, ArrowRight, Award, Wrench, Heart, Sparkles, Activity } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200/80 text-slate-900">
      
      {/* Morphing Animated Gradient Blobs in Background */}
      <div className="absolute top-10 left-1/4 h-72 w-72 bg-blue-400/10 rounded-full blur-3xl animate-morph-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 bg-red-500/10 rounded-full blur-3xl animate-morph-pulse pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs font-bold text-blue-900 shadow-xs backdrop-blur-md"
            >
              <ShieldCheck className="h-4 w-4 text-red-600 animate-pulse" />
              <span>Independent Medical Equipment Advisory • Kisumu Kakamega Road</span>
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
            >
              Buy the Right Medical Equipment.{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                The First Time.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium"
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
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/25 hover:bg-blue-800 transition-all"
              >
                <MessageSquare className="h-5 w-5 fill-white stroke-none" />
                <span>Chat on WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${SITE_CONFIG.telephone}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition-all"
              >
                <Phone className="h-5 w-5 text-red-600" />
                <span>Call {SITE_CONFIG.telephone}</span>
              </motion.a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 py-2 sm:px-3 transition-colors group"
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
              className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-start gap-2.5 group">
                <CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Neutral Advice</h3>
                  <p className="text-xs text-slate-600 font-medium">Comparing options based on clinical need, not sales margins.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 group">
                <Award className="h-5 w-5 text-red-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Value for Money</h3>
                  <p className="text-xs text-slate-600 font-medium">Competitive pricing & transparent procurement costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 group">
                <Wrench className="h-5 w-5 text-blue-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">After-Sales Support</h3>
                  <p className="text-xs text-slate-600 font-medium">Flawless installation, calibration & maintenance.</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl animate-float-slow">
              
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-50 via-slate-50 to-blue-100/50 flex items-center justify-center border border-slate-100 p-6">
                <div className="text-center space-y-3 relative z-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-md border border-blue-100 relative group">
                    <Heart className="h-8 w-8 text-red-600 fill-red-600 group-hover:scale-110 transition-transform" />
                    <Activity className="h-5 w-5 text-white absolute inset-0 m-auto stroke-[2.5]" />
                  </div>
                  <span className="block text-xs font-mono font-bold text-blue-800 uppercase tracking-widest bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
                    MEDWISE KNOWLEDGE AND ACCESS
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Biomedical Engineering & Technical Support
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    Kisumu Kakamega Road • Kenya & East Africa
                  </p>
                </div>
              </div>

              {/* Floating Pulse Status Badge */}
              <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-white font-bold text-xs shadow-xs">
                    KE
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-xs font-bold text-slate-900">Official Technical Services Partner</p>
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium">Kisumu Kakamega Road, Kisumu, Kenya</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
