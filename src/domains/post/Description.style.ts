import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { minimumMQ } from '@/styles/theme';

export const ContentTitle = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  padding: 5rem 0 1rem;
  font-size: 3.3rem;
  font-weight: 600;
  line-height: 130%;
  word-break: keep-all;
`;

export const ContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 4rem;
`;

export const ContentDate = styled.span`
  font-size: 1.5rem;

  ${minimumMQ} {
    display: none;
  }
`;

export const ContentCategory = styled(Link)`
  padding: 0.4rem;
  border-radius: 0.3rem;
  background: ${props => props.theme.colors.text_1000};
  color: ${props => props.theme.colors.white_1000};
  font-size: 1.3rem;
  font-weight: 500;

  :hover {
    background: ${props => props.theme.colors.primary_1000};
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${props => props.theme.colors.darkgray_100};
`;
