import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowWeHelp from '@/components/HowWeHelp';
import ServicesSection from '@/components/ServicesSection';
import WhyNeutralMatters from '@/components/WhyNeutralMatters';
import BrandsSection from '@/components/BrandsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import CtaBanner from '@/components/CtaBanner';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import { SITE_CONFIG, getFaqSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Independent Medical Equipment Consulting & Calibration Kenya | Medwise',
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
      'Medwise provides independent pre-purchase advisory, medical equipment sourcing, installation, clinical staff training, metrological calibration, and ongoing biomedical preventive maintenance for hospitals and clinics across Kenya.',
  },
  {
    question: 'Why choose an independent medical equipment consultant in Kenya?',
    answer:
      'Independent consultants evaluate clinical throughput, facility requirements, and budget without brand bias, ensuring healthcare facilities purchase high-quality equipment without single-brand sales markup or hidden ownership costs.',
  },
  {
    question: 'Do you repair laboratory analyzers like the Zybio Z3?',
    answer:
      'Yes, our qualified biomedical engineers perform PCB motor drive board diagnosis, fluidic maintenance, precision calibration, and Quality Control (QC) verification on Zybio Z3 hematology analyzers and other clinical laboratory equipment.',
  },
  {
    question: 'Where is Medwise Technical Consulting located in Kenya?',
    answer:
      'Our main office is located on Kisumu Kakamega Road in Kisumu, Kenya, with rapid field support dispatch across Sagana, Nairobi, Western Region, and nationwide.',
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
      <Hero />
      <ProblemSection />
      <HowWeHelp />
      <ServicesSection />
      <WhyNeutralMatters />
      <BrandsSection />
      <TestimonialsSection />
      <GallerySection />
      <CtaBanner />
      <BlogPreviewSection />
    </>
  );
}
