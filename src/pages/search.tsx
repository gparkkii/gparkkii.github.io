import React from 'react';
import { PATH } from '../routes/path';
import BaseLayout from '../layout/BaseLayout';
import PostLayout from '../layout/PostLayout';
import SearchLayout from '../layout/SearchLayout';
import ContentHead from '../components/Detail/ContentHead';

const search = () => {
  return (
    <SearchLayout path={PATH.search}>
      <h1>search</h1>
    </SearchLayout>
    // <BaseLayout path={PATH.search}>
    //   <PostLayout>
    //     <ContentHead title={title} />
    //   </PostLayout>
    // </BaseLayout>
  );
};

export default search;
