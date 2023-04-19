import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { globalStyle } from 'styles';
import Footer from 'components/Navigation/Footer';
import Header from 'components/Navigation/Header';
import { theme } from '../theme';

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
  path: string;
  children: React.ReactNode;
};

const BaseLayout = ({ path, children }: BaseLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Header path={path} />
      <Body>{children}</Body>
      <Footer />
    </ThemeProvider>
  );
};

export default BaseLayout;
