import React from 'react';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import AboutIntro from '@/domains/career/AboutIntro';
import CareerList from '@/domains/career/CareerList';
import { theme } from '@/styles/theme';

function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <Profile padding={`${theme.space[64]} 0`} />
      <AboutIntro />
      <CareerList />
    </>
  );
}

export default AboutPage;
