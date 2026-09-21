'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Droplet,
  FlaskConical,
  Activity,
  Microscope,
  Cpu,
  PackageCheck,
  LayoutGrid,
  X,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import {
  Product,
  ProductCategory,
  CATEGORIES_CONFIG,
  PRODUCTS_CATALOG,
} from '@/lib/products';
import { CONSUMABLES_CATALOG } from '@/lib/consumables';
import ProductCard from './ProductCard';
import ProductSpecModal from './ProductSpecModal';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function ProductsCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecProduct, setActiveSpecProduct] = useState<Product | null>(null);

  // Sync URL query parameters (?category=, ?q=) and anchor hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam === 'consumables') {
        window.location.href = '/products/consumables';
        return;
      }
      if (
        catParam &&
        ['hematology', 'biochemistry', 'immunoassay', 'microscopes', 'lab-equipment'].includes(
          catParam
        )
      ) {
        setSelectedCategory(catParam as ProductCategory);
      }
      const qParam = params.get('q');
      if (qParam) {
        setSearchQuery(qParam);
      }

      if (window.location.hash) {
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
    }
  }, []);

  // Handle category change (update URL query param)
  const handleCategoryChange = (cat: ProductCategory | 'all') => {
    setSelectedCategory(cat);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (cat === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', cat);
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchModel = product.model.toLowerCase().includes(query);
        const matchBrand = product.brand.toLowerCase().includes(query);
        const matchSubcat = product.subcategory.toLowerCase().includes(query);
        const matchTagline = product.tagline.toLowerCase().includes(query);
        const matchSpecs = product.specs.some(
          (s) =>
            s.label.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)
        );

        if (!matchName && !matchModel && !matchBrand && !matchSubcat && !matchTagline && !matchSpecs) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Category Icon helper
  const getTabIcon = (catId: ProductCategory | 'all') => {
    switch (catId) {
      case 'hematology':
        return <Droplet className="h-4 w-4" />;
      case 'biochemistry':
        return <FlaskConical className="h-4 w-4" />;
      case 'immunoassay':
        return <Activity className="h-4 w-4" />;
      case 'microscopes':
        return <Microscope className="h-4 w-4" />;
      case 'lab-equipment':
        return <Cpu className="h-4 w-4" />;
      case 'consumables':
        return <PackageCheck className="h-4 w-4" />;
      default:
        return <LayoutGrid className="h-4 w-4" />;
    }
  };

  const isFiltering = selectedCategory !== 'all' || searchQuery.trim() !== '';

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Consumables Gateway Banner - Solid Physical Design (Zero Gradients) */}
      <div className="rounded-xl border border-amber-300 bg-amber-50/60 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-700 text-white shadow-xs">
            <PackageCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center rounded bg-amber-200 px-2 py-0.5 text-[11px] font-extrabold text-amber-950 uppercase tracking-wide">
                Special Consumables Page
              </span>
              <span className="text-xs font-semibold text-slate-600">38+ Clinical Items &bull; Bulk Procurement</span>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
              Looking for Blood Tubes, Microscope Slides, Stains &amp; Rapid Test Kits?
            </h2>
            <p className="text-xs text-slate-600">
              Explore our dedicated consumables catalog featuring vacutainers, pipette tips, Widal/Brucella kits, urinalysis strips &amp; safety supplies.
            </p>
          </div>
        </div>
        <Link
          href="/products/consumables"
          className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-800 hover:bg-amber-900 text-white px-4 py-2.5 text-xs sm:text-sm font-bold shadow-xs transition-colors min-h-[44px]"
        >
          <span>Explore Consumables &amp; Reagents</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Search Bar & Stats Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl bg-white p-4 sm:p-5 border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search machines by model (BC 10, Z3, BS 240), brand (Mindray, Zybio, Olympus), or spec..."
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

        {/* Quick Stats & Reset Filter */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <span className="font-semibold text-slate-600">
            Showing <strong className="text-slate-900 font-extrabold">{filteredProducts.length}</strong> of{' '}
            {PRODUCTS_CATALOG.length} diagnostic machines
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

      {/* Main Category Filter Tabs */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
        <div className="flex items-center gap-2 min-w-max">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`shrink-0 min-h-[42px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {getTabIcon('all')}
            <span>All Machines ({PRODUCTS_CATALOG.length})</span>
          </button>

          {CATEGORIES_CONFIG.map((cat) => {
            const count = PRODUCTS_CATALOG.filter((p) => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`shrink-0 min-h-[42px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {getTabIcon(cat.id)}
                <span>
                  {cat.name} ({count})
                </span>
              </button>
            );
          })}

          {/* Consumables Direct Link Tab */}
          <Link
            href="/products/consumables"
            className="shrink-0 min-h-[42px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 hover:border-amber-400 transition-all"
          >
            <PackageCheck className="h-4 w-4 text-amber-700" />
            <span>Consumables &amp; Reagents ({CONSUMABLES_CATALOG.length}) &rarr;</span>
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenSpecs={(p) => setActiveSpecProduct(p)}
            />
          ))}
        </div>
      ) : (
        /* Empty Search/Filter State */
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 sm:p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-400 mb-4">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900">
            No equipment matched &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            We source all models of clinical machinery across Kenya even if not listed in this catalog view.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={resetAllFilters}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Reset All Filters
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20am%20looking%20for%20a%20specific%20medical%20equipment%20model:%20${encodeURIComponent(
                searchQuery || 'Medical Machine'
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

      {/* Specifications Modal */}
      <ProductSpecModal
        product={activeSpecProduct}
        onClose={() => setActiveSpecProduct(null)}
      />
    </div>
  );
}
