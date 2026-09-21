import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { getArticleSchema, getBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo/schema';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock, ArrowLeft, Tag, MessageSquare, ShieldCheck, ListOrdered } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import ExpandableImage from '@/components/ExpandableImage';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-');
}

function getTextFromChildren(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getTextFromChildren).join('');
  if (children && typeof children === 'object' && 'props' in children && (children as any).props?.children) {
    return getTextFromChildren((children as any).props.children);
  }
  return '';
}

const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = getTextFromChildren(children);
    const id = text ? slugify(text) : undefined;
    return (
      <h2
        id={id}
        className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight mt-14 mb-6 pt-8 border-t border-border flex items-center gap-3 scroll-mt-24 first:mt-0 first:pt-0"
        {...props}
      >
        <span className="w-1.5 h-6 rounded-full bg-primary shrink-0 inline-block" />
        <span>{children}</span>
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-lg sm:text-xl font-bold text-foreground tracking-tight mt-10 mb-4 scroll-mt-24 flex items-center gap-2.5 before:w-1.5 before:h-4 before:rounded-full before:bg-primary/60 before:inline-block"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="text-xs sm:text-sm font-extrabold text-primary uppercase tracking-wider mt-8 mb-3 flex items-center gap-2"
      {...props}
    >
      <span className="w-1.5 h-3 rounded-full bg-primary/40 inline-block" />
      <span>{children}</span>
    </h4>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 font-normal" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-5 space-y-2.5 list-outside list-disc ml-6 text-sm sm:text-base text-slate-600 marker:text-primary" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-5 space-y-2.5 list-outside list-decimal ml-6 text-sm sm:text-base text-slate-600 marker:text-primary marker:font-bold" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed text-slate-600 font-normal pl-1.5" {...props} />
  ),
  blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-7 rounded-3xl bg-primary-light/40 border border-primary/25 p-5 sm:p-6 text-slate-800 not-italic shadow-xs relative overflow-hidden"
      {...props}
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
        <span>Biomedical Advisory &amp; Engineering Standard</span>
      </div>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
        {children}
      </div>
    </blockquote>
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:text-accent hover:decoration-accent transition-colors"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-t border-border" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-foreground font-bold" {...props} />
  ),
  table: ({ children, className = '', ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 w-full rounded-2xl border border-border bg-white shadow-xs overflow-hidden not-prose">
      <div className="table-scroll-wrapper overflow-x-auto overscroll-x-contain touch-pan-x p-0">
        <table
          className={`w-max min-w-full text-left text-xs sm:text-sm border-collapse ${className}`}
          {...props}
        >
          {children}
        </table>
      </div>
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-muted/85 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-border bg-white" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="hover:bg-primary-light/20 transition-colors even:bg-muted/20" {...props} />
  ),
  th: ({ className = '', ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={`px-5 py-3.5 font-extrabold text-foreground border-r border-b border-border last:border-r-0 tracking-wider text-xs uppercase whitespace-nowrap min-w-[180px] bg-muted/85 ${className}`}
      {...props}
    />
  ),
  td: ({ className = '', ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={`px-5 py-4 text-slate-600 border-r border-b border-border last:border-r-0 leading-relaxed align-top text-xs sm:text-sm min-w-[200px] break-normal ${className}`}
      {...props}
    />
  ),
};

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

function prepareContent(content: string): string {
  return content.replace(
    /(?:<div[^>]*class(?:Name)?="[^"]*table-scroll-wrapper[^"]*"[\s\S]*?<\/div>\s*<\/div>)|(<table[\s\S]*?<\/table>)/gi,
    (match, tableGroup) => {
      if (!tableGroup) return match;
      return `<div className="my-8 rounded-2xl border border-border bg-white shadow-xs overflow-hidden not-prose">
  <div className="table-scroll-wrapper overflow-x-auto overscroll-x-contain touch-pan-x p-0">
    ${tableGroup}
  </div>
</div>`;
    }
  );
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const processedContent = prepareContent(post.content);

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

  // Extract H2 headings for Table of Contents
  const toc = post.content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const raw = line.replace(/^##\s+/, '').trim();
      const clean = raw.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
      return {
        title: clean,
        id: slugify(clean),
      };
    })
    .filter((item) => item.title.length > 0 && !item.title.toLowerCase().includes('partner with medwise'));

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

          {/* Table of Contents & Quick Links */}
          {toc.length >= 2 && (
            <nav aria-label="Table of contents" className="rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary shrink-0">
                  <ListOrdered className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-foreground">
                    Table of Contents &amp; Quick Navigation
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Jump directly to key equipment comparison sections
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium pt-3 border-t border-border/70">
                {toc.map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.id}`}
                    className="flex items-center gap-2.5 py-2 px-3 rounded-xl hover:bg-white hover:text-primary transition-all text-slate-600 hover:shadow-xs group"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200/70 text-[10px] font-bold text-slate-600 group-hover:bg-primary-light group-hover:text-primary transition-colors">
                      {i + 1}
                    </span>
                    <span className="truncate group-hover:underline underline-offset-2">{item.title}</span>
                  </a>
                ))}
              </div>
            </nav>
          )}

          {/* MDX Rendered Body */}
          <div className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-foreground prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-foreground prose-table:text-sm">
            <MDXRemote source={processedContent} components={mdxComponents} />
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
