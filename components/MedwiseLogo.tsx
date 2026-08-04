'use client';

import Image from 'next/image';
import { Heart, Activity } from 'lucide-react';
import { useState } from 'react';

interface MedwiseLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function MedwiseLogo({ variant = 'light', size = 'md', showText = true }: MedwiseLogoProps) {
  const [imageError, setImageError] = useState(false);

  const dimensionMap = {
    sm: { height: 32, width: 140, iconSize: 'h-8 w-8' },
    md: { height: 42, width: 180, iconSize: 'h-11 w-11' },
    lg: { height: 56, width: 220, iconSize: 'h-14 w-14' },
  };

  const currentSize = dimensionMap[size];

  return (
    <div className="flex items-center gap-3 group select-none">
      {!imageError ? (
        <div className="relative flex items-center">
          <Image
            src="/images/medwise-logo.png"
            alt="Medwise Technical Consulting Logo"
            width={currentSize.width}
            height={currentSize.height}
            priority
            onError={() => setImageError(true)}
            className="object-contain h-auto w-auto max-h-12 group-hover:scale-105 transition-transform"
          />
        </div>
      ) : (
        /* Fallback Medwise Official Heart & ECG Pulse Icon */
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-700 shadow-xs group-hover:scale-105 transition-transform relative">
            <Heart className="h-6 w-6 text-red-600 fill-red-600 stroke-white stroke-2" />
            <Activity className="h-4 w-4 text-white absolute inset-0 m-auto stroke-[2.5]" />
          </div>
          {showText && (
            <div className="flex flex-col">
              <span className={`text-xl font-extrabold tracking-tight leading-tight ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                MEDWISE<span className="text-red-600">.</span>
              </span>
              <span className={`text-[10px] font-bold tracking-widest uppercase ${variant === 'dark' ? 'text-blue-200' : 'text-slate-500'}`}>
                Technical Consulting
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
