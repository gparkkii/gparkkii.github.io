import React from 'react';
import styled from '@emotion/styled';
import { PostType } from 'types/Post.types';
import BlogHeader from './BlogHeader';
import PostCard from '../Post/PostCard';
import NoContent from '../Common/NoContent';
import { mediaQuery } from 'theme/index';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding-top: 60px;

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
  padding-bottom: 120px;

  ${mediaQuery.sm} {
    padding-bottom: 60px;
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
      {currentPostList ? (
        <>
          <BlogHeader selectedTag={selectedTag} />
          <PostWrapper>
            <section>
              {currentPostList.map((post, index) => {
                return (
                  <PostCard
                    key={`post_${index}`}
                    slug={post.node.fields.slug}
                    postData={post.node.frontmatter}
                  />
                );
              })}
            </section>
          </PostWrapper>
        </>
      ) : (
        <NoContent />
      )}
    </BlogContainer>
  );
};

export default Blog;
