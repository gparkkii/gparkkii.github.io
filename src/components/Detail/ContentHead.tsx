import styled from '@emotion/styled';
import React from 'react';
import { Heading1 } from 'styles/typography';

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

interface ContentHeadProps {
  title: string;
}

const ContentHead = ({ title }: ContentHeadProps) => {
  return (
    <HeadWrapper>
      <Heading1>{title}</Heading1>
    </HeadWrapper>
  );
};

export default ContentHead;
