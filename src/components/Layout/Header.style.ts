import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { media } from '@/styles/theme';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.surface.glass};
  backdrop-filter: blur(10px);
  border-bottom: 0.1rem solid ${props => props.theme.colors.border.subtle};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120rem;
  height: 6rem;

  ${media.tablet} {
    width: 100%;
    padding: 0 ${props => props.theme.space[20]};
  }
`;

export const LogoWrap = styled(Link)`
  width: 100%;
`;

export const Logo = styled(GatsbyImage)`
  width: 12rem;
  object-fit: cover;
  isolation: isolate;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.md};

  ${media.compact} {
    display: none;
  }
`;

export const NavContents = styled(Link)`
  margin: 0 0 0 ${props => props.theme.space[20]};
  font-weight: 500;

  :hover {
    color: ${props => props.theme.colors.accent.default};
  }

  :nth-of-type(1) {
    margin: 0;
  }
`;
