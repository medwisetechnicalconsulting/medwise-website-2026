'use client';

import { ClipboardCheck, SlidersHorizontal, Truck, Wrench, ArrowRight } from 'lucide-react';

export default function HowWeHelp() {
  const steps = [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Facility & Clinical Assessment',
      description:
        'Our biomedical engineers visit your site to audit daily test volume, available square footage, electrical load, voltage stability, and water filtration setups.',
    },
    {
      number: '02',
      icon: SlidersHorizontal,
      title: 'Objective Equipment Comparison',
      description:
        'We compare equipment specifications, reagent contracts, and maintenance history across leading manufacturers within your allocated budget.',
    },
    {
      number: '03',
      icon: Truck,
      title: 'Sourcing, Delivery & Installation',
      description:
        'We manage secure delivery, mechanical placement, electrical stabilization, and certified metrological calibration before clinical handover.',
    },
    {
      number: '04',
      icon: Wrench,
      title: 'Operator Training & Scheduled PM',
      description:
        'We conduct hands-on training for laboratory technologists and nurses, providing scheduled preventive maintenance and rapid field repair dispatch.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F2942] bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Biomedical Lifecycle Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 4-Step Medical Equipment Deployment Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A methodical engineering process that ensures Kenyan healthcare facilities invest in dependable diagnostic systems with verified accuracy and local repair support.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl bg-[#F8FAFC] p-6 border border-slate-200 hover:border-[#0F2942] transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0F2942] text-white font-bold text-sm shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-300 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Phase 0{index + 1} of 04</span>
                  <span className="text-[#0F2942] font-bold">Verified SOP</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
