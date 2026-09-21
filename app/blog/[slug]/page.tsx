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

      {/* Header - Clean Editorial White Design */}
      <article className="bg-white text-foreground py-12 sm:py-16 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white hover:bg-muted text-xs font-semibold text-foreground px-4 py-2 transition-colors w-fit"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-primary" />
            <span>Back to All Engineering Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium pt-1">
            <span className="font-semibold text-primary bg-primary-light px-3 py-1 rounded-full text-xs shadow-xs">
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

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 pt-1 text-xs font-medium text-slate-600">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Authored by <strong className="text-foreground font-semibold">{post.author}</strong></span>
          </div>
        </div>
      </article>

      {/* Body Content */}
      <div className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Featured Article Image with Click-to-Expand Lightbox */}
          {post.image && (
            <div className="rounded-3xl overflow-hidden border border-border shadow-xs">
              <ExpandableImage
                src={post.image}
                alt={post.title}
                title={post.title}
                caption="Technical Overview: Click image to expand high-resolution view"
              />
            </div>
          )}

          {/* Target Keyword Banner */}
          {post.targetKeyword && (
            <div className="rounded-2xl bg-muted/50 border border-border p-4 flex items-center justify-between text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                <span>Focus SEO Keyword: <strong className="text-foreground font-semibold">{post.targetKeyword}</strong></span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Index Verified</span>
            </div>
          )}

          {/* MDX Rendered Body */}
          <div className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-foreground prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-foreground prose-table:text-sm">
            <MDXRemote source={post.content} />
          </div>

          {/* Internal Linking CTA Box - Vivid Blue Banner */}
          <div className="mt-14 rounded-3xl bg-primary text-white p-8 sm:p-10 shadow-xl space-y-4 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Biomedical Advisory</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Need Engineering Guidance for Your Healthcare Facility?</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl font-normal">
              Medwise Technical Consulting provides brand-neutral equipment selection, procurement, installation, and precision calibration across Kenya. Speak directly with our practicing biomedical team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20from%20blog%20post:%20${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors shadow-md min-h-[44px]"
              >
                <MessageSquare className="h-4 w-4 fill-white shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/services"
                className="btn-pill-ghost text-center py-3.5 px-6 text-sm"
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
