import { HeadFC } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import NotFound from '@/domains/404/NotFound';

function NotFoundPage() {
  return <NotFound />;
}

export const Head: HeadFC = ({ location }) => (
  <SEO title="404" pathname={location.pathname} />
);

export default NotFoundPage;
