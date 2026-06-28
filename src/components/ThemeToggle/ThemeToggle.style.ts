import styled from '@emotion/styled';

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 ${props => props.theme.space[20]};
  font-size: ${props => props.theme.fontSize.md};
  color: inherit;
  cursor: pointer;
  transition: color 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.accent.default};
  }

  .theme-icon-dark {
    display: none;
  }

  html[data-theme='dark'] & {
    .theme-icon-light {
      display: none;
    }

    .theme-icon-dark {
      display: inline;
    }
  }
`;
