import fs from 'fs';
import path from 'path';

export interface ServiceData {
  id: string;
  category: string;
  iconName?: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  neutralNotice?: string;
}

const SERVICES_FILE = path.join(process.cwd(), 'content', 'services.json');

export function getServicesList(): ServiceData[] {
  try {
    if (fs.existsSync(SERVICES_FILE)) {
      const fileContents = fs.readFileSync(SERVICES_FILE, 'utf8');
      const parsed = JSON.parse(fileContents);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Error reading services.json:', error);
  }

  // Baseline fallback
  return [
    {
      id: 'consulting',
      category: 'consulting',
      image: '/images/services/pre-purchase-consulting.png',
      alt: 'Pre-purchase equipment consulting',
      title: 'Pre-Purchase Consulting',
      subtitle: 'Making Informed Technical Decisions',
      description: 'Comprehensive needs assessment, technical specification drafting, and site readiness planning.',
      features: [
        'Clinical needs & workload analysis',
        'Technical specification drafting',
        'Facility power & site readiness evaluation',
        'Total cost of ownership (TCO) modeling'
      ]
    },
    {
      id: 'sourcing',
      category: 'sourcing',
      image: '/images/services/equipment-sourcing.png',
      alt: 'Equipment Sourcing & Supply',
      title: 'Equipment Sourcing & Supply',
      subtitle: 'Multi-Category Device Procurement',
      description: 'Access to high-grade diagnostic and treatment devices across Imaging, Laboratory, ICU, and Maternity.',
      features: [
        'Imaging (DR X-Ray, Ultrasound, Mammography)',
        'Laboratory (Hematology, Chemistry, Centrifuges)',
        'ICU & Theatre (Monitors, Anesthesia, Ventilators)',
        'Maternity (Fetal Dopplers, Incubators, Phototherapy)'
      ],
      neutralNotice: 'We supply equipment, but our first job is to advise you neutrally.'
    },
    {
      id: 'installation',
      category: 'maintenance',
      image: '/images/services/installation-calibration.png',
      alt: 'Installation and calibration',
      title: 'Installation & Calibration',
      subtitle: 'Precision Engineering Integration',
      description: 'Flawless mechanical, electrical, and radiological installation with certified calibration.',
      features: [
        'Unboxing, positioning & safety wiring',
        'Metrological calibration against certified standards',
        'Radiation shielding compliance (KNRA)',
        'Documentation & certification for audit readiness'
      ]
    },
    {
      id: 'training',
      category: 'training',
      image: '/images/services/staff-training.png',
      alt: 'Staff operational training',
      title: 'Staff Operational Training',
      subtitle: 'Hands-On Clinical Operator Protocols',
      description: 'Hands-on training for clinical operators, lab technologists, and facility staff.',
      features: [
        'On-site operational workflows',
        'Daily QC protocols & sample prep training',
        'Basic routine maintenance & care routines',
        'Certification for clinical operators'
      ]
    },
    {
      id: 'maintenance',
      category: 'maintenance',
      image: '/images/services/maintenance-service-qc.png',
      alt: 'Maintenance and QC analysis',
      title: 'Maintenance, Service & QC Analysis',
      subtitle: 'Guaranteed Operational Uptime',
      description: 'Scheduled preventive maintenance, emergency repair dispatch, and genuine replacement parts.',
      features: [
        'Scheduled Preventive Maintenance (PM)',
        'Rapid emergency response team',
        'Quality control (QC) verification & report logging',
        'Genuine factory spare parts supply'
      ]
    }
  ];
}
