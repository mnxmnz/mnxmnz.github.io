module.exports = {
  siteMetadata: {
    siteUrl: 'https://mnxmnz.github.io',
    title: '김민지 기술 블로그',
    description:
      '안녕하세요 👋 개발자 김민지입니다. 개발 관련 지식을 기록하고 공유하고 있습니다',
    author: '김민지',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        exclude: ['/404', '/page/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mnxmnz.github.io',
        sitemap: 'https://mnxmnz.github.io/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/404', '/page/*'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://mnxmnz.github.io',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        includeInDevelopment: false,
        id: 3147203,
        sv: 6,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
      __key: 'contents',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static`,
      },
      __key: 'static',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/src/components`,
      },
      __key: 'components',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'constants',
        path: `${__dirname}/src/constants`,
      },
      __key: 'constants',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'domains',
        path: `${__dirname}/src/domains`,
      },
      __key: 'domains',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'hooks',
        path: `${__dirname}/src/hooks`,
      },
      __key: 'hooks',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'styles',
        path: `${__dirname}/src/styles`,
      },
      __key: 'styles',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'templates',
        path: `${__dirname}/src/templates`,
      },
      __key: 'templates',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'typings',
        path: `${__dirname}/src/typings`,
      },
      __key: 'typings',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'utils',
        path: `${__dirname}/src/utils`,
      },
      __key: 'utils',
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              terminal: 'carbon',
              theme: 'seti',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
  ],
};
