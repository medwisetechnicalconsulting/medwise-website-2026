export interface ServiceItem {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  iconName: 'Wrench' | 'Compass' | 'PackageCheck' | 'ShieldCheck' | 'Activity' | 'Sliders';
  intro: string;
  sections: {
    heading: string;
    content: string;
    bullets?: string[];
  }[];
  supportedAreas?: string[];
  relatedSlugs: string[];
  ctaHeadline: string;
  ctaText: string;
}

export const SERVICES_DATA: Record<string, ServiceItem> = {
  'installation-user-training': {
    slug: 'installation-user-training',
    title: 'Installation & User Training',
    seoTitle: 'Medical Equipment Installation & User Training in Kenya | Medwise Technical Consulting',
    metaDescription: 'Professional medical equipment installation, site assessment, commissioning, user training and SOP support for healthcare facilities in Kenya.',
    shortDescription: 'From site assessment and preparation to equipment installation, commissioning and user training, Medwise Technical Consulting helps healthcare facilities ensure their equipment is correctly installed, safe, functional and ready for use.',
    image: '/images/products/patient-monitor-probes-stands.jpg',
    imageAlt: 'Biomedical engineer conducting medical equipment installation and functional checks in a Kenyan clinic',
    iconName: 'Wrench',
    intro: 'Medwise Technical Consulting provides professional installation and commissioning support for medical and healthcare equipment across Kenya. We assess the installation environment, help ensure site readiness, install and set up equipment, conduct functional checks, and train operational teams on correct use and care.',
    sections: [
      {
        heading: 'Site Inspection & Readiness Assessment',
        content: 'Installation begins with determining whether the intended location is physically, electrically, and environmentally suitable for the specific device. Depending on the equipment and healthcare facility, our site assessment covers critical technical conditions before unboxing:',
        bullets: [
          'Building & room requirements: Dimensions, door clearance, layout, and floor stability/slope.',
          'Ventilation & aeration: HVAC considerations, ambient temperature control, and humidity ranges.',
          'Utilities & infrastructure: Dedicated electrical grounding/earth lines, AVR/UPS sizing, clean water supply, and adequate drainage.',
          'Specialized lines: Compressed air, medical vacuum, oxygen piping, and radiation protection shielding (where applicable).',
          'Access & safety: Ergonomic positioning, maintenance access clearances, and safety compliance.'
        ]
      },
      {
        heading: 'Equipment Installation & Setup',
        content: 'Proper installation goes far beyond unboxing. Our biomedical engineers manage physical positioning, assembly, fluidic and electrical connections, configuration, and comprehensive commissioning to verify that equipment functions strictly according to OEM performance specifications.'
      },
      {
        heading: 'User Walkthrough & Operational Training',
        content: 'Equipment reliability relies on trained personnel. We conduct practical user walkthroughs for clinical technologists, nurses, and radiographers covering standard startup protocols, routine care, basic user troubleshooting, and safety precautions.'
      },
      {
        heading: 'Standard Operating Procedures (SOPs)',
        content: 'To prevent operational errors and ensure consistent daily protocols, Medwise assists facilities with tailored Standard Operating Procedures (SOPs). These procedures standardize workflows, ease onboarding for new personnel, and improve equipment accountability.'
      },
      {
        heading: 'Documentation & Handover',
        content: 'Upon completion, we provide documented handover files including commissioning logs, earth ground test verifications, operator training attendance sheets, warranty verification notes, and recommended preventative maintenance schedules.'
      }
    ],
    supportedAreas: [
      'Laboratory & Diagnostic Analyzers',
      'Operating Theatre & Anesthesia Workstations',
      'Radiology & Ultrasound Imaging Systems',
      'Dental Units & Compressors',
      'Oxygen Plants & Manifolds',
      'ICU & Maternity (NBU) Equipment',
      'Mortuary Cold Rooms & Equipment'
    ],
    relatedSlugs: ['pre-purchase-consulting', 'sourcing-medical-equipment', 'preventive-maintenance-service-contracts'],
    ctaHeadline: 'Planning to Install New Medical Equipment?',
    ctaText: 'Talk to Medwise Technical Consulting about site readiness audits, physical installation, and certified user training.'
  },

  'pre-purchase-consulting': {
    slug: 'pre-purchase-consulting',
    title: 'Pre-Purchase Guidance & Consulting',
    seoTitle: 'Medical Equipment Pre-Purchase Consulting in Kenya | Medwise Technical Consulting',
    metaDescription: 'Independent technical guidance, equipment specification review, and total cost of ownership analysis for healthcare facilities in Kenya before buying.',
    shortDescription: 'We help healthcare facilities understand their technical needs, budget and operational requirements before committing to equipment purchases, providing independent technical guidance to support informed decisions.',
    image: '/images/products/analyzer-parts-cuvettes.jpg',
    imageAlt: 'Biomedical engineering pre-purchase technical evaluation and quotation review',
    iconName: 'Compass',
    intro: 'Medwise Technical Consulting helps healthcare facilities make informed, cost-effective equipment decisions before committing capital. We evaluate technical specifications, clinical throughput requirements, facility power quality, and long-term operating costs to eliminate premature failure or idle machinery.',
    sections: [
      {
        heading: 'Understanding Your Facility Needs',
        content: 'We conduct objective clinical workflow audits taking into account your facility type, planned services, test volume, available floor space, power infrastructure, and budget. Whether establishing a new clinic, expanding a laboratory, or replacing aging machinery, we tailor technical guidance to your reality.'
      },
      {
        heading: 'Purchase vs. Rental / Leasing Assessment',
        content: 'Not every capital equipment need requires direct purchase. We help facility administrators evaluate alternative acquisition strategies, comparing outright purchase against equipment placement, leasing, or reagent-rental models where available.'
      },
      {
        heading: 'Technical Evaluation & Compatibility',
        content: 'Our engineers scrutinize equipment specifications against real-world operating conditions in Kenya. We evaluate power tolerance, water quality requirements, reagent availability, open vs. closed system architectures, consumable costs, and local spare parts supply lines.'
      },
      {
        heading: 'Independent Supplier Offer Comparison',
        content: 'Clients routinely bring vendor quotations to Medwise for neutral comparison. We review pricing structure, warranty terms, bundled accessories, installation inclusions, consumable pricing guarantees, and long-term maintenance service agreements.'
      }
    ],
    relatedSlugs: ['sourcing-medical-equipment', 'installation-user-training', 'medical-equipment-repair'],
    ctaHeadline: 'Not Sure Which Equipment Fits Your Facility?',
    ctaText: 'Consult our practicing biomedical engineering team before signing supplier contracts or committing capital.'
  },

  'sourcing-medical-equipment': {
    slug: 'sourcing-medical-equipment',
    title: 'Sourcing & Medical Equipment Supply',
    seoTitle: 'Medical Equipment Sourcing & Supply in Kenya | Medwise Technical Consulting',
    metaDescription: 'Transparent medical equipment sourcing, vendor negotiation, and procurement coordination for hospitals and laboratories across Kenya.',
    shortDescription: 'Once the appropriate equipment has been identified, Medwise assists with sourcing, supplier negotiations, procurement, delivery and coordination of installation and after-sales support.',
    image: '/images/products/dialysis-bloodlines-dialyzers.jpg',
    imageAlt: 'Medical equipment sourcing, procurement, and supply delivery in Kenya',
    iconName: 'PackageCheck',
    intro: 'After establishing exact technical requirements, Medwise Technical Consulting assists facilities with transparent equipment sourcing and procurement. We leverage verified direct channels to provide reliable diagnostic machinery and clinical equipment with manufacturer warranties.',
    sections: [
      {
        heading: 'Transparent Sourcing & Supplier Identification',
        content: 'We match your facility with reputable equipment manufacturers and certified suppliers. Our focus is delivering reliable, field-tested diagnostic machines with verified local spare parts availability and strong manufacturer support.'
      },
      {
        heading: 'Price, Warranty & Service Negotiation',
        content: 'Our technical understanding allows us to negotiate effectively on your behalf—securing fair market pricing, realistic warranty conditions, essential accessory kits, and committed post-warranty service terms.'
      },
      {
        heading: 'Delivery, Logistics & End-to-End Coordination',
        content: 'We coordinate end-to-end logistics, pre-delivery site readiness verification, safe transit to your facility anywhere in Kenya, unboxing, installation, and handover.'
      },
      {
        heading: 'Flexible Procurement Support Models',
        content: 'Depending on client preference and project scope, Medwise can act as an independent procurement consultant advising your internal team, or directly supply equipment through our verified procurement channels.'
      }
    ],
    relatedSlugs: ['pre-purchase-consulting', 'installation-user-training', 'preventive-maintenance-service-contracts'],
    ctaHeadline: 'Ready to Procure Reliable Medical Machinery?',
    ctaText: 'Let Medwise handle technical vendor negotiations, logistics, and installation verification.'
  },

  'preventive-maintenance-service-contracts': {
    slug: 'preventive-maintenance-service-contracts',
    title: 'Preventive Maintenance & Service Contracts',
    seoTitle: 'Medical Equipment Preventive Maintenance & Service Contracts Kenya | Medwise',
    metaDescription: 'Planned preventive maintenance (PPM), SLA contracts, and MedwiseESMS digitized tracking for hospital and laboratory equipment in Kenya.',
    shortDescription: 'We help healthcare facilities keep critical equipment reliable through planned preventive maintenance, documented service schedules, equipment histories and responsive technical support.',
    image: '/images/products/autoclave-heating-elements-gaskets.jpg',
    imageAlt: 'Planned preventive maintenance servicing on clinical laboratory equipment in Kenya',
    iconName: 'ShieldCheck',
    intro: 'Unplanned equipment downtime damages clinical workflows and facility revenue. Medwise Technical Consulting provides structured Planned Preventive Maintenance (PPM) programs and custom Service Level Agreements (SLAs) to catch wear before catastrophic component failure occurs.',
    sections: [
      {
        heading: 'Preventive Maintenance (PPM) vs. Reactive Repair',
        content: 'Preventive maintenance is proactive scheduled servicing designed to inspect, clean, align, lubricate, replace consumable seals/filters, and recalibrate sensors. Unlike emergency breakdown repairs, PPM minimizes costly downtime and extends overall equipment lifespan.'
      },
      {
        heading: 'Powered by MedwiseESMS (Equipment Service Management System)',
        content: 'Our field servicing is supported by MedwiseESMS. This system tracks equipment inventory, records maintenance logs, schedules upcoming PPM visits, stores service reports with photographic evidence, and provides facility managers with audit-ready technical records.'
      },
      {
        heading: 'Regulatory Compliance & Service Documentation',
        content: 'Healthcare facilities face regulatory oversight from bodies like PPB (Pharmacy and Poisons Board) and KMLTTB (Kenya Medical Laboratory Technicians and Technologists Board). Our structured servicing records demonstrate compliance during institutional quality audits.'
      },
      {
        heading: 'Annual Service Level Agreements (SLAs)',
        content: 'Our annual SLA options provide routine scheduled visits, discounted spare parts pricing, priority emergency breakdown response, and ongoing phone/remote engineering support.'
      }
    ],
    relatedSlugs: ['medical-equipment-repair', 'calibration-quality-control', 'installation-user-training'],
    ctaHeadline: 'Protect Your Capital Investment Against Unplanned Downtime',
    ctaText: 'Schedule a preventive maintenance audit or request a customized SLA proposal for your facility.'
  },

  'medical-equipment-repair': {
    slug: 'medical-equipment-repair',
    title: 'Medical Equipment Repair & Technical Support',
    seoTitle: 'Medical Equipment Repair & Technical Support in Kenya | Medwise',
    metaDescription: 'Fast diagnosis, component-level PCB repair, spare parts replacement, and repair vs replacement assessments in Kenya.',
    shortDescription: 'We diagnose equipment faults, coordinate repairs and source replacement parts where required, while helping clients determine whether repair, replacement or another solution makes the most practical sense.',
    image: '/images/products/anaesthesia-breathing-circuits-diathermy.jpg',
    imageAlt: 'Biomedical technician performing fault diagnosis and circuit board repair on medical equipment',
    iconName: 'Activity',
    intro: 'When medical equipment fails, rapid diagnosis and competent technical repair are crucial. Medwise Technical Consulting provides remote triage and field breakdown service across Kisumu, Nairobi, and nationwide across Kenya.',
    sections: [
      {
        heading: 'Systematic Fault Diagnosis',
        content: 'Effective repair begins with accurate troubleshooting. Our engineers analyze electronic, fluidic, optical, and mechanical faults to isolate root causes rather than simply replacing parts at random.'
      },
      {
        heading: 'Component Repair & Parts Sourcing',
        content: 'Where feasible, we perform component-level PCB repairs, valve replacements, sensor recalibration, and seal renewals. When replacements are required, we source genuine OEM or certified compatible components via our verified parts network.'
      },
      {
        heading: 'Repair vs. Replacement Assessment',
        content: 'A core Medwise differentiator is our honesty regarding repair viability. If an aging machine requires repairs exceeding its economic value or if replacement parts are obsolete, we provide an objective analysis considering machine age, part availability, repair cost, and remaining useful life.'
      },
      {
        heading: 'Specialist Support & Escalation',
        content: 'For highly specialized machinery, we collaborate with certified OEM specialists or manufacturer technical teams, coordinating expert intervention on your behalf.'
      }
    ],
    relatedSlugs: ['preventive-maintenance-service-contracts', 'calibration-quality-control', 'sourcing-medical-equipment'],
    ctaHeadline: 'Facing Equipment Faults or Frequent Breakdowns?',
    ctaText: 'Contact our biomedical engineering field team for fast remote triage or on-site diagnostic assessment.'
  },

  'calibration-quality-control': {
    slug: 'calibration-quality-control',
    title: 'Calibration & Quality Control Support',
    seoTitle: 'Medical Equipment Calibration & Quality Control in Kenya | Medwise Technical Consulting',
    metaDescription: 'Precision medical equipment calibration, metrology verification, quality control runs, and compliance documentation in Kenya.',
    shortDescription: 'We provide calibration and quality control support for applicable medical, laboratory, theatre and diagnostic equipment, helping facilities maintain measurement accuracy, reliability and appropriate documentation.',
    image: '/images/products/biosafety-cabinet-uv-lamps.jpg',
    imageAlt: 'Biomedical engineering metrology calibration and quality control verification',
    iconName: 'Sliders',
    intro: 'Accurate clinical diagnostics depend directly on calibrated instrumentation. Medwise Technical Consulting offers precision calibration, metrology verification, and quality control support to ensure your clinical output remains reliable and compliant.',
    sections: [
      {
        heading: 'Understanding Calibration vs. Quality Control',
        content: 'Calibration is the process of testing and adjusting an instrument against known reference standards to verify output accuracy. Quality Control (QC) involves running known reference samples continuously to confirm daily measurement precision and detect system drift.'
      },
      {
        heading: 'Our Step-by-Step Calibration Process',
        content: 'Our engineers execute structured metrology procedures to maintain equipment precision:',
        bullets: [
          'Equipment identification & preliminary visual inspection',
          'Initial output baseline measurement against reference standards',
          'Mechanical, electrical, or optical zeroing and range adjustments',
          'Post-adjustment multi-point re-testing',
          'Quality control run validation',
          'Issuance of calibration reports and certificate verifications'
        ]
      },
      {
        heading: 'Core Equipment Categories Calibrated',
        content: 'We support metrology verification across hematology and chemistry analyzers, centrifuges, spectrophotometers, multiparameter patient monitors, autoclaves, surgical diathermy units, and incubators.'
      }
    ],
    relatedSlugs: ['preventive-maintenance-service-contracts', 'installation-user-training', 'medical-equipment-repair'],
    ctaHeadline: 'Ensure Your Equipment Delivers Accurate Diagnostic Results',
    ctaText: 'Schedule a calibration audit or routine quality control verification with our biomedical metrology team.'
  }
};
