import React from 'react';

import {
  HeaderWrap,
  Logo,
  LogoWrap,
  Nav,
  NavContents,
  NavItem,
} from './Header.style';

import { NAV_LINK_ITEMS } from '@/constants/constants';
import useLogoImage from '@/hooks/useLogoImage';

function Header() {
  const logo = useLogoImage();

  return (
    <HeaderWrap>
      <Nav>
        <LogoWrap to="/">
          <Logo image={logo.childImageSharp.gatsbyImageData} alt="logo" />
        </LogoWrap>
        <NavItem>
          {NAV_LINK_ITEMS.map(item => (
            <NavContents key={item.title} to={item.url} aria-label={item.title}>
              {item.title}
            </NavContents>
          ))}
        </NavItem>
      </Nav>
    </HeaderWrap>
  );
}

export default Header;
