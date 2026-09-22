'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { 
  Star, 
  Wrench, 
  MapPin, 
  Calendar, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  caption: string;
  alt: string;
}

export interface FacilityProject {
  id: string;
  facility: string;
  location: string;
  equipment: string;
  service: string;
  category: string;
  dateRange: string;
  description: string;
  rating: number;
  photos: GalleryPhoto[];
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedFacility, setSelectedFacility] = useState<FacilityProject | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Touch tracking for swipe gestures
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const facilityProjects: FacilityProject[] = [
    // 1. Narok County Referral Hospital
    {
      id: 'narok',
      facility: 'Narok County Referral Hospital',
      location: 'Narok, Kenya',
      equipment: 'Biochemistry (Urit CA 200) & Electrolyte Analyzer',
      service: 'Installation & Training',
      category: 'installation training',
      dateRange: '14 August 2026',
      rating: 4.9,
      description:
        'Fresh installation and hands-on staff training on the Urit CA 200 Biochemistry and Electrolyte Analyzer.',
      photos: [
        {
          id: 'narok-1',
          image: '/images/gallery/narok-1.jpeg',
          title: 'Biochemistry & Electrolyte Analyzer Setup',
          caption:
            'Installation and setup of the Urit CA 200 Biochemistry and Electrolyte Analyzer.',
          alt: 'Urit CA 200 Biochemistry and Electrolyte Analyzer installation at Narok County Referral Hospital',
        },
        {
          id: 'narok-2',
          image: '/images/gallery/narok-2.jpeg',
          title: 'Laboratory Staff Training',
          caption:
            'Hands-on operational training for laboratory staff on the new equipment.',
          alt: 'Laboratory staff training on Urit CA 200 at Narok County Referral Hospital',
        },
        {
          id: 'narok-3',
          image: '/images/gallery/narok-3.jpeg',
          title: 'System Setup & Calibration',
          caption:
            'System setup and calibration checks during the installation process.',
          alt: 'System calibration check on Urit CA 200 at Narok County Referral Hospital',
        },
        {
          id: 'narok-4',
          image: '/images/gallery/narok-4.jpeg',
          title: 'Operational Training & Review',
          caption:
            'Walkthrough of daily operational workflows and system handling with the team.',
          alt: 'Staff operational review and training at Narok County Referral Hospital',
        },
      ],
    },

    // 2. Lukanji Medical Centre
    {
      id: 'lukanji',
      facility: 'Lukanji Medical Centre',
      location: 'Kakamega, Kenya',
      equipment: 'Excbio Hematology Analyzer',
      service: 'Routine Maintenance, Calibration & QC',
      category: 'maintenance calibration',
      dateRange: '18 May 2026',
      rating: 4.8,
      description:
        'Routine maintenance services, calibration, and quality control (QC) on the Excbio Hematology Analyzer.',
      photos: [
        {
          id: 'lukanji-1',
          image: '/images/gallery/lukanji-1.jpeg',
          title: 'System Check & Quality Control',
          caption:
            'Initial diagnostic checks and quality control (QC) assessment.',
          alt: 'Excbio Hematology Analyzer routine maintenance check at Lukanji Medical Centre Kakamega',
        },
        {
          id: 'lukanji-2',
          image: '/images/gallery/lukanji-2.jpeg',
          title: 'Routine Maintenance & Servicing',
          caption:
            'Internal inspection and routine maintenance of analyzer components.',
          alt: 'Routine servicing of Excbio Hematology Analyzer at Lukanji Medical Centre Kakamega',
        },
        {
          id: 'lukanji-3',
          image: '/images/gallery/lukanji-3.jpeg',
          title: 'Calibration & Final QC',
          caption:
            'System calibration and final verification to ensure accurate results.',
          alt: 'Calibration and final QC verification at Lukanji Medical Centre Kakamega',
        },
      ],
    },

    // 3. Unam Medical Centre
    {
      id: 'unam',
      facility: 'Unam Medical Centre',
      location: 'Kisumu, Kenya',
      equipment: 'Hematology & Chemistry Analyzers',
      service: 'Routine Maintenance, Calibration & QC',
      category: 'maintenance calibration',
      dateRange: '9 July 2026',
      rating: 5.0,
      description:
        'Routine maintenance, servicing, calibration, and quality control for laboratory hematology and chemistry analyzers.',
      photos: [
        {
          id: 'unam-1',
          image: '/images/gallery/unam-1.jpeg',
          title: 'Chassis Inspection & Servicing',
          caption:
            'Chassis inspection and routine maintenance on the analyzer.',
          alt: 'Routine maintenance and chassis inspection at Unam Medical Centre Kisumu',
        },
        {
          id: 'unam-2',
          image: '/images/gallery/unam-2.jpeg',
          title: 'Fluidics & Reagent Line Service',
          caption:
            'Routine servicing and maintenance of fluidic and reagent lines.',
          alt: 'Reagent and fluidics line maintenance at Unam Medical Centre Kisumu',
        },
        {
          id: 'unam-3',
          image: '/images/gallery/unam-3.jpeg',
          title: 'Calibration & Quality Control',
          caption:
            'Calibration and quality control verification across laboratory analyzers.',
          alt: 'Laboratory analyzer calibration and QC at Unam Medical Centre Kisumu',
        },
      ],
    },

    // 4. Kabera Medical Centre
    {
      id: 'kabera',
      facility: 'Kabera Medical Centre',
      location: 'Kenya',
      equipment: 'Bioelab EC 30 Hematology Analyzer',
      service: 'Fresh Installation',
      category: 'installation',
      dateRange: '22 June 2026',
      rating: 4.7,
      description:
        'Fresh installation and commissioning of the Bioelab EC 30 Hematology Analyzer.',
      photos: [
        {
          id: 'kabera-1',
          image: '/images/gallery/kabera-1.jpeg',
          title: 'Fresh Installation & Setup',
          caption:
            'Unboxing and initial setup of the Bioelab EC 30 Hematology Analyzer.',
          alt: 'Fresh installation of Bioelab EC 30 Hematology Analyzer at Kabera Medical Centre',
        },
        {
          id: 'kabera-2',
          image: '/images/gallery/kabera-2.jpeg',
          title: 'System Setup & Commissioning',
          caption:
            'System startup, initial parameters check, and commissioning.',
          alt: 'System setup and parameter verification at Kabera Medical Centre',
        },
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Facilities (4)' },
    { id: 'installation', label: 'Installation' },
    { id: 'maintenance', label: 'Maintenance & Service' },
    { id: 'calibration', label: 'Calibration & QC' },
    { id: 'training', label: 'Training' },
  ];

  const filteredFacilities = activeCategory === 'all'
    ? facilityProjects
    : facilityProjects.filter(p => p.category.includes(activeCategory));

  // Next / Previous Photo Handlers
  const handleNextPhoto = useCallback(() => {
    if (!selectedFacility) return;
    setActivePhotoIndex((prev) => (prev + 1) % selectedFacility.photos.length);
  }, [selectedFacility]);

  const handlePrevPhoto = useCallback(() => {
    if (!selectedFacility) return;
    setActivePhotoIndex((prev) => (prev - 1 + selectedFacility.photos.length) % selectedFacility.photos.length);
  }, [selectedFacility]);

  // Open Modal Handler
  const openFacilityModal = (facility: FacilityProject, startIndex = 0) => {
    setSelectedFacility(facility);
    setActivePhotoIndex(startIndex);
    setIsAutoPlaying(true);
  };

  // Close Modal Handler
  const closeFacilityModal = () => {
    setSelectedFacility(null);
    setActivePhotoIndex(0);
  };

  // Automatic slideshow timer
  useEffect(() => {
    if (!selectedFacility || !isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNextPhoto();
    }, 4000);
    return () => clearInterval(timer);
  }, [selectedFacility, isAutoPlaying, handleNextPhoto]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedFacility) return;
      if (e.key === 'Escape') closeFacilityModal();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFacility, handleNextPhoto, handlePrevPhoto]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || !selectedFacility) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Swiped Left -> Next Photo
      handleNextPhoto();
    } else if (diff < -45) {
      // Swiped Right -> Previous Photo
      handlePrevPhoto();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Structured Schema for Google SEO
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Medwise Technical Consulting: Previous Biomedical Works & Field Projects in Kenya',
    itemListElement: facilityProjects.flatMap((facility, fIndex) =>
      facility.photos.map((photo, pIndex) => ({
        '@type': 'ListItem',
        position: fIndex * 10 + pIndex + 1,
        item: {
          '@type': 'ImageObject',
          name: photo.title,
          caption: `${photo.title} at ${facility.facility}, ${facility.location}`,
          contentUrl: `https://medwisetechnicalconsulting.co.ke${photo.image}`,
          description: photo.caption,
        },
      }))
    ),
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white border-y border-[hsl(var(--border))] px-4 sm:px-8 md:px-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
            FIELDWORK DOCUMENTATION
          </span>
          <h2 className="font-extrabold text-[clamp(2rem,3vw,2.8rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
            Engineering fieldwork &amp; project gallery.
          </h2>
          <p className="font-light text-base text-[hsl(var(--muted-foreground))] mt-2 leading-relaxed">
            Real hospital project photographs grouped by facility. Click any healthcare facility to view verified field photos and technical project scope.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 font-medium text-xs transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[hsl(var(--primary))] text-white shadow-xs'
                  : 'bg-white text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))] hover:text-[hsl(var(--foreground))]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => openFacilityModal(facility, 0)}
              className="flex flex-col justify-between rounded-3xl border border-[hsl(var(--border))] bg-white overflow-hidden shadow-2xs hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Cover Photo Container */}
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden border-b border-[hsl(var(--border))]">
                <Image
                  src={facility.photos[0].image}
                  alt={facility.photos[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Top Chips: Facility & Photo Count */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="chip-label bg-white/95 text-[hsl(var(--foreground))] shadow-xs font-bold text-xs">
                    {facility.facility}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-xs border border-white/20">
                    <Layers className="w-3.5 h-3.5 text-[hsl(var(--primary-light))]" />
                    <span>{facility.photos.length} Photos</span>
                  </span>
                </div>

                {/* Bottom Overlay: Location & Date */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 font-medium drop-shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{facility.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-white/90 drop-shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-[hsl(var(--primary-light))]" />
                    <span>{facility.dateRange}</span>
                  </div>
                </div>

                {/* Slide Indicators on Card */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {facility.photos.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === 0 ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Card Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  {/* Service Badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--primary))] bg-[hsl(var(--primary-light))] px-3 py-1 rounded-full mb-3">
                    <Wrench className="w-3.5 h-3.5 shrink-0" />
                    <span>{facility.service}</span>
                  </div>

                  {/* Equipment Heading */}
                  <h3 className="font-extrabold text-lg sm:text-xl text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors leading-snug">
                    {facility.equipment}
                  </h3>

                  {/* Summary Description */}
                  <p className="font-light text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mt-2.5">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-5 border-t border-[hsl(var(--border))] flex items-center justify-between text-xs font-semibold mt-6">
                  {/* Google Rating Badge */}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                      <span className="font-bold text-xs text-[hsl(var(--foreground))]">{facility.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <span className="text-[hsl(var(--primary))] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                    <span>View {facility.photos.length} Photos</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Facility Modal with Auto-Scroll, Touch Swipe & Thumbnails */}
      {selectedFacility && (
        <div
          onClick={closeFacilityModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] overflow-hidden rounded-3xl bg-white shadow-2xl border border-[hsl(var(--border))] flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[hsl(var(--border))] bg-slate-50/90 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[hsl(var(--foreground))] leading-tight">
                    {selectedFacility.facility}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                    <span>{selectedFacility.location} &middot; {selectedFacility.equipment}</span>
                    <span>&middot;</span>
                    <span className="inline-flex items-center gap-1 font-bold text-[hsl(var(--foreground))]">
                      <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                      <span>{selectedFacility.rating.toFixed(1)} Google Rating</span>
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={closeFacilityModal}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-white border border-[hsl(var(--border))] flex items-center justify-center text-slate-600 hover:text-[hsl(var(--foreground))] hover:bg-slate-100 transition-colors cursor-pointer shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto flex-grow flex flex-col">
              
              {/* Main Photo Slide with Touch Swipe & Next/Prev Controls */}
              <div 
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 select-none shrink-0"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <Image
                  src={selectedFacility.photos[activePhotoIndex].image}
                  alt={selectedFacility.photos[activePhotoIndex].alt}
                  fill
                  priority
                  className="object-contain"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevPhoto();
                  }}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer border border-white/20 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextPhoto();
                  }}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer border border-white/20 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide Status: Photo Counter */}
                <div className="absolute bottom-3 left-4 flex items-center text-xs text-white pointer-events-none">
                  <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[11px] border border-white/20">
                    Photo {activePhotoIndex + 1} of {selectedFacility.photos.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip (Click to Jump to Any Photo) */}
              <div className="bg-slate-100 p-3 sm:p-4 border-y border-[hsl(var(--border))] flex items-center gap-3 overflow-x-auto overscroll-x-contain touch-pan-x shrink-0">
                {selectedFacility.photos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => {
                      setActivePhotoIndex(idx);
                    }}
                    className={`relative w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIndex === idx
                        ? 'border-[hsl(var(--primary))] shadow-md scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-0.5 right-0.5 bg-black/75 text-white font-mono text-[9px] px-1 rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Photo Caption & Technical Project Brief */}
              <div className="p-5 sm:p-7 space-y-4">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--primary))] mb-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Photo {activePhotoIndex + 1}: {selectedFacility.service}</span>
                  </span>
                  <h4 className="font-extrabold text-base sm:text-lg text-[hsl(var(--foreground))]">
                    {selectedFacility.photos[activePhotoIndex].title}
                  </h4>
                  <p className="font-light text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mt-2">
                    {selectedFacility.photos[activePhotoIndex].caption}
                  </p>
                </div>

                {/* Facility Scope & WhatsApp Inquiry Row */}
                <div className="pt-4 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[hsl(var(--muted-foreground))] space-y-0.5">
                    <div>
                      <strong className="text-[hsl(var(--foreground))] font-semibold">Facility:</strong>{' '}
                      {selectedFacility.facility} ({selectedFacility.location})
                    </div>
                    <div>
                      <strong className="text-[hsl(var(--foreground))] font-semibold">System:</strong>{' '}
                      {selectedFacility.equipment}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Medwise, I saw your fieldwork project at ${selectedFacility.facility} with the ${selectedFacility.equipment}. I would like to inquire about similar services for our healthcare facility.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-primary h-11 px-7 text-xs font-semibold inline-flex items-center justify-center gap-2 shrink-0 shadow-xs"
                  >
                    <span>Inquire About This Service &rarr;</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
