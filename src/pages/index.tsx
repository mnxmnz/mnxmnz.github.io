import { graphql } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import PageTitle from '@/components/PageTitle/PageTitle';
import PostItemList from '@/components/PostList/PostItemList';
import { IndexProps } from '@/typings/typings';

function IndexPage({
  data: {
    posts: { edges },
  },
}: IndexProps) {
  return (
    <>
      <SEO />
      <PageTitle title="전체 글" />
      <PostItemList posts={edges} />
    </>
  );
}

export const indexQuery = graphql`
  {
    posts: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
            category
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;

export default IndexPage;
