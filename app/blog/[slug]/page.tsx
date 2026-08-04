import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { getArticleSchema, getBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo/schema';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock, ArrowLeft, Tag, MessageSquare, ShieldCheck } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: [post.targetKeyword, 'medical equipment Kenya', 'Medwise Technical Consulting'],
    authors: [{ name: post.author || SITE_CONFIG.name }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author || SITE_CONFIG.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleLd = getArticleSchema({
    title: post.title,
    description: post.metaDescription,
    slug: post.slug,
    datePublished: post.date,
    authorName: post.author,
  });

  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Header - Clean Light Design */}
      <article className="bg-gradient-to-b from-blue-50/80 via-white to-slate-50 text-slate-900 py-12 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold pt-2">
            <span className="font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>Published {post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{post.readTimeMinutes} min read</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-slate-700">
            <ShieldCheck className="h-4 w-4 text-red-600" />
            <span>Written by {post.author}</span>
          </div>
        </div>
      </article>

      {/* Body Content */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Target Keyword Banner */}
          {post.targetKeyword && (
            <div className="mb-8 rounded-xl bg-slate-50 border border-slate-200 p-3.5 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-blue-700" />
                <span>Focus SEO Keyword: <strong className="text-slate-900">{post.targetKeyword}</strong></span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Index Target</span>
            </div>
          )}

          {/* MDX Rendered Body */}
          <div className="prose prose-slate prose-blue max-w-none prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900 prose-table:text-sm">
            <MDXRemote source={post.content} />
          </div>

          {/* Internal Linking CTA Box */}
          <div className="mt-12 rounded-3xl bg-blue-50 border border-blue-200 p-8 text-slate-900 space-y-4 shadow-sm">
            <h3 className="text-xl font-extrabold text-blue-950">Need Engineering Guidance for Your Facility?</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Medwise Technical Consulting provides brand-neutral equipment selection, procurement, installation, and calibration across Kenya. Speak with our biomedical team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20from%20blog%20post:%20${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <span>View Our Technical Services</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <CtaBanner />
    </>
  );
}
