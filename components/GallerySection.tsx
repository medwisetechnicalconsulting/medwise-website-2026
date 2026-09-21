'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Wrench, MapPin, Calendar, X } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Zybio Z3 Hematology Analyzer Motor Board Repair',
      facility: 'Thagana County Medical Center',
      location: 'Sagana, Kenya',
      category: 'lab',
      date: '2026-08-04',
      service: 'PCB Board Diagnosis & Routine Maintenance',
      description: 'Diagnosed motor drive board failure, replaced with original specs, performed routine maintenance and QC functionality check.',
      image: '/images/gallery/zybio-board-repair.png',
      alt: 'Biomedical technician repairing Zybio Z3 hematology analyzer electronic motor PCB board at Thagana County Medical Center in Sagana, Kenya',
    },
    {
      id: 2,
      title: 'Digital DR X-Ray Room Shielding & Room Integration',
      facility: 'Kisumu Diagnostic Center',
      location: 'Kisumu Kakamega Road, Kenya',
      category: 'radiology',
      date: '2026-07-28',
      service: 'Pre-Purchase Site Advisory & Radiation Safety Setup',
      description: 'Room layout optimization, lead shielding verification, and high-frequency generator alignment to KNRA safety standards.',
      image: '/images/gallery/dr-xray-room.png',
      alt: 'Digital DR X-Ray machine installation and lead radiation shielding inspection in Kisumu, Kenya',
    },
    {
      id: 3,
      title: 'Color Doppler Ultrasound Calibration & Probe Verification',
      facility: 'Rift Valley Regional Outpatient Clinic',
      location: 'Rift Valley Province, Kenya',
      category: 'calibration',
      date: '2026-07-15',
      service: 'Probe Integrity & Metrological Calibration',
      description: 'Ultrasound beamformer calibration, transducer crystal verification, and image resolution optimization.',
      image: '/images/gallery/ultrasound-calibration.png',
      alt: 'Biomedical engineer calibrating Color Doppler Ultrasound system and transducer probe in Rift Valley Province, Kenya',
    },
    {
      id: 4,
      title: 'Operating Theatre LED Procedure Light & Suction Unit Setup',
      facility: 'Western Healthcare Surgical Wing',
      location: 'Kisumu, Kenya',
      category: 'theatre',
      date: '2026-06-20',
      service: 'Surgical Theatre Equipment Sourcing & Installation',
      description: 'Ceiling-mounted shadowless LED procedure light installation, heavy-duty suction pump wiring, and staff operational training.',
      image: '/images/gallery/operating-theatre-setup.png',
      alt: 'Surgical theatre ceiling LED procedure lights and suction units installed by Medwise biomedical engineers in Kisumu, Kenya',
    },
    {
      id: 5,
      title: 'ICU Patient Vital Signs Monitor & Defibrillator Calibration',
      facility: 'Nyanza Referral Emergency Center',
      location: 'Kisumu, Kenya',
      category: 'theatre',
      date: '2026-05-12',
      service: 'Metrological Calibration & Emergency Readiness',
      description: 'Biphasic AED simulator output testing, NIBP transducer verification, and SpO2 sensor recalibration.',
      image: '/images/gallery/icu-monitor-calibration.png',
      alt: 'Patient vital signs monitor and biphasic defibrillator calibration by Medwise engineers in Kenya',
    },
    {
      id: 6,
      title: 'Clinical Laboratory Centrifuge & Chemistry Analyzer QC',
      facility: 'Sagana Medical Laboratory',
      location: 'Sagana, Kenya',
      category: 'lab',
      date: '2026-04-18',
      service: 'Preventive Maintenance & Daily QC Protocol Setup',
      description: 'Volumetric pipetting accuracy verification, centrifuge tachometer RPM calibration, and reagent blank setup.',
      image: '/images/gallery/lab-centrifuge-chemistry-qc.png',
      alt: 'Biomedical engineer calibrating laboratory centrifuge and chemistry analyzer in Sagana, Kenya',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'lab', label: 'Laboratory Analyzers' },
    { id: 'radiology', label: 'Radiology & X-Ray' },
    { id: 'calibration', label: 'Calibration & QC' },
    { id: 'theatre', label: 'ICU & Theatre' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Medwise Technical Consulting: Previous Biomedical Works & Field Projects',
    itemListElement: galleryItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'ImageObject',
        name: item.title,
        caption: `${item.title} at ${item.facility}, ${item.location}`,
        contentUrl: `https://medwisetechnicalconsulting.co.ke${item.image}`,
        description: item.description,
      },
    })),
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
            Photographs of routine preventive maintenance, motor PCB board repairs, radiation shielding setup, and precision calibrations executed across Kenya.
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

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="flex flex-col justify-between rounded-2xl border border-[hsl(var(--border))] bg-white overflow-hidden shadow-2xs hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-[hsl(var(--border))]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Facility Tag */}
                <span className="absolute top-3 left-3 chip-label bg-white/95 text-[hsl(var(--foreground))] shadow-xs font-semibold">
                  {item.facility}
                </span>

                {/* Location Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-full">
                  <div className="flex items-center gap-1.5 font-normal truncate">
                    <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-white/80 shrink-0">
                    <Calendar className="w-3 h-3 text-[hsl(var(--primary-light))]" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <figcaption className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--primary))] mb-2">
                    <Wrench className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.service}</span>
                  </div>
                  <h3 className="font-bold text-base text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-light text-xs sm:text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[hsl(var(--border))] flex items-center justify-between text-xs font-semibold mt-4">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Field Verified</span>
                  </span>
                  <span className="text-[hsl(var(--primary))] group-hover:underline">
                    View Details &rarr;
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-[hsl(var(--border))]"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[hsl(var(--foreground))] hover:bg-white transition-colors cursor-pointer shadow-md"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-video w-full bg-slate-900">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-7 space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[hsl(var(--border))] pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--foreground))] bg-[hsl(var(--muted))] px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{selectedImage.facility} &middot; {selectedImage.location}</span>
                </span>
                <span className="text-xs font-mono text-[hsl(var(--muted-foreground))]">
                  {selectedImage.date}
                </span>
              </div>

              <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">
                {selectedImage.title}
              </h3>

              <p className="font-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="font-light text-[hsl(var(--muted-foreground))]">
                  Scope: <strong className="font-semibold text-[hsl(var(--foreground))]">{selectedImage.service}</strong>
                </span>
                <a
                  href={`https://wa.me/254117233522?text=Inquiry%20regarding%20${encodeURIComponent(selectedImage.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-primary text-xs h-10 px-5"
                >
                  <span>Request Similar Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
