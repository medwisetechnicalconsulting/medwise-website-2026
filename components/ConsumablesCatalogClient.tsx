'use client';

import React, { useState } from 'react';
import { OtherDepartmentProduct } from '@/lib/otherProducts';

interface OtherProductsCatalogClientProps {
  initialProducts: OtherDepartmentProduct[];
}

export default function OtherProductsCatalogClient({
  initialProducts,
}: OtherProductsCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="grid grid-gap-6 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
            {product.category && (
              <span className="mt-1 inline-block text-xs font-medium text-blue-600 dark:text-blue-400">
                {product.category}
              </span>
            )}
            {product.description && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
