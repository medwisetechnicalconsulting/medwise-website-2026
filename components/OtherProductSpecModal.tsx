import React from 'react';
import { OtherDepartmentProduct } from '@/lib/otherProducts';

interface OtherProductSpecModalProps {
  product: OtherDepartmentProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppInquiry?: (product: OtherDepartmentProduct) => void;
}

export default function OtherProductSpecModal({
  product,
  isOpen,
  onClose,
  onWhatsAppInquiry,
}: OtherProductSpecModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b pb-4 dark:border-gray-800">
          <div>
            {product.category && (
              <span className="mb-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                {product.category}
              </span>
            )}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h2>
            {product.tagline && (
              <p className="text-sm text-gray-600 dark:text-gray-400">{product.tagline}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="my-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {product.description && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Description</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
            </div>
          )}

          {/* Constituents section */}
          {product.constituents && product.constituents.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Constituents / Components</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                {product.constituents.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Specifications */}
          {product.keySpecs && product.keySpecs.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Key Specifications</h3>
              <div className="mt-2 grid grid-gap-2 gap-2">
                {product.keySpecs.map((spec: { label: string; value: string } | string, idx: number) => (
                  <div key={idx} className="flex justify-between rounded-lg bg-gray-50 p-2 text-sm dark:bg-gray-800/50">
                    {typeof spec === 'string' ? (
                      <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                    ) : (
                      <>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{spec.label}</span>
                        <span className="text-gray-600 dark:text-gray-400">{spec.value}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional details */}
          <div className="flex gap-4 pt-2 text-xs text-gray-500">
            {product.warranty && <div>Warranty: {product.warranty}</div>}
            {product.deliveryTime && <div>Delivery: {product.deliveryTime}</div>}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 border-t pt-4 dark:border-gray-800">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Close
          </button>
          {onWhatsAppInquiry && (
            <button
              onClick={() => onWhatsAppInquiry(product)}
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Inquire via WhatsApp
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
