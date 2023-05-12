'use client';

import Image from 'next/image';
import styled from 'styled-components';

const NaverLoginBlock = styled.button`
  background: #03c75a;
  &:active {
    background-color: #11b65b;
  }
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export default function NaverLogin() {
  return (
    <NaverLoginBlock>
      <Image src='/images/logo/naver.jpg' alt='naver' width={24} height={24} />
      <div>네이버 로그인</div>
    </NaverLoginBlock>
  );
}
