import styled from '@emotion/styled';

import { media } from '@/styles/theme';

export const LayoutWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 76.8rem;
  margin: 0 auto;
  padding: ${props => props.theme.space[64]} 0 0;

  ${media.mobile} {
    width: 100%;
    padding: ${props => props.theme.space[64]} ${props => props.theme.space[20]}
      0;
  }
`;
