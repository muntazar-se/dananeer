'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowLeft, Sparkles, ExternalLink } from 'lucide-react';
import DananirBrand from './DananirBrand';

interface NavbarProps {
  onOpenOnboard: () => void;
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenOnboard, onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            onClick={onOpenDemo}
            className="btn btn-ghost"
            style={{ fontSize: '0.92rem', padding: '10px 18px', display: 'none' }}
          >
            تجربة متجر
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
