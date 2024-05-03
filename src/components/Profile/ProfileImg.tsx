import React from 'react';

import { Img, ImgWrap } from './ProfileImg.style';

import useProfileImage from '@/hooks/useProfileImage';

function ProfileImg() {
  const profile = useProfileImage();

  return (
    <ImgWrap>
      <Img image={profile.childImageSharp.gatsbyImageData} alt="profile" />
    </ImgWrap>
  );
}

export default ProfileImg;
