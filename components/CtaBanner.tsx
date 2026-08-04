'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 py-16 text-white">
      {/* Morphing Blur Circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-morph-pulse pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl animate-morph-pulse pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold text-blue-100 backdrop-blur-md"
        >
          <ShieldCheck className="h-4 w-4 text-red-400" />
          <span>Zero Obligation • 100% Technical Guidance</span>
          <Sparkles className="h-3.5 w-3.5 text-blue-200" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto"
        >
          Not Sure What Medical Equipment Your Facility Needs?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed"
        >
          Speak directly with our qualified biomedical engineering team before spending money. We review your clinical requirements, budget constraints, and site setup for free.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise,%20I%20would%20like%20to%20book%20a%20free%2015-minute%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-900 shadow-lg hover:bg-blue-50 transition-all"
          >
            <MessageSquare className="h-5 w-5 fill-blue-900 stroke-none" />
            <span>Chat on WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={`tel:${SITE_CONFIG.telephone}`}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-blue-800/80 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-800 transition-all"
          >
            <Phone className="h-5 w-5 text-red-400" />
            <span>Call {SITE_CONFIG.telephone}</span>
          </motion.a>

          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
          >
            <Calendar className="h-4 w-4 text-blue-200" />
            <span>Book 15-Min Free Consultation</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
