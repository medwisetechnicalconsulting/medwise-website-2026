'use client';

import { useState } from 'react';
import {
  MessageSquare,
  Sparkles,
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

  // Get icon for category
  const getCategoryIcon = () => {
    switch (product.category) {
      case 'hematology':
        return <Droplet className="h-4 w-4 text-red-600" />;
      case 'biochemistry':
        return <FlaskConical className="h-4 w-4 text-amber-600" />;
      case 'immunoassay':
        return <Activity className="h-4 w-4 text-purple-600" />;
      case 'microscopes':
        return <Microscope className="h-4 w-4 text-blue-600" />;
      case 'lab-equipment':
        return <Cpu className="h-4 w-4 text-indigo-600" />;
      case 'consumables':
        return <PackageCheck className="h-4 w-4 text-emerald-600" />;
      default:
        return <Sparkles className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <article
      id={product.id}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 scroll-mt-28"
    >
      {/* Top Meta Bar: Subcategory, Brand & Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
            {getCategoryIcon()}
            <span>{product.subcategory}</span>
          </div>

          <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-bold text-slate-700 shadow-2xs">
            {product.brand}
          </span>
        </div>

        {/* Product Visual Area */}
        <div className="relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/40 border border-slate-200/80 p-4">
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xs border border-slate-200 group-hover:border-blue-300 group-hover:shadow-md transition-all">
                {product.category === 'hematology' && (
                  <Droplet className="h-7 w-7 text-red-600" />
                )}
                {product.category === 'biochemistry' && (
                  <FlaskConical className="h-7 w-7 text-amber-600" />
                )}
                {product.category === 'immunoassay' && (
                  <Activity className="h-7 w-7 text-purple-600" />
                )}
                {product.category === 'microscopes' && (
                  <Microscope className="h-7 w-7 text-blue-600" />
                )}
                {product.category === 'lab-equipment' && (
                  <Cpu className="h-7 w-7 text-indigo-600" />
                )}
                {product.category === 'consumables' && (
                  <PackageCheck className="h-7 w-7 text-emerald-600" />
                )}
              </div>
              <span className="mt-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                {product.model}
              </span>
            </div>
          )}

          {/* Badge (if any) */}
          {product.badge && (
            <div className="absolute top-2 left-2 rounded-md bg-blue-700/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
              {product.badge}
            </div>
          )}

          {/* Copy Link Button */}
          <button
            onClick={copyProductLink}
            aria-label={`Copy link for ${product.name}`}
            title="Copy shareable product link"
            className="absolute top-2 right-2 rounded-lg bg-white/90 p-1.5 text-slate-500 shadow-2xs hover:bg-white hover:text-slate-900 transition-colors"
          >
            {copied ? (
              <CheckCheck className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Product Title & Short Description */}
        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>

        {/* Key Highlights / Specs Pill List */}
        <div className="my-3.5 space-y-1.5 border-t border-b border-slate-100 py-3">
          {product.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Section: Specs Drawer Trigger & Pricing + Buy via WhatsApp */}
      <div className="pt-2 space-y-3">
        {/* View Full Specs Trigger */}
        <button
          onClick={() => onOpenSpecs(product)}
          className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-1.5 text-xs font-bold text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800 transition-colors"
        >
          <Info className="h-3.5 w-3.5" />
          <span>View Full Specifications</span>
        </button>

        {/* Price & "Buy via WhatsApp" Button (Directly Next to Each Other) */}
        <div className="flex items-center justify-between gap-2 pt-1">
          {/* Price Container */}
          <div className="shrink-0 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
              Price (KSh)
            </span>
            <span className={`font-black tracking-tight ${product.price ? 'text-base sm:text-lg lg:text-xl text-slate-900' : 'text-xs sm:text-sm text-slate-700'}`}>
              {product.priceFormatted}
            </span>
          </div>

          {/* Buy via WhatsApp Button (Prominent Next to Price) */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy ${product.name} via WhatsApp`}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-3 py-2.5 text-xs font-extrabold text-white shadow-xs hover:shadow-md transition-all hover:scale-102 active:scale-98 shrink-0 min-h-[42px]"
          >
            <MessageSquare className="h-4 w-4 shrink-0 fill-white" />
            <span className="whitespace-nowrap">Buy via WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
