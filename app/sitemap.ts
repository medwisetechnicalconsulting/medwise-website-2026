import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.medwisetech.co.ke';

  // 1. Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/services', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/products', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/products/spare-parts', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/blog', priority: 0.8, changeFrequency: 'daily' },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency as 'weekly' | 'monthly' | 'daily',
    priority: item.priority,
  }));

  // 2. Dynamic Blog Routes from MDX content directory
  let blogRoutes: MetadataRoute.Sitemap = [];
  
  try {
    const blogDirectory = path.join(process.cwd(), 'content/blog');
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
            changeFrequency: 'monthly',
            priority: 0.6,
          };
        });
    }
  } catch (error) {
    console.error('Failed to parse blog directory for sitemap:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
