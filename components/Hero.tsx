import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2, ArrowRight, Award, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-16 lg:py-24">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Independent Medical Equipment Advisory in Kenya</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Buy the Right Medical Equipment.{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                The First Time.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Medwise Technical Consulting is a Kenya-based independent medical engineering firm. We evaluate your facility’s clinical needs and budget to advise, source, install, train, and maintain high-value medical devices—without single-brand bias.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="h-5 w-5 fill-slate-950 stroke-none" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>Call Us Direct</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-emerald-400 py-2 sm:px-3 transition-colors group"
              >
                <span>Book 15-Min Free Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 3 Core Trust Pillars */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Neutral Advice</h3>
                  <p className="text-xs text-slate-400">Comparing options based on clinical need, not sales margins.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Value for Money</h3>
                  <p className="text-xs text-slate-400">Competitive pricing & transparent procurement costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Wrench className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">After-Sales Support</h3>
                  <p className="text-xs text-slate-400">Flawless installation, calibration & maintenance.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual / Engineer Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl border border-slate-800 bg-slate-800/50 p-3 shadow-2xl backdrop-blur-sm overflow-hidden group">
              
              {/* Image Container with explicit aspect ratio */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                {/* Fallback SVG / Placeholder overlay for client-provided real photography */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
                
                {/* Decorative Technical Vector Pattern */}
                <div className="p-8 text-center z-20 space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Wrench className="h-7 w-7" />
                  </div>
                  <span className="block text-xs font-mono text-emerald-400 uppercase tracking-widest">
                    [REAL PHOTOGRAPHY PLACEHOLDER — Client Photo: Biomedical Engineer inspecting equipment room]
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    Qualified Biomedical Engineering Team
                  </h3>
                  <p className="text-xs text-slate-400">
                    Hands-on consultation, installation, and precision calibration across Kenya.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl border border-slate-700/80 bg-slate-900/90 p-3.5 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-bold text-sm">
                    100%
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Biomedical Engineering Qualified</p>
                    <p className="text-[11px] text-slate-400">Every team member brings relevant engineering experience</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
