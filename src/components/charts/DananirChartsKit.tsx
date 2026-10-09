import React, { useState, useMemo } from 'react';
import { TrendingUp } from 'lucide-react';

/* =====================================================================
   1. DANANIR LINE CHART (Revenue & Growth Curve)
   ===================================================================== */

interface LineDataPoint {
  label: string;
  value: number; // in thousands IQD
  orders: number;
}

const DEFAULT_LINE_DATA: LineDataPoint[] = [
  { label: 'السبت', value: 420, orders: 18 },
  { label: 'الأحد', value: 680, orders: 27 },
  { label: 'الإثنين', value: 590, orders: 24 },
  { label: 'الثلاثاء', value: 890, orders: 39 },
  { label: 'الأربعاء', value: 1150, orders: 48 },
  { label: 'الخميس', value: 1680, orders: 72 },
  { label: 'الجمعة', value: 1940, orders: 85 },
];

export const DananirLineChart: React.FC<{ data?: LineDataPoint[]; className?: string }> = ({
  data = DEFAULT_LINE_DATA,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(data.length - 1);

  const width = 560;
  const height = 220;
  const paddingX = 40;
  const paddingY = 30;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = 0;

  const points = data.map((d, index) => {
    const x = paddingX + (index / (data.length - 1)) * (width - paddingX * 2);
    const y = height - paddingY - ((d.value - minValue) / (maxValue - minValue)) * (height - paddingY * 2);
    return { x, y, ...d };
  });

  // Build smooth bezier path
  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const mx = (p0.x + p1.x) / 2;
    pathD += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
  }

  const fillD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  const activePoint = points[activeIndex];

  return (
    <div className={`p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(62,31,71,0.05)] ${className}`} dir="rtl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3E1F47]" />
            <h4 className="text-base font-bold font-display text-[#1E1A22]">منحنى الإيرادات الأسبوعية</h4>
          </div>
          <p className="text-xs text-[#8A8590] mt-0.5">مبيعات المتجر المحصلة بالدينار العراقي (IQD)</p>
        </div>
        <div className="flex items-center gap-2 bg-[#F7F5F8] px-3 py-1.5 rounded-xl border border-[#ECEAEF]">
          <TrendingUp className="w-4 h-4 text-[#2E8B6A]" />
          <span className="text-xs font-bold text-[#2E8B6A] font-latin">+28.4%</span>
          <span className="text-[11px] text-[#8A8590]">مقارنة بالأسبوع الفائت</span>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          <defs>
            <linearGradient id="dananir-chart-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9C7BB5" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#E9E0F0" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E9E0F0" stopOpacity="0" />
            </linearGradient>
            <filter id="chart-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3E1F47" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Grid lines */}
          {[0.25, 0.5, 0.75, 1].map((ratio, idx) => {
            const y = height - paddingY - ratio * (height - paddingY * 2);
            return (
              <line
                key={idx}
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="#ECEAEF"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            );
          })}

          {/* Area Fill */}
          <path d={fillD} fill="url(#dananir-chart-gradient)" />

          {/* Line Stroke */}
          <path
            d={pathD}
            fill="none"
            stroke="#3E1F47"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#chart-glow)"
          />

          {/* Interactive Points */}
          {points.map((p, idx) => {
            const isActive = idx === activeIndex;
            return (
              <g
                key={idx}
                className="cursor-pointer transition-all"
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
              >
                {isActive && (
                  <circle cx={p.x} cy={p.y} r="10" fill="#9C7BB5" fillOpacity="0.25" className="animate-ping" />
                )}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isActive ? '6' : '4'}
                  fill={isActive ? '#3E1F47' : '#FFFFFF'}
                  stroke="#3E1F47"
                  strokeWidth="2.5"
                />
              </g>
            );
          })}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between px-6 pt-2 text-[11px] text-[#8A8590] font-display">
          {data.map((d, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`hover:text-[#3E1F47] transition-colors ${
                idx === activeIndex ? 'font-bold text-[#3E1F47] underline underline-offset-4' : ''
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Point Popover Summary */}
      {activePoint && (
        <div className="mt-4 p-3 rounded-xl bg-[#F7F5F8] border border-[#ECEAEF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#3E1F47] font-display">{activePoint.label}:</span>
            <span className="text-[#8A8590]">عدد الطلبات المنجزة: {activePoint.orders} طلب</span>
          </div>
          <div className="font-display font-extrabold text-[#3E1F47] text-sm">
            {activePoint.value.toLocaleString()} ألف د.ع
          </div>
        </div>
      )}
    </div>
  );
};

/* =====================================================================
   2. DANANIR DONUT CHART (Sales Channels Distribution)
   ===================================================================== */

interface DonutSegment {
  label: string;
  share: number; // percentage
  color: string;
  revenue: string;
}

const DONUT_DATA: DonutSegment[] = [
  { label: 'متجر إنستغرام التلقائي', share: 58, color: '#3E1F47', revenue: '4.2M د.ع' },
  { label: 'المتجر الإلكتروني المباشر', share: 28, color: '#9C7BB5', revenue: '2.0M د.ع' },
  { label: 'محادثات واتساب وتيليجرام', share: 14, color: '#2E8B6A', revenue: '1.0M د.ع' },
];

export const DananirDonutChart: React.FC<{ className?: string }> = ({ className = '' }) => {
  const size = 180;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Precompute segment dash lengths and offsets functionally with zero mutation
  const calculatedSegments = useMemo(() => {
    return DONUT_DATA.map((seg, idx) => {
      const dashLength = (seg.share / 100) * circumference;
      const priorShareSum = DONUT_DATA.slice(0, idx).reduce((sum, s) => sum + s.share, 0);
      const dashOffset = -((priorShareSum / 100) * circumference);
      return { ...seg, dashLength, dashOffset };
    });
  }, [circumference]);

  return (
    <div className={`p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(62,31,71,0.05)] flex flex-col justify-between ${className}`} dir="rtl">
      <div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9C7BB5]" />
          <h4 className="text-base font-bold font-display text-[#1E1A22]">قنوات تدفق المبيعات</h4>
        </div>
        <p className="text-xs text-[#8A8590] mt-0.5">نسب المبيعات بحسب مصدر الزبون</p>
      </div>

      <div className="my-6 flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* SVG Donut Circle */}
        <div className="relative inline-flex items-center justify-center shrink-0">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
            {calculatedSegments.map((seg, idx) => (
              <circle
                key={idx}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${seg.dashLength} ${circumference - seg.dashLength}`}
                strokeDashoffset={seg.dashOffset}
                strokeLinecap="round"
                className="transition-all hover:opacity-85"
              />
            ))}
          </svg>

          {/* Donut Center Core */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs text-[#8A8590] font-display">إجمالي الشهر</span>
            <span className="text-lg font-extrabold font-display text-[#3E1F47]">7.2M</span>
            <span className="text-[10px] text-[#8A8590] font-display">دينار عراقي</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 w-full sm:w-auto">
          {DONUT_DATA.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between sm:justify-start gap-3 text-xs">
              <span className="w-3 h-3 rounded-md shrink-0" style={{ backgroundColor: item.color }} />
              <div className="flex flex-col">
                <span className="font-bold font-display text-[#1E1A22]">{item.label}</span>
                <span className="text-[11px] text-[#8A8590] font-latin">{item.revenue}</span>
              </div>
              <span className="font-extrabold font-display text-[#3E1F47] mr-auto sm:mr-4">{item.share}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-[#F7F5F8] border border-[#ECEAEF] text-[11px] text-[#8A8590] text-center">
        تكامل تلقائي بدون وسيط: يتزامن مباشرة مع خوارزمية الربط العراقي.
      </div>
    </div>
  );
};

/* =====================================================================
   3. IRAQ MAP DELIVERY HUBS & PINS (خريطة العراق للتوصيل)
   ===================================================================== */

interface IraqHubPin {
  cityAr: string;
  cityEn: string;
  xPercent: number; // SVG coordinate
  yPercent: number;
  ordersShare: string;
  avgTime: string;
  volume: 'high' | 'medium';
}

const IRAQ_HUBS: IraqHubPin[] = [
  { cityAr: 'بغداد (العاصمة)', cityEn: 'Baghdad', xPercent: 54, yPercent: 48, ordersShare: '48%', avgTime: '24 ساعة', volume: 'high' },
  { cityAr: 'البصرة', cityEn: 'Basra', xPercent: 78, yPercent: 82, ordersShare: '21%', avgTime: '36 ساعة', volume: 'high' },
  { cityAr: 'أربيل', cityEn: 'Erbil', xPercent: 44, yPercent: 18, ordersShare: '14%', avgTime: '24-48 ساعة', volume: 'medium' },
  { cityAr: 'النجف الأشرف', cityEn: 'Najaf', xPercent: 50, yPercent: 62, ordersShare: '8%', avgTime: '24 ساعة', volume: 'medium' },
  { cityAr: 'الموصل (نينوى)', cityEn: 'Nineveh / Mosul', xPercent: 32, yPercent: 16, ordersShare: '5%', avgTime: '48 ساعة', volume: 'medium' },
  { cityAr: 'السليمانية', cityEn: 'Sulaymaniyah', xPercent: 60, yPercent: 24, ordersShare: '4%', avgTime: '48 ساعة', volume: 'medium' },
];

export const IraqMapPinsChart: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedHub, setSelectedHub] = useState<IraqHubPin>(IRAQ_HUBS[0]);

  return (
    <div className={`p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(62,31,71,0.05)] ${className}`} dir="rtl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3E1F47]" />
            <h4 className="text-base font-bold font-display text-[#1E1A22]">خريطة شحنات المحافظات العراقية</h4>
          </div>
          <p className="text-xs text-[#8A8590] mt-0.5">تغطية شبكة التوصيل والدفع عند الاستلام بجميع المحافظات</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#E9E0F0] text-[#3E1F47] font-display">
          18 محافظة مدعومة
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Interactive Stylized Schematic Map of Iraq */}
        <div className="lg:col-span-7 relative h-72 sm:h-80 rounded-2xl bg-[#F7F5F8] border border-[#ECEAEF] overflow-hidden p-4 flex items-center justify-center">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Iraq Silhouette simplified polygon */}
            <path
              d="M 60 45 L 140 25 L 205 60 L 220 100 L 195 140 L 260 210 L 250 265 L 210 260 L 160 210 L 130 190 L 70 170 L 40 100 Z"
              fill="#ECEAEF"
              stroke="#C9C5CE"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Tigris & Euphrates River schematic curves */}
            <path
              d="M 80 40 Q 120 100 160 150 T 240 250"
              fill="none"
              stroke="#A5F3FC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 50 80 Q 110 130 145 170 T 235 255"
              fill="none"
              stroke="#A5F3FC"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Hub Pins */}
            {IRAQ_HUBS.map((hub, idx) => {
              const cx = (hub.xPercent / 100) * 300;
              const cy = (hub.yPercent / 100) * 300;
              const isSelected = selectedHub.cityAr === hub.cityAr;

              return (
                <g
                  key={idx}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedHub(hub)}
                >
                  {/* Ping Animation */}
                  {isSelected && (
                    <circle cx={cx} cy={cy} r="14" fill="#9C7BB5" fillOpacity="0.4" className="animate-ping" />
                  )}
                  {/* Pin outer aura */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 9 : 6}
                    fill={isSelected ? '#3E1F47' : '#9C7BB5'}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  {/* Pin inner dot */}
                  <circle cx={cx} cy={cy} r={isSelected ? 3.5 : 2} fill="#FFFFFF" />

                  {/* Label */}
                  <text
                    x={cx}
                    y={cy - 12}
                    textAnchor="middle"
                    fill={isSelected ? '#3E1F47' : '#8A8590'}
                    fontSize={isSelected ? '10' : '8'}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    fontFamily="sans-serif"
                  >
                    {hub.cityAr.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Hub Details Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-[#F7F5F8] border border-[#ECEAEF] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-extrabold font-display text-base text-[#1E1A22]">{selectedHub.cityAr}</h5>
                <span className="text-[11px] text-[#8A8590] font-latin">{selectedHub.cityEn} Distribution Hub</span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#3E1F47] text-white font-display font-bold">
                {selectedHub.ordersShare} من المبيعات
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#ECEAEF] text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-[#ECEAEF]">
                <span className="text-[10px] text-[#8A8590] block">متوسط زمن التوصيل:</span>
                <strong className="text-[#3E1F47] font-display">{selectedHub.avgTime}</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-[#ECEAEF]">
                <span className="text-[10px] text-[#8A8590] block">طريقة التحصيل:</span>
                <strong className="text-[#2E8B6A] font-display">كاش عند الباب</strong>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#8A8590] block font-display">اختر محافظة للاستعراض السريع:</span>
            <div className="flex flex-wrap gap-1.5">
              {IRAQ_HUBS.map((hub, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHub(hub)}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-display transition-all cursor-pointer ${
                    selectedHub.cityAr === hub.cityAr
                      ? 'bg-[#3E1F47] text-white border-[#3E1F47]'
                      : 'bg-white text-[#1E1A22] border-[#ECEAEF] hover:border-[#9C7BB5]'
                  }`}
                >
                  {hub.cityAr.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
