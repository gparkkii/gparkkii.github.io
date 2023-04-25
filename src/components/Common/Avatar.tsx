import styled from '@emotion/styled';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { breakpoints } from 'theme/index';

const Rounded = styled.div`
  border-radius: 100px;
`;

const Avatar = () => {
  const mobileSize = useMediaQuery(breakpoints.sm);
  return (
    <Rounded>
      <StaticImage
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '100px',
          objectFit: 'contain',
        }}
        loading="lazy"
        src="../../images/g_avatar.png"
        alt="avatar"
      />
    </Rounded>
  );
};

export default Avatar;
