import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.medwisetech.co.ke';

  // 1. Core Static Pages
  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/services', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/spare-parts', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 2. Dynamic Blog Routes from MDX content directory
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
    console.error('Failed to generate sitemap entries for blog directory:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
