import styled from '@emotion/styled';
import React from 'react';
import { PageContextType } from '../../@types/Post.types';
import { Link } from 'gatsby';
import AuthorInfo from './AuthorInfo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  margin-top: 80px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  width: 100%;
  padding-bottom: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.bluegray[100]};
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  border-radius: 100px;
  padding: 0px 16px;

  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.bluegray[800]};
  background-color: ${({ theme }) => theme.colors.bluegray[100]};

  :hover {
    background-color: ${({ theme }) => theme.colors.bluegray[200]};
  }
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 60px;
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

interface ContentFooterProps {
  previous: PageContextType;
  next: PageContextType;
  tags: string[];
}

const ContentFooter = ({ next, previous, tags }: ContentFooterProps) => {
  return (
    <Wrapper>
      <Tags>
        {tags.map((tag, index) => (
          <Link to={`/?tag=${tag}`} key={`${tag}_${index}`}>
            <Tag>{tag}</Tag>
          </Link>
        ))}
      </Tags>
      <FooterNav>
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
      </FooterNav>
    </Wrapper>
  );
};

export default ContentFooter;
