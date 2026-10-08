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
    id: "dental",
    name: "Dental Operatory Suite",
    department: "Dental Unit",
    description: "Complete dental surgery setup including electric dental chair, silent air compressor, intraoral X-ray, and scaling instrumentation.",
    estimatedPrice: "KES 1,200,000 - 2,200,000",
    slug: "/products/others#dental",
    constituents: [
      "Fully Electric Dental Chair Unit",
      "Oil-Free Silent Air Compressor",
      "Intraoral Dental X-Ray Unit",
      "Ultrasonic Dental Scaler & Curing Light"
    ]
  },
  {
    id: "theatre",
    name: "Operating Theatre (OT) Suite",
    department: "Operating Theatre",
    description: "Surgical OT installation comprising anesthesia workstation, electro-hydraulic operating table, shadowless LED lights, and diathermy.",
    estimatedPrice: "KES 2,800,000 - 5,500,000",
    slug: "/products/others#theatre",
    constituents: [
      "Electro-Hydraulic Operating Table",
      "Anesthesia Workstation with Ventilator",
      "Double-Dome LED Surgical Light",
      "Electrosurgical Diathermy Unit"
    ]
  },
  {
    id: "maternity",
    name: "Maternity & Delivery Suite",
    department: "Maternity Ward",
    description: "Complete labor, delivery, and recovery setup with obstetric delivery beds, CTG monitors, radiant warmers, and suction units.",
    estimatedPrice: "KES 850,000 - 1,800,000",
    slug: "/products/others#maternity",
    constituents: [
      "Hydraulic Obstetric Delivery Bed",
      "Cardiotocography (CTG) Fetal Monitor",
      "Infant Radiant Warmer",
      "Mobile Shadowless Examination Light"
    ]
  },
  {
    id: "icu",
    name: "ICU & High Dependency Unit (HDU)",
    department: "Critical Care",
    description: "Critical care equipment bundle including multi-parameter patient monitors, ICU ventilators, syringe pumps, and crash carts.",
    estimatedPrice: "KES 3,200,000 - 6,800,000",
    slug: "/products/others#icu",
    constituents: [
      "Multi-Parameter ICU Patient Monitor",
      "ICU Ventilator (Invasive/Non-Invasive)",
      "Dual-Channel Syringe & Infusion Pumps",
      "Emergency Crash Cart with AED"
    ]
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
            <span>Specialized Clinical Suites</span>
            <span>•</span>
            <span>4 Key Departments</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Department Setup Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Complete equipment suites for specialized hospital departments in Kenya. Certified metrology calibration and full installation included.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search department or equipment..."
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

        {/* Department Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  href="/contact"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow inline-flex items-center gap-1"
                >
                  <span>Request Quote</span>
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
