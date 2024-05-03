import React from 'react';

import Footer from './Footer';
import Header from './Header';
import { LayoutWrap, Main } from './Layout.style';

import GlobalStyle from '@/styles/GlobalStyle';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrap>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrap>
  );
}

export default Layout;
