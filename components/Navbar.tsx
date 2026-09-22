'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, ChevronDown, Cpu, PackageCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo/schema';
import MedwiseLogo from './MedwiseLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[hsl(var(--border))] transition-all">
      {/* 1. Emergency Strip */}
      <div className="bg-[#FFF7ED] border-b border-[#FED7AA] py-2 px-4 sm:px-8 md:px-[72px]">
        <div className="max-w-[1200px] mx-auto flex justify-center items-center gap-2.5 text-center flex-wrap">
          <span className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-pulse shrink-0" />
          <span className="font-medium text-xs text-[#C2410C] tracking-normal">
            ⚡ 24/7 Rapid Biomedical Emergency &amp; Breakdown Support &middot; Kisumu &amp; Nairobi Field Dispatch &middot;{' '}
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="font-bold underline decoration-[#FED7AA] hover:text-[#9A3412] transition-colors ml-0.5 whitespace-nowrap"
            >
              {SITE_CONFIG.telephone}
            </a>
          </span>
        </div>
      </div>

      {/* 2. Main Centered Navbar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-[72px] py-4 md:py-5 flex justify-between items-center">
        {/* Left: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <MedwiseLogo variant="light" size="md" />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-normal text-sm text-[hsl(var(--muted-foreground))]">
          <Link
            href="/"
            className="hover:text-[hsl(var(--foreground))] transition-colors font-medium py-1"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-[hsl(var(--foreground))] transition-colors font-medium py-1"
          >
            Services
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative py-1"
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            <Link
              href="/products"
              className="hover:text-[hsl(var(--foreground))] transition-colors font-medium inline-flex items-center gap-1.5"
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? 'rotate-180' : ''}`} />
            </Link>

            {productsDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-[hsl(var(--border))] bg-white p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.08)] z-50">
                <Link
                  href="/products"
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-[hsl(var(--muted))] transition-colors"
                  onClick={() => setProductsDropdown(false)}
                >
                  <div className="w-9 h-9 rounded-full bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[hsl(var(--foreground))] flex items-center gap-1.5">
                      <span>1. Equipments</span>
                      <span className="rounded-full bg-blue-100 text-blue-900 px-2 py-0.5 text-[9px] font-bold">26 Models</span>
                    </div>
                    <div className="text-[11px] text-[hsl(var(--muted-foreground))] leading-snug">Diagnostic Machinery, Hematology &amp; Chemistry</div>
                  </div>
                </Link>

                <Link
                  href="/products/consumables"
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-[hsl(var(--muted))] transition-colors mt-1"
                  onClick={() => setProductsDropdown(false)}
                >
                  <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <PackageCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[hsl(var(--foreground))] flex items-center gap-1.5">
                      <span>2. Consumables and reagents</span>
                      <span className="rounded-full bg-amber-100 text-amber-900 px-2 py-0.5 text-[9px] font-bold">38+</span>
                    </div>
                    <div className="text-[11px] text-[hsl(var(--muted-foreground))] leading-snug">Vacutainers, Rapid Test Kits &amp; Stains</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="hover:text-[hsl(var(--foreground))] transition-colors font-medium py-1"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-[hsl(var(--foreground))] transition-colors font-medium py-1"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-[hsl(var(--foreground))] transition-colors font-medium py-1"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Phone link + Pill Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${SITE_CONFIG.telephone}`}
            className="font-medium text-sm text-[hsl(var(--foreground))] inline-flex items-center gap-1.5 hover:text-[hsl(var(--primary))] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
            <span>{SITE_CONFIG.telephone}</span>
          </a>

          <div className="w-px h-5 bg-[hsl(var(--border))]" />

          <Link
            href="/contact"
            className="btn-pill-primary h-10 px-6 text-sm font-semibold"
          >
            <span>Free Quote &rarr;</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex items-center justify-center rounded-full p-2.5 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[hsl(var(--border))] bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-base text-[hsl(var(--foreground))]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[hsl(var(--primary))] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[hsl(var(--primary))] transition-colors"
            >
              Services
            </Link>
            {/* Products Group */}
            <div className="py-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] py-1">
                Products
              </div>
              <div className="pl-3 border-l-2 border-[hsl(var(--border))] space-y-1 mt-1">
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 hover:text-[hsl(var(--primary))] transition-colors flex items-center justify-between text-sm"
                >
                  <span className="font-semibold text-[hsl(var(--foreground))]">1. Equipments</span>
                  <span className="text-[10px] bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] px-2 py-0.5 rounded-full font-bold">
                    26 Models
                  </span>
                </Link>
                <Link
                  href="/products/consumables"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 hover:text-[hsl(var(--primary))] transition-colors flex items-center justify-between text-sm"
                >
                  <span className="font-semibold text-[hsl(var(--foreground))]">2. Consumables and reagents</span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                    38+ Items
                  </span>
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[hsl(var(--primary))] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[hsl(var(--primary))] transition-colors"
            >
              Engineering Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[hsl(var(--primary))] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-[hsl(var(--border))] flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill-primary w-full h-11 text-sm font-semibold justify-center"
            >
              <span>Request Free Consultation &rarr;</span>
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Medwise%20Technical%20Consulting`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-secondary w-full h-11 text-sm font-semibold justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Biomedical Engineer</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.telephone}`}
              className="btn-pill-secondary w-full h-11 text-sm font-semibold justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span>Call {SITE_CONFIG.telephone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
