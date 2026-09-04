'use client';

import { ShieldCheck, Scale, Check, X } from 'lucide-react';

export default function WhyNeutralMatters() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-xl bg-slate-50 p-6 sm:p-10 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-900 border border-blue-200">
                <Scale className="h-3.5 w-3.5 text-blue-700" />
                <span>The Medwise Difference</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Neutral Medical Equipment Consulting Matters
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you buy directly from a single-brand equipment vendor, you receive advice tailored to their inventory targets and sales quotas rather than your facility&apos;s clinical reality. Single-brand suppliers are incentivized to sell their highest-margin machines, regardless of whether your clinic has the power infrastructure, sample volume, or technical staff to operate them.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong>Medwise Technical Consulting</strong>, we operate as your independent biomedical advocate. We objectively compare specifications, power demands, reagent costs, and spare parts availability across leading global manufacturers. Our loyalty remains strictly with your healthcare facility&apos;s clinical success and long-term financial health.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-700" />
                  <span>No Single-Brand Quotas</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-700" />
                  <span>Transparent Price Breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-700" />
                  <span>Long-Term After-Sales Support</span>
                </div>
              </div>
            </div>

            {/* Right Comparison Box */}
            <div className="lg:col-span-5 rounded-xl bg-white p-5 sm:p-6 border border-slate-200 text-slate-900 space-y-3.5 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-slate-900">
                  Single-Brand Vendor vs Medwise Advisory
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Direct Comparison
                </span>
              </div>

              <div className="space-y-3 text-xs">
                {/* Comparison Point 1 */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between font-semibold text-slate-500">
                    <span>Single-Brand Distributor</span>
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <p className="text-slate-600">Pushes single portfolio models regardless of clinical throughput or budget limits.</p>
                </div>

                {/* Comparison Point 2 */}
                <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-blue-900">
                    <span>Medwise Independent Advisory</span>
                    <Check className="h-3.5 w-3.5 text-blue-700 stroke-[3]" />
                  </div>
                  <p className="text-slate-700">Evaluates multi-brand options based on total operating cost and verified clinical reliability.</p>
                </div>

                {/* Comparison Point 3 */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between font-semibold text-slate-500">
                    <span>Single-Brand Distributor</span>
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <p className="text-slate-600">Locks your laboratory into proprietary closed-system reagents and expensive service contracts.</p>
                </div>

                {/* Comparison Point 4 */}
                <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-blue-900">
                    <span>Medwise Independent Advisory</span>
                    <Check className="h-3.5 w-3.5 text-blue-700 stroke-[3]" />
                  </div>
                  <p className="text-slate-700">Audits reagent open-system compatibility and ensures local parts availability before purchase.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

