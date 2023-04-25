import styled from '@emotion/styled';
import React from 'react';
import { mediaQuery } from 'theme/breakpoints';

const FilterLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border: 2px solid black;

  ${mediaQuery.sm} {
    margin-top: 28px;
  }
`;

const Button = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0px 24px;

  background-color: ${props => (props.selected ? 'black' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};

  font-size: 15px;
  font-weight: 500;

  ${mediaQuery.sm} {
    height: 32px;
    padding: 0px 20px;
    ${props => props.theme.fonts.type.body1};
  }
`;

const BlogFilter = () => {
  return (
    <FilterLayout>
      <Button>날짜순</Button>
      <Button selected>조회순</Button>
    </FilterLayout>
  );
};

export default BlogFilter;
