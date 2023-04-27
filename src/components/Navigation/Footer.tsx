import styled from '@emotion/styled';
import React from 'react';
import Icon from '../Common/Icon';
import { Caption } from 'styles/typography';
import { theme } from 'theme/index';

const FooterLayout = styled.footer<FooterProps>`
  width: 100%;
  padding: 20px 16px;
  ${({ expand }) => expand && `padding: 0px`};
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

interface FooterProps {
  expand?: boolean;
}

const Footer = ({ expand }: FooterProps) => {
  return (
    <FooterLayout expand={expand}>
      <div>
        <Caption textColor={theme.colors.dark[150]} style={{ marginBottom: 2 }}>
          Copyright ©gparkkii All rights reserved.
        </Caption>
        <Caption textColor={theme.colors.light[800]}>
          2023 | built with gatsby | Developed by gparkkii
        </Caption>
      </div>
      <a
        href="https://github.com/gparkkii"
        target="_blank"
        rel="noopener norefferer"
      >
        <IconWrapper>
          <Icon icon="github" size="md" />
        </IconWrapper>
      </a>
    </FooterLayout>
  );
};

export default Footer;
