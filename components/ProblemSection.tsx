'use client';

import Image from 'next/image';
import { ShieldAlert, DollarSign, AlertTriangle, UserX, CheckCircle2 } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      image: '/images/pitfalls/wasted-budget.png',
      alt: 'Healthcare facility administrator reviewing high medical equipment invoices in Kenya',
      title: 'Budget Spent on Incompatible Equipment',
      category: 'Selection Mismatch',
      description:
        'Healthcare facilities often overspend on high-priced branded devices with complex features they rarely use, or purchase under-powered machinery push-sold by single-brand distributors without clinical workload assessment.',
      prevention: 'Medwise audits your daily test volume, space, and power stability before specifying any model.',
    },
    {
      icon: AlertTriangle,
      image: '/images/pitfalls/hidden-costs.png',
      alt: 'Medical laboratory analyzer showing unexpected error warning and high maintenance expenses',
      title: 'Unexpected Reagent & Maintenance Bills',
      category: 'Cost of Ownership',
      description:
        'Purchasing analyzers without verifying local reagent supply chains, proprietary closed-system consumables, or annual calibration schedules leads to crippling downtime and inflated cost-per-test expenses.',
      prevention: 'We calculate realistic 3-year Total Cost of Ownership (TCO) across competing open/closed platforms.',
    },
    {
      icon: UserX,
      image: '/images/pitfalls/idle-machinery.png',
      alt: 'Laboratory technician in clinical room looking at idle diagnostic machinery without operator training',
      title: 'Idle Machinery Without Operator Training',
      category: 'Operational Downtime',
      description:
        'Valuable diagnostic machinery frequently sits unused in clinic storerooms because vendors deliver crates without hands-on clinical operator training, SOP setup, or prompt local technician support.',
      prevention: 'Every unit we commission includes certified staff training, SOP documentation, and verified calibration reports.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-200">
            <ShieldAlert className="h-3.5 w-3.5 text-amber-700 shrink-0" />
            <span>Procurement Reality in Kenya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Pitfalls When Sourcing Medical Equipment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Single-brand equipment distributors are incentivized to sell from their own inventory. Medwise acts as your technical advocate, focusing on clinical suitability, long-term parts availability, and true operating costs.
          </p>
        </div>

        {/* 3 Physical Problem Cards (Uiverse.io inspired) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-slate-400 transition-all ${
                  index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-slate-200">
                    <Image
                      src={prob.image}
                      alt={prob.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {prob.category}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        Pitfall 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {prob.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                </div>

                {/* Tangible Medwise Protection Footer */}
                <div className="px-5 sm:px-6 py-4 bg-[#F8FAFC] border-t border-slate-200 mt-auto">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-bold">Medwise Protection:</strong> {prob.prevention}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
