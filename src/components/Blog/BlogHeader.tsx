import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { PATH } from 'routes/path';
import { theme, mediaQuery } from 'theme/index';
import { Headline, Summary } from 'styles/typography';
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
  /* margin-top: 40px; */
  margin-bottom: 40px;
  /* background-color: ${props => props.theme.lightTheme.text.dark[50]}; */

  ${mediaQuery.sm} {
    margin-top: 32px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.lightTheme.text.dark[50]};
  }
`;

const LineAnimation = styled.div`
  & h1::after {
    display: block;
    content: '';
    width: 0;
    height: 16px;
    margin-bottom: 8px;
    margin-top: -24px;
    background-color: ${props => props.theme.colors.primary[500]};
    transition: width 0.3s;
  }
  &:hover {
    & h1::after {
      width: 100%;
    }
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
            <LineAnimation>
              <Headline textColor={theme.colors.primary.default}>
                #Tech
              </Headline>
            </LineAnimation>
          </Link>
          <LineAnimation>
            <Headline>#{selectedTag}</Headline>
          </LineAnimation>
        </HeadlineWrapper>
        {/* <BlogFilter /> */}
      </HeadlineContainer>
      <BlogHeaderDivider />
    </BlogHeaderWrapper>
  );
};

export default BlogHeader;
