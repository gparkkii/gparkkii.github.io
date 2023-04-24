import styled from '@emotion/styled';
import React from 'react';
import { mediaQuery } from '../theme/breakpoints';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 60px;
  ${mediaQuery.sm} {
    padding: 40px 24px;
    padding-bottom: 60px;
  }
`;

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <PostWrapper>{children}</PostWrapper>;
};

export default PostLayout;
