import React from 'react';

import {
  ContentCategory,
  ContentDate,
  ContentDetails,
  ContentTitle,
  Line,
} from './Description.style';

import { DescriptionProps } from '@/typings/typings';

function DescriptionData({ title, date, category, time }: DescriptionProps) {
  return (
    <>
      <ContentTitle>{title}</ContentTitle>
      <Line />
      <ContentDetails>
        <ContentCategory
          to={`/${category
            .toLowerCase()
            .replace(/[ /]/gi, '-')
            .replace(/\./g, '')}`}
        >
          {category}
        </ContentCategory>
        <ContentDate>
          {date} &middot; {time} min read
        </ContentDate>
      </ContentDetails>
    </>
  );
}

export default DescriptionData;
