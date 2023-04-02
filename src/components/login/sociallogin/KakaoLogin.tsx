'use client';

import Image from 'next/image';
import styled from 'styled-components';

const KakaoLoginBlock = styled.button`
  background: #fee500;
  &:active {
    background-color: #fee500;
  }
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export default function KakaoLogin() {
  return (
    <KakaoLoginBlock>
      <Image
        src='/images/logo/kakaotalk.png'
        alt='naver'
        width={24}
        height={24}
      />
      <div>카카오 로그인</div>
    </KakaoLoginBlock>
  );
}
