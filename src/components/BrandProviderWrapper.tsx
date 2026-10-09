'use client';

import React from 'react';
import { BrandCustomizerProvider } from '@/context/BrandCustomizerContext';

export default function BrandProviderWrapper({ children }: { children: React.ReactNode }) {
  return <BrandCustomizerProvider>{children}</BrandCustomizerProvider>;
}
