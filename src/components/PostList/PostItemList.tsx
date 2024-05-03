import React from 'react';

import PostItem from './PostItem';
import { PostItemListWrap } from './PostItemList.style';

import { ContentProps, PostItemListProps } from '@/typings/typings';

function PostItemList({ posts }: PostItemListProps) {
  return (
    <PostItemListWrap>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            timeToRead,
            frontmatter,
          },
        }: ContentProps) => (
          <PostItem {...frontmatter} link={slug} key={id} time={timeToRead} />
        ),
      )}
    </PostItemListWrap>
  );
}

export default PostItemList;
