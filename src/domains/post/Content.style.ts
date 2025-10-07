import styled from '@emotion/styled';

export const StContent = styled.div`
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  word-wrap: break-word;

  line-height: 175%;
  font-size: 1.7rem;
  font-weight: 400;
  color: ${props => props.theme.colors.text_1000};

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    line-height: 130%;
  }

  h1,
  h2,
  h3 {
    margin: 0 0 3rem 0;
  }

  h4 {
    margin: 0 0 2rem 0;
  }

  h1 {
    font-size: 3.1rem;
  }

  h2 {
    font-size: 2.7rem;
  }

  h3 {
    font-size: 2.3rem;
  }

  h4 {
    font-size: 2rem;
  }

  * + h1 {
    margin-top: 6rem;
  }

  * + h2 {
    margin-top: 5.5rem;
  }

  * + h3 {
    margin-top: 4.5rem;
  }

  * + h4 {
    margin-top: 4rem;
  }

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4 {
    margin-top: 0;
  }

  p {
    margin: 2rem 0;
  }

  blockquote {
    margin: 2.7rem 0;
    padding: 0.5rem 1.5rem;
    border-left: 0.4rem solid ${props => props.theme.colors.primary_1000};
    background-color: ${props => props.theme.colors.lightgray_500};

    strong {
      font-weight: 600;
    }

    p {
      margin: 0.5rem 0;
    }
  }

  ol,
  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0 0 3rem;

    p {
      margin: 0.5rem 0;
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
    border: 0.1rem solid ${props => props.theme.colors.primary_1000};
    border-radius: 1rem;
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.lightprimary_500};

    summary {
      cursor: pointer;
    }

    summary::marker {
      color: ${props => props.theme.colors.primary_1000};
    }

    p {
      margin: 1rem 0;
    }

    blockquote {
      margin: 1.5rem 0 0;
      background-color: inherit;
    }
  }

  hr {
    border: 0.1rem solid ${props => props.theme.colors.darkgray_100};
    margin: 5rem 0;
  }

  a {
    color: ${props => props.theme.colors.primary_1000};
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
    border-radius: 1rem;
  }

  em {
    font-size: 1.2rem;
    font-style: italic;
    display: block;
    text-align: center;
    margin: -1.5rem auto 0;
  }

  table {
    display: table;
    border: 0.2rem solid ${props => props.theme.colors.darkgray_300};
    border-collapse: collapse;
    margin: 1rem 0;
  }

  thead {
    display: table-header-group;
    font-weight: 600;
    border-bottom: 0.5rem solid ${props => props.theme.colors.darkgray_300};
  }

  tr {
    display: table-row;
  }

  th,
  td {
    display: table-cell;
    padding: 1rem;
    border: 0.2rem solid ${props => props.theme.colors.darkgray_300};
  }

  .deckgo-highlight-code-carbon {
    margin: 1.5rem 0 2.5rem 0;
    border-radius: 1rem;
    font-size: 1.5rem;
  }

  code {
    margin: 0 0.3rem 0 0;
    padding: 0.2rem 0.6rem;
    border-radius: 0.3rem;
    background: #e9ecef;
    font-size: 85%;
  }
`;
