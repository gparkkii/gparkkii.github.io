import styled from '@emotion/styled';
import React from 'react';
import { Headline2 } from 'styles/typography';
import AuthorInfo from './AuthorInfo';
import { Link } from 'gatsby';
import IconButton from '../Controls/IconButton';

const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const ToolBar = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Margin = styled.div`
  margin-right: 8px;
`;

interface ContentHeadProps {
  title: string;
  date: string;
}

const ContentHead = ({ title, date }: ContentHeadProps) => {
  return (
    <HeadWrapper>
      <Headline2>{title}</Headline2>
      <ToolBar>
        {/* FIXME: redirect to about page */}
        <Link to="https://github.com/gparkkii">
          <AuthorInfo author="gparkkii" date={date} />
        </Link>
        <IconBox>
          <IconButton size="xs" icon="share" onClick={() => alert('share!')} />
          <Margin />
          <IconButton size="xs" icon="link" onClick={() => alert('link!')} />
        </IconBox>
      </ToolBar>
    </HeadWrapper>
  );
};

export default ContentHead;
