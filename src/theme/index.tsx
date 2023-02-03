import { primary, dark, light } from './color';

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
  colors: {
    primary,
    light,
    dark,
  },
};
