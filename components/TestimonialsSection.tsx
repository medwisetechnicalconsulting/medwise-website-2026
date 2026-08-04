'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle2, Building2, Wrench, Quote, UserCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function TestimonialsSection() {
  const testimonials = [
    {
      facility: "Thagana County Medical Center",
      location: "Sagana, Kenya",
      servicePerformed: "Zybio Z3 Hematology Analyzer Repair & Motor Board Replacement",
      technician: "Brian Musango (Biomedical Technician)",
      visitDate: "2026-08-04",
      rating: 5,
      quote:
        "When our Zybio Z3 analyzer pump stopped running, Medwise diagnosed the motor drive board issue, replaced the board with exact specifications, and restored the machine to good working condition within 4 hours.",
      verifiedBadge: "Verified Service Report (Visit #2026-08-04)",
    },
    {
      facility: "Kisumu Regional Diagnostic Center",
      location: "Kisumu, Kenya",
      servicePerformed: "Metrological Calibration & Pre-Purchase X-Ray Advisory",
      technician: "Medwise Calibration Engineering Team",
      visitDate: "2026-07-22",
      rating: 5,
      quote:
        "Medwise provided independent pre-purchase advice when we were choosing a digital DR X-Ray system. Their neutral guidance saved us over KSh 800,000 in unneeded vendor add-ons.",
      verifiedBadge: "Verified Facility Advisory",
    },
    {
      facility: "Rift Valley Outpatient Medical Clinic",
      location: "Rift Valley Province, Kenya",
      servicePerformed: "Preventive Maintenance & Staff QC Training",
      technician: "Senior Biomedical Engineer",
      visitDate: "2026-06-15",
      rating: 5,
      quote:
        "Outstanding preventive maintenance service! They trained our lab technologists on daily QC protocols and recalibrated our centrifuges and chemistry analyzers for audit compliance.",
      verifiedBadge: "Verified Maintenance Client",
    },
  ];

  // Schema.org JSON-LD AggregateRating & Review
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '18',
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Organization',
        name: t.facility,
      },
      datePublished: t.visitDate,
      description: t.quote,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating.toString(),
        bestRating: '5',
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Rich SEO JSON-LD Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold text-blue-900 border border-blue-200 shadow-2xs">
            <UserCheck className="h-4 w-4 text-blue-700" />
            <span>Verified Healthcare Facility Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Testimonials & Field Service Reports
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Read real service visit outcomes from healthcare facilities, county medical centers, and diagnostic laboratories across Kenya.
          </p>
        </motion.div>

        {/* 3 Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.facility}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all group"
            >
              <div className="space-y-4">
                {/* Rating Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    <CheckCircle2 className="h-3 w-3 text-blue-700" />
                    <span>{item.verifiedBadge}</span>
                  </span>
                </div>

                <Quote className="h-8 w-8 text-blue-200 fill-blue-50" />

                <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Service Details */}
                <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200/70 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Wrench className="h-3.5 w-3.5 text-blue-700" />
                    <span>{item.servicePerformed}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Technician: {item.technician}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-white font-bold text-xs shadow-xs">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 leading-tight">
                      {item.facility}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
