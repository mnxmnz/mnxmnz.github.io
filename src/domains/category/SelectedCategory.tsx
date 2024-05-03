import React from 'react';

import {
  Category,
  Count,
  SelectedCategoryWrap,
} from './SelectedCategory.style';

function SelectedCategory({
  category,
  count,
}: {
  category: string;
  count: number;
}) {
  return (
    <SelectedCategoryWrap>
      <Category>{category}</Category>
      <Count>총 {count}개의 포스팅</Count>
    </SelectedCategoryWrap>
  );
}

export default SelectedCategory;
