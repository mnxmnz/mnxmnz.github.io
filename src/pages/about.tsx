import { HeadFC } from 'gatsby';
import React from 'react';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import AboutIntro from '@/domains/career/AboutIntro';
import CareerList from '@/domains/career/CareerList';
import { theme } from '@/styles/theme';

function AboutPage() {
  return (
    <>
      <Profile padding={`${theme.space[64]} 0`} />
      <AboutIntro />
      <CareerList />
    </>
  );
}

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="About"
    description="안녕하세요 개발자 김민지입니다."
    pathname={location.pathname}
  />
);

export default AboutPage;
