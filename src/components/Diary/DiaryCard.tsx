import React from 'react';
import { DiaryFrontMatterType } from '../../@types/Post.types';
import styled from '@emotion/styled';
import { Headline2, Summary, Title } from 'styles/typography';
import { theme } from 'theme/index';
import { Link } from 'gatsby';

interface DiaryCardProps {
  slug: string;
  content: DiaryFrontMatterType;
}

const DiaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light[100]};
  & h1::after {
    display: block;
    content: '';
    width: 0;
    height: 2px;
    margin-bottom: 3px;
    margin-top: -5px;
    background-color: ${props => props.theme.colors.primary[300]};
    transition: width 0.3s;
  }

  :hover {
    h1 {
      color: ${({ theme }) => theme.colors.primary.default};
    }
    &:hover {
      & h1::after {
        width: 100%;
      }
    }
  }
`;

const Margin = styled.div`
  margin-bottom: 8px;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  margin-right: 24px;
`;

const DiaryCard = ({ slug, content }: DiaryCardProps) => {
  return (
    <Link to={slug}>
      <DiaryWrapper>
        <HeadlineWrapper>
          <Headline2>
            {content.index < 10 ? `0${content.index}.` : content.index}
          </Headline2>
        </HeadlineWrapper>
        <div>
          <Margin>
            <Title style={{ fontWeight: 600 }}>{content.title}</Title>
          </Margin>
          <Summary textColor={theme.colors.dark[100]}>
            {content.summary}
          </Summary>
        </div>
      </DiaryWrapper>
    </Link>
  );
};

export default DiaryCard;
