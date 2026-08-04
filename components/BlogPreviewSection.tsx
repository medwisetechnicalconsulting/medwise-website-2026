import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { ArrowRight, BookOpen } from 'lucide-react';
import AnimatedBlogCards from './AnimatedBlogCards';

export default function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800 border border-blue-200">
              <BookOpen className="h-4 w-4 text-red-600" />
              <span>Technical Knowledge Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Medical Equipment Insights & Guides
            </h2>
            <p className="text-sm text-slate-600 max-w-xl font-medium">
              Practical biomedical engineering advice, equipment selection guides, and calibration standards for healthcare managers in Kenya.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors group"
          >
            <span>View All Insights</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Posts Animated Grid */}
        <AnimatedBlogCards posts={posts} />

      </div>
    </section>
  );
}
