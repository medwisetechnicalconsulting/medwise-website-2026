'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function FinalCtaSection() {
  return (
    <section className="bg-[hsl(var(--primary))] py-20 sm:py-24 px-4 sm:px-8 md:px-[72px] text-white">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.03em] text-white leading-tight">
          Equip your healthcare facility <br />
          with absolute certainty.
        </h2>

        <p className="font-light text-base text-white/75 mt-5 max-w-lg mx-auto leading-relaxed">
          Request an independent technical consultation or medical equipment quotation in under 2 minutes. Transparent pricing with zero brand bias.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link
            href="/contact"
            className="btn-pill-ghost h-12 px-10 font-semibold text-sm w-full sm:w-auto"
          >
            <span>Request a Free Quote</span>
          </Link>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="bg-transparent border border-white/40 hover:border-white text-white font-semibold text-sm rounded-full h-12 px-9 transition-colors inline-flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>{SITE_CONFIG.telephone}</span>
          </a>
        </div>

        {/* Trust Line */}
        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap mt-9 font-light text-sm text-white/60">
          <span>✓ Flat-rate transparent pricing</span>
          <span>✓ Certified metrology calibration</span>
          <span>✓ 10-year support commitment</span>
        </div>

      </div>
    </section>
  );
}
