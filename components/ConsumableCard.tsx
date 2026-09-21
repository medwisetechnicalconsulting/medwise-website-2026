'use client';

import { useState, useEffect } from 'react';
import {
  MessageSquare,
  Check,
  Copy,
  CheckCheck,
  Package,
  Activity,
  Droplet,
  Microscope,
  FlaskConical,
  PackageCheck,
  Thermometer,
  ChevronDown,
  ChevronUp,
  FileText,
} from 'lucide-react';
import { ConsumableItem, getConsumableWhatsAppUrl } from '@/lib/consumables';
import { SITE_CONFIG } from '@/lib/seo/schema';

interface ConsumableCardProps {
  item: ConsumableItem;
  initialExpanded?: boolean;
}

export default function ConsumableCard({ item, initialExpanded = false }: ConsumableCardProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Auto-expand if targeted by URL anchor hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === `#${item.id}`) {
      setIsExpanded(true);
    }
  }, [item.id]);

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const waUrl = getConsumableWhatsAppUrl(item, { customBaseUrl: currentUrl });
  const shareableUrl = `${currentUrl || SITE_CONFIG.url}/products/consumables#${item.id}`;

  const copyLink = async (e: React.MouseEvent) => {
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

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    setIsExpanded((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      e.preventDefault();
      setIsExpanded((prev) => !prev);
    }
  };

  const getCategoryIcon = () => {
    switch (item.category) {
      case 'diagnostic-kits':
        return <Activity className="h-4 w-4 text-purple-700 shrink-0" />;
      case 'collection-phlebotomy':
        return <Droplet className="h-4 w-4 text-[#DC2626] shrink-0" />;
      case 'microscopy-staining':
        return <Microscope className="h-4 w-4 text-[#0F2942] shrink-0" />;
      case 'plasticware-general':
        return <FlaskConical className="h-4 w-4 text-amber-700 shrink-0" />;
      case 'safety-waste':
        return <PackageCheck className="h-4 w-4 text-emerald-700 shrink-0" />;
      default:
        return <Package className="h-4 w-4 text-slate-700 shrink-0" />;
    }
  };

  const displayedHighlights = isExpanded ? item.highlights : item.highlights.slice(0, 3);

  return (
    <article
      id={item.id}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${item.name} card, click to ${isExpanded ? 'collapse' : 'expand'} full details`}
      className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-5 sm:p-6 shadow-xs transition-all duration-200 cursor-pointer scroll-mt-28 outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
        isExpanded
          ? 'border-primary ring-1 ring-primary shadow-md bg-white'
          : 'border-border hover:border-primary/40 hover:shadow-md'
      }`}
    >
      <div>
        {/* Top Meta Bar: Subcategory Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
            {getCategoryIcon()}
            <span>{item.subcategory}</span>
          </div>

          <span className="rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-medium text-slate-500">
            Clinical Lab
          </span>
        </div>

        {/* Consumable Visual Area */}
        <div className="relative mb-5 flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-muted/40 border border-border p-3">
          {item.image && !imgError ? (
            <img
              src={item.image}
              alt={item.name}
              onError={() => setImgError(true)}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xs border border-border">
                {item.category === 'diagnostic-kits' && (
                  <Activity className="h-6 w-6 text-purple-700" />
                )}
                {item.category === 'collection-phlebotomy' && (
                  <Droplet className="h-6 w-6 text-accent" />
                )}
                {item.category === 'microscopy-staining' && (
                  <Microscope className="h-6 w-6 text-primary" />
                )}
                {item.category === 'plasticware-general' && (
                  <FlaskConical className="h-6 w-6 text-amber-700" />
                )}
                {item.category === 'safety-waste' && (
                  <PackageCheck className="h-6 w-6 text-emerald-700" />
                )}
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {item.subcategory}
              </span>
            </div>
          )}

          {/* Badge (if any) */}
          {item.badge && (
            <div className="absolute top-2.5 left-2.5 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
              {item.badge}
            </div>
          )}

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={copyLink}
            aria-label={`Copy link for ${item.name}`}
            title="Copy shareable link"
            className="absolute top-2.5 right-2.5 rounded-full bg-white p-1.5 text-slate-400 shadow-xs hover:text-foreground transition-colors border border-border cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center"
          >
            {copied ? (
              <CheckCheck className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Item Title */}
        <h3 className="text-base font-bold text-foreground leading-snug">
          {item.name}
        </h3>

        {/* Packaging Format Banner */}
        <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-muted/60 px-3.5 py-2 text-xs font-medium text-slate-700 border border-border">
          <Package className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className={isExpanded ? 'break-words' : 'truncate'}>
            Packaging: <strong className="text-foreground font-bold">{item.packaging}</strong>
          </span>
        </div>

        {/* Clinical Description */}
        <p
          className={`mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal transition-all ${
            isExpanded ? 'text-foreground' : 'line-clamp-3'
          }`}
        >
          {item.description}
        </p>

        {/* Storage Instruction (if applicable) */}
        {item.storage && (
          <div className="mt-3 flex items-center gap-2 text-xs font-medium text-amber-900 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            <Thermometer className="h-3.5 w-3.5 text-amber-700 shrink-0" />
            <span className={isExpanded ? 'break-words' : 'truncate'}>{item.storage}</span>
          </div>
        )}

        {/* Key Technical Highlights */}
        <div className="my-4 space-y-2 border-t border-b border-border py-3.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            <span>Key Highlights</span>
            <span className="text-[10px] text-slate-400 font-mono">
              {isExpanded ? `All ${item.highlights.length}` : `3 of ${item.highlights.length}`}
            </span>
          </div>
          {displayedHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5 stroke-[2.5]" />
              <span className={isExpanded ? 'leading-relaxed' : 'line-clamp-1'}>
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Full Technical Specifications Table - Visible when Expanded */}
        {isExpanded && item.specs && item.specs.length > 0 && (
          <div className="my-4 rounded-2xl border border-border bg-muted/30 p-3.5 space-y-2.5 animate-in fade-in duration-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <FileText className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>Technical &amp; Regulatory Specifications</span>
            </div>

            <div className="table-scroll-wrapper overflow-x-auto rounded-xl border border-border bg-white shadow-xs">
              <table className="w-full min-w-[280px] text-left text-xs border-collapse">
                <tbody className="divide-y divide-border">
                  {item.specs.map((spec, sIdx) => (
                    <tr
                      key={sIdx}
                      className={sIdx % 2 === 0 ? 'bg-white' : 'bg-muted/40'}
                    >
                      <td className="py-2.5 px-3 font-bold text-foreground border-r border-border align-top min-w-[110px] whitespace-normal">
                        {spec.label}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 leading-relaxed min-w-[160px] whitespace-normal">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Dedicated Card Expand / Collapse Toggle Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded((prev) => !prev);
          }}
          aria-expanded={isExpanded}
          className={`w-full mb-3 flex items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs font-semibold transition-all cursor-pointer min-h-[42px] ${
            isExpanded
              ? 'bg-muted text-foreground hover:bg-slate-200 border border-border'
              : 'bg-muted/50 text-slate-700 hover:bg-muted hover:text-foreground border border-border'
          }`}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-3.5 w-3.5" />
              <span>Collapse Full Details</span>
            </>
          ) : (
            <>
              <FileText className="h-3.5 w-3.5 text-primary" />
              <span>Expand Full Specifications</span>
              <ChevronDown className="h-3.5 w-3.5 text-primary" />
            </>
          )}
        </button>
      </div>

      {/* Action Bar: Direct WhatsApp Order / Quote Request (44px min height) */}
      <div className="pt-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Inquire or order ${item.name} via WhatsApp`}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors min-h-[44px] cursor-pointer"
        >
          <MessageSquare className="h-4 w-4 shrink-0 fill-white" />
          <span>Inquire / Order via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
