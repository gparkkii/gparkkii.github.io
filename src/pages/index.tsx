import { graphql, Link } from 'gatsby';
import * as React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import PostList, { PostType } from '../components/PostList';

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
  <DefaultLayout title="Gparkkii Dev'log">
    <Link to="/info">INFO</Link>
    <PostList posts={edges} />
  </DefaultLayout>
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
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
