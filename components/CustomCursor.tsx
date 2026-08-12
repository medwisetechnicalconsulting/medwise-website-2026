'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for smooth position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Physics springs for trailing ring fluidity
  const ringSpringConfig = { stiffness: 280, damping: 24, mass: 0.5 };
  const dotSpringConfig = { stiffness: 700, damping: 35 };

  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices or fine pointer missing
    if (typeof window !== 'undefined') {
      const touchCheck = window.matchMedia('(pointer: coarse)').matches;
      if (touchCheck) {
        setIsTouchDevice(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive-hover, [data-cursor]'
        );

        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor');
          setCursorText(customText || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render on touch screens or when mouse isn't active yet
  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Glowing Trailing Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.9 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={`fixed left-0 top-0 rounded-full flex items-center justify-center transition-colors duration-200 ${
          isHovered
            ? 'w-12 h-12 bg-blue-600/15 border-2 border-blue-500/80 shadow-[0_0_25px_rgba(37,99,235,0.4)] backdrop-blur-[1px]'
            : 'w-9 h-9 border border-blue-500/40 bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
        }`}
      >
        {/* Optional text badge on hover if data-cursor="View" or similar */}
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-bold tracking-wider uppercase text-blue-600 px-1 text-center select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Precision Gradient Core Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.5 : isHovered ? 0.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="fixed left-0 top-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]"
      />
    </div>
  );
}
