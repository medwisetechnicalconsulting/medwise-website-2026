'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Award, ExternalLink } from 'lucide-react';

interface Brand {
  name: string;
  slug: string;
  url: string;
  category: string;
  specialty: string;
}

export default function BrandsSection() {
  const [isPaused, setIsPaused] = useState(false);

  const brands: Brand[] = [
    {
      name: 'Mindray',
      slug: 'mindray',
      url: 'https://www.mindray.com',
      category: 'Patient Monitoring & Ultrasound',
      specialty: 'Patient Monitors, Ultrasound & Anesthesia',
    },
    {
      name: 'Dymind',
      slug: 'dymind',
      url: 'https://www.dymind.com',
      category: 'Hematology & POCT',
      specialty: 'Automated Hematology Analyzers',
    },
    {
      name: 'Zybio',
      slug: 'zybio',
      url: 'https://www.zybio.com',
      category: 'In-Vitro Diagnostics',
      specialty: 'Zybio Z3, Chemiluminescence & IVD',
    },
    {
      name: 'Urit',
      slug: 'urit',
      url: 'https://www.urit.com',
      category: 'Urinalysis & Diagnostics',
      specialty: 'Urinalysis & Clinical Electronics',
    },
    {
      name: 'Dirui',
      slug: 'dirui',
      url: 'https://www.dirui.com.cn',
      category: 'Urinalysis & Chemistry',
      specialty: 'Clinical Chemistry & Urinalysis Systems',
    },
    {
      name: 'Seamaty',
      slug: 'seamaty',
      url: 'https://www.seamaty.com',
      category: 'POCT Biochemistry',
      specialty: 'Point-of-Care Blood Analyzers',
    },
    {
      name: 'Olympus',
      slug: 'olympus',
      url: 'https://www.olympus-global.com',
      category: 'Endoscopy & Microscopy',
      specialty: 'Clinical Optics & Surgical Systems',
    },
    {
      name: 'Sysmex',
      slug: 'sysmex',
      url: 'https://www.sysmex.com',
      category: 'Hematology & Flow Cytometry',
      specialty: 'Automated Hematology & Cell Counters',
    },
    {
      name: 'Roche',
      slug: 'roche',
      url: 'https://www.roche.com',
      category: 'Molecular Diagnostics & Chemistry',
      specialty: 'Cobas Systems & Molecular Testing',
    },
    {
      name: 'Beckman Coulter',
      slug: 'beckman-coulter',
      url: 'https://www.beckmancoulter.com',
      category: 'Clinical Diagnostics',
      specialty: 'Centrifugation & Clinical Chemistry',
    },
    {
      name: 'BD',
      slug: 'bd',
      url: 'https://www.bd.com',
      category: 'Specimen Management',
      specialty: 'Flow Cytometry & Diagnostic Systems',
    },
    {
      name: 'Thermo Fisher Scientific',
      slug: 'thermo-fisher',
      url: 'https://www.thermofisher.com',
      category: 'Laboratory Analytics',
      specialty: 'Precision Analytical & Lab Equipment',
    },
    {
      name: 'bioMérieux',
      slug: 'biomerieux',
      url: 'https://www.biomerieux.com',
      category: 'Microbiology & IVD',
      specialty: 'Pathogen Detection & Microbiology',
    },
    {
      name: 'Abbott',
      slug: 'abbott',
      url: 'https://www.abbott.com',
      category: 'Core Diagnostics',
      specialty: 'Architect Systems & Point of Care',
    },
  ];

  // Duplicate for seamless infinite loop ticker
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200 overflow-hidden">
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
            Our biomedical engineers maintain technical repair, calibration, and sourcing expertise across leading global healthcare equipment manufacturers. Click any brand logo to visit their official site.
          </p>
        </motion.div>

        {/* Self-Sliding Infinite Ticker Carousel with Hover Pause */}
        <div 
          className="mt-12 relative overflow-hidden py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Edge Masks for Smooth Fade */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 35,
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <a
                key={`${brand.slug}-${index}`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit official ${brand.name} website (${brand.url})`}
                className="group relative w-72 shrink-0 rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-2xs hover:border-blue-500/60 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* External Link Hover Icon */}
                <div className="absolute top-3 right-3 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 opacity-60 group-hover:opacity-100 transition-all">
                  <ExternalLink className="h-4 w-4" />
                </div>

                {/* Brand Logo Container */}
                <div className="mx-auto flex h-16 w-full items-center justify-center rounded-xl bg-slate-50/70 p-2 mb-3 group-hover:bg-blue-50/50 group-hover:scale-105 transition-all duration-300 border border-slate-100">
                  <div className="relative h-12 w-44 flex items-center justify-center">
                    <Image
                      src={`/images/brands/${brand.slug}.svg`}
                      alt={`${brand.name} official logo`}
                      fill
                      className="object-contain p-1 filter group-hover:brightness-105 transition-all"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center justify-center gap-1">
                  <span>{brand.name}</span>
                </h3>

                {/* Category & Specialty */}
                <p className="text-xs font-bold text-blue-800 mt-1">
                  {brand.category}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-1">
                  {brand.specialty}
                </p>
              </a>
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

