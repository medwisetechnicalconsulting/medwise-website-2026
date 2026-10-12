import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://medwisetech.co.ke';

  // 1. Static Core Routes
  const staticRoutes = [
    '',
    '/services',
    '/products',
    '/products/spare-parts',
    '/about',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic MDX Blog Routes
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    if (fs.existsSync(blogDirectory)) {
      const filenames = fs.readdirSync(blogDirectory);
      blogRoutes = filenames
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
          const filePath = path.join(blogDirectory, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const { data } = matter(fileContent);
          const slug = file.replace(/\.mdx$/, '');

          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: data.date ? new Date(data.date) : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          };
        });
    }
  } catch (error) {
    console.error('Error generating dynamic sitemap entries:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
