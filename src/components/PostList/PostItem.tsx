import React from 'react';

import {
  CardDescription,
  CardSummary,
  CardTitle,
  PostCard,
  PostItemWrap,
} from './PostItem.style';

import { PostItemProps } from '@/typings/typings';

function PostItem({ title, date, summary, link, time }: PostItemProps) {
  return (
    <PostItemWrap
      to={link}
      aria-label={`${title} 포스트 읽기, ${date}, 읽는 시간 ${time}분`}
    >
      <PostCard>
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
