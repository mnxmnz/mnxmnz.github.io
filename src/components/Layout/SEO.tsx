import React from 'react';
import Helmet from 'react-helmet';

import useSEO from '@/hooks/useSEO';
import { MetaProps } from '@/typings/typings';

const SEO = ({ title, description, cover }: MetaProps) => {
  const { site, file } = useSEO();

  const SEOTitle: string = title
    ? `${title} - ${site.siteMetadata.title}`
    : site.siteMetadata.title;
  const SEODescription: string = description || site.siteMetadata.description;
  const SEOImg: string = cover || file.publicURL;

  return (
    <Helmet
      title={SEOTitle}
      meta={[
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
          content: SEOTitle,
        },
        {
          name: 'description',
          content: SEODescription,
        },
        {
          name: 'keywords',
          content: 'HTML, CSS, JavaScript, TypeScript, React, FrontEnd',
        },
        {
          name: 'author',
          content: '김민지',
        },
        {
          property: 'og:title',
          content: SEOTitle,
        },
        {
          property: 'og:description',
          content: SEODescription,
        },
        {
          property: 'og:image',
          content: SEOImg,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'Devlog',
        },
        {
          name: 'twitter:title',
          content: SEOTitle,
        },
        {
          name: 'twitter:description',
          content: SEODescription,
        },
        {
          name: 'twitter:image',
          content: SEOImg,
        },
        {
          property: 'email',
          content: 'minzidev@gmail.com',
        },
        {
          httpEquiv: 'copyright',
          content: '김민지',
        },
        {
          name: 'theme-color',
          content: '#6868AC',
        },
        {
          name: 'naver-site-verification',
          content: '2cc40621eb11418be5791db057b14a2d2cc2800c',
        },
      ]}
      htmlAttributes={{ lang: 'ko' }}
    />
  );
};

export default SEO;
