import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';

import { CategoryItem, CategoryProps } from '@/typings/typings';
import { categoryUtils } from '@/utils/categoryUtils';

function useCategoryList() {
  const queryResult = useStaticQuery<CategoryProps>(
    graphql`
      query CategoryListData {
        categoryList: allMarkdownRemark {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  const categoryData = useMemo(() => {
    const categories = queryResult.categoryList?.group || [];

    if (!Array.isArray(categories)) {
      console.warn('Category list data is invalid');
      return {
        group: [],
        totalCount: 0,
        isEmpty: true,
        sortedByCount: [],
        sortedByName: [],
      };
    }

    const validCategories = categories.filter(
      (category: CategoryItem) =>
        categoryUtils.validate(category.fieldValue) && category.totalCount > 0,
    );

    return {
      group: validCategories,
      totalCount: categoryUtils.total(validCategories),
      isEmpty: validCategories.length === 0,
      sortedByCount: categoryUtils.sort(validCategories, 'count', 'desc'),
      sortedByName: categoryUtils.sort(validCategories, 'name', 'asc'),
      utils: {
        filterByMinCount: (minCount: number) =>
          categoryUtils.filter(validCategories, minCount),
        findByName: (name: string) =>
          validCategories.find(cat => cat.fieldValue === name),
        getSlug: (name: string) => categoryUtils.slug(name),
      },
    };
  }, [queryResult.categoryList]);

  return categoryData;
}

export default useCategoryList;

export interface UseCategoryListReturn {
  group: CategoryItem[];
  totalCount: number;
  isEmpty: boolean;
  sortedByCount: CategoryItem[];
  sortedByName: CategoryItem[];
  utils: {
    filterByMinCount: (minCount: number) => CategoryItem[];
    findByName: (name: string) => CategoryItem | undefined;
    getSlug: (name: string) => string;
  };
}
