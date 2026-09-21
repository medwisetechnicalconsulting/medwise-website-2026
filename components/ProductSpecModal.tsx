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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90dvh] sm:max-h-[92vh] flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl border border-border text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="shrink-0 flex items-center justify-between border-b border-border bg-white px-5 sm:px-7 py-4 sm:py-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center rounded-full bg-primary-light px-3 py-0.5 text-xs font-bold text-primary tracking-wide">
                {product.brand}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {product.subcategory}
              </span>
            </div>
            <h2 id="spec-modal-title" className="text-base sm:text-xl font-extrabold text-foreground">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close specifications modal"
            className="rounded-full p-2 text-slate-400 hover:bg-muted hover:text-foreground transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-5 sm:px-7 py-5 sm:py-6 space-y-6 text-xs sm:text-sm">
          {/* Tagline, Description & Product Visual */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 rounded-2xl bg-muted/60 border border-border p-4 sm:p-5">
            {product.image && (
              <div className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white border border-border p-2.5 flex items-center justify-center shadow-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <p className="font-bold text-foreground text-sm sm:text-base mb-1.5">
                {product.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-primary-light/50 border border-primary/20 p-5">
            <div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                Procurement &amp; Engineering Inquiry
              </span>
              <div className="text-base sm:text-lg font-extrabold text-foreground mt-0.5">
                Brand-Neutral Equipment Sourcing
              </div>
              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                1-Year Warranty &amp; Certified Calibration Included
              </span>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors w-full sm:w-auto min-h-[44px]"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Buy via WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${SITE_CONFIG.telephone}`}
                  className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-full border border-border bg-white hover:bg-muted px-4 py-3 text-xs font-bold text-foreground transition-colors min-h-[44px]"
                >
                  <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span>Call Engineer</span>
                </a>

                <button
                  onClick={copyProductLink}
                  title="Copy direct product link"
                  className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-full border border-border bg-white px-4 py-3 text-xs font-semibold text-slate-700 hover:text-foreground hover:bg-muted transition-colors min-h-[44px]"
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
              <Award className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Full Technical &amp; Engineering Specifications
              </h3>
            </div>

            <div className="table-scroll-wrapper overflow-x-auto rounded-2xl border border-border shadow-xs">
              <table className="w-full min-w-[420px] text-left text-xs sm:text-sm border-collapse">
                <tbody className="divide-y divide-border">
                  {product.specs.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-muted/40'}
                    >
                      <td className="py-3 px-4 sm:px-5 font-bold text-foreground border-r border-border align-top text-xs sm:text-sm min-w-[150px] whitespace-normal">
                        {item.label}
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-slate-600 leading-relaxed text-xs sm:text-sm min-w-[250px] whitespace-normal">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Medwise Technical Advisory Value-Add */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-4">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-foreground block text-sm">Warranty &amp; Calibration:</span>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  {product.warranty || '1 Year Comprehensive Warranty + Metrological Calibration by Medwise engineers.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-4">
              <Truck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-foreground block text-sm">Kenya Nationwide Dispatch:</span>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  {product.delivery || 'Dispatched safely from Kisumu HQ and Nairobi Hub to clinics nationwide.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="shrink-0 flex items-center justify-between border-t border-border bg-muted/40 px-5 sm:px-7 py-3.5 text-xs text-slate-500">
          <span className="truncate">Medwise Sourcing • Model: {product.model}</span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 shrink-0 ml-2"
          >
            <span>WhatsApp Sourcing Team</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
