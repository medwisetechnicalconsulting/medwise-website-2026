'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      image: '/images/pitfalls/wasted-budget.png',
      alt: 'Healthcare facility administrator reviewing high medical equipment invoices in Kenya',
      title: 'Budget Spent on Incompatible Equipment',
      category: 'SELECTION MISMATCH',
      description:
        'Healthcare facilities often overspend on high-priced branded devices with complex features they rarely use, or purchase under-powered machinery push-sold by single-brand distributors without clinical workload assessment.',
      prevention: 'Medwise audits your daily test volume, space, and power stability before specifying any model.',
    },
    {
      image: '/images/pitfalls/hidden-costs.png',
      alt: 'Medical laboratory analyzer showing unexpected error warning and high maintenance expenses',
      title: 'Unexpected Reagent & Maintenance Bills',
      category: 'COST OF OWNERSHIP',
      description:
        'Purchasing analyzers without verifying local reagent supply chains, proprietary closed-system consumables, or annual calibration schedules leads to crippling downtime and inflated cost-per-test expenses.',
      prevention: 'We calculate realistic 3-year Total Cost of Ownership (TCO) across competing open/closed platforms.',
    },
    {
      image: '/images/pitfalls/idle-machinery.png',
      alt: 'Laboratory technician in clinical room looking at idle diagnostic machinery without operator training',
      title: 'Idle Machinery Without Operator Training',
      category: 'OPERATIONAL DOWNTIME',
      description:
        'Valuable diagnostic machinery frequently sits unused in clinic storerooms because vendors deliver crates without hands-on clinical operator training, SOP setup, or prompt local technician support.',
      prevention: 'Every unit we commission includes certified staff training, SOP documentation, and verified calibration reports.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[hsl(var(--muted))] border-b border-[hsl(var(--border))] px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
            PROCUREMENT REALITY
          </span>
          <h2 className="font-extrabold text-[clamp(2rem,3vw,2.8rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
            Common pitfalls when sourcing medical equipment.
          </h2>
          <p className="font-light text-base text-[hsl(var(--muted-foreground))] mt-3 leading-relaxed">
            Single-brand distributors are incentivized to sell from their own inventory. Medwise acts as your independent technical advocate, focusing on clinical suitability, long-term parts availability, and true operating costs.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white border border-[hsl(var(--border))] overflow-hidden shadow-2xs hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-[hsl(var(--border))] overflow-hidden">
                  <Image
                    src={prob.image}
                    alt={prob.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="chip-label bg-white/95 text-amber-900 shadow-xs">
                      {prob.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="font-mono text-xs font-semibold text-[hsl(var(--muted-foreground))] block mb-1">
                    Pitfall 0{index + 1}
                  </span>

                  <h3 className="font-bold text-base text-[hsl(var(--foreground))] mb-2 leading-snug">
                    {prob.title}
                  </h3>

                  <p className="font-light text-sm text-[hsl(var(--muted-foreground))] leading-[1.65]">
                    {prob.description}
                  </p>
                </div>
              </div>

              {/* Medwise Protection Footer */}
              <div className="p-5 bg-[hsl(var(--muted))] border-t border-[hsl(var(--border))] mt-auto">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <p className="font-light text-xs text-[hsl(var(--foreground))] leading-relaxed">
                    <strong className="font-semibold text-[hsl(var(--foreground))]">Medwise Protection: </strong>
                    {prob.prevention}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
