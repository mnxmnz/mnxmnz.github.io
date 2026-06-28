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

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var s=localStorage.getItem('theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
      }}
    />,
  ]);
};
