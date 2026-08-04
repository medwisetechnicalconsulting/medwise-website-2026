'use client';

import { Phone, MessageSquare, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { SITE_CONFIG, getBreadcrumbSchema } from '@/lib/seo/schema';

export default function ContactPage() {
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Direct Biomedical Helpline</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Get in Touch with Our Biomedical Engineers
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about medical device selection, calibration schedules, or facility setup? We are ready to assist you.
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
              
              <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Direct Contact & Location
                </h2>

                <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Physical Address:</span>
                      <p className="text-slate-600">
                        {SITE_CONFIG.address.streetAddress}, {SITE_CONFIG.address.addressLocality}, {SITE_CONFIG.address.addressRegion}, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Phone Helpline:</span>
                      <a href={`tel:${SITE_CONFIG.telephone}`} className="text-emerald-700 font-semibold hover:underline">
                        {SITE_CONFIG.telephone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">WhatsApp Direct:</span>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-semibold hover:underline"
                      >
                        +254 700 000 000 (Instant Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Email Inquiries:</span>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-700 font-semibold hover:underline">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 shrink-0">
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

              {/* Instant Action CTA Card */}
              <div className="rounded-3xl bg-slate-900 p-8 text-white space-y-4 shadow-lg">
                <h3 className="text-lg font-bold text-white">Need Urgent Technical Support?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our emergency response team assists healthcare facilities in Nairobi and across Kenya with critical device downtime.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=URGENT%3A%20Biomedical%20Technical%20Support%20Required`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 fill-slate-950 stroke-none" />
                    <span>WhatsApp Emergency Support</span>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.telephone}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 py-3 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-emerald-400" />
                    <span>Call Helpline Direct</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Request Consultation Form & Map (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Interactive Consultation Form */}
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Request a Free 15-Minute Technical Consultation</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below or chat on WhatsApp for an immediate response.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Jane Omondi"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Facility / Clinic Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. St. Jude Healthcare Centre"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+254 7XX XXX XXX"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        placeholder="info@yourclinic.co.ke"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Service Category Needed *</label>
                    <select className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none bg-white">
                      <option>Pre-Purchase Consulting & Equipment Selection</option>
                      <option>Medical Device Sourcing & Procurement</option>
                      <option>Device Installation & Room Setup</option>
                      <option>Calibration & Quality Control Verification</option>
                      <option>Staff Training & Operational Support</option>
                      <option>Preventive Maintenance & Repairs</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">How can our engineers help your facility?</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your equipment requirements, timeline, or current challenges..."
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                    ></textarea>
                  </div>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20request%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Submit Consultation Request via WhatsApp</span>
                  </a>
                </form>
              </div>

              {/* Google Map Location Frame */}
              <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900">Google Business Profile Location Map</h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200">
                  <iframe
                    title="Medwise Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127638.16335198083!2d36.7028148!3d-1.3963283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0436d6541fcd%3A0x889dfefecdd82069!2sRongai%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-slate-500">
                  📍 Langata Rongai Road, Rift Valley Province, Kenya.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
