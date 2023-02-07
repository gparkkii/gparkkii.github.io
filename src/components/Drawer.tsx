import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const DrawerContainer = styled.aside`
  width: 240px;
  height: 100%;
  padding: 40px 0px;
  margin-left: 40px;
  margin-top: 80px;
  flex-shrink: 0;
`;

const DrawerTitle = styled.h3`
  ${({ theme }) => theme.fonts.type.heading3};
  color: ${({ theme }) => theme.lightTheme.text.black};
  margin-bottom: 28px;
`;

const DrawerSubTitle = styled.h6`
  ${({ theme }) => theme.fonts.type.title};
  color: ${({ theme }) => theme.lightTheme.text.black};
`;

const DrawerNavigation = styled.nav`
  padding-left: 16px;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const DrawerLink = styled(Link)`
  display: inline-block;
  ${({ theme }) => theme.fonts.type.caption};
  line-height: 2em;
  padding-right: 8px;
  color: ${({ theme }) => theme.lightTheme.text.light[600]};
  &:hover {
    color: ${({ theme }) => theme.lightTheme.text.primary};
  }
`;

interface DrawerProps {
  title: string;
}

const TECHNICAL_FIELD = [
  'Web Development',
  'iOS',
  'Android',
  'Technical Writing',
  'Technical Management',
] as const;

const LANGUAGE = ['JavaScript'] as const;

const DEVELOPMENT_TOOLS = ['React', 'React Native'] as const;

const Drawer = ({ title }: DrawerProps) => {
  return (
    <DrawerContainer>
      <DrawerTitle>{title}</DrawerTitle>
      <DrawerSubTitle>Technical Field</DrawerSubTitle>
      <DrawerNavigation>
        {TECHNICAL_FIELD.map((tag, index) => (
          <DrawerLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
          </DrawerLink>
        ))}
      </DrawerNavigation>
      <DrawerSubTitle>Programming Languages</DrawerSubTitle>
      <DrawerNavigation>
        {LANGUAGE.map((tag, index) => (
          <DrawerLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
            {'\n'}
          </DrawerLink>
        ))}
      </DrawerNavigation>
      <DrawerSubTitle>Development Tools</DrawerSubTitle>
      <DrawerNavigation>
        {DEVELOPMENT_TOOLS.map((tag, index) => (
          <DrawerLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
            {'\n'}
          </DrawerLink>
        ))}
      </DrawerNavigation>
      <DrawerSubTitle>Keyword</DrawerSubTitle>
      <DrawerNavigation></DrawerNavigation>
    </DrawerContainer>
  );
};

export default Drawer;
