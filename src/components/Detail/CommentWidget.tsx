import styled from '@emotion/styled';
import React, { createRef, FunctionComponent, useEffect } from 'react';

const UtteranceBox = styled.div`
  width: 100%;
  margin-top: 60px;
  border-top: 2px solid ${({ theme }) => theme.colors.bluegray[300]};
  padding-top: 60px;
  .utterances {
    max-width: 960px;
    width: 100%;
  }
`;

const src = 'https://utteranc.es/client.js';
const repo = 'gparkkii/gparkkii.github.io';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <UtteranceBox ref={element} />;
};

export default CommentWidget;
