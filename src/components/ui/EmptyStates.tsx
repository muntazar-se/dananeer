import React from 'react';

interface EmptyStateCardProps {
  title: string;
  description: string;
  actionLabel?: string;
  secondaryActionLabel?: string;
  onAction?: () => void;
  onSecondaryAction?: () => void;
  illustration: React.ReactNode;
  badgeText?: string;
}

const EmptyStateContainer: React.FC<EmptyStateCardProps> = ({
  title,
  description,
  actionLabel,
  secondaryActionLabel,
  onAction,
  onSecondaryAction,
  illustration,
  badgeText,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 p-8 sm:p-10 text-center flex flex-col items-center max-w-lg mx-auto shadow-[0_12px_36px_rgba(62,31,71,0.05)]" dir="rtl">
      {/* Ambient background glow */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#9C7BB5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#3E1F47]/10 rounded-full blur-3xl pointer-events-none" />

      {badgeText && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E0F0] text-[#3E1F47] text-xs font-semibold font-display mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9C7BB5] animate-ping" />
          {badgeText}
        </span>
      )}

      {/* Custom Illustration */}
      <div className="mb-6 w-full flex items-center justify-center">
        {illustration}
      </div>

      {/* Typography */}
      <h3 className="text-xl font-bold font-display text-[#1E1A22] mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-[#8A8590] leading-relaxed max-w-sm mb-6">{description}</p>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full">
        {actionLabel && (
          <button
            onClick={onAction}
            className="px-5 py-2.5 rounded-xl bg-[#3E1F47] hover:bg-[#2A1530] text-white text-xs sm:text-sm font-bold font-display shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            {actionLabel}
          </button>
        )}
        {secondaryActionLabel && (
          <button
            onClick={onSecondaryAction}
            className="px-4 py-2.5 rounded-xl bg-white/80 hover:bg-white text-[#3E1F47] border border-[#ECEAEF] text-xs sm:text-sm font-medium font-display transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            {secondaryActionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * 1. Empty Orders Illustration & Component
 */
export const EmptyOrdersState: React.FC<{ onShare?: () => void; onCreate?: () => void }> = ({
  onShare,
  onCreate,
}) => {
  const illustration = (
    <svg width="220" height="150" viewBox="0 0 220 150" fill="none" className="drop-shadow-sm">
      <defs>
        <radialGradient id="bag-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E9E0F0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E9E0F0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Background Soft Circle */}
      <circle cx="110" cy="75" r="62" fill="url(#bag-glow)" />

      {/* Subtle dashed radar rings */}
      <circle cx="110" cy="75" r="54" stroke="#C9C5CE" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="110" cy="75" r="40" stroke="#C9C5CE" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

      {/* Floor Shadow */}
      <ellipse cx="110" cy="122" rx="46" ry="7" fill="#1E1A22" fillOpacity="0.06" />

      {/* Bag Handle */}
      <path
        d="M95 62V50C95 41.7 101.7 35 110 35C118.3 35 125 41.7 125 50V62"
        stroke="#3E1F47"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Shopping Bag Body */}
      <path
        d="M78 62L85 118H135L142 62H78Z"
        fill="#FFFFFF"
        stroke="#3E1F47"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Dal Brand Coin Emblem on Bag */}
      <circle cx="110" cy="88" r="14" fill="#F7F5F8" stroke="#9C7BB5" strokeWidth="1.5" />
      <path
        d="M115 84C118 86.5 118.5 90.5 115 93C112 95 107.5 95.5 104 94"
        stroke="#3E1F47"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="108" cy="89" r="2" fill="#9C7BB5" />

      {/* Floating Dinar Sparkles */}
      <path d="M152 46L154 52L160 54L154 56L152 62L150 56L144 54L150 52Z" fill="#9C7BB5" />
      <path d="M68 82L69.5 86.5L74 88L69.5 89.5L68 94L66.5 89.5L62 88L66.5 86.5Z" fill="#9C7BB5" opacity="0.7" />

      {/* Notification Dot */}
      <circle cx="136" cy="62" r="5" fill="#2E8B6A" />
      <circle cx="136" cy="62" r="2" fill="white" />
    </svg>
  );

  return (
    <EmptyStateContainer
      title="لا توجد طلبات واردة حالياً"
      description="عندما يطلب الزبائن عبر رابط متجرك أو صفحة إنستغرام، ستظهر الطلبات هنا فوراً وستسمع نغمة التنبيه الصوتية."
      badgeText="بانتظار أول طلب"
      actionLabel="مشاركة رابط المتجر"
      secondaryActionLabel="تسجيل طلب يدوي"
      illustration={illustration}
      onAction={onShare}
      onSecondaryAction={onCreate}
    />
  );
};

/**
 * 2. Empty Products Illustration & Component
 */
export const EmptyProductsState: React.FC<{ onAdd?: () => void; onImportInstagram?: () => void }> = ({
  onAdd,
  onImportInstagram,
}) => {
  const illustration = (
    <svg width="220" height="150" viewBox="0 0 220 150" fill="none" className="drop-shadow-sm">
      <defs>
        <radialGradient id="box-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E9E0F0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E9E0F0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Background Soft Circle */}
      <circle cx="110" cy="75" r="62" fill="url(#box-glow)" />

      {/* Ground Shadow */}
      <ellipse cx="110" cy="122" rx="52" ry="7" fill="#1E1A22" fillOpacity="0.06" />

      {/* 3D Box Open Back */}
      <path
        d="M72 65L110 46L148 65L110 84L72 65Z"
        fill="#FFFFFF"
        stroke="#3E1F47"
        strokeWidth="2"
      />
      {/* Box Left Side */}
      <path
        d="M72 65V106L110 124V84L72 65Z"
        fill="#F7F5F8"
        stroke="#3E1F47"
        strokeWidth="2"
      />
      {/* Box Right Side */}
      <path
        d="M148 65V106L110 124V84L148 65Z"
        fill="#ECEAEF"
        stroke="#3E1F47"
        strokeWidth="2"
      />

      {/* Dashed Item Slot Inside Box */}
      <path
        d="M110 58L130 68L110 78L90 68Z"
        stroke="#9C7BB5"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />

      {/* Upload Arrow / Sparkle Rising */}
      <g transform="translate(100, 26)">
        <circle cx="10" cy="10" r="14" fill="#3E1F47" />
        <path d="M10 14V6M10 6L7 9M10 6L13 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Small floating Instagram icon pill */}
      <rect x="144" y="82" width="28" height="28" rx="8" fill="#FFFFFF" stroke="#ECEAEF" strokeWidth="1.5" />
      <rect x="150" y="88" width="16" height="16" rx="4" stroke="#9C7BB5" strokeWidth="1.5" />
      <circle cx="158" cy="96" r="3" stroke="#9C7BB5" strokeWidth="1.5" />
      <circle cx="162" cy="91" r="0.8" fill="#9C7BB5" />
    </svg>
  );

  return (
    <EmptyStateContainer
      title="متجرك بانتظار منتجاتك الأولى"
      description="أضف منتجاتك يدوياً بتحديد الصور والأسعار، أو اسحب منشورات حسابك على إنستغرام بضغطة زر وتوليد وصف بالذكاء الاصطناعي."
      badgeText="المخزون فارغ"
      actionLabel="إضافة منتج جديد"
      secondaryActionLabel="استيراد من إنستغرام"
      illustration={illustration}
      onAction={onAdd}
      onSecondaryAction={onImportInstagram}
    />
  );
};

/**
 * 3. Empty Analytics Illustration & Component
 */
export const EmptyAnalyticsState: React.FC<{ onRunCampaign?: () => void; onRefresh?: () => void }> = ({
  onRunCampaign,
  onRefresh,
}) => {
  const illustration = (
    <svg width="220" height="150" viewBox="0 0 220 150" fill="none" className="drop-shadow-sm">
      <defs>
        <radialGradient id="chart-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E9E0F0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E9E0F0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Background Soft Circle */}
      <circle cx="110" cy="75" r="62" fill="url(#chart-glow)" />

      {/* Chart Canvas Card */}
      <rect x="55" y="38" width="110" height="74" rx="12" fill="#FFFFFF" stroke="#3E1F47" strokeWidth="2" />
      <rect x="62" y="45" width="96" height="60" rx="6" fill="#F7F5F8" />

      {/* Grid Lines */}
      <line x1="68" y1="58" x2="152" y2="58" stroke="#ECEAEF" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="68" y1="72" x2="152" y2="72" stroke="#ECEAEF" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="68" y1="86" x2="152" y2="86" stroke="#ECEAEF" strokeWidth="1" strokeDasharray="2 2" />

      {/* Empty Pulse Sine Wave with Dotted Line */}
      <path
        d="M68 90C78 90 84 76 94 76C104 76 110 82 120 82C130 82 136 62 146 62"
        stroke="#9C7BB5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 3"
      />

      {/* Future Peak Dot */}
      <circle cx="146" cy="62" r="3.5" fill="#3E1F47" stroke="white" strokeWidth="1.5" />

      {/* Center Radar Searching Lens */}
      <g transform="translate(110, 75)">
        <circle cx="0" cy="0" r="16" fill="white" stroke="#3E1F47" strokeWidth="2" />
        <path d="M-6 -6L-2 -2" stroke="#3E1F47" strokeWidth="2" strokeLinecap="round" />
        <path d="M0 -8A8 8 0 0 1 8 0" stroke="#9C7BB5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="0" cy="0" r="2.5" fill="#9C7BB5" />
      </g>
    </svg>
  );

  return (
    <EmptyStateContainer
      title="لا تتوفر بيانات تحليلية كافية بعد"
      description="يبدأ رادار التحليلات برسم منحنيات الإيرادات ومصادر الزيارات تلقائياً بمجرد تسجيل أول 5 زيارات أو طلبية شراء في متجرك."
      badgeText="بانتظار حركة المرور"
      actionLabel="مشاركة المتجر لجمع الزيارات"
      secondaryActionLabel="تحديث المؤشرات"
      illustration={illustration}
      onAction={onRunCampaign}
      onSecondaryAction={onRefresh}
    />
  );
};
