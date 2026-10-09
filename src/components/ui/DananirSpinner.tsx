import React from 'react';

interface DananirSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'lavender' | 'white' | 'glass';
  label?: string;
  className?: string;
}

export const DananirSpinner: React.FC<DananirSpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  label,
  className = '',
}) => {
  const sizeMap = {
    xs: { dim: 20, stroke: 2, dotR: 2, text: 'text-[10px]' },
    sm: { dim: 28, stroke: 2.5, dotR: 2.5, text: 'text-xs' },
    md: { dim: 44, stroke: 3, dotR: 3.5, text: 'text-xs' },
    lg: { dim: 64, stroke: 3.5, dotR: 5, text: 'text-sm' },
    xl: { dim: 88, stroke: 4, dotR: 6.5, text: 'text-base' },
  }[size];

  const colorConfig = {
    primary: {
      ringStart: '#3E1F47',
      ringEnd: '#9C7BB5',
      glow: 'rgba(156, 123, 181, 0.35)',
      dalFill: '#3E1F47',
      dotFill: '#9C7BB5',
      textColor: 'text-[#3E1F47]',
    },
    lavender: {
      ringStart: '#9C7BB5',
      ringEnd: '#E9E0F0',
      glow: 'rgba(233, 224, 240, 0.4)',
      dalFill: '#9C7BB5',
      dotFill: '#E9E0F0',
      textColor: 'text-[#9C7BB5]',
    },
    white: {
      ringStart: '#FFFFFF',
      ringEnd: 'rgba(255, 255, 255, 0.3)',
      glow: 'rgba(255, 255, 255, 0.3)',
      dalFill: '#FFFFFF',
      dotFill: '#E9E0F0',
      textColor: 'text-white',
    },
    glass: {
      ringStart: '#3E1F47',
      ringEnd: '#E9E0F0',
      glow: 'rgba(62, 31, 71, 0.25)',
      dalFill: '#3E1F47',
      dotFill: '#9C7BB5',
      textColor: 'text-[#1E1A22]',
    },
  }[variant];

  return (
    <div className={`inline-flex flex-col items-center justify-center gap-3 ${className}`} dir="rtl">
      <div className="relative inline-flex items-center justify-center" style={{ width: sizeMap.dim, height: sizeMap.dim }}>
        {/* Ambient liquid glow behind the spinner */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-40 animate-pulse"
          style={{ background: `radial-gradient(circle, ${colorConfig.glow} 0%, transparent 70%)` }}
        />

        {/* Orbit Ring with smooth continuous SVG spin */}
        <svg
          width={sizeMap.dim}
          height={sizeMap.dim}
          viewBox="0 0 100 100"
          className="animate-spin"
          style={{ animationDuration: '1.2s' }}
        >
          <defs>
            <linearGradient id={`dananir-spinner-grad-${variant}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorConfig.ringStart} stopOpacity="1" />
              <stop offset="60%" stopColor={colorConfig.ringEnd} stopOpacity="0.8" />
              <stop offset="100%" stopColor={colorConfig.ringEnd} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background track circle */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth={sizeMap.stroke * 2.2}
          />

          {/* Active sweeping gradient arc */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={`url(#dananir-spinner-grad-${variant}-${size})`}
            strokeWidth={sizeMap.stroke * 2.4}
            strokeLinecap="round"
            strokeDasharray="180 80"
          />
        </svg>

        {/* Center Custom Dal Mark (Signature Dananir core) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width={sizeMap.dim * 0.48}
            height={sizeMap.dim * 0.48}
            viewBox="0 0 40 40"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '1.8s' }}
          >
            {/* Soft Dal Curve */}
            <path
              d="M26 12C31 16 32 23 27 28C23 32 16 33 11 31L7 30C14 31 22 30 25 25C28 20 27 14 22 11"
              stroke={colorConfig.dalFill}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Center Dinar Pivot Dot */}
            <circle cx="16" cy="20" r="3" fill={colorConfig.dotFill} />
          </svg>
        </div>
      </div>

      {label && (
        <span className={`font-display font-medium ${sizeMap.text} ${colorConfig.textColor} tracking-tight select-none`}>
          {label}
        </span>
      )}
    </div>
  );
};

export const DananirLoadingCard: React.FC<{ message?: string; className?: string }> = ({
  message = 'جاري مزامنة بيانات المتجر لحظياً...',
  className = '',
}) => (
  <div className={`p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_12px_32px_rgba(62,31,71,0.06)] flex flex-col items-center justify-center gap-4 text-center ${className}`}>
    <DananirSpinner size="lg" variant="primary" />
    <div>
      <p className="text-sm font-bold font-display text-[#1E1A22]">{message}</p>
      <p className="text-xs text-[#8A8590] mt-1 font-latin">Dananir Secure Cloud Sync</p>
    </div>
  </div>
);
