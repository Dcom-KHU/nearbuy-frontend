"use client";

import styled from "styled-components";

const LoginTitleBlock = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  h1 {
    font-size: 36px;
  }
  h3 {
    font-size: 20px;
  }
`;

export default function LoginTitle() {
  return (
    <LoginTitleBlock>
      <h1>Welcome Back!</h1>
      <h3>로그인 어쩌구 기타 설명 ?</h3>
    </LoginTitleBlock>
  );
}
