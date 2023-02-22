// 로그인 페이지
// our-domain.com/login
"use client";
import LoginTitle from "./LoginTitle";
import LoginContents from "./LoginContents";

import styled from "styled-components";

const LoginPageBlock = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;

export default function Login() {
  return (
    <>
      <LoginPageBlock>
        <LoginTitle />
        <LoginContents />
      </LoginPageBlock>
    </>
  );
}
