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
  logoScale?: string;
}

export default function BrandsSection() {
  const [isPaused, setIsPaused] = useState(false);

  const brands: Brand[] = [
    {
      name: 'Mindray',
      slug: 'mindray',
      image: '/images/brands/mindray.png',
      url: 'https://www.mindray.com',
      logoScale: 'scale-105',
    },
    {
      name: 'Dymind',
      slug: 'dymind',
      image: '/images/brands/dymind.png',
      url: 'https://www.dymind.com',
      logoScale: 'scale-110',
    },
    {
      name: 'Zybio',
      slug: 'zybio',
      image: '/images/brands/zybio.png',
      url: 'https://www.zybio.com',
      logoScale: 'scale-105',
    },
    {
      name: 'Urit',
      slug: 'urit',
      image: '/images/brands/urit.png',
      url: 'https://www.urit.com',
      logoScale: 'scale-105',
    },
    {
      name: 'Dirui',
      slug: 'dirui',
      image: '/images/brands/dirui.png',
      url: 'https://www.dirui.com.cn',
      logoScale: 'scale-110',
    },
    {
      name: 'Seamaty',
      slug: 'seamaty',
      image: '/images/brands/seamaty.png',
      url: 'https://www.seamaty.com',
      logoScale: 'scale-110',
    },
    {
      name: 'Olympus',
      slug: 'olympus',
      image: '/images/brands/olympus.png',
      url: 'https://www.olympus-global.com',
      logoScale: 'scale-100',
    },
    {
      name: 'Sysmex',
      slug: 'sysmex',
      image: '/images/brands/sysmex.svg',
      url: 'https://www.sysmex.com',
      logoScale: 'scale-105',
    },
    {
      name: 'Roche',
      slug: 'roche',
      image: '/images/brands/roche.png',
      url: 'https://www.roche.com',
      logoScale: 'scale-105',
    },
    {
      name: 'Beckman Coulter',
      slug: 'beckman-coulter',
      image: '/images/brands/beckman-coulter.svg',
      url: 'https://www.beckmancoulter.com',
      logoScale: 'scale-100',
    },
    {
      name: 'BD',
      slug: 'bd',
      image: '/images/brands/bd.svg',
      url: 'https://www.bd.com',
      logoScale: 'scale-110',
    },
    {
      name: 'Thermo Fisher Scientific',
      slug: 'thermo-fisher',
      image: '/images/brands/thermo-fisher.svg',
      url: 'https://www.thermofisher.com',
      logoScale: 'scale-100',
    },
    {
      name: 'bioMérieux',
      slug: 'biomerieux',
      image: '/images/brands/biomerieux.svg',
      url: 'https://www.biomerieux.com',
      logoScale: 'scale-105',
    },
    {
      name: 'Abbott',
      slug: 'abbott',
      image: '/images/brands/abbott.png',
      url: 'https://www.abbott.com',
      logoScale: 'scale-110',
    },
  ];

  // Duplicate for seamless infinite loop ticker
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-1 text-xs font-bold text-[#0F2942] border border-slate-200 shadow-xs">
            <Cpu className="h-4 w-4 text-[#0F2942]" />
            <span>Multi-Vendor Technical Support &amp; Sourcing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Equipment Brands &amp; Platform Compatibility
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium">
            Our biomedical engineers maintain repair, routine calibration, and sourcing expertise across leading global healthcare equipment manufacturers.
          </p>
        </div>

        {/* Physical Marquee Frame (Zero Gradients) */}
        <div 
          className="mt-8 sm:mt-12 relative overflow-hidden py-4 border-y border-slate-200 bg-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 32,
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <a
                key={`${brand.slug}-${index}`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit official ${brand.name} website (${brand.url})`}
                className="group relative w-44 sm:w-56 shrink-0 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 text-center shadow-2xs hover:border-[#0F2942] hover:shadow-xs transition-colors overflow-hidden flex flex-col items-center justify-center h-28 sm:h-32"
              >
                {/* External Link Indicator */}
                <div className="absolute top-2.5 right-2.5 text-slate-300 group-hover:text-[#0F2942] transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>

                {/* Brand Logo */}
                <div className="relative h-14 sm:h-16 w-full flex items-center justify-center p-1">
                  <div className={`relative h-12 sm:h-14 w-full flex items-center justify-center ${brand.logoScale || ''}`}>
                    <Image
                      src={brand.image}
                      alt={`${brand.name} official logo`}
                      fill
                      className="object-contain filter group-hover:brightness-95 transition-all"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <span className="text-[11px] font-semibold text-slate-600 group-hover:text-[#0F2942] transition-colors mt-1 truncate max-w-full">
                  {brand.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Independent Neutrality Statement */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-800 shadow-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#DC2626] shrink-0" />
            <div>
              <span className="font-bold text-sm block text-slate-900">Brand-Neutral Engineering Notice</span>
              <p className="text-slate-600 leading-relaxed">
                Medwise Technical Consulting is an independent advisory and maintenance firm. Mention of manufacturer brand names reflects repair compatibility, routine calibration capability, and multi-vendor sourcing.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0F2942] bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            <Award className="h-3.5 w-3.5 text-[#DC2626]" />
            <span>Independent Practice</span>
          </span>
        </div>

      </div>
    </section>
  );
}
