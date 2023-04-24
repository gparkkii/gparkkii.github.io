import { primary, dark, light, secondary, bluegray } from './color';
import { type, size, weight, lineHeight } from './fonts';

export * from './color';
export * from './fonts';
export * from './breakpoints';

export const lightTheme = {
  backgroundColor: light.default,
  postCard: {
    hover: light[50],
  },
  text: {
    primary: primary.default,
    white: light.default,
    black: dark.default,
    dark,
    light,
  },
} as const;

export const darkTheme = {
  backgroundColor: dark.default,
} as const;

export const theme = {
  lightTheme,
  darkTheme,
  fonts: {
    type,
    weight,
    size,
    lineHeight,
  },
  colors: {
    primary,
    light,
    dark,
    bluegray,
    secondary,
  },
};
