'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { target: 150, suffix: '+', label: 'Facilities Equipped' },
  { target: 10, suffix: '+ Years', label: 'In Clinical Engineering' },
  { target: 99, suffix: '%', label: 'Device Accuracy & Uptime' },
  { target: 4, suffix: ' Hours', label: 'Avg Emergency Response' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600; // 1600ms as specified
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            setCounts(STATS.map((s) => Math.floor(s.target * easeOutCubic)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(STATS.map((s) => s.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-[hsl(var(--primary))] py-16 px-4 sm:px-8 md:px-[72px] text-white"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className={`px-4 sm:px-8 ${
              idx === 0 ? 'lg:pl-0' : ''
            } ${idx === STATS.length - 1 ? 'lg:pr-0' : ''} ${
              idx > 1 ? 'pt-6 lg:pt-0' : ''
            }`}
          >
            <div className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-tight">
              {counts[idx]}
              {stat.suffix}
            </div>
            <div className="font-light text-xs tracking-[0.12em] uppercase text-white/65 mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
