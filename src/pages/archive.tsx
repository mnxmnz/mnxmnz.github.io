import React from 'react';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import AboutIntro from '@/domains/career/AboutIntro';
import CareerList from '@/domains/career/CareerList';

function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <Profile padding="6rem 0" />
      <AboutIntro />
      <CareerList />
    </>
  );
}

export default AboutPage;
