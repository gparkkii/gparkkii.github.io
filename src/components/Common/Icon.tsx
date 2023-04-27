import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faSearch,
  faBars,
  faLink,
  faShareAlt,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { theme } from '../../theme';

type IconType =
  | 'cancel'
  | 'search'
  | 'menu'
  | 'github'
  | 'link'
  | 'share'
  | 'right';

const CustomIcon = {
  cancel: faXmark,
  search: faSearch,
  menu: faBars,
  github: faGithub,
  link: faLink,
  share: faShareAlt,
  right: faArrowRight,
} as const;

type IconSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const IconSize = {
  xs: '20px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
} as const;

export interface IconProps extends IconStyleProps {
  size: IconSizeType;
  icon: IconType;
}

interface IconStyleProps {
  iconColor?: string;
}

const IconBox = styled.div<IconStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;

  svg > path {
    fill: ${({ theme, iconColor }) =>
      iconColor ? iconColor : theme.colors.dark[50]};
    stroke: #fff !important;
    stroke-width: 3.5% !important;
  }
`;

const Icon = ({ size, icon, iconColor }: IconProps) => {
  return (
    <IconBox
      iconColor={iconColor}
      style={{
        width: IconSize[size] ?? IconSize.sm,
        height: IconSize[size] ?? IconSize.sm,
      }}
    >
      <FontAwesomeIcon icon={CustomIcon[icon]} fontSize={IconSize[size]} />
    </IconBox>
  );
};

export default Icon;
