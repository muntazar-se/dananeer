import React from 'react';

interface DananirBrandProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  light?: boolean;
}

export default function DananirBrand({
  className = '',
  size = 'md',
  showSubtitle = true,
  light = false,
}: DananirBrandProps) {
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 60,
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const currentIconSize = iconSizes[size];

  return (
    <div className={`dananir-brand-container ${className} ${light ? 'brand-light' : ''}`}>
      {/* Brand Icon Emblem */}
      <div className="brand-symbol" style={{ width: currentIconSize, height: currentIconSize }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dananirGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFB751" />
              <stop offset="50%" stopColor="#C3932E" />
              <stop offset="100%" stopColor="#9C721D" />
            </linearGradient>
            <linearGradient id="dananirDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B0F19" />
            </linearGradient>
          </defs>

          {/* Outer Token Ring */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="14"
            fill="url(#dananirDarkGrad)"
            stroke="url(#dananirGoldGrad)"
            strokeWidth="2.5"
          />

          {/* Dynamic Dinar Crescent / Arch of Growth */}
          <path
            d="M 14 24 C 14 17.5 19 13 25.5 13 C 30 13 33.5 15.5 35 19 C 32.5 17.5 29.5 16.5 26.5 16.5 C 21.5 16.5 18 20 18 24 C 18 28 21.5 31.5 26.5 31.5 C 29.5 31.5 32.5 30.5 35 29 C 33.5 32.5 30 35 25.5 35 C 19 35 14 30.5 14 24 Z"
            fill="url(#dananirGoldGrad)"
          />

          {/* Commerce Dinar Core Coin Spark */}
          <circle cx="28" cy="24" r="3.5" fill="#DFB751" />
          <path
            d="M 33 21 L 35 24 L 33 27"
            stroke="#DFB751"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography: Primary Arabic Wordmark dominates */}
      <div className="brand-text-block">
        <span className="brand-wordmark-ar">دنانير</span>
        {showSubtitle && <span className="brand-wordmark-en">DANANIR</span>}
      </div>
    </div>
  );
}
