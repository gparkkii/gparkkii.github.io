export const size = {
  '5xl': '40px',
  '4xl': '36px',
  '3xl': '32px',
  '2xl': '28px',
  xl: '24px',
  lg: '20px',
  md: '16px',
  sm: '14px',
  xs: '12px',
} as const;

export const weight = {
  light: 200,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 800,
};

export const type = {
  heading: {
    fontSize: size['3xl'],
    fontWeight: weight['semibold'],
  },
  subtitle: {
    fontSize: size['md'],
    fontWeight: weight['normal'],
  },
  tag: {
    fontSize: size['sm'],
    fontWeight: weight['medium'],
  },
  caption: {
    fontSize: size['sm'],
    fontWeight: weight['normal'],
  },
} as const;
