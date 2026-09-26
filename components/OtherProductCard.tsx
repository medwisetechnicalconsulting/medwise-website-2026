'use client';

import { useState } from 'react';
import {
  MessageSquare,
  Info,
  Check,
  Activity,
  Copy,
  CheckCheck,
  Stethoscope,
  Baby,
  HeartPulse,
} from 'lucide-react';
import { OtherDepartmentProduct, getOtherProductWhatsAppUrl } from '@/lib/otherProducts';
import { SITE_CONFIG } from '@/lib/seo/schema';

interface OtherProductCardProps {
  product: OtherDepartmentProduct;
  onOpenSpecs: (product: OtherDepartmentProduct) => void;
}

export default function OtherProductCard({ product, onOpenSpecs }: OtherProductCardProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const waUrl = getOtherProductWhatsAppUrl(product, { customBaseUrl: currentUrl });
  const shareableUrl = `${currentUrl || SITE_CONFIG.url}/products/others#${product.id}`;

  const copyProductLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <article
      id={product.id}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('a') || target.closest('button')) return;
        onOpenSpecs(product);
      }}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
          e.preventDefault();
          onOpenSpecs(product);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View technical specifications and equipment list for ${product.name}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-xs hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer scroll-mt-28 outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
            {getDepartmentIcon()}
            <span>{product.department}</span>
          </div>

          <span className="rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-medium text-slate-500">
            {product.constituents.length} Listed Items
          </span>
        </div>

        {/* Product Visual Area */}
        <div className="relative mb-4 flex h-48 sm:h-52 w-full items-center justify-center overflow-hidden rounded-2xl bg-white border border-border p-3">
          {product.image && !imgError ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xs border border-border">
                {getDepartmentIcon()}
              </div>
              <span className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                {product.department} Department
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                Hospital Suite
              </span>
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 chip-label shadow-xs bg-white/95 backdrop-blur-xs font-bold text-[10px]">
              {product.badge}
            </div>
          )}

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={copyProductLink}
            aria-label={`Copy link for ${product.name}`}
            title="Copy shareable link"
            className="absolute top-2.5 right-2.5 rounded-full bg-white/95 p-1.5 text-slate-500 shadow-xs hover:text-foreground transition-colors border border-border cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center"
          >
            {copied ? (
              <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Product Title & Tagline */}
        <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="mt-1.5 font-normal text-xs text-slate-600 leading-relaxed line-clamp-2">
          {product.tagline}
        </p>

        {/* Equipment Constituents Header & Highlights */}
        <div className="my-4 space-y-2 border-t border-b border-border py-3.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center justify-between">
            <span>Primary Equipment Constituents:</span>
            <span className="text-[10px] font-semibold text-slate-500">
              {product.constituents.length} Items
            </span>
          </div>

          <div className="space-y-1.5">
            {product.constituents.slice(0, 5).map((constituent, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 shrink-0 text-emerald-600 mt-0.5 stroke-[2.5]" />
                <span className="line-clamp-1 font-normal">{constituent}</span>
              </div>
            ))}
          </div>

          {product.constituents.length > 5 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenSpecs(product);
              }}
              className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 pt-1 cursor-pointer"
            >
              <span>+ {product.constituents.length - 5} more constituents (view all) &rarr;</span>
            </button>
          )}
        </div>
      </div>

      {/* Action Section */}
      <div className="pt-2">
        <div className="flex flex-col gap-2">
          {/* WhatsApp Direct Inquiry Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-pill-primary w-full h-11 text-xs font-semibold justify-center gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>Inquire / Quote via WhatsApp</span>
          </a>

          {/* View Constituents & Full Specs Button */}
          <button
            type="button"
            onClick={() => onOpenSpecs(product)}
            className="btn-pill-secondary w-full h-10 text-xs font-semibold justify-center gap-1.5 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-slate-500" />
            <span>View All Constituents &amp; Specs</span>
          </button>
        </div>
      </div>
    </article>
  );
}
