import React from 'react';
import SearchLayout from 'layout/SearchLayout';
import { PATH } from '../routes/path';

const search = () => {
  return (
    <SearchLayout path={PATH.search}>
      <h1>search</h1>
    </SearchLayout>
  );
};

export default search;
