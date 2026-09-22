'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  gradientBg: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'consulting',
    badge: 'INDEPENDENT ADVISORY',
    title: 'Pre-Purchase Technical Consulting',
    description: 'Workload evaluation, technical specification drafting, and site readiness audits matched to your clinical throughput.',
    image: '/images/services/pre-purchase-consulting.png',
    alt: 'Biomedical engineer reviewing medical blueprints and equipment specs',
    gradientBg: 'from-blue-50 to-blue-100/40',
  },
  {
    id: 'sourcing',
    badge: 'MULTI-BRAND SOURCING',
    title: 'Equipment Sourcing & Supply',
    description: 'Direct procurement of verified diagnostic and therapeutic equipment across Imaging, Laboratory, ICU, and Theatre.',
    image: '/images/services/equipment-sourcing.png',
    alt: 'Medical equipment warehouse with laboratory analyzers',
    gradientBg: 'from-amber-50 to-amber-100/40',
  },
  {
    id: 'installation',
    badge: 'VERIFIED METROLOGY',
    title: 'Installation & Calibration',
    description: 'Electrical and mechanical setup with certified metrological calibration traceable to international hospital standards.',
    image: '/images/services/installation-calibration.png',
    alt: 'Engineer performing calibration and electrical safety testing',
    gradientBg: 'from-emerald-50 to-emerald-100/40',
  },
  {
    id: 'training',
    badge: 'OPERATOR TRAINING',
    title: 'Staff Operational Training',
    description: 'Hands-on training for technologists and clinical staff on device operation, Quality Control (QC), and daily upkeep.',
    image: '/images/services/staff-training.png',
    alt: 'Clinical specialist training laboratory technologists',
    gradientBg: 'from-indigo-50 to-indigo-100/40',
  },
  {
    id: 'maintenance',
    badge: 'SCHEDULED PM & QC',
    title: 'Preventive Maintenance & SLA',
    description: 'Scheduled preventive maintenance, fluidic line flushing, optical alignment, and genuine manufacturer parts replacement.',
    image: '/images/services/maintenance-service-qc.png',
    alt: 'Service engineer conducting preventive maintenance on clinical analyzer',
    gradientBg: 'from-teal-50 to-teal-100/40',
  },
  {
    id: 'emergency',
    badge: '24/7 RAPID DISPATCH',
    title: 'Urgent Breakdown & Board Repair',
    description: 'Motor PCB board repairs, hydraulic pump troubleshooting, and rapid engineer dispatch across Kenya.',
    image: '/images/gallery/lukanji-2.jpeg',
    alt: 'Biomedical technician repairing clinical analyzer internal valves and motor drive mechanism',
    gradientBg: 'from-slate-100 to-slate-200/50',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[hsl(var(--muted))] py-20 sm:py-24 px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-14 gap-6">
          <div>
            <span className="font-semibold text-[0.68rem] tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
              OUR SERVICES
            </span>
            <h2 className="font-extrabold text-[clamp(2rem,3.2vw,2.8rem)] tracking-[-0.025em] leading-[1.15] text-[hsl(var(--foreground))]">
              Biomedical advisory, sourcing, and <br className="hidden sm:inline" />
              everything in between.
            </h2>
          </div>

          <Link
            href="/services"
            className="btn-pill-secondary h-11 px-7 text-sm font-semibold shrink-0"
          >
            <span>All services &rarr;</span>
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-[hsl(var(--border))] cursor-pointer service-card flex flex-col justify-between group"
            >
              <div>
                {/* Image Area with soft tint container */}
                <div className={`h-[160px] relative overflow-hidden bg-gradient-to-br ${service.gradientBg} border-b border-[hsl(var(--border))]`}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="chip-label mb-3">
                    {service.badge}
                  </span>

                  <h3 className="font-bold text-base text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-light text-sm text-[hsl(var(--muted-foreground))] leading-[1.65]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-0 mt-auto">
                <span className="font-semibold text-sm text-[hsl(var(--primary))] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
