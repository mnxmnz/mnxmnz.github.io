import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';

import { SEOProps } from '@/typings/typings';

class SEOQueryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SEOQueryError';
  }
}

function useSEO() {
  const queryResult = useStaticQuery<SEOProps>(
    graphql`
      query SEOData {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(name: { eq: "cover" }) {
          publicURL
        }
      }
    `,
  );

  const seoData = useMemo(() => {
    if (!queryResult.site?.siteMetadata) {
      throw new SEOQueryError('Site metadata is missing from GraphQL query');
    }

    if (!queryResult.file?.publicURL) {
      console.warn('Cover image not found, SEO might be affected');
    }

    return {
      site: queryResult.site,
      file: queryResult.file || { publicURL: '' },
      hasValidMetadata: Boolean(
        queryResult.site.siteMetadata.title &&
          queryResult.site.siteMetadata.description,
      ),
    };
  }, [queryResult]);

  return seoData;
}

export default useSEO;
export { SEOQueryError };
