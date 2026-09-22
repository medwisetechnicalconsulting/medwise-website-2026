'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Wrench, MapPin, Calendar, X } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const galleryItems = [
    // 1. Lukanji Medical Centre - Kakamega
    {
      id: 1,
      title: 'Excbio EHB300 Hematology Analyzer Startup & QC Validation',
      facility: 'Lukanji Medical Centre',
      location: 'Kakamega, Kenya',
      category: 'maintenance',
      date: '2026-05-14',
      service: 'Routine Maintenance, Calibration & QC',
      description: 'Comprehensive routine maintenance and system startup diagnostics on an Excbio EHB300 3-part hematology analyzer, verifying reagent blank parameters and leukocyte counting precision.',
      image: '/images/gallery/lukanji-1.jpeg',
      alt: 'Medwise biomedical engineer performing routine maintenance and QC calibration on Excbio EHB300 hematology analyzer at Lukanji Medical Centre in Kakamega, Kenya',
    },
    {
      id: 2,
      title: 'Internal Microfluidic Lines & Syringe Pump Overhaul',
      facility: 'Lukanji Medical Centre',
      location: 'Kakamega, Kenya',
      category: 'maintenance',
      date: '2026-05-14',
      service: 'Microfluidic Servicing & Valve Calibration',
      description: 'Chamber de-clotting, solenoid valve inspection, motorized syringe pump recalibration, and micro-tubing fluidic checks to eliminate aspiration drift and background noise.',
      image: '/images/gallery/lukanji-2.jpeg',
      alt: 'Internal microfluidic valves, counting chambers, and syringe drive pump servicing on hematology analyzer at Lukanji Medical Centre Kakamega',
    },
    {
      id: 3,
      title: 'Optical Chamber Sensor Alignment & QC Functional Check',
      facility: 'Lukanji Medical Centre',
      location: 'Kakamega, Kenya',
      category: 'calibration',
      date: '2026-05-15',
      service: 'Photometric Optical Calibration & Sensor Verification',
      description: 'Laser optical aperture calibration, detector sensor alignment, and hemolyzing bath illumination checks ensuring coefficient of variation (CV) < 2.0%.',
      image: '/images/gallery/lukanji-3.jpeg',
      alt: 'Photometric optical sensor alignment and chamber testing on Excbio hematology system at Lukanji Medical Centre Kakamega',
    },

    // 2. Kabera Medical Centre
    {
      id: 4,
      title: 'Bioelab EC 30 Hematology Analyzer Fresh Installation',
      facility: 'Kabera Medical Centre',
      location: 'Kenya',
      category: 'installation',
      date: '2026-06-22',
      service: 'New Equipment Installation & Commissioning',
      description: 'Fresh unboxing, laboratory bench placement, electrical grounding verification, diluent line priming, and factory baseline test running for a Bioelab EC 30 analyzer.',
      image: '/images/gallery/kabera-1.jpeg',
      alt: 'Fresh installation of Bioelab EC 30 automated hematology analyzer on laboratory bench at Kabera Medical Centre, Kenya',
    },
    {
      id: 5,
      title: 'Bioelab EC 30 Diagnostic Screen Verification & Baseline Run',
      facility: 'Kabera Medical Centre',
      location: 'Kenya',
      category: 'installation',
      date: '2026-06-22',
      service: 'Commissioning & Diagnostic Benchmark Testing',
      description: 'Tri-angle scattergram evaluation, parameter threshold configuration (WBC, RBC, PLT), and whole blood test verification to establish operational readiness.',
      image: '/images/gallery/kabera-2.jpeg',
      alt: 'Diagnostic interface and parameter configuration on Bioelab EC 30 hematology machine at Kabera Medical Centre, Kenya',
    },

    // 3. Unam Medical Centre - Kisumu
    {
      id: 6,
      title: 'Complete Internal Overhaul & Stepper Motor Diagnostics',
      facility: 'Unam Medical Centre',
      location: 'Kisumu, Kenya',
      category: 'maintenance',
      date: '2026-07-16',
      service: 'Internal Chassis Service & PCB Drive Inspection',
      description: 'Deep diagnostic teardown, stepper motor drive board testing, ribbon cable integrity checks, and micro-switch recalibration for continuous clinical uptime.',
      image: '/images/gallery/unam-1.jpeg',
      alt: 'Internal chassis and PCB motor drive board overhaul by Medwise biomedical engineers at Unam Medical Centre Kisumu',
    },
    {
      id: 7,
      title: 'Reagent Delivery System & Solenoid Valve Maintenance',
      facility: 'Unam Medical Centre',
      location: 'Kisumu, Kenya',
      category: 'maintenance',
      date: '2026-07-16',
      service: 'Fluidic Hydraulics & Lyse Reagent Line Servicing',
      description: 'Fluid line de-proteinization, lyse reagent bottle pickup calibration, manifold valve sealing check, and pressure sensor verification.',
      image: '/images/gallery/unam-2.jpeg',
      alt: 'Reagent hydraulic pump and solenoid manifold maintenance on clinical lab analyzer at Unam Medical Centre in Kisumu',
    },
    {
      id: 8,
      title: 'Integrated Hematology, Chemistry & Centrifuge Suite Calibration',
      facility: 'Unam Medical Centre',
      location: 'Kisumu, Kenya',
      category: 'calibration',
      date: '2026-07-17',
      service: 'Laboratory Suite Multi-Analyzer QC & Calibration',
      description: 'Holistic bench inspection: Dymind DH36 hematology system, clinical chemistry analyzer, laboratory centrifuge RPM tachometer test, and microscope optical alignment.',
      image: '/images/gallery/unam-3.jpeg',
      alt: 'Full clinical laboratory bench with Dymind hematology analyzer, centrifuge, microscope, and reagent station at Unam Medical Centre Kisumu',
    },

    // 4. Narok County Referral Hospital - Narok County
    {
      id: 9,
      title: 'Urit CA-200 Automated Biochemistry & Electrolyte Setup',
      facility: 'Narok County Referral Hospital',
      location: 'Narok County, Kenya',
      category: 'installation',
      date: '2026-08-25',
      service: 'Automated Biochemistry & Electrolyte Installation',
      description: 'Turnkey clinical laboratory installation of a Urit CA-200 fully automated biochemistry analyzer alongside an electrolyte analyzer workstation with pure water wash integration.',
      image: '/images/gallery/narok-1.jpeg',
      alt: 'Urit CA-200 automated clinical chemistry analyzer and electrolyte machine installed at Narok County Referral Hospital',
    },
    {
      id: 10,
      title: 'Laboratory Technologist Clinical Operational Training',
      facility: 'Narok County Referral Hospital',
      location: 'Narok County, Kenya',
      category: 'training',
      date: '2026-08-26',
      service: 'Hands-On Technologist Operation & Workflow Training',
      description: 'Comprehensive hands-on training for Kenyan hospital laboratory technologists covering calibration curves, sample batch scheduling, daily startup protocols, and frontline troubleshooting.',
      image: '/images/gallery/narok-2.jpeg',
      alt: 'Hospital laboratory technologists receiving hands-on operational training on Urit CA-200 biochemistry analyzer at Narok County Referral Hospital',
    },
    {
      id: 11,
      title: 'Urit CA-200 Optical Photometer & Sample Carousel Calibration',
      facility: 'Narok County Referral Hospital',
      location: 'Narok County, Kenya',
      category: 'calibration',
      date: '2026-08-26',
      service: 'Precision Optical Calibration & QC Multi-Rule Setup',
      description: 'Reaction cuvette wash cycle validation, multi-wavelength absorbance calibration (340nm–700nm), and Westgard QC multirule integration on control PC terminal.',
      image: '/images/gallery/narok-3.jpeg',
      alt: 'Sample carousel, reagent disk, and computerized interface calibration on Urit CA-200 clinical chemistry machine in Narok County',
    },
    {
      id: 12,
      title: 'Clinical Staff Reagent Handling & Protocol Briefing',
      facility: 'Narok County Referral Hospital',
      location: 'Narok County, Kenya',
      category: 'training',
      date: '2026-08-27',
      service: 'Cold-Chain Reagent Handling & Quality Control Certification',
      description: 'Demonstrating temperature-controlled reagent onboard storage, barcode sample reading, emergency STAT sample interrupts, and preventive cleaning routines to the clinical team.',
      image: '/images/gallery/narok-4.jpeg',
      alt: 'Biomedical trainer instructing laboratory staff on reagent management and QC protocols at Narok County Referral Hospital',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects (12)' },
    { id: 'installation', label: 'Fresh Installation' },
    { id: 'maintenance', label: 'Maintenance & Service' },
    { id: 'calibration', label: 'Calibration & QC' },
    { id: 'training', label: 'Technologist Training' },
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
            Verified field photographs of automated biochemistry installations, clinical hematology routine maintenance, QC calibrations, and staff operational training across Kenyan hospitals.
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
