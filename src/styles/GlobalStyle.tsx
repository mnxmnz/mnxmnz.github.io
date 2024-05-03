import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { customMQ } from './theme';

const style = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css');

  ${emotionReset}

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
    color: rgb(41 40 45 / 100%);
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    font-size: 62.5%;
    font-weight: 400;

    ${customMQ} {
      font-size: 55%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  button {
    outline: none;
    border: none;
    background-color: transparent;
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
    user-drag: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 10px;
    background-clip: padding-box;
    background-color: rgb(98 92 96 / 70%);
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 5px white;
    background-color: rgb(241 237 233 / 50%);
  }

  ::selection {
    background-color: rgb(104 104 172 / 80%);
    color: rgb(255 255 255 / 100%);
  }
`;

const GlobalStyle = function () {
  return <Global styles={style} />;
};

export default GlobalStyle;
