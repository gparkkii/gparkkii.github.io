import styled from '@emotion/styled';
import React from 'react';
import Icon, { IconProps } from '../Common/Icon';

const ButtonLayer = styled.button`
  padding: 10px;
  :hover {
    background-color: ${({ theme }) => theme.colors.light[100]};
    border-radius: 8px;
  }
`;

interface IconButtonProps extends IconProps {
  onClick?: () => void;
}

const IconButton = ({ icon, size, onClick }: IconButtonProps) => {
  return (
    <ButtonLayer onClick={onClick}>
      <Icon size={size} icon={icon} />
    </ButtonLayer>
  );
};

export default IconButton;
