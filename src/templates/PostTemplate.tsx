import { HeadFC, graphql } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import Markdown from '@/domains/post/Content';
import DescriptionData from '@/domains/post/Description';
import LatestPosts from '@/domains/post/LatestPosts';
import ShareButton from '@/domains/post/ShareButton';
import Toc from '@/domains/post/Toc';
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
      frontmatter: { title, date, category },
    },
  } = edges[0];

  const hasRelatedPosts = relatedPosts.edges.length > 0;
  const posts = hasRelatedPosts ? relatedPosts.edges : latestPosts.edges;

  return (
    <>
      <DescriptionData
        title={title}
        date={date}
        category={category}
        time={timeToRead}
      />
      <Markdown html={html} />
      <Toc key={slug} />
      <ShareButton title={title} slug={slug} />
      <LatestPosts
        posts={posts}
        category={hasRelatedPosts ? category : undefined}
      />
    </>
  );
}

export const Head: HeadFC<PostTemplateProps['data']> = ({ data, location }) => {
  const { frontmatter } = data.posts.edges[0].node;

  return (
    <SEO
      title={frontmatter.title}
      description={frontmatter.summary}
      image={frontmatter.thumbnail.publicURL}
      pathname={location.pathname}
      article
      date={frontmatter.date}
      category={frontmatter.category}
    />
  );
};

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
          }
        }
      }
    }
  }
`;

export default PostTemplate;
