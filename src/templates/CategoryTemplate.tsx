import { HeadFC, graphql } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import PostItemList from '@/components/PostList/PostItemList';
import SelectedCategory from '@/domains/category/SelectedCategory';
import { CategoryTemplateProps } from '@/typings/typings';

function CategoryTemplate({
  data: {
    posts: { edges },
  },
  pageContext,
}: CategoryTemplateProps) {
  const { category, count } = pageContext;

  return (
    <>
      <SelectedCategory category={category} count={count} />
      <PostItemList posts={edges} />
    </>
  );
}

export const Head: HeadFC<
  CategoryTemplateProps['data'],
  CategoryTemplateProps['pageContext']
> = ({ pageContext, location }) => (
  <SEO
    title={pageContext.category}
    description={`${pageContext.category} 카테고리의 글 목록입니다.`}
    pathname={location.pathname}
  />
);

export const categoryListQuery = graphql`
  query Category($category: String) {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
