import React from 'react';

import { IntroSection, IntroText, SectionHeading } from './AboutIntro.style';

function AboutIntro() {
  return (
    <IntroSection>
      <SectionHeading>About</SectionHeading>
      <IntroText>
        안녕하세요. 3년 차 개발자 김민지입니다.
        <br />
        사용자에게 좋은 경험을 제공하기 위해 요구 사항을 개발하는 거에 그치지
        않고 추가 개선점을 찾아내는 걸 중요하게 생각합니다. 서비스를 직접
        사용해보며 소비자 관점에서 불편한 점을 해소하는 데 집중합니다.
        <br />
        제품이 성장하며 코드 복잡도가 높아지는 지점을 파악하고 개선하는 것이
        엔지니어의 역할이라고 생각합니다. 이를 잘 해내기 위해 끊임없이
        고민합니다.
        <br />
        평소 업무 속도를 늦추는 요소를 파악하여 팀 전체의 개발 경험을 높이는
        일에 관심이 많습니다. 사소한 불편함이라도 넘어가지 않고 개선하려 합니다.
        <br />팀 내의 모든 구성원이 각자의 목소리를 낼 수 있는 편안함과 존중이
        공존하는 환경에서 건전한 토론이 가능하다고 생각합니다. 심리적 안정감을
        바탕으로 같은 목표를 향해 나아가는 팀을 선호합니다.
      </IntroText>
    </IntroSection>
  );
}

export default AboutIntro;
