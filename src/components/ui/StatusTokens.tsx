import React from 'react';
import {
  Clock,
  Package,
  Box,
  Truck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Percent,
} from 'lucide-react';

/* =====================================================================
   1. ORDER STATUS SYSTEM (6 States)
   ===================================================================== */

export type OrderStatusKey = 'pending' | 'preparing' | 'packaging' | 'shipped' | 'delivered' | 'cancelled';

export interface StatusTokenDef {
  key: OrderStatusKey;
  labelAr: string;
  labelEn: string;
  descAr: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  dotColor: string;
  hex: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ORDER_STATUS_SYSTEM: Record<OrderStatusKey, StatusTokenDef> = {
  pending: {
    key: 'pending',
    labelAr: 'قيد الانتظار',
    labelEn: 'Pending Review',
    descAr: 'طلب جديد بانتظار مراجعة التاجر وتأكيد توفر البضاعة',
    bgClass: 'bg-[#FFF8E6]',
    borderClass: 'border-[#F2C94C]',
    textClass: 'text-[#946100]',
    dotColor: '#D9822B',
    hex: '#D9822B',
    icon: Clock,
  },
  preparing: {
    key: 'preparing',
    labelAr: 'قيد التجهيز',
    labelEn: 'Preparing',
    descAr: 'المتجر يجهز تفاصيل ومقاسات المنتجات في المستودع',
    bgClass: 'bg-[#EEF2FF]',
    borderClass: 'border-[#C7D2FE]',
    textClass: 'text-[#3730A3]',
    dotColor: '#6366F1',
    hex: '#6366F1',
    icon: Package,
  },
  packaging: {
    key: 'packaging',
    labelAr: 'قيد التغليف',
    labelEn: 'Packaging',
    descAr: 'تغليف الطرد وطباعة بوليصة الشحن مع ملصق دنانير',
    bgClass: 'bg-[#FAF5FF]',
    borderClass: 'border-[#E9D5FF]',
    textClass: 'text-[#6B21A8]',
    dotColor: '#9C7BB5',
    hex: '#9C7BB5',
    icon: Box,
  },
  shipped: {
    key: 'shipped',
    labelAr: 'تم الشحن',
    labelEn: 'Shipped / In Transit',
    descAr: 'الشحنة لدى مندوب التوصيل في طريقها لعنوان الزبون',
    bgClass: 'bg-[#ECFEFF]',
    borderClass: 'border-[#A5F3FC]',
    textClass: 'text-[#0E7490]',
    dotColor: '#06B6D4',
    hex: '#06B6D4',
    icon: Truck,
  },
  delivered: {
    key: 'delivered',
    labelAr: 'تم التوصيل',
    labelEn: 'Delivered',
    descAr: 'استلم المشتري الطرد وتم تحصيل المبلغ نقداً أو إلكترونياً',
    bgClass: 'bg-[#ECFDF5]',
    borderClass: 'border-[#A7F3D0]',
    textClass: 'text-[#065F46]',
    dotColor: '#10B981',
    hex: '#10B981',
    icon: CheckCircle2,
  },
  cancelled: {
    key: 'cancelled',
    labelAr: 'ملغي',
    labelEn: 'Cancelled',
    descAr: 'تم إلغاء الطلب من الزبون أو التاجر دون تحصيل',
    bgClass: 'bg-[#FFF1F2]',
    borderClass: 'border-[#FECDD3]',
    textClass: 'text-[#9F1239]',
    dotColor: '#F43F5E',
    hex: '#F43F5E',
    icon: XCircle,
  },
};

export const OrderStatusBadge: React.FC<{
  status: OrderStatusKey;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}> = ({ status, size = 'md', showIcon = true, className = '' }) => {
  const def = ORDER_STATUS_SYSTEM[status] || ORDER_STATUS_SYSTEM.pending;
  const IconComp = def.icon;

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-bold',
  }[size];

  return (
    <span
      className={`inline-flex items-center rounded-lg border font-medium font-display transition-all ${def.bgClass} ${def.borderClass} ${def.textClass} ${sizeClasses} ${className}`}
      dir="rtl"
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: def.dotColor }} />
      {showIcon && <IconComp className="w-3.5 h-3.5 shrink-0 stroke-[2]" />}
      <span>{def.labelAr}</span>
    </span>
  );
};

/* =====================================================================
   2. INVENTORY STATUS SYSTEM (3 States)
   ===================================================================== */

export type InventoryStatusKey = 'in_stock' | 'low_stock' | 'out_of_stock';

export interface InventoryTokenDef {
  key: InventoryStatusKey;
  labelAr: string;
  labelEn: string;
  descAr: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  dotColor: string;
  hex: string;
}

