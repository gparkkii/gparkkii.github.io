import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { PostType } from 'types/Post.types';
import Tag from './Tag';

const ThumbnailBox = styled.div`
  width: 250px;
  height: 250px;
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

const PostCard = styled.div`
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

type PostListsProps = {
  posts: PostType[];
  selectedTag: string;
};

const PostLists = ({ posts, selectedTag }: PostListsProps): JSX.Element => {
  const currentPostList = React.useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostType) =>
          selectedTag !== 'All' ? categories.includes(selectedTag) : true,
      ),
    [selectedTag],
  );

  return (
    <>
      {currentPostList?.map((post, index) => {
        const { title, categories, date, summary, thumbnail } =
          post.node.frontmatter;
        return (
          <PostCard key={`${title}_${index}`}>
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
              <Summary>{summary}</Summary>
              <Tag categories={categories} />
            </PostCardTextBox>
          </PostCard>
        );
      })}
    </>
  );
};

export default PostLists;
