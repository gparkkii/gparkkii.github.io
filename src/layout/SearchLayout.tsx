import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { globalStyle } from 'styles';
import Footer from 'components/Navigation/Footer';
import Header from 'components/Navigation/Header';
import { theme } from 'theme/index';
import { mediaQuery } from 'theme/breakpoints';

const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0px 40px;
  padding-top: 80px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.light[50]};

  ${mediaQuery.sm} {
    padding: 40px 0px;
    padding-top: 72px;
  }
`;

type SearchProps = {
  path: string;
  children: React.ReactNode;
};

const Search = ({ path, children }: SearchProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Header path={path} />
      <Body>{children}</Body>
      <Footer />
    </ThemeProvider>
  );
};

export default Search;
