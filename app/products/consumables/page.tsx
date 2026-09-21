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
    <div className="bg-background min-h-screen text-foreground">
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

      {/* Header & Breadcrumbs Section - Clean White Hero */}
      <header className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="mx-auto max-w-[1200px]">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-foreground font-semibold">Consumables &amp; Reagents</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="chip-label inline-flex items-center gap-2">
                <PackageCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Standardized Clinical Laboratory Consumables Kenya</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Laboratory Consumables &amp; Rapid Diagnostic Kits
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Reliable clinical diagnostic supplies for healthcare facilities across Kenya: vacuum blood collection tubes, staining solutions, rapid test cassettes, microscope slides, pipette tips, and clinical PPE with batch traceability.
              </p>
            </div>

            {/* Switch to Machinery Catalog Button */}
            <div className="shrink-0">
              <Link
                href="/products"
                className="btn-pill-secondary inline-flex items-center gap-2 shadow-xs"
              >
                <Cpu className="h-4 w-4 text-primary shrink-0" />
                <span>View Machinery Catalog</span>
              </Link>
            </div>
          </div>

          {/* Trust Highlights Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
            <div className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4 border border-border">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <span className="font-semibold text-foreground text-sm">
                ISO 6710 &amp; PPB Compliant Quality
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4 border border-border">
              <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5" />
              </div>
              <span className="font-semibold text-foreground text-sm">
                Cold-Chain Transport Across 47 Counties
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4 border border-border">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <span className="font-semibold text-foreground text-sm">
                Scheduled Monthly Hospital Restocking
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <section aria-label="Consumables Catalog" className="mx-auto max-w-[1200px] px-4 py-10 sm:py-14 sm:px-6 lg:px-8 space-y-10">
        {/* Interactive Consumables Catalog Client Component */}
        <ConsumablesCatalogClient />
      </section>

      {/* Equipment vs Consumables Gateway Callout */}
      <section className="border-t border-border bg-muted/40 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-3xl bg-white border border-border p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <div className="chip-label inline-flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-primary" />
                <span>Diagnostic Equipment &amp; Machinery</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Looking for Automated Analyzers, Centrifuges, or Microscopes?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Explore our full equipment catalog featuring 3-part &amp; 5-part hematology machines, clinical biochemistry platforms, Olympus microscopes, and incubators with 1-year warranty and calibration.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/products"
                className="btn-pill-primary inline-flex items-center justify-center gap-2"
              >
                <span>Browse Machinery Catalog</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Consumables FAQ Section */}
      <section className="border-t border-border bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="chip-label inline-flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-primary" />
              <span>Consumables Procurement FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Frequently Asked Questions on Lab Consumables
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Answers regarding batch traceability, cold-chain transport, bulk hospital orders, and countrywide dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {consumablesFaqs.map((faq, index) => (
              <article
                key={index}
                className="rounded-2xl border border-border bg-muted/30 p-6 hover:bg-white hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-base font-bold text-foreground flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-bold mt-0.5">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-9 font-normal">
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
