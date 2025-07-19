import React, { useMemo } from 'react';
import Helmet from 'react-helmet';

import useSEO from '@/hooks/useSEO';
import { MetaProps } from '@/typings/typings';

const SEO_CONFIG = {
  keywords: 'HTML, CSS, JavaScript, TypeScript, React, FrontEnd',
  author: '김민지',
  siteName: '김민지 블로그',
  email: 'minzidev@gmail.com',
  themeColor: '#6868AC',
  naverVerification: '2cc40621eb11418be5791db057b14a2d2cc2800c',
  lang: 'ko',
} as const;

const SEO = ({ title, description, cover }: MetaProps) => {
  const { site, file } = useSEO();

  const seoData = useMemo(() => {
    const computedTitle = title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title;
    const computedDescription = description || site.siteMetadata.description;
    const computedImage = cover || file.publicURL;

    return {
      title: computedTitle,
      description: computedDescription,
      image: computedImage,
    };
  }, [title, description, cover, site.siteMetadata, file.publicURL]);

  const metaTags = useMemo(
    () => [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        httpEquiv: 'Content-Type',
        content: 'text/html; charset=UTF-8',
      },
      {
        httpEquiv: 'title',
        content: seoData.title,
      },
      {
        name: 'description',
        content: seoData.description,
      },
      {
        name: 'keywords',
        content: SEO_CONFIG.keywords,
      },
      {
        name: 'author',
        content: SEO_CONFIG.author,
      },
      {
        property: 'og:title',
        content: seoData.title,
      },
      {
        property: 'og:description',
        content: seoData.description,
      },
      {
        property: 'og:image',
        content: seoData.image,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: SEO_CONFIG.siteName,
      },
      {
        name: 'twitter:title',
        content: seoData.title,
      },
      {
        name: 'twitter:description',
        content: seoData.description,
      },
      {
        name: 'twitter:image',
        content: seoData.image,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'email',
        content: SEO_CONFIG.email,
      },
      {
        httpEquiv: 'copyright',
        content: SEO_CONFIG.author,
      },
      {
        name: 'theme-color',
        content: SEO_CONFIG.themeColor,
      },
      {
        name: 'naver-site-verification',
        content: SEO_CONFIG.naverVerification,
      },
    ],
    [seoData],
  );

  return (
    <Helmet
      title={seoData.title}
      meta={metaTags}
      htmlAttributes={{ lang: SEO_CONFIG.lang }}
    />
  );
};

export default SEO;
