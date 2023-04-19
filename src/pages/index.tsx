import * as React from 'react';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { PostType } from 'types/Post.types';
import BaseLayout from 'layout/BaseLayout';
import { TagListProps } from 'components/TagMenu';
import Blog from 'components/Blog';
import Drawer from 'components/Drawer';
import { PATH } from '../routes/path';

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
      <Blog
        header="#All"
        posts={edges}
        tagList={tagList}
        selectedTag={selectedTag}
      />
      <Drawer title="Tags" />
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
