'use client';

import { useEffect, useState } from 'react';
import {
  X,
  MessageSquare,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  Check,
  Stethoscope,
  Baby,
  HeartPulse,
  Activity,
  Layers,
  Copy,
  CheckCheck,
} from 'lucide-react';
import { OtherDepartmentProduct, getOtherProductWhatsAppUrl } from '@/lib/otherProducts';
import { SITE_CONFIG } from '@/lib/seo/schema';

interface OtherProductSpecModalProps {
  product: OtherDepartmentProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OtherProductSpecModal({
  product,
  isOpen,
  onClose,
}: OtherProductSpecModalProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const waUrl = getOtherProductWhatsAppUrl(product, { customBaseUrl: currentUrl });
  const shareableUrl = `${currentUrl || SITE_CONFIG.url}/products/others#${product.id}`;

  const copyProductLink = async () => {
    try {
      await navigator.clipboard.writeText(shareableUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const getDepartmentIcon = () => {
    switch (product.category) {
      case 'dental':
        return <Activity className="w-4 h-4 text-blue-600" />;
      case 'theatre':
        return <Stethoscope className="w-4 h-4 text-indigo-600" />;
      case 'maternity':
        return <Baby className="w-4 h-4 text-pink-600" />;
      case 'icu':
        return <HeartPulse className="w-4 h-4 text-red-600" />;
      default:
        return <Activity className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="other-product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-border flex flex-col animate-in zoom-in-95 duration-200 text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border px-5 sm:px-7 py-4 sm:py-5 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
              {getDepartmentIcon()}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                {product.department} Department Suite
              </span>
              <h2
                id="other-product-modal-title"
                className="text-base sm:text-xl font-extrabold text-foreground leading-tight"
              >
                {product.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-2 text-slate-400 hover:bg-muted hover:text-foreground transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-grow">
          {/* Top Banner: Image & Quick Overview */}
          <div className="flex flex-col md:flex-row gap-6 items-center rounded-2xl bg-muted/50 border border-border p-5">
            <div className="relative aspect-[4/3] w-full md:w-72 rounded-2xl overflow-hidden border border-border bg-white flex items-center justify-center shrink-0">
              {product.image && !imgError ? (
                <img
                  src={product.image}
                  alt={product.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary border border-border">
                    {getDepartmentIcon()}
                  </div>
                  <span className="mt-2.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    {product.department} Suite
                  </span>
                  <span className="mt-0.5 text-[10px] text-slate-400 font-medium">
                    Facility Photography
                  </span>
                </div>
              )}
              {product.badge && (
                <div className="absolute top-2.5 left-2.5 chip-label bg-white/95 backdrop-blur-xs font-bold text-[10px] shadow-xs">
                  {product.badge}
                </div>
              )}
            </div>

            <div className="space-y-3 flex-grow">
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground">
                {product.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Service Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                <div className="flex items-center gap-2 text-slate-700 bg-white p-2.5 rounded-xl border border-border">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{product.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 bg-white p-2.5 rounded-xl border border-border">
                  <Truck className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium">{product.deliveryTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Equipment Constituents Breakdown */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <h4 className="text-sm sm:text-base font-bold text-foreground">
                  Complete Equipment Constituents ({product.constituents.length} Items)
                </h4>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Turnkey Department Setup
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 rounded-2xl bg-white border border-border p-4 sm:p-5 shadow-xs">
              {product.constituents.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-700 p-2 rounded-xl hover:bg-muted/60 transition-colors"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              Technical Specifications &amp; Engineering Standards
            </h4>
            <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <tbody>
                  {product.keySpecs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-muted/30'}
                    >
                      <td className="py-3 px-4 font-bold text-slate-700 border-b border-border/60 w-1/3">
                        {spec.label}
                      </td>
                      <td className="py-3 px-4 text-slate-600 font-normal border-b border-border/60">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Need a formal Bill of Quantities (BOQ) or customized configuration for your hospital?
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary h-11 px-6 text-xs font-bold inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Request Quotation on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={copyProductLink}
                aria-label="Copy suite link"
                title="Copy shareable link"
                className="btn-pill-secondary h-11 px-4 text-xs font-semibold inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-4 h-4 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
