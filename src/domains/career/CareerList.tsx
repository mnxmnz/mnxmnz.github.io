import React from 'react';

import {
  CareerCompany,
  CareerItem,
  CareerItems,
  CareerPeriod,
  CareerRole,
  CareerSection,
  SectionHeading,
} from './CareerList.style';

import { career } from '@/constants/career';

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-');

  return `${year}.${month}`;
}

function CareerList() {
  const sortedCareer = [...career].sort((a, b) => {
    if (a.endDate === null && b.endDate !== null) {
      return -1;
    }

    if (a.endDate !== null && b.endDate === null) {
      return 1;
    }

    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <CareerSection>
      <SectionHeading>Work</SectionHeading>
      <CareerItems>
        {sortedCareer.map(item => (
          <CareerItem key={`${item.company}-${item.startDate}`}>
            <CareerCompany>{item.company}</CareerCompany>
            <CareerPeriod>
              {formatDate(item.startDate)} ~{' '}
              {item.endDate ? formatDate(item.endDate) : '현재'}
            </CareerPeriod>
            <CareerRole>{item.role}</CareerRole>
          </CareerItem>
        ))}
      </CareerItems>
    </CareerSection>
  );
}

export default CareerList;
