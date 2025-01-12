import React from 'react';

import {
  ArchiveItem,
  ArchiveLinkIcon,
  ArchivePageTitle,
  ArchiveReview,
  ArchiveTitle,
} from './ArchiveList.style';

import { archive } from '@/constants/archive';

function ArchiveList() {
  const sortedArchive = archive.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  return (
    <section>
      <ArchivePageTitle>
        개발/커리어/조직 문화 관련 아티클을 간단한 리뷰와 함께 아카이브합니다
      </ArchivePageTitle>
      {sortedArchive.map(archive => (
        <ArchiveItem
          key={archive.url}
          href={archive.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={archive.title}
        >
          <ArchiveTitle>{archive.title}</ArchiveTitle>
          <ArchiveReview>💭 {archive.review}</ArchiveReview>
          <ArchiveLinkIcon />
        </ArchiveItem>
      ))}
    </section>
  );
}

export default ArchiveList;
