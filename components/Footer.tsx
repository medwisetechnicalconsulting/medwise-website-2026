import Link from 'next/link';
import { Phone, MessageSquare, Mail, MapPin, Heart, Activity } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Upper Footer: Contact & Navigation */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Description Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shadow-md relative">
                <Heart className="h-5 w-5 text-red-500 fill-red-500 stroke-white stroke-2" />
                <Activity className="h-3.5 w-3.5 text-white absolute inset-0 m-auto stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-tight">
                  MEDWISE<span className="text-red-500">.</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Knowledge and Access
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Proactive technical support, independent medical equipment advisory, sourcing, installation, training, calibration, and maintenance for healthcare facilities in Kenya.
            </p>

            {/* Mandatory Disclaimer Box */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-xs text-slate-300">
              <span className="font-semibold text-blue-400">Independent Standard Disclaimer:</span>
              <p className="text-[11px] text-slate-400 mt-1">
                Medwise offers equipment supply but maintains independent consulting standards to ensure objective advice tailored to your budget and clinical needs.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Medwise
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (NAP) Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contact & NAP</h3>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Physical Address:</span>
                  <p className="text-slate-400">
                    {SITE_CONFIG.address.streetAddress}, {SITE_CONFIG.address.addressLocality}, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Phones: </span>
                  <a href={`tel:${SITE_CONFIG.telephone}`} className="hover:text-blue-400 transition-colors font-mono">
                    {SITE_CONFIG.telephone}
                  </a> / <a href={`tel:${SITE_CONFIG.altTelephone}`} className="hover:text-blue-400 transition-colors font-mono">
                    {SITE_CONFIG.altTelephone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">WhatsApp: </span>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors font-mono"
                  >
                    +254 117 233 522
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Email: </span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-blue-400 transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Location Integration */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Kisumu Office Location</h3>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center p-4 text-center">
              <iframe
                title="Medwise Technical Consulting Location Map - Kisumu Kakamega Road"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817342!2d34.768!3d-0.0917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4c575cf26d9%3A0xb35a0f624d77b587!2sKisumu%20Kakamega%20Rd%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-[10px] text-slate-500 text-center">
              Kisumu Kakamega Road, Kisumu, Kenya
            </p>
          </div>

        </div>

        {/* Lower Footer: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Medwise Technical Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Services
            </Link>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">
              Insights
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
