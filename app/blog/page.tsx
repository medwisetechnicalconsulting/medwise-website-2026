import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { getBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo/schema';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Medical Equipment Insights & Technical Guides Kenya',
  description:
    'Expert biomedical engineering articles on choosing X-ray machines, clinic setup checklists, laboratory equipment calibration, and maintenance standards in Kenya.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Medical Equipment Insights & Biomedical Guides Kenya | Medwise',
    description:
      'Technical guides on medical device procurement, X-ray selection, laboratory analyzer maintenance, and precision calibration in Kenya.',
    url: `${SITE_CONFIG.url}/blog`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Technical Knowledge & Guides`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Equipment Insights & Biomedical Guides Kenya | Medwise',
    description:
      'Technical guides on medical device procurement, X-ray selection, laboratory analyzer maintenance, and precision calibration in Kenya.',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const breadcrumbLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog Insights', url: '/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Header - Clean Light Design */}
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-slate-50 text-slate-900 py-16 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900 shadow-2xs">
              <BookOpen className="h-4 w-4 text-red-600" />
              <span>Biomedical Knowledge & SEO Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Medical Equipment Insights & Technical Guides
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Practical advice, technical equipment selection frameworks, and calibration guides written by qualified biomedical engineers for healthcare managers in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>{post.readTimeMinutes} min read</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.metaDescription}
                  </p>

                  {/* Target SEO Keyword Badge */}
                  {post.targetKeyword && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      <Tag className="h-3 w-3 text-slate-400" />
                      <span>Target Keyword: {post.targetKeyword}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-blue-700 group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
