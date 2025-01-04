import { graphql } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import PostItemList from '@/components/PostList/PostItemList';
import Profile from '@/components/Profile/Profile';
import { IndexProps } from '@/typings/typings';

function IndexPage({
  data: {
    posts: { edges },
  },
}: IndexProps) {
  return (
    <>
      <SEO />
      <Profile padding="6rem 0" />
      <PostItemList posts={edges} />
    </>
  );
}

export const indexQuery = graphql`
  {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
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

export default IndexPage;
