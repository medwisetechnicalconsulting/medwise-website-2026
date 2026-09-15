'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, ChevronDown, Cpu, PackageCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';
import MedwiseLogo from './MedwiseLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      {/* Top Banner Notice - Clean Light Slate/Blue */}
      <div className="bg-slate-100 border-b border-slate-200/80 px-3 sm:px-6 py-1.5 text-xs font-semibold text-slate-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block h-2 w-2 rounded-full bg-red-600 animate-pulse shrink-0"></span>
            <span className="text-slate-900 font-bold truncate text-[11px] sm:text-xs">Medwise Technical Consulting</span>
            <span className="hidden md:inline text-slate-500">• Kisumu &amp; Nairobi, Kenya</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="hover:text-blue-700 transition-colors flex items-center gap-1 font-bold text-slate-900 text-[11px] sm:text-xs whitespace-nowrap"
            >
              <Phone className="h-3 w-3 text-red-600 shrink-0" />
              <span>{SITE_CONFIG.telephone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Official Medwise Logo Component */}
        <Link href="/" className="flex items-center">
          <MedwiseLogo variant="light" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-700 transition-colors">
            Services
          </Link>
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="hover:text-blue-700 transition-colors text-blue-800 font-bold inline-flex items-center gap-1 py-1"
            >
              <span>Products</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </Link>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg ring-1 ring-black/5 z-50">
                <Link
                  href="/products"
                  className="flex items-start gap-2.5 rounded-lg p-2.5 hover:bg-slate-50 transition-colors"
                  onClick={() => setProductsOpen(false)}
                >
                  <Cpu className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Diagnostic Machinery</div>
                    <div className="text-[11px] text-slate-500">Hematology, Biochemistry &amp; POCT</div>
                  </div>
                </Link>
                <Link
                  href="/products/consumables"
                  className="flex items-start gap-2.5 rounded-lg p-2.5 hover:bg-amber-50/70 transition-colors"
                  onClick={() => setProductsOpen(false)}
                >
                  <PackageCheck className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <span>Consumables &amp; Reagents</span>
                      <span className="rounded-sm bg-amber-200/80 px-1 text-[9px] font-extrabold text-amber-900">38+</span>
                    </div>
                    <div className="text-[11px] text-slate-500">Vacutainers, Stains &amp; Rapid Kits</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-blue-700 transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-blue-700 transition-colors">
            Insights & Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-700 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons: WhatsApp & Call */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-800 transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition-all"
          >
            <Phone className="h-4 w-4 text-red-600" />
            <span>Call {SITE_CONFIG.telephone}</span>
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
          <div className="flex flex-col space-y-3 font-semibold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 min-h-[44px] rounded-lg hover:bg-slate-100 flex items-center justify-between transition-colors"
            >
              <span>Diagnostic Machinery</span>
              <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-md">26 Models</span>
            </Link>
            <Link
              href="/products/consumables"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 min-h-[44px] rounded-lg hover:bg-amber-50 text-amber-900 font-bold flex items-center justify-between transition-colors"
            >
              <span>Consumables &amp; Reagents</span>
              <span className="text-[10px] bg-amber-200 text-amber-900 font-extrabold px-2 py-0.5 rounded-md">38+ Items</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              Insights &amp; Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-2.5 text-sm font-bold text-white shadow-xs"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-bold text-slate-800 shadow-xs"
            >
              <Phone className="h-4 w-4 text-red-600" />
              <span>Call {SITE_CONFIG.telephone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
