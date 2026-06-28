import styled from '@emotion/styled';

import { media } from '@/styles/theme';

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSize.h1};
  font-weight: 600;
  letter-spacing: -0.02em;
`;

export const Introduce = styled.p`
  margin: ${props => props.theme.space[8]} 0;
  font-size: ${props => props.theme.fontSize.md};
  line-height: 150%;

  ${media.mobile} {
    margin: ${props => props.theme.space[16]} 0;
  }
`;

export const Contact = styled.div`
  display: flex;

  ${media.mobile} {
    margin: 0 auto;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 0 ${props => props.theme.space[20]};
  font-size: ${props => props.theme.fontSize.sm};

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
    margin: 0 ${props => props.theme.space[4]} 0 0;
    font-size: ${props => props.theme.fontSize.md};
  }
`;
