'use client';

import React, { useState } from 'react';
import { useBrandCustomizer } from '../../context/BrandCustomizerContext';
import { colorCollections } from '../../data/brandExplorations';
import { fontCollections } from '../../data/brandExplorations';
import { logoItems } from '../brand/LogoVariants';
import {
  Palette,
  Type,
  Sparkles,
  RotateCcw,
  Check,
  X,
  SlidersHorizontal,
  Layers,
  ArrowUpRight,
  Eye,
  ShieldCheck,
} from 'lucide-react';

export const LiveBrandStudio: React.FC = () => {
  const {
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
  } = useBrandCustomizer();

  const [colorFilter, setColorFilter] = useState<string>('all');
  const [fontFilter, setFontFilter] = useState<string>('all');
  const [logoFilter, setLogoFilter] = useState<string>('all');
  const [logoPreviewBg, setLogoPreviewBg] = useState<'light' | 'dark' | 'glass'>('glass');

  const filteredColors = colorFilter === 'all'
    ? colorCollections
    : colorCollections.filter((c) => c.category === colorFilter);

  const filteredFonts = fontFilter === 'all'
    ? fontCollections
    : fontCollections.filter((f) => f.category === fontFilter);

  const filteredLogos = logoFilter === 'all'
    ? logoItems
    : logoItems.filter((l) => l.category === logoFilter);

  return (
    <>
      {/* Floating Apple Glass Studio Launcher Button */}
      <aside aria-label="أدوات تخصيص الهوية" className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsStudioOpen(true)}
          className="apple-glass-pill px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-bold text-[#1E1A22] border-2 border-white/80 group cursor-pointer"
          title="افتح استوديو الهوية البصرية المباشر"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--brand-primary,#3E1F47)] to-[var(--brand-accent,#9C7BB5)] flex items-center justify-center text-white shadow-sm border border-white/30 group-hover:rotate-12 transition-transform">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-extrabold text-[13px]">استوديو الهوية المباشر</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 font-latin text-[10px] font-bold">50x25x35</span>
            </div>
            <span className="text-[10px] text-[#6F6978] font-latin">Live Customizer · Apple Glass</span>
          </div>
        </button>
      </aside>

      {/* Main Studio Modal / Drawer (VisionOS Floating Sheet) */}
      {isStudioOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all animate-in fade-in duration-200">
          <div
            className="apple-glass-modal rounded-3xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl border border-white/90 overflow-hidden"
            dir="rtl"
          >
            {/* 1. Modal Top Bar */}
            <div className="apple-glass px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/70">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--brand-primary,#3E1F47)] to-[var(--brand-accent,#9C7BB5)] flex items-center justify-center text-white shadow-md border border-white/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold font-display text-[#1E1A22] leading-tight flex items-center gap-2">
                    <span>استوديو الهوية البصرية المباشر</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/80 border border-white/90 text-[#3E1F47] font-latin font-bold">
                      Live Studio (110 Explorations · 50C / 25F / 35L)
                    </span>
                  </h2>
                  <p className="text-xs text-[#6F6978] mt-0.5">
                    اختر أي تركيبة من الألوان والخطوط والشعارات لتجربتها فوراً وحياً على كامل المشروع بتأثير زجاج آبل السائل.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={resetDefaults}
                  className="apple-glass-pill px-3 py-1.5 rounded-xl text-xs font-semibold text-[#6F6978] hover:text-[#1E1A22] flex items-center gap-1.5 transition-all"
                  title="إعادة ضبط للألوان والخطوط الأصلية"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">إعادة ضبط للهوية الأصلية</span>
                </button>
                <button
                  onClick={() => setIsStudioOpen(false)}
                  className="apple-glass-pill w-8 h-8 rounded-full text-[#6F6978] hover:text-[#1E1A22] flex items-center justify-center cursor-pointer"
                  title="إغلاق النافذة"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Active Selection Summary Pill Bar */}
            <div className="bg-white/40 px-6 py-2.5 border-b border-white/60 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[#6F6978] font-medium">الخيارات المطبقة حالياً:</span>
                
                {/* Active Color */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/80 border border-white/90 shadow-2xs font-semibold text-[#1E1A22]">
                  <span
                    className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: activeColor.colors.primary }}
                  />
                  <span>اللون: {activeColor.nameAr}</span>
                </div>

                {/* Active Font */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/80 border border-white/90 shadow-2xs font-semibold text-[#1E1A22]">
                  <Type className="w-3 h-3 text-[#3E1F47]" />
                  <span>الخط: {activeFont.nameAr}</span>
                </div>

                {/* Active Logo */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/80 border border-white/90 shadow-2xs font-semibold text-[#1E1A22]">
                  <Layers className="w-3 h-3 text-[#3E1F47]" />
                  <span>الشعار: {activeLogo.nameAr} (#{activeLogo.num})</span>
                </div>
              </div>

              <div className="text-[11px] text-emerald-800 font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>يتم التطبيق فورياً على كامل صفحات المنصة والموقع ولوحة التاجر</span>
              </div>
            </div>

            {/* 3. Studio Category Tabs */}
            <div className="px-6 pt-4 pb-2 border-b border-white/50 flex gap-2">
              <button
                onClick={() => setStudioTab('colors')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  studioTab === 'colors'
                    ? 'apple-glass-pill-primary text-white shadow-sm'
                    : 'apple-glass-pill text-[#6F6978] hover:text-[#1E1A22]'
                }`}
              >
                <Palette className="w-4 h-4" />
                <span>لوحات الألوان الـ 40 (40 Color Collections)</span>
              </button>

              <button
                onClick={() => setStudioTab('fonts')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  studioTab === 'fonts'
                    ? 'apple-glass-pill-primary text-white shadow-sm'
                    : 'apple-glass-pill text-[#6F6978] hover:text-[#1E1A22]'
                }`}
              >
                <Type className="w-4 h-4" />
                <span>الخطوط المعتمدة الـ 25 (Live Fonts)</span>
              </button>

              <button
                onClick={() => setStudioTab('logos')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  studioTab === 'logos'
                    ? 'apple-glass-pill-primary text-white shadow-sm'
                    : 'apple-glass-pill text-[#6F6978] hover:text-[#1E1A22]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>نماذج الشعار الـ 35 (35 Logo Variations)</span>
              </button>
            </div>

            {/* 4. Tab Body Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* TAB 1: 40 COLOR COLLECTIONS */}
              {studioTab === 'colors' && (
                <div className="space-y-6">
                  {/* Real-time Color Impact Explainer Banner */}
                  <div className="apple-glass rounded-2xl p-4 sm:p-5 border border-white/80 shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b border-black/5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: activeColor.colors.accent }} />
                        <h3 className="font-extrabold font-display text-sm text-[#1E1A22]">
                          📍 أين يحدث تأثير وتغيير الألوان مباشرة في كامل الموقع؟
                        </h3>
                      </div>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        اللوحة النشطة: {activeColor.nameAr}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-xl bg-white/70 border border-white/80 space-y-1">
                        <span className="font-bold text-[#1E1A22] block">1. هيرو الصفحة</span>
                        <span className="text-[#6F6978]">خلفية غطاء الهيرو الداكنة تتغير فورياً.</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/70 border border-white/80 space-y-1">
                        <span className="font-bold text-[#1E1A22] block">2. أزرار CTA</span>
                        <span className="text-[#6F6978]">تكتسب تدرج الزجاج السائل اللوني الجديد.</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/70 border border-white/80 space-y-1">
                        <span className="font-bold text-[#1E1A22] block">3. رمز الشعار</span>
                        <span className="text-[#6F6978]">يتلوّن رمز "د" والأشكال الهندسية تلقائياً.</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/70 border border-white/80 space-y-1">
                        <span className="font-bold text-[#1E1A22] block">4. شارات 01، 02</span>
                        <span className="text-[#6F6978]">أرقام الخطوات والنصوص المميزة والوسوم.</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/70 border border-white/80 space-y-1">
                        <span className="font-bold text-[#1E1A22] block">5. هالات الإضاءة</span>
                        <span className="text-[#6F6978]">كرات التوهج الزجاجية في خلفية الشاشة.</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/70 border border-white/80 space-y-1">
                        <span className="font-bold text-[#1E1A22] block">6. لوحة التاجر</span>
                        <span className="text-[#6F6978]">أشرطة الرسوم والبطاقات وقوالب المتاجر.</span>
                      </div>
                    </div>

                    {/* Live Miniature Swatch Preview Box */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs bg-black/[0.02] p-3 rounded-xl border border-white/60">
                      <div className="flex items-center gap-3">
                        <span className="text-[#6F6978] font-medium text-[11px]">معاينة فورية لعناصر الهوية:</span>
                        <div
                          className="px-3 py-1.5 rounded-xl text-white font-bold text-[11px] shadow-xs flex items-center gap-1.5"
                          style={{
                            background: `linear-gradient(135deg, ${activeColor.colors.primary}, ${activeColor.colors.accent})`,
                          }}
                        >
                          <span>زر تفاعلي أساسي</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                        <div
                          className="px-2.5 py-1 rounded-lg text-xs font-bold font-display"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${activeColor.colors.accent} 25%, white)`,
                            color: activeColor.colors.primary,
                          }}
                        >
                          شارة 01
                        </div>
                      </div>

                      <div className="flex items-center gap-3 font-latin text-[11px]">
                        <span className="text-[#8A8590]">الأساسي: <strong className="text-[#1E1A22]">{activeColor.colors.primary}</strong></span>
                        <span className="text-[#8A8590]">التمييزي: <strong className="text-[#1E1A22]">{activeColor.colors.accent}</strong></span>
                        <span className="text-[#8A8590]">الثانوي: <strong className="text-[#1E1A22]">{activeColor.colors.secondary}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-[#6F6978] font-medium ml-1">التصنيف:</span>
                    {[
                      { id: 'all', label: 'جميع اللوحات الـ 50' },
                      { id: 'aubergine-core', label: 'الباذنجاني الملكي (Aubergine Core)' },
                      { id: 'velvet-plum', label: 'البرقوق المخملي (Velvet Plum)' },
                      { id: 'smoked-lavender', label: 'الخزامى الدخاني (Smoked Lavender)' },
                      { id: 'dusk-amethyst', label: 'شفق الأميثيست (Dusk Amethyst)' },
                      { id: 'heritage-modern', label: 'التراث المعاصر (Heritage Modern)' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setColorFilter(btn.id)}
                        className={`px-3 py-1 rounded-xl transition-all cursor-pointer ${
                          colorFilter === btn.id
                            ? 'bg-[#3E1F47] text-white font-bold shadow-xs'
                            : 'apple-glass-pill text-[#6F6978] hover:text-[#1E1A22]'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Colors Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredColors.map((palette) => {
                      const isSelected = activeColor.id === palette.id;
                      return (
                        <div
                          key={palette.id}
                          onClick={() => setColorCollection(palette.id)}
                          className={`rounded-2xl p-4 transition-all cursor-pointer relative flex flex-col justify-between border ${
                            isSelected
                              ? 'apple-glass ring-2 ring-[var(--brand-primary,#3E1F47)] shadow-lg'
                              : 'apple-glass-ultra hover:bg-white/80 hover:shadow-md'
                          }`}
                        >
                          <div>
                            {/* Palette Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-black/5 font-display font-bold text-xs flex items-center justify-center text-[#3E1F47]">
                                  {palette.num}
                                </span>
                                <div>
                                  <h4 className="font-bold text-sm text-[#1E1A22] font-display">
                                    {palette.nameAr}
                                  </h4>
                                  <span className="text-[10px] text-[#8A8590] font-latin">
                                    {palette.nameEn}
                                  </span>
                                </div>
                              </div>
                              {isSelected ? (
                                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                                  <Check className="w-3 h-3" /> مفعّل
                                </span>
                              ) : (
                                <span className="text-[11px] text-[#8A8590] hover:text-[#3E1F47] font-medium">
                                  تجربة
                                </span>
                              )}
                            </div>

                            {/* Color Swatches Strip */}
                            <div className="grid grid-cols-4 gap-1.5 mb-3 p-1.5 rounded-xl bg-black/5">
                              <div
                                className="h-10 rounded-lg flex flex-col justify-end p-1 text-[9px] font-latin font-bold text-white shadow-2xs"
                                style={{ backgroundColor: palette.colors.primary }}
                                title={`الأساسي: ${palette.colors.primary}`}
                              >
                                {palette.colors.primary}
                              </div>
                              <div
                                className="h-10 rounded-lg flex flex-col justify-end p-1 text-[9px] font-latin font-bold text-[#1E1A22] shadow-2xs"
                                style={{ backgroundColor: palette.colors.secondary }}
                                title={`الثانوي: ${palette.colors.secondary}`}
                              >
                                {palette.colors.secondary}
                              </div>
                              <div
                                className="h-10 rounded-lg flex flex-col justify-end p-1 text-[9px] font-latin font-bold text-white shadow-2xs"
                                style={{ backgroundColor: palette.colors.accent }}
                                title={`التمييزي: ${palette.colors.accent}`}
                              >
                                {palette.colors.accent}
                              </div>
                              <div
                                className="h-10 rounded-lg flex flex-col justify-end p-1 text-[9px] font-latin font-bold text-[#1E1A22] shadow-2xs border border-white/60"
                                style={{ backgroundColor: palette.colors.background }}
                                title={`الخلفية: ${palette.colors.background}`}
                              >
                                BG
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-[11px] text-[#6F6978] leading-relaxed mb-3">
                              {palette.descriptionAr}
                            </p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setColorCollection(palette.id);
                            }}
                            className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? 'bg-[#3E1F47] text-white shadow-sm'
                                : 'apple-glass-pill text-[#1E1A22] hover:bg-white'
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>اللوحة المطبقة حالياً</span>
                              </>
                            ) : (
                              <span>تطبيق هذه اللوحة حياً</span>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: 25 LIVE FONTS */}
              {studioTab === 'fonts' && (
                <div className="space-y-6">
                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-[#6F6978] font-medium ml-1">النمط:</span>
                    {[
                      { id: 'all', label: 'جميع الخطوط الـ 25' },
                      { id: 'tech-saas', label: 'تقني وتطبيقات (Tech & SaaS)' },
                      { id: 'geometric-modern', label: 'هندسي معاصر (Geometric)' },
                      { id: 'warm-merchant', label: 'ودود للتجار (Warm Merchant)' },
                      { id: 'kufic-bold', label: 'كوفي صلب (Bold Kufic)' },
                      { id: 'prestige-editorial', label: 'فخامة وتحريري (Prestige & Editorial)' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setFontFilter(btn.id)}
                        className={`px-3 py-1 rounded-xl transition-all cursor-pointer ${
                          fontFilter === btn.id
                            ? 'bg-[#3E1F47] text-white font-bold shadow-xs'
                            : 'apple-glass-pill text-[#6F6978] hover:text-[#1E1A22]'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Fonts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredFonts.map((fItem) => {
                      const isSelected = activeFont.id === fItem.id;
                      return (
                        <div
                          key={fItem.id}
                          onClick={() => setFontCollection(fItem.id)}
                          className={`rounded-2xl p-5 transition-all cursor-pointer flex flex-col justify-between border ${
                            isSelected
                              ? 'apple-glass ring-2 ring-[var(--brand-primary,#3E1F47)] shadow-lg'
                              : 'apple-glass-ultra hover:bg-white/80 hover:shadow-md'
                          }`}
                        >
                          <div>
                            {/* Font Header */}
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/5">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-black/5 font-display font-bold text-xs flex items-center justify-center text-[#3E1F47]">
                                  {fItem.num}
                                </span>
                                <div>
                                  <h4 className="font-bold text-sm text-[#1E1A22]">
                                    {fItem.nameAr}
                                  </h4>
                                  <span className="text-[10px] text-[#8A8590] font-latin">
                                    {fItem.nameEn}
                                  </span>
                                </div>
                              </div>
                              {isSelected && (
                                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                                  <Check className="w-3 h-3" /> مفعّل
                                </span>
                              )}
                            </div>

                            {/* Live Type Preview in Target Font Family */}
                            <div
                              className="p-3.5 rounded-xl bg-white/60 border border-white/80 shadow-inner mb-3 space-y-2"
                              style={{ fontFamily: fItem.fontFamilyDisplay }}
                            >
                              <div className="text-lg font-bold text-[#1E1A22] leading-snug">
                                دنانير · {fItem.samplePhraseAr}
                              </div>
                              <div
                                className="text-xs text-[#6F6978] leading-relaxed"
                                style={{ fontFamily: fItem.fontFamilyArabic }}
                              >
                                تحويل الطلبات من فوضى الرسائل إلى متجر احترافي متكامل مع التوصيل والدفع عند الاستلام.
                              </div>
                              <div className="pt-1 flex items-center justify-between text-xs font-bold border-t border-black/5">
                                <span className="text-[#3E1F47]">سعر المنتج: 35,000 د.ع</span>
                                <span className="font-latin text-[11px] text-[#8A8590]">IQD CURRENCY</span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-[11px] text-[#6F6978] leading-relaxed mb-3">
                              {fItem.descriptionAr}
                            </p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setFontCollection(fItem.id);
                            }}
                            className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? 'bg-[#3E1F47] text-white shadow-sm'
                                : 'apple-glass-pill text-[#1E1A22] hover:bg-white'
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>الخط المطبق حالياً</span>
                              </>
                            ) : (
                              <span>تطبيق هذا الخط حياً</span>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: 25 LOGO VARIATIONS */}
              {studioTab === 'logos' && (
                <div className="space-y-6">
                  {/* Filters & Preview Background Controls */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2 border-b border-white/50">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-[#6F6978] font-medium ml-1">التصنيف:</span>
                      {[
                        { id: 'all', label: 'جميع الشعارات الـ 35' },
                        { id: 'currency-mark', label: 'رموز العملة ($ و D المتعامد)' },
                        { id: 'coins-wealth', label: 'القطع النقدية والدنانير' },
                        { id: 'minimal-dal', label: 'الدال المجرد (Minimal Dal)' },
                        { id: 'portal-arch', label: 'بوابات النمو (Portal & Arch)' },
                        { id: 'orbital-flow', label: 'المدارات والتدفق (Orbital Flow)' },
                        { id: 'architectural', label: 'الهندسة المعمارية (Architectural)' },
                        { id: 'modern-seal', label: 'أختام الثقة (Modern Seal)' },
                      ].map((btn) => (
                        <button
                          key={btn.id}
                          onClick={() => setLogoFilter(btn.id)}
                          className={`px-3 py-1 rounded-xl transition-all cursor-pointer ${
                            logoFilter === btn.id
                              ? 'bg-[#3E1F47] text-white font-bold shadow-xs'
                              : 'apple-glass-pill text-[#6F6978] hover:text-[#1E1A22]'
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>

                    {/* Preview Surface Toggle */}
                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-xl text-xs">
                      <span className="text-[11px] text-[#6F6978] px-2">سطح المعاينة:</span>
                      <button
                        onClick={() => setLogoPreviewBg('glass')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          logoPreviewBg === 'glass' ? 'bg-white shadow-xs font-bold' : 'text-[#6F6978]'
                        }`}
                      >
                        زجاج آبل
                      </button>
                      <button
                        onClick={() => setLogoPreviewBg('light')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          logoPreviewBg === 'light' ? 'bg-white shadow-xs font-bold' : 'text-[#6F6978]'
                        }`}
                      >
                        أبيض
                      </button>
                      <button
                        onClick={() => setLogoPreviewBg('dark')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          logoPreviewBg === 'dark' ? 'bg-[#1E1A22] text-white font-bold' : 'text-[#6F6978]'
                        }`}
                      >
                        داكن
                      </button>
                    </div>
                  </div>

                  {/* Logos Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredLogos.map((lItem) => {
                      const isSelected = activeLogo.id === lItem.id;
                      return (
                        <div
                          key={lItem.id}
                          onClick={() => setLogoId(lItem.id)}
                          className={`rounded-2xl p-5 transition-all cursor-pointer flex flex-col justify-between border ${
                            isSelected
                              ? 'apple-glass ring-2 ring-[var(--brand-primary,#3E1F47)] shadow-lg'
                              : 'apple-glass-ultra hover:bg-white/80 hover:shadow-md'
                          }`}
                        >
                          <div>
                            {/* Logo Top Header */}
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/5">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-black/5 font-display font-bold text-xs flex items-center justify-center text-[#3E1F47]">
                                  {lItem.num}
                                </span>
                                <div>
                                  <h4 className="font-bold text-sm text-[#1E1A22] font-display">
                                    {lItem.nameAr}
                                  </h4>
                                  <span className="text-[10px] text-[#8A8590] font-latin">
                                    {lItem.nameEn}
                                  </span>
                                </div>
                              </div>
                              {isSelected && (
                                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                                  <Check className="w-3 h-3" /> الشعار المعتمد
                                </span>
                              )}
                            </div>

                            {/* Logo Canvas Frame */}
                            <div
                              className={`h-36 rounded-xl flex items-center justify-center mb-4 transition-all ${
                                logoPreviewBg === 'dark'
                                  ? 'bg-[#1E1A22] border border-white/10 shadow-inner'
                                  : logoPreviewBg === 'glass'
                                  ? 'apple-glass shadow-inner'
                                  : 'bg-white border border-[#ECEAEF] shadow-inner'
                              }`}
                            >
                              {lItem.renderSvg({
                                primaryColor: logoPreviewBg === 'dark' ? '#FFFFFF' : activeColor.colors.primary,
                                secondaryColor: logoPreviewBg === 'dark' ? '#C9C5CE' : activeColor.colors.secondary,
                                accentColor: activeColor.colors.accent,
                                size: 84,
                              })}
                            </div>

                            {/* Concept & Geometry Rationale */}
                            <div className="space-y-1.5 text-xs mb-4">
                              <div className="text-[11px] text-[#1E1A22]">
                                <span className="font-bold text-[#3E1F47]">الفكرة: </span>
                                <span className="text-[#6F6978]">{lItem.conceptAr}</span>
                              </div>
                              <div className="text-[11px] text-[#1E1A22]">
                                <span className="font-bold text-[#3E1F47]">الهندسة: </span>
                                <span className="text-[#6F6978]">{lItem.geometryAr}</span>
                              </div>
                            </div>
                          </div>

                          {/* Apply Logo Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setLogoId(lItem.id);
                            }}
                            className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? 'bg-[#3E1F47] text-white shadow-sm'
                                : 'apple-glass-pill text-[#1E1A22] hover:bg-white'
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>الشعار المطبق حالياً في المشروع</span>
                              </>
                            ) : (
                              <span>اعتماد هذا الشعار وتطبيقه حياً</span>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Modal Footer Action Strip */}
            <div className="apple-glass px-6 py-3 border-t border-white/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6F6978]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>نظام التخصيص الحي نشط: جميع التغييرات تحفظ تلقائياً وتطبق عبر تقنية Apple Liquid Glass CSS Variables.</span>
              </div>
              <button
                onClick={() => setIsStudioOpen(false)}
                className="apple-glass-pill px-5 py-2 rounded-xl text-xs font-bold text-[#1E1A22]"
              >
                إغلاق والعودة للدليل
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
