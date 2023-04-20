import React from 'react';
import styled from '@emotion/styled';
import { PostType } from 'types/Post.types';
import PostCard from './PostCard';
import { Link } from 'gatsby';
import { mediaQuery } from '../theme/breakpoints';

const BlogContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
`;

const BlogHeader = styled.div`
  padding: 0px 20px;
  margin-top: 28px;
  padding-bottom: 20px;
`;

const Headline = styled.p<{ default?: boolean }>`
  color: ${props =>
    props.default
      ? props.theme.colors.dark[50]
      : props.theme.colors.primary[100]};
  ${props => props.theme.fonts.type.headline};
  ${mediaQuery.sm} {
    ${props => props.theme.fonts.type.headlineMobile}
  }
`;

interface BlogLayoutProps {
  posts: PostType[];
  selectedTag: string;
}

const Blog = ({ posts, selectedTag }: BlogLayoutProps) => {
  const currentPostList = React.useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { tags },
          },
        }: PostType) =>
          selectedTag !== 'All' ? tags.includes(selectedTag) : true,
      ),
    [selectedTag],
  );

  return (
    <BlogContainer>
      <BlogHeader>
        <Link to="/">
          <Headline default>#Tech</Headline>
        </Link>
        <Headline>#{selectedTag}</Headline>
      </BlogHeader>
      {currentPostList?.map((post, index) => {
        return (
          <PostCard key={`post_${index}`} postData={post.node.frontmatter} />
        );
      })}
    </BlogContainer>
  );
};

export default Blog;
