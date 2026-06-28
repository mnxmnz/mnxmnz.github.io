import styled from '@emotion/styled';

import { media } from '@/styles/theme';

export const CareerSection = styled.section``;

export const SectionHeading = styled.h2`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.space[20]};
`;

export const CareerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[32]};
`;

export const CareerItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  column-gap: ${props => props.theme.space[20]};

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.space[4]};
  }
`;

export const CareerCompany = styled.p`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  line-height: 140%;
`;

export const CareerRole = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 400;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 140%;
  grid-column: 1;
  margin-top: ${props => props.theme.space[4]};
`;

export const CareerPeriod = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 400;
  color: ${props => props.theme.colors.text.secondary};
  white-space: nowrap;
  line-height: 140%;
  grid-row: 1;
  grid-column: 2;

  ${media.mobile} {
    grid-row: auto;
    grid-column: 1;
  }
`;
