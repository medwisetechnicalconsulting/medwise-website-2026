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
          className="flex flex-col justify-between rounded-2xl bg-white border border-[hsl(var(--border))] overflow-hidden shadow-2xs hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200 group"
        >
          {/* Card Image Banner */}
          <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 block border-b border-[hsl(var(--border))]">
            <Image
              src={post.image || '/images/blog-default.jpg'}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className="chip-label bg-white/95 text-[hsl(var(--primary))] shadow-xs">
                {post.category}
              </span>
            </div>
          </Link>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] font-medium mb-2.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTimeMinutes} min read</span>
              </div>

              <h3 className="font-bold text-base text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors line-clamp-2 leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="font-light text-sm text-[hsl(var(--muted-foreground))] line-clamp-3 leading-relaxed mt-2.5">
                {post.metaDescription}
              </p>
            </div>

            <div className="pt-4 border-t border-[hsl(var(--border))] flex items-center justify-between text-xs mt-6">
              <div className="flex items-center gap-1.5 text-[hsl(var(--muted-foreground))] font-light">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="font-semibold text-sm text-[hsl(var(--primary))] group-hover:gap-1.5 transition-all inline-flex items-center gap-1"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
