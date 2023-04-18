// src/styles/emotion.d.ts

import '@emotion/react';
import { darkTheme, lightTheme } from '.';
import { primary, dark, light, secondary, bluegray } from './color';
import { type, size, weight, lineHeight } from './fonts';

declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {
    lightTheme: typeof lightTheme;
    darkTheme: typeof darkTheme;
    colors: {
      primary: typeof primary;
      secondary: typeof secondary;
      bluegray: typeof bluegray;
      light: typeof light;
      dark: typeof dark;
    };
    fonts: {
      type: typeof type;
      size: typeof size;
      lineHeight: typeof lineHeight;
      weight: typeof weight;
    };
  }
}
