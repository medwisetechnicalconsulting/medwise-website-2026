import type { Metadata } from 'next';
import { Phone, MessageSquare, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { SITE_CONFIG, getBreadcrumbSchema } from '@/lib/seo/schema';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Medwise Technical Consulting Kenya',
  description:
    'Get in touch with Medwise Technical Consulting on Kisumu Kakamega Road, Kisumu, Kenya for medical device pre-purchase consulting, routine repairs, and calibration services.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Medwise Technical Consulting: Kisumu Kakamega Road',
    description:
      'Direct biomedical engineering helpline for medical device selection, Zybio Z3 analyzer repairs, calibration, and emergency technical support in Kenya.',
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name}: Contact & Office Location`,
      },
    ],
  },
};

export default function ContactPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Header - Clean Editorial Design */}
      <section className="bg-slate-50 text-slate-900 py-14 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              <span>Direct Biomedical Helpline • Kisumu (HQ) & Nairobi, Kenya</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Get in Touch with Medwise Technical Consulting
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have questions about medical device selection, routine repairs (like Zybio Z3 hematology analyzers), calibration schedules, or facility setup? We are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Direct Contact Cards (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="rounded-xl bg-white p-8 border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Direct Contact & Location
                </h2>

                <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 shrink-0 border border-red-100">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 block">Locations & Offices:</span>
                      <p className="text-slate-700 font-semibold">
                        📍 <strong>Kisumu Main HQ:</strong> Kisumu Kakamega Road, Kisumu, Kenya
                      </p>
                      <p className="text-slate-600 font-medium">
                        📍 <strong>Nairobi Hub:</strong> Nairobi Region, Kenya (Consultation & Rapid Dispatch)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0 border border-blue-100">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Phone Helplines:</span>
                      <a href={`tel:${SITE_CONFIG.telephone}`} className="text-blue-700 font-bold hover:underline font-mono">
                        {SITE_CONFIG.telephone}
                      </a> / <a href={`tel:${SITE_CONFIG.altTelephone}`} className="text-blue-700 font-bold hover:underline font-mono">
                        {SITE_CONFIG.altTelephone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">WhatsApp Direct:</span>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline font-mono"
                      >
                        +254 117 233 522 (Instant Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0 border border-blue-100">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Email Inquiries:</span>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-700 font-bold hover:underline">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Operating Hours:</span>
                      <p className="text-slate-600 text-xs">
                        Mon – Fri: 8:00 AM – 5:00 PM | Sat: 9:00 AM – 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support Card - Clean Blue */}
              <div className="rounded-xl bg-blue-50 border border-blue-200 p-8 text-slate-900 space-y-4 shadow-xs">
                <h3 className="text-lg font-extrabold text-blue-950">Need Urgent Field Technical Support?</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Our qualified biomedical technicians dispatch rapidly across Kisumu, Sagana, Nairobi, and healthcare facilities nationwide.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=URGENT%3A%20Biomedical%20Technical%20Support%20Required`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp Technical Support</span>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.telephone}`}
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 text-xs font-bold text-slate-900 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    <Phone className="h-4 w-4 text-red-600" />
                    <span>Call {SITE_CONFIG.telephone}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Request Consultation Form & Map (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Interactive Consultation Form Client Component */}
              <ContactForm />

              {/* Google Map Location Frame */}
              <div className="rounded-xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Office Location & Google Maps</h3>
                    <p className="text-xs text-slate-500">Kisumu Kakamega Road (HQ) | Nairobi Hub Coverage</p>
                  </div>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100 transition-colors border border-blue-200 w-fit"
                  >
                    <span>Open in Google Maps</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-slate-200">
                  <iframe
                    title="Medwise Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817342!2d34.768!3d-0.0917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4c575cf26d9%3A0xb35a0f624d77b587!2sKisumu%20Kakamega%20Rd%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-slate-600 font-medium">
                  <p>📍 Kisumu Kakamega Road, Kisumu, Kenya.</p>
                  <p className="text-slate-500">Coordinates: -0.0917° S, 34.7680° E</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
