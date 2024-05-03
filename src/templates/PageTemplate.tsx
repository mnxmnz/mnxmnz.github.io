import { graphql } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import PostItemList from '@/components/PostList/PostItemList';
import Profile from '@/components/Profile/Profile';
import Pagination from '@/domains/page/Pagination';
import { PageTemplateProps } from '@/typings/typings';

function PageTemplate({
  data: {
    posts: { edges },
  },
  pageContext,
}: PageTemplateProps) {
  const { currentPage, numPages } = pageContext;

  return (
    <>
      <SEO />
      <Profile padding="6rem 0" />
      <PostItemList posts={edges} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
}

export const pageQuery = graphql`
  query Page($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      limit: $limit
      skip: $skip
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

export default PageTemplate;
