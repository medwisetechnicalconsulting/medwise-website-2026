import Image from 'next/image';
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
        alt: `${SITE_CONFIG.name}: Technical Knowledge & Guides`,
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

      {/* Header - Clean Editorial Design */}
      <section className="bg-[#F8FAFC] text-slate-900 py-14 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold text-[#0F2942] shadow-xs">
              <BookOpen className="h-4 w-4 text-[#DC2626]" />
              <span>Biomedical Engineering Insights &amp; Maintenance Guides</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Medical Equipment Insights &amp; Technical Guides
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical advice, technical equipment selection frameworks, and calibration guides written by qualified biomedical engineers for healthcare managers in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#0F2942] transition-all group"
              >
                {/* Card Featured Image */}
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 block border-b border-slate-200">
                  <Image
                    src={post.image || '/images/blog-default.jpg'}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-bold text-slate-900 bg-white/95 px-2.5 py-1 rounded text-xs border border-slate-200 shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>{post.readTimeMinutes} min read</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#0F2942] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.metaDescription}
                    </p>

                    {/* Target SEO Keyword Badge */}
                    {post.targetKeyword && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                        <Tag className="h-3 w-3 text-slate-400" />
                        <span>Keyword: {post.targetKeyword}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold mt-auto">
                    <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      <span>{post.date}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-bold text-[#0F2942] group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all flex items-center gap-1 py-1"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
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
