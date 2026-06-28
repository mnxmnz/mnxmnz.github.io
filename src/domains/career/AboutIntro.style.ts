import styled from '@emotion/styled';

export const IntroSection = styled.section`
  margin-bottom: ${props => props.theme.space[64]};
`;

export const SectionHeading = styled.h2`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.space[20]};
`;

export const IntroText = styled.p`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 400;
  color: ${props => props.theme.colors.text.primary};
  line-height: 180%;
  word-break: keep-all;
`;
