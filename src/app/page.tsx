'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  Sparkles,
  ShoppingBag,
  Package,
  Layers,
  Users,
  BarChart3,
  Smartphone,
  Link as LinkIcon,
  Settings,
  Check,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp,
  MapPin,
  ExternalLink,
  Store,
  DollarSign,
  AlertCircle,
  Send,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import DananirBrand from '@/components/DananirBrand';
import OnboardingModal from '@/components/OnboardingModal';
import LiveStoreModal from '@/components/LiveStoreModal';

export default function LandingPage() {
  const [isOnboardOpen, setIsOnboardOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoStoreId, setDemoStoreId] = useState('perfumes');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeDashTab, setActiveDashTab] = useState<'orders' | 'products' | 'analytics'>('orders');

  const openDemoWithStore = (storeId: string) => {
    setDemoStoreId(storeId);
    setIsDemoOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: 'هل أحتاج إلى خبرة تقنية أو معرفة بالبرمجة؟',
      a: 'لا، إطلاقاً. تم تصميم دنانير خصيصاً ليكون بسيطاً وسلساً لأي تاجر. نحن نجهز لك المتجر بالكامل، ولك لوحة تحكم باللغة العربية تمكنك من إضافة وتعديل المنتجات بضغطة زر دون أي كود برمجي.',
    },
    {
      q: 'هل أحتاج إلى حساب Instagram مسبق؟',
      a: 'نعم، دنانير مصمم خصيصاً لخدمة التجار الذين يملكون منتجات وقاعدة متابعين أو يبدأون البيع على إنستغرام وواتساب، ليحول مسار البيع من الرسائل اليدوية إلى متجر منظم.',
    },
    {
      q: 'كيف أستقبل الطلبات؟',
      a: 'عندما يطلب العميل عبر رابط متجرك، يصله تأكيد فوري، ويظهر لك الطلب مباشرة في لوحة تحكم دنانير مع الاسم ورقم الهاتف والمحافظة والعنوان وتفاصيل المنتجات بدقة.',
    },
    {
      q: 'هل المتجر يعمل على الهاتف؟',
      a: 'نعم، 100%. تم تصميم وتطوير دنانير بمعايير Mobile-First الفائقة، لأن أكثر من 90% من زبائن إنستغرام في العراق يتسوقون من هواتفهم الذكية.',
    },
    {
      q: 'ماذا يشمل الاشتراك السنوي (350,000 د.ع)؟',
      a: 'يشمل إنشاء وتجهيز متجرك بالكامل، استضافة سريعة وآمنة لمدة سنة، لوحة تحكم شاملة لإدارة المنتجات والطلبات والمخزون، رابط متجر مخصص، ودعم فني وتوجيه مستمر.',
    },
    {
      q: 'هل يوجد اشتراك شهري؟',
      a: 'حالياً نوفر اشتراكاً سنوياً فقط لضمان استقرار علامتك التجارية وتقديم دعم وتجهيز متكامل لمتجرك طوال العام بأفضل تكلفة ممكنة.',
    },
    {
      q: 'ماذا يحدث عند انتهاء الاشتراك؟',
      a: 'يمكنك تجديد متجرك واستضافته ودعمه الفني باشتراك تجديد رمزي قدره 90,000 د.ع فقط سنوياً للاستمرار دون انقطاع.',
    },
    {
      q: 'هل أستطيع استخدام دومين خاص؟',
      a: 'نوفر لك رابطاً سريعاً ومخصصاً بصيغة dananeer.store/yourname، وفي حال رغبت بربط نطاق مخصص (.com أو غيره) يمكن لفريق الدعم إعداده لك بسهولة.',
    },
    {
      q: 'هل يوجد دعم فني ومساعدة في الإعداد؟',
      a: 'نعم، فريق دعم دنانير المحلي متواجد لمساعدتك عبر واتساب في تجهيز متجرك وإدخال المنتجات وحل أي استفسار على مدار أيام الأسبوع.',
    },
    {
      q: 'كيف أبدأ؟',
      a: 'اضغط على زر «ابدأ متجرك»، املأ معلومات مشروعك وحساب إنستغرام، وسيتواصل معك فريقنا خلال ساعات قليلة لبدء إعداد متجرك وتسليمه لك.',
    },
  ];

  return (
    <div className="dananir-landing-page">
      {/* SECTION 01 — NAVIGATION */}
      <Navbar
        onOpenOnboard={() => setIsOnboardOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <main>
        {/* SECTION 02 — HERO */}
        <section className="hero-section">
          <div className="hero-glow-element" />

          <div className="container">
            <div className="hero-content">
              {/* Secondary Brand Message Badge */}
              <div className="hero-badge-wrap">
                <span className="badge-pill badge-gold">
                  <Sparkles size={14} />
                  <span>«من دينار… إلى دنانير!»</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-title">
                من حساب إنستا…
                <br />
                إلى <span className="hero-title-highlight">متجر إلكتروني كامل</span>
              </h1>

              {/* Supporting Copy */}
              <p className="hero-subtitle">
                عندك منتجات وتبيع على Instagram؟ دنانير يحول تجارتك إلى متجر إلكتروني احترافي، يساعدك
                على عرض منتجاتك واستقبال طلباتك وإدارة تجارتك من مكان واحد.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setIsOnboardOpen(true)}
                >
                  <span>ابدأ متجرك</span>
                  <ArrowLeft size={20} />
                </button>

                <button
                  className="btn btn-outline btn-lg"
                  onClick={() => setIsDemoOpen(true)}
                >
                  <Store size={18} />
                  <span>جرّب متجرًا حقيقيًا</span>
                </button>
              </div>

              {/* Honest Micro Trust Markers */}
              <div className="hero-trust-badges">
                <div className="hero-trust-item">
                  <Check size={16} color="var(--brand-accent-600)" />
                  <span>بدون خبرة برمجية</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={16} color="var(--brand-accent-600)" />
                  <span>اشتراك سنوي واضح</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={16} color="var(--brand-accent-600)" />
                  <span>0% عمولة على المبيعات</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={16} color="var(--brand-accent-600)" />
                  <span>دعم محلي في العراق</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Showcase */}
            <div className="hero-visual-wrapper">
              <div className="hero-browser-frame">
                {/* Browser Topbar */}
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span className="browser-dot red" />
                    <span className="browser-dot yellow" />
                    <span className="browser-dot green" />
                  </div>
                  <div className="browser-address">
                    <ShieldCheck size={13} color="#10B981" />
                    https://dananeer.store/al_mishriq
                  </div>
                </div>

                {/* Browser Canvas */}
                <div className="browser-content">
                  <div className="hero-preview-grid">
                    {/* Live Storefront Mock */}
                    <div className="hero-store-preview">
                      <div className="hero-store-header">
                        <div className="store-identity-pill">
                          <div className="store-avatar">م</div>
                          <div>
                            <div className="store-title">دار المشرق للعطور</div>
                            <div className="store-handle">@al_mishriq_perfumes</div>
                          </div>
                        </div>

                        <div className="badge-pill badge-emerald" style={{ fontSize: '0.8rem' }}>
                          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981' }} />
                          المتجر مفتوح للطلبات
                        </div>
                      </div>

                      {/* Products Grid */}
                      <div className="hero-products-showcase">
                        <div className="hero-product-card">
                          <div style={{ position: 'relative', height: 160, width: '100%' }}>
                            <Image
                              src="/images/perfume.jpg"
                              alt="عطر عنبر دعود"
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                            <span
                              style={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                background: 'var(--brand-dark)',
                                color: '#FFF',
                                fontSize: '0.7rem',
                                padding: '2px 8px',
                                borderRadius: 12,
                                fontWeight: 700,
                              }}
                            >
                              الأكثر طلباً ⭐
                            </span>
                          </div>
                          <div className="hero-product-info">
                            <div className="hero-product-name">عطر عنبر د'عود - 50 مل</div>
                            <div className="hero-product-price">
                              <span>48,000 د.ع</span>
                              <span style={{ fontSize: '0.78rem', color: 'var(--brand-emerald-600)' }}>
                                متوفر في المخزون
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="hero-product-card">
                          <div style={{ position: 'relative', height: 160, width: '100%' }}>
                            <Image
                              src="/images/fashion.jpg"
                              alt="فستان ملكي زمردي"
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                            <span
                              style={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                background: 'var(--brand-accent-500)',
                                color: '#FFF',
                                fontSize: '0.7rem',
                                padding: '2px 8px',
                                borderRadius: 12,
                                fontWeight: 700,
                              }}
                            >
                              تشكيلة الموسم
                            </span>
                          </div>
                          <div className="hero-product-info">
                            <div className="hero-product-name">فستان سهرة زمردي مطرز</div>
                            <div className="hero-product-price">
                              <span>85,000 د.ع</span>
                              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                3 مقاسات
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dananir Dashboard Sneak Peek Sidebar */}
                    <div className="hero-sidebar-preview">
                      <div className="dashboard-widget-card">
                        <div className="widget-title-row">
                          <span className="widget-label">مبيعات اليوم (دنانير)</span>
                          <span className="widget-growth">
                            <TrendingUp size={14} />
                            +28%
                          </span>
                        </div>
                        <div className="widget-value">1,450,000 د.ع</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>
                          34 طلب مكتمل • بغداد والمحافظات
                        </div>
                      </div>

                      <div className="dashboard-widget-card">
                        <div className="widget-title-row">
                          <span className="widget-label">الطلبات الواردة</span>
                          <span className="badge-pill badge-gold" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                            مباشر
                          </span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                            <span style={{ fontWeight: 600 }}>مريم ك. (بغداد/المنصور)</span>
                            <span style={{ color: 'var(--brand-gold-600)', fontWeight: 700 }}>48,000 د.ع</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                            <span style={{ fontWeight: 600 }}>حيدر ع. (البصرة/الجزائر)</span>
                            <span style={{ color: 'var(--brand-gold-600)', fontWeight: 700 }}>62,000 د.ع</span>
                          </div>
                        </div>
                      </div>

                      {/* Toast Notification Simulation */}
                      <div className="floating-toast-alert">
                        <div className="toast-icon-wrap">
                          <Zap size={18} />
                        </div>
                        <div>
                          <div className="toast-text-title">طلب جديد عبر رابط الـBio ⚡</div>
                          <div className="toast-text-sub">تم تحويل زبون إنستغرام لطلب منظم</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 — TRUST / QUICK VALUE STRIP */}
        <section className="trust-strip-section" aria-label="مزايا الثقة السريعة">
          <div className="container">
            <div className="trust-strip-grid">
              <div className="trust-strip-item">
                <div className="trust-item-icon">
                  <Store size={24} />
                </div>
                <div>
                  <div className="trust-item-title">متجر إلكتروني احترافي</div>
                  <div className="trust-item-desc">واجهة سريعة وخاصة بهويتك</div>
                </div>
              </div>

              <div className="trust-strip-item">
                <div className="trust-item-icon">
                  <Layers size={24} />
                </div>
                <div>
                  <div className="trust-item-title">لوحة تحكم سهلة</div>
                  <div className="trust-item-desc">تحكم كامل بالمنتجات والمخزون</div>
                </div>
              </div>

              <div className="trust-strip-item">
                <div className="trust-item-icon">
                  <Package size={24} />
                </div>
                <div>
                  <div className="trust-item-title">إدارة الطلبات</div>
                  <div className="trust-item-desc">فرز فوري وتتبع حالات التوصيل</div>
                </div>
              </div>

              <div className="trust-strip-item">
                <div className="trust-item-icon">
                  <DollarSign size={24} />
                </div>
                <div>
                  <div className="trust-item-title">اشتراك سنوي واضح</div>
                  <div className="trust-item-desc">تكلفة ثابتة و0% عمولة على المبيعات</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — THE PROBLEM */}
        <section className="section-padding problem-section" id="problem">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-dark">
                  <AlertCircle size={14} color="#DC2626" />
                  واقع البيع الحالي
                </span>
              </div>
              <h2 className="section-title">
                تبيع على Instagram؟ أكيد تعرف هالمشاكل.
              </h2>
              <p className="section-desc">
                إنستغرام ممتاز لاكتشاف المنتجات والتسويق، لكن إدارة الطلبات عبر الرسائل تستنزف وقتك وتسبب ضياع الزبائن.
              </p>
            </div>

            <div className="problem-grid">
              {/* Problem 01 */}
              <div className="problem-card">
                <div className="problem-card-top">
                  <div className="problem-badge-icon">
                    <MessageCircle size={22} />
                  </div>
                  <h3 className="problem-card-title">الطلبات بالـDM</h3>
                </div>
                <p className="problem-card-desc">
                  رسائل كثيرة متراكمة وصعوبة في متابعة الطلبات، وتداخل المحادثات اليومية مع طلبات الشراء الحقيقية.
                </p>

                <div className="problem-chat-preview">
                  <div className="chat-bubble chat-bubble-incoming">
                    مرحبا عيني، أريد أطلب هذا البوست دزيته قبل يومين، شكد سعره؟
                  </div>
                  <div className="chat-bubble chat-bubble-outgoing">
                    أهلاً بك، أرسلي المقاس والمحافظة بالخاص حتى أثبت الحجز...
                  </div>
                  <div className="chat-bubble chat-bubble-incoming">
                    أرسلت بس ماكو رد صار يومين؟ وين واصل طلبي؟ 😓
                  </div>
                </div>
              </div>

              {/* Problem 02 */}
              <div className="problem-card">
                <div className="problem-card-top">
                  <div className="problem-badge-icon">
                    <HelpCircle size={22} />
                  </div>
                  <h3 className="problem-card-title">الأسئلة المتكررة</h3>
                </div>
                <p className="problem-card-desc">
                  إهدار ساعات يومياً في تكرار نفس الإجابات: السعر؟ متوفر؟ شنو المقاسات؟ شنو الألوان المتبقية؟
                </p>

                <div className="problem-chat-preview">
                  <div className="chat-bubble chat-bubble-incoming">
                    السعر بلا زحمة؟
                  </div>
                  <div className="chat-bubble chat-bubble-outgoing">
                    تم الرد بالخاص عزيزتي ✨
                  </div>
                  <div className="chat-bubble chat-bubble-incoming">
                    متوفر لون بيجي قياس M؟ أو خلصان؟
                  </div>
                </div>
              </div>

              {/* Problem 03 */}
              <div className="problem-card">
                <div className="problem-card-top">
                  <div className="problem-badge-icon">
                    <Layers size={22} />
                  </div>
                  <h3 className="problem-card-title">المنتجات المبعثرة</h3>
                </div>
                <p className="problem-card-desc">
                  العميل يحتاج أن يبحث وينزل بين عشرات المنشورات والريلز القديمة حتى يجد المنتج الذي يريده، وغالباً ما يستسلم ويغادر الحساب.
                </p>

                <div className="problem-chat-preview" style={{ padding: '12px 16px' }}>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    🔍 زبونك يسأل: "وين الستوري اللي نشرتوها البارحة بيها العطر؟ ما جاي ألكاها بالهايلايت!"
                  </div>
                </div>
              </div>

              {/* Problem 04 */}
              <div className="problem-card">
                <div className="problem-card-top">
                  <div className="problem-badge-icon">
                    <Clock size={22} />
                  </div>
                  <h3 className="problem-card-title">تجربة شراء محدودة</h3>
                </div>
                <p className="problem-card-desc">
                  إنستغرام ليس متجراً متكاملاً؛ تسجيل الطلبات يدوياً في الدفاتر يسبب أخطاء في العناوين وتأخير التوصيل.
                </p>

                <div className="problem-chat-preview" style={{ padding: '12px 16px' }}>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    ❌ نسيان تثبيت رقم هاتف الزبون أو خطأ بكتابة اسم المنطقة في دفتر الملاحظات يسبب رجوع الشحنة.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05 — THE TRANSFORMATION */}
        <section className="section-padding transformation-section" id="transformation">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-gold">
                  <Sparkles size={14} />
                  الحل الذكي
                </span>
              </div>
              <h2 className="section-title">
                خلّي Instagram يجلب الزبون… ودنانير يتكفل بالباقي.
              </h2>
              <p className="section-desc">
                حوّل حركة المتابعين إلى مبيعات منظمة وفورية بمسار شراء احترافي ومباشر.
              </p>
            </div>

            <div className="transformation-wrapper">
              {/* BEFORE */}
              <div className="transformation-column transformation-before">
                <div className="transform-header-badge badge-state-before">
                  ❌ المسار القديم المتعب (يدوي عبر الـDM)
                </div>

                <div className="flow-step-list">
                  <div className="flow-step-item">
                    <div className="flow-icon-circle icon-red">1</div>
                    <div>
                      <div className="flow-text-title">Instagram</div>
                      <div className="flow-text-desc">نشر بوست أو ريلز للمنتج</div>
                    </div>
                  </div>

                  <div className="flow-arrow-down">↓</div>

                  <div className="flow-step-item">
                    <div className="flow-icon-circle icon-red">2</div>
                    <div>
                      <div className="flow-text-title">رسائل الـDM</div>
                      <div className="flow-text-desc">تراكم عشرات المحادثات غير المنظمة</div>
                    </div>
                  </div>

                  <div className="flow-arrow-down">↓</div>

                  <div className="flow-step-item">
                    <div className="flow-icon-circle icon-red">3</div>
                    <div>
                      <div className="flow-text-title">أسئلة متكررة وضياع وقت</div>
                      <div className="flow-text-desc">السعر؟ الألوان؟ التوصيل لبغداد بيش؟</div>
                    </div>
                  </div>

                  <div className="flow-arrow-down">↓</div>

                  <div className="flow-step-item">
                    <div className="flow-icon-circle icon-red">4</div>
                    <div>
                      <div className="flow-text-title">تسجيل يدوي مرهق</div>
                      <div className="flow-text-desc">تدوين الاسم والعنوان في نوتات مع احتمال أخطاء التوصيل</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AFTER */}
              <div className="transformation-column transformation-after">
                <div className="transform-header-badge badge-state-after">
                  ✓ مسار دنانير الذكي (آلي وسلس)
                </div>

                <div className="flow-step-list">
                  <div className="flow-step-item">
                    <div className="flow-icon-circle icon-gold">1</div>
                    <div>
                      <div className="flow-text-title">Instagram + Bio Link</div>
                      <div className="flow-text-desc">الزبون يضغط على رابط متجرك في البايو</div>
                    </div>
                  </div>

                  <div className="flow-arrow-down" style={{ color: 'var(--brand-gold-600)' }}>↓</div>

                  <div className="flow-step-item">
                    <div className="flow-icon-circle icon-gold">2</div>
                    <div>
                      <div className="flow-text-title">تصفح المنتجات والمقاسات</div>
                      <div className="flow-text-desc">الصور، الأسعار، والمقاسات واضحة فوراً أمامه</div>
                    </div>
                  </div>

                  <div className="flow-arrow-down" style={{ color: 'var(--brand-accent-600)' }}>↓</div>

                  <div className="flow-step-item">
                    <div className="flow-icon-circle icon-gold">3</div>
                    <div>
                      <div className="flow-text-title">إتمام الطلب في ثوانٍ</div>
                      <div className="flow-text-desc">إدخال رقم الهاتف والمحافظة بضغطة زر</div>
                    </div>
                  </div>

                  <div className="flow-arrow-down" style={{ color: 'var(--brand-accent-600)' }}>↓</div>

                  <div className="flow-step-item" style={{ background: 'var(--brand-accent-50)', border: '1.5px solid var(--brand-accent-300)' }}>
                    <div className="flow-icon-circle icon-gold">4</div>
                    <div>
                      <div className="flow-text-title" style={{ color: 'var(--brand-accent-700)' }}>لوحة تحكم دنانير جاهزة للشحن!</div>
                      <div className="flow-text-desc">إشعار فوري بالطلب مع بيانات المشتري جاهزة لشركة التوصيل</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — HOW IT WORKS */}
        <section className="section-padding how-it-works-section" id="how-it-works">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-dark">
                  <Zap size={14} color="var(--brand-gold-600)" />
                  انطلاقة سريعة
                </span>
              </div>
              <h2 className="section-title">
                ابدأ تجارتك بثلاث خطوات
              </h2>
              <p className="section-desc">
                خطوات بسيطة ومباشرة تنقلك من الاعتماد الكامل على الـDM إلى متجر رسمي متكامل.
              </p>
            </div>

            <div className="steps-grid">
              {/* Step 01 */}
              <div className="step-card">
                <div className="step-number-tag">01</div>
                <h3 className="step-title">أنشئ متجرك</h3>
                <p className="step-desc">
                  نجهز لك متجرًا إلكترونيًا احترافيًا بهويتك الخاصة وروابطك الرسمية في ساعات قليلة.
                </p>

                <div className="step-mock-preview">
                  <Store size={20} color="var(--brand-gold-600)" />
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    تجهيز واجهة المتجر والهوية
                  </div>
                </div>
              </div>

              {/* Step 02 */}
              <div className="step-card">
                <div className="step-number-tag">02</div>
                <h3 className="step-title">أضف منتجاتك</h3>
                <p className="step-desc">
                  أضف المنتجات والصور والأسعار بسهولة، وحدد المقاسات والألوان المتوفرة بمرونة تامة.
                </p>

                <div className="step-mock-preview">
                  <Package size={20} color="var(--brand-gold-600)" />
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    رفع الصور وتحديد الأسعار (د.ع)
                  </div>
                </div>
              </div>

              {/* Step 03 */}
              <div className="step-card">
                <div className="step-number-tag">03</div>
                <h3 className="step-title">شارك رابط متجرك</h3>
                <p className="step-desc">
                  ضع الرابط في Bio Instagram ورسائل WhatsApp وابدأ باستقبال الطلبات منظمة ومباشرة.
                </p>

                <div className="step-mock-preview">
                  <LinkIcon size={20} color="var(--brand-gold-600)" />
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    dananeer.store/yourname
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 — PRODUCT FEATURES */}
        <section className="section-padding features-section" id="features">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-gold">
                  <Package size={14} />
                  مميزات دنانير
                </span>
              </div>
              <h2 className="section-title">
                كل ما تحتاجه لإدارة تجارتك بنجاح
              </h2>
              <p className="section-desc">
                ركزنا على الأساسيات الجوهرية التي يحتاجها التاجر يومياً دون تعقيدات زائدة.
              </p>
            </div>

            <div className="features-grid">
              {/* Feature 1 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="feature-title">🛍️ متجر إلكتروني احترافي</h3>
                <p className="feature-desc">
                  اعرض منتجاتك بطريقة منظمة وجذابة تمنح علامتك التجارية مظهراً احترافياً يرفع ثقة المشتري.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Package size={24} />
                </div>
                <h3 className="feature-title">📦 إدارة الطلبات</h3>
                <p className="feature-desc">
                  تابع طلبات العملاء من شاشة واحدة وصنفها حسب مراحل الشحن (جديد، قيد التجهيز، تم التسليم).
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Layers size={24} />
                </div>
                <h3 className="feature-title">🏷️ إدارة المنتجات</h3>
                <p className="feature-desc">
                  أضف المنتجات والأسعار وخيارات المقاسات والألوان بسهولة مع متابعة مستمرة للكميات والمخزون.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Users size={24} />
                </div>
                <h3 className="feature-title">👥 إدارة العملاء</h3>
                <p className="feature-desc">
                  احتفظ بمعلومات عملائك وأرقام هواتفهم ومحافظاتهم بشكل منظم وسهل للرجوع إليه في أي وقت.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <BarChart3 size={24} />
                </div>
                <h3 className="feature-title">📊 لوحة تحكم ومؤشرات</h3>
                <p className="feature-desc">
                  تابع أداء تجارتك ومبيعاتك اليومية والشهرية بوضوح تام، واعرف منتجاتك الأكثر طلباً.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Smartphone size={24} />
                </div>
                <h3 className="feature-title">📱 تجربة ممتازة على الهاتف</h3>
                <p className="feature-desc">
                  متجرك يعمل بسرعة فائقة وتصميم متجاوب 100% مع كافة هواتف زبائنك لضمان تجربة طلب فورية.
                </p>
              </div>

              {/* Feature 7 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <LinkIcon size={24} />
                </div>
                <h3 className="feature-title">🔗 رابط متجر خاص</h3>
                <p className="feature-desc">
                  شارك رابط متجرك المخصص (dananeer.store/yourname) في بايو Instagram ورسائل WhatsApp.
                </p>
              </div>

              {/* Feature 8 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Settings size={24} />
                </div>
                <h3 className="feature-title">⚙️ إعدادات وإدارة سهلة</h3>
                <p className="feature-desc">
                  تحكم بمتجرك وبنود التوصيل وتكاليف الشحن بدون الحاجة لأي معرفة أو خلفية برمجية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 08 — DASHBOARD SHOWCASE */}
        <section className="section-padding dashboard-section" id="dashboard">
          <div className="dashboard-glow" />

          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-gold">
                  <BarChart3 size={14} />
                  لوحة تحكم دنانير
                </span>
              </div>
              <h2 className="section-title">
                تجارتك كلها… قدامك.
              </h2>
              <p className="section-desc">
                لوحة تحكم تجمع لك الطلبات والمبيعات والمخزون في شاشة واحدة واضحة وبسيطة.
              </p>
            </div>

            {/* Large Realistic Browser Mockup */}
            <div className="dashboard-mockup-window">
              <div className="dashboard-topbar">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <DananirBrand size="sm" light showSubtitle={false} />
                  <div className="dashboard-nav-tabs">
                    <button
                      className={`dash-tab-btn ${activeDashTab === 'orders' ? 'active' : ''}`}
                      onClick={() => setActiveDashTab('orders')}
                    >
                      الطلبات الواردة (34)
                    </button>
                    <button
                      className={`dash-tab-btn ${activeDashTab === 'products' ? 'active' : ''}`}
                      onClick={() => setActiveDashTab('products')}
                    >
                      المنتجات والمخزون
                    </button>
                    <button
                      className={`dash-tab-btn ${activeDashTab === 'analytics' ? 'active' : ''}`}
                      onClick={() => setActiveDashTab('analytics')}
                    >
                      التقارير اليومية
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'var(--brand-silver-300)' }}>
                  <span>متجر: بوتيك نينوى</span>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} />
                </div>
              </div>

              <div className="dashboard-body">
                {/* Stats Row */}
                <div className="dash-stats-row">
                  <div className="dash-stat-box">
                    <div className="dash-stat-label">إجمالي مبيعات اليوم</div>
                    <div className="dash-stat-num" style={{ color: 'var(--brand-silver-100)' }}>
                      1,840,000 د.ع
                    </div>
                  </div>

                  <div className="dash-stat-box">
                    <div className="dash-stat-label">الطلبات الجديدة</div>
                    <div className="dash-stat-num">
                      34 طلب
                    </div>
                  </div>

                  <div className="dash-stat-box">
                    <div className="dash-stat-label">بانتظار التوصيل</div>
                    <div className="dash-stat-num" style={{ color: '#60A5FA' }}>
                      8 طلبات
                    </div>
                  </div>

                  <div className="dash-stat-box">
                    <div className="dash-stat-label">المنتجات النشطة</div>
                    <div className="dash-stat-num">
                      142 منتج
                    </div>
                  </div>
                </div>

                {/* Orders Table Mock */}
                <div className="dash-table-wrapper">
                  <table className="dash-table">
                    <thead>
                      <tr>
                        <th>رقم الطلب</th>
                        <th>العميل</th>
                        <th>المحافظة</th>
                        <th>المنتجات المطلوبة</th>
                        <th>القيمة</th>
                        <th>طريقة الدفع</th>
                        <th>الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 700, direction: 'ltr', textAlign: 'right' }}>#DN-1082</td>
                        <td>مريم الزبيدي</td>
                        <td>بغداد (المنصور)</td>
                        <td>عطر العنبر الملكي (50 مل)</td>
                        <td style={{ fontWeight: 700, color: 'var(--brand-silver-100)' }}>48,000 د.ع</td>
                        <td>الدفع عند الاستلام</td>
                        <td>
                          <span className="status-pill status-pending">قيد التجهيز</span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 700, direction: 'ltr', textAlign: 'right' }}>#DN-1081</td>
                        <td>كرار حيدر</td>
                        <td>البصرة (الجزائر)</td>
                        <td>ساعة كلاسيك + سوار ذهبي</td>
                        <td style={{ fontWeight: 700, color: 'var(--brand-silver-100)' }}>65,000 د.ع</td>
                        <td>الدفع عند الاستلام</td>
                        <td>
                          <span className="status-pill status-delivering">خرج للتوصيل</span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 700, direction: 'ltr', textAlign: 'right' }}>#DN-1080</td>
                        <td>شهد خليل</td>
                        <td>أربيل (عينكاوة)</td>
                        <td>فستان سهرة زمردي (M)</td>
                        <td style={{ fontWeight: 700, color: 'var(--brand-silver-100)' }}>85,000 د.ع</td>
                        <td>الدفع عند الاستلام</td>
                        <td>
                          <span className="status-pill status-completed">تم التسليم</span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 700, direction: 'ltr', textAlign: 'right' }}>#DN-1079</td>
                        <td>علي الكعبي</td>
                        <td>النجف الأشرف</td>
                        <td>شمعة خشب الصندل العضوية</td>
                        <td style={{ fontWeight: 700, color: 'var(--brand-silver-100)' }}>24,000 د.ع</td>
                        <td>الدفع عند الاستلام</td>
                        <td>
                          <span className="status-pill status-completed">تم التسليم</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 09 — STORE SHOWCASE */}
        <section className="section-padding store-showcase-section" id="stores">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-gold">
                  <Store size={14} />
                  متاجر مبنية بدنانير
                </span>
              </div>
              <h2 className="section-title">
                شوف متجرك قبل ما تبدأ
              </h2>
              <p className="section-desc">
                نماذج متاجر إلكترونية حقيقية تعمل بنظام دنانير لتجار في مختلف المحافظات العراقية.
              </p>
            </div>

            <div className="store-categories-grid">
              {/* Store 1: Perfumes */}
              <div className="store-card">
                <div className="store-card-img-wrap">
                  <Image
                    src="/images/perfume.jpg"
                    alt="دار المشرق للعطور"
                    className="store-card-img"
                    fill
                  />
                  <span className="store-card-badge">عطور ومستحضرات</span>
                </div>
                <div className="store-card-content">
                  <div>
                    <h3 className="store-card-title">دار المشرق للعطور</h3>
                    <div className="store-card-city">
                      <MapPin size={14} />
                      أربيل - شارع 100
                    </div>
                  </div>
                  <button
                    className="store-card-action"
                    onClick={() => openDemoWithStore('perfumes')}
                  >
                    <span>معاينة وتجربة المتجر</span>
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>

              {/* Store 2: Fashion */}
              <div className="store-card">
                <div className="store-card-img-wrap">
                  <Image
                    src="/images/fashion.jpg"
                    alt="بوتيك نينوى للأزياء"
                    className="store-card-img"
                    fill
                  />
                  <span className="store-card-badge">أزياء وفساتين</span>
                </div>
                <div className="store-card-content">
                  <div>
                    <h3 className="store-card-title">بوتيك نينوى للأزياء</h3>
                    <div className="store-card-city">
                      <MapPin size={14} />
                      بغداد - المنصور
                    </div>
                  </div>
                  <button
                    className="store-card-action"
                    onClick={() => openDemoWithStore('fashion')}
                  >
                    <span>معاينة وتجربة المتجر</span>
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>

              {/* Store 3: Jewelry */}
              <div className="store-card">
                <div className="store-card-img-wrap">
                  <Image
                    src="/images/jewelry.jpg"
                    alt="مجوهرات رونق"
                    className="store-card-img"
                    fill
                  />
                  <span className="store-card-badge">إكسسوارات ومجوهرات</span>
                </div>
                <div className="store-card-content">
                  <div>
                    <h3 className="store-card-title">مجوهرات رونق</h3>
                    <div className="store-card-city">
                      <MapPin size={14} />
                      البصرة - الجزائر
                    </div>
                  </div>
                  <button
                    className="store-card-action"
                    onClick={() => openDemoWithStore('jewelry')}
                  >
                    <span>معاينة وتجربة المتجر</span>
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>

              {/* Store 4: Handmade Crafts */}
              <div className="store-card">
                <div className="store-card-img-wrap">
                  <Image
                    src="/images/handmade.jpg"
                    alt="حرفة أورا للخزف والشموع"
                    className="store-card-img"
                    fill
                  />
                  <span className="store-card-badge">أعمال يدوية وهدايا</span>
                </div>
                <div className="store-card-content">
                  <div>
                    <h3 className="store-card-title">حرفة أورا للخزف</h3>
                    <div className="store-card-city">
                      <MapPin size={14} />
                      السليمانية - بختياري
                    </div>
                  </div>
                  <button
                    className="store-card-action"
                    onClick={() => openDemoWithStore('handmade')}
                  >
                    <span>معاينة وتجربة المتجر</span>
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setIsDemoOpen(true)}
              >
                <Store size={18} />
                <span>جرّب متجرًا حقيقيًا الآن</span>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 10 — MOBILE EXPERIENCE */}
        <section className="section-padding mobile-experience-section" id="mobile">
          <div className="container">
            <div className="mobile-features-layout">
              <div>
                <span className="badge-pill badge-gold" style={{ marginBottom: 16 }}>
                  <Smartphone size={14} />
                  شاشات الموبايل
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: 20 }}>
                  متجرك مع زبونك وين ما كان
                </h2>
                <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.8 }}>
                  صُمم متجر دنانير ليكون الأسرع في التصفح والطلب على الهاتف المحمول، لأن أكثر من 90%
                  من مبيعات إنستغرام تتم مباشرة من هواتف العملاء.
                </p>

                <div className="mobile-perks-list">
                  <div className="mobile-perk-item">
                    <div className="mobile-perk-icon">
                      <Zap size={22} />
                    </div>
                    <div>
                      <h3 className="mobile-perk-title">تصفح فوري وسلس</h3>
                      <p className="mobile-perk-desc">
                        يفتح المتجر من رابط البايو في أقل من ثانية وبدون أي انتظار أو تعليق.
                      </p>
                    </div>
                  </div>

                  <div className="mobile-perk-item">
                    <div className="mobile-perk-icon">
                      <ShoppingBag size={22} />
                    </div>
                    <div>
                      <h3 className="mobile-perk-title">سلة شراء ذكية ومختصرة</h3>
                      <p className="mobile-perk-desc">
                        يختار العميل المقاس واللون والكمية ويضيفها للسلة دون مغادرة الصفحة.
                      </p>
                    </div>
                  </div>

                  <div className="mobile-perk-item">
                    <div className="mobile-perk-icon">
                      <Check size={22} />
                    </div>
                    <div>
                      <h3 className="mobile-perk-title">نموذج طلب عراقي ميسر</h3>
                      <p className="mobile-perk-desc">
                        الاسم، الهاتف، المحافظة، والعنوان فقط. لا تعقيدات، ولا حسابات بنكية إجبارية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Realistic Mobile Mockup Device */}
              <div className="mobile-device-frame">
                <div className="mobile-notch" />
                <div className="mobile-screen-content">
                  <div style={{ background: '#FFF', borderRadius: 16, padding: 12, marginBottom: 12, border: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>بوتيك نينوى للأزياء</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--brand-gold-600)' }}>السلة (1)</span>
                    </div>
                    <div style={{ position: 'relative', height: 180, borderRadius: 10, overflow: 'hidden', marginBottom: 10 }}>
                      <Image
                        src="/images/fashion.jpg"
                        alt="فستان مخملي"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 4 }}>
                      فستان سهرة زمردي مطرز
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, color: 'var(--brand-gold-600)', fontSize: '1.1rem' }}>
                        85,000 د.ع
                      </span>
                      <span style={{ background: '#ECFDF5', color: '#059669', fontSize: '0.75rem', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                        شحن متوفر
                      </span>
                    </div>
                  </div>

                  {/* Checkout summary simulation inside mobile */}
                  <div style={{ background: '#FFF', borderRadius: 16, padding: 14, border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: 8 }}>
                      بيانات التوصيل (العراق):
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <div>📍 بغداد - الكرادة خارج</div>
                      <div>📞 0770xxxxxxx</div>
                      <div>💵 الدفع: نقداً عند الاستلام</div>
                    </div>
                    <button
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '10px', fontSize: '0.86rem', marginTop: 12 }}
                      onClick={() => setIsDemoOpen(true)}
                    >
                      تأكيد الطلب 🛍️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11 — WHY DANANIR */}
        <section className="section-padding why-dananir-section" id="why">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-dark">
                  <ShieldCheck size={14} color="var(--brand-gold-600)" />
                  الفرق مع دنانير
                </span>
              </div>
              <h2 className="section-title">
                ليش دنانير؟
              </h2>
              <p className="section-desc">
                صممنا هذا النظام خصيصاً ليناسب واقع تجارة التجزئة في العراق وطريقة البيع عبر السوشيال ميديا.
              </p>
            </div>

            <div className="why-grid">
              {/* Reason 1 */}
              <div className="why-card">
                <div className="why-card-icon">
                  <Store size={24} />
                </div>
                <h3 className="why-card-title">مصمم لتاجر Instagram</h3>
                <p className="why-card-desc">
                  نفهم طريقة البيع التي تعمل بها وعلاقتك بالزبائن، لذلك صممنا كل زر لخدمة هذا المسار.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="why-card">
                <div className="why-card-icon">
                  <Zap size={24} />
                </div>
                <h3 className="why-card-title">بسيط</h3>
                <p className="why-card-desc">
                  لا تحتاج إلى أي خبرة تقنية أو مصطلحات أجنبية معقدة، كل شيء واضح وبالعربي.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="why-card">
                <div className="why-card-icon">
                  <Sparkles size={24} />
                </div>
                <h3 className="why-card-title">احترافي</h3>
                <p className="why-card-desc">
                  امنح علامتك التجارية الواجهة التي تليق بها لتبني الثقة وتضاعف طلبات الشراء.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="why-card">
                <div className="why-card-icon">
                  <DollarSign size={24} />
                </div>
                <h3 className="why-card-title">واضح</h3>
                <p className="why-card-desc">
                  اشتراك سنوي ثابت وشفاف بدون أي عمولات مستقطعة على مبيعاتك وأرباحك.
                </p>
              </div>

              {/* Reason 5 */}
              <div className="why-card">
                <div className="why-card-icon">
                  <MapPin size={24} />
                </div>
                <h3 className="why-card-title">محلي</h3>
                <p className="why-card-desc">
                  مصمم مع فهم عميق للسوق العراقي، المحافظات، وواقع شركات التوصيل والدفع بالدينار.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12 — PRICING */}
        <section className="section-padding pricing-section" id="pricing">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-gold">
                  <DollarSign size={14} />
                  الأسعار
                </span>
              </div>
              <h2 className="section-title">
                ابدأ متجرك باشتراك سنوي واضح
              </h2>
              <p className="section-desc">
                كل مبيعاتك ملكك بالكامل. لا توجد أي نسبة أو عمولة مستقطعة على مبيعات متجرك (0%).
              </p>
            </div>

            <div className="pricing-card-wrapper">
              <div className="pricing-featured-badge">
                الخطة السنوية المتكاملة لتاجر Instagram
              </div>

              <div className="pricing-card-inner">
                <div className="pricing-header-row">
                  <div>
                    <h3 className="pricing-plan-name">دنانير السنوي</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      متجر إلكتروني متكامل + لوحة تحكم + استضافة ودعم
                    </p>
                  </div>

                  <div className="pricing-price-wrap">
                    <span className="pricing-amount">350,000</span>
                    <span className="pricing-currency">د.ع</span>
                    <div className="pricing-term">للسنة الأولى بالكامل</div>
                  </div>
                </div>

                {/* Renewal Notice */}
                <div className="pricing-renewal-notice">
                  <span>تجديد رمزي مستمر:</span>
                  <strong style={{ fontSize: '1.05rem' }}>90,000 د.ع سنويًا للتجديد</strong>
                </div>

                {/* Actual Dananir Capabilities Checklist */}
                <ul className="pricing-checklist">
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>متجر إلكتروني احترافي جاهز للعمل بهويتك الخاصة</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>لوحة تحكم كاملة باللغة العربية لإدارة المنتجات والطلبات</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>رابط متجر خاص بك (dananeer.store/yourname) للبايو</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>إضافة منتجات وتصنيفات بدون أي حد أقصى</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>إدارة وتتبع حالات الشحن والتوصيل مع بيانات الزبون</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>نظام مهيأ للمحافظات العراقية والدفع عند الاستلام</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>استضافة سحابية فائقة السرعة والأمان مشمولة طوال السنة</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <span>دعم فني وتوجيه للمتجر عبر واتساب</span>
                  </li>
                  <li className="pricing-check-item">
                    <span className="check-icon"><Check size={14} /></span>
                    <strong style={{ color: 'var(--brand-emerald-700)' }}>
                      0% عمولة على المبيعات — أرباحك لك 100%
                    </strong>
                  </li>
                </ul>

                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setIsOnboardOpen(true)}
                >
                  <span>ابدأ متجرك الآن</span>
                  <ArrowLeft size={18} />
                </button>

                <p className="pricing-guarantee-note">
                  لا توجد أي رسوم إضافية مخفية • إعداد وتسليم متكامل
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13 — SOCIAL PROOF / DEMO SHOWCASE */}
        <section className="section-padding" style={{ background: 'var(--bg-body)' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-dark">
                  <Store size={14} color="var(--brand-gold-600)" />
                  متاجر تعمل بنظام دنانير
                </span>
              </div>
              <h2 className="section-title">
                شوف كيف تظهر المتاجر أمام الزبائن
              </h2>
              <p className="section-desc">
                واجهات تسوق أنيقة تحول زائر إنستغرام إلى مشترٍ دائم بثقة عالية.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              <div className="card-base card-hover" onClick={() => openDemoWithStore('perfumes')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand-gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    م
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-dark)' }}>دار المشرق للعطور</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>أربيل • عطور وبخور</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                  «كنا نضيع ساعات في الرد على الأسعار بالـDM، الآن الزبون يدخل يختار العطر والكمية ويطلب في دقيقة واحدة.»
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--brand-gold-600)', fontSize: '0.85rem', fontWeight: 700 }}>
                  <span>معاينة المتجر الحي</span>
                  <ExternalLink size={14} />
                </div>
              </div>

              <div className="card-base card-hover" onClick={() => openDemoWithStore('fashion')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand-gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    ن
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-dark)' }}>بوتيك نينوى للأزياء</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>بغداد - المنصور • أزياء نسائية</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                  «المتجر أعطى براندنا شكلاً فخماً جداً، وصرنا نعرف المقاسات المتوفرة والمحجوزة بدقة بدون دفاتر ونوتات.»
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--brand-gold-600)', fontSize: '0.85rem', fontWeight: 700 }}>
                  <span>معاينة المتجر الحي</span>
                  <ExternalLink size={14} />
                </div>
              </div>

              <div className="card-base card-hover" onClick={() => openDemoWithStore('jewelry')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand-gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    ر
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-dark)' }}>مجوهرات رونق</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>البصرة • إكسسوارات وهدايا</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                  «أفضل قرار لتجارتنا هو الرابط الخاص، العميل يتصفح كل كولكشن الساعات والأساور بسهولة فائقة.»
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--brand-gold-600)', fontSize: '0.85rem', fontWeight: 700 }}>
                  <span>معاينة المتجر الحي</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 14 — FAQ */}
        <section className="section-padding faq-section" id="faq">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="badge-pill badge-dark">
                  <HelpCircle size={14} color="var(--brand-gold-600)" />
                  الأسئلة الأكثر تكراراً
                </span>
              </div>
              <h2 className="section-title">
                الأسئلة الشائعة
              </h2>
              <p className="section-desc">
                إجابات واضحة ومباشرة عن كل ما يخص دنانير والاشتراك وطريقة العمل.
              </p>
            </div>

            <div className="faq-accordion-wrap">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqIndex === idx}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={20} className="faq-chevron" />
                  </button>

                  {openFaqIndex === idx && (
                    <div className="faq-answer">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 15 — FINAL CTA */}
        <section className="section-padding final-cta-section">
          <div className="final-cta-glow" />

          <div className="container">
            <div className="final-cta-content">
              <div style={{ marginBottom: 20 }}>
                <span className="badge-pill badge-accent" style={{ background: 'rgba(165, 93, 133, 0.22)', color: 'var(--brand-silver-100)', border: '1px solid rgba(206, 195, 203, 0.4)' }}>
                  <Sparkles size={14} />
                  «من دينار… إلى دنانير!»
                </span>
              </div>

              <h2 className="final-cta-title">
                جاهز تطلع تجارتك من Instagram؟
              </h2>

              <p className="final-cta-subtitle">
                من حساب إنستا… إلى متجر إلكتروني كامل.
                <br />
                ابدأ اليوم واجعل زبائنك يطلبون باحترافية وسرعة.
              </p>

              <div className="final-cta-actions">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setIsOnboardOpen(true)}
                >
                  <span>ابدأ متجرك الآن</span>
                  <ArrowLeft size={20} />
                </button>

                <button
                  className="btn btn-outline btn-lg"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.25)' }}
                  onClick={() => setIsDemoOpen(true)}
                >
                  <Store size={18} />
                  <span>جرّب متجرًا حقيقيًا</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 16 — FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div>
              <DananirBrand size="md" light />
              <p style={{ marginTop: 14, fontSize: '0.94rem', color: 'var(--brand-silver-300)', maxWidth: 300, lineHeight: 1.7 }}>
                من حساب إنستا… إلى متجر إلكتروني كامل.
                <br />
                نظام التجارة الإلكترونية العراقي المخصص لتجار إنستغرام.
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="footer-col-title">المنتج</h4>
              <ul className="footer-links-list">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#how-it-works">كيف يعمل؟</a></li>
                <li><a href="#dashboard">لوحة التحكم</a></li>
                <li><a href="#mobile">تجربة الهاتف</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="footer-col-title">المتاجر والأسعار</h4>
              <ul className="footer-links-list">
                <li><a href="#stores">المتاجر المبنية بدنانير</a></li>
                <li><a href="#pricing">الأسعار والاشتراك</a></li>
                <li><a href="#faq">الأسئلة الشائعة</a></li>
                <li>
                  <button
                    onClick={() => setIsDemoOpen(true)}
                    style={{ color: 'inherit', textAlign: 'right' }}
                  >
                    تجربة المتجر الحي
                  </button>
                </li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="footer-col-title">التواصل والدعم</h4>
              <ul className="footer-links-list">
                <li>
                  <button
                    onClick={() => setIsOnboardOpen(true)}
                    style={{ color: 'var(--brand-accent-300)', fontWeight: 700, textAlign: 'right' }}
                  >
                    ابدأ متجرك
                  </button>
                </li>
                <li>
                  <a
                    href="https://wa.me/9647700000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%AF%D9%86%D8%A7%D9%86%D9%8A%D8%B1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <Send size={14} />
                    <span>تواصل عبر واتساب</span>
                  </a>
                </li>
                <li><a href="#faq">الشروط والأحكام</a></li>
                <li><a href="#faq">سياسة الخصوصية</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              جميع الحقوق محفوظة © 2026 دنانير (DANANIR).
            </div>
            <div className="fawanees-attribution">
              دنانير — أحد منتجات فوانيس.
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <OnboardingModal
        isOpen={isOnboardOpen}
        onClose={() => setIsOnboardOpen(false)}
      />

      <LiveStoreModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenOnboard={() => setIsOnboardOpen(true)}
        initialStoreId={demoStoreId}
      />
    </div>
  );
}
