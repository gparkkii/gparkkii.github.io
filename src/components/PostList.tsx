import * as React from 'react';
import DefaultLayout from './DefaultLayout';

export type PostType = {
  node: {
    id: string;
    frontmatter: PostFrontMatterType;
  };
};

export type PostFrontMatterType = {
  title: string;
  summary: string;
  date: string;
  categories: string[];
  thumbnail: {
    publicURL: string;
  };
};

type PostListProps = {
  posts: PostType[];
};

const PostList = ({ posts }: PostListProps): JSX.Element => {
  React.useEffect(() => {
    console.log({ posts });
  }, [posts]);

  return (
    <div>
      {posts?.map(post => {
        return (
          <div>
            <div>{post.node.frontmatter.title}</div>
            <div>{post.node.frontmatter.date}</div>
            <div>{post.node.frontmatter.summary}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
