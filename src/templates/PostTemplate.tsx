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
    relatedPosts,
    latestPosts,
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

  const hasRelatedPosts = relatedPosts.edges.length > 0;
  const posts = hasRelatedPosts ? relatedPosts.edges : latestPosts.edges;

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
      <LatestPosts
        posts={posts}
        category={hasRelatedPosts ? category : undefined}
      />
    </>
  );
}

export const profileQuery = graphql`
  query Post($slug: String, $category: String) {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
    relatedPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { category: { eq: $category } }
        fields: { slug: { ne: $slug } }
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
    latestPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { slug: { ne: $slug } } }
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
`;

export default PostTemplate;
