'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Building2, Wrench, Quote, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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

        {/* Auto-Sliding Interactive Testimonial Carousel */}
        <div
          className="mt-12 max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6 relative"
            >
              {/* Rating Stars & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">5.0 / 5.0 Rating</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-700" />
                  <span>{testimonials[currentIndex].verifiedBadge}</span>
                </span>
              </div>

              <Quote className="h-10 w-10 text-blue-200 fill-blue-50" />

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Service Details */}
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80 text-xs sm:text-sm space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Wrench className="h-4 w-4 text-blue-700 shrink-0" />
                  <span>{testimonials[currentIndex].servicePerformed}</span>
                </div>
                <p className="text-xs text-slate-600 font-semibold">
                  Lead Technician: {testimonials[currentIndex].technician}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white font-bold shadow-xs">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      {testimonials[currentIndex].facility}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-blue-700' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Previous / Next Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-300 text-slate-700 shadow-xs hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="text-xs font-bold text-slate-500 font-mono">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-300 text-slate-700 shadow-xs hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
