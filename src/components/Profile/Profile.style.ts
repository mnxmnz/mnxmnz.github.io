import styled from '@emotion/styled';

import { customMQ } from '@/styles/theme';

export const ProfileWrap = styled.div<{ padding: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding};

  ${customMQ} {
    flex-direction: column;
    text-align: center;
  }
`;
