'use client';

import GoogleLogin from './GoogleLogin';
import NaverLogin from './NaverLogin';
import KakaoLogin from './KakaoLogin';
import styled from 'styled-components';

const SocialLoginBlock = styled.div`
  //background: skyblue;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;

  button {
    border: solid 1px #929292;
    padding: 12px;
    margin-bottom: 24px;
    width: 340px;
    border-radius: 5px;
  }
  // 작은 화면에선 로고들만 보이게 함
  @media screen and (max-width: 707px) {
    display: none;
  }
`;

export default function SocialLogin() {
  return (
    <SocialLoginBlock>
      <GoogleLogin />
      <NaverLogin />
      <KakaoLogin />
    </SocialLoginBlock>
  );
}
