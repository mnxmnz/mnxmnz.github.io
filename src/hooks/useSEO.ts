import { graphql, useStaticQuery } from 'gatsby';

import { SiteMetadataProps } from '@/typings/typings';

function useSEO() {
  const { site, file } = useStaticQuery<SiteMetadataProps>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
      file(name: { eq: "cover" }) {
        publicURL
      }
    }
  `);

  return {
    title: site.siteMetadata.title,
    description: site.siteMetadata.description,
    siteUrl: site.siteMetadata.siteUrl,
    author: site.siteMetadata.author,
    defaultImage: file?.publicURL ?? '',
  };
}

export default useSEO;
