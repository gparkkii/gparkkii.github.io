import styled from '@emotion/styled';
import React from 'react';
import { Nav } from 'styles/typography';

interface NavMenuProps {
  title: string;
  active: boolean;
  disabled?: boolean;
}

const StyledNav = styled.div<{ active: boolean; disabled?: boolean }>`
  padding: 0px 16px;
  & p {
    color: ${props =>
      props.disabled
        ? props.theme.lightTheme.text.light[400]
        : props.active
        ? props.theme.lightTheme.text.primary
        : props.theme.lightTheme.text.black};
    font-weight: ${props => (props.active ? 600 : 500)};
  }
  cursor: pointer;

  &:hover {
    ${props => !props.active && { p: { color: props.theme.colors.dark[200] } }};
  }
`;

const NavMenu = ({ title, active, disabled }: NavMenuProps) => {
  return (
    <StyledNav active={active} disabled={disabled}>
      <Nav>{title}</Nav>
    </StyledNav>
  );
};

export default NavMenu;
