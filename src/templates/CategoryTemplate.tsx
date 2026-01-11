import { graphql } from 'gatsby';
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
      <SEO title={category} />
      <SelectedCategory category={category} count={count} />
      <PostItemList posts={edges} />
    </>
  );
}

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
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 820)
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
