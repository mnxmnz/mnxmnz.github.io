import styled from '@emotion/styled';

import { customMQ } from '@/styles/theme';

export const CareerSection = styled.section``;

export const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.darkgray_800};
  margin-bottom: 2rem;
`;

export const CareerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

export const CareerItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  column-gap: 2rem;

  ${customMQ} {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
`;

export const CareerCompany = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text_1000};
  line-height: 140%;
`;

export const CareerRole = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.theme.colors.darkgray_800};
  line-height: 140%;
  grid-column: 1;
  margin-top: 0.3rem;
`;

export const CareerPeriod = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.theme.colors.darkgray_800};
  white-space: nowrap;
  line-height: 140%;
  grid-row: 1;
  grid-column: 2;

  ${customMQ} {
    grid-row: auto;
    grid-column: 1;
  }
`;
