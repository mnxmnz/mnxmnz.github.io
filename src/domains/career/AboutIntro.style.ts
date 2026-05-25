import styled from '@emotion/styled';

export const IntroSection = styled.section`
  margin-bottom: 6rem;
`;

export const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.darkgray_800};
  margin-bottom: 2rem;
`;

export const IntroText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.colors.text_1000};
  line-height: 180%;
  word-break: keep-all;
`;
