import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { PATH } from 'routes/path';
import { mediaQuery } from 'theme/breakpoints';

const BlogHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
`;

const BlogHeaderDivider = styled.div`
  width: 100%;
  height: 2px;
  margin: 60px 0px;

  background-color: ${props => props.theme.colors.dark[50]};

  ${mediaQuery.sm} {
    margin-top: 32px;
    margin-bottom: 28px;
  }
`;

const Headline = styled.p<{ default?: boolean }>`
  color: ${props =>
    props.default
      ? props.theme.colors.dark[50]
      : props.theme.colors.primary[100]};
  ${props => props.theme.fonts.type.headline};
  ${mediaQuery.sm} {
    ${props => props.theme.fonts.type.headlineMobile};
    padding: 0px 24px;
  }
`;

interface BlogHeaderProps {
  selectedTag: string;
}

const BlogHeader = ({ selectedTag }: BlogHeaderProps) => {
  return (
    <BlogHeaderWrapper>
      <Link to={PATH.index}>
        <Headline default>#Tech</Headline>
      </Link>
      <Headline>#{selectedTag}</Headline>
      <BlogHeaderDivider />
    </BlogHeaderWrapper>
  );
};

export default BlogHeader;
