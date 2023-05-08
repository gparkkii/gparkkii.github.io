import React, { FunctionComponent } from 'react';
import BaseLayout from 'layout/BaseLayout';
import PostLayout from 'layout/PostLayout';
import ContentHead from 'components/Detail/ContentHead';
import CommentWidget from 'components/Detail/CommentWidget';
import { MarkdownRenderer } from 'components/Detail/styles/code.styles';
import { DiaryPageItemType } from 'types/Post.types';
import { graphql } from 'gatsby';

type DiaryTemplateProps = {
  path: string;
  data: {
    allMarkdownRemark: {
      edges: DiaryPageItemType[];
    };
  };
  pageContext: unknown;
  location: {
    href: string;
  };
};

const DiaryTemplate: FunctionComponent<DiaryTemplateProps> = function ({
  path,
  data,
  pageContext,
  location,
}: DiaryTemplateProps) {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, index, update },
    },
  } = data.allMarkdownRemark.edges[0];

  return (
    <BaseLayout
      path={'/diary'}
      meta={{
        title,
        description: summary,
        url: location.href,
      }}
    >
      <PostLayout>
        <ContentHead title={title} date={date} />
        <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
        <CommentWidget />
      </PostLayout>
    </BaseLayout>
  );
};

export default DiaryTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY년 MM월 DD일 HH:mm")
            index
            update
          }
        }
      }
    }
  }
`;
