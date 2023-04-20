import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PostFrontMatterType } from 'types/Post.types';
import { mediaQuery } from 'theme/breakpoints';
import Tag from './Tag';

const PostCardBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 20px;
  border-radius: 12px;

  &:hover {
    background-color: #fafafa;
    border: 20px;
  }

  ${mediaQuery.sm} {
    padding: 16px 24px;
    border-radius: 0px;
  }
`;

const PostCardDivider = styled.div`
  width: 100%;
  height: 2px;
  margin: 20px 0px;

  ${mediaQuery.sm} {
    margin: 16px 0px;
    background-color: ${props => props.theme.colors.light[100]};
  }
`;

const ThumbnailBox = styled.div`
  min-width: 200px;
  width: 200px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  isolation: isolate;

  ${mediaQuery.sm} {
    visibility: hidden;
    position: absolute;
    left: 40px;
    opacity: 0;
  }
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

  ${mediaQuery.sm} {
    max-width: 100%;
    margin-left: 0px;
  }
`;

const PostTitle = styled.h1`
  word-break: keep-all;
  line-height: 1.35em;
  ${({ theme }) => theme.fonts.type.heading2};
  color: ${({ theme }) => theme.lightTheme.text.black};
  box-sizing: inline-box;
  ${mediaQuery.sm} {
    ${({ theme }) => theme.fonts.type.heading2mobile};
  }
`;

const Date = styled.time`
  ${({ theme }) => theme.fonts.type.caption};
  color: ${({ theme }) => theme.lightTheme.text.light[500]};
  margin-bottom: 12px;
`;

const Summary = styled.p`
  ${({ theme }) => theme.fonts.type.summary};
  color: ${({ theme }) => theme.lightTheme.text.dark[200]};
  margin-top: 12px;
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
    <>
      <PostCardBox key={key}>
        <ThumbnailBox className="postcard-thumbnail">
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
      <PostCardDivider />
    </>
  );
};

export default PostCard;
