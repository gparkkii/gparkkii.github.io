import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { PATH } from 'routes/path';

const Logo = () => {
  return (
    <Link to={PATH.index}>
      <StaticImage
        style={{
          width: '40px',
          height: '40px',
          objectFit: 'contain',
        }}
        src="../../images/g_logo.svg"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
