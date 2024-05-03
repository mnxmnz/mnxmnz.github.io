import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import { ContactIcon, ContactWrap } from './Contact.style';

function Contact() {
  return (
    <ContactWrap>
      <ContactIcon>
        <a href="mailto:minzidev@gmail.com" aria-label="Email">
          <SiGmail /> Email
        </a>
      </ContactIcon>
      <ContactIcon>
        <a
          href="https://github.com/mnxmnz"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github"
        >
          <BsGithub /> GitHub
        </a>
      </ContactIcon>
      <ContactIcon>
        <a
          href="https://www.linkedin.com/in/dev-mnxmnz"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <BsLinkedin /> LinkedIn
        </a>
      </ContactIcon>
    </ContactWrap>
  );
}

export default Contact;
