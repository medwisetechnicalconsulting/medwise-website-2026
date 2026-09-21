'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecProduct, setActiveSpecProduct] = useState<Product | null>(null);

  // Sync URL query parameters and anchor hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam === 'consumables') {
        router.push('/products/consumables');
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
            element.classList.add('ring-2', 'ring-[hsl(var(--primary))]');
            setTimeout(() => {
              element.classList.remove('ring-2', 'ring-[hsl(var(--primary))]');
            }, 2500);
          }, 400);
        }
      }
    }
  }, [router]);

  // Handle category change
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
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

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

  const getTabIcon = (catId: ProductCategory | 'all') => {
    switch (catId) {
      case 'hematology':
        return <Droplet className="w-3.5 h-3.5" />;
      case 'biochemistry':
        return <FlaskConical className="w-3.5 h-3.5" />;
      case 'immunoassay':
        return <Activity className="w-3.5 h-3.5" />;
      case 'microscopes':
        return <Microscope className="w-3.5 h-3.5" />;
      case 'lab-equipment':
        return <Cpu className="w-3.5 h-3.5" />;
      case 'consumables':
        return <PackageCheck className="w-3.5 h-3.5" />;
      default:
        return <LayoutGrid className="w-3.5 h-3.5" />;
    }
  };

  const isFiltering = selectedCategory !== 'all' || searchQuery.trim() !== '';

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Consumables Callout Banner */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-11 h-11 shrink-0 rounded-full bg-amber-800 text-white flex items-center justify-center shadow-xs">
            <PackageCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="chip-label bg-amber-100 text-amber-900 shadow-2xs">
                CONSUMABLES CATALOG
              </span>
              <span className="font-light text-xs text-[hsl(var(--muted-foreground))]">
                38+ Clinical Reagents &amp; Supplies
              </span>
            </div>
            <h3 className="font-bold text-base text-[hsl(var(--foreground))]">
              Need Vacutainer Tubes, Microscope Slides, Stains or Rapid Kits?
            </h3>
            <p className="font-light text-xs text-[hsl(var(--muted-foreground))] mt-1 leading-relaxed">
              Explore our dedicated consumables catalog with guaranteed cold-chain and nationwide county delivery.
            </p>
          </div>
        </div>
        <Link
          href="/products/consumables"
          className="btn-pill-primary shrink-0 bg-amber-800 hover:bg-amber-900 text-white text-xs h-11 px-6 font-semibold"
        >
          <span>Consumables Catalog ({CONSUMABLES_CATALOG.length}) &rarr;</span>
        </Link>
      </div>

      {/* Search Bar & Counter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl bg-white p-4 sm:p-5 border border-[hsl(var(--border))] shadow-2xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search machines by model (BC 10, Z3, BS 240), brand, or specification..."
            className="w-full rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] py-2.5 pl-11 pr-10 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] focus:bg-white focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Stats & Reset Filter */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <span className="font-light text-[hsl(var(--muted-foreground))]">
            Showing <strong className="font-bold text-[hsl(var(--foreground))]">{filteredProducts.length}</strong> of{' '}
            {PRODUCTS_CATALOG.length} models
          </span>

          {isFiltering && (
            <button
              onClick={resetAllFilters}
              className="font-semibold text-[hsl(var(--primary))] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills (Pill System) */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
        <div className="flex items-center gap-2 min-w-max">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[hsl(var(--primary))] text-white shadow-xs'
                : 'bg-white text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))] hover:text-[hsl(var(--foreground))]'
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
                className={`shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[hsl(var(--primary))] text-white shadow-xs'
                    : 'bg-white text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))] hover:text-[hsl(var(--foreground))]'
                }`}
              >
                {getTabIcon(cat.id)}
                <span>
                  {cat.name} ({count})
                </span>
              </button>
            );
          })}

          <Link
            href="/products/consumables"
            className="shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-all"
          >
            <PackageCheck className="w-3.5 h-3.5 text-amber-800" />
            <span>Consumables ({CONSUMABLES_CATALOG.length}) &rarr;</span>
          </Link>
        </div>
      </div>

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
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-[hsl(var(--border))] bg-white p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-base text-[hsl(var(--foreground))]">
            No equipment matched &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="font-light text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto mt-2 leading-relaxed">
            We source all models of clinical machinery across Kenya even if not listed in this preview view.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={resetAllFilters}
              className="btn-pill-secondary text-xs h-10 px-5"
            >
              Reset Filters
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20am%20looking%20for:%20${encodeURIComponent(
                searchQuery || 'Medical Machine'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary text-xs h-10 px-5 bg-emerald-600 hover:bg-emerald-700"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
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
