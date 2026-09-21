'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, ChevronDown, Cpu, PackageCheck, MapPin, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';
import MedwiseLogo from './MedwiseLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {/* Top Clinical Utility Notice Bar */}
      <div className="bg-[#0F2942] text-white px-3 sm:px-6 py-1.5 text-xs font-semibold border-b border-[#1E3A5F]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block h-2 w-2 rounded-full bg-[#DC2626] shrink-0"></span>
            <span className="text-white font-bold truncate text-[11px] sm:text-xs tracking-tight">
              Medwise Technical Consulting
            </span>
            <span className="hidden md:inline text-slate-300">• Kisumu HQ &amp; Nairobi Field Hub</span>
          </div>

          <div className="flex items-center gap-4 text-slate-200 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-[#DC2626]" />
              <span>Independent Biomedical Advisory</span>
            </div>
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-mono font-bold text-white text-[11px] sm:text-xs whitespace-nowrap bg-[#1E3A5F] px-2.5 py-0.5 rounded border border-[#2B4C74]"
            >
              <Phone className="h-3 w-3 text-[#DC2626] shrink-0" />
              <span>{SITE_CONFIG.telephone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Official Medwise Logo */}
        <Link href="/" className="flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F2942] rounded-lg">
          <MedwiseLogo variant="light" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-bold text-slate-700">
          <Link
            href="/"
            className="hover:text-[#0F2942] transition-colors py-2 border-b-2 border-transparent hover:border-[#DC2626]"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-[#0F2942] transition-colors py-2 border-b-2 border-transparent hover:border-[#DC2626]"
          >
            Services
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="hover:text-[#0F2942] transition-colors text-slate-900 font-bold inline-flex items-center gap-1 border-b-2 border-transparent hover:border-[#DC2626]"
            >
              <span>Equipment &amp; Supplies</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
            </Link>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-0.5 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg z-50">
                <Link
                  href="/products"
                  className="flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                  onClick={() => setProductsOpen(false)}
                >
                  <div className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="h-4.5 w-4.5 text-[#0F2942]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Diagnostic Machinery</div>
                    <div className="text-[11px] text-slate-500 leading-snug">Hematology, Clinical Chemistry &amp; POCT</div>
                  </div>
                </Link>

                <Link
                  href="/products/consumables"
                  className="flex items-start gap-3 rounded-lg p-3 hover:bg-amber-50/60 border border-transparent hover:border-amber-200 transition-all mt-1"
                  onClick={() => setProductsOpen(false)}
                >
                  <div className="h-9 w-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                    <PackageCheck className="h-4.5 w-4.5 text-amber-800" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <span>Consumables &amp; Reagents</span>
                      <span className="rounded bg-amber-200 px-1.5 py-0.2 text-[9px] font-extrabold text-amber-950">38+</span>
                    </div>
                    <div className="text-[11px] text-slate-500 leading-snug">Vacutainers, Stains &amp; Rapid Kits</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="hover:text-[#0F2942] transition-colors py-2 border-b-2 border-transparent hover:border-[#DC2626]"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#0F2942] transition-colors py-2 border-b-2 border-transparent hover:border-[#DC2626]"
          >
            Engineering Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#0F2942] transition-colors py-2 border-b-2 border-transparent hover:border-[#DC2626]"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons: WhatsApp & Call */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="med-btn-tactile med-btn-tactile-emerald text-xs py-1.5 px-3 min-h-[38px]"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="med-btn-tactile med-btn-tactile-secondary text-xs py-1.5 px-3 min-h-[38px]"
          >
            <Phone className="h-3.5 w-3.5 text-[#DC2626]" />
            <span>Call {SITE_CONFIG.telephone}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button (44px min touch target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden flex items-center justify-center rounded-lg p-2.5 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors min-h-[44px] min-w-[44px]"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-xl">
          <div className="flex flex-col space-y-1.5 font-bold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 min-h-[44px] flex items-center rounded-lg hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 min-h-[44px] flex items-center rounded-lg hover:bg-slate-50 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 min-h-[44px] rounded-lg hover:bg-slate-50 flex items-center justify-between transition-colors"
            >
              <span>Diagnostic Machinery</span>
              <span className="text-[11px] bg-blue-50 text-blue-900 border border-blue-200 font-bold px-2 py-0.5 rounded">
                26 Models
              </span>
            </Link>
            <Link
              href="/products/consumables"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 min-h-[44px] rounded-lg hover:bg-amber-50 text-amber-900 font-bold flex items-center justify-between transition-colors"
            >
              <span>Consumables &amp; Reagents</span>
              <span className="text-[11px] bg-amber-100 text-amber-950 border border-amber-200 font-extrabold px-2 py-0.5 rounded">
                38+ Items
              </span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 min-h-[44px] flex items-center rounded-lg hover:bg-slate-50 transition-colors"
            >
              About Medwise
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 min-h-[44px] flex items-center rounded-lg hover:bg-slate-50 transition-colors"
            >
              Engineering Insights &amp; Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 min-h-[44px] flex items-center rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 py-3 text-sm font-bold text-white shadow-xs min-h-[44px]"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Chat with Engineer on WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 py-3 text-sm font-bold text-slate-800 shadow-xs min-h-[44px]"
            >
              <Phone className="h-4 w-4 text-[#DC2626]" />
              <span>Call Kisumu HQ ({SITE_CONFIG.telephone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
