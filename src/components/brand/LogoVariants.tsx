import React from 'react';

export interface LogoItem {
  id: string;
  num: string;
  nameAr: string;
  nameEn: string;
  conceptAr: string;
  geometryAr: string;
  category: 'portal-arch' | 'orbital-flow' | 'minimal-dal' | 'architectural' | 'modern-seal' | 'currency-mark' | 'coins-wealth';
  renderSvg: (props: {
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    size?: number | string;
    className?: string;
    monochrome?: 'black' | 'white' | null;
  }) => React.ReactNode;
}

export const logoItems: LogoItem[] = [
  {
    id: 'logo-01-growth-portal',
    num: '01',
    nameAr: 'بوابة النمو الأساسية (الشعار المعتمد)',
    nameEn: 'The Growth Portal (Official)',
    conceptAr: 'قوس متصاعد يجمع بين مسار حرف الدال وبوابة المتجر مع نقطة ارتكاز نواتية تعبر عن النماء.',
    geometryAr: 'دائرة غير مكتملة بزاوية 280 درجة مع انحناءة دالية هابطة ترمز للمدخل التجاري المفتوح.',
    category: 'portal-arch',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 78 24 C 98 38, 102 68, 88 88 C 76 102, 54 104, 34 100 L 22 98 C 42 100, 68 98, 80 84 C 92 68, 88 44, 70 32 Z" fill={s} opacity={monochrome ? '0.4' : '0.85'} />
          <path d="M 72 26 C 90 38, 94 64, 82 82 C 72 96, 50 98, 30 96 C 46 96, 68 93, 76 80 C 86 64, 82 42, 66 32 C 54 24, 38 28, 28 38 C 22 44, 18 52, 18 62 C 18 80, 32 94, 52 94 L 52 86 C 36 86, 26 74, 26 62 C 26 54, 30 48, 34 44 C 42 36, 56 32, 66 38 Z" fill={p} />
          <circle cx="46" cy="62" r="9" fill={a} />
          <path d="M 24 96 H 92" stroke={p} strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    },
  },
  {
    id: 'logo-02-prosperity-orbit',
    num: '02',
    nameAr: 'مدار الازدهار المزدوج',
    nameEn: 'The Prosperity Orbit',
    conceptAr: 'مداران إهليلجيان متداخلان يعبران عن دورة السيولة ونقل البضائع من التاجر إلى المشتري.',
    geometryAr: 'قطع ناقص مائل بزاوية 35 درجة يتقاطع مع قوس دالي متوازن.',
    category: 'orbital-flow',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <ellipse cx="60" cy="60" rx="46" ry="24" transform="rotate(-30 60 60)" stroke={s} strokeWidth="4" opacity={monochrome ? '0.4' : '0.8'} />
          <path d="M 32 40 C 55 18, 92 30, 95 62 C 98 88, 72 100, 42 94 L 28 92" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <circle cx="78" cy="48" r="8" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-03-prosperity-ring',
    num: '03',
    nameAr: 'حلقة التجارة المتصلة',
    nameEn: 'Continuous Commerce Ring',
    conceptAr: 'شريط أحادي الانسياب يعكس التدفق المستمر للأرباح والطلبات اليومية للمتجر.',
    geometryAr: 'شريط متصل بسماكة 6.5px يشكل حرف الدال بخطوة واحدة بدون انقطاع.',
    category: 'orbital-flow',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="60" cy="60" r="44" stroke={s} strokeWidth="3" strokeDasharray="6 6" opacity="0.6" />
          <path d="M 82 32 C 96 46, 96 74, 82 88 C 68 102, 44 100, 26 92 C 50 92, 70 86, 76 72 C 82 58, 76 40, 62 34 C 48 28, 32 36, 26 50" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <circle cx="26" cy="50" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-04-storefront-canopy',
    num: '04',
    nameAr: 'مظلة المتجر الحديث',
    nameEn: 'Modern Store Canopy',
    conceptAr: 'مظلة مدخل المتجر بتجريد هندسي يدمج سقف المتجر مع انحناءة حرف الدال المفتوح.',
    geometryAr: 'قوس متوازي ذو حواف منحوتة بدقة تعبر عن واجهة المتجر الافتراضي.',
    category: 'architectural',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 22 75 C 22 42, 45 22, 78 22 C 95 22, 102 32, 102 32 C 102 32, 88 38, 78 38 C 55 38, 40 52, 40 75 Z" fill={p} />
          <path d="M 22 75 H 98 C 98 84, 90 92, 80 92 H 22 Z" fill={s} opacity={monochrome ? '0.4' : '0.8'} />
          <circle cx="85" cy="56" r="8" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-05-ascending-dal',
    num: '05',
    nameAr: 'الدال المتصاعد (مؤشر النمو)',
    nameEn: 'The Ascending Dal Vector',
    conceptAr: 'حرف الدال متجهاً للأعلى كمنحنى نمو بياني يعبر عن تضاعف المبيعات من الصفر.',
    geometryAr: 'ثلاثة خطوط موازية بانحناء تدريجي تصاعدي بنسب متوالية هندسية.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 25 85 C 45 85, 75 75, 85 45" stroke={s} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <path d="M 30 92 C 55 92, 85 80, 95 35" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <circle cx="95" cy="35" r="9" fill={a} />
          <circle cx="95" cy="35" r="4" fill="#FFFFFF" />
        </svg>
      );
    },
  },
  {
    id: 'logo-06-merchant-sigil',
    num: '06',
    nameAr: 'ختم التاجر الرقمي',
    nameEn: 'The Merchant Trust Sigil',
    conceptAr: 'أقواس دائرية مركزية مستوحاة من أختام الثقة التجارية والتوقيع الرقمي للمتجر الموثق.',
    geometryAr: 'أقواس متحدة المركز مقطوعة بتناظر ديناميكي يشكل فراغ حرف الدال.',
    category: 'modern-seal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="60" cy="60" r="46" stroke={s} strokeWidth="2.5" opacity="0.5" />
          <path d="M 60 22 A 38 38 0 0 1 98 60 A 38 38 0 0 1 60 98 L 32 98" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <path d="M 60 38 A 22 22 0 0 1 82 60 A 22 22 0 0 1 60 82 L 44 82" stroke={a} strokeWidth="5" strokeLinecap="round" />
          <circle cx="56" cy="60" r="6" fill={p} />
        </svg>
      );
    },
  },
  {
    id: 'logo-07-growth-spiral',
    num: '07',
    nameAr: 'صدفة النمو الذهبية',
    nameEn: 'The Golden Growth Spiral',
    conceptAr: 'حلزون النسبة الذهبية يبدأ بنواة صغيرة كطلب أول، ويتسع مشكلاً مسار نجاح المنصة.',
    geometryAr: 'منحنى لوغاريتمي هندسي ينتهي بأفق متسع ومفتوح.',
    category: 'orbital-flow',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 60 60 A 8 8 0 0 1 68 68 A 16 16 0 0 1 52 84 A 32 32 0 0 1 20 52 A 48 48 0 0 1 68 4 A 56 56 0 0 1 106 60 C 106 82, 88 98, 62 98 L 30 98" stroke={p} strokeWidth="6" strokeLinecap="round" />
          <circle cx="60" cy="60" r="6" fill={a} />
          <circle cx="94" cy="40" r="5" fill={s} />
        </svg>
      );
    },
  },
  {
    id: 'logo-08-mesopotamia-gateway',
    num: '08',
    nameAr: 'بوابة الرافدين المعمارية',
    nameEn: 'Mesopotamia Beacon Arch',
    conceptAr: 'قوس صلب مستوحى من بوابات بغداد المعمارية العريقة، مصفى بنقاء رقمي فائق البساطة.',
    geometryAr: 'قوس مدبب متناظر يحضن دائرة قيمة مركزية معلقة بوزن متوازن.',
    category: 'architectural',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 28 98 V 58 C 28 35, 45 20, 60 18 C 75 20, 92 35, 92 58 V 98" stroke={p} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 42 98 V 65 C 42 48, 52 38, 60 36 C 68 38, 78 48, 78 65 V 98" stroke={s} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <circle cx="60" cy="58" r="9" fill={a} />
          <line x1="20" y1="98" x2="100" y2="98" stroke={p} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    },
  },
  {
    id: 'logo-09-digital-horizon',
    num: '09',
    nameAr: 'الأفق الرقمي السريع',
    nameEn: 'The Digital Horizon Arc',
    conceptAr: 'خطوط أفقية سريعة تعبر عن سرعة إطلاق المتجر (في دقيقتين) والاندماج مع دائرة التجارة.',
    geometryAr: 'شرائح متدرجة الطول تتحول إلى قوس دائري متسارع.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <line x1="22" y1="36" x2="48" y2="36" stroke={s} strokeWidth="5" strokeLinecap="round" />
          <line x1="16" y1="52" x2="42" y2="52" stroke={s} strokeWidth="5" strokeLinecap="round" opacity="0.7" />
          <path d="M 48 36 C 75 36, 96 46, 96 70 C 96 88, 78 96, 52 96 L 22 96" stroke={p} strokeWidth="8" strokeLinecap="round" />
          <circle cx="68" cy="65" r="8" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-10-nexus-link',
    num: '10',
    nameAr: 'رابطة الوصل اللانهائية',
    nameEn: 'The Commerce Nexus Loop',
    conceptAr: 'حلقة إنفينيتي مقطوعة تجمع التاجر والزبون وشركة التوصيل في دورة تعامل متناغمة.',
    geometryAr: 'منحنى شريطي مزدوج يلتقي في عقدة مركزية رشيقة.',
    category: 'orbital-flow',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 35 45 C 50 25, 75 25, 90 45 C 105 65, 95 95, 70 95 C 45 95, 30 75, 20 60 C 12 48, 20 35, 35 35" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <path d="M 68 42 C 78 42, 85 50, 82 62 C 78 74, 65 78, 55 72" stroke={s} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <circle cx="58" cy="55" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-11-dawn-arch',
    num: '11',
    nameAr: 'قوس الفجر المشرق',
    nameEn: 'The Dawn Gateway Arch',
    conceptAr: 'قوس متسامٍ يعلو فوق خط الأفق، يرمز إلى إشراقة عهد جديد للمتاجر العراقية الناشئة.',
    geometryAr: 'منحنى بيضوي رأسي مشطور بدقة يرتكز على قاعدة أفقية واثقة.',
    category: 'portal-arch',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 30 95 C 30 50, 44 24, 65 24 C 86 24, 98 48, 98 78 C 98 90, 88 95, 75 95 H 25" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <circle cx="65" cy="52" r="10" fill={a} />
          <circle cx="65" cy="52" r="5" fill="#FFFFFF" opacity="0.8" />
          <path d="M 32 95 H 98" stroke={s} strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
        </svg>
      );
    },
  },
  {
    id: 'logo-12-modular-pill',
    num: '12',
    nameAr: 'الكبسولة الهندسية الذكية',
    nameEn: 'The Modular Tech Capsule',
    conceptAr: 'شكل كبسولي مدمج يتناغم تماماً مع أزرار الزجاج السائل وعناصر نظام iOS الحديث.',
    geometryAr: 'مستطيل ذو حواف مستديرة كلياً (Stadium) مع تفريغ مائل يشكل الدال.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="22" y="32" width="76" height="56" rx="28" stroke={s} strokeWidth="4" opacity="0.5" />
          <path d="M 68 32 C 84 32, 98 44, 98 60 C 98 76, 84 88, 68 88 L 36 88" stroke={p} strokeWidth="8" strokeLinecap="round" />
          <circle cx="54" cy="60" r="8" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-13-open-circle',
    num: '13',
    nameAr: 'الدائرة المفتوحة (دائرة القيمة)',
    nameEn: 'The 300° Open Circle',
    conceptAr: 'دائرة تكاد تكتمل لكنها تبقى مفتوحة لتسمح بدخول زبائن جدد وتدفق مستمر للأرباح.',
    geometryAr: 'قوس دائري بقطر 78px وزاوية قوسية 305 درجات مع ذيل أفقي مستقر.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 52 22 A 38 38 0 1 1 24 64 L 24 94 L 72 94" stroke={p} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="64" cy="58" r="9" fill={a} />
          <path d="M 45 36 A 24 24 0 0 1 78 72" stroke={s} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    },
  },
  {
    id: 'logo-14-abstract-diadem',
    num: '14',
    nameAr: 'التاج المجرد لعلامات النخبة',
    nameEn: 'The Abstract Merchant Diadem',
    conceptAr: 'ثلاثة أقواس علوية متدرجة تشكل هالة تاج معاصر يعبر عن ريادة التاجر وتميز متجره.',
    geometryAr: 'أقواس متوازية ثلاثية متصاعدة تشكل كتلة دالية فخمة.',
    category: 'architectural',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 24 88 C 24 50, 48 26, 80 26 C 94 26, 98 34, 98 34" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <path d="M 36 92 C 36 62, 54 42, 80 42 C 90 42, 94 48, 94 48" stroke={a} strokeWidth="5" strokeLinecap="round" />
          <path d="M 48 94 C 48 72, 60 58, 80 58" stroke={s} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="22" y1="94" x2="96" y2="94" stroke={p} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    },
  },
  {
    id: 'logo-15-rising-nucleus',
    num: '15',
    nameAr: 'النواة الصاعدة',
    nameEn: 'The Rising Core',
    conceptAr: 'هلالان داليان متعانقان يحتضنان نواة المتجر الرقمي الصاعدة نحو السماء.',
    geometryAr: 'منحنيان قطريان متداخلان مع نقطة ارتكاز مركزية طافية.',
    category: 'portal-arch',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 88 28 C 100 48, 96 82, 70 96 C 46 102, 26 90, 24 88" stroke={s} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
          <path d="M 78 30 C 90 48, 84 76, 64 88 C 48 96, 32 94, 26 88 L 26 78 C 34 82, 46 82, 56 76 C 70 66, 74 46, 64 34 Z" fill={p} />
          <circle cx="48" cy="54" r="10" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-16-value-quadrant',
    num: '16',
    nameAr: 'مصفوفة القيمة الهندسية',
    nameEn: 'The Value Matrix Quadrant',
    conceptAr: 'ربع دائرة هندسي نقي يرمز لقاعدة الأساس المتينة التي ينطلق منها مشروع التاجر.',
    geometryAr: 'قطاع دائري بزاوية 90 درجة مع اقتطاع نصف دائري داخلي ناعم.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 28 28 H 84 C 84 62, 58 88, 28 88 Z" fill={p} />
          <path d="M 28 48 H 58 C 58 66, 44 80, 28 80 Z" fill={s} opacity={monochrome ? '0.4' : '0.8'} />
          <circle cx="82" cy="82" r="8" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-17-security-knot',
    num: '17',
    nameAr: 'عقدة الأمان والدفع الموثوق',
    nameEn: 'The Trust & COD Knot',
    conceptAr: 'منحنى متداخل يرمز إلى أمان الدفع عند الاستلام والتسليم الموثوق من الباب إلى الباب.',
    geometryAr: 'شريطان متداخلان بانسيابية ثلاثية الأبعاد دون تشويش بصري.',
    category: 'modern-seal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 30 50 C 30 28, 55 24, 75 32 C 95 40, 95 70, 75 85 C 55 100, 30 90, 25 75" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <path d="M 45 40 C 65 35, 80 50, 75 68 C 70 82, 50 82, 40 70" stroke={s} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <circle cx="58" cy="58" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-18-binary-orbit',
    num: '18',
    nameAr: 'المدار الثنائي المتوازن',
    nameEn: 'The Binary Store Orbit',
    conceptAr: 'حركتان متناغمتان تعبران عن تكامل لوحة تحكم التاجر مع واجهة المتجر التي يراها زبائنه.',
    geometryAr: 'قوسان متقابلان يشكلان معاً تكوين الدال الكامل بأسلوب كروي.',
    category: 'orbital-flow',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 42 25 C 72 20, 98 42, 94 72 C 90 92, 70 98, 50 96" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <path d="M 78 95 C 48 100, 22 78, 26 48 C 30 28, 50 22, 70 24" stroke={s} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          <circle cx="60" cy="60" r="9" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-19-kinetic-vector',
    num: '19',
    nameAr: 'المتجه الحركي الانسيابي',
    nameEn: 'The Aerodynamic Kinetic Vector',
    conceptAr: 'جناح انسيابي ديناميكي يعكس السرعة الفائقة لخدمات التوصيل وتأكيد الطلبات التلقائي.',
    geometryAr: 'شفرة هوائية مقوسة بحواف ملساء وزاوية هجوم صاعدة.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 24 88 C 45 88, 88 80, 96 38 C 96 38, 82 52, 60 56 C 40 60, 24 72, 24 88 Z" fill={p} />
          <path d="M 32 94 C 55 94, 92 86, 102 52" stroke={s} strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
          <circle cx="86" cy="38" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-20-tigris-petal',
    num: '20',
    nameAr: 'زهرة الرافد الهندسية',
    nameEn: 'The Tigris Bloom Geometry',
    conceptAr: 'بتلة هندسية رباعية ناعمة تحاكي تدفق ماء دجلة وجمال الزخرفة العراقية المعاصرة النظيفة.',
    geometryAr: 'أربعة أقواس دالية تتلاقى في مركز نواتي موحد بانسجام تام.',
    category: 'modern-seal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 60 20 C 75 38, 75 50, 60 60 C 45 50, 45 38, 60 20 Z" fill={p} />
          <path d="M 100 60 C 82 75, 70 75, 60 60 C 70 45, 82 45, 100 60 Z" fill={p} opacity="0.8" />
          <path d="M 60 100 C 45 82, 45 70, 60 60 C 75 70, 75 82, 60 100 Z" fill={s} />
          <path d="M 20 60 C 38 45, 50 45, 60 60 C 50 75, 38 75, 20 60 Z" fill={a} />
          <circle cx="60" cy="60" r="5" fill="#FFFFFF" />
        </svg>
      );
    },
  },
  {
    id: 'logo-21-launch-archway',
    num: '21',
    nameAr: 'بوابة الانطلاق الصاروخي',
    nameEn: 'The Launchpad Arch',
    conceptAr: 'قوس إطلاق مجرد يرمز إلى وثبة التاجر من رسائل إنستغرام الخاصة إلى متجر رقمي حقيقي.',
    geometryAr: 'قطع مكافئ عمودي حاد الزوايا مع قاعدة تثبيت هادئة.',
    category: 'portal-arch',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 35 95 C 35 50, 48 20, 60 20 C 72 20, 85 50, 85 95" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <polygon points="60,35 68,52 52,52" fill={a} />
          <circle cx="60" cy="72" r="8" fill={s} />
          <line x1="25" y1="95" x2="95" y2="95" stroke={p} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    },
  },
  {
    id: 'logo-22-unified-monoline',
    num: '22',
    nameAr: 'الدال الموحد (مونو لاين)',
    nameEn: 'The Pure Monoline Dal',
    conceptAr: 'خط واحد بسماكة هندسية ثابتة 100% بدون أي تدرجات؛ أعلى درجات الوضوح على شاشات الساعات والأيقونات.',
    geometryAr: 'مسار كونتوري واحد متجانس بسماكة 6.5px وزوايا نصف قطرية دقيقة.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 85 35 C 98 48, 98 72, 85 85 C 72 98, 48 98, 30 88 L 30 68 C 42 76, 60 76, 70 66 C 80 56, 80 44, 70 34 C 60 24, 42 26, 32 38" stroke={p} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="38" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-23-store-architect',
    num: '23',
    nameAr: 'مهندس المتاجر الآيزومتري',
    nameEn: 'The Storefront Architect',
    conceptAr: 'كتلة معمارية آيزومترية تمثل بناء المتجر الرقمي خطوة بخطوة بكل سلاسة وسرعة.',
    geometryAr: 'منظور آيزومتري منحوت يجمع بين المكعب المعماري وقوس الدال الانسيابي.',
    category: 'architectural',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 60 22 L 95 42 V 78 L 60 98 L 25 78 V 42 Z" stroke={s} strokeWidth="3" opacity="0.4" />
          <path d="M 60 22 L 95 42 L 60 62 L 25 42 Z" fill={s} opacity={monochrome ? '0.3' : '0.6'} />
          <path d="M 60 62 V 98 L 95 78 V 42 Z" fill={p} />
          <path d="M 60 62 V 98 L 25 78 V 42 Z" fill={a} opacity="0.85" />
          <circle cx="60" cy="42" r="6" fill="#FFFFFF" />
        </svg>
      );
    },
  },
  {
    id: 'logo-24-perpetual-flow',
    num: '24',
    nameAr: 'التدفق المالي الدائم (موبيوس)',
    nameEn: 'The Perpetual Flow Loop',
    conceptAr: 'شريط موبيوس لا نهائي يرمز للإيرادات المتكررة والنمو المستدام لمتجر التاجر.',
    geometryAr: 'التواء شريطي ثلاثي الأبعاد مستمر بنقطة تقاطع محورية.',
    category: 'orbital-flow',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 35 40 C 50 15, 85 15, 95 45 C 105 75, 75 95, 55 95 C 35 95, 20 80, 25 60 C 30 40, 55 45, 75 60" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <path d="M 38 65 C 48 78, 65 78, 78 70" stroke={s} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <circle cx="75" cy="60" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-25-dananir-dome',
    num: '25',
    nameAr: 'قبة دنانير التراثية المعاصرة',
    nameEn: 'The Dananir Modern Dome',
    conceptAr: 'قبة معمارية تراثية مدمجة مع منحنى الدال، تمثل المظلة الحامية لجميع المتاجر العراقية المستقلة.',
    geometryAr: 'انحناءة قبو معمارية نصف كروية مع فتحة بوابة مرتكزة وقاعدة رصينة.',
    category: 'architectural',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M 24 92 C 24 52, 42 26, 60 26 C 78 26, 96 52, 96 92" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <path d="M 44 92 C 44 68, 52 52, 60 52 C 68 52, 76 68, 76 92" fill={s} opacity={monochrome ? '0.4' : '0.8'} />
          <circle cx="60" cy="42" r="7" fill={a} />
          <line x1="18" y1="92" x2="102" y2="92" stroke={p} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    },
  },
  {
    id: 'logo-26-twin-coins',
    num: '26',
    nameAr: 'رمز الدينار المزدوج (قطعتان نقديتان)',
    nameEn: 'Twin Metallic Dananir Coins',
    conceptAr: 'قطعتان نقديتان معدنيتان بتراكب زجاجي انسيابي، ترمز لاسم "دنانير" (جمع دينار)، والتبادل التجاري، وانتقال القيمة بين التاجر والزبون.',
    geometryAr: 'دائرتان مصقولتان متقاطعتان بزاوية 45 درجة مع إطار حافة العملة ولمعة زجاجية شفقية.',
    category: 'coins-wealth',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Lower Coin 1 */}
          <circle cx="48" cy="66" r="28" stroke={s} strokeWidth="4" fill={s} fillOpacity={monochrome ? '0.2' : '0.12'} />
          <circle cx="48" cy="66" r="20" stroke={s} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <circle cx="48" cy="66" r="6" fill={s} opacity="0.6" />
          {/* Upper Overlapping Coin 2 */}
          <circle cx="72" cy="48" r="28" stroke={p} strokeWidth="5" fill="white" fillOpacity={monochrome ? '0.1' : '0.85'} />
          <circle cx="72" cy="48" r="21" stroke={p} strokeWidth="1.5" opacity="0.4" />
          {/* Arabic Dal inside Upper Coin */}
          <path d="M 80 40 C 72 38, 64 42, 64 48 C 64 54, 70 58, 80 58" stroke={p} strokeWidth="4" strokeLinecap="round" />
          <circle cx="72" cy="48" r="4" fill={a} />
          {/* Edge Sheen Specular Line */}
          <path d="M 76 22 A 28 28 0 0 0 54 32" stroke={a} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    },
  },
  {
    id: 'logo-27-currency-d-double-bar',
    num: '27',
    nameAr: 'رمز عملة دنانير (D بالخطين المتعامدين)',
    nameEn: 'Dananir Currency Mark (Double-Bar D)',
    conceptAr: 'الحرف اللاتيني D يتوسطه خطان عموديان متوازيان كرمز العملات العالمية ($)، ليعبر عن دنانير كرمز تسعير ومعيار مالي تجاري رسمي.',
    geometryAr: 'قوس حرف D متناسب هندسياً يتقاطع معه خطان عموديان كاملان يخترقان القمة والقاعدة كرمز الدولار.',
    category: 'currency-mark',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Two Vertical Currency Bars (like $) */}
          <line x1="50" y1="16" x2="50" y2="104" stroke={s} strokeWidth="5" strokeLinecap="round" />
          <line x1="66" y1="16" x2="66" y2="104" stroke={s} strokeWidth="5" strokeLinecap="round" />
          {/* Bold Letter D Main Arc & Spine */}
          <path
            d="M 38 28 H 68 C 88 28, 98 42, 98 60 C 98 78, 88 92, 68 92 H 38 Z"
            stroke={p}
            strokeWidth="7"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner Accent Core */}
          <circle cx="66" cy="60" r="7" fill={a} />
          {/* Subtle horizontal tick accents */}
          <line x1="32" y1="28" x2="44" y2="28" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <line x1="32" y1="92" x2="44" y2="92" stroke={p} strokeWidth="7" strokeLinecap="round" />
        </svg>
      );
    },
  },
  {
    id: 'logo-28-minimal-currency-d',
    num: '28',
    nameAr: 'رمز D المالي الفائق البساطة',
    nameEn: 'Minimalist Twin-Stripe D',
    conceptAr: 'نسخة مينيمالية معاصرة لرمز D مع خطين رأسيين نحيفين يقطعان القوس، مصممة للفافيكون وشاشات الهواتف بأعلى درجات الوضوح.',
    geometryAr: 'نصف دائرة هندسية 180 درجة مفرغة يمر عبر وترها خطان متوازيان رفيعان برؤية نيو-فنتك.',
    category: 'currency-mark',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Twin vertical parallel lines extending top & bottom */}
          <line x1="46" y1="18" x2="46" y2="102" stroke={p} strokeWidth="5.5" strokeLinecap="round" />
          <line x1="58" y1="18" x2="58" y2="102" stroke={a} strokeWidth="5.5" strokeLinecap="round" />
          {/* Smooth D loop */}
          <path
            d="M 58 32 C 82 32, 96 44, 96 60 C 96 76, 82 88, 58 88"
            stroke={p}
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Back spine bridge */}
          <line x1="38" y1="32" x2="58" y2="32" stroke={p} strokeWidth="7" strokeLinecap="round" />
          <line x1="38" y1="88" x2="58" y2="88" stroke={p} strokeWidth="7" strokeLinecap="round" />
          {/* Floating Currency Node */}
          <circle cx="78" cy="60" r="5" fill={s} />
        </svg>
      );
    },
  },
  {
    id: 'logo-29-pure-kufic-dal',
    num: '29',
    nameAr: 'الدال الكوفي الصافي (أبسط دال هندسي)',
    nameEn: 'Pure Geometric Kufic Dal',
    conceptAr: 'حرف الدال العربي بأبسط وأقوى أشكاله الهندسية المستقيمة، مستوحى من الخط الكوفي المربع برؤية حداثية ناعمة الزوايا.',
    geometryAr: 'خطان متعامدان بزاوية منفرجة رشيقة (ساق مائل وقاعدة أفقية) مع نقطة ارتكاز دائرية مريحة.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Pure single stroke Kufic Dal */}
          <path
            d="M 82 28 L 38 72 C 34 76, 36 82, 42 82 H 92"
            stroke={p}
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Top terminal point */}
          <circle cx="82" cy="28" r="5" fill={a} />
          {/* Base silver grounding shadow */}
          <line x1="28" y1="94" x2="98" y2="94" stroke={s} strokeWidth="3" strokeLinecap="round" opacity="0.65" />
          {/* Value point inside the angle */}
          <circle cx="58" cy="62" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-30-continuous-arc-dal',
    num: '30',
    nameAr: 'دال القوس المستمر وحلقة النمو',
    nameEn: 'Continuous Arc & Growth Loop Dal',
    conceptAr: 'خط انسيابي أحادي متصل يرسم انحناءة الدال كاملة وينتهي بحلقة دائرية ترمز لتدفق الأرباح واستمرارية نمو المتجر بدون توقف.',
    geometryAr: 'قوس متصل ناعم يبدأ من القمة وينحني بسلاسة مستقراً على قاعدة أفقية ترتكز على دائرة مغلقة.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Smooth flowing Dal arc */}
          <path
            d="M 76 26 C 46 26, 30 46, 30 70 C 30 84, 42 90, 60 90 H 84"
            stroke={p}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Closed growth loop at top */}
          <circle cx="76" cy="26" r="10" stroke={s} strokeWidth="3" fill="none" />
          <circle cx="76" cy="26" r="5" fill={a} />
          {/* End terminal dot at base */}
          <circle cx="84" cy="90" r="6" fill={p} />
          {/* Inner ambient glow orbit */}
          <path d="M 42 56 C 46 44, 58 38, 70 38" stroke={s} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    },
  },
  {
    id: 'logo-31-ribbon-glass-dal',
    num: '31',
    nameAr: 'شريط الدال الزجاجي المتراكب',
    nameEn: 'Dimensional Ribbon Glass Dal',
    conceptAr: 'شريط زجاجي عائم يلتف بانسيابية ليشكل حرف الدال مع تأثير تراكب طبقات الزجاج السائل (Apple Liquid Glass Dimension).',
    geometryAr: 'مستويان زجاجيان متقاطعان بزاوية انحناء ناعمة وشفافية تفاعلية تعكس الضوء والعمق ثلاثي الأبعاد.',
    category: 'minimal-dal',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Back silver glass layer */}
          <path
            d="M 80 34 C 52 32, 34 50, 34 74 C 34 88, 48 94, 70 94"
            stroke={s}
            strokeWidth="10"
            strokeLinecap="round"
            opacity={monochrome ? '0.4' : '0.65'}
          />
          {/* Front primary ribbon layer overlapping */}
          <path
            d="M 72 26 C 44 26, 26 46, 26 70 C 26 84, 38 90, 62 90 H 94"
            stroke={p}
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Light reflection fold */}
          <path d="M 64 26 L 82 44" stroke={a} strokeWidth="3" strokeLinecap="round" />
          {/* Floating focal coin */}
          <circle cx="68" cy="58" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-32-interlocking-coins',
    num: '32',
    nameAr: 'العملتان المتداخلتان (تدفق اللانهاية)',
    nameEn: 'Interlocking Coins Infinite Flow',
    conceptAr: 'عملتان معدنيتان متداخلتان أفقياً تصنعان رمز التدفق المستمر والتبادل المالي (Infinity Exchange) مع إيحاء بحرف الدال عند حواف الالتفاف.',
    geometryAr: 'حلقتان معدنيتان رفيعتان تتشابكان في المركز مع جوهر مضيء عائم يعبر عن الأرباح المتجددة.',
    category: 'coins-wealth',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Left Ring Coin */}
          <circle cx="46" cy="60" r="26" stroke={p} strokeWidth="6" fill="none" />
          <circle cx="46" cy="60" r="18" stroke={p} strokeWidth="1.5" opacity="0.3" />
          {/* Right Ring Coin overlapping */}
          <circle cx="74" cy="60" r="26" stroke={s} strokeWidth="6" fill="none" />
          <circle cx="74" cy="60" r="18" stroke={s} strokeWidth="1.5" opacity="0.4" />
          {/* Central Intersection Luminous Almond / Coin Node */}
          <path
            d="M 60 42 C 68 48, 68 72, 60 78 C 52 72, 52 48, 60 42 Z"
            fill={a}
          />
          {/* Horizontal Ground Balance Line */}
          <line x1="26" y1="96" x2="94" y2="96" stroke={p} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    },
  },
  {
    id: 'logo-33-pure-gate-dal',
    num: '33',
    nameAr: 'دال البوابة النقية (مدخل المتجر المفتوح)',
    nameEn: 'Pure Merchant Gate Dal',
    conceptAr: 'تجريد حرف الدال كبوابة متجر إلكتروني مفتوحة، تمثل سهولة دخول الزبائن وتحول زيارات الإنستغرام إلى مبيعات فورية.',
    geometryAr: 'نصف قوس علوي متصل بقائم أيسر وقاعدة أفقية صلبة ومستقيمة، بنسبة تناغم بصري متوازنة 1:1.',
    category: 'portal-arch',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Main Gate Arch forming Dal */}
          <path
            d="M 32 88 V 52 C 32 32, 50 22, 72 22 C 86 22, 94 30, 94 42"
            stroke={p}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Foundation Floor / Threshold */}
          <line x1="20" y1="88" x2="100" y2="88" stroke={p} strokeWidth="6" strokeLinecap="round" />
          {/* Secondary architectural inner echo */}
          <path
            d="M 48 88 V 60 C 48 48, 56 42, 68 42"
            stroke={s}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.75"
          />
          {/* Luminous Door Knob / Transaction Key */}
          <circle cx="68" cy="62" r="7" fill={a} />
        </svg>
      );
    },
  },
  {
    id: 'logo-34-coin-dal-monogram',
    num: '34',
    nameAr: 'دينار المونوغرام المفرغ (العملة المحفورة)',
    nameEn: 'Minted Coin & Dal Monogram',
    conceptAr: 'قرص دينار معدني مصقول يحمل في قلبه تفريغاً هندسياً سلباً (Negative Space) لحرف الدال العربي، يجمع بين العملة والهوية الحرفية.',
    geometryAr: 'قرص معدني دائري ناعم مع فراغ سلبي دقيق يرسم انحناءة الدال في مركزه بتجويف زجاجي براق.',
    category: 'coins-wealth',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Outer Coin Disk */}
          <circle cx="60" cy="60" r="44" stroke={p} strokeWidth="5" fill={s} fillOpacity={monochrome ? '0.2' : '0.15'} />
          <circle cx="60" cy="60" r="37" stroke={s} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
          {/* Crisp Inset Arabic Dal Monogram */}
          <path
            d="M 78 40 C 60 38, 44 48, 44 64 C 44 76, 56 82, 78 82"
            stroke={p}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Minting Point of Value */}
          <circle cx="64" cy="48" r="6" fill={a} />
          {/* Glass Specular Edge Highlight */}
          <path d="M 36 32 A 44 44 0 0 1 84 22" stroke={a} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </svg>
      );
    },
  },
  {
    id: 'logo-35-twin-axis-dal',
    num: '35',
    nameAr: 'دال المحور المالي المزدوج (دال العملة)',
    nameEn: 'Twin-Axis Arabic Dal Currency Mark',
    conceptAr: 'دمج عبقري بين انحناءة حرف الدال العربي والخطين العموديين لرموز العملات العالمية ($)، كهمزة وصل بين الأصالة العربية والمعايير المالية الدولية.',
    geometryAr: 'قوس دال عربي مفرغ يخترقه خطان عموديان متوازيان يربطان القمة بالقاعدة كرمز تسعير مالي عربي معتمد.',
    category: 'currency-mark',
    renderSvg: ({ primaryColor = '#3E1F47', secondaryColor = '#C9C5CE', accentColor = '#9C7BB5', size = 64, className = '', monochrome = null }) => {
      const p = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : primaryColor;
      const s = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : secondaryColor;
      const a = monochrome === 'black' ? '#1E1A22' : monochrome === 'white' ? '#FFFFFF' : accentColor;
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Two Vertical Parallel Currency Lines ($ style) */}
          <line x1="52" y1="16" x2="52" y2="104" stroke={s} strokeWidth="4.5" strokeLinecap="round" />
          <line x1="68" y1="16" x2="68" y2="104" stroke={s} strokeWidth="4.5" strokeLinecap="round" />
          {/* Flowing Arabic Dal intersecting */}
          <path
            d="M 88 34 C 58 26, 32 46, 32 72 C 32 88, 52 92, 90 92"
            stroke={p}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Currency Dot / Nucleus */}
          <circle cx="68" cy="54" r="6" fill={a} />
          {/* Secondary grounding highlight */}
          <line x1="24" y1="102" x2="96" y2="102" stroke={p} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    },
  },
];

interface LogoVariantRendererProps {
  logoId: string;
  size?: number | string;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  monochrome?: 'black' | 'white' | null;
}

export const LogoVariantRenderer: React.FC<LogoVariantRendererProps> = ({
  logoId,
  size = 64,
  className = '',
  primaryColor = '#3E1F47',
  secondaryColor = '#C9C5CE',
  accentColor = '#9C7BB5',
  monochrome = null,
}) => {
  const item = logoItems.find((l) => l.id === logoId) || logoItems[0];
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {item.renderSvg({ primaryColor, secondaryColor, accentColor, size, monochrome })}
    </div>
  );
};
