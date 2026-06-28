import React from 'react';

import { Count, Title, TitleWrap } from './PageTitle.style';

function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <TitleWrap>
      <Title>
        {title}
        {description && <Count>{description}</Count>}
      </Title>
    </TitleWrap>
  );
}

export default PageTitle;
