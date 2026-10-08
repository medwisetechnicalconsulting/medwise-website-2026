import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.medwisetechnicalconsulting.co.ke';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Core Static Routes
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/consumables`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/others`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // 2. Read all MDX blog guides from content/blog/
  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const blogDirectory = path.join(process.cwd(), 'content', 'blog');
    
    if (fs.existsSync(blogDirectory)) {
      const fileNames = fs.readdirSync(blogDirectory);

      blogPages = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
          const slug = fileName.replace(/\.mdx$/, '');
          const fullPath = path.join(blogDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');

          // Extract date from frontmatter using regex (bypasses gray-matter dependency issues)
          const dateMatch = fileContents.match(/date:\s*['"]?([^'"]+)\b/);
          const postDate = dateMatch ? new Date(dateMatch[1]) : new Date();

          return {
            url: `${BASE_URL}/blog/${slug}`,
            lastModified: isNaN(postDate.getTime()) ? new Date() : postDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
          };
        });
    }
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
  }

  return [...staticPages, ...blogPages];
}
