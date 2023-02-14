"use client";

import styled from "styled-components";
import LoginFormContainer from "./LoginFormContainer";
// 일단 단순한 로그인 틀만 구현...

const JustLoginBlock = styled.div`
  //background: lightgreen;
  height: 100%;
  width: 470px;

  display: flex;
  flex-direction: column;

  padding: 20px 50px;
`;

export default function JustLogin() {
  return (
    <JustLoginBlock>
      <LoginFormContainer />
      <a href="">회원가입 (아직 연결 안됨)</a>
    </JustLoginBlock>
  );
}
