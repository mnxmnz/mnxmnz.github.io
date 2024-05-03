import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { ArrowIcon, PageNum, PaginationWrap } from './Pagination.style';

import { PaginationProps } from '@/typings/typings';

function Pagination({ currentPage, numPages }: PaginationProps) {
  const prevNum =
    currentPage === 1
      ? `/page/${numPages}`
      : currentPage === 2
      ? '/'
      : `/page/${currentPage - 1}`;

  const nextNum = currentPage === numPages ? `/` : `/page/${currentPage + 1}`;

  const numArr = Array.from({ length: numPages }, () => 0);

  return (
    <PaginationWrap>
      <ArrowIcon to={prevNum} aria-label="PrevPage">
        <MdKeyboardArrowLeft />
      </ArrowIcon>
      {numArr.map((num, idx) =>
        idx == 0 ? (
          <PageNum
            key={String(num + idx)}
            to="/"
            className={currentPage === idx + 1 ? 'active' : undefined}
            aria-label="PageNum"
          >
            {idx + 1}
          </PageNum>
        ) : (
          <PageNum
            key={String(num + idx)}
            to={`/page/${idx + 1}`}
            className={currentPage === idx + 1 ? 'active' : undefined}
            aria-label="PageNum"
          >
            {idx + 1}
          </PageNum>
        ),
      )}
      <ArrowIcon to={nextNum} aria-label="NextPage">
        <MdKeyboardArrowRight />
      </ArrowIcon>
    </PaginationWrap>
  );
}

export default Pagination;
