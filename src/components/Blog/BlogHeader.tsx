import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { PATH } from 'routes/path';
import { theme, mediaQuery } from 'theme/index';
import { Headline } from 'styles/typography';
import BlogFilter from './BlogFilter';

const BlogHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  ${mediaQuery.sm} {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 24px;
  }
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const BlogHeaderDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 40px;
  margin-bottom: 60px;

  background-color: ${props => props.theme.lightTheme.text.black};

  ${mediaQuery.sm} {
    margin-top: 32px;
    margin-bottom: 28px;
  }
`;

interface BlogHeaderProps {
  selectedTag: string;
}

const BlogHeader = ({ selectedTag }: BlogHeaderProps) => {
  return (
    <BlogHeaderWrapper>
      <HeadlineContainer>
        <HeadlineWrapper>
          <Link to={PATH.index}>
            <Headline textColor={theme.colors.primary.default}>#Tech</Headline>
          </Link>
          <Headline>#{selectedTag}</Headline>
        </HeadlineWrapper>
        {/* <BlogFilter /> */}
      </HeadlineContainer>
      <BlogHeaderDivider />
    </BlogHeaderWrapper>
  );
};

export default BlogHeader;
