import React from 'react';
import { VscFeedback } from 'react-icons/vsc';

import {
  FeedbackLink,
  GoToHomeLink,
  NotFoundDescription,
  NotFoundWrap,
  Warning,
} from './NotFound.style';

function NotFound() {
  return (
    <NotFoundWrap>
      <Warning>404</Warning>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
      </NotFoundDescription>
      <GoToHomeLink to="/">홈으로 가기</GoToHomeLink>
      <FeedbackLink
        href="https://forms.gle/TVvPQHE5yJrZhtzF9"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Feedback"
      >
        <VscFeedback />
        피드백하기
      </FeedbackLink>
    </NotFoundWrap>
  );
}

export default NotFound;
