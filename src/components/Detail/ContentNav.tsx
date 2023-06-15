import styled from '@emotion/styled';
import React from 'react';
import { PageContextType } from '../../@types/Post.types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 120px;
`;

const ContentLink = styled.a`
  display: inline-block;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.primary[600]};
  color: ${({ theme }) => theme.colors.primary.default};
  transition: all 0.3s ease-in-out;

  & span {
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary.default};
  }

  &:hover {
    transform: scale(1.025);
  }

  &:active {
    transform: scale(1);
  }
`;

interface ContentNavProps {
  previous: PageContextType;
  next: PageContextType;
}

const ContentNav = ({ next, previous }: ContentNavProps) => {
  return (
    <Wrapper>
      <nav>
        {previous !== null && (
          <ContentLink href={previous.fields.slug}>
            <span>{`<`}&nbsp;&nbsp;</span>
            {previous.frontmatter.title}
          </ContentLink>
        )}
      </nav>
      <nav>
        {next !== null && (
          <ContentLink href={next.fields.slug}>
            {next.frontmatter.title}
            <span>&nbsp;&nbsp;{`>`}</span>
          </ContentLink>
        )}
      </nav>
    </Wrapper>
  );
};

export default ContentNav;
