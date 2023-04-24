import styled from '@emotion/styled';
import React from 'react';
import { mediaQuery } from '../../theme/breakpoints';

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Heading = styled.div`
  ${props => props.theme.fonts.type.heading1};
  ${mediaQuery.sm} {
    ${props => props.theme.fonts.type.heading1mobile}
  }
`;

interface ContentHeadProps {
  title: string;
}

const ContentHead = ({ title }: ContentHeadProps) => {
  return (
    <HeadWrapper>
      <Heading>{title}</Heading>
    </HeadWrapper>
  );
};

export default ContentHead;
