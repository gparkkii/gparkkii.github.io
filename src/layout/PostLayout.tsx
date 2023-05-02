import styled from '@emotion/styled';
import React from 'react';
import { mediaQuery } from 'theme/breakpoints';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 900px;
  width: 100%;
  height: 100%;
  padding: 80px 0px;
  ${mediaQuery.sm} {
    padding: 40px 16px;
    padding-bottom: 60px;
  }
`;

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <PostWrapper>{children}</PostWrapper>;
};

export default PostLayout;
