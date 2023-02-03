import styled from '@emotion/styled';
import React from 'react';

const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const CategoryTag = styled.div`
  display: inline-block;
  /* padding: 4px 10px; */
  margin-right: 16px;
  /* background-color: #ff2e2e; */
  border-radius: 1000px;
`;

const PostCategory = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #ff2e2e;
`;

interface TagProps {
  categories: string[];
}

const Tag = ({ categories }: TagProps) => {
  return (
    <CategoryBox>
      {categories.map(category => (
        <CategoryTag>
          <PostCategory>#{category}</PostCategory>
        </CategoryTag>
      ))}
    </CategoryBox>
  );
};

export default Tag;
