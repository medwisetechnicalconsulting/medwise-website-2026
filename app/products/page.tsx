import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles,
  HelpCircle,
  FileCheck2,
} from 'lucide-react';
import ProductsCatalogClient from '@/components/ProductsCatalogClient';
import { SITE_CONFIG, getBreadcrumbSchema } from '@/lib/seo/schema';
import { PRODUCTS_CATALOG } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Medical Equipment & Laboratory Machinery Catalog Kenya | Prices in KSh | Medwise',
  description:
    'Explore brand-neutral medical equipment and clinical laboratory machines in Kenya. Compare prices in KSh for 3-part & 5-part hematology (Mindray, Zybio, Dymind), automated biochemistry, POCT immunoassay, microscopes, and consumables with WhatsApp ordering.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Medical & Laboratory Equipment for Sale in Kenya — Prices in KSh | Medwise',
    description:
      'Verified hematology analyzers, biochemistry platforms, immunoassay POCT, Olympus microscopes, and consumables with full specs, KSh pricing, and WhatsApp buying guidance.',
    url: `${SITE_CONFIG.url}/products`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Medwise Medical Equipment Catalog Kenya',
      },
    ],
  },
};

export default function ProductsPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Medical Equipment & Products', url: '/products' },
  ]);

  // Catalog Schema
  const catalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Medwise Clinical Laboratory Equipment Catalog Kenya',
    url: `${SITE_CONFIG.url}/products`,
    description:
      'Brand-neutral medical equipment catalog in Kenya with KSh prices, including hematology, biochemistry, immunoassay POCT, microscopes, and laboratory consumables.',
    numberOfItems: PRODUCTS_CATALOG.length,
    itemListElement: PRODUCTS_CATALOG.slice(0, 15).map((product, idx) => ({
      '@type': 'Offer',
      position: idx + 1,
      itemOffered: {
        '@type': 'Product',
        name: product.name,
        model: product.model,
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        description: product.tagline,
      },
      priceCurrency: 'KES',
      price: product.price || undefined,
      availability: 'https://schema.org/InStock',
      url: `${SITE_CONFIG.url}/products#${product.id}`,
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-blue-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-100 font-semibold">Products Catalog</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-bold text-blue-200 border border-blue-400/30 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              <span>Independent Medical Device Sourcing &amp; Calibration Kenya</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Medical &amp; Laboratory Equipment Catalog
            </h1>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Explore verified clinical machinery with transparent prices in Kenyan Shillings (KSh). Every analyzer includes manufacturer warranty, precision metrological calibration, and professional biomedical installation by Medwise engineers.
            </p>
          </div>

          {/* Value Propositions Pill Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-blue-800/50 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 backdrop-blur-xs border border-white/10">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-100">
                1-Year Warranty &amp; Onsite Calibration
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 backdrop-blur-xs border border-white/10">
              <Truck className="h-5 w-5 text-blue-300 shrink-0" />
              <span className="font-semibold text-slate-100">
                Fast Dispatch Across All 47 Counties
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 backdrop-blur-xs border border-white/10">
              <MessageSquare className="h-5 w-5 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-100">
                Instant Buying Guidance via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog Section */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ProductsCatalogClient />
      </main>

      {/* Advisory & Consulting Callout Section */}
      <section className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-300">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Need Pre-Purchase Guidance?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Unsure Which Analyzer Fits Your Daily Patient Volume?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Purchasing the wrong laboratory machine can lead to wasted reagents, high operating costs, and frequent downtime. Medwise Technical Consulting conducts independent facility workload audits to ensure you invest in the exact equipment your tier requires.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-blue-200 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Independent Brand-Neutral Advice
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Cost-Per-Test (CPT) Financial Analysis
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  KMLTTB &amp; PPB Regulatory Compliance
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20expert%20equipment%20consulting%20to%20help%20my%20clinic%20choose%20the%20right%20analyzers.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all text-center"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat with Senior Engineer</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all text-center"
              >
                <Phone className="h-4 w-4 text-blue-300" />
                <span>Call {SITE_CONFIG.telephone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
