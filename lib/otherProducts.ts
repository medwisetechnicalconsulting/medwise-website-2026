export interface OtherProductDepartment {
  id: string;
  name: string;
  department: string;
  description: string;
  estimatedPrice: string;
  slug: string;
  constituents: string[];
}

export const OTHER_PRODUCTS_CATALOG: OtherProductDepartment[] = [
  {
    id: "triage",
    name: "Triage Area Suite",
    department: "Triage",
    description: "Complete vital signs monitoring and initial patient assessment setup for clinics and health centers.",
    estimatedPrice: "KES 180,000 - 320,000",
    slug: "/blog/triage-equipment-list-requirements-kenya",
    constituents: [
      "Digital Patient Monitor",
      "Infrared & Digital Thermometers",
      "Weighing Scale with Stadiometer",
      "Pulse Oximeters & BP Sets"
    ]
  },
  {
    id: "emergency",
    name: "Emergency & Dressing Room Suite",
    department: "Emergency",
    description: "Emergency resuscitation readiness and minor surgical dressing setup.",
    estimatedPrice: "KES 450,000 - 750,000",
    slug: "/blog/emergency-room-equipment-list-kenya",
    constituents: [
      "Emergency Crash Cart",
      "Double Bottle Suction Machine",
      "AED Defibrillator Unit",
      "Minor Surgical Dressing Set"
    ]
  },
  {
    id: "procedure",
    name: "Procedure Room Suite",
    department: "Procedure Room",
    description: "Sterile procedure setup with shadowless lighting and multi-position examination couches.",
    estimatedPrice: "KES 350,000 - 600,000",
    slug: "/blog/procedure-room-equipment-list-kenya",
    constituents: [
      "LED Minor Procedure Light",
      "Hydraulic Procedure Couch",
      "24L Benchtop Autoclave",
      "Stainless Steel Mayo Trolley"
    ]
  },
  {
    id: "consultation",
    name: "Consultation Room Suite",
    department: "Consultation Room",
    description: "Standard clinical officer and doctor consultation office diagnostic tools.",
    estimatedPrice: "KES 120,000 - 220,000",
    slug: "/blog/consultation-room-equipment-list-kenya",
    constituents: [
      "Diagnostic Wall / Desk Set",
      "Padded Examination Couch",
      "Doctor Stethoscope & BP Monitor",
      "LED X-Ray Film Viewer"
    ]
  },
  {
    id: "maternity",
    name: "Maternity Ward Suite",
    department: "Maternity Ward",
    description: "Maternal monitoring systems, CTG fetal monitors, and recovery beds.",
    estimatedPrice: "KES 650,000 - 1,100,000",
    slug: "/blog/maternity-ward-equipment-list-kenya",
    constituents: [
      "CTG Fetal Monitor",
      "Portable Fetal Doppler",
      "Infant Radiant Warmer",
      "Maternity Recovery Bed"
    ]
  },
  {
    id: "nursery",
    name: "Newborn Nursery (NBU) Suite",
    department: "Nursery",
    description: "Controlled thermal management, jaundice phototherapy, and neonatal resuscitation setup.",
    estimatedPrice: "KES 850,000 - 1,500,000",
    slug: "/blog/nursery-equipment-list-kenya",
    constituents: [
      "Neonatal Incubator",
      "LED Phototherapy Unit",
      "Neonatal Resuscitation Table",
      "Infant Stainless Steel Bassinet"
    ]
  },
  {
    id: "delivery",
    name: "Delivery Room Suite",
    department: "Delivery Room",
    description: "Obstetric delivery couches, shadowless lamps, and newborn resuscitation stations.",
    estimatedPrice: "KES 550,000 - 950,000",
    slug: "/blog/delivery-room-equipment-list-kenya",
    constituents: [
      "Hydraulic Obstetric Delivery Table",
      "Shadowless Mobile LED Light",
      "Delivery Instrument Kit",
      "Obstetric Vacuum Extractor"
    ]
  },
  {
    id: "medical-ward",
    name: "Inpatient Medical Ward Suite",
    department: "Medical Ward",
    description: "Inpatient ward furniture, bed monitoring, and nursing administration trolleys.",
    estimatedPrice: "KES 750,000 - 1,400,000",
    slug: "/blog/medical-ward-equipment-list-kenya",
    constituents: [
      "Two-Crank Bed with Mattress",
      "ABS Bedside Lockers",
      "IV Drip Stands",
      "Nursing Medication Trolley"
    ]
  },
  {
    id: "theatre",
    name: "Operating Theatre (OT) Suite",
    department: "Operating Theatre",
    description: "Surgical OT setup including anesthesia workstations, electro-hydraulic tables, and surgical LED lights.",
    estimatedPrice: "KES 2,800,000 - 5,500,000",
    slug: "/blog/theatre-equipment-list-requirements-kenya",
    constituents: [
      "Electro-Hydraulic Operating Table",
      "Anesthesia Workstation with Ventilator",
      "Double Dome LED Surgical Light",
      "Electrosurgical Diathermy Unit"
    ]
  },
  {
    id: "dental",
    name: "Dental Operatory Suite",
    department: "Dental Unit",
    description: "Electric dental chairs, silent medical air compressors, digital X-rays, and scalers.",
    estimatedPrice: "KES 1,200,000 - 2,200,000",
    slug: "/blog/dental-equipment-list-kenya",
    constituents: [
      "Fully Electric Dental Chair Unit",
      "Oil-Free Silent Compressor",
      "Intraoral Dental X-Ray Unit",
      "Ultrasonic Dental Scaler"
    ]
  },
  {
    id: "optical",
    name: "Optical & Ophthalmic Suite",
    department: "Optical Unit",
    description: "Eye clinic refraction instrumentation, slit lamps, auto refractometers, and trial lens sets.",
    estimatedPrice: "KES 1,100,000 - 2,100,000",
    slug: "/blog/optical-equipment-list-kenya",
    constituents: [
      "Digital Auto Refractometer",
      "Ophthalmic Slit Lamp Microscope",
      "Manual Phoropter Refractor",
      "Trial Lens Set with Frame"
    ]
  }
];
