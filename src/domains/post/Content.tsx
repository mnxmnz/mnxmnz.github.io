import React from 'react';

import { StContent } from './Content.style';

function Markdown({ html }: { html: string }) {
  return <StContent dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Markdown;
