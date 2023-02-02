import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { PostType } from 'types/Post.types';

type PostListProps = {
  posts: PostType[];
};

const ThumbnailImage = styled(GatsbyImage)`
  width: 400px;
  height: 200px;
`;

const PostList = ({ posts }: PostListProps): JSX.Element => {
  React.useEffect(() => {
    console.log({ posts });
  }, [posts]);

  return (
    <div>
      {posts?.map(post => {
        const { title, categories, date, summary, thumbnail } =
          post.node.frontmatter;
        return (
          <div>
            <div>{title}</div>
            <div>{categories}</div>
            <div>{date}</div>
            <div>{summary}</div>
            <ThumbnailImage
              image={thumbnail.childImageSharp.gatsbyImageData}
              alt={`${title}_thumbnail`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
