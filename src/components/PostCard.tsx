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
  margin: 24px 0px;
  border-radius: 12px;

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
  min-width: 200px;
  width: 200px;
  height: 200px;
  border-radius: 12px;
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
  margin-left: 48px;
`;

const PostTitle = styled.h1`
  word-break: keep-all;
  line-height: 1.35em;
  ${({ theme }) => theme.fonts.type.heading2};
  color: ${({ theme }) => theme.lightTheme.text.black};
`;

const Date = styled.time`
  ${({ theme }) => theme.fonts.type.caption};
  color: ${({ theme }) => theme.lightTheme.text.light[350]};
  margin-bottom: 16px;
`;

const Summary = styled.p`
  ${({ theme }) => theme.fonts.type.summary};
  color: ${({ theme }) => theme.lightTheme.text.dark[200]};
  margin-top: 12px;
  margin-bottom: 20px;
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
