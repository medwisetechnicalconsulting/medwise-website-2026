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
  FileText,
  BadgePercent,
  Check,
  Wrench,
  Activity,
} from 'lucide-react';
import ProductsCatalogClient from '@/components/ProductsCatalogClient';
import { SITE_CONFIG, getBreadcrumbSchema, getProductListSchema, getFaqSchema } from '@/lib/seo/schema';
import { PRODUCTS_CATALOG } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Medical Equipment & Laboratory Machinery Catalog Kenya | Prices in KSh | Medwise',
  description:
    'Explore brand-neutral medical equipment and clinical laboratory machines in Kenya. Compare prices in KSh for 3-part & 5-part hematology (Mindray BC 10, Zybio Z3, BC 5000), automated biochemistry, POCT immunoassay, microscopes, and consumables with WhatsApp ordering, warranty, and calibration.',
  keywords: [
    'Mindray BC 10 price in Kenya',
    'Zybio Z3 price Kenya',
    'Mindray BC 5000 price Kenya',
    'Dymind DH36 hematology analyzer Kenya',
    'Dymind DF 55 5 part analyzer Kenya',
    'Bioelab EC 30 CBC machine Kenya',
    'Icubio ichem 535 Kenya',
    'Seamaty SD1 dry chemistry analyzer price Kenya',
    'Zybio EXC 200 automated biochemistry Kenya',
    'Bioelab as 160 analyzer price Kenya',
    'Mindray BS 240 clinical chemistry price Kenya',
    'Olympus CX23 microscope price Kenya',
    'Olympus CX21 Kenya',
    'Finecare FS 113 immunoassay price Kenya',
    'medical equipment for sale Kenya',
    'hematology analyzer for sale Kenya',
    'laboratory machines Kenya prices in KSh',
    'buy medical equipment via WhatsApp Kenya',
    'medical equipment supplier Kisumu Nairobi',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: `${SITE_CONFIG.url}/products`,
    title: 'Medical & Laboratory Equipment for Sale in Kenya — Prices in KSh | Medwise',
    description:
      'Verified hematology analyzers, biochemistry platforms, immunoassay POCT, Olympus microscopes, and consumables with full specs, KSh pricing, warranty, and WhatsApp buying guidance.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Medical & Laboratory Equipment for Sale in Kenya | Prices in KSh',
    description:
      'Verified hematology, biochemistry, microscopes, and lab equipment with transparent KSh pricing and WhatsApp ordering.',
    images: [SITE_CONFIG.ogImage],
  },
};

const productsFaqs = [
  {
    question: 'How much does a 3-part hematology analyzer cost in Kenya?',
    answer:
      'In Kenya, automated 3-part differential hematology analyzers typically range between KSh 380,000 and KSh 500,000 depending on the model and speed. For example, the Bioelab EC 30 is priced at KSh 380,000, the Zybio Z3 and Dymind DH36 are KSh 450,000, and the Mindray BC 10 is KSh 500,000. All units sourced through Medwise include a 1-year warranty, onsite installation, and precision calibration.',
  },
  {
    question: 'What is the price of a 5-part hematology analyzer in Kenya?',
    answer:
      '5-part differential hematology analyzers in Kenya range between KSh 900,000 and KSh 1,000,000+. Popular models include the Zybio Z50 (KSh 900,000), Dymind DF 55 (KSh 900,000), and Mindray BC 5000 (KSh 1,000,000). These machines utilize laser flow cytometry for comprehensive white blood cell subpopulation counting.',
  },
  {
    question: 'What is the cost of clinical biochemistry analyzers in Kenya?',
    answer:
      'Semi-automated biochemistry photometers such as the Icubio iChem-535 and Dymind DP-C16 start at KSh 170,000. Microfluidic dry chemistry analyzers like the Seamaty SD 1 cost KSh 450,000 with zero liquid reagent waste. Fully automated clinical chemistry platforms range from KSh 1,000,000 (Bioelab AS-160) to KSh 1,200,000 (Zybio EXC 200 and Mindray BS 240).',
  },
  {
    question: 'How does the "Buy via WhatsApp" feature work?',
    answer:
      'Every product card has a "Buy via WhatsApp" button located directly next to the price. Clicking this button immediately launches a WhatsApp chat with Medwise Technical Consulting (+254 117 233 522), automatically prefilling the exact model, price in KSh, and direct link so our biomedical team can promptly advise you on stock availability, payment terms, and delivery to your county.',
  },
  {
    question: 'Do you provide delivery, installation, and calibration across Kenya?',
    answer:
      'Yes. Medwise operates from Kisumu (Kisumu-Kakamega Road HQ) and our Nairobi Field Hub, serving all 47 counties across Kenya including Mombasa, Eldoret, Nakuru, Machakos, and Western Kenya. Every machine includes professional biomedical engineer installation, operator training, and metrological calibration certificates.',
  },
  {
    question: 'Should my facility choose a 3-part or 5-part hematology analyzer?',
    answer:
      'For primary healthcare clinics, maternity centers, and outpatient dispensaries handling under 30–40 CBC tests per day, an automated 3-part analyzer (e.g., Mindray BC 10 or Zybio Z3) is the most cost-effective solution. For Level 4 and Level 5 hospitals, specialized oncology/pediatric centers, or referral labs handling complex cases, a 5-part differential analyzer (e.g., Mindray BC 5000 or Zybio Z50) is recommended for precise eosinophil, basophil, and neutrophil counts.',
  },
];

