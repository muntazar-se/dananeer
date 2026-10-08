'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  X,
  ShoppingBag,
  Check,
  MapPin,
  Truck,
  ArrowRight,
  Sparkles,
  PhoneCall,
  ExternalLink,
} from 'lucide-react';

interface LiveStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOnboard: () => void;
  initialStoreId?: string;
}

interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  description: string;
}

interface StoreDemo {
  id: string;
  name: string;
  categoryName: string;
  city: string;
  handle: string;
  bio: string;
  products: ProductItem[];
}

const STORES: StoreDemo[] = [
  {
    id: 'perfumes',
    name: 'دار المشرق للعطور',
    categoryName: 'عطور ومستحضرات',
    city: 'أربيل - شارع 100',
    handle: 'al_mishriq_perfumes',
    bio: 'أفخر أنواع العطور والعود الطبيعي المستخلص بعناية مع توصيل لكافة محافظات العراق 🇮🇶',
    products: [
      {
        id: 'p1',
        name: 'عطر عنبر دعود الفاخر - 50 مل',
        price: 48000,
        image: '/images/perfume.jpg',
        category: 'عطور شرقية',
        badge: 'الأكثر طلباً ⭐',
        description: 'تركيبة ملكية من العود الكمبودي ودهن العنبر الفاخر مع ثبات يدوم 48 ساعة.',
      },
      {
        id: 'p2',
        name: 'مسك اللافندر الملكي',
        price: 32000,
        image: '/images/perfume.jpg',
        category: 'زيوت عطرية',
        description: 'عبير منعش من أزهار اللافندر الطبيعية مع لمسة المسك الأبيض النقي.',
      },
    ],
  },
  {
    id: 'fashion',
    name: 'بوتيك نينوى للأزياء',
    categoryName: 'أزياء وفساتين',
    city: 'بغداد - المنصور',
    handle: 'ninawa_couture',
    bio: 'تصاميم نسائية حصرية وفساتين مناسبات تجمع بين الأصالة واللمسة العصرية الأنيقة.',
    products: [
      {
        id: 'f1',
        name: 'فستان ملكي زمردي مطرز بالذهب',
        price: 85000,
        image: '/images/fashion.jpg',
        category: 'فساتين سهرة',
        badge: 'إصدار محدود',
        description: 'قماش مخملي راقٍ مع تطريز يدوي دقيق بالخيوط الذهبية على الياقة والأكمام.',
      },
    ],
  },
  {
    id: 'jewelry',
    name: 'مجوهرات رونق',
    categoryName: 'إكسسوارات ومجوهرات',
    city: 'البصرة - منطقة الجزائر',
    handle: 'rawnaq_jewels',
    bio: 'قطع لؤلؤ وذهب مصاغة بحرفية عالية لتمنح إطلالتك بريقاً فريداً.',
    products: [
      {
        id: 'j1',
        name: 'عقد لؤلؤ طبيعي مع سلاسل ذهبية',
        price: 62000,
        image: '/images/jewelry.jpg',
        category: 'أعقاد وأساور',
        badge: 'الأحدث',
        description: 'حبات لؤلؤ مياه عذبة طبيعية منسقة مع خرز ذهبي مصقول عيار 18.',
      },
    ],
  },
  {
    id: 'handmade',
    name: 'حرفة أورا للشموع والخزف',
    categoryName: 'أعمال يدوية وهدايا',
    city: 'السليمانية - بختياري',
    handle: 'aura_ceramics_iq',
    bio: 'شموع عضوية مصنوعة يدوياً من شمع الصويا في أوانٍ خزفية فخارية فريدة.',
    products: [
      {
        id: 'h1',
        name: 'شمعة خشب الصندل والعنبر - فخار طبيعي',
        price: 24000,
        image: '/images/handmade.jpg',
        category: 'شموع معطرة',
        badge: 'يدوي 100%',
        description: 'شمع صويا عضوي نقي مع غطاء نحاسي عتيق وفتيل خشب يطقطق بهدوء.',
      },
    ],
  },
];

