import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { mediaQuery } from '../theme/breakpoints';
import { Subtitle, Title } from '../styles/typography';

const CategoryContainer = styled.aside`
  width: 204px;
  height: 100%;
  margin-left: 40px;
  flex-shrink: 0;

  ${mediaQuery.md} {
    visibility: hidden;
    position: absolute;
    right: 40px;
    opacity: 0;
  }
`;

const CategoryNavigation = styled.nav`
  padding-left: 16px;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  ${({ theme }) => theme.fonts.type.caption};
  line-height: 2em;
  padding-right: 8px;
  color: ${({ theme }) => theme.lightTheme.text.light[600]};
  &:hover {
    color: ${({ theme }) => theme.lightTheme.text.primary};
  }
`;

interface CategoryProps {
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

const Category = ({ title }: CategoryProps) => {
  return (
    <CategoryContainer>
      <Title style={{ marginBottom: '28px' }}>{title}</Title>
      <Subtitle>Technical Field</Subtitle>
      <CategoryNavigation>
        {TECHNICAL_FIELD.map((tag, index) => (
          <CategoryLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
          </CategoryLink>
        ))}
      </CategoryNavigation>
      <Subtitle>Programming Languages</Subtitle>
      <CategoryNavigation>
        {LANGUAGE.map((tag, index) => (
          <CategoryLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
            {'\n'}
          </CategoryLink>
        ))}
      </CategoryNavigation>
      <Subtitle>Development Tools</Subtitle>
      <CategoryNavigation>
        {DEVELOPMENT_TOOLS.map((tag, index) => (
          <CategoryLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
            {'\n'}
          </CategoryLink>
        ))}
      </CategoryNavigation>
      <Subtitle>Keyword</Subtitle>
      <CategoryNavigation></CategoryNavigation>
    </CategoryContainer>
  );
};

export default Category;
