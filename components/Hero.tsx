'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageSquare,
  Phone,
  CheckCircle2,
  ArrowRight,
  Award,
  Wrench,
  ShieldCheck,
  Cpu,
  Zap,
  Check,
  Layers,
  Activity,
  Building2,
  Flame,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

// Facility tiers for the interactive equipment feasibility console
interface FacilityTier {
  id: string;
  name: string;
  badge: string;
  primaryEquipment: string;
  sampleVolume: string;
  powerRequirement: string;
  reagentFootprint: string;
  sla: string;
  waText: string;
}

const FACILITY_TIERS: FacilityTier[] = [
  {
    id: 'clinic',
    name: 'Level 2 / 3 Clinic',
    badge: 'Dispensary & Outpatient',
    primaryEquipment: 'Mindray BC-20s Auto Hematology (3-Part) + Edan POCT Chemistry',
    sampleVolume: '10 – 35 samples/day',
    powerRequirement: '1.0 – 1.5 kVA Pure Sine Wave UPS (Grid fluctuation protection)',
    reagentFootprint: 'Compact closed packs, ambient 15–30°C storage',
    sla: 'Bi-annual preventive maintenance + same-day telephone triage',
    waText: 'Hello Medwise Technical Consulting, I am inquiring on equipment feasibility and pricing for a Level 2/3 Clinic.',
  },
  {
    id: 'hospital',
    name: 'Level 4 Hospital',
    badge: 'Sub-County & Inpatient',
    primaryEquipment: 'Mindray BC-5000 (5-Part Diff) + Mindray BS-240 Clinical Chemistry (200 T/H)',
    sampleVolume: '50 – 160 samples/day',
    powerRequirement: '2.0 – 3.0 kVA Double-Conversion Online UPS + Auto-transfer generator link',
    reagentFootprint: '2–8°C onboard refrigerated carousels with barcode tracking',
    sla: 'Quarterly calibration with Fluke safety analyzer + < 4h emergency dispatch',
    waText: 'Hello Medwise Technical Consulting, I need an equipment sizing audit and quotation for a Level 4 Sub-County Hospital.',
  },
  {
    id: 'lab',
    name: 'Diagnostic Reference Lab',
    badge: 'High-Throughput Commercial',
    primaryEquipment: 'Mindray BS-360 / BS-480 Chemistry + CL-900i Chemiluminescence Immunoassay',
    sampleVolume: '200+ samples/day',
    powerRequirement: '5.0 kVA Dedicated clean-line power conditioner + dual redundancy',
    reagentFootprint: 'High-capacity continuous bulk reagent loading & deionized water plant',
    sla: 'Full uptime SLA, monthly on-site verification & priority parts reserve',
    waText: 'Hello Medwise Technical Consulting, I am seeking equipment procurement advisory for a High-Throughput Diagnostic Lab.',
  },
];

