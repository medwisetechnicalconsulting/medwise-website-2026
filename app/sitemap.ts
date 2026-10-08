import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.medwisetechnicalconsulting.co.ke';

  // Static Core Pages
  const staticPages = [
    '',
    '/services',
    '/products',
    '/products/consumables',
    '/products/others',
    '/products/spare-parts', // New Spare Parts Page
    '/about',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Individual Service Pages
  const servicePages = [
    '/services/installation-user-training',
    '/services/pre-purchase-consulting',
    '/services/sourcing-medical-equipment',
    '/services/preventive-maintenance-service-contracts',
    '/services/medical-equipment-repair',
    '/services/calibration-quality-control',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog Posts (Including Latest Engineering Post)
  const blogPosts = [
    '/blog/hematology-analyzer-maintenance-kenya',
    '/blog/preventive-maintenance-medical-equipment-kenya',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPosts];
}
