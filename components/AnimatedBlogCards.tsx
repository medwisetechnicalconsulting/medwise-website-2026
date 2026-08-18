'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/mdx';

export default function AnimatedBlogCards({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          whileHover={{ y: -6 }}
          className="flex flex-col justify-between rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-xl hover:bg-white hover:border-blue-500/40 transition-all group"
        >
          {/* Card Image Banner */}
          <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 block">
            <Image
              src={post.image || '/images/blog-default.jpg'}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
            <div className="absolute top-4 left-4">
              <span className="font-bold text-blue-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs border border-white/50 shadow-xs">
                {post.category}
              </span>
            </div>
          </Link>

          <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span>{post.readTimeMinutes} min read</span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-medium">
                {post.metaDescription}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold mt-auto">
              <div className="flex items-center gap-1.5 text-slate-500">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="font-bold text-blue-700 group-hover:translate-x-1 transition-transform flex items-center gap-1"
              >
                <span>Read Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

