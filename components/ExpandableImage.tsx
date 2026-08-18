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
          className="relative aspect-video sm:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md cursor-pointer group bg-slate-100 transition-all hover:border-blue-500/50 hover:shadow-xl"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Hover Expand Badge */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-lg group-hover:scale-105 transition-transform">
            <ZoomIn className="h-3.5 w-3.5 text-blue-400" />
            <span>Click to Expand Image</span>
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
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
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
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1 text-xs font-bold"
            >
              <X className="h-4 w-4" />
              <span>Close</span>
            </button>
          </div>

          {/* Full Resolution Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-[80vh] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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
