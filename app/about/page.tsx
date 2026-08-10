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
    title: 'About Medwise Technical Consulting — Independent Biomedical Engineering Kenya',
    description:
      'Biomedical engineering firm dedicated to independent medical device advisory, calibration, and equipment maintenance in Kisumu and Nairobi.',
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Biomedical Engineering Team & Mission`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Medwise Technical Consulting — Independent Biomedical Engineering Kenya',
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

      {/* About Hero Header - Clean Light Design */}
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-slate-50 text-slate-900 py-16 lg:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              <span>Biomedical Engineering Founded & Led • Kisumu HQ & Nairobi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Knowledge and Access for Healthcare Excellence
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At Medwise Technical Consulting, we are dedicated to providing proactive technical support that empowers healthcare facilities in Kenya to make informed decisions about high-value medical devices.
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
              Empowering Clinics & Hospitals Across Kenya
            </h2>
            <p className="text-sm text-slate-600">
              Our commitment extends beyond mere consultation—we ensure seamless installation, maintenance, and calibration, guaranteeing that your medical devices deliver accurate, reliable results when it matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white font-bold text-lg shadow-md">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">Expert Guidance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Providing knowledge that enables healthcare facilities to acquire the right laboratory and diagnostic devices at competitive prices without brand bias.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white font-bold text-lg shadow-md">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">Seamless Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ensuring flawless installation, comprehensive preventive maintenance, and precise calibration for all medical devices.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white font-bold text-lg shadow-md">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">Exceptional Service</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Delivering tailored technical solutions that guarantee optimal performance, maximum uptime, and long-term investment value.
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
              Why Healthcare Facilities Choose Medwise
            </h2>
            <p className="text-sm text-slate-600">
              Built on biomedical engineering expertise and a commitment to technical integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Unmatched Expertise</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our team of biomedical engineers and technical specialists possess deep understanding of medical devices and laboratory equipment, ensuring you receive the best guidance and support.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <HeartHandshake className="h-6 w-6 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Customised Solutions</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We take time to thoroughly understand your needs, constraints, and expectations, providing bespoke solutions that align perfectly with your budget whilst delivering exceptional performance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <Wrench className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Guaranteed Maintenance</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our core business revolves around providing exceptional maintenance and after-sales support, ensuring ongoing assistance, peace of mind, and maximum uptime for your critical devices.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Experienced Engineering Team</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every member of our staff, across all departments, brings biomedical engineering qualifications or application-related experience, guaranteeing expert advice at every touchpoint.
                </p>
              </div>
            </div>
          </div>

          {/* Real Company Office Details */}
          <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-8 text-center space-y-2">
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
