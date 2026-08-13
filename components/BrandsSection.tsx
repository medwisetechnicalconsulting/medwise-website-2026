'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Award, ExternalLink } from 'lucide-react';

interface Brand {
  name: string;
  slug: string;
  image: string;
  url: string;
  category: string;
  specialty: string;
  logoScale?: string; // Optically balances visual weight across wide/tall logos
}

export default function BrandsSection() {
  const [isPaused, setIsPaused] = useState(false);

  const brands: Brand[] = [
    {
      name: 'Mindray',
      slug: 'mindray',
      image: '/images/brands/mindray.png',
      url: 'https://www.mindray.com',
      category: 'Patient Monitoring & Ultrasound',
      specialty: 'Patient Monitors, Ultrasound & Anesthesia',
      logoScale: 'scale-105',
    },
    {
      name: 'Dymind',
      slug: 'dymind',
      image: '/images/brands/dymind.png',
      url: 'https://www.dymind.com',
      category: 'Hematology & POCT',
      specialty: 'Automated Hematology Analyzers',
      logoScale: 'scale-110',
    },
    {
      name: 'Zybio',
      slug: 'zybio',
      image: '/images/brands/zybio.png',
      url: 'https://www.zybio.com',
      category: 'In-Vitro Diagnostics',
      specialty: 'Zybio Z3, Chemiluminescence & IVD',
      logoScale: 'scale-105',
    },
    {
      name: 'Urit',
      slug: 'urit',
      image: '/images/brands/urit.png',
      url: 'https://www.urit.com',
      category: 'Urinalysis & Diagnostics',
      specialty: 'Urinalysis & Clinical Electronics',
      logoScale: 'scale-105',
    },
    {
      name: 'Dirui',
      slug: 'dirui',
      image: '/images/brands/dirui.png',
      url: 'https://www.dirui.com.cn',
      category: 'Urinalysis & Chemistry',
      specialty: 'Clinical Chemistry & Urinalysis Systems',
      logoScale: 'scale-110',
    },
    {
      name: 'Seamaty',
      slug: 'seamaty',
      image: '/images/brands/seamaty.png',
      url: 'https://www.seamaty.com',
      category: 'POCT Biochemistry',
      specialty: 'Point-of-Care Blood Analyzers',
      logoScale: 'scale-110',
    },
    {
      name: 'Olympus',
      slug: 'olympus',
      image: '/images/brands/olympus.png',
      url: 'https://www.olympus-global.com',
      category: 'Endoscopy & Microscopy',
      specialty: 'Clinical Optics & Surgical Systems',
      logoScale: 'scale-100',
    },
    {
      name: 'Sysmex',
      slug: 'sysmex',
      image: '/images/brands/sysmex.svg',
      url: 'https://www.sysmex.com',
      category: 'Hematology & Flow Cytometry',
      specialty: 'Automated Hematology & Cell Counters',
      logoScale: 'scale-105',
    },
    {
      name: 'Roche',
      slug: 'roche',
      image: '/images/brands/roche.png',
      url: 'https://www.roche.com',
      category: 'Molecular Diagnostics & Chemistry',
      specialty: 'Cobas Systems & Molecular Testing',
      logoScale: 'scale-105',
    },
    {
      name: 'Beckman Coulter',
      slug: 'beckman-coulter',
      image: '/images/brands/beckman-coulter.svg',
      url: 'https://www.beckmancoulter.com',
      category: 'Clinical Diagnostics',
      specialty: 'Centrifugation & Clinical Chemistry',
      logoScale: 'scale-100',
    },
    {
      name: 'BD',
      slug: 'bd',
      image: '/images/brands/bd.svg',
      url: 'https://www.bd.com',
      category: 'Specimen Management',
      specialty: 'Flow Cytometry & Diagnostic Systems',
      logoScale: 'scale-110',
    },
    {
      name: 'Thermo Fisher Scientific',
      slug: 'thermo-fisher',
      image: '/images/brands/thermo-fisher.svg',
      url: 'https://www.thermofisher.com',
      category: 'Laboratory Analytics',
      specialty: 'Precision Analytical & Lab Equipment',
      logoScale: 'scale-100',
    },
    {
      name: 'bioMérieux',
      slug: 'biomerieux',
      image: '/images/brands/biomerieux.svg',
      url: 'https://www.biomerieux.com',
      category: 'Microbiology & IVD',
      specialty: 'Pathogen Detection & Microbiology',
      logoScale: 'scale-105',
    },
    {
      name: 'Abbott',
      slug: 'abbott',
      image: '/images/brands/abbott.png',
      url: 'https://www.abbott.com',
      category: 'Core Diagnostics',
      specialty: 'Architect Systems & Point of Care',
      logoScale: 'scale-110',
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
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-50/95 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-50/95 to-transparent z-10 pointer-events-none" />

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
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* External Link Hover Icon */}
                <div className="absolute top-3.5 right-3.5 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all z-10">
                  <ExternalLink className="h-4 w-4" />
                </div>

                {/* Spacious, Clean Brand Logo Container */}
                <div className="mx-auto flex h-20 w-full items-center justify-center rounded-xl bg-white p-3 mb-3 border border-slate-100 shadow-2xs group-hover:border-blue-200 group-hover:bg-blue-50/30 group-hover:scale-[1.02] transition-all duration-300">
                  <div className={`relative h-14 w-52 flex items-center justify-center transition-transform duration-300 ${brand.logoScale || ''}`}>
                    <Image
                      src={brand.image}
                      alt={`${brand.name} official logo`}
                      fill
                      className="object-contain p-1 filter drop-shadow-2xs group-hover:brightness-105 transition-all"
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


