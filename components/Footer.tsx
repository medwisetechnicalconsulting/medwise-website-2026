import Link from 'next/link';
import { Phone, MessageSquare, Mail, MapPin, Activity, ShieldCheck, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Upper Footer: Contact & Navigation */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Description Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md">
                <Activity className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  Medwise<span className="text-emerald-400">.</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Technical Consulting
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Proactive technical support, independent medical equipment advisory, sourcing, installation, training, calibration, and maintenance for healthcare facilities in Kenya.
            </p>

            {/* Mandatory Disclaimer Box */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-300">
              <span className="font-semibold text-emerald-400">Independent Standard Disclaimer:</span>
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
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Medwise
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
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
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Office Location:</span>
                  <p className="text-slate-400">
                    {SITE_CONFIG.address.streetAddress}, {SITE_CONFIG.address.addressLocality}, {SITE_CONFIG.address.addressRegion}, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Phone: </span>
                  <a href={`tel:${SITE_CONFIG.telephone}`} className="hover:text-emerald-400 transition-colors">
                    {SITE_CONFIG.telephone}
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
                    className="hover:text-emerald-400 transition-colors"
                  >
                    +254 700 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Email: </span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-emerald-400 transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Location Integration */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Google Maps Location</h3>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center p-4 text-center">
              {/* Google Map iframe integration placeholder */}
              <iframe
                title="Medwise Technical Consulting Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127638.16335198083!2d36.7028148!3d-1.3963283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0436d6541fcd%3A0x889dfefecdd82069!2sRongai%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
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
              Google Business Profile Location: Langata Rongai, Rift Valley Province, KE
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
