import React from 'react';

import { LatestPostsLabel } from './LatestPosts.style';

import PostItemList from '@/components/PostList/PostItemList';
import useLatestPosts from '@/hooks/useLatestPosts';

function LatestPosts() {
  const posts = useLatestPosts();

  return (
    <>
      <LatestPostsLabel>최신글 보러가기</LatestPostsLabel>
      <PostItemList posts={posts.edges} />
    </>
  );
}

export default LatestPosts;
