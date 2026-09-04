'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

interface ServiceItem {
  id: string;
  category: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  neutralNotice?: string;
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: 'consulting',
    category: 'consulting',
    image: '/images/services/pre-purchase-consulting.png',
    alt: 'Biomedical engineer and healthcare administrator reviewing medical equipment blueprints and technical specifications',
    title: 'Pre-Purchase Technical Consulting',
    subtitle: 'Needs Assessment & Specification Drafting',
    description:
      'Facility workload evaluation, technical specification drafting, and site readiness audits. We ensure clinical facilities invest in machinery matched to their clinical volumes and power infrastructure.',
    features: [
      'Clinical workload & throughput modeling',
      'Technical specification drafting (RFP preparation)',
      'Facility power stability & site readiness review',
      'Total Cost of Ownership (TCO) financial modeling',
    ],
  },
  {
    id: 'sourcing',
    category: 'sourcing',
    image: '/images/services/equipment-sourcing.png',
    alt: 'Medical equipment warehouse featuring ultrasound, patient monitors, and laboratory analyzers ready for procurement',
    title: 'Equipment Sourcing & Supply',
    subtitle: 'Multi-Brand Medical Procurement',
    description:
      'Direct sourcing of verified diagnostic and therapeutic equipment across Imaging, Laboratory, ICU, Surgical Theatre, and Maternity verticals from reputable global manufacturers.',
    features: [
      'Imaging: Digital DR X-Ray, Ultrasound, Mammography',
      'Laboratory: 3-part / 5-part Hematology, Biochemistry, Centrifuges',
      'ICU & Theatre: Patient Monitors, Anesthesia, Suction Units',
      'Maternity: Fetal Dopplers, Infant Incubators, Phototherapy',
    ],
    neutralNotice: 'We source equipment, but our primary responsibility is independent technical advice.',
  },
  {
    id: 'installation',
    category: 'maintenance',
    image: '/images/services/installation-calibration.png',
    alt: 'Biomedical engineer performing metrological calibration and electrical safety testing on hospital machinery',
    title: 'Installation & Metrological Calibration',
    subtitle: 'Precision Handover & Certification',
    description:
      'Mechanical, electrical, and radiological installation. Every unit undergoes certified metrological calibration against traceable standards to guarantee accurate diagnostic readings from day one.',
    features: [
      'Unboxing, positioning & safety wiring',
      'Metrological simulator calibration with traceable certificates',
      'Radiation safety & KNRA room shielding compliance',
      'Audit-ready equipment service documentation',
    ],
  },
  {
    id: 'training',
    category: 'training',
    image: '/images/services/staff-training.png',
    alt: 'Clinical specialist training laboratory technologists and healthcare operators on medical device workflows',
    title: 'Staff Operational Training',
    subtitle: 'Hands-On Clinical Operator Training',
    description:
      'Structured on-site training for doctors, laboratory technologists, and nursing staff covering operational workflows, routine quality control (QC) checks, and first-line user maintenance.',
    features: [
      'Daily equipment operation workflows',
      'Quality Control (QC) run protocols & sample preparation',
      'Routine operator maintenance & cleaning routines',
      'Operator competence certification upon completion',
    ],
  },
  {
    id: 'maintenance',
    category: 'maintenance',
    image: '/images/services/maintenance-service-qc.png',
    alt: 'Biomedical service engineer conducting preventive maintenance and Quality Control analysis on clinical analyzer',
    title: 'Maintenance, Service & QC Analysis',
    subtitle: 'Preventive Maintenance & Rapid Repairs',
    description:
      'Scheduled preventive maintenance, rapid emergency engineer dispatch, genuine spare parts replacement, and quality control verification to maximize operational uptime.',
    features: [
      'Structured Preventive Maintenance (PM) contracts',
      'Emergency technician dispatch for board-level repairs',
      'Quality control (QC) verification & documentation',
      'Original manufacturer spare parts & fluidic tubing',
    ],
  },
];

const ICON_MAP: Record<string, typeof FileSearch> = {
  consulting: FileSearch,
  sourcing: ShoppingCart,
  installation: Settings,
  training: GraduationCap,
  maintenance: Activity,
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [servicesList, setServicesList] = useState<ServiceItem[]>(DEFAULT_SERVICES);

  useEffect(() => {
    fetch('/api/admin/services')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setServicesList(data);
        }
      })
      .catch((err) => console.error('Failed to load dynamic services:', err));
  }, []);

  const filteredServices = activeTab === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-900 border border-blue-200">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-700" />
            <span>Biomedical Engineering Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Medical Equipment Services &amp; Technical Support
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From pre-purchase technical evaluations to certified calibration and emergency board repairs, Medwise provides qualified biomedical engineering support across Kenya.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-bold">
          {[
            { id: 'all', label: 'All Technical Services' },
            { id: 'consulting', label: 'Pre-Purchase Advisory' },
            { id: 'sourcing', label: 'Device Procurement' },
            { id: 'maintenance', label: 'Maintenance & Calibration' },
            { id: 'training', label: 'Operator Training' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-3.5 py-2 transition-colors cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-blue-700 text-white border-blue-700 font-bold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = ICON_MAP[service.id] || ICON_MAP[service.category] || FileSearch;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Service Banner Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                        <Icon className="h-4 w-4" />
                        <span>{service.subtitle}</span>
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Neutral Disclaimer Note on Sourcing */}
                    {service.neutralNotice && (
                      <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50/90 p-3 text-xs text-blue-950 font-medium">
                        <strong>Note:</strong> {service.neutralNotice}
                      </div>
                    )}

                    {/* Features List */}
                    <ul className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between mt-auto text-xs">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span>Read Service Scope</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                    Kisumu &amp; Nairobi
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


