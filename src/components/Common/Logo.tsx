import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { PATH } from 'routes/path';
import { breakpoints } from 'theme/index';

const Logo = () => {
  const mobileSize = useMediaQuery(breakpoints.sm);

  return (
    <Link to={PATH.index}>
      <StaticImage
        style={{
          width: mobileSize ? '40px' : '44px',
          height: mobileSize ? '40px' : '44px',
          objectFit: 'contain',
        }}
        src="../../images/g_logo.png"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
