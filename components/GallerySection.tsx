'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, CheckCircle2, Wrench, MapPin, Calendar, Maximize2, X } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Zybio Z3 Hematology Analyzer Motor Board Repair",
      facility: "Thagana County Medical Center",
      location: "Sagana, Kenya",
      category: "lab",
      date: "2026-08-04",
      service: "PCB Board Diagnosis & Routine Maintenance",
      description: "Diagnosed motor drive board failure, replaced with original specs, performed routine maintenance and QC functionality check.",
      image: "/images/gallery/zybio-board-repair.png",
      alt: "Biomedical technician repairing Zybio Z3 hematology analyzer electronic motor PCB board at Thagana County Medical Center in Sagana, Kenya",
    },
    {
      id: 2,
      title: "Digital DR X-Ray Room Shielding & Room Integration",
      facility: "Kisumu Diagnostic Center",
      location: "Kisumu Kakamega Road, Kenya",
      category: "radiology",
      date: "2026-07-28",
      service: "Pre-Purchase Site Advisory & Radiation Safety Setup",
      description: "Room layout optimization, lead shielding verification, and high-frequency generator alignment to KNRA safety standards.",
      image: "/images/gallery/dr-xray-room.png",
      alt: "Digital DR X-Ray machine installation and lead radiation shielding inspection in Kisumu, Kenya",
    },
    {
      id: 3,
      title: "Color Doppler Ultrasound Calibration & Probe Verification",
      facility: "Rift Valley Regional Outpatient Clinic",
      location: "Rift Valley Province, Kenya",
      category: "calibration",
      date: "2026-07-15",
      service: "Probe Integrity & Metrological Calibration",
      description: "Ultrasound beamformer calibration, transducer crystal verification, and image resolution optimization.",
      image: "/images/gallery/ultrasound-calibration.png",
      alt: "Biomedical engineer calibrating Color Doppler Ultrasound system and transducer probe in Rift Valley Province, Kenya",
    },
    {
      id: 4,
      title: "Operating Theatre LED Procedure Light & Suction Unit Setup",
      facility: "Western Healthcare Surgical Wing",
      location: "Kisumu, Kenya",
      category: "theatre",
      date: "2026-06-20",
      service: "Surgical Theatre Equipment Sourcing & Installation",
      description: "Ceiling-mounted shadowless LED procedure light installation, heavy-duty suction pump wiring, and staff operational training.",
      image: "/images/gallery/operating-theatre-setup.png",
      alt: "Surgical theatre ceiling LED procedure lights and suction units installed by Medwise biomedical engineers in Kisumu, Kenya",
    },
    {
      id: 5,
      title: "ICU Patient Vital Signs Monitor & Defibrillator Calibration",
      facility: "Nyanza Referral Emergency Center",
      location: "Kisumu, Kenya",
      category: "theatre",
      date: "2026-05-12",
      service: "Metrological Calibration & Emergency Readiness",
      description: "Biphasic AED simulator output testing, NIBP transducer verification, and SpO2 sensor recalibration.",
      image: "/images/gallery/icu-monitor-calibration.png",
      alt: "Patient vital signs monitor and biphasic defibrillator calibration by Medwise engineers in Kenya",
    },
    {
      id: 6,
      title: "Clinical Laboratory Centrifuge & Chemistry Analyzer QC",
      facility: "Sagana Medical Laboratory",
      location: "Sagana, Kenya",
      category: "lab",
      date: "2026-04-18",
      service: "Preventive Maintenance & Daily QC Protocol Setup",
      description: "Volumetric pipetting accuracy verification, centrifuge tachometer RPM calibration, and reagent blank setup.",
      image: "/images/gallery/lab-centrifuge-chemistry-qc.png",
      alt: "Biomedical engineer calibrating laboratory centrifuge and chemistry analyzer in Sagana, Kenya",
    },
  ];

  const categories = [
    { id: 'all', label: 'All Field Projects' },
    { id: 'lab', label: 'Laboratory Analyzers' },
    { id: 'radiology', label: 'Radiology & X-Ray' },
    { id: 'calibration', label: 'Calibration & QC' },
    { id: 'theatre', label: 'ICU & Theatre' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Schema.org ImageObject List for Rich SEO
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
    <section id="gallery" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      {/* Rich SEO JSON-LD Image Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-900 border border-blue-200">
            <ImageIcon className="h-3.5 w-3.5 text-blue-700" />
            <span>Fieldwork Documentation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Fieldwork &amp; Project Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Photographs of routine maintenance, PCB drive board diagnosis, lead radiation shielding setup, and precision calibrations executed across Kenya.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-3.5 py-2 transition-colors cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-blue-700 text-white border-blue-700 font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-colors cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-95"
                />
                
                {/* Facility Tag */}
                <span className="absolute top-2.5 left-2.5 rounded bg-slate-950/85 px-2.5 py-1 text-[11px] font-semibold text-white border border-slate-700">
                  {item.facility}
                </span>

                {/* Location Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-white bg-slate-950/80 px-2.5 py-1 rounded">
                  <div className="flex items-center gap-1 font-medium">
                    <MapPin className="h-3 w-3 text-red-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-slate-300">
                    <Calendar className="h-3 w-3 text-blue-300" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <figcaption className="p-5 space-y-2.5 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700">
                    <Wrench className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.service}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Field Verified</span>
                  </span>
                  <span className="text-slate-500 font-mono">Expand Details →</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl border border-slate-200 text-slate-900"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox Modal"
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/80 text-white hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
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
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded">
                  <MapPin className="h-3.5 w-3.5 text-red-600" />
                  <span>{selectedImage.facility} • {selectedImage.location}</span>
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  Date: {selectedImage.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {selectedImage.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Category: <strong className="text-blue-700 uppercase">{selectedImage.category}</strong></span>
                <a
                  href="https://wa.me/254117233522?text=Inquiry%20regarding%20similar%20service%20to%20field%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-2 text-xs font-bold text-white hover:bg-blue-800 transition-colors"
                >
                  <span>Request Similar Technical Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
