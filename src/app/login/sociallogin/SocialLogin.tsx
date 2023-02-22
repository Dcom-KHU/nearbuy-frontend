"use client";

import GoogleLogin from "./GoogleLogin";
import NaverLogin from "./NaverLogin";
import KakaoLogin from "./KakaoLogin";
import styled from "styled-components";

const SocialLoginBlock = styled.div`
  //background: skyblue;
  height: 300px;
  width: 470px;

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
