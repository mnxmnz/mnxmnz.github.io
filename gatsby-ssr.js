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
