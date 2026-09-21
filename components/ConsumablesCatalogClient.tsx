'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  X,
  MessageSquare,
  Activity,
  Droplet,
  Microscope,
  FlaskConical,
  PackageCheck,
  LayoutGrid,
  FileSpreadsheet,
  CheckCircle2,
} from 'lucide-react';
import {
  ConsumableCategory,
  CONSUMABLES_CATEGORIES,
  CONSUMABLES_CATALOG,
} from '@/lib/consumables';
import ConsumableCard from './ConsumableCard';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function ConsumablesCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<ConsumableCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize hash anchor on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-2', 'ring-blue-500');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-blue-500');
          }, 2500);
        }, 400);
      }
    }
  }, []);

  const filteredItems = useMemo(() => {
    return CONSUMABLES_CATALOG.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchSubcat = item.subcategory.toLowerCase().includes(query);
        const matchTagline = item.tagline.toLowerCase().includes(query);
        const matchPackaging = item.packaging.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchSpecs = item.specs.some(
          (s) => s.label.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)
        );

        if (!matchName && !matchSubcat && !matchTagline && !matchPackaging && !matchDesc && !matchSpecs) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const isFiltering = selectedCategory !== 'all' || searchQuery.trim() !== '';

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const getCategoryIcon = (catId: ConsumableCategory | 'all') => {
    switch (catId) {
      case 'diagnostic-kits':
        return <Activity className="h-4 w-4" />;
      case 'collection-phlebotomy':
        return <Droplet className="h-4 w-4" />;
      case 'microscopy-staining':
        return <Microscope className="h-4 w-4" />;
      case 'plasticware-general':
        return <FlaskConical className="h-4 w-4" />;
      case 'safety-waste':
        return <PackageCheck className="h-4 w-4" />;
      default:
        return <LayoutGrid className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Bar & Counter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl bg-white p-4 sm:p-5 border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search consumables (e.g. Widal, EDTA, Gram's, Urine cups, Slides, Tips)..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 pl-10 pr-9 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Counter & Reset Filter */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <span className="font-semibold text-slate-600">
            Showing <strong className="text-slate-900 font-extrabold">{filteredItems.length}</strong> of{' '}
            {CONSUMABLES_CATALOG.length} items
          </span>

          {isFiltering && (
            <button
              onClick={resetAllFilters}
              className="font-bold text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
        <div className="flex items-center gap-2 min-w-max">
          {CONSUMABLES_CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? CONSUMABLES_CATALOG.length
                : CONSUMABLES_CATALOG.filter((item) => item.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ConsumableCategory | 'all')}
                className={`shrink-0 min-h-[44px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {getCategoryIcon(cat.id as ConsumableCategory | 'all')}
                <span>
                  {cat.shortName} ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Consumables Cards Grid (with Image Provisioning) */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <ConsumableCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 sm:p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-400 mb-4">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900">
            No laboratory consumable matched &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            We supply all clinical diagnostic reagents, stains, and phlebotomy consumables across Kenya even if unlisted here.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={resetAllFilters}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Reset All Filters
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20am%20looking%20for%20a%20specific%20laboratory%20consumable:%20${encodeURIComponent(
                searchQuery || 'Clinical Consumable'
              )}.%20Do%20you%20have%20it%20available?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Bulk Hospital / Clinic Quotation Action Bar - Solid Clinical Navy (Zero Gradients) */}
      <div className="rounded-xl bg-[#0F2942] p-6 sm:p-8 text-white border border-[#1E3A5F] shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-[#1E3A5F] px-2.5 py-1 text-xs font-bold text-slate-200 border border-[#2B4C74]">
              <FileSpreadsheet className="h-3.5 w-3.5" />
              <span>Hospital Procurement & Facility Supply</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Ordering Laboratory Consumables in Bulk for Your Facility?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We supply recurring monthly lab orders, hospital master cartons, and mixed clinic packages across all 47 Kenyan counties with batch traceability and cold-chain compliance.
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs font-medium text-slate-300 flex-wrap">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                Scheduled Monthly Clinic Restocking
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                Wholesale Hospital Rates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                Fast Countrywide Delivery
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20request%20a%20bulk%20quotation%20for%20laboratory%20consumables%20and%20reagents%20for%20our%20health%20facility.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors text-center"
            >
              <MessageSquare className="h-4 w-4 shrink-0" />
              <span>Submit Supply List on WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors text-center"
            >
              <span>Call Procurement Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