export default function Hero() {
  const [selectedTier, setSelectedTier] = useState<FacilityTier>(FACILITY_TIERS[0]);

  return (
    <section className="relative bg-[#0A1B2D] text-white py-14 sm:py-18 lg:py-20 border-b border-[#1E3A5F] overflow-hidden bg-clinical-grid-dark">
      {/* Authentic High-Resolution Clinical Engineering Background */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Medwise Technical Consulting biomedical engineers evaluating medical equipment"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center opacity-25 pointer-events-none"
      />

      {/* Solid High-Contrast Flat Tint (Zero Gradients) */}
      <div className="absolute inset-0 bg-[#0A1B2D]/85 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clinical Engineering Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Clinical Accreditation Badge with live pulse */}
            <div className="inline-flex items-center gap-2 rounded-md border border-[#2B4C74] bg-[#0F2942] px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DC2626]"></span>
              </span>
              <span className="text-white font-bold">Independent Biomedical Advisory</span>
              <span className="text-slate-400 hidden sm:inline">• Kisumu HQ &amp; Nairobi Field Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Buy the Right Medical Equipment. <span className="text-slate-200">The First Time.</span>
            </h1>

            {/* Supporting Copy Grounded in Kenyan Clinical Practice */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Medwise Technical Consulting is an independent biomedical engineering firm based in Kenya. We evaluate your facility&apos;s daily patient volume, space, and power infrastructure to recommend, source, install, and calibrate diagnostic devices without single-brand sales pressure.
            </p>

            {/* Tactile Next-Level Call to Action Buttons (Uiverse.io 3D mechanical press) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20book%20an%20equipment%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="med-btn-tactile med-btn-tactile-emerald"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-white shrink-0" />
                <span>WhatsApp Senior Engineer</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="med-btn-tactile med-btn-tactile-secondary"
              >
                <Phone className="h-4.5 w-4.5 text-[#DC2626] shrink-0" />
                <span>Call {SITE_CONFIG.telephone}</span>
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-300 hover:text-white py-3 sm:px-3 transition-colors group min-h-[44px]"
              >
                <span>Browse Equipment Catalog</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-[#DC2626]" />
              </Link>
            </div>

            {/* 3 Physical Engineering Trust Pillars */}
            <div className="pt-6 border-t border-[#1E3A5F] grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#0F2942]/90 border border-[#1E3A5F]">
                <div className="h-7 w-7 rounded bg-[#1E3A5F] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Brand Neutral</h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">Zero vendor quotas; multi-brand technical match.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#0F2942]/90 border border-[#1E3A5F]">
                <div className="h-7 w-7 rounded bg-[#1E3A5F] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="h-4 w-4 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Clear TCO</h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">Full upfront reagent, power &amp; service budget in KSh.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#0F2942]/90 border border-[#1E3A5F]">
                <div className="h-7 w-7 rounded bg-[#1E3A5F] flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Fast Dispatch</h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">Kisumu HQ &amp; Nairobi hub for rapid field service.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Facility Feasibility Sizer (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#2B4C74] bg-[#0F2942] p-5 shadow-xl">
              
              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-[#1E3A5F] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4.5 w-4.5 text-[#DC2626]" />
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                      Facility Sizing Terminal
                    </span>
                    <p className="text-[10px] text-slate-400">Match equipment to clinical tier</p>
                  </div>
                </div>
                <span className="rounded bg-emerald-950/80 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-800">
                  Kenya Standard
                </span>
              </div>

              {/* Tier Selection Buttons (Uiverse.io physical tab toggle) */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-lg bg-[#0A1B2D] border border-[#1E3A5F] mb-4">
                {FACILITY_TIERS.map((tier) => {
                  const isActive = selectedTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier)}
                      className={`rounded-md py-2 px-1.5 text-center text-xs font-bold transition-all cursor-pointer min-h-[38px] ${
                        isActive
                          ? 'bg-[#1E3A5F] text-white shadow-xs border border-[#2B4C74]'
                          : 'text-slate-400 hover:text-white hover:bg-[#1E3A5F]/40'
                      }`}
                    >
                      <span className="block truncate text-[11px]">{tier.name.split(' ')[0]} {tier.name.split(' ')[1]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Tier Specifications Card */}
              <div className="space-y-3.5 rounded-lg bg-[#0A1B2D]/80 border border-[#1E3A5F] p-4 text-xs">
                
                {/* Active Tier Header */}
                <div className="flex items-center justify-between border-b border-[#1E3A5F]/70 pb-2">
                  <div>
                    <span className="text-xs font-bold text-white">{selectedTier.name}</span>
                    <span className="block text-[10px] text-slate-400">{selectedTier.badge}</span>
                  </div>
                  <span className="rounded bg-blue-900/60 text-blue-300 px-2 py-0.5 text-[10px] font-semibold border border-blue-700/60">
                    Recommended Spec
                  </span>
                </div>

                {/* Machine Recommendation */}
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    <Layers className="h-3 w-3 text-emerald-400" />
                    <span>Primary Diagnostic Suite</span>
                  </div>
                  <p className="font-bold text-white text-xs sm:text-[13px] leading-snug">
                    {selectedTier.primaryEquipment}
                  </p>
                </div>

                {/* Throughput & Power Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#1E3A5F]/70">
                  <div className="p-2 rounded bg-[#0F2942]/70 border border-[#1E3A5F]">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-0.5">
                      Throughput
                    </span>
                    <span className="font-bold text-white tabular-data text-[11px]">
                      {selectedTier.sampleVolume}
                    </span>
                  </div>

                  <div className="p-2 rounded bg-[#0F2942]/70 border border-[#1E3A5F]">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-0.5">
                      Power Conditioning
                    </span>
                    <span className="font-semibold text-slate-200 text-[11px] leading-tight block">
                      {selectedTier.powerRequirement.split(' ')[0]} {selectedTier.powerRequirement.split(' ')[1]} {selectedTier.powerRequirement.split(' ')[2]}
                    </span>
                  </div>
                </div>

                {/* Maintenance & Support SLA */}
                <div className="p-2 rounded bg-[#0F2942]/70 border border-[#1E3A5F]">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 uppercase mb-0.5">
                    <Wrench className="h-2.5 w-2.5 text-amber-400" />
                    <span>SLA &amp; Engineering Support</span>
                  </div>
                  <p className="text-[11px] text-slate-200">
                    {selectedTier.sla}
                  </p>
                </div>

                {/* WhatsApp Action for the exact tier */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(selectedTier.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="med-btn-tactile med-btn-tactile-emerald w-full mt-2"
                >
                  <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                  <span>Request {selectedTier.name} Audit &amp; Quote</span>
                </a>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[10px] text-slate-400">
                  ⚡ Neutral evaluation based on actual workload, zero vendor markups.
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Live Engineering Spec Strip across bottom of Hero */}
        <div className="mt-12 pt-8 border-t border-[#1E3A5F] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-slate-300">
          <div className="border-l-2 border-[#DC2626] pl-3">
            <div className="text-lg sm:text-xl font-extrabold text-white tabular-data">47 Counties</div>
            <div className="text-xs text-slate-400 mt-0.5">Direct field dispatch across Kenya</div>
          </div>

          <div className="border-l-2 border-emerald-500 pl-3">
            <div className="text-lg sm:text-xl font-extrabold text-white tabular-data">&lt; 4 Hours SLA</div>
            <div className="text-xs text-slate-400 mt-0.5">Emergency response Kisumu &amp; Nairobi</div>
          </div>

          <div className="border-l-2 border-blue-500 pl-3">
            <div className="text-lg sm:text-xl font-extrabold text-white tabular-data">100% Traceable</div>
            <div className="text-xs text-slate-400 mt-0.5">Calibration via calibrated Fluke analyzers</div>
          </div>

          <div className="border-l-2 border-amber-500 pl-3">
            <div className="text-lg sm:text-xl font-extrabold text-white tabular-data">KSh 0 Markup</div>
            <div className="text-xs text-slate-400 mt-0.5">Transparent lifecycle reagent &amp; parts cost</div>
          </div>
        </div>

      </div>
    </section>
  );
}

