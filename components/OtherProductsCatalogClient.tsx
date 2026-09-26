'use client';

import { useState, useMemo } from 'react';
import { Search, X, Sparkles, Stethoscope, Baby, HeartPulse, Layers } from 'lucide-react';
import { OtherDepartmentProduct, OTHER_PRODUCTS_CATALOG } from '@/lib/otherProducts';
import OtherProductCard from './OtherProductCard';
import OtherProductSpecModal from './OtherProductSpecModal';

export default function OtherProductsCatalogClient() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<OtherDepartmentProduct | null>(null);

  const categories = [
    { id: 'all', label: 'All Departments (4)', icon: Layers },
    { id: 'dental', label: 'Dental', icon: Sparkles },
    { id: 'theatre', label: 'Theatre', icon: Stethoscope },
    { id: 'maternity', label: 'Maternity (Newborn Unit)', icon: Baby },
    { id: 'icu', label: 'ICU', icon: HeartPulse },
  ];

  const filteredProducts = useMemo(() => {
    return OTHER_PRODUCTS_CATALOG.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Search filter across name, department, tagline, description, and constituents
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        item.name.toLowerCase().includes(query) ||
        item.department.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.constituents.some((c) => c.toLowerCase().includes(query)) ||
        item.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div>
      {/* Search and Category Filter Navigation */}
      <div className="mb-10 space-y-6">
        {/* Search Input Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search equipment (e.g., dental chair, anaesthesia, baby incubator, ICU ventilator, suction)..."
            className="w-full h-12 pl-11 pr-10 rounded-full border border-[hsl(var(--border))] bg-white text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-hidden focus:ring-2 focus:ring-[hsl(var(--primary))] shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] rounded-full hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[hsl(var(--primary))] text-white shadow-xs'
                    : 'bg-white text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))] hover:text-[hsl(var(--foreground))]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <OtherProductCard
              key={product.id}
              product={product}
              onOpenSpecs={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-[hsl(var(--border))] bg-slate-50/50">
          <p className="text-base font-semibold text-[hsl(var(--foreground))]">
            No equipment suites match your search &ldquo;{searchQuery}&rdquo;.
          </p>
          <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
            Try searching for another piece of equipment or reset your filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-4 btn-pill-secondary h-9 px-4 text-xs font-semibold"
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
