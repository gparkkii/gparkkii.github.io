import styled from '@emotion/styled';
import React from 'react';

interface NavMenuProps {
  title: string;
  active: boolean;
  disabled?: boolean;
}

const StyledNav = styled.nav<{ active: boolean; disabled?: boolean }>`
  ${props => props.theme.fonts.type.Nav}
  padding: 0px 20px;
  color: ${props =>
    props.disabled
      ? props.theme.lightTheme.text.light[400]
      : props.active
      ? props.theme.lightTheme.text.primary
      : props.theme.lightTheme.text.black};
  font-weight: ${props => (props.active ? 600 : 500)};
  cursor: pointer;

  &:hover {
    ${props =>
      !props.disabled &&
      !props.active && { color: props.theme.colors.dark[200] }};
  }
`;

const NavMenu = ({ title, active, disabled }: NavMenuProps) => {
  return (
    <StyledNav active={active} disabled={disabled}>
      {title}
    </StyledNav>
  );
};

export default NavMenu;
