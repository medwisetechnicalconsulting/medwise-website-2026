import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { SITE_CONFIG } from '@/lib/seo/schema';
import { CATEGORIES_CONFIG, PRODUCTS_CATALOG } from '@/lib/products';
import { CONSUMABLES_CATEGORIES, CONSUMABLES_CATALOG } from '@/lib/consumables';
import { OTHER_PRODUCTS_CATALOG } from '@/lib/otherProducts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');
  const currentDate = new Date().toISOString();

  // All valid machinery product image URLs
  const allProductImages = PRODUCTS_CATALOG.filter((p) => p.image).map(
    (p) => `${baseUrl}${p.image}`
  );

  // All valid consumables product image URLs
  const allConsumablesImages = CONSUMABLES_CATALOG.filter((c) => c.image).map(
    (c) => `${baseUrl}${c.image}`
  );

  // All valid department suites image URLs
  const allOtherImages = OTHER_PRODUCTS_CATALOG.filter((o) => o.image).map(
    (o) => `${baseUrl}${o.image}`
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
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/medwise-og.jpg`, ...allProductImages],
    },
    {
      url: `${baseUrl}/products/consumables`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/medwise-og.jpg`, ...allConsumablesImages],
    },
    {
      url: `${baseUrl}/products/others`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/medwise-og.jpg`, ...allOtherImages],
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

  // Diagnostic Machinery Category SEO Pages
  const machineryCategoryPages: MetadataRoute.Sitemap = CATEGORIES_CONFIG.map((cat) => {
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

  // Consumables Subcategory SEO Pages
  const consumablesCategoryPages: MetadataRoute.Sitemap = CONSUMABLES_CATEGORIES.filter(
    (cat) => cat.id !== 'all'
  ).map((cat) => {
    const catImages = CONSUMABLES_CATALOG.filter(
      (c) => c.category === cat.id && c.image
    ).map((c) => `${baseUrl}${c.image}`);

    return {
      url: `${baseUrl}/products/consumables?category=${cat.id}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      images: [`${baseUrl}/images/medwise-og.jpg`, ...catImages],
    };
  });

  // Specialized Department Suites (Others) SEO Pages
  const otherDepartmentPages: MetadataRoute.Sitemap = [
    'dental',
    'theatre',
    'maternity',
    'icu',
  ].map((dept) => {
    const deptImage = OTHER_PRODUCTS_CATALOG.find((o) => o.category === dept)?.image;
    const images = [`${baseUrl}/images/medwise-og.jpg`];
    if (deptImage) images.push(`${baseUrl}${deptImage}`);

    return {
      url: `${baseUrl}/products/others?category=${dept}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      images,
    };
  });

  // Dynamic Blog & Clinical Insight Articles
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

  return [
    ...staticPages,
    ...machineryCategoryPages,
    ...consumablesCategoryPages,
    ...otherDepartmentPages,
    ...blogPages,
  ];
}
