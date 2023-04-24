import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type IconType = 'cancel' | 'search' | 'menu' | 'github';

const CustomIcon = {
  cancel: faXmark,
  search: faSearch,
  menu: faBars,
  github: faGithub,
} as const;

type IconSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const IconSize = {
  xs: '20px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
} as const;

interface IconProps {
  size: IconSizeType;
  icon: IconType;
}

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
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
