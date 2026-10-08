'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, X, ChevronRight, ArrowRight } from 'lucide-react';

interface DepartmentCard {
  id: string;
  name: string;
  department: string;
  description: string;
  estimatedPrice: string;
  slug: string;
  constituents: string[];
}

const DEPARTMENTS: DepartmentCard[] = [
  {
    id: "triage",
    name: "Triage Area Suite",
    department: "Triage",
    description: "Complete vital signs monitoring and initial patient assessment setup for clinics and health centers.",
    estimatedPrice: "KES 180,000 - 320,000",
    slug: "/blog/triage-equipment-list-requirements-kenya",
    constituents: ["Digital Patient Monitor", "Infrared & Digital Thermometers", "Weighing Scale with Stadiometer", "Pulse Oximeters & BP Sets"]
  },
  {
    id: "emergency",
    name: "Emergency & Dressing Room Suite",
    department: "Emergency",
    description: "Emergency resuscitation readiness and minor surgical dressing setup.",
    estimatedPrice: "KES 450,000 - 750,000",
    slug: "/blog/emergency-room-equipment-list-kenya",
    constituents: ["Emergency Crash Cart", "Double Bottle Suction Machine", "AED Defibrillator Unit", "Minor Surgical Dressing Set"]
  },
  {
    id: "procedure",
    name: "Procedure Room Suite",
    department: "Procedure Room",
    description: "Sterile procedure setup with shadowless lighting and multi-position examination couches.",
    estimatedPrice: "KES 350,000 - 600,000",
    slug: "/blog/procedure-room-equipment-list-kenya",
    constituents: ["LED Minor Procedure Light", "Hydraulic Procedure Couch", "24L Benchtop Autoclave", "Stainless Steel Mayo Trolley"]
  },
  {
    id: "consultation",
    name: "Consultation Room Suite",
    department: "Consultation Room",
    description: "Standard clinical officer and doctor consultation office diagnostic tools.",
    estimatedPrice: "KES 120,000 - 220,000",
    slug: "/blog/consultation-room-equipment-list-kenya",
    constituents: ["Diagnostic Wall / Desk Set", "Padded Examination Couch", "Doctor Stethoscope & BP Monitor", "LED X-Ray Film Viewer"]
  },
  {
    id: "maternity",
    name: "Maternity Ward Suite",
    department: "Maternity Ward",
    description: "Maternal monitoring systems, CTG fetal monitors, and recovery beds.",
    estimatedPrice: "KES 650,000 - 1,100,000",
    slug: "/blog/maternity-ward-equipment-list-kenya",
    constituents: ["CTG Fetal Monitor", "Portable Fetal Doppler", "Infant Radiant Warmer", "Maternity Recovery Bed"]
  },
  {
    id: "nursery",
    name: "Newborn Nursery (NBU) Suite",
    department: "Nursery",
    description: "Controlled thermal management, jaundice phototherapy, and neonatal resuscitation setup.",
    estimatedPrice: "KES 850,000 - 1,500,000",
    slug: "/blog/nursery-equipment-list-kenya",
    constituents: ["Neonatal Incubator", "LED Phototherapy Unit", "Neonatal Resuscitation Table", "Infant Stainless Steel Bassinet"]
  },
  {
    id: "delivery",
    name: "Delivery Room Suite",
    department: "Delivery Room",
    description: "Obstetric delivery couches, shadowless lamps, and newborn resuscitation stations.",
    estimatedPrice: "KES 550,000 - 950,000",
    slug: "/blog/delivery-room-equipment-list-kenya",
    constituents: ["Hydraulic Obstetric Delivery Table", "Shadowless Mobile LED Light", "Delivery Instrument Kit", "Obstetric Vacuum Extractor"]
  },
  {
    id: "medical-ward",
    name: "Inpatient Medical Ward Suite",
    department: "Medical Ward",
    description: "Inpatient ward furniture, bed monitoring, and nursing administration trolleys.",
    estimatedPrice: "KES 750,000 - 1,400,000",
    slug: "/blog/medical-ward-equipment-list-kenya",
    constituents: ["Two-Crank Bed with Mattress", "ABS Bedside Lockers", "IV Drip Stands", "Nursing Medication Trolley"]
  },
  {
    id: "theatre",
    name: "Operating Theatre (OT) Suite",
    department: "Operating Theatre",
    description: "Surgical OT setup including anesthesia workstations, electro-hydraulic tables, and surgical LED lights.",
    estimatedPrice: "KES 2,800,000 - 5,500,000",
    slug: "/blog/theatre-equipment-list-requirements-kenya",
    constituents: ["Electro-Hydraulic Operating Table", "Anesthesia Workstation with Ventilator", "Double Dome LED Surgical Light", "Electrosurgical Diathermy Unit"]
  },
  {
    id: "dental",
    name: "Dental Operatory Suite",
    department: "Dental Unit",
    description: "Electric dental chairs, silent medical air compressors, digital X-rays, and scalers.",
    estimatedPrice: "KES 1,200,000 - 2,200,000",
    slug: "/blog/dental-equipment-list-kenya",
    constituents: ["Fully Electric Dental Chair Unit", "Oil-Free Silent Compressor", "Intraoral Dental X-Ray Unit", "Ultrasonic Dental Scaler"]
  },
  {
    id: "optical",
    name: "Optical & Ophthalmic Suite",
    department: "Optical Unit",
    description: "Eye clinic refraction instrumentation, slit lamps, auto refractometers, and trial lens sets.",
    estimatedPrice: "KES 1,100,000 - 2,100,000",
    slug: "/blog/optical-equipment-list-kenya",
    constituents: ["Digital Auto Refractometer", "Ophthalmic Slit Lamp Microscope", "Manual Phoropter Refractor", "Trial Lens Set with Frame"]
  }
];

export default function OthersProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = DEPARTMENTS.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.constituents.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
            <span>Hospital Department Setup Guides</span>
            <span>•</span>
            <span>11 Clinical Departments</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital & Clinic Department Equipment Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Standard medical equipment requirements, estimated budget ranges, and MOH compliance guides for opening or upgrading clinical departments in Kenya.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search department or equipment name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 11 Department Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dept) => (
            <div
              key={dept.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    {dept.department}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-emerald-700">
                    {dept.estimatedPrice}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  {dept.name}
                </h2>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {dept.description}
                </p>

                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Standard Equipment Included:
                </div>
                <ul className="text-xs text-slate-700 space-y-1.5 mb-6">
                  {dept.constituents.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">
                    Est. Setup Budget
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-800">
                    {dept.estimatedPrice}
                  </span>
                </div>

                <Link
                  href={dept.slug}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow inline-flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
