'use client';

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
          className="flex flex-col justify-between rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 hover:shadow-xl hover:bg-white hover:border-blue-500/40 transition-all group"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span className="font-bold text-blue-800 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span>{post.readTimeMinutes} min read</span>
              </div>
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

          <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold">
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
        </motion.article>
      ))}
    </div>
  );
}
