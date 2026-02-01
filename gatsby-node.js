const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/constants': path.resolve(__dirname, 'src/constants'),
        '@/domains': path.resolve(__dirname, 'src/domains'),
        '@/hooks': path.resolve(__dirname, 'src/hooks'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/typings': path.resolve(__dirname, 'src/typings'),
        '@/utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/PostTemplate.tsx');
  const categoryTemplate = path.resolve('src/templates/CategoryTemplate.tsx');

  return graphql(`
    {
      posts: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
      category: allMarkdownRemark {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.posts.edges;

    posts.forEach(
      ({
        node: {
          fields: { slug },
          frontmatter: { category },
        },
      }) => {
        createPage({
          path: slug,
          component: postTemplate,
          context: { slug, category },
        });
      },
    );

    const categories = result.data.category.group;

    categories.forEach(category => {
      createPage({
        path: `${category.fieldValue
          .toLowerCase()
          .replace(/[ /]/gi, '-')
          .replace(/\./g, '')}/`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
          count: category.totalCount,
        },
      });
    });
  });
};
