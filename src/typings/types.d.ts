declare module '*.md';
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.webp';

declare module 'gatsby-plugin-image' {
  import React from 'react';

  export interface IGatsbyImageData {
    layout: string;
    backgroundColor?: string;
    images: {
      sources: Array<{
        srcSet: string;
        type: string;
        sizes: string;
      }>;
      fallback: {
        src: string;
        srcSet: string;
        sizes: string;
      };
    };
    width: number;
    height: number;
  }

  export interface GatsbyImageProps {
    image: IGatsbyImageData;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
  }

  export const GatsbyImage: React.FC<GatsbyImageProps>;
  export const StaticImage: React.FC<any>;
}

declare module 'react-helmet' {
  import React from 'react';

  export interface HelmetProps {
    title?: string;
    meta?: Array<{
      name?: string;
      property?: string;
      httpEquiv?: string;
      content?: string;
    }>;
    htmlAttributes?: Record<string, string>;
  }

  export default class Helmet extends React.Component<HelmetProps> {}
}
