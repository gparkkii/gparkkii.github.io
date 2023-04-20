export const size = {
  '6xl': '48px',
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

export const lineHeight = {
  '6xl': '68px',
  '5xl': '56px',
  '4xl': '50px',
  '3xl': '44px',
  '2xl': '36px',
  '1xl': '32px',
  xl: '29px',
  lg: '26px',
  md: '23px',
  md1: '20px',
  sm: '20px',
  xs: '17px',
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
  headline: {
    fontFamily: 'Poppins, Pretendard, Noto Sans',
    fontSize: size['5xl'],
    fontWeight: weight['bold'],
    lineHeight: lineHeight['5xl'],
  },
  headlineMobile: {
    fontFamily: 'Poppins, Pretendard, Noto Sans',
    fontSize: size['3xl'],
    fontWeight: weight['bold'],
    lineHeight: lineHeight['3xl'],
  },
  Menu: {
    fontFamily: 'Poppins, Pretendard, Noto Sans',
    fontSize: size['3xl'],
    fontWeight: weight['medium'],
    lineHeight: lineHeight['3xl'],
  },
  Menu1: {
    fontFamily: 'Poppins, Pretendard, Noto Sans',
    fontSize: size['3xl'],
    fontWeight: weight['semibold'],
    lineHeight: lineHeight['3xl'],
  },
  Nav: {
    fontFamily: 'Poppins, Pretendard, Noto Sans',
    fontSize: '17px',
    fontWeight: weight['semibold'],
    lineHeight: '23px',
  },
  guidance1: {
    fontSize: size['5xl'],
    fontWeight: weight['medium'],
    lineHeight: lineHeight['5xl'],
  },
  guidance2: {
    fontSize: size['5xl'],
    fontWeight: weight['bold'],
    lineHeight: lineHeight['5xl'],
  },
  heading1: {
    fontSize: size['4xl'],
    fontWeight: weight['bold'],
    lineHeight: lineHeight['4xl'],
  },
  heading1mobile: {
    fontSize: size.xl,
    fontWeight: weight.semibold,
    lineHeight: lineHeight.xl,
  },
  heading2: {
    fontSize: size['1xl'],
    fontWeight: weight['bold'],
    lineHeight: lineHeight['1xl'],
  },
  heading2mobile: {
    fontSize: size.lg,
    fontWeight: weight.semibold,
    lineHeight: lineHeight.lg,
  },
  title: {
    fontSize: size.lg,
    fontWeight: weight.black,
    lineHeight: lineHeight.lg,
  },
  subtitle: {
    fontSize: size.md,
    fontWeight: weight.medium,
    lineHeight: lineHeight.md,
  },
  subtitle1: {
    fontSize: size.md,
    fontWeight: weight.semibold,
    lineHeight: lineHeight.md,
  },
  subtitle2: {
    fontSize: size.md,
    fontWeight: weight.bold,
    lineHeight: lineHeight.md,
  },
  placeholder: {
    fontSize: size.md,
    fontWeight: weight.normal,
    lineHeight: lineHeight.md,
  },
  summary: {
    fontSize: size.md1,
    fontWeight: weight.medium,
  },
  body: {
    fontSize: size.sm,
    fontWeight: weight.normal,
    lineHeight: lineHeight.sm,
  },
  body1: {
    fontSize: size.sm,
    fontWeight: weight.medium,
    lineHeight: lineHeight.sm,
  },
  body2: {
    fontSize: size.sm,
    fontWeight: weight.semibold,
    lineHeight: lineHeight.sm,
  },
  tag: {
    fontSize: size.xs,
    fontWeight: weight.semibold,
    lineHeight: lineHeight.xs,
  },
  caption: {
    fontSize: size.xs,
    fontWeight: weight.normal,
    lineHeight: lineHeight.xs,
  },
} as const;
