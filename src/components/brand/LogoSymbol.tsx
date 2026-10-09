'use client';

import React from 'react';
import { logoItems } from './LogoVariants';
import { useBrandCustomizer } from '../../context/BrandCustomizerContext';

interface LogoSymbolProps {
  size?: number | string;
  className?: string;
  primaryColor?: string;
  accentColor?: string;
  secondaryColor?: string;
  monochrome?: 'black' | 'white' | null;
  logoId?: string;
}

export const LogoSymbol: React.FC<LogoSymbolProps> = ({
  size = 48,
  className = '',
  primaryColor,
  accentColor,
  secondaryColor,
  monochrome = null,
  logoId,
}) => {
  let contextLogoId: string | undefined;
  let customizerColors: any;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const customizer = useBrandCustomizer();
    contextLogoId = customizer?.activeLogo?.id;
    customizerColors = customizer?.activeColor?.colors;
  } catch {
    // Context fallback
  }

  const effectiveLogoId = logoId || contextLogoId || 'logo-01-growth-portal';
  const effectivePrimary = primaryColor || customizerColors?.primary || '#3E1F47';
  const effectiveAccent = accentColor || customizerColors?.accent || '#9C7BB5';
  const effectiveSecondary = secondaryColor || customizerColors?.secondary || '#C9C5CE';

  const logoItem = logoItems.find((l) => l.id === effectiveLogoId) || logoItems[0];

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {logoItem.renderSvg({
        primaryColor: effectivePrimary,
        secondaryColor: effectiveSecondary,
        accentColor: effectiveAccent,
        size,
        monochrome,
      })}
    </div>
  );
};

interface LogoLockupProps {
  layout?: 'horizontal' | 'stacked' | 'symbol-only' | 'wordmark-only' | 'english-only';
  theme?: 'light' | 'aubergine' | 'ink' | 'mono-black' | 'mono-white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
  logoId?: string;
}

export const LogoLockup: React.FC<LogoLockupProps> = ({
  layout = 'horizontal',
  theme = 'light',
  size = 'md',
  className = '',
  showSubtitle = true,
  logoId,
}) => {
  let customizerColors: any;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const customizer = useBrandCustomizer();
    customizerColors = customizer?.activeColor?.colors;
  } catch {
    // Context fallback
  }

  // Theme color maps
  const isDark = theme === 'aubergine' || theme === 'ink' || theme === 'mono-white';
  const isMono = theme === 'mono-black' || theme === 'mono-white';
  
  const textColor = isDark ? '#FFFFFF' : '#1E1A22';
  const subtextColor = isDark ? (customizerColors?.secondary || '#C9C5CE') : '#8A8590';
  const symbolPrimary = theme === 'aubergine'
    ? '#FFFFFF'
    : theme === 'ink'
    ? (customizerColors?.secondary || '#C9C5CE')
    : (customizerColors?.primary || '#3E1F47');
  const symbolAccent = theme === 'aubergine'
    ? (customizerColors?.secondary || '#C9C5CE')
    : (customizerColors?.accent || '#9C7BB5');

  const symbolSize = {
    sm: 32,
    md: 44,
    lg: 60,
    xl: 84,
  }[size];

  const arabicSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
  }[size];

  const englishSize = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[11px] tracking-[0.26em]',
    lg: 'text-[13px] tracking-[0.3em]',
    xl: 'text-[16px] tracking-[0.34em]',
  }[size];

  if (layout === 'symbol-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <LogoSymbol
          size={symbolSize}
          primaryColor={symbolPrimary}
          accentColor={symbolAccent}
          secondaryColor={isDark ? '#E9E0F0' : '#C9C5CE'}
          monochrome={isMono ? (theme === 'mono-white' ? 'white' : 'black') : null}
          logoId={logoId}
        />
      </div>
    );
  }

  if (layout === 'wordmark-only') {
    return (
      <div className={`inline-flex flex-col text-right select-none ${className}`} dir="rtl">
        <span
          className={`font-display font-extrabold leading-none ${arabicSize}`}
          style={{ color: textColor }}
        >
          دنانير
        </span>
        {showSubtitle && (
          <span
            className={`font-latin font-medium uppercase mt-1 leading-none ${englishSize}`}
            style={{ color: subtextColor }}
            dir="ltr"
          >
            DANANIR
          </span>
        )}
      </div>
    );
  }

  if (layout === 'english-only') {
    return (
      <div className={`inline-flex items-center select-none ${className}`} dir="ltr">
        <span
          className={`font-latin font-bold tracking-[0.28em] uppercase ${arabicSize}`}
          style={{ color: textColor }}
        >
          DANANIR
        </span>
      </div>
    );
  }

  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none gap-2 ${className}`}>
        <LogoSymbol
          size={symbolSize * 1.25}
          primaryColor={symbolPrimary}
          accentColor={symbolAccent}
          secondaryColor={isDark ? '#E9E0F0' : '#C9C5CE'}
          monochrome={isMono ? (theme === 'mono-white' ? 'white' : 'black') : null}
          logoId={logoId}
        />
        <div className="flex flex-col items-center">
          <span
            className={`font-display font-extrabold leading-tight ${arabicSize}`}
            style={{ color: textColor }}
          >
            دنانير
          </span>
          {showSubtitle && (
            <span
              className={`font-latin font-semibold uppercase tracking-[0.28em] mt-1 ${englishSize}`}
              style={{ color: subtextColor }}
              dir="ltr"
            >
              DANANIR
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal (Default)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} dir="rtl">
      <LogoSymbol
        size={symbolSize}
        primaryColor={symbolPrimary}
        accentColor={symbolAccent}
        secondaryColor={isDark ? '#E9E0F0' : '#C9C5CE'}
        monochrome={isMono ? (theme === 'mono-white' ? 'white' : 'black') : null}
        logoId={logoId}
      />
      <div className="flex flex-col text-right">
        <span
          className={`font-display font-extrabold leading-none ${arabicSize}`}
          style={{ color: textColor }}
        >
          دنانير
        </span>
        {showSubtitle && (
          <span
            className={`font-latin font-semibold uppercase mt-1 leading-none ${englishSize}`}
            style={{ color: subtextColor }}
            dir="ltr"
          >
            DANANIR
          </span>
        )}
      </div>
    </div>
  );
};

