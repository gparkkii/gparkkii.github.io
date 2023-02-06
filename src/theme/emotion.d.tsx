// src/styles/emotion.d.ts

import '@emotion/react';
import { darkTheme, lightTheme } from '.';
import { primary, dark, light } from './color';
import { type, size, weight } from './fonts';

declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {
    lightTheme: typeof lightTheme;
    darkTheme: typeof darkTheme;
    colors: {
      primary: typeof primary;
      light: typeof light;
      dark: typeof dark;
    };
    fonts: {
      type: typeof type;
      size: typeof size;
      weight: typeof weight;
    };
  }
}
