'use client';

import { useState } from 'react';
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
} from 'lucide-react';
import { ConsumableItem, getConsumableWhatsAppUrl } from '@/lib/consumables';
import { SITE_CONFIG } from '@/lib/seo/schema';

interface ConsumableCardProps {
  item: ConsumableItem;
}

export default function ConsumableCard({ item }: ConsumableCardProps) {
  const [copied, setCopied] = useState(false);

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

  return (
    <article
      id={item.id}
      className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all scroll-mt-28"
    >
      <div>
        {/* Top Meta Bar: Subcategory Badge & Packaging Unit */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
            {getCategoryIcon()}
            <span>{item.subcategory}</span>
          </div>

          <button
            onClick={copyLink}
            aria-label={`Copy link for ${item.name}`}
            title="Copy shareable link"
            className="rounded-md p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {copied ? (
              <CheckCheck className="h-4 w-4 text-emerald-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Badge (if any) */}
        {item.badge && (
          <div className="mb-2.5">
            <span className="inline-block rounded bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-800 border border-blue-200/80">
              {item.badge}
            </span>
          </div>
        )}

        {/* Item Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {item.name}
        </h3>

        {/* Packaging Format Banner */}
        <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200/80">
          <Package className="h-3.5 w-3.5 text-blue-700 shrink-0" />
          <span className="truncate">Packaging: <strong className="text-slate-900">{item.packaging}</strong></span>
        </div>

        {/* Clinical Description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>

        {/* Storage Instruction (if applicable) */}
        {item.storage && (
          <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/60">
            <Thermometer className="h-3.5 w-3.5 text-amber-700 shrink-0" />
            <span>{item.storage}</span>
          </div>
        )}

        {/* Key Technical Highlights */}
        <div className="my-3.5 space-y-1.5 border-t border-b border-slate-100 py-3">
          {item.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Bar: Direct WhatsApp Order / Quote Request (NO Price displayed) */}
      <div className="pt-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Inquire or order ${item.name} via WhatsApp`}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors min-h-[42px]"
        >
          <MessageSquare className="h-4 w-4 shrink-0 fill-white" />
          <span>Inquire / Order via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
