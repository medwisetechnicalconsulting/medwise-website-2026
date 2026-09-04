'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/mdx';

export default function AnimatedBlogCards({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="flex flex-col justify-between rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
        >
          {/* Card Image Banner */}
          <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 block border-b border-slate-100">
            <Image
              src={post.image || '/images/blog-default.jpg'}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover object-center"
            />
            <div className="absolute top-2.5 left-2.5">
              <span className="font-semibold text-slate-800 bg-white/95 px-2.5 py-1 rounded text-[11px] border border-slate-200 shadow-2xs">
                {post.category}
              </span>
            </div>
          </Link>

          <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTimeMinutes} min read</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                {post.metaDescription}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold mt-auto">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors"
              >
                <span>Read Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}


