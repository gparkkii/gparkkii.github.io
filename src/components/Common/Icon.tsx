import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faSearch,
  faBars,
  faLink,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type IconType = 'cancel' | 'search' | 'menu' | 'github' | 'link' | 'share';

const CustomIcon = {
  cancel: faXmark,
  search: faSearch,
  menu: faBars,
  github: faGithub,
  link: faLink,
  share: faShareAlt,
} as const;

type IconSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const IconSize = {
  xs: '20px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
} as const;

export interface IconProps {
  size: IconSizeType;
  icon: IconType;
}

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;

  svg > path {
    fill: ${props => props.theme.colors.dark[50]};
    stroke: #fff !important;
    stroke-width: 3.5% !important;
  }
`;

const Icon = ({ size, icon }: IconProps) => {
  return (
    <IconBox
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
