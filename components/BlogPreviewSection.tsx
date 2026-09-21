import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { ArrowRight } from 'lucide-react';
import AnimatedBlogCards from './AnimatedBlogCards';

export default function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[hsl(var(--border))] px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
              TECHNICAL KNOWLEDGE HUB
            </span>
            <h2 className="font-extrabold text-[clamp(2rem,3vw,2.8rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
              Medical equipment insights &amp; guides.
            </h2>
            <p className="font-light text-base text-[hsl(var(--muted-foreground))] mt-2 max-w-xl leading-relaxed">
              Practical biomedical engineering advice, equipment selection comparisons, and calibration standards for Kenyan healthcare administrators.
            </p>
          </div>

          <Link
            href="/blog"
            className="btn-pill-secondary h-11 px-7 text-sm font-semibold shrink-0"
          >
            <span>All guides &rarr;</span>
          </Link>
        </div>

        {/* 3 Posts Grid */}
        <AnimatedBlogCards posts={posts} />

      </div>
    </section>
  );
}
