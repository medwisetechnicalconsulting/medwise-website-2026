'use client';

import Image from 'next/image';

export default function HowWeHelp() {
  const steps = [
    {
      number: '01',
      title: 'Facility & Clinical Audit',
      description: 'Our biomedical engineers evaluate daily patient volume, room dimensions, power stability, and water filtration requirements.',
      image: '/images/services/pre-purchase-consulting.png',
      alt: 'Biomedical engineer evaluating clinical facility specifications',
    },
    {
      number: '02',
      title: 'Multi-Brand Comparison',
      description: 'We objectively compare machinery specifications, reagent contracts, and 3-year operating costs across leading manufacturers.',
      image: '/images/services/equipment-sourcing.png',
      alt: 'Multi-brand medical equipment catalog comparison',
    },
    {
      number: '03',
      title: 'Sourcing & Metrology',
      description: 'We manage secure delivery, mechanical placement, electrical stabilization, and certified metrological calibration.',
      image: '/images/services/installation-calibration.png',
      alt: 'Biomedical engineer executing precision equipment calibration',
    },
    {
      number: '04',
      title: 'Staff Training & SLA',
      description: 'Certified hands-on operator training for laboratory technologists and nurses, backed by structured preventive maintenance.',
      image: '/images/services/staff-training.png',
      alt: 'Clinical staff training on diagnostic equipment operation',
    },
  ];

  return (
    <section className="bg-[hsl(var(--muted))] py-20 sm:py-24 px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Label + H2 */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="font-extrabold text-[clamp(2rem,3.2vw,2.8rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
            From clinical audit to turnkey diagnostic operation.
          </h2>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl overflow-hidden border border-[hsl(var(--border))] flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-200"
            >
              <div>
                {/* Photo Area */}
                <div className="relative h-36 w-full overflow-hidden bg-slate-100 border-b border-[hsl(var(--border))]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <h3 className="font-bold text-sm text-[hsl(var(--foreground))]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-light text-sm text-[hsl(var(--muted-foreground))] mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Step Indicator */}
              <div className="px-5 pb-4 pt-0">
                <span className="text-[11px] font-semibold text-[hsl(var(--primary))] block">
                  Phase {step.number} of 04 &middot; Verified SOP
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
