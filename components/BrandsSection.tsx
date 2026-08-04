'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Award } from 'lucide-react';

export default function BrandsSection() {
  const brands = [
    { name: 'Zybio', category: 'Hematology & Chemistry', specialty: 'Zybio Z3 & Automated Analyzers' },
    { name: 'Mindray', category: 'Patient Monitors & Ultrasound', specialty: 'Diagnostic Imaging & ICU' },
    { name: 'Sonoscape', category: 'Color Doppler Ultrasound', specialty: 'Portable & Trolley Ultrasound' },
    { name: 'Siemens', category: 'Radiology Systems', specialty: 'Digital X-Ray Generators' },
    { name: 'GE Healthcare', category: 'Diagnostic Clinical Systems', specialty: 'Ultrasound & Radiology' },
    { name: 'EDAN', category: 'Patient Monitoring', specialty: 'Vital Signs & Fetal Monitors' },
    { name: 'Dirui', category: 'Urinalysis & Chemistry', specialty: 'Point-of-Care Laboratory' },
    { name: 'Sysmex', category: 'Hematology Testing', specialty: 'Cell Counters & Reagents' },
    { name: 'Olympus', category: 'Endoscopy & Microscopes', specialty: 'Clinical Optics' },
  ];

  // Duplicate for seamless infinite loop ticker
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900 border border-blue-200 shadow-2xs">
            <Cpu className="h-4 w-4 text-blue-700" />
            <span>Multi-Vendor Technical Support & Sourcing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Equipment Brands & Platform Compatibility
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Our biomedical engineers maintain technical repair, calibration, and sourcing expertise across leading global healthcare equipment manufacturers.
          </p>
        </motion.div>

        {/* Self-Sliding Infinite Ticker Carousel */}
        <div className="mt-12 relative overflow-hidden py-4">
          {/* Gradient Edge Masks for Smooth Fade */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="w-64 shrink-0 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center hover:bg-white hover:border-blue-500/50 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100/90 text-blue-800 font-black text-sm mb-3 group-hover:scale-110 transition-transform">
                  {brand.name.charAt(0)}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs font-bold text-blue-800 mt-1">
                  {brand.category}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  {brand.specialty}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Independent Neutrality Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-blue-950"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-red-600 shrink-0" />
            <div>
              <span className="font-extrabold text-sm block text-slate-900">Brand-Neutral Advisory Guarantee</span>
              <p className="text-slate-600 font-medium">
                Medwise Technical Consulting maintains independent engineering standards. Mention of manufacturer names represents technical service capability and compatibility.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-800 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shrink-0 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-blue-700" />
            <span>100% Independent</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
}
