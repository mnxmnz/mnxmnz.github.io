import { graphql } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import Markdown from '@/domains/post/Content';
import DescriptionData from '@/domains/post/Description';
import LatestPosts from '@/domains/post/LatestPosts';
import ShareButton from '@/domains/post/ShareButton';
import { PostTemplateProps } from '@/typings/typings';

function PostTemplate({
  data: {
    posts: { edges },
  },
}: PostTemplateProps) {
  const {
    node: {
      fields: { slug },
      html,
      timeToRead,
      frontmatter: {
        title,
        summary,
        date,
        category,
        thumbnail: { publicURL },
      },
    },
  } = edges[0];

  return (
    <>
      <SEO title={title} description={summary} cover={publicURL} />
      <DescriptionData
        title={title}
        date={date}
        category={category}
        time={timeToRead}
      />
      <Markdown html={html} />
      <ShareButton title={title} slug={slug} />
      <Profile padding="8rem 0 8rem 0" />
      <LatestPosts />
    </>
  );
}

export const profileQuery = graphql`
  query Post($slug: String) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          timeToRead
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
            category
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
