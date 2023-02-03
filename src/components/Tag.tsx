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
  margin-right: 16px;
  border-radius: 1000px;
`;

const PostCategory = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.lightTheme.text.primary};
`;

interface TagProps {
  categories: string[];
}

const Tag = ({ categories }: TagProps) => {
  return (
    <CategoryBox>
      {categories.map((category, index) => (
        <CategoryTag key={`${category}_${index}`}>
          <PostCategory>#{category}</PostCategory>
        </CategoryTag>
      ))}
    </CategoryBox>
  );
};

export default Tag;
