import React from 'react';
import { PATH } from '../routes/path';
import SearchLayout from '../layout/SearchLayout';

const search = () => {
  return (
    <SearchLayout path={PATH.search}>
      <h1>search</h1>
    </SearchLayout>
  );
};

export default search;
