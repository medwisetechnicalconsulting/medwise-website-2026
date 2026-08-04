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
      image: "/images/blog/biomedical-calibration-guide.jpg",
      alt: "Biomedical technician repairing Zybio Z3 hematology analyzer motor board at Thagana County Medical Center in Sagana, Kenya",
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
      image: "/images/blog/xray-selection-guide.jpg",
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
      image: "/images/blog/clinic-setup-checklist.jpg",
      alt: "Biomedical engineer calibrating Color Doppler Ultrasound system and probe in Rift Valley Province, Kenya",
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
      image: "/images/blog/biomedical-calibration-guide.jpg",
      alt: "Surgical theatre procedure lights and suction units installed by Medwise biomedical engineers in Kisumu, Kenya",
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
      image: "/images/blog/clinic-setup-checklist.jpg",
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
      image: "/images/blog/xray-selection-guide.jpg",
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
    name: 'Medwise Technical Consulting — Previous Biomedical Works & Field Projects',
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
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Rich SEO JSON-LD Image Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

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
            <ImageIcon className="h-4 w-4 text-blue-700" />
            <span>On-Site Engineering Fieldwork</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gallery of Previous Fieldwork & Completed Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore photos of routine maintenance, motor board repairs, room installations, and certified calibrations executed across Kenya.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-4 py-2 transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20 scale-105'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid with Framer Motion Layout Animations */}
        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedImage(item)}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-blue-900 shadow-xs border border-white/40">
                    {item.facility}
                  </span>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1.5 font-bold">
                      <MapPin className="h-3.5 w-3.5 text-red-500" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-[11px] text-slate-300">
                      <Calendar className="h-3 w-3 text-blue-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <figcaption className="p-6 space-y-3 bg-white flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700">
                      <Wrench className="h-3.5 w-3.5 shrink-0" />
                      <span>{item.service}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-800">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Verified Field Report</span>
                    </span>
                    <span className="text-slate-400 font-mono">Inspect Project →</span>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl bg-white overflow-hidden shadow-2xl border border-slate-200 text-slate-900"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close Lightbox Modal"
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur-md hover:bg-slate-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video w-full bg-slate-900">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    <MapPin className="h-3.5 w-3.5 text-red-600" />
                    <span>{selectedImage.facility} — {selectedImage.location}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    Completed: {selectedImage.date}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  {selectedImage.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedImage.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span>Category: <strong className="text-blue-700 uppercase">{selectedImage.category}</strong></span>
                  <a
                    href="https://wa.me/254117233522?text=Inquiry%20regarding%20similar%20service%20to%20field%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-800 transition-colors"
                  >
                    <span>Request Similar Field Support</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
