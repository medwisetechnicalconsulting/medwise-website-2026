'use client';

import Image from 'next/image';
import { ShieldAlert, DollarSign, AlertTriangle, UserX } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      image: '/images/pitfalls/wasted-budget.png',
      alt: 'Healthcare facility administrator overwhelmed by high-priced invoices and wrong equipment selection',
      title: 'Budget Spent on Incompatible Equipment',
      category: 'Selection Mismatch',
      description:
        'Healthcare facilities often overspend on high-priced branded devices with complex features they rarely use, or purchase under-powered machinery push-sold by single-brand distributors without clinical workload assessment.',
      prevention: 'Medwise audits your daily test volume and power stability before specifying any model.',
    },
    {
      icon: AlertTriangle,
      image: '/images/pitfalls/hidden-costs.png',
      alt: 'Medical laboratory analyzer with warning error light and unexpected surprise maintenance bills',
      title: 'Unexpected Reagent & Maintenance Bills',
      category: 'Cost of Ownership',
      description:
        'Purchasing analyzers without verifying local reagent supply chains, proprietary consumables, or annual calibration schedules leads to crippling downtime and inflated cost-per-test expenses.',
      prevention: 'We calculate realistic 3-year Total Cost of Ownership (TCO) across competing platforms.',
    },
    {
      icon: UserX,
      image: '/images/pitfalls/idle-machinery.png',
      alt: 'Laboratory technician looking confused at idle diagnostic machinery without hands-on training',
      title: 'Idle Machinery Without Operator Training',
      category: 'Operational Downtime',
      description:
        'Valuable diagnostic machinery frequently sits unused in facility storerooms because suppliers deliver crates without hands-on clinical operator training or prompt local technical support.',
      prevention: 'Every unit we commission includes certified staff training and verified calibration reports.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md bg-amber-100/80 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-200">
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

        {/* 3 Editorial Problem Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Photo with Natural Proportions */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-slate-100">
                    <Image
                      src={prob.image}
                      alt={prob.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                        {prob.category}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        Problem 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {prob.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                </div>

                {/* Grounded Resolution Footer */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 mt-auto">
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    <strong className="text-slate-900 font-semibold">How Medwise Protects You:</strong> {prob.prevention}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


