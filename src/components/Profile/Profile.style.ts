import styled from '@emotion/styled';

import { media } from '@/styles/theme';

export const ProfileWrap = styled.div<{ padding: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.space[20]};
  padding: ${props => props.padding};

  ${media.mobile} {
    flex-direction: column-reverse;
    text-align: center;
  }
`;
