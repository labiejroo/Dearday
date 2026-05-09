import { colors, fonts, radii, shadows, media } from './tokens';

export const theme = {
  colors,
  fonts,
  radii,
  shadows,
  media,
} as const;

export type Theme = typeof theme;
