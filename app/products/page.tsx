import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Phone,
  MessageSquare,
  HelpCircle,
  Wrench,
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
    title: 'Medical & Laboratory Equipment for Sale in Kenya: Prices in KSh | Medwise',
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
      'Every product card has a "Buy via WhatsApp" button. Clicking this button immediately launches a WhatsApp chat with Medwise Technical Consulting (+254 117 233 522), automatically prefilling the exact model and direct link so our biomedical team can promptly advise you on current pricing, stock availability, payment terms, and delivery to your county.',
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
    <div className="bg-white min-h-screen text-[hsl(var(--foreground))]">
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

      {/* Hero Header Section - Pure White & Centered */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-[72px] border-b border-[hsl(var(--border))]">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb Pill */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
            <Link href="/" className="hover:text-[hsl(var(--foreground))] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[hsl(var(--foreground))] font-semibold">Equipment Catalog</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
              INDEPENDENT MEDICAL DEVICE SOURCING &amp; CALIBRATION
            </span>

            <h1 className="font-extrabold text-[clamp(2.4rem,4.5vw,4.2rem)] tracking-[-0.04em] leading-[1.05] text-[hsl(var(--foreground))]">
              Medical &amp; Laboratory <br />
              <span className="text-[hsl(var(--primary))]">Equipment Catalog.</span>
            </h1>

            <p className="font-light text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mt-5 max-w-2xl">
              Compare verified clinical laboratory machines with independent technical specifications. Every analyzer includes manufacturer warranty, precision metrological calibration, and professional biomedical installation by Medwise engineers.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[hsl(var(--muted-foreground))]">Need reagents, tubes, or test kits?</span>
              <Link
                href="/products/consumables"
                className="font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full transition-colors inline-flex items-center gap-1"
              >
                <span>Visit Consumables &amp; Reagents (38+ items) &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Value Propositions Trust Chips */}
          <div className="mt-8 flex flex-wrap gap-2.5 pt-6 border-t border-[hsl(var(--border))] text-xs">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))] px-4 py-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[hsl(var(--success))]" />
              <span>1-Year Warranty &amp; Onsite Metrology</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))] px-4 py-2 font-medium">
              <Truck className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span>Dispatch Across All 47 Counties</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))] px-4 py-2 font-medium">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Instant WhatsApp Engineer Advisory</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog Section */}
      <section aria-label="Machinery Catalog" className="max-w-[1200px] mx-auto py-12 px-4 sm:px-8 md:px-[72px]">
        <ProductsCatalogClient />
      </section>

      {/* Equipment FAQ Section - Muted Background */}
      <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))] py-20 px-4 sm:px-8 md:px-[72px]">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-2">
              EQUIPMENT FAQS
            </span>
            <h2 className="font-extrabold text-[clamp(2rem,3vw,2.6rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
              Frequently asked questions on medical machinery.
            </h2>
            <p className="font-light text-sm text-[hsl(var(--muted-foreground))]">
              Transparent answers regarding machinery pricing in KSh, differential technologies, warranties, and delivery across Kenyan counties.
            </p>
          </div>

          <div className="space-y-4">
            {productsFaqs.map((faq, index) => (
              <article
                key={index}
                className="rounded-2xl border border-[hsl(var(--border))] bg-white p-6 shadow-2xs hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all"
              >
                <h3 className="font-bold text-base text-[hsl(var(--foreground))] flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="font-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed pl-9 mt-2">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory & Consulting Callout - Vibrant Blue Banner */}
      <section className="bg-white py-16 px-4 sm:px-8 md:px-[72px]">
        <div className="max-w-[1200px] mx-auto rounded-3xl bg-[hsl(var(--primary))] p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="chip-label bg-white/20 text-white shadow-2xs">
                PRE-PURCHASE WORKLOAD AUDIT
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-[-0.025em]">
                Unsure which analyzer fits your daily patient volume?
              </h2>
              <p className="font-light text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                Purchasing an incompatible laboratory machine can lead to high operating costs, reagent wastage, and frequent downtime. Medwise Technical Consulting conducts independent facility workload audits to ensure you invest in equipment appropriate for your clinical tier.
              </p>

              <div className="pt-3 flex items-center gap-4 text-xs font-light text-white/70 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  Independent Brand-Neutral Advice
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  Cost-Per-Test (CPT) Financial Analysis
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  Local Spare Parts Verification
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20expert%20equipment%20consulting%20to%20help%20my%20clinic%20choose%20the%20right%20analyzers.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-ghost h-12 text-sm font-semibold justify-center shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-[hsl(var(--primary))] shrink-0" />
                <span>Chat with Senior Engineer</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="bg-transparent border border-white/40 hover:border-white text-white font-semibold text-sm rounded-full h-12 px-6 transition-colors inline-flex items-center justify-center gap-2 shrink-0"
              >
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>Call {SITE_CONFIG.telephone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
