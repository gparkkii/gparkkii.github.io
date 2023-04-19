import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { PATH } from '../routes/path';

const Logo = () => {
  return (
    <Link to={PATH.index}>
      <StaticImage
        style={{ width: '44px', height: '44px', objectFit: 'contain' }}
        src="../images/g_logo.png"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
