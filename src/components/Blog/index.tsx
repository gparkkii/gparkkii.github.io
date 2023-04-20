import React from 'react';
import styled from '@emotion/styled';
import { PostType } from 'types/Post.types';
import PostCard from '../PostCard';
import Category from '../Category';
import BlogHeader from './BlogHeader';
import { mediaQuery } from 'theme/breakpoints';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding-top: 80px;

  ${mediaQuery.sm} {
    padding-top: 40px;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
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
      <BlogHeader selectedTag={selectedTag} />
      <PostWrapper>
        <section>
          {currentPostList?.map((post, index) => {
            return (
              <PostCard
                key={`post_${index}`}
                postData={post.node.frontmatter}
              />
            );
          })}
        </section>
      </PostWrapper>
    </BlogContainer>
  );
};

export default Blog;
