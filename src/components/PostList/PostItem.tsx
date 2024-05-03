import React from 'react';

import {
  CardDescription,
  CardSummary,
  CardTitle,
  PostCard,
  PostItemWrap,
} from './PostItem.style';
import ThumbnailImg from './Thumbnail';

import { PostItemProps } from '@/typings/typings';

function PostItem({
  title,
  date,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
  time,
}: PostItemProps) {
  return (
    <PostItemWrap to={link}>
      <ThumbnailImg thumbnail={gatsbyImageData} />
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
