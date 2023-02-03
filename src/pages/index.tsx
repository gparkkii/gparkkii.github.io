import * as React from 'react';
import { graphql, Link } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { ThemeProvider } from '@emotion/react';
import { PostType } from 'types/Post.types';
import { theme } from 'theme';
import BaseLayout from 'layout/BaseLayout';
import ContentLayout from 'layout/ContentLayout';
import PostLists from 'components/PostLists';
import TagMenu, { TagListProps } from '../components/TagMenu';

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

  const tagMenuList = React.useMemo(
    () =>
      edges.reduce(
        (
          list: TagListProps['categories'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  React.useEffect(() => {
    console.log(location.search);
    console.log(queryString.parse(location.search).tag);
    console.log({ selectedTag, tagMenuList });
  }, [queryString, selectedTag, tagMenuList]);

  return (
    <ThemeProvider theme={theme}>
      <BaseLayout title="">
        {/* <Link to="/info">INFO</Link> */}
        <ContentLayout header={`Latest Posts`}>
          <TagMenu tags={tagMenuList} selectedTag={selectedTag} />
          <PostLists posts={edges} selectedTag={selectedTag} />
        </ContentLayout>
      </BaseLayout>
    </ThemeProvider>
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