export default function ProductsPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Medical Equipment & Products', url: '/products' },
  ]);

  const productListLd = getProductListSchema(PRODUCTS_CATALOG);
  const faqLd = getFaqSchema(productsFaqs);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Structured SEO Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero Header Section - Fully responsive across mobile, tablet & desktop */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white py-10 sm:py-16 lg:py-18 px-4 sm:px-6 lg:px-8 border-b border-blue-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-blue-400">/</span>
            <span className="text-blue-100 font-semibold">Equipment Catalog</span>
          </nav>

          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-200 border border-blue-400/30 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-300 shrink-0" />
              <span className="truncate">Independent Medical Device Sourcing &amp; Calibration Kenya</span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Medical &amp; Laboratory Equipment Catalog
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl">
              Compare verified clinical laboratory machines with transparent prices in Kenyan Shillings (KSh). Every analyzer includes manufacturer warranty, precision metrological calibration, and professional biomedical installation by Medwise engineers.
            </p>
          </div>

          {/* Value Propositions Pill Grid - Responsive 1 col mobile, 3 col tablet/desktop */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-4 border-t border-blue-800/50 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 backdrop-blur-xs border border-white/10">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-100 text-xs sm:text-sm">
                1-Year Warranty &amp; Onsite Calibration
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 backdrop-blur-xs border border-white/10">
              <Truck className="h-5 w-5 text-blue-300 shrink-0" />
              <span className="font-semibold text-slate-100 text-xs sm:text-sm">
                Fast Dispatch Across All 47 Counties
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-3 backdrop-blur-xs border border-white/10">
              <MessageSquare className="h-5 w-5 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-100 text-xs sm:text-sm">
                Instant Buying Guidance via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog Section */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
        <ProductsCatalogClient />
      </main>

      {/* Equipment FAQ & Rich Search Snippets Section */}
      <section className="border-t border-slate-200 bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-100">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Equipment Buying FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions on Medical Equipment in Kenya
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Transparent answers regarding machinery pricing in KSh, differential technologies, warranties, and delivery across Kenyan counties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {productsFaqs.map((faq, index) => (
              <article
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all"
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

      {/* Advisory & Consulting Callout Section */}
      <section className="border-t border-slate-200 bg-slate-100/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-300">
                <Wrench className="h-3.5 w-3.5" />
                <span>Need Pre-Purchase Guidance?</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                Unsure Which Analyzer Fits Your Daily Patient Volume?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Purchasing the wrong laboratory machine can lead to wasted reagents, high operating costs, and frequent downtime. Medwise Technical Consulting conducts independent facility workload audits to ensure you invest in the exact equipment your tier requires.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-blue-200 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  Independent Brand-Neutral Advice
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  Cost-Per-Test (CPT) Financial Analysis
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  KMLTTB &amp; PPB Regulatory Compliance
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20expert%20equipment%20consulting%20to%20help%20my%20clinic%20choose%20the%20right%20analyzers.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all text-center hover:scale-102 active:scale-98"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>Chat with Senior Engineer</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-all text-center hover:scale-102 active:scale-98"
              >
                <Phone className="h-4 w-4 text-blue-300 shrink-0" />
                <span>Call {SITE_CONFIG.telephone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
