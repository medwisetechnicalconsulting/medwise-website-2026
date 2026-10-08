import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  Wrench, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ArrowLeft, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';
import { SERVICES_DATA } from '@/lib/services-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: 'Service Not Found | Medwise Technical Consulting',
    };
  }

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.medwisetechnicalconsulting.co.ke/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: `https://www.medwisetechnicalconsulting.co.ke/services/${service.slug}`,
      siteName: 'Medwise Technical Consulting',
      locale: 'en_KE',
      type: 'article',
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function IndividualServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  // Related Services Data
  const relatedServices = service.relatedSlugs
    .map((relSlug) => SERVICES_DATA[relSlug])
    .filter(Boolean);

  // Structured Data Schema (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Medwise Technical Consulting',
      telephone: SITE_CONFIG.telephone,
      url: 'https://www.medwisetechnicalconsulting.co.ke',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    description: service.metaDescription,
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[hsl(var(--background))] py-12 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
          
          {/* Breadcrumb / Back Link */}
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[hsl(var(--primary))] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Technical Services</span>
            </Link>
          </div>

          {/* Service Title & Intro */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-wider">
              <Wrench className="h-3.5 w-3.5" />
              <span>Biomedical Service • Kenya</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--foreground))] tracking-tight">
              {service.title}
            </h1>
            
            <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-normal">
              {service.intro}
            </p>
          </div>

          {/* Hero Banner Image */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-[hsl(var(--border))] shadow-sm">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 1000px"
              className="object-cover"
            />
          </div>

          {/* Section Breakdown */}
          <div className="space-y-10 border-t border-[hsl(var(--border))] pt-10">
            {service.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))]">
                  {section.heading}
                </h2>
                
                <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {section.content}
                </p>

                {section.bullets && (
                  <ul className="pt-2 space-y-2.5">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[hsl(var(--foreground))]">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Supported Facilities / Equipment Areas (If Present) */}
          {service.supportedAreas && (
            <div className="bg-slate-50 border border-[hsl(var(--border))] rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-[hsl(var(--foreground))] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[hsl(var(--primary))]" />
                <span>Equipment &amp; Clinical Departments Supported</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-700">
                {service.supportedAreas.map((area, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Individual Service CTA Box */}
          <div className="rounded-2xl bg-[hsl(var(--primary))] text-white p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold">
                {service.ctaHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                {service.ctaText}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Medwise, I am inquiring about ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Engineer</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.telephone}`}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Engineer</span>
              </a>
            </div>
          </div>

          {/* Related Services Section */}
          {relatedServices.length > 0 && (
            <div className="border-t border-[hsl(var(--border))] pt-10 space-y-6">
              <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
                Related Technical Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServices.map((relService) => (
                  <Link
                    key={relService.slug}
                    href={`/services/${relService.slug}`}
                    className="p-5 rounded-xl border border-[hsl(var(--border))] bg-white hover:border-[hsl(var(--primary))] transition-all group block space-y-2"
                  >
                    <h4 className="text-sm font-bold text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors flex items-center justify-between">
                      <span>{relService.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] line-clamp-2">
                      {relService.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
