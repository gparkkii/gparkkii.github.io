import { primary, dark, light } from './color';
import { type, size, weight } from './fonts';

export const lightTheme = {
  backgroundColor: light.default,
  postCard: {
    hover: light[50],
  },
  text: {
    primary: primary.default,
    white: light.default,
    black: dark[0],
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
  },
  colors: {
    primary,
    light,
    dark,
  },
};
