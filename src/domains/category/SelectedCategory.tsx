import React from 'react';

import PageTitle from '@/components/PageTitle/PageTitle';

function SelectedCategory({
  category,
  count,
}: {
  category: string;
  count: number;
}) {
  return <PageTitle title={category} description={`총 ${count}개의 글`} />;
}

export default SelectedCategory;
