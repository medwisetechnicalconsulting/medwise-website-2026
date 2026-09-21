import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { getArticleSchema, getBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo/schema';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock, ArrowLeft, Tag, MessageSquare, ShieldCheck } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import ExpandableImage from '@/components/ExpandableImage';

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

  const imageUrl = post.image
    ? post.image.startsWith('http')
      ? post.image
      : `${SITE_CONFIG.url}${post.image}`
    : `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`;

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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [imageUrl],
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
    image: post.image,
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

      {/* Header - Clean Editorial Design */}
      <article className="bg-[#F8FAFC] text-slate-900 py-12 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2942] hover:text-[#DC2626] transition-colors py-1"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Engineering Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold pt-1">
            <span className="font-bold text-slate-900 bg-white px-3 py-1 rounded text-xs border border-slate-300 shadow-2xs">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>Published {post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{post.readTimeMinutes} min read</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-slate-700">
            <ShieldCheck className="h-4 w-4 text-[#DC2626]" />
            <span>Authored by {post.author}</span>
          </div>
        </div>
      </article>

      {/* Body Content */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Featured Article Image with Click-to-Expand Lightbox */}
          {post.image && (
            <ExpandableImage
              src={post.image}
              alt={post.title}
              title={post.title}
              caption="Technical Overview: Click image to expand high-resolution view"
            />
          )}

          {/* Target Keyword Banner */}
          {post.targetKeyword && (
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-3.5 flex items-center justify-between text-xs text-slate-700 font-semibold shadow-2xs">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-[#0F2942]" />
                <span>Focus SEO Keyword: <strong className="text-slate-900">{post.targetKeyword}</strong></span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Index Verified</span>
            </div>
          )}

          {/* MDX Rendered Body */}
          <div className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900 prose-table:text-sm">
            <MDXRemote source={post.content} />
          </div>

          {/* Internal Linking CTA Box - Solid Clinical Navy */}
          <div className="mt-12 rounded-xl bg-[#0F2942] border border-[#1E3A5F] p-6 sm:p-8 text-white space-y-4 shadow-xs">
            <h3 className="text-lg sm:text-xl font-extrabold text-white">Need Engineering Guidance for Your Healthcare Facility?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Medwise Technical Consulting provides brand-neutral equipment selection, procurement, installation, and precision calibration across Kenya. Speak directly with our practicing biomedical team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20from%20blog%20post:%20${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors shadow-xs min-h-[44px]"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2B4C74] bg-[#1E3A5F] hover:bg-[#2B4C74] px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors shadow-xs min-h-[44px]"
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
