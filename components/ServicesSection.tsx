import Link from 'next/link';
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
  const services = [
    {
      id: 'consulting',
      icon: FileSearch,
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
      icon: ShoppingCart,
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
      icon: Settings,
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
      icon: GraduationCap,
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
      icon: Activity,
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

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="h-4 w-4" />
            <span>Comprehensive Technical Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            End-to-End Solutions for Medical Devices
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            From pre-purchase technical evaluation to ongoing precision calibration, Medwise delivers biomedical engineering expertise at every touchpoint.
          </p>
        </div>

        {/* Category Tags Banner */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-slate-300">
          <span className="text-slate-500">Equipment Categories Covered:</span>
          {['Imaging & Radiology', 'Laboratory & Diagnostics', 'ICU & Emergency', 'Surgical Theatre', 'Maternity & Neonatal'].map((cat, idx) => (
            <span key={idx} className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-1 text-emerald-300">
              {cat}
            </span>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-slate-800/70 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400/90 mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Optional Neutral Disclaimer Note on Sourcing */}
                  {service.neutralNotice && (
                    <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-medium text-emerald-300">
                      💡 <strong>Note:</strong> {service.neutralNotice}
                    </div>
                  )}

                  {/* Features List */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-slate-800">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Medwise Core</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
