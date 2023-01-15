import styled from '@emotion/styled';
import React from 'react';

const Header = styled.header`
  width: 100%;
  height: 56px;
  background-color: #eee;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const Body = styled.main`
  height: 100vh;
  padding: 16px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #ddd;
  padding: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type DefaultLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
