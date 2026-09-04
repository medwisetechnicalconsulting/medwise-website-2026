'use client';

import { useEffect, useState } from 'react';
import { X, MessageSquare, Phone, ShieldCheck, Truck, Copy, CheckCheck, Award, ExternalLink } from 'lucide-react';
import { Product, getProductWhatsAppUrl } from '@/lib/products';
import { SITE_CONFIG } from '@/lib/seo/schema';

interface ProductSpecModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductSpecModal({ product, onClose }: ProductSpecModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const waUrl = getProductWhatsAppUrl(product, { customBaseUrl: currentUrl });
  const shareableUrl = `${currentUrl || SITE_CONFIG.url}/products#${product.id}`;

  const copyProductLink = async () => {
    try {
      await navigator.clipboard.writeText(shareableUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-slate-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800 uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {product.subcategory}
              </span>
            </div>
            <h2 id="spec-modal-title" className="mt-1 text-lg sm:text-xl font-extrabold text-slate-900">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close specifications modal"
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 space-y-6 text-sm">
          {/* Tagline & Description */}
          <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
            <p className="font-semibold text-blue-900 mb-1">
              {product.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing & Direct WhatsApp Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-blue-50/60 border border-blue-200 p-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Official Kenyan Pricing
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                {product.priceFormatted}
              </div>
              {product.price && (
                <span className="text-[11px] text-emerald-700 font-medium">
                  • Brand-Neutral Sourcing Price
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-all hover:scale-102"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Buy via WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-blue-700" />
                <span>Call Engineer</span>
              </a>

              <button
                onClick={copyProductLink}
                title="Copy direct product link"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-4 w-4 text-blue-700" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Full Technical & Engineering Specifications
              </h3>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-200">
                  {product.specs.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}
                    >
                      <td className="w-1/3 py-3 px-4 font-bold text-slate-900 border-r border-slate-200 align-top">
                        {item.label}
                      </td>
                      <td className="w-2/3 py-3 px-4 text-slate-700 leading-relaxed">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Medwise Technical Advisory Value-Add */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Warranty & Calibration:</span>
                <p className="text-slate-600 mt-0.5">
                  {product.warranty || '1 Year Comprehensive Warranty + Metrological Calibration by Medwise engineers.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5">
              <Truck className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Kenya Nationwide Dispatch:</span>
                <p className="text-slate-600 mt-0.5">
                  {product.delivery || 'Dispatched safely from Kisumu HQ and Nairobi Hub to clinics nationwide.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3.5 text-xs text-slate-500">
          <span>Official Medwise Technical Sourcing • Model: {product.model}</span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>Direct WhatsApp Inquiry</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
