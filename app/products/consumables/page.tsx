import type { Metadata } from 'next';
import Link from 'next/link';
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
        url: SITE_CONFIG.ogImage,
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
    images: [SITE_CONFIG.ogImage],
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
    <div className="bg-white min-h-screen text-slate-800">
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

      {/* Header & Breadcrumbs Section - Solid Clinical Navy */}
      <header className="bg-[#0A1B2D] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]">
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
              <div className="inline-flex items-center gap-2 rounded-md bg-[#0F2942] px-3 py-1 text-xs font-semibold text-slate-200 border border-[#2B4C74]">
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
                className="inline-flex items-center gap-2 rounded-lg border border-[#2B4C74] bg-[#0F2942] px-4 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:bg-[#1E3A5F] hover:text-white transition-colors shadow-xs min-h-[44px]"
              >
                <Cpu className="h-4 w-4 text-blue-400 shrink-0" />
                <span>View Machinery Catalog (Analyzers)</span>
              </Link>
            </div>
          </div>

          {/* Trust Highlights Grid */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#1E3A5F] text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 rounded-lg bg-[#0F2942] p-3 border border-[#1E3A5F]">
              <FileCheck2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                ISO 6710 &amp; PPB Compliant Quality
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-lg bg-[#0F2942] p-3 border border-[#1E3A5F]">
              <Truck className="h-4 w-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                Cold-Chain Transport Across 47 Counties
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-lg bg-[#0F2942] p-3 border border-[#1E3A5F]">
              <CalendarCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                Scheduled Monthly Hospital Restocking
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <section aria-label="Consumables Catalog" className="mx-auto max-w-7xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8 space-y-8">
        {/* Interactive Consumables Catalog Client Component */}
        <ConsumablesCatalogClient />
      </section>

      {/* Equipment vs Consumables Gateway Callout */}
      <section className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-xl bg-[#F8FAFC] border border-slate-300 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 rounded bg-white px-2.5 py-0.5 text-xs font-bold text-[#0F2942] border border-slate-200">
                <Cpu className="h-3.5 w-3.5 text-[#0F2942]" />
                <span>Laboratory Equipment &amp; Machinery</span>
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                Looking for Automated Analyzers, Centrifuges, or Microscopes?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                Explore our full equipment catalog featuring 3-part &amp; 5-part hematology machines, clinical biochemistry platforms, Olympus microscopes, and incubators with 1-year warranty and calibration.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2942] hover:bg-[#1E3A5F] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors text-center min-h-[44px]"
              >
                <span>Browse Machinery Catalog</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Consumables FAQ Section */}
      <section className="border-t border-slate-200 bg-[#F8FAFC] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-xs font-bold text-[#0F2942] border border-slate-200 shadow-xs">
              <HelpCircle className="h-3.5 w-3.5 text-[#DC2626]" />
              <span>Consumables Procurement FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
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
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-[#0F2942] hover:shadow-xs transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#0F2942] text-[10px] font-bold text-white mt-0.5">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed pl-7.5">
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
