import styled from '@emotion/styled';

export const ButtonWrap = styled.div`
  width: 100%;
  height: 10rem;
  margin: ${props => props.theme.space[40]} 0 ${props => props.theme.space[64]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radius.md};
  background-color: ${props => props.theme.colors.surface.subtle};
`;

export const Button = styled.button`
  width: 12rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radius.md};
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 500;
  color: ${props => props.theme.colors.text.inverse};
  background-color: ${props => props.theme.colors.accent.default};
  cursor: pointer;

  svg {
    font-size: ${props => props.theme.fontSize.h4};
    margin: 0 ${props => props.theme.space[8]} 0 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.accent.hover};
  }
`;
