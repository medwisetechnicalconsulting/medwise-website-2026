'use client';

import Image from 'next/image';

const AREAS = [
  'Kisumu (HQ)',
  'Nairobi Metropolitan',
  'Eldoret & Uasin Gishu',
  'Nakuru & Rift Valley',
  'Sagana & Kirinyaga',
  'Kakamega',
  'Siaya',
  'Homa Bay',
  'Kisii',
  'Bungoma',
  'Kericho',
  'Nyeri & Central Kenya',
  'Machakos',
  'Mombasa & Coast',
  'Busia & Western',
  'Vihiga',
  'Embu & Eastern',
  'Nationwide Emergency Dispatch',
];

export default function ServiceAreasSection() {
  return (
    <section className="bg-[hsl(var(--muted))] py-20 px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT: Copy & Tag Cloud */}
        <div>
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
            SERVICE AREAS &amp; DISPATCH
          </span>

          <h2 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.02em] text-[hsl(var(--foreground))]">
            We cover Western Kenya, Nairobi, and nationwide.
          </h2>

          <p className="font-light text-base text-[hsl(var(--muted-foreground))] mt-3 leading-relaxed">
            Don&apos;t see your county or medical facility listed? Contact us — our biomedical engineers routinely travel nationwide to commission, calibrate, and service hospital and clinic equipment.
          </p>

          {/* Tag Cloud */}
          <div className="mt-7 flex flex-wrap gap-2">
            {AREAS.map((area, idx) => (
              <span
                key={idx}
                className="bg-white border border-[hsl(var(--border))] rounded-full px-4 py-1.5 font-normal text-sm text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors cursor-pointer shadow-2xs select-none"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-[hsl(var(--border))] shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-slate-100">
          <Image
            src="/images/gallery/operating-theatre-setup.png"
            alt="Healthcare surgical theatre setup and clinical installation by Medwise engineers in Kenya"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}
