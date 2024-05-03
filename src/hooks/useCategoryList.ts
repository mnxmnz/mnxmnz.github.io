import { graphql, useStaticQuery } from 'gatsby';

import { CategoryProps } from '@/typings/typings';

function useCategoryList() {
  const { categoryList } = useStaticQuery<CategoryProps>(
    graphql`
      query {
        categoryList: allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return categoryList;
}

export default useCategoryList;
