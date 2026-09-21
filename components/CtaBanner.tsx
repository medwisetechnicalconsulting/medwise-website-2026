'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function CtaBanner() {
  return (
    <section className="relative h-[360px] sm:h-[320px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Medwise Technical Consulting biomedical engineering team"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.65) 55%, rgba(13,17,23,0.2) 100%)'
          }}
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-[72px] w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Headline & Subline */}
        <div className="max-w-xl">
          <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-white leading-tight">
            Ready to equip or service your facility?
          </h2>
          <p className="font-light text-base text-white/75 mt-2 leading-relaxed">
            Independent advisory. Transparent flat-rate pricing. 100% clinical compliance.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="btn-pill-ghost h-12 px-9 font-semibold text-sm"
          >
            <span>Get a Free Quote</span>
          </Link>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="bg-transparent border border-white/50 text-white font-semibold text-sm rounded-full px-8 py-3.5 hover:border-white transition-colors inline-flex items-center justify-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>{SITE_CONFIG.telephone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
