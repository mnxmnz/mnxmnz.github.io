import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

import {
  Contents,
  Copyright,
  FooterWrap,
  Logo,
  LogoWrap,
  Menu,
  Nav,
  NavLinkItem,
  NavMoreItem,
  NavTitle,
} from './Footer.style';

import { COPYRIGHT, NAV_LINK_ITEMS } from '@/constants/constants';
import useLogoImage from '@/hooks/useLogoImage';

function Footer() {
  const logo = useLogoImage();

  return (
    <FooterWrap>
      <Contents>
        <LogoWrap>
          <Logo
            image={logo.childImageSharp.gatsbyImageData}
            alt="김민지 블로그"
          />
          <Copyright>{COPYRIGHT}</Copyright>
        </LogoWrap>
        <Menu>
          <Nav>
            <NavTitle>Links</NavTitle>
            {NAV_LINK_ITEMS.map(item => (
              <NavLinkItem key={item.title} to={item.url}>
                {item.title}
              </NavLinkItem>
            ))}
          </Nav>
          <Nav>
            <NavTitle>Contact</NavTitle>
            <NavMoreItem>
              <a href="mailto:minzidev@gmail.com" aria-label="Email">
                Email <GoLinkExternal />
              </a>
            </NavMoreItem>
            <NavMoreItem>
              <a
                href="https://github.com/mnxmnz"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github"
              >
                GitHub <GoLinkExternal />
              </a>
            </NavMoreItem>
            <NavMoreItem>
              <a
                href="https://www.linkedin.com/in/dev-mnxmnz"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                LinkedIn <GoLinkExternal />
              </a>
            </NavMoreItem>
          </Nav>
          <Nav>
            <NavTitle>More</NavTitle>
            <NavMoreItem>
              <a
                href="https://mnxmnz-books.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Books"
              >
                Books <GoLinkExternal />
              </a>
            </NavMoreItem>
            <NavMoreItem>
              <a
                href="https://forms.gle/TVvPQHE5yJrZhtzF9"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Feedback"
              >
                Feedback <GoLinkExternal />
              </a>
            </NavMoreItem>
          </Nav>
        </Menu>
      </Contents>
    </FooterWrap>
  );
}

export default Footer;
