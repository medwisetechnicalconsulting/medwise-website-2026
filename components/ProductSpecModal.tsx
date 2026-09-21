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
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/75 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90dvh] sm:max-h-[92vh] flex flex-col overflow-hidden rounded-xl bg-white shadow-2xl border border-slate-300 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="shrink-0 flex items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 py-3.5 sm:py-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {product.subcategory}
              </span>
            </div>
            <h2 id="spec-modal-title" className="mt-1 text-base sm:text-lg lg:text-xl font-extrabold text-slate-900">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close specifications modal"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-5 sm:space-y-6 text-xs sm:text-sm">
          {/* Tagline, Description & Product Visual */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-xl bg-[#F8FAFC] border border-slate-200 p-3.5 sm:p-4">
            {product.image && (
              <div className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-lg bg-white border border-slate-200 p-2 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <p className="font-bold text-[#0F2942] mb-1">
                {product.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Action Bar (Tactile Uiverse Style) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-slate-50 border border-slate-300 p-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Procurement &amp; Inquiries
              </span>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                Brand-Neutral Equipment Sourcing
              </div>
              <span className="text-[11px] text-emerald-800 font-bold">
                • 1-Year Warranty &amp; Certified Calibration Included
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors w-full sm:w-auto min-h-[44px]"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Buy via WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${SITE_CONFIG.telephone}`}
                  className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-3 py-2 text-xs font-bold text-slate-800 transition-colors min-h-[44px]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#DC2626] shrink-0" />
                  <span>Call Engineer</span>
                </a>

                <button
                  onClick={copyProductLink}
                  title="Copy direct product link"
                  className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors min-h-[44px]"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
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
          </div>

          {/* Full Technical Specifications Table */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-4 w-4 text-[#0F2942]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Full Technical &amp; Engineering Specifications
              </h3>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-200">
                  {product.specs.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    >
                      <td className="w-1/3 py-2.5 sm:py-3 px-3 sm:px-4 font-bold text-slate-900 border-r border-slate-200 align-top text-xs sm:text-sm break-words">
                        {item.label}
                      </td>
                      <td className="w-2/3 py-2.5 sm:py-3 px-3 sm:px-4 text-slate-700 leading-relaxed text-xs sm:text-sm break-words">
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
            <div className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-[#F8FAFC] p-3 sm:p-3.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Warranty &amp; Calibration:</span>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  {product.warranty || '1 Year Comprehensive Warranty + Metrological Calibration by Medwise engineers.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-[#F8FAFC] p-3 sm:p-3.5">
              <Truck className="h-4 w-4 text-[#0F2942] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Kenya Nationwide Dispatch:</span>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  {product.delivery || 'Dispatched safely from Kisumu HQ and Nairobi Hub to clinics nationwide.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="shrink-0 flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 sm:px-6 py-3 text-xs text-slate-500">
          <span className="truncate">Medwise Sourcing • Model: {product.model}</span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0 ml-2"
          >
            <span>WhatsApp Inquiry</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
