import React, { FunctionComponent } from 'react';
import BaseLayout from 'layout/BaseLayout';
import PostLayout from 'layout/PostLayout';
import ContentHead from 'components/Detail/ContentHead';
import ContentBody from 'components/Detail/ContentBody';
import CommentWidget from 'components/Detail/CommentWidget';
import ContentFooter from 'components/Detail/ContentFooter';
import TableOfContents from 'components/Detail/TableOfContents';
import { PostPageItemType, PageContextType } from 'types/Post.types';
import { graphql } from 'gatsby';

type PostTemplateProps = {
  path: string;
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  pageContext: {
    slug: string;
    previous: PageContextType | null;
    next: PageContextType | null;
  };
  location: {
    href: string;
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  path,
  data,
  pageContext,
  location,
}: PostTemplateProps) {
  const { previous, next } = pageContext;
  const {
    node: {
      html,
      tableOfContents,
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
        <ContentHead title={title} date={date} />
        <ContentBody html={html} thumbnail={gatsbyImageData} />
        <ContentFooter previous={previous} next={next} tags={tags} />
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
          tableOfContents
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
