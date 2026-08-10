'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, UserX, ShieldAlert } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      image: '/images/pitfalls/wasted-budget.png',
      alt: 'Healthcare facility administrator overwhelmed by high-priced invoices and wrong equipment selection',
      title: "Wasted Budget on Wrong Equipment",
      description:
        "Healthcare facilities often overspend on high-priced branded devices with features they never use, or buy under-powered machinery push-sold by single-brand sales reps.",
      highlight: "Unaligned Specifications",
    },
    {
      icon: AlertTriangle,
      image: '/images/pitfalls/hidden-costs.png',
      alt: 'Medical laboratory analyzer with warning error light and unexpected surprise maintenance bills',
      title: "Hidden Post-Purchase Costs",
      description:
        "Purchasing devices without evaluating local spare parts availability, proprietary consumable costs, or annual calibration leads to crippling unexpected expenses.",
      highlight: "Surprise Maintenance Bills",
    },
    {
      icon: UserX,
      image: '/images/pitfalls/idle-machinery.png',
      alt: 'Clueless laboratory technician looking confused at idle diagnostic machinery without hands-on training',
      title: "Zero Staff Training & Idle Machinery",
      description:
        "Expensive diagnostic machinery sits unused in facility storerooms because vendors deliver equipment without hands-on clinical staff training or local technical support.",
      highlight: "Unusable Equipment Idle Time",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200 shadow-xs">
            <ShieldAlert className="h-4 w-4 text-amber-600" />
            <span>The Procurement Dilemma in Kenya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Pitfalls Healthcare Facilities Face When Sourcing Equipment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Single-brand equipment distributors focus on closing sales margins. Medwise focuses on technical suitability, long-term operational uptime, and total cost of ownership.
          </p>
        </motion.div>

        {/* 3 Problem Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative flex flex-col justify-between rounded-3xl bg-white overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-xl hover:border-amber-400/60 transition-all group"
              >
                <div>
                  {/* Eye-Catching Pitfall Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={prob.image}
                      alt={prob.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    
                    {/* Top Floating Badge & Icon */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-amber-600 shadow-md backdrop-blur-md border border-white/50 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="inline-block text-[10px] sm:text-[11px] font-extrabold text-amber-900 bg-amber-100/95 px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm backdrop-blur-sm border border-amber-300">
                        {prob.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                      {prob.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {prob.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 mt-auto">
                  <span>Common Issue #{index + 1}</span>
                  <span className="text-amber-700 font-extrabold opacity-0 group-hover:opacity-100 transition-opacity">
                    Medwise Protects You
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

