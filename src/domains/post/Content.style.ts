import styled from '@emotion/styled';

export const StContent = styled.div`
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.space[24]} 0;
  word-wrap: break-word;

  line-height: 175%;
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 400;
  color: ${props => props.theme.colors.text.primary};

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    line-height: 130%;
    padding: 0 0 ${props => props.theme.space[8]} 0;
    border-bottom: 0.1rem solid ${props => props.theme.colors.border.subtle};
  }

  h1,
  h2,
  h3 {
    margin: 0 0 ${props => props.theme.space[24]} 0;
  }

  h4 {
    margin: 0 0 ${props => props.theme.space[20]} 0;
  }

  h1 {
    font-size: ${props => props.theme.fontSize.h1};
  }

  h2 {
    font-size: ${props => props.theme.fontSize.h2};
  }

  h3 {
    font-size: ${props => props.theme.fontSize.h3};
  }

  h4 {
    font-size: ${props => props.theme.fontSize.h4};
  }

  * + h1 {
    margin-top: ${props => props.theme.space[64]};
  }

  * + h2 {
    margin-top: ${props => props.theme.space[64]};
  }

  * + h3 {
    margin-top: ${props => props.theme.space[48]};
  }

  * + h4 {
    margin-top: ${props => props.theme.space[48]};
  }

  h2 + h3 {
    margin-top: ${props => props.theme.space[24]};
  }

  h3 + h4 {
    margin-top: ${props => props.theme.space[20]};
  }

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4 {
    margin-top: 0;
  }

  p {
    margin: ${props => props.theme.space[20]} 0;
  }

  blockquote {
    margin: ${props => props.theme.space[20]} 0;
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[16]};
    border-left: 0.4rem solid ${props => props.theme.colors.accent.default};
    background-color: ${props => props.theme.colors.surface.subtle};

    strong {
      font-weight: 600;
    }

    p {
      margin: ${props => props.theme.space[4]} 0;
    }
  }

  ol,
  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0 0 ${props => props.theme.space[32]};

    p {
      margin: ${props => props.theme.space[4]} 0;
    }
  }

  ul {
    list-style-type: disc;
  }

  ul ul {
    list-style-type: circle;
  }

  ul ul ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
  }

  details {
    border: 0.1rem solid ${props => props.theme.colors.accent.default};
    border-radius: ${props => props.theme.radius.md};
    margin: ${props => props.theme.space[20]} 0;
    padding: ${props => props.theme.space[16]};
    background-color: ${props => props.theme.colors.surface.accent};

    summary {
      cursor: pointer;
    }

    summary::marker {
      color: ${props => props.theme.colors.accent.default};
    }

    p {
      margin: ${props => props.theme.space[8]} 0;
    }

    blockquote {
      margin: ${props => props.theme.space[16]} 0 0;
      background-color: inherit;
    }
  }

  hr {
    border: 0.1rem solid ${props => props.theme.colors.border.subtle};
    margin: ${props => props.theme.space[40]} 0;
  }

  a {
    color: ${props => props.theme.colors.accent.default};
  }

  a:active,
  a:hover {
    outline-width: 0;
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
  }

  img {
    width: 100%;
    border-style: none;
    border-radius: ${props => props.theme.radius.md};
  }

  em {
    font-size: ${props => props.theme.fontSize.sm};
    font-style: italic;
    display: block;
    text-align: center;
    margin: -${props => props.theme.space[16]} auto 0;
  }

  table {
    display: table;
    border: 0.2rem solid ${props => props.theme.colors.border.default};
    border-collapse: collapse;
    margin: ${props => props.theme.space[8]} 0;
  }

  thead {
    display: table-header-group;
    font-weight: 600;
    border-bottom: 0.4rem solid ${props => props.theme.colors.border.default};
  }

  tr {
    display: table-row;
  }

  th,
  td {
    display: table-cell;
    padding: ${props => props.theme.space[8]};
    border: 0.2rem solid ${props => props.theme.colors.border.default};
  }

  .deckgo-highlight-code-carbon {
    margin: ${props => props.theme.space[16]} 0
      ${props => props.theme.space[24]} 0;
    border-radius: ${props => props.theme.radius.md};
    font-size: ${props => props.theme.fontSize.sm};
  }

  code {
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[8]};
    border-radius: ${props => props.theme.radius.sm};
    background: ${props => props.theme.colors.surface.code};
    font-size: 85%;
  }
`;
