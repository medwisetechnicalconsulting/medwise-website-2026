'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, ShieldCheck, Activity } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm transition-all">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 px-4 py-1.5 text-xs font-medium text-slate-300 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-200 font-semibold">Independent Medical Engineering Advisory</span>
            <span className="hidden md:inline text-slate-400">• Kenya & East Africa</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline">Location: Langata Rongai, KE</span>
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Phone className="h-3 w-3 text-emerald-400" />
              <span>{SITE_CONFIG.telephone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Activity className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
              Medwise<span className="text-emerald-600">.</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
              Technical Consulting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-emerald-600 transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">
            Insights & Blog
          </Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons: WhatsApp & Call */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 hover:shadow-emerald-600/20 transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all"
          >
            <Phone className="h-4 w-4 text-emerald-600" />
            <span>Call Us</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-100"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-100"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-100"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-100"
            >
              Insights & Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-100"
            >
              Contact
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
