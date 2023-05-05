import React, { useMemo } from 'react';
import BaseLayout from '../layout/BaseLayout';
import { PATH } from '../routes/path';
import { Guidance2, Summary } from '../styles/typography';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { graphql } from 'gatsby';
import NoContent from '../components/Common/NoContent';
import DiaryCard from '../components/Diary/DiaryCard';
import { DiaryType } from '../@types/Post.types';

const DiaryWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 0px;
`;

const DiaryHead = styled.div`
  width: 100%;
  padding: 0px 16px;
  padding-bottom: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark[50]};
  margin-bottom: 40px;
`;
const Margin = styled.div`
  margin-top: 4px;
`;

type DiaryPageProps = {
  data: {
    allMarkdownRemark: {
      edges: DiaryType[];
    };
  };
};

const DiaryPage = ({ data }: DiaryPageProps) => {
  const DiaryPostList = useMemo(() => data.allMarkdownRemark.edges, [data]);
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
        {DiaryPostList.length > 0 ? (
          data.allMarkdownRemark.edges.map(
            ({ node: { fields, frontmatter } }, index) => (
              <DiaryCard
                key={`${index}_${frontmatter.title}`}
                slug={fields.slug}
                content={frontmatter}
              />
            ),
          )
        ) : (
          <NoContent />
        )}
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
            index
            summary
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`;
