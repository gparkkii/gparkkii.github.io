import styled from '@emotion/styled';
import React from 'react';

const FooterLayout = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #ddd;
  padding: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return <FooterLayout />;
};

export default Footer;
