import React from 'react';

import {
  CardCategory,
  CardDescription,
  CardSummary,
  CardTitle,
  PostCard,
  PostItemWrap,
} from './PostItem.style';

import { PostItemProps } from '@/typings/typings';

function PostItem({
  title,
  date,
  summary,
  link,
  time,
  category,
}: PostItemProps) {
  const ariaLabel = category
    ? `${category} 카테고리의 ${title} 포스트 읽기, ${date}, 읽는 시간 ${time}분`
    : `${title} 포스트 읽기, ${date}, 읽는 시간 ${time}분`;

  return (
    <PostItemWrap to={link} aria-label={ariaLabel}>
      <PostCard>
        {category && <CardCategory>{category}</CardCategory>}
        <CardTitle>{title}</CardTitle>
        <CardSummary>{summary}</CardSummary>
        <CardDescription>
          {date} &middot; {time} min read
        </CardDescription>
      </PostCard>
    </PostItemWrap>
  );
}

export default PostItem;
