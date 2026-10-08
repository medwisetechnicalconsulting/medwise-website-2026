import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Wrench, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';
import { SERVICES_DATA } from '@/lib/services-data';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Medical Equipment Consulting & Technical Services in Kenya | Medwise Technical Consulting',
  description: 'Independent medical equipment technical consulting, installation, preventive maintenance, repair, calibration, and procurement guidance for healthcare facilities across Kenya.',
  alternates: {
    canonical: 'https://www.medwisetechnicalconsulting.co.ke/services',
  },
  openGraph: {
    title: 'Medical Equipment Consulting & Technical Services in Kenya',
    description: 'Comprehensive biomedical engineering field support from pre-purchase guidance to maintenance and calibration across Kenya.',
    url: 'https://www.medwisetechnicalconsulting.co.ke/services',
    siteName: 'Medwise Technical Consulting',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function ServicesPage() {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <div className="bg-[hsl(var(--background))] py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-[72px] space-y-12 sm:space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-wider">
            <Wrench className="h-3.5 w-3.5" />
            <span>Biomedical Engineering Services • Kenya</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[hsl(var(--foreground))] tracking-tight leading-tight">
            Technical Solutions for Medical Equipment Throughout Its Lifecycle
          </h1>
          
          <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Medwise Technical Consulting supports healthcare facilities from planning and equipment selection through procurement, installation, operator training, preventive maintenance, repair, calibration, and long-term technical support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Medwise, I am requesting a technical consultation for my healthcare facility.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Talk to a Technical Consultant</span>
            </a>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-[hsl(var(--primary))] hover:bg-blue-800 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Request a Consultation &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Value Proposition Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-[hsl(var(--border))] py-8">
          <div className="flex items-start gap-3 p-2">
            <CheckCircle2 className="w-5 h-5 text-[hsl(var(--primary))] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-[hsl(var(--foreground))]">Brand-Neutral Guidance</div>
              <div className="text-xs text-[hsl(var(--muted-foreground))]">Independent technical advice prioritized over single-brand quotas.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2">
            <ShieldCheck className="w-5 h-5 text-[hsl(var(--primary))] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-[hsl(var(--foreground))]">Practicing Engineers</div>
              <div className="text-xs text-[hsl(var(--muted-foreground))]">Field-experienced biomedical staff based in Kisumu &amp; Nairobi.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2">
            <Wrench className="w-5 h-5 text-[hsl(var(--primary))] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-[hsl(var(--foreground))]">Full Lifecycle SLA Support</div>
              <div className="text-xs text-[hsl(var(--muted-foreground))]">From pre-purchase workflow audits to preventive maintenance and calibration.</div>
            </div>
          </div>
        </div>

        {/* Services Hub Grid */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[hsl(var(--foreground))]">
              Our Core Technical Services
            </h2>
            <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-1">
              Select a service below to explore detailed technical workflows and support offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesList.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Need Engineering Support for Your Facility?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our team operates from our Kisumu HQ and Nairobi regional hub, serving clinics, county hospitals, and private laboratories nationwide across Kenya.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Medwise Biomedical Engineering Team')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Engineer Direct</span>
            </a>
            
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 border border-white/20"
            >
              <Phone className="h-4 w-4" />
              <span>Call {SITE_CONFIG.telephone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
