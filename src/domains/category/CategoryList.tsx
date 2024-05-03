import React from 'react';

import { Category, CategoryListWrap } from './CategoryList.style';

import useCategoryList from '@/hooks/useCategoryList';
import { CategoryItemProps } from '@/typings/typings';

function CategoryList() {
  const categoryList = useCategoryList();

  const categories = categoryList.group;

  const total = categories
    .map(category => category.totalCount)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <CategoryListWrap>
      <Category key="ALL" to="/">
        <span>ALL</span>
        {total}
      </Category>
      {categories.map((category: CategoryItemProps) => (
        <Category
          key={category.fieldValue}
          to={`/${category.fieldValue
            .toLowerCase()
            .replace(/[ /]/gi, '-')
            .replace(/\./g, '')}`}
        >
          <span>{category.fieldValue}</span>
          {category.totalCount}
        </Category>
      ))}
    </CategoryListWrap>
  );
}

export default CategoryList;
