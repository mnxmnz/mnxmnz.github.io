import React, { useMemo } from 'react';

import { Category, CategoryListWrap } from './CategoryList.style';

import useCategoryList from '@/hooks/useCategoryList';
import { CategoryItem } from '@/typings/typings';
import { categoryUtils } from '@/utils/categoryUtils';

function CategoryList() {
  const categoryList = useCategoryList();

  const categories = categoryList.group;

  const { total, sortedCategories } = useMemo(() => {
    const totalCount = categoryUtils.total(categories);
    const sorted = categoryUtils.sort(categories, 'count', 'desc');

    return {
      total: totalCount,
      sortedCategories: sorted,
    };
  }, [categories]);

  const categoryItems = useMemo(
    () =>
      sortedCategories.map((category: CategoryItem) => {
        const categorySlug = categoryUtils.slug(category.fieldValue);
        const categoryPath = categoryUtils.path(categorySlug);

        return (
          <Category key={category.fieldValue} to={categoryPath}>
            <span>{category.fieldValue}</span>
            {category.totalCount}
          </Category>
        );
      }),
    [sortedCategories],
  );

  return (
    <CategoryListWrap>
      <Category key="ALL" to="/">
        <span>ALL</span>
        {total}
      </Category>
      {categoryItems}
    </CategoryListWrap>
  );
}

export default CategoryList;
