import React from 'react';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import ArticleList from '@/domains/article/ArticleList';

function ArticlePage() {
  return (
    <>
      <SEO title="Article" />
      <Profile padding="6rem 0" />
      <ArticleList />
    </>
  );
}

export default ArticlePage;
