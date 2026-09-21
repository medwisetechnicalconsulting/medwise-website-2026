'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--foreground))] text-white py-16 px-4 sm:px-8 md:px-[72px] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl text-white tracking-[-0.02em]">
                MEDWISE<span className="text-[hsl(var(--primary))]">.</span>
              </span>
            </div>
            <p className="font-light text-xs text-white/40 tracking-[0.12em] uppercase mt-1">
              Biomedical Engineering Specialists
            </p>
            <p className="font-light text-xs text-white/40 mt-1">
              Kisumu HQ &amp; Nairobi Field Hub &middot; Kenya
            </p>

            <div className="mt-5 space-y-1.5">
              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="font-semibold text-sm text-white hover:text-[hsl(var(--primary-light))] transition-colors block"
              >
                {SITE_CONFIG.telephone}
              </a>
              <a
                href={`tel:${SITE_CONFIG.altTelephone}`}
                className="font-normal text-xs text-white/60 hover:text-white transition-colors block"
              >
                Alt: {SITE_CONFIG.altTelephone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-normal text-xs text-white/50 hover:text-white transition-colors block break-all pt-1"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <span className="font-semibold text-[0.62rem] tracking-[0.2em] uppercase text-white/30 block mb-5">
              SERVICES
            </span>
            <ul className="space-y-3 font-normal text-sm text-white/55">
              <li>
                <Link href="/services#consulting" className="hover:text-white transition-colors">
                  Pre-Purchase Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#sourcing" className="hover:text-white transition-colors">
                  Equipment Sourcing &amp; Supply
                </Link>
              </li>
              <li>
                <Link href="/services#installation" className="hover:text-white transition-colors">
                  Installation &amp; Calibration
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="hover:text-white transition-colors">
                  Staff Operational Training
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-white transition-colors">
                  Preventive Maintenance &amp; SLA
                </Link>
              </li>
              <li>
                <Link href="/services#emergency" className="hover:text-white transition-colors">
                  24/7 Breakdown &amp; PCB Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Company & Catalog */}
          <div>
            <span className="font-semibold text-[0.62rem] tracking-[0.2em] uppercase text-white/30 block mb-5">
              EQUIPMENT &amp; COMPANY
            </span>
            <ul className="space-y-3 font-normal text-sm text-white/55">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Diagnostic Machinery Catalog
                </Link>
              </li>
              <li>
                <Link href="/products/consumables" className="hover:text-white transition-colors">
                  Consumables &amp; Reagents (38+)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Medwise
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">
                  Fieldwork Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Field Hubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Hours & Emergency */}
          <div>
            <span className="font-semibold text-[0.62rem] tracking-[0.2em] uppercase text-white/30 block mb-5">
              HOURS &amp; DISPATCH
            </span>
            <div className="space-y-1.5 font-normal text-sm text-white/55">
              <p>Mon&ndash;Fri: 8:00am &ndash; 5:00pm</p>
              <p>Saturday: 9:00am &ndash; 1:00pm</p>
              <p className="text-white/40 text-xs">Sunday: Emergency Dispatch Only</p>
              <p className="text-white/80 font-medium text-xs pt-2">
                24/7 Emergency: {SITE_CONFIG.telephone}
              </p>
            </div>

            {/* Social Channels Row */}
            <div className="flex items-center gap-4 mt-6 text-white/40">
              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 1.733 6.338 6.338 0 0 0 8.86 8.986V9.664a8.212 8.212 0 0 0 5.769 2.26V8.479a4.814 4.814 0 0 1-2.756-1.793z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4 font-light text-xs text-white/35">
          <p>&copy; {new Date().getFullYear()} Medwise Technical Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-white/70 transition-colors">
              Services
            </Link>
            <Link href="/products" className="hover:text-white/70 transition-colors">
              Equipment
            </Link>
            <Link href="/about" className="hover:text-white/70 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="hover:text-white/70 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
