import styled from '@emotion/styled';

export const ContactWrap = styled.div`
  display: flex;
  padding: ${props => props.theme.space[40]} 0 0;
  align-items: center;
  justify-content: center;
`;

export const ContactIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 0 ${props => props.theme.space[32]};
  font-size: ${props => props.theme.fontSize.md};

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
    font-size: ${props => props.theme.fontSize.h3};
    margin: 0 ${props => props.theme.space[8]} 0 0;
  }
`;
