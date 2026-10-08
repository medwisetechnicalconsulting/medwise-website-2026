import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  Compass, 
  PackageCheck, 
  ShieldCheck, 
  Activity, 
  Sliders, 
  ArrowRight 
} from 'lucide-react';
import { ServiceItem } from '@/lib/services-data';

const ICON_MAP = {
  Wrench,
  Compass,
  PackageCheck,
  ShieldCheck,
  Activity,
  Sliders,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || Wrench;

  return (
    <div className="bg-white rounded-2xl border border-[hsl(var(--border))] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Card Image Header */}
        <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] flex items-center justify-center shrink-0">
              <IconComponent className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[hsl(var(--foreground))] leading-snug">
              {service.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed font-normal">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="p-6 sm:p-8 pt-0">
        <div className="pt-4 border-t border-slate-100">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[hsl(var(--primary))] hover:text-blue-800 transition-colors"
          >
            <span>Learn More &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
