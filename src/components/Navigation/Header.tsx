import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import NavMenu from './NavMenu';
import { mediaQuery } from 'theme/breakpoints';
import { PATH } from '../../routes/path';
import Icon from '../Icon';
import Logo from '../Logo';
import Drawer from './Drawer';

const HeaderLayout = styled.header`
  position: fixed;
  z-index: 99999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.lightTheme.backgroundColor};
  box-shadow: 0px 2px 8px 4px rgba(229, 229, 229, 0.25);

  margin: 0 auto;
  padding: 0 40px;

  ${mediaQuery.sm} {
    height: 72px;
    padding: 0 24px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const NavMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mediaQuery.sm} {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: -10000;
    right: 84px;
  }
`;

const MobileMenuBox = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: -10000;

  ${mediaQuery.sm} {
    position: relative;
    visibility: visible;
    opacity: 100;
  }
`;

const IconWrapper = styled.div`
  margin-left: 20px;
  ${mediaQuery.sm} {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: -10000;
  }
`;

const DesktopMenu = ({ path }: { path: string }) => {
  return (
    <>
      <NavMenuBox>
        <NavMenu title="Tech" active={true} />
        <NavMenu title="Story" disabled={true} active={false} />
        <NavMenu title="Project" disabled={true} active={false} />
        <NavMenu title="About" disabled={true} active={false} />
      </NavMenuBox>
      <IconWrapper>
        {path !== PATH.search ? (
          <Link to={PATH.search}>
            <Icon size="sm" icon="search" />
          </Link>
        ) : (
          <div onClick={() => navigate(-1)}>
            <Icon size="sm" icon="cancel" />
          </div>
        )}
      </IconWrapper>
    </>
  );
};

const MobileMenu = ({
  visible,
  onClick,
}: {
  visible: boolean;
  onClick: () => void;
}) => (
  <MobileMenuBox onClick={onClick}>
    {visible ? (
      <Icon size="sm" icon={'cancel'} />
    ) : (
      <Icon size="xs" icon={'menu'} />
    )}
  </MobileMenuBox>
);

const Header = ({ path }: { path: string }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleDrawer = () => setShowDrawer(prev => !prev);
  return (
    <>
      <HeaderLayout>
        <Logo />
        <NavWrapper>
          <DesktopMenu path={path} />
          <MobileMenu visible={showDrawer} onClick={handleDrawer} />
        </NavWrapper>
      </HeaderLayout>
      <Drawer visible={showDrawer} />
    </>
  );
};

export default Header;
