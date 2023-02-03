import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { globalStyle } from '../../theme';
import Footer from '../Footer';
import Header from '../Header';

const Body = styled.main`
  max-width: 1140px;
  width: 100%;
  height: 100vh;
  padding: 16px;
  padding-top: 88px; /* header height + 16px */
  margin: 0 auto;
  background-color: #fff;
`;

type DefaultLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header title={title} />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
