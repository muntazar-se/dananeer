import React from 'react';
import * as Lucide from 'lucide-react';

export interface DananirIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

/**
 * Standard icon wrapper ensuring:
 * - 24x24 standard bounding box
 * - 2px default stroke width
 * - round line caps and line joins
 * - Apple Liquid Glass and Dananir palette harmony
 */
function createLucideWrapper(
  LucideComponent: React.ComponentType<any>,
  defaultName: string
) {
  const IconWrapper: React.FC<DananirIconProps> = ({
    size = 24,
    strokeWidth = 2,
    color = 'currentColor',
    className = '',
    ...props
  }) => {
    return (
      <LucideComponent
        size={size}
        strokeWidth={strokeWidth}
        color={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`shrink-0 transition-colors ${className}`}
        {...props}
      />
    );
  };
  IconWrapper.displayName = defaultName;
  return IconWrapper;
}

/* =====================================================================
   1. CUSTOM DANANIR BRAND ICONS (28+ hand-crafted brand icons)
   24x24 grid, 2px stroke, round cap/join, Iraqi e-commerce & Dal symbol
   ===================================================================== */

/** 1. Dananir Coin - العملة الأساسية بدلالة حرف الدال */
export const DananirCoin: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9.5a4 4 0 0 0-4-2.5c-2.2 0-3.5 1.6-3.5 3.8 0 2.2 1.4 3.7 3.5 3.7h4" />
    <circle cx="12" cy="11" r="1" fill={color} stroke="none" />
  </svg>
);

/** 2. Twin Coins - قطعتين نقديتين معدنية متداخلة */
export const TwinCoins: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <circle cx="9" cy="9" r="6.5" />
    <path d="M11 15.5a6.5 6.5 0 1 0 7-7" />
    <path d="M7 9h3" />
    <path d="M13 14h3" />
  </svg>
);

/** 3. Dal Portal - بوابة النمو وانحناءة حرف الدال المفتوحة */
export const DalPortal: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M5 20h14" />
    <path d="M17 19c2.5-3.5 2-8.5-1-11.5S7.5 5 5 7.5c-2 2-2 6.5 0 9.5" />
    <circle cx="11.5" cy="12" r="1.5" fill={color} stroke="none" />
  </svg>
);

/** 4. Dal Dollar - حرف الدال مدموج مع خطي العملة المتعامدين */
export const DalDollar: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <line x1="12" y1="2.5" x2="12" y2="21.5" />
    <path d="M17 7.5a4.5 4.5 0 0 0-4.5-3c-2.8 0-4.5 2-4.5 4.5 0 3 2 4.2 4.5 4.5 2.5.3 4.5 1.5 4.5 4.5 0 2.5-1.8 4-4.5 4a4.5 4.5 0 0 1-4.5-3" />
  </svg>
);

/** 5. CodCash - الدفع عند الاستلام كاش بالدينار العراقي */
export const CodCash: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <rect x="2" y="6" width="16" height="11" rx="2.5" />
    <circle cx="10" cy="11.5" r="2.5" />
    <path d="M18 9h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1" />
  </svg>
);

/** 6. IraqTruck - شاحنة التوصيل العراقي السريع بين المحافظات */
export const IraqTruck: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M1 4h13v12H1z" />
    <path d="M14 8h4l3 3.5V16h-7V8z" />
    <circle cx="5.5" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
    <path d="M8 17.5h7" />
    <path d="M3 8h4" />
  </svg>
);

/** 7. BaghdadHub - مركز توزيع بغداد مع منارة ملوية مصغرة أو دلالة المحافظات */
export const BaghdadHub: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

/** 8. StoreDoor - واجهة متجر دنانير مع مظلة حديثة وباب زجاجي */
export const StoreDoor: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M3 9l2-5h14l2 5" />
    <path d="M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M10 22v-6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v6" />
  </svg>
);

/** 9. IqdReceipt - إشعار فاتورة مختوم بالدينار العراقي (د.ع) */
export const IqdReceipt: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M4 2v19l3-1.5 3 1.5 3-1.5 3 1.5 4-2V2z" />
    <path d="M8 7h8" />
    <path d="M8 11h5" />
    <path d="M8 15h3" />
    <circle cx="15.5" cy="14.5" r="1.5" />
  </svg>
);

/** 10. OrderChime - جرس التنبيه مع نغمة الطلب الجديد والوميض */
export const OrderChime: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    <path d="M19 4l2-2" />
    <path d="M21 7h2" />
  </svg>
);

/** 11. SmartInventory - إدارة المخزون الذكية مع طبقات ورمز الفرز */
export const SmartInventory: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

/** 12. DinarBadge - وسام التاجر المعتمد والموثق على دنانير */
export const DinarBadge: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <circle cx="12" cy="10" r="7" />
    <path d="M8.5 15.5L7 22l5-2.5 5 2.5-1.5-6.5" />
    <path d="M10 10l1.5 1.5L14 8.5" />
  </svg>
);

