'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSearch, 
  ShoppingCart, 
  Settings, 
  GraduationCap, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const services = [
    {
      id: 'consulting',
      category: 'consulting',
      icon: FileSearch,
      image: '/images/services/pre-purchase-consulting.png',
      alt: 'Biomedical engineer and healthcare administrator reviewing medical equipment blueprints and technical specifications',
      title: "Pre-Purchase Consulting",
      subtitle: "Making Informed Technical Decisions",
      description:
        "Comprehensive needs assessment, technical specification drafting, and site readiness planning. We help you select medical machinery that matches your clinical volume and financial parameters.",
      features: [
        "Clinical needs & workload analysis",
        "Technical specification drafting",
        "Facility power & site readiness evaluation",
        "Total cost of ownership (TCO) modeling",
      ],
    },
    {
      id: 'sourcing',
      category: 'sourcing',
      icon: ShoppingCart,
      image: '/images/services/equipment-sourcing.png',
      alt: 'Modern medical equipment warehouse featuring Ultrasound, Patient Monitors, and Laboratory Analyzers ready for hospital procurement',
      title: "Equipment Sourcing & Supply",
      subtitle: "Multi-Category Device Procurement",
      description:
        "Access to high-grade diagnostic and treatment devices across Imaging, Laboratory, ICU, Surgical Theatre, and Maternity categories from trusted international manufacturers.",
      features: [
        "Imaging (DR X-Ray, Ultrasound, Mammography)",
        "Laboratory (Hematology, Chemistry, Centrifuges)",
        "ICU & Theatre (Monitors, Anesthesia, Ventilators)",
        "Maternity (Fetal Dopplers, Incubators, Phototherapy)",
      ],
      neutralNotice: "We supply equipment, but our first job is to advise you neutrally.",
    },
    {
      id: 'installation',
      category: 'maintenance',
      icon: Settings,
      image: '/images/services/installation-calibration.png',
      alt: 'Certified biomedical engineer performing precision metrological calibration and electrical safety testing on hospital machinery',
      title: "Installation & Calibration",
      subtitle: "Precision Engineering Integration",
      description:
        "Flawless mechanical, electrical, and radiological installation. Every device undergoes certified calibration using traceable standards to ensure diagnostic accuracy from day one.",
      features: [
        "Unboxing, positioning & safety wiring",
        "Metrological calibration against certified standards",
        "Radiation shielding compliance (KNRA)",
        "Documentation & certification for audit readiness",
      ],
    },
    {
      id: 'training',
      category: 'training',
      icon: GraduationCap,
      image: '/images/services/staff-training.png',
      alt: 'Clinical specialist training African laboratory technologists and healthcare operators on medical device workflows',
      title: "Staff Operational Training",
      subtitle: "Empowering Your Clinical Team",
      description:
        "Comprehensive hands-on training for clinical operators, lab technologists, and facility staff on device usage, daily quality control checks, and basic troubleshooting.",
      features: [
        "On-site operational workflows",
        "Daily QC protocols & sample prep training",
        "Basic routine maintenance & care routines",
        "Certification for clinical operators",
      ],
    },
    {
      id: 'maintenance',
      category: 'maintenance',
      icon: Activity,
      image: '/images/services/maintenance-service-qc.png',
      alt: 'Biomedical service engineer conducting preventive maintenance and Quality Control analysis on clinical analyzer',
      title: "Maintenance, Service & QC Analysis",
      subtitle: "Guaranteed Operational Uptime",
      description:
        "Scheduled preventive maintenance, emergency repair dispatch, genuine replacement parts, and ongoing quality assurance analysis to maximize device longevity.",
      features: [
        "Scheduled Preventive Maintenance (PM)",
        "Rapid emergency response team",
        "Quality control (QC) verification & report logging",
        "Genuine factory spare parts supply",
      ],
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200 text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold text-blue-900 border border-blue-200 shadow-2xs">
            <ShieldCheck className="h-4 w-4 text-red-600" />
            <span>Comprehensive Technical Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            End-to-End Solutions for Medical Devices
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            From pre-purchase technical evaluation to ongoing precision calibration, Medwise delivers biomedical engineering expertise at every touchpoint.
          </p>
        </motion.div>

        {/* Interactive Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold">
          {[
            { id: 'all', label: 'All Technical Services' },
            { id: 'consulting', label: 'Pre-Purchase Advisory' },
            { id: 'sourcing', label: 'Device Procurement' },
            { id: 'maintenance', label: 'Maintenance & Calibration' },
            { id: 'training', label: 'Staff Training' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xl px-4 py-2 transition-all cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20 scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Services Cards Grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all group"
                >
                  <div>
                    {/* Service Banner Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                      {/* Header overlay badge & index */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-blue-700 shadow-md backdrop-blur-md border border-white/50 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-white bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 shadow-xs">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7 space-y-3">
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs font-bold text-blue-700">
                        {service.subtitle}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {service.description}
                      </p>

                      {/* Neutral Disclaimer Note on Sourcing */}
                      {service.neutralNotice && (
                        <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/90 p-3 text-xs font-semibold text-blue-950 shadow-2xs">
                          💡 <strong>Note:</strong> {service.neutralNotice}
                        </div>
                      )}

                      {/* Features List */}
                      <ul className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Medwise Core</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

