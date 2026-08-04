import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowWeHelp from '@/components/HowWeHelp';
import ServicesSection from '@/components/ServicesSection';
import WhyNeutralMatters from '@/components/WhyNeutralMatters';
import CtaBanner from '@/components/CtaBanner';
import BlogPreviewSection from '@/components/BlogPreviewSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowWeHelp />
      <ServicesSection />
      <WhyNeutralMatters />
      <CtaBanner />
      <BlogPreviewSection />
    </>
  );
}
