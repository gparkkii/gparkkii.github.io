import styled from '@emotion/styled';
import React from 'react';
import Icon from '../Common/Icon';
import { Link } from 'gatsby';
import { Caption } from 'styles/typography';
import { theme } from 'theme/index';

const FooterLayout = styled.footer`
  width: 100%;
  padding: 20px 16px;
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.light[50]};
`;

const IconWrapper = styled.div`
  opacity: 0.25;
  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterLayout>
      <div>
        <Caption textColor={theme.colors.dark[150]} style={{ marginBottom: 2 }}>
          Copyright ©gparkkii All rights reserved.
        </Caption>
        <Caption textColor={theme.colors.light[800]}>
          2023 | built with gatsby | Developed by gparkkii
        </Caption>
      </div>
      <Link to="https://github.com/gparkkii">
        <IconWrapper>
          <Icon icon="github" size="md" />
        </IconWrapper>
      </Link>
    </FooterLayout>
  );
};

export default Footer;
