'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  X,
  Stethoscope,
  Baby,
  HeartPulse,
  Activity,
  Layers,
} from 'lucide-react';
import { OTHER_PRODUCTS_CATALOG } from '@/lib/otherProducts';

export default function OtherProductsCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Synchronize hash anchor on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-2', 'ring-emerald-500');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-emerald-500');
          }, 2500);
        }, 400);
      }
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return OTHER_PRODUCTS_CATALOG.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        product.department.toLowerCase() === selectedCategory.toLowerCase() ||
        product.id.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.constituents.some((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search departments or tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Departments ({OTHER_PRODUCTS_CATALOG.length})
          </button>
        </div>
      </div>

      {/* 11 Department Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            id={product.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  {product.department}
                </span>
                <span className="text-[11px] font-mono font-semibold text-emerald-700">
                  {product.estimatedPrice}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {product.name}
              </h3>

              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Key Standard Equipment Included:
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 mb-6">
                {product.constituents.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">
                  Package Budget
                </span>
                <span className="text-xs font-mono font-bold text-slate-800">
                  {product.estimatedPrice}
                </span>
              </div>

              <Link
                href={product.slug}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-500 font-medium">
            No departments found matching "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-3 text-xs text-emerald-600 font-bold hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
