import React from 'react';

import Description from './Description';
import { ProfileWrap } from './Profile.style';
import ProfileImg from './ProfileImg';

function Profile({ padding }: { padding: string }) {
  return (
    <ProfileWrap padding={padding}>
      <ProfileImg />
      <Description />
    </ProfileWrap>
  );
}

export default Profile;
