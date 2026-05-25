import React from 'react';

import { IntroSection, IntroText, SectionHeading } from './AboutIntro.style';

function AboutIntro() {
  return (
    <IntroSection>
      <SectionHeading>About</SectionHeading>
      <IntroText>
        안녕하세요. 개발자 김민지입니다.
        <br />
        서비스를 직접 사용하며 공급자 입장이 아닌 사용자의 시선으로 바라보는 걸
        중요하게 생각합니다. 평소 업무 속도를 늦추는 요소를 개선해 팀 전체의
        개발 경험을 높이는 일에 관심이 많습니다. 서비스가 성장하며 코드 복잡도가
        높아지는 것을 파악하고 개선 방향을 제안하는 것이 엔지니어의 역할이라고
        생각하며 이를 잘 해내기 위해 항상 고민합니다.
        <br />팀 내의 구성원 모두가 각자의 목소리를 낼 수 있고 편안함과 존중이
        공존하는 환경에서 건전한 토론이 가능하다고 생각합니다. 심리적 안정감을
        바탕으로 같은 목표를 향해 함께 나아가는 팀을 선호합니다.
      </IntroText>
    </IntroSection>
  );
}

export default AboutIntro;
