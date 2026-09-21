'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[hsl(var(--border))] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20consult%20an%20engineer.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs py-2.5 px-3 transition-colors min-h-[42px]"
        >
          <MessageSquare className="w-4 h-4 fill-white shrink-0" />
          <span>WhatsApp Engineer</span>
        </a>

        <a
          href={`tel:${SITE_CONFIG.telephone}`}
          aria-label={`Call Medwise at ${SITE_CONFIG.telephone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(224,76%,40%)] text-white font-semibold text-xs py-2.5 px-3 transition-colors min-h-[42px]"
        >
          <Phone className="w-4 h-4 text-white shrink-0" />
          <span>Call {SITE_CONFIG.telephone}</span>
        </a>
      </div>
    </div>
  );
}
