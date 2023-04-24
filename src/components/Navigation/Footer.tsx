import styled from '@emotion/styled';
import React from 'react';
import Icon from '../Common/Icon';
import { Link } from 'gatsby';

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

const LicenseTypo = styled.p<{ bold?: boolean }>`
  ${props => props.theme.fonts.type.caption};
  color: ${props =>
    props.bold ? props.theme.colors.dark[150] : props.theme.colors.light[800]};
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
        <LicenseTypo bold>Copyright ©gparkkii All rights reserved.</LicenseTypo>
        <LicenseTypo>
          2023 | built with gatsby | Developed & Designed by gparkkii
        </LicenseTypo>
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
