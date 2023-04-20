import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const TagBox = styled(Link)`
  display: inline-block;
  margin-right: 16px;
  border-radius: 1000px;
`;

const TagName = styled.p`
  ${({ theme }) => theme.fonts.type.tag};
  color: ${({ theme }) => theme.lightTheme.text.primary};
`;

interface TagProps {
  key: string;
  tag: string;
}

const Tag = ({ key, tag }: TagProps) => {
  return (
    <TagBox key={key} to={`/?tag=${tag}`}>
      <TagName>#{tag}</TagName>
    </TagBox>
  );
};

export default Tag;
