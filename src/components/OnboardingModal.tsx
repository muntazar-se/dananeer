'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Store, ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import DananirBrand from './DananirBrand';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IRAQI_GOVERNORATES = [
  'بغداد',
  'البصرة',
  'أربيل',
  'النجف الأشرف',
  'كربلاء المقدسة',
  'نينوى (الموصل)',
  'السليمانية',
  'بابل',
  'كركوك',
  'ديالى',
  'الأنبار',
  'واسط',
  'ميسان',
  'ذي قار',
  'المثنى',
  'القادسية (الديوانية)',
  'صلاح الدين',
  'دهوك',
];

const CATEGORIES = [
  { id: 'fashion', label: 'أزياء وملابس نسائية/رجالية' },
  { id: 'perfumes', label: 'عطور ومستحضرات بخور' },
  { id: 'accessories', label: 'إكسسوارات وساعات وهدايا' },
  { id: 'beauty', label: 'عناية ومستحضرات تجميل' },
  { id: 'handmade', label: 'منتجات يدوية وحرفية' },
  { id: 'shoes_bags', label: 'أحذية وحقائب' },
  { id: 'other', label: 'نشاط تجاري آخر' },
];

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [formData, setFormData] = useState({
    store_name: '',
    instagram_handle: '',
    merchant_name: '',
    phone_number: '',
    governorate: 'بغداد',
    category: 'fashion',
    notes: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successData, setSuccessData] = useState<{
    referenceNumber: string;
    message: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'حدث خطأ أثناء إرسال البيانات');
      }

      setSuccessData({
        referenceNumber: data.referenceNumber,
        message: data.message,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('تعذر الاتصال بالخادم، يرجى المحاولة لاحقاً');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setFormData({
      store_name: '',
      instagram_handle: '',
      merchant_name: '',
      phone_number: '',
      governorate: 'بغداد',
      category: 'fashion',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex items-center gap-2">
            <DananirBrand size="sm" showSubtitle={false} />
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="إغلاق النافذة"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {successData ? (
            <div className="text-center py-6">
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'var(--brand-emerald-50)',
                  color: 'var(--brand-emerald-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <CheckCircle size={36} />
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: 10 }}>
                أهلاً بك في دنانير! 🎉
              </h3>

              <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
                {successData.message}
              </p>

              <div
                style={{
                  background: 'var(--bg-subtle)',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 24,
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 4 }}>
                  رقم مرجع الطلب:
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-accent-600)', letterSpacing: '0.05em' }}>
                  {successData.referenceNumber}
                </div>
              </div>

              <div
                style={{
                  textAlign: 'right',
                  background: 'var(--brand-accent-50)',
                  border: '1px solid var(--brand-accent-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: 16,
                  fontSize: '0.9rem',
                  color: 'var(--brand-accent-700)',
                  marginBottom: 24,
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Sparkles size={16} />
                  الخطوة القادمة:
                </div>
                سيتواصل معك مستشار دنانير عبر واتساب خلال ساعات قليلة لتجهيز متجرك ونقل منتجاتك من إنستغرام.
              </div>

              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleReset}>
                تم، شكراً لكم
              </button>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: 24 }}>
                <span className="badge-pill badge-gold" style={{ marginBottom: 10 }}>
                  <Store size={14} />
                  بدء المتجر
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: 6 }}>
                  حوّل حسابك إلى متجر إلكتروني متكامل
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  املأ معلومات مشروعك وسنبدأ معك في إعداد متجرك الخاص باشتراك سنوي واضح (350,000 د.ع).
                </p>
              </div>

              {errorMsg && (
                <div
                  style={{
                    background: '#FEE2E2',
                    border: '1px solid #FCA5A5',
                    color: '#991B1B',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: 18,
                    fontSize: '0.9rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="store_name">
                    اسم المتجر أو العلامة التجارية *
                  </label>
                  <input
                    id="store_name"
                    type="text"
                    required
                    placeholder="مثال: بوتيك نينوى، دار الرافدين"
                    className="form-input"
                    value={formData.store_name}
                    onChange={(e) => setFormData({ ...formData, store_name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="instagram_handle">
                    حساب Instagram الحالي *
                  </label>
                  <input
                    id="instagram_handle"
                    type="text"
                    required
                    placeholder="مثال: ninawa_boutique@"
                    className="form-input"
                    style={{ direction: 'ltr', textAlign: 'right' }}
                    value={formData.instagram_handle}
                    onChange={(e) => setFormData({ ...formData, instagram_handle: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="merchant_name">
                      اسم التاجر / التاجرة *
                    </label>
                    <input
                      id="merchant_name"
                      type="text"
                      required
                      placeholder="اسمك الكريم"
                      className="form-input"
                      value={formData.merchant_name}
                      onChange={(e) => setFormData({ ...formData, merchant_name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone_number">
                      رقم الهاتف (واتساب) *
                    </label>
                    <input
                      id="phone_number"
                      type="tel"
                      required
                      placeholder="0770xxxxxxx"
                      className="form-input"
                      style={{ direction: 'ltr', textAlign: 'right' }}
                      value={formData.phone_number}
                      onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="governorate">
                      المحافظة *
                    </label>
                    <select
                      id="governorate"
                      className="form-select"
                      value={formData.governorate}
                      onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                    >
                      {IRAQI_GOVERNORATES.map((gov) => (
                        <option key={gov} value={gov}>
                          {gov}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="category">
                      نوع النشاط التجاري *
                    </label>
                    <select
                      id="category"
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">
                    ملاحظات إضافية أو رابط خاص تفضله (اختياري)
                  </label>
                  <input
                    id="notes"
                    type="text"
                    placeholder="مثال: أريد الرابط dananeer.store/ninawa"
                    className="form-input"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <div
                  style={{
                    background: 'var(--bg-subtle)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                    marginBottom: 20,
                  }}
                >
                  ✓ اشتراك سنوي واضح: 350,000 د.ع للسنة الأولى (90,000 د.ع للتجديد)
                  <br />
                  ✓ بدون أي نسبة أو عمولة على مبيعاتك (0%)
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '15px' }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      جاري إرسال الطلب...
                    </>
                  ) : (
                    <>
                      <span>تأكيد وبدء المتجر</span>
                      <ArrowLeft size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
