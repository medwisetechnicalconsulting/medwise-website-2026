import Link from 'next/link';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2, ArrowRight, Award, Wrench, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200/80 text-slate-900">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              <span>Independent Medical Equipment Advisory • Kisumu Kakamega Road</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Buy the Right Medical Equipment.{' '}
              <span className="text-blue-700">
                The First Time.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Medwise Technical Consulting is a Kenya-based independent medical engineering firm. We evaluate your facility’s clinical needs and budget to advise, source, install, train, and maintain high-value medical devices—without single-brand bias.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-700/20 hover:bg-blue-800 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="h-5 w-5 fill-white stroke-none" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition-all"
              >
                <Phone className="h-5 w-5 text-red-600" />
                <span>Call {SITE_CONFIG.telephone}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 py-2 sm:px-3 transition-colors group"
              >
                <span>Book 15-Min Free Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 3 Core Trust Pillars */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Neutral Advice</h3>
                  <p className="text-xs text-slate-600">Comparing options based on clinical need, not sales margins.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Value for Money</h3>
                  <p className="text-xs text-slate-600">Competitive pricing & transparent procurement costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Wrench className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">After-Sales Support</h3>
                  <p className="text-xs text-slate-600">Flawless installation, calibration & maintenance.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Light Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200 bg-white p-3 shadow-xl overflow-hidden group">
              
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
                <div className="p-8 text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 border border-blue-200 relative">
                    <Heart className="h-7 w-7 text-red-600 fill-red-600" />
                  </div>
                  <span className="block text-xs font-mono font-bold text-blue-800 uppercase tracking-widest">
                    [MEDWISE KNOWLEDGE AND ACCESS]
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Biomedical Engineering & Technical Support
                  </h3>
                  <p className="text-xs text-slate-500">
                    Kisumu Kakamega Road • Kenya & East Africa
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-white font-bold text-xs shadow-xs">
                    KE
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Official Technical Services Partner</p>
                    <p className="text-[11px] text-slate-600">Kisumu Kakamega Road, Kisumu, Kenya</p>
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
