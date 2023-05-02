import styled from '@emotion/styled';
import React from 'react';
import avatar from 'assets/images/g-avatar.png';

const Rounded = styled.div`
  border-radius: 100px;
  overflow: hidden;
  isolation: isolate;
  width: 40px;
  height: 40px;
  background: url(${avatar});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left top;
`;

const Avatar = () => {
  return <Rounded />;
};

export default Avatar;
