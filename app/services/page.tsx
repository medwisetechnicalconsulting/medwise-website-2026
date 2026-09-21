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

      {/* Services Hero Header - Clean Editorial Design */}
      <section className="bg-[#F8FAFC] text-slate-900 py-14 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold text-[#0F2942] shadow-xs">
              <ShieldCheck className="h-4 w-4 text-[#DC2626]" />
              <span>Biomedical Engineering Field Services • Kisumu &amp; Nairobi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Technical Services &amp; Medical Equipment Support
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Medwise Technical Consulting provides structured biomedical engineering support across the medical device lifecycle. From pre-purchase clinical workflow feasibility to scheduled metrology calibration, we protect your capital equipment investments.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-16 sm:py-24 bg-white space-y-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Service 1: Pre-Purchase Consulting */}
          <div id="consulting" className="rounded-xl bg-[#F8FAFC] p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F2942] text-white shadow-xs">
                  <FileSearch className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Pre-Purchase Consulting &amp; Technical Audits</h2>
                  <p className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Independent Advisory &amp; Specification Drafting</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Pre-Purchase%20Consulting`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-4 py-2.5 text-xs font-bold text-white transition-colors shadow-xs min-h-[44px]"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Consult an Engineer</span>
              </a>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              Selecting medical equipment requires evaluating clinical workflow, expected patient volume, space constraints, power stability, and total cost of ownership. Our biomedical engineering team conducts thorough site readiness audits, creates technical RFP specifications, and evaluates vendor quotes neutrally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
              {[
                'Workload & throughput modeling',
                'Power & electrical safety evaluation',
                'Multi-vendor specification comparison',
                'Consumable cost & total cost of ownership',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-white p-3.5 border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 2: Equipment Sourcing & Supply */}
          <div id="sourcing" className="rounded-xl bg-[#F8FAFC] p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F2942] text-white shadow-xs">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Medical Device Procurement &amp; Sourcing</h2>
                  <p className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Direct Delivery Across Kenya with Warranty</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Equipment%20Sourcing`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-4 py-2.5 text-xs font-bold text-white transition-colors shadow-xs min-h-[44px]"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Request Equipment Quote</span>
              </a>
            </div>

            {/* Prominent Neutrality Disclaimer */}
            <div className="rounded-lg border border-slate-300 bg-white p-4 text-xs sm:text-sm text-slate-800 font-medium shadow-2xs">
              <strong className="text-[#0F2942] font-bold">Neutral Advisory Commitment:</strong> We supply equipment, but our primary duty is objective guidance. We do not push locked, single-brand distributorships over your laboratory’s clinical reality.
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              We leverage direct supply channels to provide verified clinical instruments with manufacturer warranty and local spare parts availability:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-lg bg-white p-5 border border-slate-200 space-y-2 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm">Imaging &amp; Radiology</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Digital DR X-Ray generators, Flat Panel Detectors, Ultrasound systems, Mammography, and CR readers.</p>
              </div>

              <div className="rounded-lg bg-white p-5 border border-slate-200 space-y-2 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm">Laboratory &amp; Diagnostics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Automated 3-part and 5-part Hematology analyzers, Clinical Chemistry analyzers, Centrifuges, and LED Microscopes.</p>
              </div>

              <div className="rounded-lg bg-white p-5 border border-slate-200 space-y-2 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm">ICU, Theatre &amp; Maternity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Multiparameter patient monitors, Defibrillators, Surgical suction machines, Fetal Dopplers, and Infant Warmers.</p>
              </div>
            </div>
          </div>

          {/* Service 3: Installation & Calibration */}
          <div id="installation" className="rounded-xl bg-[#F8FAFC] p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F2942] text-white shadow-xs">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Installation, Commissioning &amp; Metrology Calibration</h2>
                <p className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Certified Metrological Accuracy &amp; Electrical Safety</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              Proper installation and baseline calibration prevent premature component wear and diagnostic errors. Our qualified biomedical engineers execute physical positioning, earth ground verification, and metrological adjustment using calibrated measurement tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {[
                'Power conditioning & AVR setup',
                'Metrological simulator calibration',
                'Quality Control (QC) run validation',
                'Radiation shielding safety audits',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-white p-3.5 border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 4: Staff Training */}
          <div id="training" className="rounded-xl bg-[#F8FAFC] p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F2942] text-white shadow-xs">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Clinical &amp; Laboratory Operator Training</h2>
                <p className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Standard Operating Procedures &amp; Quality Control Workflows</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              Equipment is only as reliable as the personnel operating it. We deliver hands-on operational training for radiographers, laboratory technologists, and nursing teams covering daily startup protocols, calibration verification, reagent management, and frontline troubleshooting.
            </p>
          </div>

          {/* Service 5: Maintenance & Service */}
          <div id="maintenance" className="rounded-xl bg-[#F8FAFC] p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F2942] text-white shadow-xs">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Preventative Maintenance &amp; Field Breakdown Service</h2>
                <p className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Planned Servicing, Diagnostics &amp; Rapid Response</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              Our core engineering operations center on dependable technical support and scheduled servicing. We provide structured Service Level Agreements (SLAs), emergency breakdown dispatch, genuine spare parts replacement, and documented quality control verifications.
            </p>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
