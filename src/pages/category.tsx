import React from 'react';

import SEO from '@/components/Layout/SEO';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoryList from '@/domains/category/CategoryList';

function CategoryPage() {
  return (
    <>
      <SEO title="Category" />
      <PageTitle title="카테고리" />
      <CategoryList />
    </>
  );
}

export default CategoryPage;
