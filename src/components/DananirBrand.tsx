'use client';

import React from 'react';
import { LogoLockup } from './brand/LogoSymbol';

interface DananirBrandProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  light?: boolean;
  layout?: 'horizontal' | 'stacked' | 'symbol-only' | 'wordmark-only' | 'english-only';
  logoId?: string;
}

export default function DananirBrand({
  className = '',
  size = 'md',
  showSubtitle = true,
  light = false,
  layout = 'horizontal',
  logoId,
}: DananirBrandProps) {
  return (
    <LogoLockup
      size={size}
      showSubtitle={showSubtitle}
      theme={light ? 'mono-white' : 'light'}
      layout={layout}
      logoId={logoId}
      className={className}
    />
  );
}
