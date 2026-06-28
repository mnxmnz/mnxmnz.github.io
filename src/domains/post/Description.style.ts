import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { media } from '@/styles/theme';

export const ContentTitle = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  padding: ${props => props.theme.space[64]} 0 ${props => props.theme.space[12]};
  font-size: ${props => props.theme.fontSize.h1};
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.02em;
  word-break: keep-all;
`;

export const ContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space[20]} 0 ${props => props.theme.space[40]};
`;

export const ContentDate = styled.span`
  font-size: ${props => props.theme.fontSize.md};

  ${media.compact} {
    display: none;
  }
`;

export const ContentCategory = styled(Link)`
  padding: ${props => props.theme.space[4]} ${props => props.theme.space[12]};
  border-radius: ${props => props.theme.radius.pill};
  background: ${props => props.theme.colors.surface.accent};
  color: ${props => props.theme.colors.accent.default};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 500;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  :hover {
    background: ${props => props.theme.colors.accent.default};
    color: ${props => props.theme.colors.text.inverse};
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${props => props.theme.colors.border.subtle};
`;
