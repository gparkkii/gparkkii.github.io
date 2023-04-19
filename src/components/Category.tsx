import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const CategoryContainer = styled.aside`
  width: 240px;
  height: 100%;
  padding: 40px 0px;
  margin-left: 40px;
  margin-top: 80px;
  flex-shrink: 0;
`;

const CategoryTitle = styled.h3`
  ${({ theme }) => theme.fonts.type.title};
  color: ${({ theme }) => theme.lightTheme.text.black};
  margin-bottom: 28px;
`;

const CategorySubTitle = styled.h6`
  ${({ theme }) => theme.fonts.type.subtitle};
  color: ${({ theme }) => theme.lightTheme.text.black};
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
      <CategoryTitle>{title}</CategoryTitle>
      <CategorySubTitle>Technical Field</CategorySubTitle>
      <CategoryNavigation>
        {TECHNICAL_FIELD.map((tag, index) => (
          <CategoryLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
          </CategoryLink>
        ))}
      </CategoryNavigation>
      <CategorySubTitle>Programming Languages</CategorySubTitle>
      <CategoryNavigation>
        {LANGUAGE.map((tag, index) => (
          <CategoryLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
            {'\n'}
          </CategoryLink>
        ))}
      </CategoryNavigation>
      <CategorySubTitle>Development Tools</CategorySubTitle>
      <CategoryNavigation>
        {DEVELOPMENT_TOOLS.map((tag, index) => (
          <CategoryLink key={`${tag}_${index}`} to={`/?tag=${tag}`}>
            #{tag}
            {'\n'}
          </CategoryLink>
        ))}
      </CategoryNavigation>
      <CategorySubTitle>Keyword</CategorySubTitle>
      <CategoryNavigation></CategoryNavigation>
    </CategoryContainer>
  );
};

export default Category;
