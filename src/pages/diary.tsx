import React from 'react';
import BaseLayout from '../layout/BaseLayout';
import { PATH } from '../routes/path';
import { Guidance2, Summary } from '../styles/typography';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { graphql } from 'gatsby';
import NoContent from '../components/Common/NoContent';

const DiaryWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 0px;
`;

const DiaryHead = styled.div`
  width: 100%;
  padding: 0px 16px;
  padding-bottom: 32px;
  border-bottom: 2px solid;
`;
const Margin = styled.div`
  margin-top: 8px;
`;

const DiaryPage = () => {
  return (
    <BaseLayout path={PATH.diary}>
      <DiaryWrapper>
        <DiaryHead>
          <Guidance2>Short Diary</Guidance2>
          <Margin />
          <Summary textColor={theme.colors.dark[100]}>
            끄적끄적 내맘대로 적는 일상과 회고록
          </Summary>
        </DiaryHead>

        <NoContent />
      </DiaryWrapper>
    </BaseLayout>
  );
};

export default DiaryPage;

export const diaryContent = graphql`
  query diaryContent {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
      filter: { frontmatter: { tags: { eq: null }, update: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            update
            title
            summary
            date
          }
        }
      }
    }
  }
`;
