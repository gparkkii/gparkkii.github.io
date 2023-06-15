import React from 'react';
import styled from '@emotion/styled';

interface TableOfContentsProps {
  contents: string;
}

const IndexRenderer = styled.div`
  position: fixed;
  right: 60px;
  top: 172px;
  z-index: 999999;

  width: 260px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.bluegray[200]};
  border-radius: 12px;

  font-size: 14px;
  a {
    color: ${({ theme }) => theme.colors.bluegray[500]};
  }

  ul > li {
    padding: 5px 0px;
    p {
      padding-bottom: 8px;
    }
    ul > li {
      margin-left: 10px;
    }
  }
`;

const TableOfContents = ({ contents }: TableOfContentsProps) => {
  return (
    <IndexRenderer
      id="table-of-contents"
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  );
};

export default TableOfContents;
