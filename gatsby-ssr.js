import { defineCustomElements as HighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { ThemeProvider } from '@emotion/react';
import React from 'react';

import Layout from './src/components/Layout/Layout';
import { theme } from './src/styles/theme';

HighlightElement();

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setHtmlAttributes({ lang: 'ko' });

  setHeadComponents([
    <link
      key="preconnect-jsdelivr"
      rel="preconnect"
      href="https://cdn.jsdelivr.net"
      crossOrigin="anonymous"
    />,
    <link
      key="pretendard-font"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
    />,
    <meta key="theme-color" name="theme-color" content="#6868AC" />,
    <meta
      key="naver-site-verification"
      name="naver-site-verification"
      content="2cc40621eb11418be5791db057b14a2d2cc2800c"
    />,
  ]);

  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var s=localStorage.getItem('theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
      }}
    />,
  ]);
};
