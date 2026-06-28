import styled from '@emotion/styled';

export const TitleWrap = styled.div`
  padding: ${props => props.theme.space[64]} 0 0;
  margin: 0 0 ${props => props.theme.space[20]};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
`;

export const Count = styled.span`
  font-weight: 400;

  ::before {
    content: '·';
    margin: 0 ${props => props.theme.space[8]};
  }
`;
