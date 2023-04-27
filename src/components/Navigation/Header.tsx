import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import { breakpoints, mediaQuery } from 'theme/index';
import { PATH } from 'routes/path';
import NavMenu from './NavMenu';
import Drawer from './Drawer';
import Logo from '../Common/Logo';
import IconButton from '../Controls/IconButton';
import Tooltip from '../Controls/Tooltip';
import { useResponsive } from '../../hooks/useResponsive';

const HeaderLayout = styled.header`
  position: fixed;
  z-index: 99999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.lightTheme.backgroundColor};
  box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.15);
  /* border-bottom: 2px solid #fafafa; */

  margin: 0 auto;
  padding-left: 40px;
  padding-right: 32px;
  transition: all 0.5s ease;

  ${mediaQuery.sm} {
    height: 64px;
    padding: 0px 12px;
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
  margin-left: 8px;
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
        <Link to={PATH.index}>
          <NavMenu title="Tech" active={path === PATH.index} />
        </Link>
        <Tooltip tip="준비중...">
          <NavMenu title="Story" disabled={true} active={false} />
        </Tooltip>
        <Tooltip tip="준비중...">
          <NavMenu title="Project" disabled={true} active={false} />
        </Tooltip>
        <Tooltip tip="준비중...">
          <NavMenu title="About" disabled={true} active={false} />
        </Tooltip>
      </NavMenuBox>
      <IconWrapper>
        {path !== PATH.search ? (
          <Link to={PATH.search}>
            <IconButton size="xs" icon="search" />
          </Link>
        ) : (
          <IconButton size="xs" icon="cancel" onClick={() => navigate(-1)} />
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
      <IconButton size="xs" icon={'cancel'} />
    ) : (
      <IconButton size="xs" icon={'menu'} />
    )}
  </MobileMenuBox>
);

const Header = ({ path }: { path: string }) => {
  const isMobileSize = useResponsive(breakpoints.sm);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawer = () => setShowDrawer(prev => !prev);

  useEffect(() => {
    if (!isMobileSize) {
      setShowDrawer(false);
    }
  }, [isMobileSize]);

  return (
    <>
      <HeaderLayout>
        <Logo />
        <NavWrapper>
          <DesktopMenu path={path} />
          <MobileMenu visible={showDrawer} onClick={handleDrawer} />
        </NavWrapper>
      </HeaderLayout>
      {isMobileSize && <Drawer path={path} visible={showDrawer} />}
    </>
  );
};

export default Header;
