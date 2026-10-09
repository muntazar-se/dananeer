'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowLeft, Sparkles, ExternalLink, SlidersHorizontal } from 'lucide-react';
import DananirBrand from './DananirBrand';
import { useBrandCustomizer } from '@/context/BrandCustomizerContext';

interface NavbarProps {
  onOpenOnboard: () => void;
  onOpenDemo: () => void;
  onOpenPalettes?: () => void;
}

export default function Navbar({ onOpenOnboard, onOpenDemo, onOpenPalettes }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  let brandCustomizer: any = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    brandCustomizer = useBrandCustomizer();
  } catch {
    // context fallback
  }

  const handleOpenStudio = () => {
    if (brandCustomizer) {
      brandCustomizer.setIsStudioOpen(true);
    } else if (onOpenPalettes) {
      onOpenPalettes();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'المميزات', href: '#features' },
    { label: 'كيف يعمل؟', href: '#how-it-works' },
    { label: 'المتاجر', href: '#stores' },
    { label: 'الأسعار', href: '#pricing' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link href="/" className="navbar-brand-link">
          <DananirBrand size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="القائمة الرئيسية">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="nav-actions">
          <button
            onClick={handleOpenStudio}
            className="btn btn-outline"
            style={{
              fontSize: '0.88rem',
              padding: '9px 16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              borderColor: 'var(--brand-silver-300)',
            }}
            title="افتح استوديو الهوية البصرية (50 لون · 25 خط · 35 شعار)"
          >
            <SlidersHorizontal size={15} color="var(--brand-accent-500)" />
            <span>استوديو الهوية</span>
          </button>

          <button
            onClick={onOpenOnboard}
            className="btn btn-primary"
            style={{ padding: '11px 22px' }}
          >
            <span>ابدأ متجرك</span>
            <ArrowLeft size={16} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenStudio();
              }}
              className="btn btn-outline"
              style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--brand-silver-300)' }}
            >
              <SlidersHorizontal size={15} color="var(--brand-accent-500)" />
              <span>استوديو الهوية البصرية (50x25x35)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="btn btn-outline"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              جرّب متجرًا حقيقيًا
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOnboard();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>ابدأ متجرك الآن</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
