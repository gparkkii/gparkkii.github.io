import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { PostType } from 'types/Post.types';
import Tag from './Tag';

type PostCardProps = {
  posts: PostType[];
};

const ThumbnailBox = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;
`;

const PostCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 20px;
  margin: 10px 0px;
  border-radius: 20px;

  transition: all ease 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.lightTheme.postCard.hover};
    margin-top: 1px;
    /* box-shadow: 0px 4px 8px 0px #8e8e8e33; */
  }
`;

const PostCardTextBox = styled.div`
  width: 680px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 40px;
`;

const PostTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: #212121;
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.lightTheme.text.light[400]};
  margin-bottom: 16px;
`;

const Summary = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #606060;
  margin-top: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.6em;
  height: 4.8em;
`;

const PostCard = ({ posts }: PostCardProps): JSX.Element => {
  React.useEffect(() => {
    console.log({ posts });
  }, [posts]);

  return (
    <div
      style={{
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <div style={{ padding: '40px 0px' }}>
        <PostTitle>Latest Posts</PostTitle>
      </div>
      {posts?.map(post => {
        const { title, categories, date, summary, thumbnail } =
          post.node.frontmatter;
        return (
          <PostCardContainer>
            <ThumbnailBox>
              <GatsbyImage
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                  objectFit: 'cover',
                  objectPosition: 'center',
                  overflow: 'hidden',
                  isolation: 'isolate',
                }}
                image={thumbnail.childImageSharp.gatsbyImageData}
                alt={`${title}_thumbnail`}
              />
            </ThumbnailBox>
            <PostCardTextBox>
              <Date>{date}</Date>
              <PostTitle>{title}</PostTitle>
              <Summary>{summary}</Summary>
              <Tag categories={categories} />
            </PostCardTextBox>
          </PostCardContainer>
        );
      })}
    </div>
  );
};

export default PostCard;
