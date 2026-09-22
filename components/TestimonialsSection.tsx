'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        'Our Zybio Z3 hematology analyzer broke down with an electronic motor drive board fault on a busy Thursday morning. Medwise dispatched a field engineer immediately, replaced the board to factory specs, verified controls with CV < 2.0%, and had us back online in under 4 hours.',
      name: 'Dr. Peter M.',
      role: 'Medical Superintendent',
      facility: 'Thagana County Medical Center',
      initials: 'PM',
      bgGradient: 'from-blue-500 to-indigo-600',
    },
    {
      quote:
        'When setting up our regional imaging wing, competing vendors pushed inflated digital DR X-ray proposals. Medwise gave us an objective pre-purchase audit, eliminated unnecessary proprietary software licenses, saved us KSh 800,000, and supervised our 2.0 mm lead room shielding setup.',
      name: 'Sarah O.',
      role: 'Operations Director',
      facility: 'Kisumu Regional Diagnostic Center',
      initials: 'SO',
      bgGradient: 'from-emerald-500 to-teal-600',
    },
    {
      quote:
        'We manage three outpatient clinics across the Rift Valley and Medwise handles all our equipment sourcing and metrological calibration. Their optical strobe tachometer tests and traceable service documentation make KMPDC compliance and laboratory audits seamless.',
      name: 'Francis K.',
      role: 'Lead Laboratory Technologist',
      facility: 'Rift Valley Outpatient Network',
      initials: 'FK',
      bgGradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 px-4 sm:px-8 md:px-[72px]">
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

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[hsl(var(--muted))] rounded-2xl p-7 border border-[hsl(var(--border))] flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-200"
            >
              <div>
                {/* 5 Stars */}
                <div className="text-[#F59E0B] text-sm font-bold tracking-wider mb-4">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="font-normal text-base text-[hsl(var(--foreground))] leading-[1.7]">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[hsl(var(--border))]">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${rev.bgGradient} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs`}>
                  {rev.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[hsl(var(--foreground))]">
                    {rev.name}
                  </div>
                  <div className="font-light text-xs text-[hsl(var(--muted-foreground))]">
                    {rev.role} &middot; {rev.facility}
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
