import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { media } from '@/styles/theme';

export const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: ${props => props.theme.space[80]} auto 0;
  background-color: ${props => props.theme.colors.surface.subtle};
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120rem;
  padding: ${props => props.theme.space[32]} 0 ${props => props.theme.space[48]};

  ${media.tablet} {
    width: 100%;
    padding: ${props => props.theme.space[32]} ${props => props.theme.space[20]}
      ${props => props.theme.space[48]};
  }

  ${media.mobile} {
    width: 100%;
    padding: ${props => props.theme.space[32]} ${props => props.theme.space[20]};
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
  }
`;

export const LogoWrap = styled.div`
  width: 100%;

  ${media.mobile} {
    margin: 0 0 ${props => props.theme.space[40]} 0;
  }
`;

export const Logo = styled(GatsbyImage)`
  width: 12rem;
  object-fit: cover;
  isolation: isolate;
`;

export const Copyright = styled.div`
  margin: ${props => props.theme.space[12]} 0 0;
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
`;

export const Menu = styled.div`
  display: flex;

  & > div:nth-of-type(2),
  & > div:nth-of-type(3) {
    margin: 0 0 0 ${props => props.theme.space[48]};

    ${media.mobile} {
      margin: 0 0 0 ${props => props.theme.space[32]};
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSize.md};
`;

export const NavTitle = styled.p`
  margin: 0 0 ${props => props.theme.space[32]} 0;
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
`;

export const NavLinkItem = styled(Link)`
  margin: ${props => props.theme.space[24]} 0 0;

  :hover {
    color: ${props => props.theme.colors.accent.default};
  }

  :nth-of-type(1) {
    margin: 0;
  }
`;

export const NavMoreItem = styled.div`
  margin: ${props => props.theme.space[24]} 0 0;

  :hover {
    color: ${props => props.theme.colors.accent.default};
  }

  :nth-of-type(1) {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 0 0 0 ${props => props.theme.space[4]};
    color: ${props => props.theme.colors.text.secondary};
  }
`;
