import styled from '@emotion/styled';
import React from 'react';
import { Headline2 } from 'styles/typography';
import AuthorInfo from './AuthorInfo';
import IconButton from '../Controls/IconButton';
import Tooltip from '../Controls/Tooltip';

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
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <HeadWrapper>
      <Headline2>{title}</Headline2>
      <ToolBar>
        {/* FIXME: redirect to about page */}
        <a
          href="https://github.com/gparkkii"
          target="_blank"
          rel="noopener norefferer"
        >
          <AuthorInfo author="gparkkii" date={date} />
        </a>
        <IconBox>
          <Tooltip tip="준비중...">
            <IconButton
              size="xs"
              icon="share"
              onClick={() => console.log('share!')}
            />
          </Tooltip>
          <Margin />
          <Tooltip width={108} tip="클립보드로 복사">
            <IconButton size="xs" icon="link" onClick={copyToClipBoard} />
          </Tooltip>
        </IconBox>
      </ToolBar>
    </HeadWrapper>
  );
};

export default ContentHead;
