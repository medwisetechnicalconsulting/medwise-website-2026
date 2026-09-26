'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  MessageSquare,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Wrench,
  Check,
  Stethoscope,
  Baby,
  HeartPulse,
  Sparkles,
  Activity,
  Layers,
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

  const getDepartmentIcon = () => {
    switch (product.category) {
      case 'dental':
        return <Sparkles className="w-4 h-4 text-blue-600" />;
      case 'theatre':
        return <Stethoscope className="w-4 h-4 text-indigo-600" />;
      case 'maternity':
        return <Baby className="w-4 h-4 text-pink-600" />;
      case 'icu':
        return <HeartPulse className="w-4 h-4 text-red-600" />;
      default:
        return <Activity className="w-4 h-4 text-[hsl(var(--primary))]" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="other-product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-[hsl(var(--border))] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[hsl(var(--border))] px-6 py-4 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] shrink-0">
              {getDepartmentIcon()}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--primary))]">
                {product.department} Department Equipment
              </span>
              <h2
                id="other-product-modal-title"
                className="text-base sm:text-lg font-extrabold text-[hsl(var(--foreground))] leading-tight"
              >
                {product.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:bg-slate-100 hover:text-[hsl(var(--foreground))] transition-colors cursor-pointer shadow-xs"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          
          {/* Top Banner: Image & Quick Overview */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative aspect-[4/3] w-full md:w-80 rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-slate-900 shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-3 left-3 chip-label bg-white/95 backdrop-blur-xs font-bold text-xs shadow-xs">
                {product.badge}
              </div>
            </div>

            <div className="space-y-3 flex-grow">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[hsl(var(--foreground))]">
                {product.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Service Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-[hsl(var(--muted))] p-2.5 rounded-xl border border-[hsl(var(--border))]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{product.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-[hsl(var(--muted))] p-2.5 rounded-xl border border-[hsl(var(--border))]">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium">{product.deliveryTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Equipment Constituents Breakdown */}
          <div className="space-y-4 pt-4 border-t border-[hsl(var(--border))]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[hsl(var(--primary))]" />
                <h4 className="text-base sm:text-lg font-bold text-[hsl(var(--foreground))]">
                  All Included Equipment &amp; Constituents ({product.constituents.length} Items)
                </h4>
              </div>
              <span className="text-xs text-[hsl(var(--muted-foreground))] hidden sm:inline">
                Standard Clinical Inventory
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.constituents.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="text-xs text-[hsl(var(--foreground))] font-medium leading-relaxed">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3 pt-4 border-t border-[hsl(var(--border))]">
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[hsl(var(--primary))]" />
              <h4 className="text-base sm:text-lg font-bold text-[hsl(var(--foreground))]">
                Biomedical Specifications &amp; Standards
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[hsl(var(--border))]">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-[hsl(var(--muted-foreground))] uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3 border-b border-[hsl(var(--border))] w-1/3">
                      Technical Parameter
                    </th>
                    <th className="px-4 py-3 border-b border-[hsl(var(--border))]">
                      Clinical Engineering Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[hsl(var(--border))] bg-white">
                  {product.keySpecs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-4 py-3 font-semibold text-[hsl(var(--foreground))] bg-slate-50/40">
                        {spec.label}
                      </td>
                      <td className="px-4 py-3 text-slate-700 font-normal">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="border-t border-[hsl(var(--border))] px-6 py-4 bg-slate-50/90 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[hsl(var(--muted-foreground))] text-center sm:text-left">
            <span className="font-semibold text-[hsl(var(--foreground))]">Need a customized facility bill of quantities (BOQ)?</span>
            <span className="block">Our biomedical engineering team provides brand-neutral quotations tailored to your budget.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="btn-pill-secondary h-11 px-5 text-xs font-semibold justify-center gap-2 w-1/2 sm:w-auto"
            >
              <Phone className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
              <span>Call Team</span>
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary h-11 px-6 text-xs font-semibold justify-center gap-2 w-1/2 sm:w-auto shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Request Quote via WhatsApp &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
