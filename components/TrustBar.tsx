'use client';

import { ShieldCheck, Award } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-[hsl(var(--border))] py-7 px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 flex-wrap">
        
        {/* Left Label */}
        <span className="font-medium text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] shrink-0">
          RATED &amp; TRUSTED BY CLINICS
        </span>

        {/* Right Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 divide-y md:divide-y-0 md:divide-x divide-[hsl(var(--border))]">
          
          {/* Google Reviews */}
          <div className="px-6 md:px-8 first:pl-0 flex items-center gap-2.5">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.44 7.35 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.25C.45 8.16 0 9.98 0 12s.45 3.84 1.25 5.43l4.03-3.14z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.56 1.25 6.57l4.03 3.14c.95-2.83 3.6-4.96 6.72-4.96z"
              />
            </svg>
            <span className="font-medium text-sm text-[hsl(var(--foreground))]">Google Reviews</span>
            <span className="text-[#F59E0B] text-xs font-bold tracking-widest">★★★★★</span>
            <span className="font-semibold text-sm text-[hsl(var(--foreground))]">4.9 / 5</span>
          </div>

          {/* Clinical Metrology Standards */}
          <div className="px-6 md:px-8 pt-3 md:pt-0 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-medium text-sm text-[hsl(var(--foreground))]">Clinical Metrology</span>
            <span className="text-[#F59E0B] text-xs font-bold tracking-widest">★★★★★</span>
            <span className="font-semibold text-sm text-[hsl(var(--foreground))]">100% Traceable</span>
          </div>

          {/* Biomedical Certification */}
          <div className="px-6 md:px-8 pt-3 md:pt-0 flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[hsl(var(--primary))] shrink-0" />
            <span className="font-medium text-sm text-[hsl(var(--foreground))]">Engineering Board</span>
            <span className="text-[#F59E0B] text-xs font-bold tracking-widest">★★★★★</span>
            <span className="font-semibold text-sm text-[hsl(var(--foreground))]">Certified</span>
          </div>

        </div>

      </div>
    </section>
  );
}
