import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/'],
      disallow: ['/api/'],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
