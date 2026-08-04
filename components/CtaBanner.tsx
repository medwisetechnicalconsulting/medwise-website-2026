import Link from 'next/link';
import { MessageSquare, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 py-14 text-white">
      {/* Decorative Blur Circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="h-4 w-4" />
          <span>Zero Obligation • 100% Technical Guidance</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
          Not Sure What Medical Equipment Your Facility Needs?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Speak directly with our qualified biomedical engineering team before spending money. We review your clinical requirements, budget constraints, and site setup for free.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise,%20I%20would%20like%20to%20book%20a%20free%2015-minute%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300 transition-all"
          >
            <MessageSquare className="h-5 w-5 fill-slate-950 stroke-none" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-800/90 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            <Phone className="h-5 w-5 text-emerald-400" />
            <span>Call Us Now</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
          >
            <Calendar className="h-4 w-4 text-emerald-400" />
            <span>Book 15-Min Free Consultation</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