/** 13. FastCourier - دراجة التوصيل السريع الفوري في بغداد */
export const FastCourier: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <circle cx="5.5" cy="17.5" r="3" />
    <circle cx="18.5" cy="17.5" r="3" />
    <path d="M12 17.5V11l3-4h3" />
    <path d="M8.5 17.5l2.5-5 4 1" />
    <path d="M5.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

/** 14. SocialToStore - تحويل متجر إنستغرام لمتجر إلكتروني احترافي */
export const SocialToStore: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <rect x="2" y="3" width="9" height="9" rx="2.5" />
    <circle cx="6.5" cy="7.5" r="1.5" />
    <path d="M13 14l2-3h6l1 3" />
    <path d="M14 17v4h8v-4" />
    <path d="M8 15v3a2 2 0 0 0 2 2h3" />
    <path d="M11 18l2 2-2 2" />
  </svg>
);

/** 15. PricingTagIqd - وسم السعر المخصص مع ختم الدينار */
export const PricingTagIqd: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

/** 16. CartCheckDinar - سلة المشتريات المكتملة والمحققة */
export const CartCheckDinar: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
    <path d="M10 15.5l1.5 1.5 3-3" />
  </svg>
);

/** 17. AiSparkleStore - محرك الذكاء الاصطناعي لكتابة تفاصيل المنتجات */
export const AiSparkleStore: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4z" />
    <path d="M19 16l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
    <path d="M5 17l.8 1.7 1.7.8-1.7.8L5 22l-.8-1.7-1.7-.8 1.7-.8z" />
  </svg>
);

/** 18. VoiceAssistant - المساعد الصوتي لتدوين الطلبيات باللهجة العراقية */
export const VoiceAssistant: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <path d="M2 10c0-1.5.5-2.5 1-3" />
    <path d="M22 10c0-1.5-.5-2.5-1-3" />
  </svg>
);

/** 19. SafeShieldIqd - درع حماية المدفوعات والضمان المالي */
export const SafeShieldIqd: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

/** 20. MerchantCrown - تاج أفضل المتاجر مبيعاً وتقييماً */
export const MerchantCrown: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M3 18l2-11 5 4 2-6 2 6 5-4 2 11H3z" />
    <circle cx="5" cy="7" r="1" fill={color} stroke="none" />
    <circle cx="12" cy="5" r="1" fill={color} stroke="none" />
    <circle cx="19" cy="7" r="1" fill={color} stroke="none" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
);

/** 21. ReturnBox - طرد مسترجع مع سهم التدوير */
export const ReturnBox: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z" />
    <path d="M7 12a5 5 0 0 1 8.5-3.5L17 10" />
    <path d="M17 6v4h-4" />
  </svg>
);

/** 22. WhatsAppDirect - المراسلة الفورية عبر واتساب لتأكيد الطلب */
export const WhatsAppDirect: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9.5 9.5a1 1 0 0 0 .5 1.5c1 1.5 2 2.5 3.5 3.5a1 1 0 0 0 1.5.5" />
  </svg>
);

/** 23. LiveInventory - نبض المخزون الحي لحظة بلحظة */
export const LiveInventory: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M7 13l3-3 3 4 4-5" />
    <circle cx="18" cy="7" r="2" fill={color} stroke="none" />
  </svg>
);

/** 24. AnalyticsTrend - منحنى نمو المبيعات الصاعد */
export const AnalyticsTrend: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <line x1="3" y1="21" x2="21" y2="21" />
    <polyline points="4 16 9 11 13 15 20 6" />
    <polyline points="15 6 20 6 20 11" />
  </svg>
);

/** 25. PrintBarcode - طباعة ملصق الباركود الحراري للشحن */
export const PrintBarcode: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <rect x="4" y="3" width="16" height="6" rx="1.5" />
    <path d="M4 14H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" />
    <rect x="6" y="12" width="12" height="9" rx="1.5" />
    <line x1="8" y1="15" x2="8" y2="18" />
    <line x1="11" y1="15" x2="11" y2="18" />
    <line x1="13" y1="15" x2="13" y2="18" />
    <line x1="16" y1="15" x2="16" y2="18" />
  </svg>
);

/** 26. LiquidGlassOrb - فقاعة الزجاج السائل النفاذة */
export const LiquidGlassOrb: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 9 9" strokeDasharray="3 3" />
    <path d="M8 8a5.5 5.5 0 0 1 7 0" opacity="0.6" />
    <circle cx="15" cy="8" r="1.5" fill={color} stroke="none" />
  </svg>
);

/** 27. SyncInstagram - المزامنة التلقائية مع منشورات إنستغرام */
export const SyncInstagram: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M21.5 2v6h-6" />
    <path d="M2.5 22v-6h6" />
    <path d="M3.5 11.5A9 9 0 0 1 19.5 7.5L21.5 2" />
    <path d="M20.5 12.5a9 9 0 0 1-16 4L2.5 22" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

