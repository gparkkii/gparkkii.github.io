import styled from '@emotion/styled';
import React from 'react';

const ContentBox = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const ContentHeader = styled.div`
  padding: 0px 20px;
  margin-top: 40px;
  padding-bottom: 8px;

  font-family: 'Poppins', 'Pretendard', 'Noto Sans';
  font-size: 36px;
  font-weight: 600;
  color: ${props => props.theme.lightTheme.text.dark[50]};
`;

interface ContentLayoutProps {
  header: string;
  children: React.ReactNode;
}

const ContentLayout = ({ header, children }: ContentLayoutProps) => {
  return (
    <ContentBox>
      {/* <ContentHeader>{header}</ContentHeader> */}
      {children}
    </ContentBox>
  );
};

export default ContentLayout;
