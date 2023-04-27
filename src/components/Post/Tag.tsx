import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { theme } from 'theme/index';
import { Tag as TagTypo } from 'styles/typography';

const TagBox = styled(Link)`
  display: inline-block;
  margin-right: 12px;
  border-radius: 1000px;
`;

const LineAnimation = styled.div`
  & p::after {
    display: block;
    content: '';
    width: 0;
    height: 2px;
    margin-bottom: 2px;
    margin-top: -4px;
    background-color: ${props => props.theme.colors.primary[300]};
    transition: width 0.3s;
  }
  &:hover {
    & p::after {
      width: 100%;
    }
  }
`;

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <TagBox to={`/?tag=${tag}`}>
      <LineAnimation>
        <TagTypo textColor={theme.colors.primary.default}>#{tag}</TagTypo>
      </LineAnimation>
    </TagBox>
  );
};

export default Tag;
