'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ZoomIn } from 'lucide-react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

export default function ExpandableImage({ src, alt, title, caption }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Featured Banner / Card Image with Hover Zoom Hint */}
      <div className="space-y-2">
        <div
          onClick={() => setIsOpen(true)}
          className="relative aspect-video sm:aspect-[21/9] w-full rounded-xl overflow-hidden border border-slate-200 shadow-xs cursor-pointer group bg-slate-100 transition-all hover:border-slate-400"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

          {/* Hover Expand Badge */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20 shadow-md">
            <ZoomIn className="h-3.5 w-3.5 text-blue-400" />
            <span>Click to Expand</span>
          </div>
        </div>

        {caption && (
          <p className="text-center text-xs text-slate-500 font-medium italic">
            {caption}
          </p>
        )}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          {/* Top Bar Controls */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white mb-4">
            <div className="space-y-0.5">
              <h4 className="text-sm font-extrabold text-white line-clamp-1">{title || alt}</h4>
              <p className="text-xs text-slate-400">High-Resolution Image View</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1 text-xs font-bold"
            >
              <X className="h-4 w-4" />
              <span>Close</span>
            </button>
          </div>

          {/* Full Resolution Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-[80vh] aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              unoptimized
              className="object-contain object-center"
            />
          </div>

          <p className="text-xs text-slate-400 mt-3 font-medium">
            Press ESC or click anywhere outside to close
          </p>
        </div>
      )}
    </>
  );
}
