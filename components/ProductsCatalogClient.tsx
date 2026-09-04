'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  Droplet,
  FlaskConical,
  Activity,
  Microscope,
  Cpu,
  PackageCheck,
  LayoutGrid,
  X,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import {
  Product,
  ProductCategory,
  CATEGORIES_CONFIG,
  PRODUCTS_CATALOG,
} from '@/lib/products';
import ProductCard from './ProductCard';
import ProductSpecModal from './ProductSpecModal';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function ProductsCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecProduct, setActiveSpecProduct] = useState<Product | null>(null);

  // Sync URL query parameters (?category=, ?q=) and anchor hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (
        catParam &&
        ['hematology', 'biochemistry', 'immunoassay', 'microscopes', 'lab-equipment', 'consumables'].includes(
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

  // Compute available subcategories for the current category selection
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'all') {
      const set = new Set<string>();
      PRODUCTS_CATALOG.forEach((p) => set.add(p.subcategory));
      return Array.from(set);
    }
    const set = new Set<string>();
    PRODUCTS_CATALOG.filter((p) => p.category === selectedCategory).forEach((p) =>
      set.add(p.subcategory)
    );
    return Array.from(set);
  }, [selectedCategory]);

  // Handle category change (reset subcategory & update URL query param)
  const handleCategoryChange = (cat: ProductCategory | 'all') => {
    setSelectedCategory(cat);
    setSelectedSubcategory('all');
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

      // Subcategory filter
      if (selectedSubcategory !== 'all' && product.subcategory !== selectedSubcategory) {
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
  }, [selectedCategory, selectedSubcategory, searchQuery]);

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

  const isFiltering =
    selectedCategory !== 'all' || selectedSubcategory !== 'all' || searchQuery.trim() !== '';

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Search Bar & Stats Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl bg-white p-4 sm:p-5 border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by model (BC 10, Z3, BS 240), brand (Mindray, Zybio, Olympus), or spec..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 pl-10 pr-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
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
            {PRODUCTS_CATALOG.length} machines & items
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
            <span>All Products ({PRODUCTS_CATALOG.length})</span>
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
        </div>
      </div>

      {/* Subcategory Pills (if available) */}
      {availableSubcategories.length > 1 && (
        <div className="flex items-center gap-2 flex-wrap text-xs pt-1">
          <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] flex items-center gap-1">
            <Filter className="h-3 w-3 text-slate-400" />
            <span>Filter:</span>
          </span>

          <button
            onClick={() => setSelectedSubcategory('all')}
            className={`rounded-lg px-3 py-1 font-semibold transition-colors ${
              selectedSubcategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Subcategories
          </button>

          {availableSubcategories.map((subcat) => (
            <button
              key={subcat}
              onClick={() => setSelectedSubcategory(subcat)}
              className={`rounded-lg px-3 py-1 font-semibold transition-colors ${
                selectedSubcategory === subcat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {subcat}
            </button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 mb-4">
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
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Reset All Filters
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20am%20looking%20for%20a%20specific%20medical%20equipment%20model:%20${encodeURIComponent(
                searchQuery || 'Medical Machine'
              )}.%20Do%20you%20have%20it%20available?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition-all"
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
