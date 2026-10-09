'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  colorCollections,
  fontCollections,
  ColorCollection,
  FontCollection,
} from '../data/brandExplorations';
import { logoItems, LogoItem } from '../components/brand/LogoVariants';

interface BrandCustomizerContextType {
  activeColor: ColorCollection;
  activeFont: FontCollection;
  activeLogo: LogoItem;
  setColorCollection: (id: string) => void;
  setFontCollection: (id: string) => void;
  setLogoId: (id: string) => void;
  resetDefaults: () => void;
  isStudioOpen: boolean;
  setIsStudioOpen: (open: boolean) => void;
  studioTab: 'colors' | 'fonts' | 'logos';
  setStudioTab: (tab: 'colors' | 'fonts' | 'logos') => void;
}

const BrandCustomizerContext = createContext<BrandCustomizerContextType | undefined>(undefined);

export const BrandCustomizerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeColorId, setActiveColorId] = useState<string>('aubergine-silver-original');
  const [activeFontId, setActiveFontId] = useState<string>('cairo-ibm-default');
  const [activeLogoId, setActiveLogoId] = useState<string>('logo-01-growth-portal');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedColor = localStorage.getItem('dananir_color_id');
      if (savedColor) setActiveColorId(savedColor);
      const savedFont = localStorage.getItem('dananir_font_id');
      if (savedFont) setActiveFontId(savedFont);
      const savedLogo = localStorage.getItem('dananir_logo_id');
      if (savedLogo) setActiveLogoId(savedLogo);
    }
  }, []);

  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [studioTab, setStudioTab] = useState<'colors' | 'fonts' | 'logos'>('colors');

  const activeColor = colorCollections.find((c) => c.id === activeColorId) || colorCollections[0];
  const activeFont = fontCollections.find((f) => f.id === activeFontId) || fontCollections[0];
  const activeLogo = logoItems.find((l) => l.id === activeLogoId) || logoItems[0];

  // Apply colors to CSS custom properties & document root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', activeColor.colors.primary);
    root.style.setProperty('--brand-secondary', activeColor.colors.secondary);
    root.style.setProperty('--brand-accent', activeColor.colors.accent);
    root.style.setProperty('--brand-bg', activeColor.colors.background);
    root.style.setProperty('--brand-surface', activeColor.colors.surface);
    root.style.setProperty('--brand-text', activeColor.colors.text);
    root.style.setProperty('--brand-text-muted', activeColor.colors.textMuted);
    root.style.setProperty('--brand-glow1', activeColor.colors.glow1);
    root.style.setProperty('--brand-glow2', activeColor.colors.glow2);
    root.style.setProperty('--brand-glass-border', activeColor.colors.glassBorder);

    // Dynamic Apple Glass dark card gradient
    root.style.setProperty(
      '--apple-glass-dark-custom',
      `linear-gradient(135deg, ${activeColor.colors.primary}E0, #1E0E22F5)`
    );

    localStorage.setItem('dananir_color_id', activeColor.id);
  }, [activeColor]);

  // Dynamically load Google Font and apply typography variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--font-arabic', activeFont.fontFamilyArabic);
    root.style.setProperty('--font-display', activeFont.fontFamilyDisplay);
    root.style.setProperty('--font-latin', activeFont.fontFamilyLatin);

    // Ensure the Google Font stylesheet is loaded
    const fontLinkId = `google-font-${activeFont.id}`;
    if (!document.getElementById(fontLinkId)) {
      const link = document.createElement('link');
      link.id = fontLinkId;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?${activeFont.googleFontsImport}&display=swap`;
      document.head.appendChild(link);
    }

    localStorage.setItem('dananir_font_id', activeFont.id);
  }, [activeFont]);

  // Persist Logo
  useEffect(() => {
    localStorage.setItem('dananir_logo_id', activeLogo.id);
  }, [activeLogo]);

  const setColorCollection = (id: string) => {
    setActiveColorId(id);
  };

  const setFontCollection = (id: string) => {
    setActiveFontId(id);
  };

  const setLogoId = (id: string) => {
    setActiveLogoId(id);
  };

  const resetDefaults = () => {
    setActiveColorId('aubergine-silver-original');
    setActiveFontId('cairo-ibm-default');
    setActiveLogoId('logo-01-growth-portal');
  };

  return (
    <BrandCustomizerContext.Provider
      value={{
        activeColor,
        activeFont,
        activeLogo,
        setColorCollection,
        setFontCollection,
        setLogoId,
        resetDefaults,
        isStudioOpen,
        setIsStudioOpen,
        studioTab,
        setStudioTab,
      }}
    >
      {children}
    </BrandCustomizerContext.Provider>
  );
};

export const useBrandCustomizer = (): BrandCustomizerContextType => {
  const context = useContext(BrandCustomizerContext);
  if (!context) {
    throw new Error('useBrandCustomizer must be used within a BrandCustomizerProvider');
  }
  return context;
};
