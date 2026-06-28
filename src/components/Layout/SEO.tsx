import React from 'react';

import useSEO from '@/hooks/useSEO';
import { MetaProps } from '@/typings/typings';

function SEO({
  title,
  description,
  image,
  pathname,
  article = false,
  date,
  category,
  children,
}: MetaProps) {
  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
    author,
    defaultImage,
  } = useSEO();

  const seoTitle = title ? `${title} - ${siteTitle}` : siteTitle;
  const seoDescription = description || siteDescription;

  const toAbsolute = (path: string) =>
    path.startsWith('http') ? path : `${siteUrl}${path}`;

  const url = `${siteUrl}${pathname || '/'}`;
  const imageUrl = toAbsolute(image || defaultImage);

  const schema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        headline: title,
        description: seoDescription,
        image: imageUrl,
        datePublished: date,
        dateModified: date,
        author: { '@type': 'Person', name: author, url: siteUrl },
        publisher: {
          '@type': 'Organization',
          name: siteTitle,
          logo: { '@type': 'ImageObject', url: toAbsolute(defaultImage) },
        },
        ...(category && { articleSection: category }),
        inLanguage: 'ko-KR',
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteTitle,
        description: seoDescription,
        url: siteUrl,
        inLanguage: 'ko-KR',
        author: { '@type': 'Person', name: author, url: siteUrl },
      };

  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, TypeScript, React, FrontEnd"
      />
      <meta name="author" content={author} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="ko_KR" />

      {article && date && (
        <meta property="article:published_time" content={date} />
      )}
      {article && <meta property="article:author" content={author} />}
      {article && category && (
        <meta property="article:section" content={category} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={imageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}

export default SEO;
