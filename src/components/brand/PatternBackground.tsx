'use client';

import React from 'react';
import { useBrandCustomizer } from '../../context/BrandCustomizerContext';

interface PatternProps {
  variant?: 'aubergine-on-light' | 'lavender-on-aubergine' | 'silver-subtle';
  className?: string;
  opacity?: number;
}

export const PatternBackground: React.FC<PatternProps> = ({
  variant = 'aubergine-on-light',
  className = '',
  opacity = 0.08,
}) => {
  let customizerColors: any;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const customizer = useBrandCustomizer();
    customizerColors = customizer?.activeColor?.colors;
  } catch {
    // fallback
  }

  const strokeColor =
    variant === 'lavender-on-aubergine'
      ? customizerColors?.accent || '#9C7BB5'
      : variant === 'silver-subtle'
      ? customizerColors?.secondary || '#C9C5CE'
      : customizerColors?.primary || '#3E1F47';

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`dananir-pattern-${variant}`}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(25)"
          >
            {/* Geometric contour motif inspired by Dal curve & circular value flow */}
            <path
              d="M 24 12 C 38 18, 42 34, 34 44 C 28 52, 16 52, 8 48 C 16 48, 28 46, 32 38 C 38 28, 34 18, 24 12 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            <circle cx="20" cy="30" r="3" fill={strokeColor} />
            <path d="M 10 48 H 40" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
            
            {/* Secondary offset rhythmic dot */}
            <circle cx="52" cy="52" r="1.5" fill={strokeColor} opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dananir-pattern-${variant})`} />
      </svg>
    </div>
  );
};
