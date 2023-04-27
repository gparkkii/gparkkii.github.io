import styled from '@emotion/styled';
import { mediaQuery } from '../theme/breakpoints';

interface TypographyProps {
  textColor?: string;
}

interface FontWeightProps extends TypographyProps {
  textColor?: string;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  regular?: boolean;
}

export const Headline = styled.h1<TypographyProps>`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.type.headline};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.headlineMobile};
  }
`;

export const Headline2 = styled.h1<TypographyProps>`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.type.headline2};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.headline2Mobile};
  }
`;

export const Menu = styled.h3<FontWeightProps>`
  ${({ theme, bold }) =>
    bold ? theme.fonts.type.menu1 : theme.fonts.type.menu};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
`;

export const Nav = styled.p<TypographyProps>`
  ${({ theme }) => theme.fonts.type.nav};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
`;

export const Guidance1 = styled.h1<TypographyProps>`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.type.guidance1};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.headline2Mobile};
    font-weight: 500;
  }
`;

export const Guidance2 = styled.h1<TypographyProps>`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.type.guidance2};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.headline2Mobile};
  }
`;

export const Heading1 = styled.h1<TypographyProps>`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.type.heading1};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.heading1mobile};
  }
`;

export const Heading2 = styled.h1<TypographyProps>`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.type.heading2};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.heading2mobile};
  }
`;

export const Title = styled.h3<TypographyProps>`
  ${({ theme }) => theme.fonts.type.title};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
`;

export const Subtitle = styled.h5<FontWeightProps>`
  ${({ theme, semibold, bold }) =>
    bold
      ? theme.fonts.type.subtitle2
      : semibold
      ? theme.fonts.type.subtitle1
      : theme.fonts.type.subtitle};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
`;

export const Body = styled.p<FontWeightProps>`
  ${({ theme, semibold, medium, regular }) =>
    semibold
      ? theme.fonts.type.body2
      : medium
      ? theme.fonts.type.body1
      : theme.fonts.type.body};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
`;

export const Placeholder = styled.p<TypographyProps>`
  ${({ theme }) => theme.fonts.type.placeholder};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
`;

export const Summary = styled.p<TypographyProps>`
  ${({ theme }) => theme.fonts.type.summary};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};
`;

export const Tag = styled.p<TypographyProps>`
  ${({ theme }) => theme.fonts.type.tag};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};

  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.tagMobile};
  }
`;

export const Caption = styled.p<TypographyProps>`
  ${({ theme }) => theme.fonts.type.caption};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};

  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.captionMobile};
  }
`;

export const Caption2 = styled.p<TypographyProps>`
  ${({ theme }) => theme.fonts.type.caption2};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.lightTheme.text.black};

  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.captionMobile};
  }
`;
