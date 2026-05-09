'use client';

import styled from 'styled-components';

/* ---------- Painted Sun ---------- */
export function PaintedSun({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden
    >
      <g strokeWidth={6} opacity={0.75}>
        <circle cx={100} cy={100} r={34} />
        <line x1={100} y1={30} x2={100} y2={54} />
        <line x1={100} y1={146} x2={100} y2={170} />
        <line x1={30} y1={100} x2={54} y2={100} />
        <line x1={146} y1={100} x2={170} y2={100} />
        <line x1={50} y1={50} x2={66} y2={66} />
        <line x1={134} y1={134} x2={150} y2={150} />
        <line x1={150} y1={50} x2={134} y2={66} />
        <line x1={66} y1={134} x2={50} y2={150} />
      </g>
      <g strokeWidth={2} opacity={0.4} transform="translate(3,1)">
        <circle cx={100} cy={100} r={36} />
        <line x1={100} y1={28} x2={100} y2={56} />
        <line x1={100} y1={144} x2={100} y2={172} />
        <line x1={28} y1={100} x2={56} y2={100} />
        <line x1={144} y1={100} x2={172} y2={100} />
        <line x1={48} y1={48} x2={68} y2={68} />
        <line x1={132} y1={132} x2={152} y2={152} />
        <line x1={152} y1={48} x2={132} y2={68} />
        <line x1={68} y1={132} x2={48} y2={152} />
      </g>
      <circle cx={100} cy={100} r={42} strokeWidth={1} opacity={0.25} strokeDasharray="3 5" />
    </svg>
  );
}

/* ---------- Painted Palm ---------- */
export function PaintedPalm({
  className,
  style,
  color = 'var(--ocean-deep)',
}: {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 120 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      aria-hidden
    >
      <g strokeWidth={3} opacity={0.78}>
        <path d="M14 108 Q 48 60 100 18" />
        <path d="M28 92 Q 22 80 12 78" />
        <path d="M40 78 Q 32 64 20 62" />
        <path d="M54 62 Q 44 50 30 48" />
        <path d="M70 46 Q 60 32 44 32" />
        <path d="M86 30 Q 78 16 60 18" />
      </g>
      <g strokeWidth={1.4} opacity={0.42} transform="translate(2,1.5)">
        <path d="M14 108 Q 48 60 100 18" />
        <path d="M40 78 Q 32 64 20 62" />
        <path d="M70 46 Q 60 32 44 32" />
      </g>
    </svg>
  );
}

/* ---------- Painted Wave ---------- */
const WaveSvg = styled.svg`
  position: absolute;
  pointer-events: none;
  user-select: none;
`;

export function PaintedWave({
  variant = 'ocean',
  style,
}: {
  variant?: 'ocean' | 'terracotta';
  style?: React.CSSProperties;
}) {
  const stroke = variant === 'ocean' ? '#2C5A6B' : '#B8623B';
  return (
    <WaveSvg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden
      style={{
        left: '-5%',
        right: '-5%',
        width: '110%',
        height: '80px',
        opacity: variant === 'ocean' ? 0.32 : 0.28,
        ...style,
      }}
    >
      <g fill="none" stroke={stroke} strokeLinecap="round">
        <path
          d={
            variant === 'ocean'
              ? 'M0 44 C 100 14, 200 70, 300 42 S 500 14, 600 44 S 800 72, 900 42 S 1100 14, 1200 44'
              : 'M0 44 C 100 70, 200 14, 300 44 S 500 72, 600 42 S 800 14, 900 44 S 1100 70, 1200 42'
          }
          strokeWidth={3}
          opacity={0.7}
        />
        <path
          d={
            variant === 'ocean'
              ? 'M0 50 C 100 22, 200 76, 300 50 S 500 22, 600 50 S 800 78, 900 50 S 1100 22, 1200 50'
              : 'M0 52 C 120 78, 220 22, 320 52 S 520 78, 620 52 S 820 22, 920 52 S 1120 76, 1200 52'
          }
          strokeWidth={1.6}
          opacity={0.4}
        />
      </g>
    </WaveSvg>
  );
}

/* ---------- Watercolor Blob ---------- */
export function PaintedBlob({
  variant = 'ocean',
  className,
  style,
  id,
}: {
  variant?: 'ocean' | 'terracotta';
  className?: string;
  style?: React.CSSProperties;
  id: string;
}) {
  const color = variant === 'ocean' ? '#7DA0AE' : '#D08461';
  return (
    <svg
      className={className}
      style={{ position: 'absolute', pointerEvents: 'none', mixBlendMode: 'multiply', ...style }}
      viewBox="0 0 520 380"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity={0.55} />
          <stop offset="60%" stopColor={color} stopOpacity={0.15} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx={260} cy={190} rx={250} ry={170} fill={`url(#${id})`} />
    </svg>
  );
}
