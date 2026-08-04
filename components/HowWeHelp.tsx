'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Sparkles, Truck, HeartHandshake } from 'lucide-react';

export default function HowWeHelp() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Assess Needs & Budget",
      description:
        "Our biomedical engineers conduct thorough facility evaluations, clinical workload assessments, and power infrastructure reviews.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Recommend Neutrally",
      description:
        "We provide transparent, multi-brand device comparisons matched to your technical specifications and financial parameters.",
    },
    {
      number: "03",
      icon: Truck,
      title: "Supply & Install",
      description:
        "We handle quality-verified sourcing, secure delivery, precision installation, and electrical/radiological integration.",
    },
    {
      number: "04",
      icon: HeartHandshake,
      title: "Train & Maintain",
      description:
        "We deliver hands-on clinical operator training, regular metrological calibration, and guaranteed ongoing technical maintenance.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            End-to-End Biomedical Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Medwise Empowers Your Healthcare Facility
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A structured 4-step medical device lifecycle process designed for long-term reliability and accurate patient diagnostics.
          </p>
        </motion.div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative flex flex-col justify-between rounded-3xl bg-slate-50 p-6 border border-slate-200 hover:border-blue-500/50 hover:bg-blue-50/40 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md shadow-blue-700/20 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-blue-600 transition-colors font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-900 group-hover:text-blue-800 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span>Step {index + 1} of 4</span>
                  <span className="text-blue-700">Medwise Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
