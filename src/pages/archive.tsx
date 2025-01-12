import React from 'react';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import ArchiveList from '@/domains/archive/ArchiveList';

function ArchivePage() {
  return (
    <>
      <SEO title="Archive" />
      <Profile padding="6rem 0" />
      <ArchiveList />
    </>
  );
}

export default ArchivePage;
