'use client';

import { useState } from 'react';
import Image from 'next/image';
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

  const getCategoryIcon = () => {
    switch (product.category) {
      case 'hematology':
        return <Droplet className="w-3.5 h-3.5 text-red-600" />;
      case 'biochemistry':
        return <FlaskConical className="w-3.5 h-3.5 text-amber-600" />;
      case 'immunoassay':
        return <Activity className="w-3.5 h-3.5 text-teal-600" />;
      case 'microscopes':
        return <Microscope className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />;
      case 'lab-equipment':
        return <Cpu className="w-3.5 h-3.5 text-slate-700" />;
      case 'consumables':
        return <PackageCheck className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <Activity className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />;
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
      aria-label={`View technical specifications for ${product.name}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-[hsl(var(--border))] bg-white p-5 sm:p-6 shadow-2xs hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200 cursor-pointer scroll-mt-28 outline-hidden"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-[11px] font-semibold text-[hsl(var(--foreground))] border border-[hsl(var(--border))]">
            {getCategoryIcon()}
            <span>{product.subcategory}</span>
          </div>

          <span className="rounded-full border border-[hsl(var(--border))] bg-white px-2.5 py-0.5 text-[11px] font-bold text-[hsl(var(--foreground))] shadow-2xs">
            {product.brand}
          </span>
        </div>

        {/* Product Visual Area */}
        <div className="relative mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-[hsl(var(--muted))] border border-[hsl(var(--border))] p-4">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xs border border-[hsl(var(--border))]">
                {getCategoryIcon()}
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                {product.model}
              </span>
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 chip-label shadow-xs">
              {product.badge}
            </div>
          )}

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={copyProductLink}
            aria-label={`Copy link for ${product.name}`}
            title="Copy shareable link"
            className="absolute top-2.5 right-2.5 rounded-full bg-white/95 p-1.5 text-[hsl(var(--muted-foreground))] shadow-xs hover:text-[hsl(var(--foreground))] transition-colors border border-[hsl(var(--border))] cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center"
          >
            {copied ? (
              <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Product Title & Tagline */}
        <h3 className="font-bold text-base text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1.5 font-light text-xs text-[hsl(var(--muted-foreground))] line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>

        {/* Highlights List */}
        <div className="my-4 space-y-1.5 border-t border-b border-[hsl(var(--border))] py-3">
          {product.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
              <Check className="w-3.5 h-3.5 shrink-0 text-[hsl(var(--success))] mt-0.5 stroke-[2.5]" />
              <span className="line-clamp-1 font-normal">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Section */}
      <div className="pt-2 space-y-2.5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenSpecs(product);
          }}
          className="btn-pill-secondary w-full py-2.5 text-xs font-semibold min-h-[40px]"
        >
          <Info className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
          <span>Technical Specifications</span>
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Buy ${product.name} via WhatsApp`}
          className="btn-pill-primary w-full py-2.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 min-h-[42px]"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>Inquire / Buy via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
