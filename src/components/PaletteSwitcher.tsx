'use client';

import React, { useState, useEffect } from 'react';
import {
  Palette,
  X,
  Check,
  Search,
  Sparkles,
  RotateCcw,
  Copy,
  ChevronRight,
  Filter,
} from 'lucide-react';
import {
  DANANIR_PALETTES,
  ColorPalette,
  CATEGORIES_MAP,
  applyDananirPalette,
} from '@/data/colorPalettes';

export default function PaletteSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePaletteId, setActivePaletteId] = useState('velvet-burgundy');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Initialize from localStorage or default on client load
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dananir_selected_palette');
      const targetId = saved || 'velvet-burgundy';
      const found = DANANIR_PALETTES.find((p) => p.id === targetId);
      if (found) {
        setActivePaletteId(found.id);
        applyDananirPalette(found);
      }
    } catch (e) {
      // Fallback
      const defaultPal = DANANIR_PALETTES.find((p) => p.id === 'velvet-burgundy')!;
      applyDananirPalette(defaultPal);
    }

    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-dananir-palettes', handleOpen);
    return () => window.removeEventListener('open-dananir-palettes', handleOpen);
  }, []);

  const currentPalette =
    DANANIR_PALETTES.find((p) => p.id === activePaletteId) || DANANIR_PALETTES[2];

  const handleSelectPalette = (palette: ColorPalette) => {
    setActivePaletteId(palette.id);
    applyDananirPalette(palette);
  };

  const handleCopyCodes = (palette: ColorPalette, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `/* ${palette.nameAr} | ${palette.nameEn} */\nالأساسي: ${palette.primary}\nالتمييزي: ${palette.accent}\nالفضي: ${palette.secondary}\nالخلفية: ${palette.background}`;
    navigator.clipboard.writeText(text);
    setCopiedId(palette.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPalettes = DANANIR_PALETTES.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      p.nameAr.toLowerCase().includes(query) ||
      p.nameEn.toLowerCase().includes(query) ||
      p.primary.toLowerCase().includes(query) ||
      p.accent.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Floating Launcher Button */}
      <div
        style={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: 'var(--brand-primary)',
            color: '#FFFFFF',
            padding: '12px 18px',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
            border: '2px solid var(--brand-accent-500)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            fontFamily: 'var(--font-arabic-heading)',
            fontSize: '0.92rem',
            fontWeight: 700,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.35)';
          }}
          aria-label="فتح قائمة مجموعات الألوان الـ 50"
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'var(--brand-accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
            }}
          >
            <Palette size={16} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
            <span>مجموعات الألوان (50)</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--brand-silver-300)', fontWeight: 500 }}>
              {currentPalette.nameAr.split('|')[0]}
            </span>
          </div>

          {/* Color Preview Dots */}
          <div style={{ display: 'flex', gap: 4, marginRight: 6 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: currentPalette.primary,
                border: '1.5px solid #FFFFFF',
              }}
            />
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: currentPalette.accent,
                border: '1.5px solid #FFFFFF',
              }}
            />
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: currentPalette.secondary,
                border: '1.5px solid #FFFFFF',
              }}
            />
          </div>
        </button>
      </div>

      {/* Main Drawer Modal */}
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 10000, padding: 0 }}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 720,
              width: '100%',
              height: '92vh',
              maxHeight: '92vh',
              margin: 'auto',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              background: '#FFFFFF',
            }}
          >
            {/* Header */}
            <div
              style={{
                background: 'var(--brand-primary)',
                color: '#FFFFFF',
                padding: '20px 24px',
                borderBottom: '1px solid var(--brand-dark-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'var(--brand-accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <Palette size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                    مجموعات ألوان دنانير الرسمية (50 مجموعة)
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--brand-silver-300)' }}>
                    اختر أي مجموعة ليتم تطبيقها فوراً وبشكل حي على كامل الموقع
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button
                  onClick={() => {
                    const def = DANANIR_PALETTES.find((p) => p.id === 'velvet-burgundy')!;
                    handleSelectPalette(def);
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                  title="استعادة المجموعة 03 الافتراضية"
                >
                  <RotateCcw size={13} />
                  <span>الافتراضي</span>
                </button>

                <button
                  className="modal-close-btn"
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}
                  aria-label="إغلاق"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Current Active Palette Ribbon */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                padding: '12px 24px',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                  المجموعة النشطة الآن:
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    background: 'var(--brand-primary)',
                    color: '#FFFFFF',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {currentPalette.nameAr}
                </span>
              </div>

              {/* Swatch Strip */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem' }}>
                  <span style={{ width: 14, height: 14, borderRadius: 4, background: currentPalette.primary, display: 'inline-block', border: '1px solid rgba(0,0,0,0.1)' }} />
                  <code>{currentPalette.primary}</code>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem' }}>
                  <span style={{ width: 14, height: 14, borderRadius: 4, background: currentPalette.accent, display: 'inline-block', border: '1px solid rgba(0,0,0,0.1)' }} />
                  <code>{currentPalette.accent}</code>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem' }}>
                  <span style={{ width: 14, height: 14, borderRadius: 4, background: currentPalette.secondary, display: 'inline-block', border: '1px solid rgba(0,0,0,0.1)' }} />
                  <code>{currentPalette.secondary}</code>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem' }}>
                  <span style={{ width: 14, height: 14, borderRadius: 4, background: currentPalette.background, display: 'inline-block', border: '1px solid rgba(0,0,0,0.1)' }} />
                  <code>{currentPalette.background}</code>
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div style={{ padding: '14px 24px', borderBottom: '1px solid var(--border-subtle)', background: '#FFFFFF' }}>
              {/* Search input */}
              <div style={{ position: 'relative', marginBottom: 12 }}>
                <Search
                  size={18}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: 14,
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                  }}
                />
                <input
                  type="text"
                  placeholder="ابحث برقم المجموعة، الاسم العربي أو الإنجليزي، أو كود اللون (مثل: #43172E)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 42px 10px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '0.9rem',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-primary)',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 12,
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                    }}
                  >
                    مسح
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  overflowX: 'auto',
                  paddingBottom: 4,
                }}
              >
                {Object.entries(CATEGORIES_MAP).map(([catKey, catLabel]) => (
                  <button
                    key={catKey}
                    onClick={() => setSelectedCategory(catKey)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                      background: selectedCategory === catKey ? 'var(--brand-primary)' : 'var(--bg-subtle)',
                      color: selectedCategory === catKey ? '#FFFFFF' : 'var(--text-secondary)',
                      border: selectedCategory === catKey ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    {catLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Palettes List Body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '20px 24px',
                background: 'var(--bg-body)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 16,
                alignContent: 'start',
              }}
            >
              {filteredPalettes.length === 0 ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
                  لم يتم العثور على أي مجموعة تطابق بحثك.
                </div>
              ) : (
                filteredPalettes.map((pal) => {
                  const isSelected = pal.id === activePaletteId;
                  return (
                    <div
                      key={pal.id}
                      onClick={() => handleSelectPalette(pal)}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: 'var(--radius-lg)',
                        border: isSelected
                          ? '2px solid var(--brand-accent-500)'
                          : '1px solid var(--border-card)',
                        boxShadow: isSelected
                          ? '0 6px 20px rgba(0, 0, 0, 0.12)'
                          : 'var(--shadow-xs)',
                        padding: 18,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        transform: isSelected ? 'scale(1.01)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--brand-silver-400)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--border-card)';
                          e.currentTarget.style.transform = 'none';
                        }
                      }}
                    >
                      {/* Top Row: Title & Active Badge */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--brand-primary)', marginBottom: 2 }}>
                            {pal.nameAr}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', direction: 'ltr', textAlign: 'right' }}>
                            {pal.nameEn}
                          </div>
                        </div>

                        {isSelected ? (
                          <span
                            style={{
                              background: 'var(--brand-accent-500)',
                              color: '#FFFFFF',
                              padding: '3px 8px',
                              borderRadius: 'var(--radius-full)',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4,
                              flexShrink: 0,
                            }}
                          >
                            <Check size={12} />
                            نشط
                          </span>
                        ) : (
                          <button
                            onClick={(e) => handleCopyCodes(pal, e)}
                            style={{
                              background: 'var(--bg-subtle)',
                              color: 'var(--text-muted)',
                              border: '1px solid var(--border-subtle)',
                              padding: '4px 8px',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '0.72rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4,
                              cursor: 'pointer',
                              flexShrink: 0,
                            }}
                            title="نسخ أكواد الألوان"
                          >
                            <Copy size={11} />
                            <span>{copiedId === pal.id ? 'تم النسخ!' : 'نسخ'}</span>
                          </button>
                        )}
                      </div>

                      {/* Swatches Visual Bars */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: 6,
                          marginBottom: 14,
                        }}
                      >
                        {/* Primary */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div
                            style={{
                              height: 38,
                              borderRadius: 6,
                              background: pal.primary,
                              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                            }}
                          />
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            الأساسي
                          </div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', textAlign: 'center', fontWeight: 600 }}>
                            {pal.primary}
                          </div>
                        </div>

                        {/* Accent */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div
                            style={{
                              height: 38,
                              borderRadius: 6,
                              background: pal.accent,
                              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                            }}
                          />
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            التمييزي
                          </div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', textAlign: 'center', fontWeight: 600 }}>
                            {pal.accent}
                          </div>
                        </div>

                        {/* Secondary */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div
                            style={{
                              height: 38,
                              borderRadius: 6,
                              background: pal.secondary,
                              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                            }}
                          />
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            الفضي
                          </div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', textAlign: 'center', fontWeight: 600 }}>
                            {pal.secondary}
                          </div>
                        </div>

                        {/* Background */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div
                            style={{
                              height: 38,
                              borderRadius: 6,
                              background: pal.background,
                              border: '1px solid #D5CBD3',
                            }}
                          />
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            الخلفية
                          </div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', textAlign: 'center', fontWeight: 600 }}>
                            {pal.background}
                          </div>
                        </div>
                      </div>

                      {/* Action Bar */}
                      <button
                        onClick={() => handleSelectPalette(pal)}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                          transition: 'all 0.15s',
                          background: isSelected ? 'var(--brand-primary)' : 'var(--bg-subtle)',
                          color: isSelected ? '#FFFFFF' : 'var(--brand-primary)',
                          border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                        }}
                      >
                        {isSelected ? (
                          <>
                            <Check size={14} />
                            <span>مطبّق حالياً على الموقع</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={14} color="var(--brand-accent-500)" />
                            <span>معاينة وتطبيق على الموقع</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: '14px 24px',
                background: '#FFFFFF',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.86rem',
                color: 'var(--text-muted)',
              }}
            >
              <div>
                يتم حفظ اختيارك تلقائياً في المتصفح لرؤيته أثناء تصفح كامل أقسام دنانير.
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-sm btn-dark"
                style={{ padding: '8px 18px' }}
              >
                إغلاق القائمة
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
