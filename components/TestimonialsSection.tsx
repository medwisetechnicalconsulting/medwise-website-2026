'use client';

import { CheckCircle2, Building2, Wrench, MapPin, Calendar, FileCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function TestimonialsSection() {
  const serviceRecords = [
    {
      facility: 'Thagana County Medical Center',
      location: 'Sagana, Kirinyaga County',
      equipment: 'Zybio Z3 3-Part Hematology Analyzer',
      serviceScope: 'PCB Motor Drive Board Diagnosis & Replacement',
      leadTechnician: 'Brian Musango (Field Biomedical Engineer)',
      serviceDate: 'August 2026',
      recordId: 'SR-2026-0804',
      outcome:
        'Diagnosed hydraulic sample pump failure to a shorted transistor on the motor PCB drive board. Replaced board with factory specifications, flushed microfluidic tubing, and ran 3-level commercial controls with CV < 2.0%. Restored to full clinical operation in under 4 hours.',
    },
    {
      facility: 'Kisumu Regional Diagnostic Center',
      location: 'Kisumu Kakamega Road, Kisumu',
      equipment: 'High-Frequency Digital DR X-Ray System',
      serviceScope: 'Pre-Purchase Advisory & KNRA Room Shielding Audit',
      leadTechnician: 'Senior Radiologic Consulting Engineer',
      serviceDate: 'July 2026',
      recordId: 'SR-2026-0722',
      outcome:
        'Conducted neutral pre-purchase evaluation across three competing digital radiography suppliers. Identified unneeded vendor software licensing fees, saving the facility KSh 800,000. Verified 2.0 mm lead room shielding compliance prior to equipment delivery.',
    },
    {
      facility: 'Rift Valley Outpatient Medical Clinic',
      location: 'Nakuru, Rift Valley Region',
      equipment: 'Clinical Chemistry Analyzer & Laboratory Centrifuges',
      serviceScope: 'Preventive Maintenance, RPM Calibration & Staff QC Training',
      leadTechnician: 'Metrological Calibration Specialist',
      serviceDate: 'June 2026',
      recordId: 'SR-2026-0615',
      outcome:
        'Executed scheduled semi-annual preventive maintenance. Calibrated centrifuge tachometer speeds with a certified optical strobe, aligned photometer optical filters, and trained laboratory technologists on daily Levey-Jennings QC chart tracking.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-900 border border-blue-200">
            <FileCheck className="h-3.5 w-3.5 text-blue-700" />
            <span>Field Technical Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified Field Engagements &amp; Technical Support Records
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real service visit outcomes from healthcare facilities, county hospitals, and medical laboratories supported by Medwise engineers across Kenya.
          </p>
        </div>

        {/* 3 Grounded Service Record Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceRecords.map((record, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="p-6 space-y-4">
                {/* Facility & Location Header */}
                <div className="space-y-1 border-b border-slate-100 pb-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {record.recordId}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {record.serviceDate}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 pt-1">
                    {record.facility}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-red-500 shrink-0" />
                    <span>{record.location}</span>
                  </div>
                </div>

                {/* Equipment & Scope */}
                <div className="rounded-lg bg-slate-50 p-3 border border-slate-200/80 space-y-1.5 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Equipment</span>
                    <strong className="text-slate-800 font-semibold">{record.equipment}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Scope of Work</span>
                    <span className="text-slate-700 font-medium">{record.serviceScope}</span>
                  </div>
                </div>

                {/* Outcome Statement */}
                <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900 text-xs block">Engineering Outcome:</span>
                  <p>{record.outcome}</p>
                </div>
              </div>

              {/* Technician Verification Footer */}
              <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 mt-auto flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1 text-emerald-700 font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified Service Visit</span>
                </div>
                <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
                  {record.leadTechnician.split(' (')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

