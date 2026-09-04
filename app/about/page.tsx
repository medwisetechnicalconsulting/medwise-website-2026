import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Award, Wrench, Users, HeartHandshake, Heart } from 'lucide-react';
import { getBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo/schema';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us | Medwise Technical Consulting Kenya',
  description:
    'Learn about Medwise Technical Consulting in Kisumu and Nairobi, our biomedical engineering team, and our mission to provide independent medical device advice and maintenance across Kenya.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Medwise Technical Consulting: Independent Biomedical Engineering Kenya',
    description:
      'Biomedical engineering firm dedicated to independent medical device advisory, calibration, and equipment maintenance in Kisumu and Nairobi.',
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name}: Biomedical Engineering Team & Mission`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Medwise Technical Consulting: Independent Biomedical Engineering Kenya',
    description:
      'Biomedical engineering firm dedicated to independent medical device advisory, calibration, and equipment maintenance in Kisumu and Nairobi.',
  },
};

export default function AboutPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* About Hero Header - Clean Editorial Design */}
      <section className="bg-slate-50 text-slate-900 py-14 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              <span>Biomedical Engineering Led • Kisumu HQ & Nairobi Field Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Technical Knowledge and Field Support for Kenyan Healthcare
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At Medwise Technical Consulting, our biomedical engineering team provides technical advisory and field services to help clinics, county hospitals, and private diagnostic laboratories evaluate, install, calibrate, and maintain medical equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mission & Pillars */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Our Core Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Supporting Diagnostic Labs & Hospitals Across Kenya
            </h2>
            <p className="text-sm text-slate-600">
              Our engineering team handles pre-purchase technical assessments, equipment commissioning, preventative maintenance, and metrology calibration so your clinical analyzers deliver dependable results every test cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl bg-slate-50 p-8 border border-slate-200 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white font-bold text-lg shadow-xs">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">Objective Advisory</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide comparative technical guidance so healthcare facilities procure the right laboratory and diagnostic machines at honest market prices without single-brand sales pressure.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-8 border border-slate-200 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white font-bold text-lg shadow-xs">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">Reliable Field Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Handling physical commissioning, manufacturer-spec preventive maintenance schedules, and precise optics and fluidics calibration for clinical analyzers.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-8 border border-slate-200 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white font-bold text-lg shadow-xs">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">Lifecycle Management</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Structuring maintenance service level agreements (SLAs), open-reagent guidance, and operator training to keep equipment operational and avoid costly idle time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Why Healthcare Facilities Choose Medwise */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Healthcare Facilities Partner With Medwise
            </h2>
            <p className="text-sm text-slate-600">
              Built on biomedical engineering qualifications and practical field experience in Kenyan facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-white p-8 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0 border border-blue-100">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Qualified Biomedical Engineers</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our technical specialists possess practical field experience servicing hematology, biochemistry, and ultrasound equipment, ensuring objective advice based on actual performance in Kenyan lab environments.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0 border border-blue-100">
                <HeartHandshake className="h-6 w-6 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Neutral Equipment Evaluation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We evaluate your patient throughput, electrical supply stability, and reagent access to recommend medical devices that match your actual budget and operating capacity.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0 border border-blue-100">
                <Wrench className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Preventive Maintenance Focus</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Regular planned servicing and optical/sensor calibration reduce emergency breakdown risks, preserving equipment life and preventing diagnostic delays for patients.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0 border border-blue-100">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Direct Engineering Access</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When you call or WhatsApp Medwise, you speak directly with practicing biomedical technicians who understand sample preparation, fluidic blockages, and error codes.
                </p>
              </div>
            </div>
          </div>

          {/* Real Company Office Details */}
          <div className="rounded-xl border border-slate-300 bg-white p-8 text-center space-y-2 shadow-xs">
            <span className="text-xs font-mono text-blue-800 font-bold uppercase tracking-widest block">
              Medwise Technical Consulting • Kisumu HQ & Nairobi Regional Hub
            </span>
            <p className="text-xs text-slate-700 max-w-xl mx-auto">
              Our engineering team operates from <strong>Kisumu Kakamega Road, Kisumu</strong> and <strong>Nairobi, Kenya</strong>, serving healthcare facilities, county hospitals, and private laboratories nationwide.
            </p>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
