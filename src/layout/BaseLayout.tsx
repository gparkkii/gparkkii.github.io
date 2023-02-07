import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { globalStyle } from 'styles';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Body = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 16px;
  padding-top: 80px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.lightTheme.backgroundColor};
`;

type BaseLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header title={title} />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default BaseLayout;
