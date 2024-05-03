import styled from '@emotion/styled';

export const ContactWrap = styled.div`
  display: flex;
  padding: 4rem 0 0;
  align-items: center;
  justify-content: center;
`;

export const ContactIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 0 3rem;
  font-size: 1.5rem;

  :hover {
    color: ${props => props.theme.colors.primary_1000};
  }

  :nth-of-type(1) {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 2.3rem;
    margin: 0 0.8rem 0 0;
  }
`;
