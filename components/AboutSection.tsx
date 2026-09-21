'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      title: 'Flat-Rate Transparent Pricing',
      desc: 'You see the exact KSh quotation before we start. No hidden markups or sudden invoices.',
    },
    {
      title: 'Licensed Biomedical Engineers',
      desc: 'The gold standard in clinical device diagnostics, electrical safety, and metrology.',
    },
    {
      title: 'All Major Medical Brands',
      desc: 'Mindray, Zybio, Dymind, Olympus, Dirui, Urit, Sysmex, Beckman Coulter & more.',
    },
    {
      title: 'Certified Metrological Warranty',
      desc: 'Traceable calibration certificates provided on every clinical installation.',
    },
    {
      title: 'Prompt Field Support',
      desc: 'Direct technician dispatch from our Kisumu HQ and Nairobi Regional Field Hub.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 px-4 sm:px-8 md:px-[72px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* LEFT — Photo Stack */}
        <div className="relative order-2 lg:order-1 lg:pr-6">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-[hsl(var(--border))] shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-slate-100">
            <Image
              src="/images/services/staff-training.png"
              alt="Medwise biomedical engineering team conducting hospital equipment training"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Floating Badge (stat-card) */}
          <div className="stat-card -bottom-5 -right-2 sm:-right-6 max-w-[260px] z-10">
            <span className="font-bold text-sm text-[hsl(var(--foreground))] block">
              10-Year Support Commitment
            </span>
            <span className="font-light text-xs text-[hsl(var(--muted-foreground))] mt-1 block leading-relaxed">
              On all equipment sourcing &amp; calibration contracts
            </span>
          </div>

          {/* Small Inset Photo */}
          <div className="absolute -top-5 -left-4 sm:-left-6 w-28 h-28 rounded-xl overflow-hidden shadow-lg border-4 border-white hidden lg:block z-10 bg-slate-200">
            <Image
              src="/images/gallery/dr-xray-room.png"
              alt="Clinical diagnostic equipment inspection"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT — Text Content */}
        <div className="order-1 lg:order-2">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-4">
            ABOUT MEDWISE
          </span>

          <h2 className="font-extrabold text-[clamp(2rem,3vw,2.8rem)] tracking-[-0.025em] leading-[1.15] text-[hsl(var(--foreground))]">
            A dedicated engineering team. <br />
            Not a sales call center.
          </h2>

          <p className="font-light text-base text-[hsl(var(--muted-foreground))] mt-5 leading-[1.8]">
            Medwise Technical Consulting was established to bring transparency, brand neutrality, and rigorous engineering standards to Kenya&apos;s healthcare sector. We started as an independent biomedical advisory duo and have grown into a nationwide engineering team — but we&apos;ve never lost the mindset of dedicated medical professionals. Every engineer is in-house, background-vetted, and trained to international calibration standards. We don&apos;t push vendor sales quotas, we don&apos;t cut corners, and we stand behind every hospital installation.
          </p>

          {/* Feature List */}
          <div className="mt-8 flex flex-col gap-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <strong className="font-semibold text-[hsl(var(--foreground))]">{item.title}</strong>
                  <span className="font-light text-[hsl(var(--muted-foreground))]"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="btn-pill-secondary h-11 px-8 text-sm font-semibold inline-flex items-center"
            >
              <span>Meet Our Team</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
