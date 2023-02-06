import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PostFrontMatterType } from 'types/Post.types';
import Tag from './Tag';

const PostCardBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 20px;
  margin: 20px 0px;
  border-radius: 20px;

  transition: all ease 0.25s;

  &:hover {
    transform: translateY(-8px);
    background-color: ${({ theme }) => theme.lightTheme.postCard.hover};
    & h1 {
      color: ${({ theme }) => theme.lightTheme.text.dark[150]};
    }
  }
`;

const ThumbnailBox = styled.div`
  min-width: 240px;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;
  /* box-shadow: 0px 5px 10px 0px #7575752e; */
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const PostCardTextBox = styled.div`
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 40px;
`;

const PostTitle = styled.h1`
  width: 90%;
  word-break: keep-all;
  line-height: 1.35em;
  ${({ theme }) => theme.fonts.type.heading};
  color: ${({ theme }) => theme.lightTheme.text.black};
`;

const Date = styled.time`
  ${({ theme }) => theme.fonts.type.caption};
  color: ${({ theme }) => theme.lightTheme.text.light[400]};
  margin-bottom: 14px;
`;

const Summary = styled.p`
  ${({ theme }) => theme.fonts.type.subtitle};
  color: ${({ theme }) => theme.lightTheme.text.dark[200]};
  margin-top: 16px;
  margin-bottom: 24px;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

interface PostCardProps {
  key: string;
  postData: PostFrontMatterType;
}

const PostCard = ({ key, postData }: PostCardProps) => {
  const { title, date, summary, thumbnail, tags } = postData;
  return (
    <PostCardBox key={key}>
      <ThumbnailBox>
        <ThumbnailImage
          loading="lazy"
          image={thumbnail.childImageSharp.gatsbyImageData}
          alt={`${title}_thumbnail`}
        />
      </ThumbnailBox>
      <PostCardTextBox>
        <Date>{date}</Date>
        <PostTitle>{title}</PostTitle>
        <Summary className="typography-ellipsis-2line">{summary}</Summary>
        <TagBox>
          {tags.map((tag, index) => (
            <Tag key={`${tag}_${index}`} tag={tag} />
          ))}
        </TagBox>
      </PostCardTextBox>
    </PostCardBox>
  );
};

export default PostCard;
