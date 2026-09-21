import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import HowWeHelp from '@/components/HowWeHelp';
import ProblemSection from '@/components/ProblemSection';
import BrandsSection from '@/components/BrandsSection';
import CtaBanner from '@/components/CtaBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import GallerySection from '@/components/GallerySection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import { SITE_CONFIG, getFaqSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Independent Medical Equipment Sourcing, Calibration & Consulting Kenya | Medwise',
  description:
    'Medwise Technical Consulting provides brand-neutral medical device advisory, equipment sourcing, installation, training, precision calibration, and preventive maintenance in Kenya.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Medwise Technical Consulting: Medical Device Advisory & Sourcing Kenya',
    description:
      'Independent biomedical engineering consulting, medical equipment sourcing, and laboratory maintenance for healthcare facilities across Kenya.',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name}: Independent Medical Device Advisory Kenya`,
      },
    ],
  },
};

const homeFaqs = [
  {
    question: 'What does Medwise Technical Consulting do?',
    answer:
      'Medwise provides independent pre-purchase advisory, medical equipment sourcing, mechanical and electrical installation, clinical staff training, precision metrological calibration, and ongoing biomedical preventive maintenance for hospitals and clinics across Kenya.',
  },
  {
    question: 'Why choose an independent medical equipment consultant in Kenya?',
    answer:
      'Independent consultants evaluate clinical throughput, facility requirements, and budget without brand bias, ensuring healthcare facilities purchase high-quality equipment without single-brand sales markup or hidden ownership costs.',
  },
  {
    question: 'Do you repair laboratory analyzers like the Zybio Z3 and Mindray BC series?',
    answer:
      'Yes, our qualified biomedical engineers perform PCB motor drive board diagnosis, microfluidic maintenance, precision optical calibration, and Quality Control (QC) verification on Zybio Z3, Mindray, and other clinical laboratory analyzers.',
  },
  {
    question: 'Do you provide certified metrology calibration reports?',
    answer:
      'Yes. Every calibration service is performed using certified simulator standards and comes with a traceable metrological certificate detailing test parameters, tolerances, and calibration status suitable for KMPDC, KNRA, and ISO hospital accreditation audits.',
  },
  {
    question: 'Where is Medwise Technical Consulting located in Kenya?',
    answer:
      'Our main office is located on Kisumu Kakamega Road in Kisumu, Kenya, with rapid field support dispatch across Sagana, Nairobi, Western Region, Rift Valley, and nationwide.',
  },
  {
    question: 'Can you supply laboratory consumables and reagents as well?',
    answer:
      'Yes. We supply over 38+ verified clinical consumables and reagents including vacutainers, staining kits, rapid diagnostics, and analyzer reagents with guaranteed cold-chain integrity and nationwide delivery.',
  },
];

export default function HomePage() {
  const faqLd = getFaqSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* 1. Hero Section (White background) */}
      <Hero />

      {/* 2. Trust Bar (White border-y) */}
      <TrustBar />

      {/* 3. Services (Muted background) */}
      <ServicesSection />

      {/* 4. Stats Counter Banner (Vibrant Blue background) */}
      <StatsSection />

      {/* 5. About with Photo Stack & Feature List (White background) */}
      <AboutSection />

      {/* 6. Process / How We Help 4 Step Cards (Muted background) */}
      <HowWeHelp />

      {/* 7. Common Pitfalls & Sourcing Reality (White background) */}
      <ProblemSection />

      {/* 8. Multi-Vendor Brands Compatibility Ticker (White border-y) */}
      <BrandsSection />

      {/* 9. Full-Width Photo CTA Banner with Gradient */}
      <CtaBanner />

      {/* 10. Customer Reviews & Field Proof (White background) */}
      <TestimonialsSection />

      {/* 11. Regional Coverage & Service Areas (Muted background) */}
      <ServiceAreasSection />

      {/* 12. Fieldwork Project Gallery (White background) */}
      <GallerySection />

      {/* 13. FAQ Accordion (White background, narrow centered) */}
      <FaqSection />

      {/* 14. Final CTA (Vibrant Blue background, narrow centered) */}
      <FinalCtaSection />

      {/* 15. Technical Knowledge Hub / Blog (White background) */}
      <BlogPreviewSection />
    </>
  );
}
