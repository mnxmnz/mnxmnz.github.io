import { HeadFC } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoryList from '@/domains/category/CategoryList';

function CategoryPage() {
  return (
    <>
      <PageTitle title="카테고리" />
      <CategoryList />
    </>
  );
}

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Category"
    description="주제별로 글을 모아 둔 카테고리 목록입니다."
    pathname={location.pathname}
  />
);

export default CategoryPage;
