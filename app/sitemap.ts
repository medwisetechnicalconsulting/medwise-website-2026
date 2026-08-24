import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');
  const currentDate = new Date().toISOString();

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

  return [...staticPages, ...blogPages];
}
