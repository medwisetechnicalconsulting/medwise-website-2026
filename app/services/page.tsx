import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileSearch, 
  ShoppingCart, 
  Settings, 
  GraduationCap, 
  Activity, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck 
} from 'lucide-react';
import { SITE_CONFIG, getBreadcrumbSchema } from '@/lib/seo/schema';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Medical Equipment Consulting & Technical Services in Kenya',
  description:
    'Independent pre-purchase advice, equipment sourcing, precision calibration, installation, staff training, and preventive biomedical maintenance across Kisumu, Nairobi, and Kenya.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Medical Equipment Technical Services & Calibration Kenya | Medwise',
    description:
      'Pre-purchase medical device consulting, equipment sourcing, certified metrological calibration, and biomedical preventive maintenance.',
    url: `${SITE_CONFIG.url}/services`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name}: Technical Services & Medical Calibration`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Equipment Technical Services & Calibration Kenya | Medwise',
    description:
      'Pre-purchase medical device consulting, equipment sourcing, certified metrological calibration, and biomedical preventive maintenance.',
  },
};

export default function ServicesPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Services Hero Header - Clean Editorial White Design */}
      <section className="bg-white text-foreground py-14 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-foreground font-semibold">Services</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="chip-label inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Biomedical Engineering Field Services • Kisumu &amp; Nairobi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Technical Services &amp; Medical Equipment Support
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Medwise Technical Consulting provides structured biomedical engineering support across the medical device lifecycle. From pre-purchase clinical workflow feasibility to scheduled metrology calibration, we protect your capital equipment investments.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-16 sm:py-24 bg-muted/30 space-y-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Service 1: Pre-Purchase Consulting */}
          <div id="consulting" className="rounded-3xl bg-white p-8 sm:p-12 border border-border shadow-xs space-y-6 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                  <FileSearch className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">Pre-Purchase Consulting &amp; Technical Audits</h2>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">Independent Advisory &amp; Specification Drafting</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Pre-Purchase%20Consulting`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors shadow-xs min-h-[44px] shrink-0"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Consult an Engineer</span>
              </a>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              Selecting medical equipment requires evaluating clinical workflow, expected patient volume, space constraints, power stability, and total cost of ownership. Our biomedical engineering team conducts thorough site readiness audits, creates technical RFP specifications, and evaluates vendor quotes neutrally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {[
                'Workload & throughput modeling',
                'Power & electrical safety evaluation',
                'Multi-vendor specification comparison',
                'Consumable cost & total cost of ownership',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-2xl bg-muted/50 p-4 border border-border text-xs sm:text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 2: Equipment Sourcing & Supply */}
          <div id="sourcing" className="rounded-3xl bg-white p-8 sm:p-12 border border-border shadow-xs space-y-6 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                  <ShoppingCart className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">Medical Device Procurement &amp; Sourcing</h2>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">Direct Delivery Across Kenya with Warranty</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Equipment%20Sourcing`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors shadow-xs min-h-[44px] shrink-0"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Request Equipment Quote</span>
              </a>
            </div>

            {/* Prominent Neutrality Disclaimer */}
            <div className="rounded-2xl border border-primary/20 bg-primary-light/40 p-5 text-sm text-foreground font-medium">
              <strong className="text-primary font-bold">Neutral Advisory Commitment:</strong> We supply equipment, but our primary duty is objective guidance. We do not push locked, single-brand distributorships over your laboratory’s clinical reality.
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              We leverage direct supply channels to provide verified clinical instruments with manufacturer warranty and local spare parts availability:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl bg-muted/40 p-6 border border-border space-y-2.5">
                <h3 className="font-bold text-foreground text-base">Imaging &amp; Radiology</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">Digital DR X-Ray generators, Flat Panel Detectors, Ultrasound systems, Mammography, and CR readers.</p>
              </div>

              <div className="rounded-2xl bg-muted/40 p-6 border border-border space-y-2.5">
                <h3 className="font-bold text-foreground text-base">Laboratory &amp; Diagnostics</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">Automated 3-part and 5-part Hematology analyzers, Clinical Chemistry analyzers, Centrifuges, and LED Microscopes.</p>
              </div>

              <div className="rounded-2xl bg-muted/40 p-6 border border-border space-y-2.5">
                <h3 className="font-bold text-foreground text-base">ICU, Theatre &amp; Maternity</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">Multiparameter patient monitors, Defibrillators, Surgical suction machines, Fetal Dopplers, and Infant Warmers.</p>
              </div>
            </div>
          </div>

          {/* Service 3: Installation & Calibration */}
          <div id="installation" className="rounded-3xl bg-white p-8 sm:p-12 border border-border shadow-xs space-y-6 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                  <Settings className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">Installation, Commissioning &amp; Metrology Calibration</h2>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">Certified Metrological Accuracy &amp; Electrical Safety</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Installation%20and%20Calibration`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors shadow-xs min-h-[44px] shrink-0"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Book Calibration</span>
              </a>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              Proper installation and baseline calibration prevent premature component wear and diagnostic errors. Our qualified biomedical engineers execute physical positioning, earth ground verification, and metrological adjustment using calibrated measurement tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {[
                'Power conditioning & AVR setup',
                'Metrological simulator calibration',
                'Quality Control (QC) run validation',
                'Radiation shielding safety audits',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-2xl bg-muted/50 p-4 border border-border text-xs sm:text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 4: Staff Training */}
          <div id="training" className="rounded-3xl bg-white p-8 sm:p-12 border border-border shadow-xs space-y-6 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">Clinical &amp; Laboratory Operator Training</h2>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">Standard Operating Procedures &amp; Quality Control Workflows</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Staff%20Training`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors shadow-xs min-h-[44px] shrink-0"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Schedule Training</span>
              </a>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              Equipment is only as reliable as the personnel operating it. We deliver hands-on operational training for radiographers, laboratory technologists, and nursing teams covering daily startup protocols, calibration verification, reagent management, and frontline troubleshooting.
            </p>
          </div>

          {/* Service 5: Maintenance & Service */}
          <div id="maintenance" className="rounded-3xl bg-white p-8 sm:p-12 border border-border shadow-xs space-y-6 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                  <Activity className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">Preventative Maintenance &amp; Field Breakdown Service</h2>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">Planned Servicing, Diagnostics &amp; Rapid Response</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Equipment%20Maintenance%20and%20Breakdown%20Service`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors shadow-xs min-h-[44px] shrink-0"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Request Service</span>
              </a>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              Our core engineering operations center on dependable technical support and scheduled servicing. We provide structured Service Level Agreements (SLAs), emergency breakdown dispatch, genuine spare parts replacement, and documented quality control verifications.
            </p>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
