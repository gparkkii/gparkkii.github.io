import React from 'react';
import styled from '@emotion/styled';
import { PostType } from 'types/Post.types';
import PostCard from './PostCard';
import TagMenu from './TagMenu';
import { Link } from 'gatsby';

const BlogContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
`;

const BlogHeader = styled.div`
  padding: 0px 20px;
  margin-top: 28px;
  padding-bottom: 20px;

  a {
    font-family: 'Poppins', 'Pretendard', 'Noto Sans';
    font-size: 28px;
    font-weight: 600;
    color: ${props => props.theme.lightTheme.text.black};
  }
  b {
    font-family: 'Poppins', 'Pretendard', 'Noto Sans';
    font-size: 28px;
    font-weight: 600;
    color: ${props => props.theme.lightTheme.text.primary};
  }
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
      <BlogHeader>
        <Link to="/">#Tech&nbsp;</Link>
        <b>#{selectedTag}</b>
      </BlogHeader>
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
