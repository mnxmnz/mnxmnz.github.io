import React from 'react';
import { BiShareAlt } from 'react-icons/bi';

import { Button, ButtonWrap } from './ShareButton.style';

import shareAPI from '@/utils/shareAPI';

type ShareButtonProps = {
  title: string;
  slug: string;
};

function ShareButton({ title, slug }: ShareButtonProps) {
  return (
    <ButtonWrap>
      <Button onClick={() => shareAPI({ title, slug })}>
        <BiShareAlt />
        공유하기
      </Button>
    </ButtonWrap>
  );
}

export default ShareButton;
