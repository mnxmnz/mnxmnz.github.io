import { graphql, useStaticQuery } from 'gatsby';

import { CategoryProps } from '@/typings/typings';

function useCategoryList() {
  const { categoryList } = useStaticQuery<CategoryProps>(
    graphql`
      query {
        categoryList: allMarkdownRemark(limit: 100) {
          group(field: { frontmatter: { category: SELECT } }) {
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
