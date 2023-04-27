import React, { FunctionComponent } from 'react';
import BaseLayout from 'layout/BaseLayout';
import PostLayout from 'layout/PostLayout';
import ContentHead from 'components/Detail/ContentHead';
import ContentBody from 'components/Detail/ContentBody';
import CommentWidget from 'components/Detail/CommentWidget';
import { graphql } from 'gatsby';

type PostTemplateProps = {
  path: string;
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  path,
  data,
  location,
}: PostTemplateProps) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        tags,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = data.allMarkdownRemark.edges[0];

  return (
    <BaseLayout
      path={'/'}
      meta={{
        title,
        description: summary,
        url: location.href,
        image: publicURL,
      }}
    >
      <PostLayout>
        <ContentHead title={title} date={date} thumbnail={gatsbyImageData} />
        <ContentBody html={html} thumbnail={gatsbyImageData} />
        <CommentWidget />
      </PostLayout>
    </BaseLayout>
  );
};

export default PostTemplate;

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
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