export const INVENTORY_STATUS_SYSTEM: Record<InventoryStatusKey, InventoryTokenDef> = {
  in_stock: {
    key: 'in_stock',
    labelAr: 'متوفر في المخزون',
    labelEn: 'In Stock',
    descAr: 'الكمية كافية وتسمح بالطلب المباشر دون قيود',
    bgClass: 'bg-[#ECFDF5]',
    borderClass: 'border-[#A7F3D0]',
    textClass: 'text-[#065F46]',
    dotColor: '#10B981',
    hex: '#10B981',
  },
  low_stock: {
    key: 'low_stock',
    labelAr: 'أوشك على النفاد',
    labelEn: 'Low Stock (< 5 pcs)',
    descAr: 'الكمية المتبقية 5 قطع أو أقل بحاجة لإعادة الشراء',
    bgClass: 'bg-[#FFFBEB]',
    borderClass: 'border-[#FDE68A]',
    textClass: 'text-[#92400E]',
    dotColor: '#F59E0B',
    hex: '#F59E0B',
  },
  out_of_stock: {
    key: 'out_of_stock',
    labelAr: 'نفد من المخزون',
    labelEn: 'Out of Stock',
    descAr: 'لا تتوفر أي قطعة حالياً والزر يتحول لتنبيه عند التوفر',
    bgClass: 'bg-[#FEF2F2]',
    borderClass: 'border-[#FECACA]',
    textClass: 'text-[#991B1B]',
    dotColor: '#EF4444',
    hex: '#EF4444',
  },
};

export const InventoryStatusBadge: React.FC<{
  status: InventoryStatusKey;
  quantity?: number;
  className?: string;
}> = ({ status, quantity, className = '' }) => {
  const def = INVENTORY_STATUS_SYSTEM[status];
  return (
    <span
      className={`inline-flex items-center rounded-lg border text-xs px-2.5 py-1 gap-1.5 font-medium font-display ${def.bgClass} ${def.borderClass} ${def.textClass} ${className}`}
      dir="rtl"
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: def.dotColor }} />
      <span>{def.labelAr}</span>
      {quantity !== undefined && (
        <span className="font-latin font-bold text-[11px] opacity-80">({quantity})</span>
      )}
    </span>
  );
};

/* =====================================================================
   3. ANALYTICS COLOR SYSTEM (5 Metrics)
   ===================================================================== */

export type AnalyticsMetricKey = 'revenue' | 'orders' | 'conversion' | 'warnings' | 'growth';

export interface AnalyticsTokenDef {
  key: AnalyticsMetricKey;
  labelAr: string;
  labelEn: string;
  descAr: string;
  primaryColor: string;
  softBg: string;
  gradient: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ANALYTICS_COLOR_SYSTEM: Record<AnalyticsMetricKey, AnalyticsTokenDef> = {
  revenue: {
    key: 'revenue',
    labelAr: 'صافي الإيرادات',
    labelEn: 'Revenue (IQD)',
    descAr: 'إجمالي المبيعات المحصلة بالدينار العراقي',
    primaryColor: '#3E1F47',
    softBg: 'bg-[#FAF5FF]',
    gradient: 'from-[#3E1F47] to-[#9C7BB5]',
    icon: DollarSign,
  },
  orders: {
    key: 'orders',
    labelAr: 'عدد الطلبات',
    labelEn: 'Total Orders',
    descAr: 'عدد الشحنات المنفذة والطلبات المعتمدة',
    primaryColor: '#6B21A8',
    softBg: 'bg-[#F3E8FF]',
    gradient: 'from-[#6B21A8] to-[#C084FC]',
    icon: ShoppingBag,
  },
  conversion: {
    key: 'conversion',
    labelAr: 'معدل التحويل',
    labelEn: 'Conversion Rate',
    descAr: 'نسبة الزوار الذين أكملوا عملية الشراء بنجاح',
    primaryColor: '#059669',
    softBg: 'bg-[#ECFDF5]',
    gradient: 'from-[#059669] to-[#34D399]',
    icon: Percent,
  },
  warnings: {
    key: 'warnings',
    labelAr: 'التنبيهات والمرتجعات',
    labelEn: 'Returns & Alerts',
    descAr: 'الشحنات المرفوضة أو العناوين غير المؤكدة',
    primaryColor: '#D97706',
    softBg: 'bg-[#FFFBEB]',
    gradient: 'from-[#D97706] to-[#FBBF24]',
    icon: AlertTriangle,
  },
  growth: {
    key: 'growth',
    labelAr: 'معدل النمو',
    labelEn: 'MoM Growth',
    descAr: 'نسبة زيادة المبيعات مقارنة بالشهر السابق',
    primaryColor: '#0D9488',
    softBg: 'bg-[#F0FDFA]',
    gradient: 'from-[#0D9488] to-[#2DD4BF]',
    icon: TrendingUp,
  },
};
