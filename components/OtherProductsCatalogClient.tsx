'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  Stethoscope,
  Baby,
  HeartPulse,
  Activity,
  Layers,
} from 'lucide-react';
import { OtherDepartmentProduct, OTHER_PRODUCTS_CATALOG } from '@/lib/otherProducts';
import OtherProductCard from './OtherProductCard';
import OtherProductSpecModal from './OtherProductSpecModal';

export default function OtherProductsCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<OtherDepartmentProduct | null>(null);

  // Synchronize hash anchor on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-2', 'ring-primary');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-primary');
          }, 2500);
        }, 400);
      }
    }
  }, []);

  const categories = [
    { id: 'all', label: 'All Suites', count: 4, icon: Layers },
    { id: 'dental', label: 'Dental', count: 1, icon: Activity },
    { id: 'theatre', label: 'Theatre (OT)', count: 1, icon: Stethoscope },
    { id: 'maternity', label: 'Maternity & NBU', count: 1, icon: Baby },
    { id: 'icu', label: 'ICU Critical Care', count: 1, icon: HeartPulse },
  ];

  const filteredProducts = useMemo(() => {
    return OTHER_PRODUCTS_CATALOG.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search filter across name, department, tagline, description, and constituents
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDept = item.department.toLowerCase().includes(query);
        const matchTagline = item.tagline.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchConstituent = item.constituents.some((c) =>
          c.toLowerCase().includes(query)
        );
        const matchHighlight = item.highlights.some((h) =>
          h.toLowerCase().includes(query)
        );
        const matchSpec = item.keySpecs.some(
          (s) =>
            s.label.toLowerCase().includes(query) ||
            s.value.toLowerCase().includes(query)
        );

        if (
          !matchName &&
          !matchDept &&
          !matchTagline &&
          !matchDesc &&
          !matchConstituent &&
          !matchHighlight &&
          !matchSpec
        ) {
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

  return (
    <div className="space-y-8">
      {/* Search Bar & Counter Header (Matches Consumables & Equipment Pattern) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl bg-white p-4 sm:p-5 border border-border shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search equipment (e.g. dental chair, anaesthesia, baby incubator, ICU ventilator, suction)..."
            className="w-full rounded-full border border-border bg-muted/40 py-3 pl-11 pr-10 text-sm text-foreground placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-primary-light transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Counter & Reset Filter */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <span className="font-semibold text-slate-500">
            Showing <strong className="text-foreground font-extrabold">{filteredProducts.length}</strong> of{' '}
            {OTHER_PRODUCTS_CATALOG.length} department suites
          </span>

          {isFiltering && (
            <button
              onClick={resetAllFilters}
              className="font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <X className="h-3 w-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? 'bg-primary text-white border-primary shadow-xs'
                  : 'bg-white text-slate-700 border-border hover:bg-slate-50'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  isActive ? 'bg-white/20 text-white' : 'bg-muted text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <OtherProductCard
              key={product.id}
              product={product}
              onOpenSpecs={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-border bg-muted/30">
          <p className="text-base font-semibold text-foreground">
            No equipment suites match your search &ldquo;{searchQuery}&rdquo;.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Try searching for another piece of equipment or reset your filter.
          </p>
          <button
            onClick={resetAllFilters}
            className="mt-4 btn-pill-secondary h-9 px-4 text-xs font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Specifications & Constituents Modal */}
      <OtherProductSpecModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
