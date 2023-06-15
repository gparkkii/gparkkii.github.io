import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PostFrontMatterType } from 'types/Post.types';
import { mediaQuery } from 'theme/breakpoints';
import { Caption2, Heading2, Summary } from 'styles/typography';
import Tag from './Tag';

const PostCardBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 16px 0px;
  border-radius: 12px;

  ${mediaQuery.sm} {
    padding: 16px 24px;
    border-radius: 0px;
  }

  .navigate-to-post {
    :hover {
      h1 {
        color: ${({ theme }) => theme.colors.dark[150]};
      }
    }
  }
`;

const PostCardDivider = styled.div`
  width: 100%;
  height: 2px;
  margin: 20px 0px;
  background-color: ${props => props.theme.colors.light[100]};

  ${mediaQuery.sm} {
    margin: 16px 0px;
    background-color: ${props => props.theme.colors.light[100]};
  }
`;

const ThumbnailBox = styled.div`
  min-width: 328px;
  width: 328px;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  isolation: isolate;

  ${mediaQuery.sm} {
    visibility: hidden;
    position: absolute;
    left: 40px;
    opacity: 0;
  }

  &:hover {
    opacity: 0.75;
  }
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const PostCardTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 48px;
  margin-right: 40px;

  ${mediaQuery.sm} {
    max-width: 100%;
    margin: 0px;
  }
`;

const Date = styled.div`
  margin-bottom: 10px;
  & p {
    color: ${({ theme }) => theme.lightTheme.text.light[500]};
  }
`;

const Margin = styled.div`
  margin-top: 10px;
  margin-bottom: 28px;
  & p {
    color: ${({ theme }) => theme.lightTheme.text.dark[150]};
  }
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

interface PostCardProps {
  slug: string;
  postData: PostFrontMatterType;
}

const PostCard = ({ slug, postData }: PostCardProps) => {
  const { title, date, summary, thumbnail, tags } = postData;
  return (
    <>
      <PostCardBox>
        <Link to={slug}>
          <ThumbnailBox>
            <ThumbnailImage
              loading="lazy"
              image={thumbnail.childImageSharp.gatsbyImageData}
              alt={`${title}_thumbnail`}
            />
          </ThumbnailBox>
        </Link>
        <PostCardTextBox>
          <Link className="navigate-to-post" to={slug}>
            <Date>
              <Caption2>{date}</Caption2>
            </Date>
            <Heading2>{title}</Heading2>
            <Margin>
              <Summary className="typography-ellipsis-2line">{summary}</Summary>
            </Margin>
          </Link>
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
