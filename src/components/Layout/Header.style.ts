import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { headerMQ, minimumMQ } from '@/styles/theme';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  transition: box-shadow 0.5s;
  border-bottom: 0.1rem solid ${props => props.theme.colors.darkgray_100};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120rem;
  height: 6rem;

  ${headerMQ} {
    width: 100%;
    padding: 0 2rem 0 1.5rem;
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
  font-size: 1.5rem;

  ${minimumMQ} {
    display: none;
  }
`;

export const NavContents = styled(Link)`
  margin: 0 0 0 2rem;
  font-weight: 500;

  :hover {
    color: ${props => props.theme.colors.primary_1000};
  }

  :nth-of-type(1) {
    margin: 0;
  }
`;
