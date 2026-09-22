'use client';

import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';

interface TestimonialReview {
  quote: string;
  name: string;
  role: string;
  facility: string;
  location: string;
  equipment: string;
  rating: number;
  initials: string;
  bgGradient: string;
}

export default function TestimonialsSection() {
  // Synchronized 1-to-1 with fieldwork engineering projects
  const reviews: TestimonialReview[] = [
    {
      quote:
        'Medwise handled the complete installation and commissioning of our Urit CA 200 Biochemistry and Electrolyte Analyzer at Narok County Referral Hospital. Their engineers also conducted thorough hands-on operational training with our laboratory technologists, ensuring our daily sample analysis started smoothly and on schedule.',
      name: 'Dr. Dennis M.',
      role: 'Chief Medical Superintendent',
      facility: 'Narok County Referral Hospital',
      location: 'Narok, Kenya',
      equipment: 'Biochemistry (Urit CA 200) & Electrolyte Analyzer',
      rating: 4.9,
      initials: 'DM',
      bgGradient: 'from-blue-600 to-indigo-600',
    },
    {
      quote:
        'We rely on Medwise for routine maintenance services, precision calibration, and quality control of our Excbio Hematology Analyzer here in Kakamega. Their biomedical engineers are punctual, detail-oriented, and ensure our test results remain strictly calibrated and reliable for patient care.',
      name: 'Sister Mary K.',
      role: 'Laboratory In-Charge',
      facility: 'Lukanji Medical Centre',
      location: 'Kakamega, Kenya',
      equipment: 'Excbio Hematology Analyzer',
      rating: 4.8,
      initials: 'MK',
      bgGradient: 'from-emerald-600 to-teal-600',
    },
    {
      quote:
        'The Medwise engineering team did an exceptional job servicing our hematology and chemistry analyzers at Unam Medical Centre. They performed comprehensive routine maintenance, fluidics servicing, calibration, and QC checks. Our diagnostic wing has operated with zero downtime since their visit.',
      name: 'Geoffrey O.',
      role: 'Senior Laboratory Technologist',
      facility: 'Unam Medical Centre',
      location: 'Kisumu, Kenya',
      equipment: 'Hematology & Chemistry Analyzers',
      rating: 5.0,
      initials: 'GO',
      bgGradient: 'from-amber-600 to-orange-600',
    },
    {
      quote:
        'Medwise carried out the fresh installation and setup of our Bioelab EC 30 Hematology Analyzer at Kabera Medical Centre. The equipment unboxing, parameter configuration, and initial commissioning runs were executed with great biomedical precision. Highly recommended for clinical installations.',
      name: 'Faith N.',
      role: 'Clinical Operations Director',
      facility: 'Kabera Medical Centre',
      location: 'Kenya',
      equipment: 'Bioelab EC 30 Hematology Analyzer',
      rating: 4.7,
      initials: 'FN',
      bgGradient: 'from-purple-600 to-indigo-600',
    },
  ];

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Medwise Technical Consulting Client Reviews & Verified Feedback',
    itemListElement: reviews.map((rev, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: rev.rating.toString(),
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: rev.name,
          jobTitle: rev.role,
        },
        reviewBody: rev.quote,
        publisher: {
          '@type': 'Organization',
          name: rev.facility,
        },
      },
    })),
  };

  return (
    <section id="reviews" className="bg-white py-20 sm:py-24 px-4 sm:px-8 md:px-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
            CUSTOMER REVIEWS &amp; VERIFIED FEEDBACK
          </span>
          <h2 className="font-extrabold text-[clamp(2rem,3.2vw,2.8rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
            Don&apos;t take our word for it.
          </h2>

          {/* Social Proof Row with Doctor, Technologist & MD Avatars */}
          <div className="inline-flex items-center mt-5 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-full px-4 py-2 shadow-xs">
            <div className="flex items-center shrink-0">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-xs">
                <Image
                  src="/images/services/staff-training.png"
                  alt="Kenyan healthcare doctor"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden relative -ml-2.5 shadow-xs">
                <Image
                  src="/images/services/pre-purchase-consulting.png"
                  alt="Laboratory technologist"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden relative -ml-2.5 shadow-xs flex items-center justify-center text-[10px] font-bold text-[hsl(var(--primary))]">
                <span>MD</span>
              </div>
            </div>

            <div className="flex items-center ml-3 gap-1.5 flex-wrap text-left">
              <span className="font-bold text-sm text-[hsl(var(--foreground))]">★ 4.9</span>
              <span className="font-normal text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                from 150+ hospital &amp; clinic reviews
              </span>
            </div>
          </div>
        </div>

        {/* 4 Synchronized Fieldwork Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[hsl(var(--muted))] rounded-3xl p-7 sm:p-8 border border-[hsl(var(--border))] flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                {/* Top Row: Google Rating */}
                <div className="flex items-center mb-5">
                  {/* Google Rating Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/90 border border-[hsl(var(--border))] rounded-full px-3 py-1 shadow-2xs">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <div className="flex items-center text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="font-bold text-xs text-[hsl(var(--foreground))]">{rev.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="font-normal text-sm sm:text-base text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-[hsl(var(--border))]">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${rev.bgGradient} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs`}>
                  {rev.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-[hsl(var(--foreground))] truncate">
                    {rev.facility}
                  </div>
                  <div className="font-light text-xs text-[hsl(var(--muted-foreground))] flex items-center gap-1.5 flex-wrap mt-0.5">
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                      <span>{rev.location}</span>
                    </span>
                    <span>&middot;</span>
                    <span>{rev.name} ({rev.role})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