export default function LiveStoreModal({
  isOpen,
  onClose,
  onOpenOnboard,
  initialStoreId = 'perfumes',
}: LiveStoreModalProps) {
  const [selectedStoreId, setSelectedStoreId] = useState(initialStoreId);
  const [cart, setCart] = useState<{ [productId: string]: number }>({ p1: 1 });
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const currentStore = STORES.find((s) => s.id === selectedStoreId) || STORES[0];

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[productId] > 1) {
        copy[productId] -= 1;
      } else {
        delete copy[productId];
      }
      return copy;
    });
  };

  const cartItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const calculateSubtotal = () => {
    let sum = 0;
    for (const [pId, qty] of Object.entries(cart)) {
      const prod = currentStore.products.find((p) => p.id === pId);
      if (prod) sum += prod.price * qty;
    }
    return sum;
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 5000; // بغداد والمحافظات
  const total = subtotal > 0 ? subtotal + shippingFee : 0;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog modal-dialog-large"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 940 }}
      >
        {/* Modal Topbar */}
        <div className="modal-header" style={{ background: '#0B0F19', color: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                background: 'var(--brand-gold-gradient)',
                color: '#FFFFFF',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
              }}
            >
              محاكاة حية
            </span>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
              تجربة متجر دنانير الحقيقي
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                fontSize: '0.82rem',
                color: '#94A3B8',
                direction: 'ltr',
                display: 'none',
              }}
            >
              dananeer.store/{currentStore.handle}
            </div>
            <button
              className="modal-close-btn"
              onClick={onClose}
              style={{ background: '#1E293B', color: '#FFFFFF' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Store Tabs Selector */}
        <div
          style={{
            padding: '14px 24px',
            background: '#F8FAFC',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            overflowX: 'auto',
          }}
        >
          <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            اختر نموذج المتجر:
          </span>
          {STORES.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSelectedStoreId(s.id);
                setCart({ [s.products[0]?.id]: 1 });
                setShowOrderSuccess(false);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.86rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                background: selectedStoreId === s.id ? 'var(--brand-gold-500)' : '#FFFFFF',
                color: selectedStoreId === s.id ? '#FFFFFF' : 'var(--brand-dark)',
                border: selectedStoreId === s.id ? '1px solid var(--brand-gold-600)' : '1px solid var(--border-subtle)',
              }}
            >
              {s.name} ({s.categoryName})
            </button>
          ))}
        </div>

        <div className="modal-body" style={{ padding: 24, background: '#F8FAFC' }}>
          {/* Store Front Header */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              padding: '24px',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'var(--brand-gold-100)',
                    color: 'var(--brand-gold-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    border: '2px solid var(--brand-gold-300)',
                  }}
                >
                  {currentStore.name.slice(0, 1)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: 4 }}>
                    {currentStore.name}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={14} color="var(--brand-gold-600)" />
                      {currentStore.city}
                    </span>
                    <span>•</span>
                    <span style={{ direction: 'ltr', color: 'var(--brand-gold-600)', fontWeight: 600 }}>
                      @{currentStore.handle}
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'var(--brand-emerald-50)',
                  border: '1px solid var(--brand-emerald-100)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  color: 'var(--brand-emerald-700)',
                  fontWeight: 600,
                }}
              >
                <Truck size={16} />
                توصيل سريع لكافة المحافظات • دفع عند الاستلام
              </div>
            </div>

            <p style={{ marginTop: 14, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              {currentStore.bio}
            </p>
          </div>

          {/* Catalog & Checkout Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
            {/* Products Column */}
            <div>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: 14 }}>
                المنتجات المعروضة
              </h5>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {currentStore.products.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      padding: 16,
                      display: 'flex',
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      {product.badge && (
                        <span
                          style={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            background: 'var(--brand-dark)',
                            color: '#FFFFFF',
                            fontSize: '0.68rem',
                            padding: '2px 6px',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 700,
                          }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <h6 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: 4 }}>
                          {product.name}
                        </h6>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 8 }}>
                          {product.description}
                        </p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'flex-end', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: 'var(--font-arabic-heading)', fontWeight: 800, color: 'var(--brand-gold-600)', fontSize: '1.1rem' }}>
                          {product.price.toLocaleString('ar-IQ')} د.ع
                        </span>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => addToCart(product.id)}
                          style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                        >
                          <ShoppingBag size={14} />
                          إضافة للسلة
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Cart & Checkout Simulator */}
            <div>
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  padding: 20,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: 12,
                    borderBottom: '1px solid var(--border-subtle)',
                    marginBottom: 16,
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brand-dark)' }}>
                    سلة الشراء ({cartItemsCount})
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-gold-600)', fontWeight: 600 }}>
                    تجهيز فوري
                  </span>
                </div>

                {showOrderSuccess ? (
                  <div style={{ textAlign: 'center', padding: '24px 10px' }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        background: 'var(--brand-emerald-50)',
                        color: 'var(--brand-emerald-600)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 14px',
                      }}
                    >
                      <Check size={28} />
                    </div>
                    <h5 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: 6 }}>
                      تم تجربة إرسال الطلب بنجاح! 🚀
                    </h5>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 18 }}>
                      هكذا يصلك الطلب في لوحة تحكم دنانير مع اسم الزبون، هاتفه، وعنوانه الدقيق بدون أي رسائل DM متعبة.
                    </p>

                    <button
                      className="btn btn-primary"
                      style={{ width: '100%', marginBottom: 10 }}
                      onClick={() => {
                        onClose();
                        onOpenOnboard();
                      }}
                    >
                      <span>ابدأ متجرك أنت الآن</span>
                      <Sparkles size={16} />
                    </button>

                    <button
                      className="btn btn-ghost"
                      style={{ width: '100%', fontSize: '0.85rem' }}
                      onClick={() => setShowOrderSuccess(false)}
                    >
                      تجربة متجر آخر
                    </button>
                  </div>
                ) : (
                  <div>
                    {cartItemsCount === 0 ? (
                      <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--text-muted)' }}>
                        السلة فارغة. اختر منتجاً لتجربة الطلب.
                      </div>
                    ) : (
                      <>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                          {Object.entries(cart).map(([pId, qty]) => {
                            const p = currentStore.products.find((i) => i.id === pId);
                            if (!p) return null;
                            return (
                              <div
                                key={pId}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  fontSize: '0.88rem',
                                  padding: '8px 10px',
                                  background: 'var(--bg-subtle)',
                                  borderRadius: 'var(--radius-sm)',
                                }}
                              >
                                <div>
                                  <div style={{ fontWeight: 600, color: 'var(--brand-dark)' }}>{p.name}</div>
                                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                                    {(p.price * qty).toLocaleString('ar-IQ')} د.ع
                                  </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                  <button
                                    onClick={() => removeFromCart(pId)}
                                    style={{ width: 24, height: 24, borderRadius: 4, background: '#E2E8F0', fontWeight: 700 }}
                                  >
                                    -
                                  </button>
                                  <span style={{ fontWeight: 700 }}>{qty}</span>
                                  <button
                                    onClick={() => addToCart(pId)}
                                    style={{ width: 24, height: 24, borderRadius: 4, background: '#E2E8F0', fontWeight: 700 }}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Order Summary */}
                        <div
                          style={{
                            borderTop: '1px solid var(--border-subtle)',
                            paddingTop: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                            fontSize: '0.88rem',
                            marginBottom: 18,
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                            <span>المجموع الفرعي:</span>
                            <span>{subtotal.toLocaleString('ar-IQ')} د.ع</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                            <span>التوصيل:</span>
                            <span>{shippingFee.toLocaleString('ar-IQ')} د.ع</span>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontWeight: 800,
                              color: 'var(--brand-dark)',
                              fontSize: '1.05rem',
                              borderTop: '1px dashed var(--border-subtle)',
                              paddingTop: 8,
                            }}
                          >
                            <span>الإجمالي:</span>
                            <span style={{ color: 'var(--brand-gold-600)' }}>
                              {total.toLocaleString('ar-IQ')} د.ع
                            </span>
                          </div>
                        </div>

                        <div
                          style={{
                            background: '#FAF7EE',
                            border: '1px solid var(--brand-gold-200)',
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '0.82rem',
                            color: 'var(--brand-gold-700)',
                            marginBottom: 16,
                          }}
                        >
                          💳 الدفع: <strong>الدفع نقداً عند استلام الشحنة</strong>
                        </div>

                        <button
                          className="btn btn-primary"
                          style={{ width: '100%', padding: '14px' }}
                          onClick={() => setShowOrderSuccess(true)}
                        >
                          تجربة إرسال الطلب (محاكاة)
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div
          style={{
            padding: '16px 24px',
            background: '#FFFFFF',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            عجبك شكل المتجر وسهولة الطلب؟ جهز متجرك الخاص الآن.
          </div>
          <button
            className="btn btn-dark"
            onClick={() => {
              onClose();
              onOpenOnboard();
            }}
          >
            <span>ابدأ متجرك (350 ألف د.ع)</span>
            <Sparkles size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
