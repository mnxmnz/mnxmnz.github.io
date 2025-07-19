
export const createCategorySlug = (categoryName: string): string => {
  return categoryName.toLowerCase().replace(/[ /]/gi, '-').replace(/\./g, '');
};

export const calculateTotalCount = <T extends { totalCount: number }>(
  categories: T[],
): number => {
  return categories.reduce((total, category) => total + category.totalCount, 0);
};

export const createCategoryPath = (
  categorySlug: string,
  basePath = '/',
): string => {
  return `${basePath}${categorySlug}`;
};

export const isValidCategoryName = (categoryName: string): boolean => {
  return typeof categoryName === 'string' && categoryName.trim().length > 0;
};

export const sortCategories = <
  T extends { fieldValue: string; totalCount: number },
>(
  categories: T[],
  sortBy: 'count' | 'name' = 'count',
  order: 'asc' | 'desc' = 'desc',
): T[] => {
  const sortedCategories = [...categories];

  if (sortBy === 'count') {
    sortedCategories.sort((a, b) =>
      order === 'desc'
        ? b.totalCount - a.totalCount
        : a.totalCount - b.totalCount,
    );
  } else {
    sortedCategories.sort((a, b) =>
      order === 'desc'
        ? b.fieldValue.localeCompare(a.fieldValue)
        : a.fieldValue.localeCompare(b.fieldValue),
    );
  }

  return sortedCategories;
};

export const filterCategoriesByCount = <T extends { totalCount: number }>(
  categories: T[],
  minCount = 1,
): T[] => {
  return categories.filter(category => category.totalCount >= minCount);
};

export const categoryUtils = {
  slug: createCategorySlug,
  path: createCategoryPath,
  total: calculateTotalCount,
  validate: isValidCategoryName,
  sort: sortCategories,
  filter: filterCategoriesByCount,
} as const;
