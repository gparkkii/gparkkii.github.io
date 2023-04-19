import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import NavMenu from './NavMenu';
import { mediaQuery } from 'theme/breakpoints';
import { PATH } from '../../routes/path';
import Icon from '../Icon';

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
`;

const IconWrapper = styled.div`
  margin-left: 20px;
`;

interface HeaderProps {
  path: string;
}

const Header = ({ path }: HeaderProps) => {
  return (
    <HeaderLayout>
      {/* full logo */}
      <Link to={PATH.index}>
        <StaticImage
          style={{ width: '44px', height: '44px', objectFit: 'contain' }}
          src="../../images/g_logo.png"
          alt="logo"
        />
      </Link>
      <NavWrapper>
        <NavMenuBox>
          <NavMenu title="Tech" active={true} />
          <NavMenu title="Tags" active={false} />
          <NavMenu title="Project" active={false} />
          <NavMenu title="About" active={false} />
        </NavMenuBox>
        <IconWrapper>
          {path !== PATH.search ? (
            <Link to={PATH.search}>
              <Icon size="xs" icon="search" />
            </Link>
          ) : (
            <div onClick={() => navigate(-1)}>
              <Icon size="sm" icon="cancel" />
            </div>
          )}
        </IconWrapper>
      </NavWrapper>
    </HeaderLayout>
  );
};

export default Header;
