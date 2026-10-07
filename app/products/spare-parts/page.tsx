import Link from 'next/link';
import { 
  Wrench, 
  Cpu, 
  Activity, 
  Wind, 
  Droplet, 
  Flame, 
  Maximize2, 
  PhoneCall, 
  MessageSquare 
} from 'lucide-react';

const sparePartsCategories = [
  {
    id: 'analyzer-components-cuvettes',
    title: 'Analyzer Spare Parts, Cuvettes & Sample Cups',
    icon: Cpu,
    image: '/images/products/analyzer-parts-cuvettes.jpg',
    imageAlt: 'Clinical analyzer spare parts, valves, lamps and reaction cuvettes',
    description: 'Genuine OEM and compatible fluidic components, optical lamps, reaction vessels, and sample cups for clinical analyzers.',
    items: [
      'Solenoid Valves & Fluidic Valve Blocks',
      'Peristaltic & Syringe Liquid Pumps',
      'Mainboard & Power Supply (PSU) Repair/Replacement',
      'High-Precision Fluidic Tubing & Manifolds',
      'Biochemistry Halogen Lamps & Photometer Filters',
      'Sample & Reagent Aspiration Probes',
      'Reaction Cuvettes (Disposable & Reusable Quartz/Plastic)',
      'Sample Cups & Micro-Tubes (Conical, Flat-Bottom, Hita-type, Cup-in-Cup)',
    ],
  },
  {
    id: 'patient-monitoring-stands',
    title: 'Patient Monitoring Accessories, Probes & Rolling Stands',
    icon: Activity,
    image: '/images/products/patient-monitor-probes-stands.jpg',
    imageAlt: 'Patient monitor SpO2 sensors, ECG leads, NIBP cuffs, and rolling stands',
    description: 'High-durability sensors, leads, cuffs, and heavy-duty mounting/rolling stands compatible with major monitor brands.',
    items: [
      'Reusable & Disposable SpO2 Sensors (Adult, Pediatric, Neonatal)',
      '3-Lead & 5-Lead ECG Trunk Cables & Leadwires',
      'NIBP Cuffs (Infant to Thigh) & Air Connection Hoses',
      'Skin & Rectal Temperature Probes',
      'Galvanic & Paramagnetic Oxygen Sensors (FiO2 Cells)',
      'Height-Adjustable Mobile Rolling Stands for Patient Monitors',
      'Heavy-Duty Trolley Stands for Ultrasound Machines & ECG Units',
    ],
  },
  {
    id: 'autoclave-sterilization-parts',
    title: 'Autoclave & Sterilizer Spare Parts',
    icon: Flame,
    image: '/images/products/autoclave-heating-elements-gaskets.jpg',
    imageAlt: 'Autoclave immersion heating elements, silicone door gaskets, and safety valves',
    description: 'Heavy-duty replacement elements, sealing gaskets, and safety valves for vertical, tabletop, and horizontal steam autoclaves.',
    items: [
      'High-Wattage Electric Heating Elements (Immersion Type)',
      'Heat-Resistant Silicone & Rubber Door Gaskets/Seals',
      'Safety Release Valves & Pressure Relief Valves',
      'Solenoid Valves for Steam & Water Release',
      'Pressure Gauges & Temperature Controllers/Sensors (PT100)',
      'Water Level Sensors & Heating Element Protection Switches',
    ],
  },
  {
    id: 'dialysis-consumables',
    title: 'Universal Dialysis Consumables & Blood Lines',
    icon: Droplet,
    image: '/images/products/dialysis-bloodlines-dialyzers.jpg',
    imageAlt: 'Hemodialysis arterial and venous blood lines, dialyzers, and fistula needles',
    description: 'Universal medical-grade consumables and accessories for renal care and hemodialysis units.',
    items: [
      'Universal Hemodialysis Blood Tubing Lines (Arterial & Venous Sets)',
      'High-Flux & Low-Flux Hollow-Fiber Dialyzers',
      'AV Fistula Needles (Arterial & Venous with Safety Clip)',
      'Acid Concentrate & Bicarbonate Cartridges/Powder',
      'Disinfection & Citric Acid Cleaning Solutions',
      'Central Venous Hemodialysis Catheters (Temporary & Permcath)',
    ],
  },
  {
    id: 'anaesthesia-respiratory',
    title: 'Anaesthesia, Respiratory & OT Consumables',
    icon: Wind,
    image: '/images/products/anaesthesia-breathing-circuits-diathermy.jpg',
    imageAlt: 'Anaesthesia breathing circuits, face masks, and diathermy monopolar pencils',
    description: 'Breathing circuits, face masks, and monopolar/bipolar accessories for OT workstations and ICU ventilators.',
    items: [
      'Reusable & Disposable Breathing Circuits (Adult & Pediatric)',
      'Ventilator & Anaesthesia HME Filters & Catheter Mounts',
      'Oxygen Face Masks, Venturi Masks & Nasal Cannulas',
      'Silicon Resuscitator Bags (Ambu Bags) & Anaesthesia Masks',
      'Monopolar Cautery Pencils (Button & Foot-switch operated)',
      'Patient Return Plates / Neutral Electrodes (Disposable & Reusable Silicon)',
    ],
  },
  {
    id: 'lab-safety-uv-lamps',
    title: 'Biosafety Cabinet UV Lamps & Cleanroom Spares',
    icon: Maximize2,
    image: '/images/products/biosafety-cabinet-uv-lamps.jpg',
    imageAlt: 'Germicidal UV-C lamps and HEPA filters for biosafety cabinets',
    description: 'Germicidal replacement lamps, HEPA filters, and maintenance accessories for Laminar Flow and Biosafety Cabinets.',
    items: [
      'Germicidal UV-C Replacement Lamps (T5/T8 - 15W, 30W, 36W)',
      'Main H14 HEPA Filters & Exhaust Pre-Filters',
      'Differential Pressure Gauges (Dwyer Magnehelic)',
      'Blower Motors & Speed Controllers',
    ],
  },
];

export default function SparePartsSection() {
  return (
    <section className="bg-slate-50/50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-[1200px] space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Wrench className="h-3.5 w-3.5" />
            <span>Spare Parts, Consumables &amp; Equipment Mounts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Medical Equipment Spare Parts, Sensors &amp; OT Consumables in Kenya
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate facility downtime with our stocked inventory of analyzer valves, autoclave gaskets, dialysis bloodlines, monitor rolling stands, biosafety UV lamps, and patient monitor probes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sparePartsCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id} 
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Category Image Header */}
                  <div className="relative h-48 w-full bg-slate-100 border-b border-slate-100 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.imageAlt} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {category.description}
                    </p>
                    
                    {/* Item List */}
                    <ul className="pt-2 space-y-2 border-t border-slate-100">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={`https://wa.me/254117233522?text=Inquiry%20about%20${encodeURIComponent(category.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Inquire / Request Quotation on WhatsApp →</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Support Banner */}
        <div className="rounded-3xl bg-primary text-white p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Can’t Find a Specific Spare Part, Probe, or Heating Element?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Our biomedical engineering team directly sources hard-to-find electronic boards, optical assemblies, custom sensor probes, and autoclave heating elements across Kisumu, Nairobi, and nationwide.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="https://wa.me/254117233522?text=Inquiry%20for%20Medical%20Equipment%20Spare%20Part"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Engineer Direct</span>
            </a>
            <a
              href="tel:+254117233522"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 border border-white/20"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call +254 117 233 522</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
