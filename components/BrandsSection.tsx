'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ExternalLink } from 'lucide-react';

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
      name: 'Thermo Fisher',
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
    <section className="py-20 bg-white border-y border-[hsl(var(--border))] overflow-hidden px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
            EQUIPMENT COMPATIBILITY
          </span>
          <h2 className="font-extrabold text-[clamp(2rem,3vw,2.8rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
            Multi-vendor technical support &amp; sourcing.
          </h2>
          <p className="font-light text-base text-[hsl(var(--muted-foreground))] mt-3 leading-relaxed">
            Our biomedical engineers maintain repair, routine calibration, and sourcing expertise across leading global healthcare equipment manufacturers.
          </p>
        </div>

        {/* Marquee Frame */}
        <div 
          className="relative overflow-hidden py-4 border-y border-[hsl(var(--border))] bg-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 36,
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <a
                key={`${brand.slug}-${index}`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit official ${brand.name} website`}
                className="group relative w-44 sm:w-52 shrink-0 rounded-2xl border border-[hsl(var(--border))] bg-white p-4 sm:p-5 text-center shadow-2xs hover:border-[hsl(var(--primary))] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all overflow-hidden flex flex-col items-center justify-center h-28 sm:h-32"
              >
                <div className="absolute top-2.5 right-2.5 text-slate-300 group-hover:text-[hsl(var(--primary))] transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>

                <div className="relative h-12 sm:h-14 w-full flex items-center justify-center p-1">
                  <div className={`relative h-10 sm:h-12 w-full flex items-center justify-center ${brand.logoScale || ''}`}>
                    <Image
                      src={brand.image}
                      alt={`${brand.name} official logo`}
                      fill
                      className="object-contain filter group-hover:brightness-95 transition-all"
                      unoptimized
                    />
                  </div>
                </div>

                <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors mt-2 truncate max-w-full">
                  {brand.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Independent Neutrality Statement */}
        <div className="mt-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[hsl(var(--foreground))]">
          <div className="flex items-center gap-3.5">
            <ShieldCheck className="w-5 h-5 text-[hsl(var(--primary))] shrink-0" />
            <div>
              <span className="font-bold text-sm block text-[hsl(var(--foreground))]">Brand-Neutral Engineering Notice</span>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-0.5">
                Medwise Technical Consulting is an independent advisory and maintenance practice. Mention of manufacturer brand names reflects repair compatibility, routine calibration capability, and multi-vendor sourcing.
              </p>
            </div>
          </div>
          <span className="chip-label shrink-0">
            Independent Practice
          </span>
        </div>

      </div>
    </section>
  );
}
