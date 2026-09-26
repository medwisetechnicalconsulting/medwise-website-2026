import { SITE_CONFIG } from '@/lib/seo/schema';

export interface OtherDepartmentProduct {
  id: string;
  name: string;
  department: string;
  tagline: string;
  badge: string;
  category: 'dental' | 'theatre' | 'maternity' | 'icu';
  image: string;
  description: string;
  constituents: string[];
  highlights: string[];
  keySpecs: { label: string; value: string }[];
  priceRange?: string;
  warranty: string;
  deliveryTime: string;
}

export const OTHER_PRODUCTS_CATALOG: OtherDepartmentProduct[] = [
  // 1. Dental Department
  {
    id: 'dental',
    name: 'Dental Department Equipment Suite',
    department: 'Dental',
    tagline: 'Complete hospital and clinic dental operatory: ergonomic dental chairs, silent compressors, digital imaging, and endodontic tools.',
    badge: 'Complete Operatory Suite',
    category: 'dental',
    image: '/images/products/others/dental-equipment.jpg',
    description:
      'Turnkey clinical dental operatory and oral surgery equipment package engineered for Kenyan county referral hospitals, private dental clinics, and specialized dental practices. Medwise provides brand-neutral procurement, medical oil-free compressor installation, radiation safety testing, and comprehensive biomedical engineering maintenance.',
    constituents: [
      'Dental chairs with integrated oil-free air compressors',
      'Cordless LED lightcure units (high-intensity photopolymerization)',
      'Digital dental X-ray machines (wall-mounted, mobile & portable handheld high-frequency)',
      'Ultrasonic piezoelectric dental scalers with independent water reservoir irrigation',
      'Dental autoclave / benchtop Class B fractional vacuum steam sterilizers (18L & 23L)',
      'High-speed push-button and low-speed contra-angle dental handpiece sets',
      'High-volume oral evacuation (HVE) and surgical dental suction units',
      'Digital electronic apex locators and endodontic rotary motors',
      'Automatic dental amalgamator and restorative capsule mixers',
      'Direct USB digital intraoral dental X-ray sensors (Size 1 & Size 2)',
      'Intraoral dental HD video camera with chairside LCD examination monitor',
      'Dental surgical extraction forceps, root elevators, and diagnostic probe instrument sets',
      'Automatic dental handpiece lubrication and maintenance cleaning station',
    ],
    highlights: [
      'Ergonomic motorized dental chair with 9 programmable memories & multi-function foot switch',
      'Medical-grade oil-free silent compressor with refrigerated air-drying chamber (0.8 MPa)',
      'High-frequency 65kV/70kV intraoral dental X-ray with digital sensor optimization',
      'High-power 2,000 mW/cm² cordless LED light curing unit with ramp and pulse modes',
      'European Standard EN 13060 Class B vacuum autoclave with Bowie-Dick cycle verification',
      'Complete dental instrument sterilization and infection prevention package',
    ],
    keySpecs: [
      { label: 'Dental Chair Movement', value: 'Quiet 24V DC electromechanical motor; 9 preset memory positions; auto-return to zero' },
      { label: 'Air Compressor', value: 'Oil-free medical compressor (0.8 MPa, 50L/min+ flow, internal anti-rust tank coating)' },
      { label: 'Dental X-Ray Output', value: 'High frequency DC, 65kV/70kV, 0.4mm focal spot, radiation leakage < 0.25 mGy/h at 1m' },
      { label: 'Lightcure Curing Power', value: 'Broadband LED 420nm–480nm, up to 2,000 mW/cm², 1-second rapid curing mode' },
      { label: 'Sterilization Standard', value: 'Class B 3-time pre-vacuum and post-drying cycle (121°C & 134°C cycles)' },
      { label: 'Water Reservoir', value: 'Dual independent 1.5L purified water bottles + distilled water supply line' },
      { label: 'Warranty & Support', value: '1 Year comprehensive warranty + onsite biomedical engineer installation in Kenya' },
    ],
    priceRange: 'Custom Clinic & Hospital Quotations in KSh',
    warranty: '1 Year Comprehensive Warranty + Metrological Calibration',
    deliveryTime: '24–48 Hours Dispatch Across All 47 Counties in Kenya',
  },

  // 2. Operating Theatre
  {
    id: 'theatre',
    name: 'Operating Theatre (OT) Surgical Suite',
    department: 'Theatre',
    tagline: 'Turnkey surgical suite: anaesthesia workstations, 5 & 7 param monitors, surgical tables, theatre lights, and suction machines.',
    badge: 'Surgical Critical Suite',
    category: 'theatre',
    image: '/images/products/others/theatre-equipment.jpg',
    description:
      'Comprehensive operating theatre equipment package engineered for minor and major surgical procedures in Kenyan public and private healthcare facilities. Includes advanced anaesthesia workstations with integrated mechanical ventilation, multi-parameter patient monitoring, multi-position operating tables, shadowless surgical LED dome lights, and high-vacuum suction machines.',
    constituents: [
      'Anaesthesia machines with integrated ventilator and dual Sevoflurane / Isoflurane vaporizers',
      'Patient monitors 5 and 7 parameters (with mobile roll-stand, wall-mounted, and central station integration)',
      'Operating tables (electro-hydraulic and manual hydraulic multi-purpose radiolucent tables)',
      'Theatre lights (ceiling-mounted double arm, single arm, dual dome, and mobile LED dome with battery backup)',
      'Surgical suction machines (heavy-duty single and double bottle high-vacuum electric units)',
      'Operating surgical sets (Major D&C, Caesarean section, Laparotomy, fine suturing, and Orthopedic sets)',
      'High-frequency electrosurgical unit / diathermy machine (monopolar cutting/coagulation & bipolar)',
      'Biphasic defibrillator with external adult/pediatric paddles, ECG monitoring & pacing',
      'Medical surgical scrub sink (stainless steel 304, knee-operated or infrared sensor)',
      'Mobile stainless steel surgical instrument trolleys and Mayo stands',
      'Operating theatre medical gas pipeline terminal units (O2, N2O, Medical Air, Vacuum)',
      'Patient warming blanket system (forced-air thermal regulation to prevent intraoperative hypothermia)',
    ],
    highlights: [
      'Integrated anaesthesia workstation with tidal volume 20–1500ml & fail-safe hypoxic guard',
      'High-resolution 5 & 7 parameter patient monitors with ECG, SpO2, NIBP, Dual IBP & ETCO2',
      'Heavy-duty operating table with C-arm radiolucent top & built-in kidney elevator',
      'High-intensity shadowless dual-dome LED surgical theatre light (up to 160,000 Lux)',
      'Dual-bottle high-vacuum surgical suction pump (≥ 40 L/min flow) with overflow safety trap',
      'Complete German-standard stainless steel surgical instrument packs for major procedures',
    ],
    keySpecs: [
      { label: 'Anaesthesia Gases', value: 'O2, N2O, Medical Air pipeline inputs with pin-index cylinder yokes & nitrous cutoff' },
      { label: 'Ventilator Modes', value: 'IPPV, PCV, SIMV, PSV, Manual, Spontaneous with electronic PEEP valve' },
      { label: 'Patient Monitoring', value: '5-Parameter (standard) or 7-Parameter (ECG, SpO2, NIBP, Resp, 2x Temp, 2x IBP, EtCO2)' },
      { label: 'Operating Table Capacity', value: 'Safe working load up to 250 kg; Trendelenburg ±25°, Lateral tilt ±20°, Back section -20°/+75°' },
      { label: 'Theatre Light Output', value: 'Dual dome (160,000 Lux main + 120,000 Lux satellite); CRI ≥ 95; 50,000+ hour LED lifespan' },
      { label: 'Suction Capacity', value: 'High-vacuum / high-flow pump ≥ 40 L/min; Dual 2,500ml autoclavable polycarbonate jars' },
      { label: 'Electrical Safety', value: 'Class I, Type CF defibrillator-proof patient isolation complying with IEC 60601-1' },
    ],
    priceRange: 'Custom Clinic & Hospital Quotations in KSh',
    warranty: '1 Year Full Warranty + Electrical Safety Certification',
    deliveryTime: 'Immediate Dispatch from Kisumu HQ & Nairobi Field Hub',
  },

  // 3. Maternity & Newborn Unit
  {
    id: 'maternity',
    name: 'Maternity & Newborn Unit (NBU) Suite',
    department: 'Maternity (Newborn Unit)',
    tagline: 'Essential neonatal and maternal care: infant radiant baby warmers, baby incubators, resuscitaires, and phototherapy.',
    badge: 'Neonatal & Maternal Suite',
    category: 'maternity',
    image: '/images/products/others/maternity-equipment.jpg',
    description:
      'Standardized maternal and neonatal intensive care equipment suite designed to empower maternity hospitals, Level 4/5 facilities, and specialized maternity wings across Kenya. Features microprocessor-controlled infant radiant warmers, double-wall baby incubators, complete resuscitation stations, and ergonomic obstetric delivery beds.',
    constituents: [
      'Infant radiant baby warmers (microprocessor servo-controlled temperature with skin probe & APGAR timer)',
      'Baby incubators (neonatal intensive care infant incubator with air/skin servo control & humidity)',
      'Resuscitaire / Neonatal resuscitation unit (with integrated T-piece resuscitator, suction & O2 blender)',
      'High-intensity LED neonatal phototherapy units & overhead jaundice phototherapy lamps (460nm)',
      'Multi-function obstetric delivery beds & hydraulic labour / delivery tables',
      'Cardiotocography (CTG) fetal monitoring machines with dual ultrasound probes & TOCO transducer',
      'Handheld fetal Doppler monitors (high-sensitivity 2.0 MHz & 3.0 MHz waterproof probes with LCD display)',
      'Dedicated neonatal pulse oximeters with disposable and reusable infant silicone wrap sensors',
      'Neonatal electric suction machines & mucus extractors with gentle low-vacuum regulation',
      'Digital high-precision infant weighing scales with tare function and length measuring tray',
      'Neonatal transport incubator with internal battery backup and mobile oxygen cylinder mounts',
      'Complete delivery surgical instrument sets (episiotomy scissors, umbilical cord clamps, delivery forceps, vacuum extractor)',
    ],
    highlights: [
      'Microprocessor infant radiant warmer with quartz infrared heater & audible/visual deviation alarms',
      'Double-wall acrylic neonatal baby incubator minimizing conductive and radiant heat loss',
      'Complete neonatal resuscitaire station with integrated suction, O2 blender & timer for newborn resuscitation',
      'Intense blue LED phototherapy lamp (450–470nm) delivering high-irradiance hyperbilirubinemia treatment',
      'Obstetric delivery bed with seamless anti-microbial mattress, leg crutches & stainless fluid basin',
      'Dual-probe CTG fetal monitor providing simultaneous twin fetal heart rate and uterine contraction recording',
    ],
    keySpecs: [
      { label: 'Radiant Warmer Modes', value: 'Servo (Baby), Manual, and Pre-warm modes with skin temperature accuracy ±0.1°C' },
      { label: 'Incubator Temperature', value: 'Air mode 25.0°C–37.0°C (override to 39.0°C); Skin mode 34.0°C–37.5°C; humidity servo control' },
      { label: 'Resuscitaire Module', value: 'Integrated T-Piece PIP/PEEP resuscitator, suction controller, oxygen blender & APGAR timer' },
      { label: 'Phototherapy Irradiance', value: 'Blue LED peak 460nm, irradiance > 35 µW/cm²/nm, zero harmful UV/IR radiation emission' },
      { label: 'Fetal CTG Display', value: '12.1" color tilting TFT screen; FHR detection 50–240 bpm; TOCO range 0–100%' },
      { label: 'Delivery Bed Capacity', value: 'Safe patient working load 180 kg; back-rest tilt 0–70°, Trendelenburg 0–15°' },
      { label: 'Clinical Protocols', value: 'Conforms to Kenya Ministry of Health & WHO Essential Newborn Care (ENC) guidelines' },
    ],
    priceRange: 'Custom Clinic & Hospital Quotations in KSh',
    warranty: '1 Year Biomedical Warranty + Onsite Staff Training',
    deliveryTime: '24–48 Hours Dispatch Across All 47 Counties in Kenya',
  },

  // 4. Intensive Care Unit (ICU)
  {
    id: 'icu',
    name: 'Intensive Care Unit (ICU) Critical Care Suite',
    department: 'ICU',
    tagline: 'Advanced critical life support: ICU mechanical ventilators, modular patient monitors, infusion pumps, and electric beds.',
    badge: 'Critical Life Support Suite',
    category: 'icu',
    image: '/images/products/others/icu-equipment.jpg',
    description:
      'High-acuity intensive care unit (ICU) and High Dependency Unit (HDU) equipment suite designed for critical adult, pediatric, and neonatal patient management in Kenyan private and county referral hospitals. Encompasses invasive/non-invasive mechanical ventilation, multi-channel infusion therapy, hemodynamics, and 5-function ICU beds.',
    constituents: [
      'ICU mechanical ventilators (invasive & non-invasive adult, pediatric, neonatal ventilation with High-Flow O2 therapy)',
      'Advanced multi-parameter modular ICU patient monitors (ECG, SpO2, NIBP, Dual IBP, ETCO2, Temp, Arrhythmia)',
      'Stackable precision syringe infusion pumps & volumetric intravenous infusion pumps with central docking station',
      'Biphasic defibrillators / AED with external pacing, synchronized cardioversion & vital signs display',
      '5-Function motorized ICU electric patient beds with one-touch CPR release & anti-decubitus alternating air mattress',
      'Arterial Blood Gas (ABG) & point-of-care critical electrolyte analyzer (pH, pO2, pCO2, Na+, K+, Ca++, Lactate)',
      'Emergency crash cart / resuscitation trolley with defibrillator shelf, cardiac compression board & IV pole',
      'Medical air compressor station & central oxygen / vacuum pipeline regulators with flowmeters',
      'Deep Vein Thrombosis (DVT) sequential intermittent pneumatic compression pumps',
      'Portable transport emergency ventilator with mobile stand and medical oxygen cylinder mount',
      'ICU patient warming and cooling hyperthermia/hypothermia water blanket system',
      'Closed tracheal suction systems & disposable ventilator dual-limb breathing circuits with humidifiers',
    ],
    highlights: [
      'Comprehensive ICU mechanical ventilator supporting invasive, non-invasive & HFNC high-flow modes',
      'Modular 15" touch patient monitor with multi-lead ST segment and lethal arrhythmia detection',
      'Precision syringe and volumetric infusion pumps with comprehensive drug library and anti-bolus protection',
      '5-function electric ICU bed with battery backup, Trendelenburg, cardiac chair position & CPR quick dump',
      'Point-of-care critical care ABG blood gas testing delivering verified arterial results in 60 seconds',
      'Fully accessorized emergency resuscitation crash cart with central key lock and breakaway seals',
    ],
    keySpecs: [
      { label: 'Ventilator Modes', value: 'VCV, PCV, SIMV-V, SIMV-P, CPAP/PSV, PRVC, Bi-Level, APRV, HFNC, Non-Invasive (NIV)' },
      { label: 'Tidal Volume Range', value: '20 ml – 2,000 ml (Adult & Pediatric), 2 ml – 300 ml (Neonatal option with proximal flow sensor)' },
      { label: 'Monitoring Parameters', value: '3/5/12-lead ECG, Masimo/Nellcor SpO2, NIBP, 2x Temp, 2x IBP, Resp, Microstream EtCO2, Cardiac Output' },
      { label: 'Infusion Flow Rates', value: 'Syringe: 0.1–1500 ml/h; Volumetric: 0.1–2000 ml/h; Bolus rate up to 1800 ml/h; accuracy ±2%' },
      { label: 'Defibrillator Output', value: 'Biphasic truncated exponential 1J to 360J, AED adult/pediatric, manual sync, non-invasive pacing' },
      { label: 'ICU Bed Adjustments', value: 'Backrest (0–75°), Knee rest (0–45°), Height 450–800mm, Trendelenburg ±16°, one-touch CPR release' },
      { label: 'Emergency Support', value: 'Includes preventative maintenance agreement & 24/7 biomedical emergency dispatch' },
    ],
    priceRange: 'Custom Clinic & Hospital Quotations in KSh',
    warranty: '1 Year Full Warranty + Certified Calibration',
    deliveryTime: 'Immediate Dispatch from Kisumu HQ & Nairobi Field Hub',
  },
];

export function getOtherProductWhatsAppUrl(
  product: OtherDepartmentProduct,
  options?: { customBaseUrl?: string }
): string {
  const phone = SITE_CONFIG.whatsappNumber;
  const baseUrl = options?.customBaseUrl || SITE_CONFIG.url;
  const text = `Hello Medwise Technical Consulting, I am inquiring about the ${product.name} (${product.department} Department Equipment). Please provide current equipment quotation, delivery timeframe to our healthcare facility, and available configurations: ${baseUrl}/products/others#${product.id}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
