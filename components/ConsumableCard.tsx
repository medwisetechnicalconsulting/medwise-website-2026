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
  Sparkles,
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
    // Avoid toggling if clicking on anchor links, buttons, or their children
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
        return <Activity className="h-4 w-4 text-purple-600 shrink-0" />;
      case 'collection-phlebotomy':
        return <Droplet className="h-4 w-4 text-red-600 shrink-0" />;
      case 'microscopy-staining':
        return <Microscope className="h-4 w-4 text-blue-600 shrink-0" />;
      case 'plasticware-general':
        return <FlaskConical className="h-4 w-4 text-amber-600 shrink-0" />;
      case 'safety-waste':
        return <PackageCheck className="h-4 w-4 text-emerald-600 shrink-0" />;
      default:
        return <Package className="h-4 w-4 text-slate-600 shrink-0" />;
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
      className={`group relative flex flex-col justify-between rounded-xl border bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 cursor-pointer scroll-mt-28 outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 ${
        isExpanded
          ? 'border-blue-400 ring-1 ring-blue-200 shadow-md bg-white'
          : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      <div>
        {/* Top Meta Bar: Subcategory Badge & Expand State Hint */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 rounded bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
            {getCategoryIcon()}
            <span>{item.subcategory}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors ${
                isExpanded
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700'
              }`}
            >
              {isExpanded ? (
                <>
                  <span>Expanded</span>
                  <ChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  <span>Tap to expand</span>
                  <ChevronDown className="h-3 w-3" />
                </>
              )}
            </span>
          </div>
        </div>

        {/* Consumable Visual Area */}
        <div className="relative mb-4 flex h-44 w-full items-center justify-center overflow-hidden rounded-lg bg-white border border-slate-200/80 p-3">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-2xs border border-slate-200">
                {item.category === 'diagnostic-kits' && (
                  <Activity className="h-6 w-6 text-purple-600" />
                )}
                {item.category === 'collection-phlebotomy' && (
                  <Droplet className="h-6 w-6 text-red-600" />
                )}
                {item.category === 'microscopy-staining' && (
                  <Microscope className="h-6 w-6 text-blue-600" />
                )}
                {item.category === 'plasticware-general' && (
                  <FlaskConical className="h-6 w-6 text-amber-600" />
                )}
                {item.category === 'safety-waste' && (
                  <PackageCheck className="h-6 w-6 text-emerald-600" />
                )}
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {item.subcategory}
              </span>
            </div>
          )}

          {/* Badge (if any) */}
          {item.badge && (
            <div className="absolute top-2 left-2 rounded bg-blue-700 px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
              {item.badge}
            </div>
          )}

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={copyLink}
            aria-label={`Copy link for ${item.name}`}
            title="Copy shareable link"
            className="absolute top-2 right-2 rounded bg-white/95 p-1.5 text-slate-400 shadow-2xs hover:text-slate-800 transition-colors border border-slate-200 cursor-pointer"
          >
            {copied ? (
              <CheckCheck className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Item Title */}
        <h3 className="text-base font-bold text-slate-900 leading-snug">
          {item.name}
        </h3>

        {/* Packaging Format Banner */}
        <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200/80">
          <Package className="h-3.5 w-3.5 text-blue-700 shrink-0" />
          <span className={isExpanded ? 'break-words' : 'truncate'}>
            Packaging: <strong className="text-slate-900">{item.packaging}</strong>
          </span>
        </div>

        {/* Clinical Description - Expanded shows FULL text with NO line-clamp */}
        <div className="mt-3">
          <p
            className={`text-xs sm:text-sm text-slate-600 leading-relaxed transition-all ${
              isExpanded ? 'text-slate-800' : 'line-clamp-3'
            }`}
          >
            {item.description}
          </p>
          {!isExpanded && (
            <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 group-hover:underline">
              <span>Read more &amp; view specs</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </span>
          )}
        </div>

        {/* Storage Instruction (if applicable) */}
        {item.storage && (
          <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/60">
            <Thermometer className="h-3.5 w-3.5 text-amber-700 shrink-0" />
            <span className={isExpanded ? 'break-words' : 'truncate'}>{item.storage}</span>
          </div>
        )}

        {/* Key Technical Highlights - Shows all highlights without line-clamp when expanded */}
        <div className="my-3.5 space-y-1.5 border-t border-b border-slate-100 py-3">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            <span>Key Highlights</span>
            <span className="text-[10px] text-slate-400 font-normal">
              {isExpanded ? `All ${item.highlights.length}` : `3 of ${item.highlights.length}`}
            </span>
          </div>
          {displayedHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
              <span className={isExpanded ? 'leading-relaxed' : 'line-clamp-1'}>
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Full Technical Specifications Table - Visible when Expanded */}
        {isExpanded && item.specs && item.specs.length > 0 && (
          <div className="my-4 rounded-xl border border-slate-200 bg-slate-50/60 p-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <FileText className="h-3.5 w-3.5 text-blue-700 shrink-0" />
              <span>Technical &amp; Regulatory Specifications</span>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xs">
              <table className="w-full text-left text-xs">
                <tbody className="divide-y divide-slate-100">
                  {item.specs.map((spec, sIdx) => (
                    <tr
                      key={sIdx}
                      className={sIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}
                    >
                      <td className="w-2/5 py-2 px-2.5 font-bold text-slate-800 border-r border-slate-100 align-top break-words">
                        {spec.label}
                      </td>
                      <td className="w-3/5 py-2 px-2.5 text-slate-600 leading-relaxed break-words">
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
          className={`w-full mb-3 flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs font-bold transition-all cursor-pointer ${
            isExpanded
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
          }`}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-3.5 w-3.5" />
              <span>Collapse Full Details</span>
            </>
          ) : (
            <>
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Expand Full Specifications &amp; Details</span>
              <ChevronDown className="h-3.5 w-3.5 text-blue-600" />
            </>
          )}
        </button>
      </div>

      {/* Action Bar: Direct WhatsApp Order / Quote Request */}
      <div className="pt-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Inquire or order ${item.name} via WhatsApp`}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors min-h-[42px] cursor-pointer"
        >
          <MessageSquare className="h-4 w-4 shrink-0 fill-white" />
          <span>Inquire / Order via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
