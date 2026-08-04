import { DollarSign, AlertTriangle, UserX, ShieldAlert } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Wasted Budget on Wrong Equipment",
      description:
        "Healthcare facilities often overspend on high-priced branded devices with features they never use, or buy under-powered machinery push-sold by single-brand sales reps.",
      highlight: "Unaligned Specifications",
    },
    {
      icon: AlertTriangle,
      title: "Hidden Post-Purchase Costs",
      description:
        "Purchasing devices without evaluating local spare parts availability, proprietary consumable costs, or annual calibration leads to crippling unexpected expenses.",
      highlight: "Surprise Maintenance Bills",
    },
    {
      icon: UserX,
      title: "Zero Staff Training & Idle Machinery",
      description:
        "Expensive diagnostic machinery sits unused in facility storerooms because vendors deliver equipment without hands-on clinical staff training or local technical support.",
      highlight: "Unusable Equipment Idle Time",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-700 border border-amber-500/20">
            <ShieldAlert className="h-4 w-4" />
            <span>The Procurement Dilemma in Kenya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Pitfalls Healthcare Facilities Face When Sourcing Equipment
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Single-brand equipment distributors focus on closing sales margins. Medwise focuses on technical suitability, long-term operational uptime, and total cost of ownership.
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow group"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-200 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <span className="inline-block text-[11px] font-bold text-amber-700 bg-amber-100/60 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {prob.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400">
                  <span>Common Issue #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
