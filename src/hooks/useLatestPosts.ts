import { graphql, useStaticQuery } from 'gatsby';

import { LatestPostsProps } from '@/typings/typings';

function useLatestPosts() {
  const { posts } = useStaticQuery<LatestPostsProps>(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
          limit: 3
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
    `,
  );

  return posts;
}

export default useLatestPosts;
