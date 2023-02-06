import React from 'react';
import styled from '@emotion/styled';
import { PostType } from 'types/Post.types';
import PostCard from './PostCard';
import TagMenu from './TagMenu';

const BlogContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 40px;
`;

const BlogHeader = styled.h1`
  padding: 0px 20px;
  margin-top: 40px;
  padding-bottom: 8px;

  font-family: 'Poppins', 'Pretendard', 'Noto Sans';
  font-size: 36px;
  font-weight: 600;
  color: ${props => props.theme.lightTheme.text.dark[50]};
`;

interface BlogLayoutProps {
  header: string;
  posts: PostType[];
  tagList: { [key: string]: number };
  selectedTag: string;
}

const Blog = ({ header, posts, tagList, selectedTag }: BlogLayoutProps) => {
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
      {/* <BlogHeader>{header}</BlogHeader> */}
      {/* <TagMenu tags={tagList} selectedTag={selectedTag} /> */}
      {currentPostList?.map((post, index) => {
        return (
          <PostCard key={`post_${index}`} postData={post.node.frontmatter} />
        );
      })}
    </BlogContainer>
  );
};

export default Blog;
