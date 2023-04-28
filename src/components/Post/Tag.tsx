import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'theme/index';
import { Tag as TagTypo } from 'styles/typography';

const TagBox = styled.button`
  display: inline-block;
  margin-right: 16px;
  border-radius: 1000px;
`;

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <TagBox>
      <TagTypo textColor={theme.colors.primary.default}>#{tag}</TagTypo>
    </TagBox>
  );
};

export default Tag;
