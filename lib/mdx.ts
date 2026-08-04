import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPostMeta {
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  date: string;
  author?: string;
  category?: string;
  image?: string;
  readTimeMinutes?: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);
  const posts: BlogPostMeta[] = fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const filePath = path.join(BLOG_DIR, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Simple reading time calculation (~200 words per min)
      const wordCount = content.split(/\s+/).length;
      const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

      return {
        slug,
        title: data.title || slug,
        metaDescription: data.metaDescription || data.description || '',
        targetKeyword: data.targetKeyword || '',
        date: data.date ? new Date(data.date).toISOString().split('T')[0] : '2026-01-01',
        author: data.author || 'Medwise Engineering Team',
        category: data.category || 'Medical Equipment',
        image: data.image || '/images/blog-default.jpg',
        readTimeMinutes,
      };
    });

  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const mdPath = path.join(BLOG_DIR, `${slug}.md`);
    const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

    if (!filePath) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/).length;
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

    return {
      slug,
      title: data.title || slug,
      metaDescription: data.metaDescription || data.description || '',
      targetKeyword: data.targetKeyword || '',
      date: data.date ? new Date(data.date).toISOString().split('T')[0] : '2026-01-01',
      author: data.author || 'Medwise Engineering Team',
      category: data.category || 'Medical Equipment',
      image: data.image || '/images/blog-default.jpg',
      readTimeMinutes,
      content,
    };
  } catch (error) {
    console.error(`Error reading post by slug ${slug}:`, error);
    return null;
  }
}
