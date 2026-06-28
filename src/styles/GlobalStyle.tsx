import { Global, Theme, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { media } from './theme';

const style = (theme: Theme) => css`
  ${emotionReset}

  :root {
    color-scheme: light;
    --color-text-primary: rgba(41, 40, 45, 1);
    --color-text-secondary: rgba(98, 92, 96, 0.8);
    --color-text-inverse: rgba(255, 255, 255, 1);
    --color-surface-default: rgba(255, 255, 255, 1);
    --color-surface-glass: rgba(255, 255, 255, 0.8);
    --color-surface-subtle: rgba(241, 237, 233, 0.5);
    --color-surface-accent: rgba(231, 231, 250, 0.5);
    --color-surface-code: rgba(233, 236, 239, 1);
    --color-border-subtle: rgba(98, 92, 96, 0.1);
    --color-border-default: rgba(98, 92, 96, 0.3);
    --color-accent-default: rgba(104, 104, 172, 1);
    --color-accent-hover: rgba(144, 144, 205, 1);
  }

  :root[data-theme='dark'] {
    color-scheme: dark;
    --color-text-primary: rgba(236, 236, 239, 1);
    --color-text-secondary: rgba(236, 236, 239, 0.55);
    --color-text-inverse: rgba(255, 255, 255, 1);
    --color-surface-default: rgba(26, 26, 30, 1);
    --color-surface-glass: rgba(26, 26, 30, 0.8);
    --color-surface-subtle: rgba(255, 255, 255, 0.05);
    --color-surface-accent: rgba(154, 154, 214, 0.16);
    --color-surface-code: rgba(255, 255, 255, 0.08);
    --color-border-subtle: rgba(255, 255, 255, 0.1);
    --color-border-default: rgba(255, 255, 255, 0.22);
    --color-accent-default: rgba(154, 154, 214, 1);
    --color-accent-hover: rgba(178, 178, 228, 1);
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.surface.default};
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-size: 62.5%;
    font-weight: 400;

    ${media.mobile} {
      font-size: 55%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  button {
    border: none;
    background-color: transparent;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid ${theme.colors.accent.default};
    outline-offset: 2px;
    border-radius: 2px;
  }

  a:focus:not(:focus-visible),
  button:focus:not(:focus-visible),
  input:focus:not(:focus-visible),
  textarea:focus:not(:focus-visible),
  select:focus:not(:focus-visible) {
    outline: none;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 10px;
    background-clip: padding-box;
    background-color: ${theme.colors.text.secondary};
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 5px ${theme.colors.text.inverse};
    background-color: ${theme.colors.surface.subtle};
  }

  ::selection {
    background-color: ${theme.colors.accent.default};
    color: ${theme.colors.text.inverse};
  }
`;

const GlobalStyle = function () {
  return <Global styles={style} />;
};

export default GlobalStyle;
