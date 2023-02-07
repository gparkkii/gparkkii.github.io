export const size = {
  '5xl': '40px',
  '4xl': '36px',
  '3xl': '32px',
  '2xl': '28px',
  '1xl': '25px',
  xl: '24px',
  lg: '20px',
  md: '16px',
  md1: '15px',
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
  heading1: {
    fontSize: size['2xl'],
    fontWeight: weight['semibold'],
  },
  heading2: {
    fontSize: size['1xl'],
    fontWeight: weight['semibold'],
  },
  heading3: {
    fontSize: size['lg'],
    fontWeight: weight['bold'],
  },
  title: {
    fontSize: size['md'],
    fontWeight: weight['semibold'],
  },
  subtitle: {
    fontSize: size['md'],
    fontWeight: weight['normal'],
  },
  summary: {
    fontSize: size['md1'],
    fontWeight: weight['normal'],
  },
  tag: {
    fontSize: size['xs'],
    fontWeight: weight['medium'],
  },
  caption: {
    fontSize: '13px',
    fontWeight: weight['normal'],
  },
} as const;
