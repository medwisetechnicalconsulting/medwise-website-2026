'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-300 px-3 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20consult%20an%20engineer.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Medwise Engineer on WhatsApp"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs py-3 px-2 shadow-xs transition-colors min-h-[44px]"
        >
          <MessageSquare className="h-4 w-4 fill-white shrink-0" />
          <span>WhatsApp Engineer</span>
        </a>

        <a
          href={`tel:${SITE_CONFIG.telephone}`}
          aria-label={`Call Medwise Technical Consulting at ${SITE_CONFIG.telephone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2942] hover:bg-[#1E3A5F] active:bg-[#0A1B2D] text-white font-bold text-xs py-3 px-2 border border-[#0F2942] shadow-xs transition-colors min-h-[44px]"
        >
          <Phone className="h-4 w-4 text-red-500 shrink-0" />
          <span>Call Kisumu HQ</span>
        </a>
      </div>
    </div>
  );
}
