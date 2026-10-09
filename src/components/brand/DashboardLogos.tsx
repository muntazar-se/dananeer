'use client';

import React from 'react';
import { LogoSymbol } from './LogoSymbol';

export interface DashboardLogoProps {
  theme?: 'light' | 'dark-sidebar' | 'mono-white' | 'mono-black';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  className?: string;
}

/**
 * 1. Horizontal Dashboard Logo
 * Built specifically for headers, topbars, and sidebar headers
 */
export const DashboardHorizontalLogo: React.FC<DashboardLogoProps> = ({
  theme = 'light',
  size = 'md',
  showBadge = true,
  className = '',
}) => {
  const isDark = theme === 'dark-sidebar' || theme === 'mono-white';

  const config = {
    sm: { symbol: 28, text: 'text-lg', sub: 'text-[9px]', badge: 'text-[9px] px-1.5 py-0.5' },
    md: { symbol: 36, text: 'text-xl', sub: 'text-[10px]', badge: 'text-[10px] px-2 py-0.5' },
    lg: { symbol: 48, text: 'text-2xl', sub: 'text-xs', badge: 'text-xs px-2.5 py-1' },
    xl: { symbol: 64, text: 'text-3xl', sub: 'text-sm', badge: 'text-xs px-3 py-1' },
  }[size];

  const textColor = isDark ? '#FFFFFF' : '#1E1A22';
  const subtextColor = isDark ? '#C9C5CE' : '#8A8590';
  const primarySymbol = isDark ? '#FFFFFF' : '#3E1F47';
  const accentSymbol = isDark ? '#E9E0F0' : '#9C7BB5';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} dir="rtl">
      {/* Brand Mark */}
      <LogoSymbol
        size={config.symbol}
        primaryColor={primarySymbol}
        accentColor={accentSymbol}
        secondaryColor={isDark ? '#B894D3' : '#C9C5CE'}
        monochrome={theme === 'mono-white' ? 'white' : theme === 'mono-black' ? 'black' : null}
      />

      {/* Wordmark & Portal Descriptor */}
      <div className="flex flex-col text-right">
        <div className="flex items-center gap-2">
          <span className={`font-display font-extrabold leading-tight tracking-tight ${config.text}`} style={{ color: textColor }}>
            دنانير
          </span>
          {showBadge && (
            <span
              className={`rounded-md font-display font-bold uppercase tracking-wider ${config.badge} ${
                isDark ? 'bg-white/15 text-white border border-white/20' : 'bg-[#E9E0F0] text-[#3E1F47] border border-[#9C7BB5]/30'
              }`}
            >
              التاجر
            </span>
          )}
        </div>
        <span className={`font-latin font-bold uppercase tracking-[0.24em] leading-none mt-0.5 ${config.sub}`} style={{ color: subtextColor }} dir="ltr">
          DANANIR DASHBOARD
        </span>
      </div>
    </div>
  );
};

/**
 * 2. Square App & Favicon Mark
 * Designed for responsive collapsed sidebars, avatars, and app headers
 */
export const DashboardSquareMark: React.FC<{
  theme?: 'light' | 'dark-sidebar' | 'glass';
  size?: number;
  className?: string;
}> = ({ theme = 'light', size = 44, className = '' }) => {
  const isDark = theme === 'dark-sidebar';
  const isGlass = theme === 'glass';

  const containerBg = isDark
    ? 'bg-[#3E1F47] border-white/15 shadow-md shadow-black/20'
    : isGlass
    ? 'bg-white/60 backdrop-blur-xl border-white/80 shadow-[0_8px_24px_rgba(62,31,71,0.08)]'
    : 'bg-[#F7F5F8] border-[#ECEAEF] shadow-sm';

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl border p-2 transition-all group ${containerBg} ${className}`}
      style={{ width: size, height: size }}
    >
      <LogoSymbol
        size={Math.round(size * 0.72)}
        primaryColor={isDark ? '#FFFFFF' : '#3E1F47'}
        accentColor={isDark ? '#E9E0F0' : '#9C7BB5'}
        secondaryColor={isDark ? '#C9C5CE' : '#C9C5CE'}
      />
    </div>
  );
};

/**
 * 3. Showcase Previews for Sidebar & Login
 */
export const DashboardSidebarPreview: React.FC = () => {
  return (
    <div className="w-full max-w-xs rounded-2xl bg-[#28132E] border border-white/10 p-5 shadow-2xl text-white" dir="rtl">
      {/* Sidebar Header Lockup */}
      <div className="pb-4 border-b border-white/10 flex items-center justify-between">
        <DashboardHorizontalLogo theme="dark-sidebar" size="sm" showBadge={true} />
      </div>

      {/* Mock navigation items */}
      <div className="mt-4 space-y-1.5 text-xs font-display">
        <div className="p-2.5 rounded-xl bg-white/10 font-bold text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E9E0F0]" />
            <span>لوحة التحكم الرئيسية</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#9C7BB5]/40 text-white font-latin">LIVE</span>
        </div>
        <div className="p-2.5 rounded-xl text-white/70 hover:bg-white/5 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span>الطلبات والمبيعات</span>
        </div>
        <div className="p-2.5 rounded-xl text-white/70 hover:bg-white/5 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span>كتالوج المنتجات</span>
        </div>
      </div>
    </div>
  );
};

export const DashboardLoginPreview: React.FC = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-2xl border border-white p-7 shadow-[0_20px_50px_rgba(62,31,71,0.12)] text-center" dir="rtl">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F265B] to-[#250E2D] p-3 shadow-lg shadow-[#3E1F47]/20 flex items-center justify-center">
          <LogoSymbol size={44} primaryColor="#FFFFFF" accentColor="#E9E0F0" secondaryColor="#C9C5CE" />
        </div>
      </div>
      <h4 className="text-xl font-extrabold font-display text-[#1E1A22]">تسجيل دخول التاجر</h4>
      <p className="text-xs text-[#8A8590] mt-1 mb-5">أدخل رقم الهاتف لتسجيل الدخول وإدارة مبيعات متجرك</p>
      <div className="space-y-3">
        <div className="w-full h-10 rounded-xl bg-[#F7F5F8] border border-[#ECEAEF] flex items-center px-3 text-xs text-[#8A8590] font-latin" dir="ltr">
          +964 770 000 0000
        </div>
        <button className="w-full h-10 rounded-xl bg-[#3E1F47] hover:bg-[#28132E] text-white text-xs font-bold font-display shadow-md transition-all">
          إرسال رمز الدخول السريع OTP
        </button>
      </div>
    </div>
  );
};
