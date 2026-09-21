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

      {/* Header - Clean Editorial White Design */}
      <section className="bg-white text-foreground py-14 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-foreground font-semibold">Contact Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="chip-label inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Direct Biomedical Helpline • Kisumu HQ &amp; Nairobi Hub, Kenya</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Get in Touch with Medwise Technical Consulting
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Have questions about medical device selection, routine repairs (like Zybio Z3 hematology analyzers), calibration schedules, or facility setup? We are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Direct Contact Cards (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-border shadow-xs space-y-6">
                <h2 className="text-xl font-extrabold text-foreground border-b border-border pb-4">
                  Direct Contact &amp; Location
                </h2>

                <div className="space-y-6 text-sm text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-foreground block">Locations &amp; Hubs:</span>
                      <p className="text-slate-700 font-medium">
                        📍 <strong className="font-semibold text-foreground">Kisumu Main HQ:</strong> Kisumu Kakamega Road, Kisumu, Kenya
                      </p>
                      <p className="text-slate-500 font-medium">
                        📍 <strong className="font-semibold text-foreground">Nairobi Hub:</strong> Nairobi Region, Kenya (Rapid Field Dispatch)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">Phone Helplines:</span>
                      <div className="mt-0.5 space-x-2">
                        <a href={`tel:${SITE_CONFIG.telephone}`} className="text-primary font-bold hover:underline">
                          {SITE_CONFIG.telephone}
                        </a>
                        <span className="text-slate-400">/</span>
                        <a href={`tel:${SITE_CONFIG.altTelephone}`} className="text-primary font-bold hover:underline">
                          {SITE_CONFIG.altTelephone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">WhatsApp Direct:</span>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline block mt-0.5"
                      >
                        +254 117 233 522 (Instant Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">Email Inquiries:</span>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary font-semibold hover:underline block mt-0.5">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-3 border-t border-border">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-slate-600 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">Operating Hours:</span>
                      <p className="text-slate-600 text-xs mt-0.5 font-normal">
                        Mon – Fri: 8:00 AM – 5:00 PM | Sat: 9:00 AM – 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support Card - Vivid Blue Banner */}
              <div className="rounded-3xl bg-primary p-8 sm:p-9 text-white space-y-4 shadow-xl relative overflow-hidden">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>24/7 Field Support</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">Need Urgent Field Technical Support?</h3>
                <p className="text-sm text-white/80 leading-relaxed font-normal">
                  Our qualified biomedical technicians dispatch rapidly across Kisumu, Sagana, Nairobi, and healthcare facilities nationwide.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=URGENT%3A%20Biomedical%20Technical%20Support%20Required`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 py-3.5 px-6 text-sm font-bold text-white transition-colors shadow-md min-h-[44px]"
                  >
                    <MessageSquare className="h-4 w-4 fill-white" />
                    <span>WhatsApp Emergency Engineer</span>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.telephone}`}
                    className="btn-pill-ghost text-center py-3.5 text-sm"
                  >
                    <span>Call {SITE_CONFIG.telephone}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Request Consultation Form & Map (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Interactive Consultation Form */}
              <ContactForm />

              {/* Google Map Location Frame */}
              <div className="rounded-3xl bg-white p-8 border border-border shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Office Location &amp; Google Maps</h3>
                    <p className="text-xs text-slate-500">Kisumu Kakamega Road (HQ) | Nairobi Hub Coverage</p>
                  </div>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-secondary text-xs inline-flex items-center gap-1.5 w-fit py-2 px-4"
                  >
                    <span>Open in Google Maps</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-muted/40">
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs text-slate-600 font-medium">
                  <p>📍 Kisumu Kakamega Road, Kisumu, Kenya.</p>
                  <p className="text-slate-400 font-mono">Coordinates: -0.0917° S, 34.7680° E</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
