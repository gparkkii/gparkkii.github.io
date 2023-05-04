import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { theme } from 'theme/index';
import { Tag as TagTypo } from 'styles/typography';

const TagBox = styled(Link)`
  display: inline-block;
  margin-right: 16px;
  border-radius: 1000px;

  :hover {
    p {
      color: ${({ theme }) => theme.colors.secondary[600]};
    }
  }
`;

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <TagBox to={`/?tag=${tag}`}>
      <TagTypo textColor={theme.colors.primary.default}>#{tag}</TagTypo>
    </TagBox>
  );
};

export default Tag;
