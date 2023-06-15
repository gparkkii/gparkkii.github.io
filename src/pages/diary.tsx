import React from 'react';
import BaseLayout from '../layout/BaseLayout';
import { PATH } from '../routes/path';
import { Guidance2, Summary } from '../styles/typography';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { graphql } from 'gatsby';
import NoContent from '../components/Common/NoContent';
import DiaryCard from '../components/Diary/DiaryCard';
import { DiaryType } from '../@types/Post.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';

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
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: DiaryType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

const DiaryPage = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: { publicURL },
  },
}: DiaryPageProps) => {
  return (
    <BaseLayout
      path={PATH.diary}
      meta={{
        title,
        description,
        url: siteUrl,
        image: publicURL,
      }}
    >
      <DiaryWrapper>
        <DiaryHead>
          <Guidance2>Short Diary</Guidance2>
          <Margin />
          <Summary textColor={theme.colors.dark[100]}>
            끄적끄적 내맘대로 적는 일상과 회고록
          </Summary>
        </DiaryHead>
        {edges.length > 0 ? (
          edges.map(({ node: { fields, frontmatter } }, index) => (
            <DiaryCard
              key={`${index}_${frontmatter.title}`}
              slug={fields.slug}
              content={frontmatter}
            />
          ))
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
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
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
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;
