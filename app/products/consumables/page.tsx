import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Truck,
  MessageSquare,
  HelpCircle,
  PackageCheck,
  Cpu,
  ArrowLeft,
  FileCheck2,
  CalendarCheck,
  Sparkles,
} from 'lucide-react';
import ConsumablesCatalogClient from '@/components/ConsumablesCatalogClient';
import { SITE_CONFIG, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { CONSUMABLES_CATALOG } from '@/lib/consumables';

export const metadata: Metadata = {
  title: 'Laboratory Consumables & Rapid Diagnostic Kits Kenya | Medwise',
  description:
    'Standardized clinical laboratory consumables in Kenya: vacuum blood collection tubes (EDTA, plain clot activator), rapid diagnostic test kits (Widal, Brucella, Malaria RDT, HBsAg, HCG), staining kits (Gram’s, Field’s, ZN), microscope slides, tips, and clinical PPE with prompt nationwide delivery.',
  keywords: [
    'laboratory consumables Kenya',
    'vacutainer blood tubes Kenya',
    'EDTA tubes price Kenya',
    'Widal test kit Kenya',
    'Brucella antigen kit Kenya',
    'microscope slides 7101 price Kenya',
    'cover slips price Kenya',
    'Grams staining kit Kenya',
    'malaria RDT test kits Kenya',
    'HBsAg rapid test kit Kenya',
    'yellow tips 200ul Kenya',
    'blue tips 1000ul Kenya',
    'urine specimen containers 100pcs Kenya',
    'blood collection needles Kenya',
    'medical consumables supplier Kisumu Nairobi',
    'hospital lab supplies wholesale Kenya',
  ],
  alternates: {
    canonical: '/products/consumables',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: `${SITE_CONFIG.url}/products/consumables`,
    title: 'Laboratory Consumables & Rapid Diagnostic Kits Kenya | Medwise',
    description:
      'Standardized vacutainer tubes, staining kits, rapid diagnostic test cassettes, microscope slides, and laboratory PPE with fast delivery across Kenyan counties.',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/images/products/consumables-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Medwise Laboratory Consumables & Diagnostic Reagents Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laboratory Consumables & Diagnostic Kits Kenya | Medwise',
    description:
      'Verified clinical lab consumables, vacutainer tubes, staining solutions, and rapid test kits for Kenyan healthcare facilities.',
    images: ['/images/products/consumables-banner.webp'],
  },
};

const consumablesFaqs = [
  {
    question: 'How do I order laboratory consumables in bulk for my clinic or hospital?',
    answer:
      'You can order directly by clicking the "Inquire / Order via WhatsApp" button on any consumable card or by sharing your laboratory supply procurement list directly with our team (+254 117 233 522). We supply single dispenser boxes, hospital master cartons, and mixed clinic packages with rapid dispatch to all 47 Kenyan counties.',
  },
  {
    question: 'Are your blood collection tubes and diagnostic test kits standardized to Kenya regulatory requirements?',
    answer:
      'Yes. All vacuum blood collection tubes comply with international ISO 6710 and CLSI standards. Rapid diagnostic test kits (including Malaria Pf RDTs, HBsAg, and Syphilis RPR) are CE-marked, WHO-prequalified, and compliant with Kenya Pharmacy and Poisons Board (PPB) guidelines.',
  },
  {
    question: 'What are the recommended storage temperatures for staining solutions and rapid kits?',
    answer:
      'Febrile agglutination antigens (Widal, Brucella), blood grouping antisera (Anti-A, B, D), and Coomb’s reagents must be stored refrigerated at 2°C to 8°C (do not freeze). Most lateral flow rapid test cassettes (Malaria RDT, HCG, HBsAg, H. Pylori) and staining kits are stabilized for tropical room temperature storage between 15°C and 30°C in their sealed desiccant pouches.',
  },
  {
    question: 'Do you offer scheduled recurring monthly lab restocking for healthcare facilities?',
    answer:
      'Yes. Medwise partners with hospitals, maternity clinics, and outpatient diagnostic centers for scheduled bi-weekly or monthly restocking of high-turnover consumables such as EDTA tubes, yellow tips, microscope slides, urine containers, and examination gloves, preventing unexpected stock-outs.',
  },
  {
    question: 'How fast is delivery to facilities outside Nairobi and Kisumu?',
    answer:
      'Orders dispatched from our Kisumu HQ and Nairobi Field Hub arrive within 24 hours to major towns across Kenya (Eldoret, Nakuru, Mombasa, Kakamega, Machakos, Kisii, Kericho) and 24 to 48 hours for remote health centers, with temperature-controlled cold boxes used for refrigerated serology reagents.',
  },
];

export default function ConsumablesPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Laboratory Consumables & Diagnostic Kits', url: '/products/consumables' },
  ]);

  const faqLd = getFaqSchema(consumablesFaqs);

  // Structured ItemList schema for SEO rich snippet
  const consumablesListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: CONSUMABLES_CATALOG.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        description: item.description,
        category: item.subcategory,
        url: `${SITE_CONFIG.url}/products/consumables#${item.id}`,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'KES',
          price: '0',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'KES',
            valueAddedTaxIncluded: true,
          },
        },
      },
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Structured SEO Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consumablesListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Header & Breadcrumbs Section */}
      <header className="bg-slate-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 font-semibold">Consumables &amp; Reagents</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200 border border-slate-700">
                <PackageCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Standardized Clinical Laboratory Consumables &amp; Diagnostic Reagents Kenya</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Laboratory Consumables &amp; Rapid Diagnostic Kits
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
                Reliable clinical diagnostic supplies for healthcare facilities across Kenya: vacuum blood collection tubes, staining solutions, rapid test cassettes, microscope slides, pipette tips, and clinical PPE with batch traceability.
              </p>
            </div>

            {/* Switch to Machinery Catalog Button */}
            <div className="shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-xs"
              >
                <Cpu className="h-4 w-4 text-blue-400 shrink-0" />
                <span>View Machinery Catalog (Analyzers)</span>
              </Link>
            </div>
          </div>

          {/* Trust Highlights Grid */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 rounded-lg bg-slate-800/80 p-3 border border-slate-700/80">
              <FileCheck2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                ISO 6710 &amp; PPB Compliant Quality
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-lg bg-slate-800/80 p-3 border border-slate-700/80">
              <Truck className="h-4 w-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                Cold-Chain Reagent Transport Across 47 Counties
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-lg bg-slate-800/80 p-3 border border-slate-700/80">
              <CalendarCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                Scheduled Monthly Hospital Restocking
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8 space-y-8">
        
        {/* Consolidated Visual Banner Section (Ready for User Custom Artwork) */}
        <section aria-label="Consolidated Consumables Overview Banner" className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xs">
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/8] min-h-[220px] max-h-[380px] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/products/consumables-banner.webp"
              alt="Consolidated clinical laboratory consumables in Kenya including vacutainer tubes, microscope slides, pipette tips, and rapid diagnostic kits"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Dark gradient overlay for visual depth */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/40 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white pointer-events-none">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded bg-blue-600 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Sparkles className="h-3 w-3" />
                  Full Supply Inventory
                </span>
                <h2 className="mt-1 text-base sm:text-xl md:text-2xl font-black text-white drop-shadow-sm">
                  Clinical Diagnostics &amp; Laboratory Consumables Catalog
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 drop-shadow-sm max-w-xl hidden sm:block">
                  Standardized vacutainer tubes, staining solutions, rapid test cassettes, glassware &amp; clinical PPE.
                </p>
              </div>

              <div className="pointer-events-auto">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20laboratory%20consumables%20and%20reagents.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Consumables Catalog Client Component */}
        <ConsumablesCatalogClient />
      </main>

      {/* Equipment vs Consumables Gateway Callout */}
      <section className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl bg-blue-50/70 border border-blue-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-0.5 text-xs font-bold text-blue-900">
                <Cpu className="h-3.5 w-3.5 text-blue-700" />
                <span>Laboratory Equipment &amp; Machinery</span>
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Looking for Automated Analyzers, Centrifuges, or Microscopes?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Explore our full equipment catalog featuring 3-part &amp; 5-part hematology machines, clinical biochemistry platforms, Olympus microscopes, and incubators with 1-year warranty and calibration.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-blue-800 transition-all text-center"
              >
                <span>Browse Machinery Catalog</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Consumables FAQ Section */}
      <section className="border-t border-slate-200 bg-slate-100/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-100">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Consumables Procurement FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions on Lab Consumables &amp; Reagents in Kenya
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Answers regarding batch traceability, cold-chain transport, bulk hospital orders, and countrywide dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {consumablesFaqs.map((faq, index) => (
              <article
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-200 transition-all shadow-2xs"
              >
                <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white mt-0.5">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
