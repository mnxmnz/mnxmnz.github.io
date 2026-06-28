import React from 'react';

import { StContent } from './Content.style';

export const POST_CONTENT_ID = 'post-content';

function Markdown({ html }: { html: string }) {
  return (
    <StContent
      id={POST_CONTENT_ID}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default Markdown;
