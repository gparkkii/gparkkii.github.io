import { graphql, Link } from 'gatsby';
import * as React from 'react';
import BaseLayout from '../layout';
import PostCard from '../components/PostCard';
import { PostType } from '../@types/Post.types';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme';

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
};

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => (
  <ThemeProvider theme={theme}>
    <BaseLayout title="">
      {/* <Link to="/info">INFO</Link> */}
      <PostCard posts={edges} />
    </BaseLayout>
  </ThemeProvider>
);

export default IndexPage;

export const postContentQuery = graphql`
  query postContentQuery {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 700)
              }
            }
          }
        }
      }
    }
  }
`;
