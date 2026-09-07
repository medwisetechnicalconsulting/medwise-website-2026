import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { SITE_CONFIG } from '@/lib/seo/schema';
import { CATEGORIES_CONFIG, PRODUCTS_CATALOG } from '@/lib/products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');
  const currentDate = new Date().toISOString();

  // All valid product image URLs
  const allProductImages = PRODUCTS_CATALOG.filter((p) => p.image).map(
    (p) => `${baseUrl}${p.image}`
  );

  // Core Static SEO Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [`${baseUrl}/images/medwise-og.jpg`, `${baseUrl}/images/medwise-logo.png`],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/images/medwise-og.jpg`],
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/medwise-og.jpg`, ...allProductImages],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      images: [`${baseUrl}/images/medwise-og.jpg`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/images/medwise-og.jpg`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/images/medwise-og.jpg`],
    },
  ];

  // Equipment Category SEO Pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES_CONFIG.map((cat) => {
    const catImages = PRODUCTS_CATALOG.filter(
      (p) => p.category === cat.id && p.image
    ).map((p) => `${baseUrl}${p.image}`);

    return {
      url: `${baseUrl}/products?category=${cat.id}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      images: [`${baseUrl}/images/medwise-og.jpg`, ...catImages],
    };
  });

  // Dynamic Blog & Insight Articles
  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => {
    const postImageUrl = post.image
      ? post.image.startsWith('http')
        ? post.image
        : `${baseUrl}${post.image}`
      : `${baseUrl}/images/medwise-og.jpg`;

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [postImageUrl],
    };
  });

  return [...staticPages, ...categoryPages, ...blogPages];
}
