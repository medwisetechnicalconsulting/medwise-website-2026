import type { Metadata } from 'next';
import { ShieldCheck, Award, Wrench, Users, HeartHandshake } from 'lucide-react';
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

      {/* About Hero Header - Clean Editorial White Design */}
      <section className="bg-white text-foreground py-14 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-foreground font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="chip-label inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Biomedical Engineering Led • Kisumu HQ &amp; Nairobi Field Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Technical Knowledge and Field Support for Kenyan Healthcare
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              At Medwise Technical Consulting, our biomedical engineering team provides technical advisory and field services to help clinics, county hospitals, and private diagnostic laboratories evaluate, install, calibrate, and maintain medical equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mission & Pillars */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="chip-label inline-flex items-center">
              Our Core Mission
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Supporting Diagnostic Labs &amp; Hospitals Across Kenya
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our engineering team handles pre-purchase technical assessments, equipment commissioning, preventative maintenance, and metrology calibration so your clinical analyzers deliver dependable results every test cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-3xl bg-muted/30 p-8 sm:p-10 border border-border space-y-4 shadow-xs hover:bg-white hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-foreground">Objective Advisory</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We provide comparative technical guidance so healthcare facilities procure the right laboratory and diagnostic machines at honest market prices without single-brand sales pressure.
              </p>
            </div>

            <div className="rounded-3xl bg-muted/30 p-8 sm:p-10 border border-border space-y-4 shadow-xs hover:bg-white hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-foreground">Reliable Field Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Handling physical commissioning, manufacturer-spec preventive maintenance schedules, and precise optics and fluidics calibration for clinical analyzers.
              </p>
            </div>

            <div className="rounded-3xl bg-muted/30 p-8 sm:p-10 border border-border space-y-4 shadow-xs hover:bg-white hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-foreground">Lifecycle Management</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Structuring maintenance service level agreements (SLAs), open-reagent guidance, and operator training to keep equipment operational and avoid costly idle time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Why Healthcare Facilities Choose Medwise */}
      <section className="py-16 sm:py-24 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="chip-label inline-flex items-center">
              Our Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Why Healthcare Facilities Partner With Medwise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Built on biomedical engineering qualifications and practical field experience in Kenyan facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-3xl bg-white p-7 sm:p-9 border border-border shadow-xs flex items-start gap-5 hover:shadow-md transition-all duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground">Qualified Biomedical Engineers</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our technical specialists possess practical field experience servicing hematology, biochemistry, and ultrasound equipment, ensuring objective advice based on actual performance in Kenyan lab environments.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 sm:p-9 border border-border shadow-xs flex items-start gap-5 hover:shadow-md transition-all duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                <HeartHandshake className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground">Neutral Equipment Evaluation</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  We evaluate your patient throughput, electrical supply stability, and reagent access to recommend medical devices that match your actual budget and operating capacity.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 sm:p-9 border border-border shadow-xs flex items-start gap-5 hover:shadow-md transition-all duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground">Preventive Maintenance Focus</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Regular planned servicing and optical/sensor calibration reduce emergency breakdown risks, preserving equipment life and preventing diagnostic delays for patients.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 sm:p-9 border border-border shadow-xs flex items-start gap-5 hover:shadow-md transition-all duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground">Direct Engineering Access</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  When you call or WhatsApp Medwise, you speak directly with practicing biomedical technicians who understand sample preparation, fluidic blockages, and error codes.
                </p>
              </div>
            </div>
          </div>

          {/* Real Company Office Details */}
          <div className="rounded-3xl border border-primary/20 bg-primary-light/40 p-8 sm:p-10 text-center space-y-3 shadow-xs">
            <span className="text-xs text-primary font-bold uppercase tracking-widest block">
              Medwise Technical Consulting • Kisumu HQ &amp; Nairobi Regional Hub
            </span>
            <p className="text-sm text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              Our engineering team operates from <strong className="font-semibold text-foreground">Kisumu Kakamega Road, Kisumu</strong> and <strong className="font-semibold text-foreground">Nairobi, Kenya</strong>, serving healthcare facilities, county hospitals, and private laboratories nationwide.
            </p>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
