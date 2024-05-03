import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import {
  Contact,
  ContactItem,
  DescriptionWrap,
  Introduce,
  Name,
} from './Description.style';

function Description() {
  return (
    <DescriptionWrap>
      <Name>김민지</Name>
      <Introduce>
        안녕하세요 👋 개발자 김민지입니다. 방문해 주셔서 감사합니다.
      </Introduce>
      <Contact>
        <ContactItem>
          <a href="mailto:minzidev@gmail.com" aria-label="Email">
            <SiGmail />
            Email
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://github.com/mnxmnz"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github"
          >
            <BsGithub />
            GitHub
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://www.linkedin.com/in/dev-mnxmnz"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <BsLinkedin /> LinkedIn
          </a>
        </ContactItem>
      </Contact>
    </DescriptionWrap>
  );
}

export default Description;
