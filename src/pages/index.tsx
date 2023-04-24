import * as React from 'react';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { PostType } from 'types/Post.types';
import { PATH } from '../routes/path';
import { TagListProps } from 'components/Post/TagMenu';
import BaseLayout from 'layout/BaseLayout';
import Blog from 'components/Blog';

type IndexPageProps = {
  location: { search: string };
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
};

const IndexPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedTag = typeof parsed.tag === 'string' ? parsed.tag : 'All';

  const tagList = React.useMemo(
    () =>
      edges.reduce(
        (
          list: TagListProps['categories'],
          {
            node: {
              frontmatter: { tags },
            },
          }: PostType,
        ) => {
          tags.forEach(tag => {
            if (list[tag] === undefined) list[tag] = 1;
            else list[tag]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <BaseLayout path={PATH.index}>
      {/* Blog */}
      <Blog posts={edges} selectedTag={selectedTag} />
    </BaseLayout>
  );
};

export default IndexPage;

export const postContentQuery = graphql`
  query postContentQuery {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            tags
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
