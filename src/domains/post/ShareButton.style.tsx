import styled from '@emotion/styled';

export const ButtonWrap = styled.div`
  width: 100%;
  height: 10rem;
  margin: 4rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.lightgray_500};
`;

export const Button = styled.button`
  width: 12rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white_1000};
  background-color: ${props => props.theme.colors.primary_1000};
  cursor: pointer;

  svg {
    font-size: 2rem;
    margin: 0 0.8rem 0 0;
  }

  &:hover {
    background-color: rgba(144, 144, 205, 1);
  }
`;
