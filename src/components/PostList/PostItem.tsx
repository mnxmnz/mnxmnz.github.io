import React, { memo } from 'react';

import {
  CardDescription,
  CardSummary,
  CardTitle,
  PostCard,
  PostItemWrap,
} from './PostItem.style';
import ThumbnailImg from './Thumbnail';

import { PostItemProps } from '@/typings/typings';

const formatReadTime = (time: number): string => `${time} min read`;

const formatPostMetadata = (date: string, time: number): string =>
  `${date} \u00b7 ${formatReadTime(time)}`;

const PostItem = memo<PostItemProps>(
  ({
    title,
    date,
    summary,
    thumbnail: {
      childImageSharp: { gatsbyImageData },
    },
    link,
    time,
  }) => {
    const metadata = formatPostMetadata(date, time);

    return (
      <PostItemWrap to={link}>
        <ThumbnailImg thumbnail={gatsbyImageData} />
        <PostCard>
          <CardTitle>{title}</CardTitle>
          <CardSummary>{summary}</CardSummary>
          <CardDescription>{metadata}</CardDescription>
        </PostCard>
      </PostItemWrap>
    );
  },
);

PostItem.displayName = 'PostItem';

export default PostItem;
export { formatReadTime, formatPostMetadata };