/** 28. CustomerPhone - تواصل مباشر وتأكيد الطلب برقم الزبون */
export const CustomerPhone: React.FC<DananirIconProps> = ({
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-colors ${className}`}
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M15 4a6 6 0 0 1 5 5" />
    <path d="M15 1a9 9 0 0 1 8 8" />
  </svg>
);

/* =====================================================================
   2. NORMALIZED PRODUCTION WRAPPERS FOR ALL REQUESTED ICONS
   ===================================================================== */

// --- Navigation Icons ---
export const LayoutDashboard = createLucideWrapper(Lucide.LayoutDashboard, 'LayoutDashboard');
export const Home = createLucideWrapper(Lucide.Home, 'Home');
export const Store = createLucideWrapper(Lucide.Store, 'Store');
export const ClipboardList = createLucideWrapper(Lucide.ClipboardList, 'ClipboardList');
export const Package = createLucideWrapper(Lucide.Package, 'Package');
export const FolderTree = createLucideWrapper(Lucide.FolderTree, 'FolderTree');
export const Ticket = createLucideWrapper(Lucide.Ticket, 'Ticket');
export const Radar = createLucideWrapper(Lucide.Radar, 'Radar');
export const BarChart3 = createLucideWrapper(Lucide.BarChart3, 'BarChart3');
export const Palette = createLucideWrapper(Lucide.Palette, 'Palette');
export const Settings = createLucideWrapper(Lucide.Settings, 'Settings');
export const Megaphone = createLucideWrapper(Lucide.Megaphone, 'Megaphone');
export const Tags = createLucideWrapper(Lucide.Tags, 'Tags');

// --- Order & Sales Icons ---
export const ShoppingBag = createLucideWrapper(Lucide.ShoppingBag, 'ShoppingBag');
export const ShoppingCart = createLucideWrapper(Lucide.ShoppingCart, 'ShoppingCart');
export const Truck = createLucideWrapper(Lucide.Truck, 'Truck');
export const Banknote = createLucideWrapper(Lucide.Banknote, 'Banknote');
export const HandCoins = createLucideWrapper(Lucide.HandCoins, 'HandCoins');
export const CircleDollarSign = createLucideWrapper(Lucide.CircleDollarSign, 'CircleDollarSign');
export const Coins = createLucideWrapper(Lucide.Coins, 'Coins');
export const DollarSign = createLucideWrapper(Lucide.DollarSign, 'DollarSign');
export const Printer = createLucideWrapper(Lucide.Printer, 'Printer');
export const FileText = createLucideWrapper(Lucide.FileText, 'FileText');
export const Phone = createLucideWrapper(Lucide.Phone, 'Phone');
export const MapPin = createLucideWrapper(Lucide.MapPin, 'MapPin');

// --- Products & Inventory Icons ---
export const PackageCheck = createLucideWrapper(Lucide.PackageCheck, 'PackageCheck');
export const Boxes = createLucideWrapper(Lucide.Boxes, 'Boxes');
export const ImagePlus = createLucideWrapper(Lucide.ImagePlus, 'ImagePlus');
export const Crop = createLucideWrapper(Lucide.Crop, 'Crop');
export const Star = createLucideWrapper(Lucide.Star, 'Star');
export const Eye = createLucideWrapper(Lucide.Eye, 'Eye');
export const EyeOff = createLucideWrapper(Lucide.EyeOff, 'EyeOff');
export const Layers = createLucideWrapper(Lucide.Layers, 'Layers');
export const UploadCloud = createLucideWrapper(Lucide.UploadCloud, 'UploadCloud');
export const Trash2 = createLucideWrapper(Lucide.Trash2, 'Trash2');
export const Pencil = createLucideWrapper(Lucide.Pencil, 'Pencil');
export const Plus = createLucideWrapper(Lucide.Plus, 'Plus');
export const Minus = createLucideWrapper(Lucide.Minus, 'Minus');

// --- AI / Smart Features Icons ---
export const Bot = createLucideWrapper(Lucide.Bot, 'Bot');
export const Mic = createLucideWrapper(Lucide.Mic, 'Mic');
export const Sparkles = createLucideWrapper(Lucide.Sparkles, 'Sparkles');
export const Lightbulb = createLucideWrapper(Lucide.Lightbulb, 'Lightbulb');
export const ShieldAlert = createLucideWrapper(Lucide.ShieldAlert, 'ShieldAlert');
export const ShieldCheck = createLucideWrapper(Lucide.ShieldCheck, 'ShieldCheck');
export const Zap = createLucideWrapper(Lucide.Zap, 'Zap');
export const SlidersHorizontal = createLucideWrapper(Lucide.SlidersHorizontal, 'SlidersHorizontal');
export const SunMedium = createLucideWrapper(Lucide.SunMedium, 'SunMedium');
export const Moon = createLucideWrapper(Lucide.Moon, 'Moon');

// --- Notifications & Communication Icons ---
export const Bell = createLucideWrapper(Lucide.Bell, 'Bell');
export const BellRing = createLucideWrapper(Lucide.BellRing, 'BellRing');
export const BellOff = createLucideWrapper(Lucide.BellOff, 'BellOff');
export const MessageCircle = createLucideWrapper(Lucide.MessageCircle, 'MessageCircle');
export const Send = createLucideWrapper(Lucide.Send, 'Send');
export const Users = createLucideWrapper(Lucide.Users, 'Users');
export const User = createLucideWrapper(Lucide.User, 'User');
export const Volume2 = createLucideWrapper(Lucide.Volume2, 'Volume2');
export const VolumeX = createLucideWrapper(Lucide.VolumeX, 'VolumeX');
export const ExternalLink = createLucideWrapper(Lucide.ExternalLink, 'ExternalLink');

// --- Interface Actions ---
export const Check = createLucideWrapper(Lucide.Check, 'Check');
export const CheckCheck = createLucideWrapper(Lucide.CheckCheck, 'CheckCheck');
export const CheckCircle2 = createLucideWrapper(Lucide.CheckCircle2, 'CheckCircle2');
export const X = createLucideWrapper(Lucide.X, 'X');
export const XCircle = createLucideWrapper(Lucide.XCircle, 'XCircle');
export const AlertCircle = createLucideWrapper(Lucide.AlertCircle, 'AlertCircle');
export const AlertTriangle = createLucideWrapper(Lucide.AlertTriangle, 'AlertTriangle');
export const Save = createLucideWrapper(Lucide.Save, 'Save');
export const Search = createLucideWrapper(Lucide.Search, 'Search');
export const Copy = createLucideWrapper(Lucide.Copy, 'Copy');
export const Download = createLucideWrapper(Lucide.Download, 'Download');
export const RefreshCw = createLucideWrapper(Lucide.RefreshCw, 'RefreshCw');
export const RotateCcw = createLucideWrapper(Lucide.RotateCcw, 'RotateCcw');
export const ChevronDown = createLucideWrapper(Lucide.ChevronDown, 'ChevronDown');
export const ChevronUp = createLucideWrapper(Lucide.ChevronUp, 'ChevronUp');
export const ChevronLeft = createLucideWrapper(Lucide.ChevronLeft, 'ChevronLeft');
export const ChevronRight = createLucideWrapper(Lucide.ChevronRight, 'ChevronRight');
export const ArrowLeft = createLucideWrapper(Lucide.ArrowLeft, 'ArrowLeft');
export const ArrowRight = createLucideWrapper(Lucide.ArrowRight, 'ArrowRight');
export const ArrowUpDown = createLucideWrapper(Lucide.ArrowUpDown, 'ArrowUpDown');

/* =====================================================================
   3. ICON METADATA REGISTRY FOR DESIGN SYSTEM EXPLORER
   ===================================================================== */

export interface IconMeta {
  name: string;
  nameAr: string;
  category: 'brand' | 'navigation' | 'sales' | 'products' | 'ai' | 'notifications' | 'actions';
  descriptionAr: string;
  component: React.FC<DananirIconProps>;
  isBrandCustom?: boolean;
}

export const DANANIR_ICON_CATALOG: IconMeta[] = [
  // --- Brand Custom (28) ---
  { name: 'DananirCoin', nameAr: 'دينار دنانير', category: 'brand', descriptionAr: 'عملة دنانير المركزية بحرف الدال ونواة النماء', component: DananirCoin, isBrandCustom: true },
  { name: 'TwinCoins', nameAr: 'قطعتان نقديتان', category: 'brand', descriptionAr: 'قطعتين نقدية معدنية تعبر عن دورة المبيعات والسيولة', component: TwinCoins, isBrandCustom: true },
  { name: 'DalPortal', nameAr: 'بوابة الدال', category: 'brand', descriptionAr: 'بوابة المتجر المستوحاة من انحناءة حرف الدال المفتوحة', component: DalPortal, isBrandCustom: true },
  { name: 'DalDollar', nameAr: 'الدال النقدي المتعامد', category: 'brand', descriptionAr: 'حرف الدال مع خطي العملة المتعامدين لترميز المال', component: DalDollar, isBrandCustom: true },
  { name: 'CodCash', nameAr: 'الدفع عند الاستلام كاش', category: 'brand', descriptionAr: 'نقود ورقية وقطع معدنية للتحصيل العراقي', component: CodCash, isBrandCustom: true },
  { name: 'IraqTruck', nameAr: 'شاحنة التوصيل العراقي', category: 'brand', descriptionAr: 'شاحنة شحن سريعة تربط بغداد وسائر المحافظات', component: IraqTruck, isBrandCustom: true },
  { name: 'BaghdadHub', nameAr: 'مركز بغداد والمحافظات', category: 'brand', descriptionAr: 'دبوس الخريطة العراقي لتوزيع الشحنات المحلية', component: BaghdadHub, isBrandCustom: true },
  { name: 'StoreDoor', nameAr: 'بوابة المتجر الرقمي', category: 'brand', descriptionAr: 'واجهة متجر إلكتروني بمظلة أنيقة وتصميم زجاجي', component: StoreDoor, isBrandCustom: true },
  { name: 'IqdReceipt', nameAr: 'إيصال بالدينار العراقي', category: 'brand', descriptionAr: 'فاتورة مطبوعة برمز العملة العراقية د.ع', component: IqdReceipt, isBrandCustom: true },
  { name: 'OrderChime', nameAr: 'رنين الطلب الجديد', category: 'brand', descriptionAr: 'جرس التنبيه اللحظي عند تسجيل مبيعة جديدة', component: OrderChime, isBrandCustom: true },
  { name: 'SmartInventory', nameAr: 'مخزون ذكي متعدد الطبقات', category: 'brand', descriptionAr: 'طبقات متناسقة لإدارة الكميات والخيارات', component: SmartInventory, isBrandCustom: true },
  { name: 'DinarBadge', nameAr: 'شارة التاجر الموثوق', category: 'brand', descriptionAr: 'ختم الثقة والاعتماد الرسمي على المنصة', component: DinarBadge, isBrandCustom: true },
  { name: 'FastCourier', nameAr: 'دراجة التوصيل السريع', category: 'brand', descriptionAr: 'كابتن توصيل سريع لطلبات نفس اليوم في بغداد', component: FastCourier, isBrandCustom: true },
  { name: 'SocialToStore', nameAr: 'تحويل إنستغرام لمتجر', category: 'brand', descriptionAr: 'سحب المنتجات من حساب إنستغرام لمتجر متكامل', component: SocialToStore, isBrandCustom: true },
  { name: 'PricingTagIqd', nameAr: 'وسم السعر بالدينار', category: 'brand', descriptionAr: 'بطاقة تسعير للمنتج مع خصومات الحملات', component: PricingTagIqd, isBrandCustom: true },
  { name: 'CartCheckDinar', nameAr: 'سلة مكتملة الشراء', category: 'brand', descriptionAr: 'حقيبة تسوق مع علامة تأكيد الدفع الفوري', component: CartCheckDinar, isBrandCustom: true },
  { name: 'AiSparkleStore', nameAr: 'الذكاء الاصطناعي للمتجر', category: 'brand', descriptionAr: 'توليد أوصاف المنتجات وتحسين الصور تلقائياً', component: AiSparkleStore, isBrandCustom: true },
  { name: 'VoiceAssistant', nameAr: 'المساعد الصوتي العراقي', category: 'brand', descriptionAr: 'تسجيل الطلبات بالملاحظات الصوتية المباشرة', component: VoiceAssistant, isBrandCustom: true },
  { name: 'SafeShieldIqd', nameAr: 'درع الأمان المالي', category: 'brand', descriptionAr: 'حماية تحويلات زين كاش، سوبر كي، وبطاقات الدفع', component: SafeShieldIqd, isBrandCustom: true },
  { name: 'MerchantCrown', nameAr: 'تاج نخبة المتاجر', category: 'brand', descriptionAr: 'وسام التميز للمتاجر الأكثر مبيعاً ونمواً', component: MerchantCrown, isBrandCustom: true },
  { name: 'ReturnBox', nameAr: 'طرد المرتجع', category: 'brand', descriptionAr: 'إدارة الشحنات المرتجعة والاستبدال بسهولة', component: ReturnBox, isBrandCustom: true },
  { name: 'WhatsAppDirect', nameAr: 'مراسلة واتساب المباشرة', category: 'brand', descriptionAr: 'إرسال تفاصيل الفاتورة وتتبع الشحنة للزبون', component: WhatsAppDirect, isBrandCustom: true },
  { name: 'LiveInventory', nameAr: 'تتبع المخزون الحي', category: 'brand', descriptionAr: 'رصد فوري لكميات المنتجات ونفاد المخزون', component: LiveInventory, isBrandCustom: true },
  { name: 'AnalyticsTrend', nameAr: 'مؤشر صعود الأرباح', category: 'brand', descriptionAr: 'رسم بياني يوضح اتجاه المبيعات والأرباح', component: AnalyticsTrend, isBrandCustom: true },
  { name: 'PrintBarcode', nameAr: 'طابعة الباركود الحرارية', category: 'brand', descriptionAr: 'طباعة بوالص الشحن والباركود للطرد', component: PrintBarcode, isBrandCustom: true },
  { name: 'LiquidGlassOrb', nameAr: 'كرة الزجاج السائل', category: 'brand', descriptionAr: 'العنصر الرسومي لجمالية تأثير الزجاج المتدفق', component: LiquidGlassOrb, isBrandCustom: true },
  { name: 'SyncInstagram', nameAr: 'مزامنة إنستغرام الذاتية', category: 'brand', descriptionAr: 'تحديث تلقائي للصور والأسعار من الحساب', component: SyncInstagram, isBrandCustom: true },
  { name: 'CustomerPhone', nameAr: 'هاتف تأكيد الزبون', category: 'brand', descriptionAr: 'اتصال فوري أو رسالة SMS لتأكيد العنوان', component: CustomerPhone, isBrandCustom: true },

  // --- Navigation (13) ---
  { name: 'LayoutDashboard', nameAr: 'لوحة التحكم', category: 'navigation', descriptionAr: 'الرئيسية والشاشات التحليلية', component: LayoutDashboard },
  { name: 'Home', nameAr: 'الرئيسية', category: 'navigation', descriptionAr: 'الصفحة الرئيسية للمتجر', component: Home },
  { name: 'Store', nameAr: 'المتجر', category: 'navigation', descriptionAr: 'إدارة الواجهة العامة للمتجر', component: Store },
  { name: 'ClipboardList', nameAr: 'قوائم المهام', category: 'navigation', descriptionAr: 'سجلات المتابعة والطلبات', component: ClipboardList },
  { name: 'Package', nameAr: 'الطرود والمنتجات', category: 'navigation', descriptionAr: 'كتالوج المنتجات والطرود', component: Package },
  { name: 'FolderTree', nameAr: 'شجرة التصنيفات', category: 'navigation', descriptionAr: 'الأقسام والتصنيفات الهرمية', component: FolderTree },
  { name: 'Ticket', nameAr: 'كوبونات الخصم', category: 'navigation', descriptionAr: 'حملات التخفيضات والكوبونات', component: Ticket },
  { name: 'Radar', nameAr: 'رادار المبيعات', category: 'navigation', descriptionAr: 'مراقبة النشاط الحي للزوار', component: Radar },
  { name: 'BarChart3', nameAr: 'التقارير التحليلية', category: 'navigation', descriptionAr: 'مخططات الإيرادات والتحليلات', component: BarChart3 },
  { name: 'Palette', nameAr: 'المظهر والتخصيص', category: 'navigation', descriptionAr: 'ألوان وقوالب المتجر', component: Palette },
  { name: 'Settings', nameAr: 'الإعدادات', category: 'navigation', descriptionAr: 'إعدادات الحساب والمتجر والشحن', component: Settings },
  { name: 'Megaphone', nameAr: 'الحملات التسويقية', category: 'navigation', descriptionAr: 'الإعلانات والرسائل الترويجية', component: Megaphone },
  { name: 'Tags', nameAr: 'الوسوم والعلامات', category: 'navigation', descriptionAr: 'وسوم المنتجات والتصنيفات', component: Tags },

  // --- Order & Sales (13) ---
  { name: 'ShoppingBag', nameAr: 'حقيبة التسوق', category: 'sales', descriptionAr: 'سلة المشتريات والطلبات', component: ShoppingBag },
  { name: 'ShoppingCart', nameAr: 'عربة التسوق', category: 'sales', descriptionAr: 'عربة الشراء السريعة', component: ShoppingCart },
  { name: 'Truck', nameAr: 'شركات التوصيل', category: 'sales', descriptionAr: 'إدارة الشحنات وشركات التوصيل', component: Truck },
  { name: 'Banknote', nameAr: 'الورقة النقدية', category: 'sales', descriptionAr: 'السيولة والمدفوعات النقدية', component: Banknote },
  { name: 'HandCoins', nameAr: 'تسليم الأرباح', category: 'sales', descriptionAr: 'تحصيل الأموال والمستحقات', component: HandCoins },
  { name: 'CircleDollarSign', nameAr: 'عملة دائرية', category: 'sales', descriptionAr: 'رصيد المحفظة المالية', component: CircleDollarSign },
  { name: 'Coins', nameAr: 'العملات النقدية', category: 'sales', descriptionAr: 'الأرباح المتراكمة والعمولات', component: Coins },
  { name: 'DollarSign', nameAr: 'رمز العملة', category: 'sales', descriptionAr: 'المبالغ والقيم المالية', component: DollarSign },
  { name: 'Printer', nameAr: 'طباعة الفواتير', category: 'sales', descriptionAr: 'طباعة بوليصة الطلب والإيصال', component: Printer },
  { name: 'FileText', nameAr: 'مستند الطلب', category: 'sales', descriptionAr: 'تفاصيل عقد وفاتورة الشراء', component: FileText },
  { name: 'Phone', nameAr: 'رقم هاتف الزبون', category: 'sales', descriptionAr: 'التواصل الهاتفي مع المشتري', component: Phone },
  { name: 'MapPin', nameAr: 'عنوان التوصيل', category: 'sales', descriptionAr: 'المحافظة، المنطقة، ونقطة الدالّة', component: MapPin },

  // --- Products & Inventory (13) ---
  { name: 'PackageCheck', nameAr: 'منتج جاهز', category: 'products', descriptionAr: 'منتج تم فحصه وتجهيزه', component: PackageCheck },
  { name: 'Boxes', nameAr: 'صناديق المخزن', category: 'products', descriptionAr: 'كميات المخزون الإجمالية', component: Boxes },
  { name: 'ImagePlus', nameAr: 'إضافة صورة', category: 'products', descriptionAr: 'رفع صور المنتجات عالية الدقة', component: ImagePlus },
  { name: 'Crop', nameAr: 'قص الصورة', category: 'products', descriptionAr: 'تعديل أبعاد صورة المنتج للمتجر', component: Crop },
  { name: 'Star', nameAr: 'منتج مميز', category: 'products', descriptionAr: 'تمييز المنتج في الواجهة الرئيسية', component: Star },
  { name: 'Eye', nameAr: 'ظاهر للزبائن', category: 'products', descriptionAr: 'حالة عرض المنتج في المتجر', component: Eye },
  { name: 'EyeOff', nameAr: 'مخفي', category: 'products', descriptionAr: 'إخفاء المنتج مؤقتاً من المتجر', component: EyeOff },
  { name: 'Layers', nameAr: 'خيارات المنتج', category: 'products', descriptionAr: 'الألوان والمقاسات والأوزان', component: Layers },
  { name: 'UploadCloud', nameAr: 'رفع سحابي', category: 'products', descriptionAr: 'مزامنة المنتجات سحابياً', component: UploadCloud },
  { name: 'Trash2', nameAr: 'حذف المنتج', category: 'products', descriptionAr: 'نقل المنتج إلى سلة المهملات', component: Trash2 },
  { name: 'Pencil', nameAr: 'تعديل التفاصيل', category: 'products', descriptionAr: 'تعديل السعر والاسم والوصف', component: Pencil },
  { name: 'Plus', nameAr: 'إضافة جديدة', category: 'products', descriptionAr: 'إضافة منتج أو خيار جديد', component: Plus },
  { name: 'Minus', nameAr: 'إنقاص الكمية', category: 'products', descriptionAr: 'تقليل العدد في المخزون', component: Minus },

  // --- AI / Smart Features (10) ---
  { name: 'Bot', nameAr: 'روبوت الذكاء', category: 'ai', descriptionAr: 'مساعد المتجر الآلي للرد والفرز', component: Bot },
  { name: 'Mic', nameAr: 'الإدخال الصوتي', category: 'ai', descriptionAr: 'تحويل الصوت إلى نص الطلب', component: Mic },
  { name: 'Sparkles', nameAr: 'التحسين الذكي', category: 'ai', descriptionAr: 'تحسين تلقائي للنصوص والبيانات', component: Sparkles },
  { name: 'Lightbulb', nameAr: 'اقتراحات ذكية', category: 'ai', descriptionAr: 'توصيات لزيادة مبيعات المتجر', component: Lightbulb },
  { name: 'ShieldAlert', nameAr: 'تنبيه أمني', category: 'ai', descriptionAr: 'رصد محاولات الاحتيال أو الحسابات الوهمية', component: ShieldAlert },
  { name: 'ShieldCheck', nameAr: 'فحص الأمان', category: 'ai', descriptionAr: 'التحقق الآمن من سلامة العمليات', component: ShieldCheck },
  { name: 'Zap', nameAr: 'الأتمتة السريعة', category: 'ai', descriptionAr: 'إرسال الإشعارات والرسائل فوراً', component: Zap },
  { name: 'SlidersHorizontal', nameAr: 'ضبط الخوارزمية', category: 'ai', descriptionAr: 'تخصيص سلوك الذكاء الاصطناعي', component: SlidersHorizontal },
  { name: 'SunMedium', nameAr: 'الوضع الفاتح', category: 'ai', descriptionAr: 'مظهر الإضاءة النهارية', component: SunMedium },
  { name: 'Moon', nameAr: 'الوضع الداكن', category: 'ai', descriptionAr: 'مظهر القراءة المسائية الهادئ', component: Moon },

  // --- Notifications & Communication (10) ---
  { name: 'Bell', nameAr: 'الإشعارات', category: 'notifications', descriptionAr: 'مركز تنبيهات لوحة التحكم', component: Bell },
  { name: 'BellRing', nameAr: 'إشعار نشط', category: 'notifications', descriptionAr: 'تنبيه جديد بحاجة لمراجعة', component: BellRing },
  { name: 'BellOff', nameAr: 'كتم الإشعارات', category: 'notifications', descriptionAr: 'إيقاف التنبيهات المزعجة', component: BellOff },
  { name: 'MessageCircle', nameAr: 'المحادثات', category: 'notifications', descriptionAr: 'شات الزبائن والمتابعة', component: MessageCircle },
  { name: 'Send', nameAr: 'إرسال الرسالة', category: 'notifications', descriptionAr: 'إرسال التحديثات والشروحات', component: Send },
  { name: 'Users', nameAr: 'فريق العمل والزبائن', category: 'notifications', descriptionAr: 'قاعدة عملاء المتجر', component: Users },
  { name: 'User', nameAr: 'الملف الشخصي', category: 'notifications', descriptionAr: 'بيانات حساب التاجر', component: User },
  { name: 'Volume2', nameAr: 'صوت الإشعار', category: 'notifications', descriptionAr: 'تشغيل نغمة الطلب الجديد', component: Volume2 },
  { name: 'VolumeX', nameAr: 'صامت', category: 'notifications', descriptionAr: 'إيقاف نغمات التنبيه', component: VolumeX },
  { name: 'ExternalLink', nameAr: 'رابط خارجي', category: 'notifications', descriptionAr: 'فتح متجر الزبون في نافذة جديدة', component: ExternalLink },

  // --- Interface Actions (20) ---
  { name: 'Check', nameAr: 'تأكيد', category: 'actions', descriptionAr: 'علامة الموافقة', component: Check },
  { name: 'CheckCheck', nameAr: 'تم التسليم والمشاهدة', category: 'actions', descriptionAr: 'تمت قراءة الرسالة وتأكيد الطلب', component: CheckCheck },
  { name: 'CheckCircle2', nameAr: 'اكتمال العملية', category: 'actions', descriptionAr: 'نجاح الحفظ أو الإرسال', component: CheckCircle2 },
  { name: 'X', nameAr: 'إلغاء / إغلاق', category: 'actions', descriptionAr: 'إغلاق النافذة أو إزالة العنصر', component: X },
  { name: 'XCircle', nameAr: 'فشل / خطأ', category: 'actions', descriptionAr: 'تعذر إتمام العملية', component: XCircle },
  { name: 'AlertCircle', nameAr: 'تنبيه هام', category: 'actions', descriptionAr: 'ملاحظة تستلزم الانتباه', component: AlertCircle },
  { name: 'AlertTriangle', nameAr: 'تحذير', category: 'actions', descriptionAr: 'تحذير من حذف أو إجراء غير قابل للتراجع', component: AlertTriangle },
  { name: 'Save', nameAr: 'حفظ التعديلات', category: 'actions', descriptionAr: 'حفظ البيانات في النظام', component: Save },
  { name: 'Search', nameAr: 'البحث السريع', category: 'actions', descriptionAr: 'البحث في الطلبات والمنتجات', component: Search },
  { name: 'Copy', nameAr: 'نسخ الرابط / النص', category: 'actions', descriptionAr: 'نسخ رابط المتجر أو كود الخصم', component: Copy },
  { name: 'Download', nameAr: 'تنزيل الملف', category: 'actions', descriptionAr: 'تصدير التقارير بتنسيق Excel أو PDF', component: Download },
  { name: 'RefreshCw', nameAr: 'تحديث البيانات', category: 'actions', descriptionAr: 'إعادة مزامنة الطلبات مباشرة', component: RefreshCw },
  { name: 'RotateCcw', nameAr: 'تراجع', category: 'actions', descriptionAr: 'استعادة الحالة السابقة', component: RotateCcw },
  { name: 'ChevronDown', nameAr: 'سهم للأسفل', category: 'actions', descriptionAr: 'فتح القائمة المنسدلة', component: ChevronDown },
  { name: 'ChevronUp', nameAr: 'سهم للأعلى', category: 'actions', descriptionAr: 'طي القائمة المنسدلة', component: ChevronUp },
  { name: 'ChevronLeft', nameAr: 'سهم لليسار', category: 'actions', descriptionAr: 'الانتقال للتالي في الواجهة العربية', component: ChevronLeft },
  { name: 'ChevronRight', nameAr: 'سهم لليمين', category: 'actions', descriptionAr: 'الرجوع للسابق في الواجهة العربية', component: ChevronRight },
  { name: 'ArrowLeft', nameAr: 'انتقال لليسار', category: 'actions', descriptionAr: 'زر التوجيه إلى الأمام', component: ArrowLeft },
  { name: 'ArrowRight', nameAr: 'انتقال لليمين', category: 'actions', descriptionAr: 'زر التوجيه إلى الخلف', component: ArrowRight },
  { name: 'ArrowUpDown', nameAr: 'ترتيب وتصفية', category: 'actions', descriptionAr: 'فرز بحسب الأحدث أو الأعلى سعراً', component: ArrowUpDown },
];
