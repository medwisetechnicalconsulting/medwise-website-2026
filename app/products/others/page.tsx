import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Truck,
  Phone,
  MessageSquare,
  HelpCircle,
  Wrench,
  Cpu,
  PackageCheck,
  Layers,
  Sparkles,
  Stethoscope,
  Baby,
  HeartPulse,
} from 'lucide-react';
import OtherProductsCatalogClient from '@/components/OtherProductsCatalogClient';
import { SITE_CONFIG, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { OTHER_PRODUCTS_CATALOG } from '@/lib/otherProducts';

export const metadata: Metadata = {
  title: 'Specialized Hospital Equipment: Dental, Theatre, Maternity & ICU Kenya | Medwise',
  description:
    'Turnkey clinical department equipment in Kenya: Dental chairs & compressors, Operating Theatre anaesthesia machines, surgical tables & lights, Maternity baby warmers & incubators, and ICU ventilators & multi-parameter monitors with certified installation, calibration, and warranty.',
  keywords: [
    'dental equipment Kenya',
    'dental chairs with compressors price Kenya',
    'light cure machine Kenya',
    'dental X-ray machine Kenya',
    'operating theatre equipment Kenya',
    'anaesthesia machine price Kenya',
    'surgical theatre lights Kenya',
    'operating table hydraulic electric Kenya',
    'suction machine double bottle Kenya',
    'infant radiant baby warmer price Kenya',
    'baby incubator price Kenya',
    'neonatal resuscitaire Kenya',
    'ICU mechanical ventilator price Kenya',
    'patient monitor 5 and 7 parameter Kenya',
    'medical equipment supplier Kisumu Nairobi',
    'hospital department setup Kenya',
  ],
  alternates: {
    canonical: '/products/others',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: `${SITE_CONFIG.url}/products/others`,
    title: 'Specialized Hospital Equipment: Dental, Theatre, Maternity & ICU Kenya | Medwise',
    description:
      'Verified clinical equipment suites for Dental, Operating Theatre, Maternity (Newborn Unit), and Intensive Care Unit (ICU) with warranty and technical engineering support.',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Medwise Specialized Hospital Department Equipment Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialized Hospital Department Equipment Kenya | Medwise',
    description:
      'Turnkey equipment suites for Dental, Operating Theatre, Maternity (NBU), and ICU with transparent quotations and WhatsApp consultation.',
    images: [SITE_CONFIG.ogImage],
  },
};

const othersFaqs = [
  {
    question: 'What equipment is included in your Dental department package?',
    answer:
      'Our complete dental operatory package includes ergonomic motorized dental chairs with integrated silent oil-free medical air compressors, cordless LED light cure units, high-frequency digital dental X-ray machines, ultrasonic piezoelectric scalers, Class B vacuum autoclaves, high and low-speed handpiece sets, and surgical oral evacuation suction units.',
  },
  {
    question: 'What equipment is required for an Operating Theatre (OT) in Kenya?',
    answer:
      'Standard operating theatre requirements include an anaesthesia workstation with integrated ventilator and dual vaporizers, multi-parameter patient monitors (5 and 7 parameter with mobile roll stands or wall mounts), electro-hydraulic or hydraulic operating tables, shadowless single or double-arm LED theatre lights, heavy-duty single and double bottle suction pumps, and surgical instrument packs (Major D&C, Caesarean section, Laparotomy, and fine suturing).',
  },
  {
    question: 'What essential neonatal equipment is provided for Maternity & Newborn Units (NBU)?',
    answer:
      'To prevent neonatal hypothermia and birth asphyxia, our maternity and newborn unit suites feature microprocessor servo-controlled infant radiant baby warmers, neonatal baby incubators, complete Resuscitaire units with T-piece resuscitators and oxygen blenders, intense LED neonatal jaundice phototherapy lamps, dedicated neonatal pulse oximeters, CTG fetal monitors, and multi-function obstetric delivery beds.',
  },
  {
    question: 'What critical care machinery is provided for Intensive Care Units (ICU)?',
    answer:
      'Our ICU and HDU critical care suites encompass invasive and non-invasive ICU mechanical ventilators (with High-Flow Nasal Cannula therapy), modular multi-parameter patient monitors (with IBP and EtCO2), stackable syringe and volumetric infusion pumps, biphasic defibrillators with pacing, 5-function electric motorized ICU beds with CPR release and anti-decubitus air mattresses, and point-of-care Arterial Blood Gas (ABG) analyzers.',
  },
  {
    question: 'Do you offer biomedical installation, medical gas pipeline connection, and staff training?',
    answer:
      'Yes. Medwise biomedical engineers oversee complete mechanical and electrical unboxing, installation, medical gas piping/manifold connection checks, electrical safety leakage testing, and hands-on operational training for your hospital doctors, nurses, and clinical technologists across all 47 counties in Kenya.',
  },
];

export default function OthersProductsPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Others (Dental, Theatre, Maternity, ICU)', url: '/products/others' },
  ]);

  const faqLd = getFaqSchema(othersFaqs);

  // Structured ItemList schema for SEO rich snippet
  const othersListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Specialized Clinical Department Equipment Suites Kenya (Dental, Theatre, Maternity, ICU)',
    itemListElement: OTHER_PRODUCTS_CATALOG.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        description: item.description,
        category: item.department,
        url: `${SITE_CONFIG.url}/products/others#${item.id}`,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'KES',
          lowPrice: '50000',
          offerCount: item.constituents.length.toString(),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(othersListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Header & Breadcrumbs Section */}
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
            <span className="text-foreground font-semibold">Others (Dental, Theatre, Maternity, ICU)</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="chip-label inline-flex items-center gap-2">
                <Layers className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Hospital Clinical Department Suites Kenya</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Specialized Department Equipment
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Turnkey equipment solutions for Dental operatory, Operating Theatre (OT), Maternity &amp; Newborn Unit (NBU), and Intensive Care Units (ICU). Sourced with manufacturer warranty, onsite biomedical installation, and clinical operator training.
              </p>
            </div>

            {/* Quick Navigation Between Product Catalogs */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/products"
                className="btn-pill-secondary inline-flex items-center gap-2 shadow-xs text-xs font-semibold"
              >
                <Cpu className="h-4 w-4 text-primary shrink-0" />
                <span>1. Machinery Catalog</span>
              </Link>

              <Link
                href="/products/consumables"
                className="btn-pill-secondary inline-flex items-center gap-2 shadow-xs text-xs font-semibold"
              >
                <PackageCheck className="h-4 w-4 text-amber-600 shrink-0" />
                <span>2. Consumables &amp; Reagents</span>
              </Link>
            </div>
          </div>

          {/* Department Quick Jump Cards */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border">
            <a
              href="#dental"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-blue-500 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-foreground block group-hover:text-blue-700">
                  Dental Suite
                </span>
                <span className="text-[10px] text-muted-foreground">Chairs, X-Ray, Lightcure</span>
              </div>
            </a>

            <a
              href="#theatre"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-indigo-500 hover:bg-indigo-50/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Stethoscope className="h-4 w-4" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-foreground block group-hover:text-indigo-700">
                  Theatre Suite
                </span>
                <span className="text-[10px] text-muted-foreground">Anaesthesia, Tables, Lights</span>
              </div>
            </a>

            <a
              href="#maternity"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-pink-500 hover:bg-pink-50/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                <Baby className="h-4 w-4" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-foreground block group-hover:text-pink-700">
                  Maternity &amp; NBU
                </span>
                <span className="text-[10px] text-muted-foreground">Warmers, Incubators, Resuscitaire</span>
              </div>
            </a>

            <a
              href="#icu"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-red-500 hover:bg-red-50/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <HeartPulse className="h-4 w-4" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-foreground block group-hover:text-red-700">
                  ICU Suite
                </span>
                <span className="text-[10px] text-muted-foreground">Ventilators, Monitors, Beds</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Main Interactive Catalog Section */}
      <main className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <OtherProductsCatalogClient />
        </div>
      </main>

      {/* Trust & Guarantee Banner */}
      <section className="bg-white border-y border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[hsl(var(--primary))] flex items-center justify-center shrink-0 border border-blue-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">1-Year Warranty &amp; Calibration</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Every machine includes 12 months full warranty, electrical safety verification, and certified metrological calibration certificates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">Biomedical Installation &amp; Training</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Our certified in-house biomedical engineers deliver, assemble, calibrate, and train your clinical team on equipment operation and maintenance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">Nationwide Field Dispatch</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Rapid transport from our Kisumu Kakamega Road HQ and Nairobi Field Hub directly to your hospital or clinic across all 47 Kenyan counties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="font-semibold text-xs tracking-[0.2em] uppercase text-primary block mb-2">
              EQUIPMENT SOURCING FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Frequently Asked Questions on Department Suites
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
              Clear answers regarding clinical equipment sourcing, facility bill of quantities (BOQ), warranties, and engineering installation in Kenya.
            </p>
          </div>

          <div className="space-y-4">
            {othersFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-white p-6 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base text-foreground">{faq.question}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Inquire CTA Box */}
          <div className="mt-12 rounded-3xl bg-[hsl(var(--primary))] text-white p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              Setting Up or Upgrading a Clinical Department in Kenya?
            </h3>
            <p className="text-sm text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
              Consult with our independent biomedical engineers to receive a brand-neutral equipment bill of quantities (BOQ) tailored to your clinical throughput and facility budget.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20request%20a%20quotation%20for%20hospital%20department%20equipment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-full bg-white text-[hsl(var(--primary))] font-bold text-xs inline-flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat with Biomedical Engineer via WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="h-11 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors border border-white/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.telephone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
