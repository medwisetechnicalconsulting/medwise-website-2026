'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, PhoneCall, Calendar, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Expandable Quick Action Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.94 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-[340px] rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] space-y-3"
          >
            <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[hsl(var(--foreground))]">Medwise Help Desk</h4>
                  <p className="text-[10px] text-emerald-700 font-semibold">● Engineers Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed font-normal">
              Hello! How can our biomedical engineering team assist your healthcare facility today?
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise,%20I%20would%20like%20to%20request%20an%20equipment%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-[hsl(var(--muted))] p-2.5 text-xs font-semibold text-[hsl(var(--foreground))] border border-[hsl(var(--border))] hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-emerald-600" />
                  <span>Request Equipment Quote</span>
                </span>
                <span className="text-[10px] text-[hsl(var(--muted-foreground))] font-mono">&rarr;</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=URGENT%3A%20Biomedical%20Technical%20Support%20Required`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-[hsl(var(--muted))] p-2.5 text-xs font-semibold text-[hsl(var(--foreground))] border border-[hsl(var(--border))] hover:bg-red-50 hover:border-red-300 hover:text-red-900 transition-all"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-red-600" />
                  <span>Emergency Repair Dispatch</span>
                </span>
                <span className="text-[10px] text-[hsl(var(--muted-foreground))] font-mono">&rarr;</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise,%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-[hsl(var(--muted))] p-2.5 text-xs font-semibold text-[hsl(var(--foreground))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary-light))] hover:border-blue-300 hover:text-[hsl(var(--primary))] transition-all"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[hsl(var(--primary))]" />
                  <span>Book Consultation</span>
                </span>
                <span className="text-[10px] text-[hsl(var(--muted-foreground))] font-mono">&rarr;</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(5,150,105,0.3)] hover:bg-emerald-700 transition-colors cursor-pointer border border-emerald-500"
        aria-label="Chat with Medwise Biomedical Engineer on WhatsApp"
      >
        <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="hidden sm:inline">Need Help? Chat with Us</span>
        <span className="sm:hidden">Chat</span>
      </motion.button>

    </div>
  );
}
