import React from 'react';

import { LatestPostsLabel } from './LatestPosts.style';

import PostItemList from '@/components/PostList/PostItemList';
import { PostItemListProps } from '@/typings/typings';

type LatestPostsProps = PostItemListProps & {
  category?: string;
};

function LatestPosts({ posts, category }: LatestPostsProps) {
  const label = category
    ? `${category} 카테고리 최신글 보러가기`
    : '최신글 보러가기';

  return (
    <>
      <LatestPostsLabel>{label}</LatestPostsLabel>
      <PostItemList posts={posts} />
    </>
  );
}

export default LatestPosts;
