import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
              <BookOpen className="h-4 w-4" />
              <span>Technical Knowledge Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Medical Equipment Insights & Guides
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Practical biomedical engineering advice, equipment selection guides, and calibration standards for healthcare managers in Kenya.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <span>View All Insights</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3 Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-2xl bg-slate-50 border border-slate-200/80 p-6 hover:shadow-md hover:border-emerald-500/40 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{post.readTimeMinutes} min read</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {post.metaDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
