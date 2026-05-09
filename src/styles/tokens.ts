export const colors = {
  paper: '#EFE7D2',
  paperDeep: '#E5DBC2',
  paperRuled: '#D6CBAE',
  paperWhite: '#FBF6E8',

  ink: '#1F3540',
  inkSoft: '#3F5764',
  inkFaint: '#7B8A93',

  // surf accents
  ocean: '#7DA0AE',
  oceanDeep: '#2C5A6B',
  terracotta: '#D08461',
  terracottaDeep: '#B8623B',
  dusty: '#8FA8B4',
  dustyDeep: '#5C7785',
  gold: '#B89548',
} as const;

export const radii = {
  sm: '8px',
  md: '14px',
  lg: '22px',
} as const;

export const shadows = {
  card: '0 1px 2px rgba(20,40,55,.04), 0 8px 28px -12px rgba(20,40,55,.18)',
  lift: '0 2px 4px rgba(20,40,55,.05), 0 22px 48px -18px rgba(20,40,55,.25)',
} as const;

export const fonts = {
  serif: '"Cormorant Garamond", Georgia, serif',
  hand: '"Caveat", cursive',
  sans: '"Manrope", system-ui, -apple-system, sans-serif',
} as const;

export const breakpoints = {
  sm: '520px',
  md: '720px',
  lg: '880px',
  xl: '1180px',
} as const;

export const media = {
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
} as const;
