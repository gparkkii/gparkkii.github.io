import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../Common/Avatar';
import { Body, Caption } from 'styles/typography';
import { theme } from 'theme/index';

const AuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 12px;
`;

interface AuthorInfoProps {
  date: string;
  author: string;
}

const AuthorInfo = ({ date, author }: AuthorInfoProps) => {
  return (
    <AuthorBox>
      <Avatar />
      <Info>
        <Body
          medium
          textColor={theme.colors.dark[100]}
          style={{ marginBottom: 2 }}
        >
          {author}
        </Body>
        <Caption textColor={theme.colors.light[500]}>{date}</Caption>
      </Info>
    </AuthorBox>
  );
};

export default AuthorInfo;
