'use client';

import { useState } from 'react';
import {
  MessageSquare,
  Info,
  Check,
  Droplet,
  FlaskConical,
  Activity,
  Microscope,
  Cpu,
  PackageCheck,
  Copy,
  CheckCheck,
  Tag,
} from 'lucide-react';
import { Product, getProductWhatsAppUrl } from '@/lib/products';
import { SITE_CONFIG } from '@/lib/seo/schema';

interface ProductCardProps {
  product: Product;
  onOpenSpecs: (product: Product) => void;
}

export default function ProductCard({ product, onOpenSpecs }: ProductCardProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const waUrl = getProductWhatsAppUrl(product, { customBaseUrl: currentUrl });
  const shareableUrl = `${currentUrl || SITE_CONFIG.url}/products#${product.id}`;

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

  // SVG Repo style category icons
  const getCategoryIcon = () => {
    switch (product.category) {
      case 'hematology':
        return <Droplet className="h-3.5 w-3.5 text-[#DC2626]" />;
      case 'biochemistry':
        return <FlaskConical className="h-3.5 w-3.5 text-amber-600" />;
      case 'immunoassay':
        return <Activity className="h-3.5 w-3.5 text-teal-600" />;
      case 'microscopes':
        return <Microscope className="h-3.5 w-3.5 text-[#0F2942]" />;
      case 'lab-equipment':
        return <Cpu className="h-3.5 w-3.5 text-slate-700" />;
      case 'consumables':
        return <PackageCheck className="h-3.5 w-3.5 text-emerald-600" />;
      default:
        return <Activity className="h-3.5 w-3.5 text-[#0F2942]" />;
    }
  };

  // Extract key technical specs (throughput, sample volume, etc.) for quick comparison
  const quickSpecs = product.specs
    .filter((s) => /throughput|sample volume|parameters|speed/i.test(s.label))
    .slice(0, 2);

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
      aria-label={`View technical specifications for ${product.name}`}
      className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs hover:border-[#0F2942] hover:shadow-md transition-all cursor-pointer scroll-mt-28 outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F2942]"
    >
      <div>
        {/* Top Meta Bar: Subcategory & Brand Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 rounded bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 border border-slate-200">
            {getCategoryIcon()}
            <span>{product.subcategory}</span>
          </div>

          <span className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-extrabold text-slate-800 shadow-2xs">
            {product.brand}
          </span>
        </div>

        {/* Product Visual Area with Reticle Optical Frame Viewfinder */}
        <div className="relative mb-3 flex h-44 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F8FAFC] border border-slate-200 p-3 reticle-frame">
          {product.image && !imgError ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-xs border border-slate-200">
                {product.category === 'hematology' && (
                  <Droplet className="h-6 w-6 text-[#DC2626]" />
                )}
                {product.category === 'biochemistry' && (
                  <FlaskConical className="h-6 w-6 text-amber-600" />
                )}
                {product.category === 'immunoassay' && (
                  <Activity className="h-6 w-6 text-teal-600" />
                )}
                {product.category === 'microscopes' && (
                  <Microscope className="h-6 w-6 text-[#0F2942]" />
                )}
                {product.category === 'lab-equipment' && (
                  <Cpu className="h-6 w-6 text-slate-700" />
                )}
                {product.category === 'consumables' && (
                  <PackageCheck className="h-6 w-6 text-emerald-600" />
                )}
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {product.model}
              </span>
            </div>
          )}

          {/* Badge (if any) */}
          {product.badge && (
            <div className="absolute top-2 left-2 rounded bg-[#0F2942] px-2 py-0.5 text-[10px] font-bold text-white shadow-xs border border-[#1E3A5F]">
              {product.badge}
            </div>
          )}

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={copyProductLink}
            aria-label={`Copy link for ${product.name}`}
            title="Copy shareable product link"
            className="absolute top-2 right-2 rounded bg-white p-1.5 text-slate-400 shadow-xs hover:text-slate-900 transition-colors border border-slate-200 cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center"
          >
            {copied ? (
              <CheckCheck className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Pricing & Availability Ribbon */}
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <Tag className="h-3 w-3 text-emerald-600" />
            <span className="text-xs font-extrabold text-slate-900 tabular-data">
              {product.priceFormatted}
            </span>
          </div>
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            Model: {product.model}
          </span>
        </div>

        {/* Product Title & Tagline */}
        <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
          {product.tagline}
        </p>

        {/* Quick Specs Micro Strip (if available) */}
        {quickSpecs.length > 0 && (
          <div className="mt-2.5 grid grid-cols-2 gap-1.5 p-2 rounded-md bg-slate-50 border border-slate-200 text-[11px]">
            {quickSpecs.map((spec, sIdx) => (
              <div key={sIdx} className="min-w-0">
                <span className="block text-[10px] uppercase font-bold text-slate-600 truncate">
                  {spec.label}
                </span>
                <span className="font-semibold text-slate-800 tabular-data truncate block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Key Highlights / Specs List */}
        <div className="my-3 space-y-1.5 border-t border-slate-100 pt-2.5">
          {product.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5 stroke-[2.5]" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Section: Specs Trigger & Buy via WhatsApp (44px min tap targets) */}
      <div className="pt-2 space-y-2">
        {/* View Full Specs Trigger with tactile feedback */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenSpecs(product);
          }}
          className="med-btn-tactile med-btn-tactile-secondary w-full text-xs"
        >
          <Info className="h-3.5 w-3.5 text-[#0F2942]" />
          <span>View Technical Specifications</span>
        </button>

        {/* Buy via WhatsApp Button with tactile feedback */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Buy ${product.name} via WhatsApp`}
          className="med-btn-tactile med-btn-tactile-emerald w-full text-xs sm:text-sm"
        >
          <MessageSquare className="h-4 w-4 shrink-0 fill-white" />
          <span className="whitespace-nowrap">Inquire / Buy via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
