import React, { useState } from 'react';
import { Caption, Menu as MenuText } from 'styles/typography';
import styled from '@emotion/styled';
import { theme } from 'theme/index';
import Icon from '../Common/Icon';

interface MenuProps extends MenuStyledProps {
  title: string;
  index: number;
}

interface MenuStyledProps {
  active: boolean;
  disabled?: boolean;
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 24px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light[200]};
`;

const MenuTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledMenu = styled(MenuText)<MenuStyledProps>`
  padding-left: 72px;
  color: ${({ theme, active, disabled }) =>
    active
      ? theme.colors.primary.default
      : disabled
      ? theme.colors.light[300]
      : theme.colors.dark[50]};
  font-weight: ${({ disabled }) => (disabled ? 400 : 500)};
  ${({ active }) =>
    active &&
    `
    ::before {
      content: '@'
    } 
  `};
  :hover {
    ${({ theme, active }) => !active && `color: ${theme.colors.dark[200]}`};
  }
`;

const Menu = ({ index, title, active, disabled }: MenuProps) => {
  const [hover, setHover] = useState(false);
  return (
    <MenuWrapper
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <MenuTitleBox>
        <Caption
          style={{ paddingTop: '10px', paddingLeft: '8px' }}
          textColor={
            active ? theme.colors.primary.default : theme.colors.light[400]
          }
        >
          0{index}.
        </Caption>
        <StyledMenu active={active} disabled={disabled}>
          {title}
        </StyledMenu>
      </MenuTitleBox>
      {hover && !disabled && (
        <Icon
          size="xs"
          icon="right"
          iconColor={
            active ? theme.colors.primary.default : theme.colors.dark[200]
          }
        />
      )}
    </MenuWrapper>
  );
};

export default Menu;
