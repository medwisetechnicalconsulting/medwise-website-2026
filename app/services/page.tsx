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
        alt: `${SITE_CONFIG.name} — Technical Services & Medical Calibration`,
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

      {/* Services Hero Header - Clean Light Design */}
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-slate-50 text-slate-900 py-16 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              <span>Biomedical Engineering Excellence</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Our Technical Services & Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Medwise Technical Consulting provides comprehensive end-to-end support throughout the medical device lifecycle. From initial technical feasibility to routine metrological calibration, we protect your clinical investments.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-16 sm:py-24 bg-slate-50 space-y-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Service 1: Pre-Purchase Consulting */}
          <div id="consulting" className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md">
                  <FileSearch className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Pre-Purchase Consulting & Needs Assessment</h2>
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Independent Advisory & Specification Drafting</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Pre-Purchase%20Consulting`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Consult an Engineer</span>
              </a>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Selecting medical equipment requires evaluating clinical workflow, expected patient volume, space constraints, power stability, and total cost of ownership. Our biomedical engineering team conducts thorough site readiness audits, creates technical RFP specifications, and evaluates vendor quotes neutrally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {[
                'Workload & throughput modeling',
                'Power & radiation safety evaluation',
                'Multi-vendor specification comparison',
                'ROI & total cost of ownership (TCO)',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3.5 border border-slate-200/80 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 2: Equipment Sourcing & Supply */}
          <div id="sourcing" className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md">
                  <ShoppingCart className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Quality Medical Device Sourcing & Supply</h2>
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Multi-Category Procurement Across Kenya</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20Equipment%20Sourcing`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Request Equipment Quote</span>
              </a>
            </div>

            {/* Prominent Neutrality Disclaimer */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4 text-sm text-blue-950 font-semibold">
              💡 <strong>Neutral Advisory Commitment:</strong> We supply equipment, but our first job is to advise you neutrally. We never push proprietary single-brand sales margins over your clinic’s actual clinical requirements.
            </div>

            <p className="text-slate-700 leading-relaxed">
              We leverage our extensive relationships with trusted international manufacturers to supply high-performance equipment across major healthcare verticals:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Imaging & Radiology</h3>
                <p className="text-xs text-slate-600">Digital DR X-Ray generators, Flat Panel Detectors, Ultrasound systems, Mammography, and CR readers.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Laboratory & Diagnostics</h3>
                <p className="text-xs text-slate-600">Automated 3-part / 5-part Hematology analyzers (such as Zybio Z3), Clinical Chemistry, Binocular Microscopes, Centrifuges, and Incubators.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">ICU, Theatre & Maternity</h3>
                <p className="text-xs text-slate-600">Patient vital sign monitors, Defibrillators, Anesthesia machines, Suction units, Fetal Dopplers, and Infant Incubators.</p>
              </div>
            </div>
          </div>

          {/* Service 3: Installation & Calibration */}
          <div id="installation" className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md">
                <Settings className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">Seamless Installation & Precision Calibration</h2>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Certified Metrological Accuracy</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Proper installation and baseline calibration prevent premature device failure and clinical errors. Our qualified biomedical engineers execute physical positioning, electrical safety checks, and metrological adjustment using certified simulator tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Power conditioning & AVR setup',
                'Metrological simulator calibration',
                'Quality Control (QC) verification',
                'Radiation shielding safety audits',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3.5 border border-slate-200/80 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 4: Staff Training */}
          <div id="training" className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">Clinical & Laboratory Staff Operational Training</h2>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Empowering Your Team for Maximum Uptime</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Equipment is only as effective as the hands operating it. We deliver hands-on operational training for doctors, radiographers, nurses, and laboratory technologists. We train your personnel on routine workflows, daily quality control checks, reagent preparation, and basic user troubleshooting.
            </p>
          </div>

          {/* Service 5: Maintenance & Service */}
          <div id="maintenance" className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md">
                <Activity className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">Comprehensive Maintenance, Service & QC Analysis</h2>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Proactive Technical Support & Rapid Repair</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Our core business revolves around providing exceptional after-sales support and ongoing maintenance. We offer tailored Preventive Maintenance Contracts (PMC), rapid emergency field dispatch (like motor drive board repairs), genuine replacement components, and documented quality control verification.
            </p>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
