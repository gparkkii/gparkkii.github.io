import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const HeaderLayout = styled.header`
  position: fixed;
  z-index: 99999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.lightTheme.backgroundColor};
  /* box-shadow: 0px 2px 6px 0px #f2f2f233; */
  /* border-bottom: 1px solid #fafafa; */

  margin: 0 auto;
  padding: 0 16px;
  padding-top: 8px;
`;

const NavBox = styled.div`
  max-width: 960px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavMenu = styled.p<{ active: boolean }>`
  margin: 0px 20px;
  padding: 6px 2px;

  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 600;
  color: ${props =>
    props.active
      ? props.theme.lightTheme.text.primary
      : props.theme.lightTheme.text.black};
  /* font-weight: ${props => (props.active ? 600 : 600)}; */
  /* border-bottom: ${props => (props.active ? '2.5px solid #ff2e2e' : 0)}; */
`;

const HeaderTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 0 20px;
`;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderLayout>
      {/* full logo */}
      {/* <StaticImage
        style={{ width: '140px', height: '48px', objectFit: 'contain' }}
        src="../images/g_full_logo.png"
        alt="logo"
      /> */}
      <StaticImage
        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
        src="../images/g_logo.png"
        alt="logo"
      />
      <NavBox>
        <NavMenu active={true}>Tech</NavMenu>
        <NavMenu active={false}>Story</NavMenu>
        <NavMenu active={false}>Project</NavMenu>
        <NavMenu active={false}>About</NavMenu>
      </NavBox>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderLayout>
  );
};

export default Header;
