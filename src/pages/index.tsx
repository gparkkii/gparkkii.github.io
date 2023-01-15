import { Global } from '@emotion/react';
import { Link } from 'gatsby';
import * as React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { globalStyle } from '../theme';

const IndexPage = () => (
  <>
    <Global styles={globalStyle} />
    <DefaultLayout title="Gparkkii Dev'log">
      <Link to="/">INFO</Link>
    </DefaultLayout>
  </>
);

export default IndexPage;
