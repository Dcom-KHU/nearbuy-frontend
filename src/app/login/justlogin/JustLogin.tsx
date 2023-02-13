"use client";

import LoginForm from "./LoginForm";
import styled from "styled-components";
// 일단 단순한 로그인 틀만 구현...

const JustLoginBlock = styled.div`
  // background: lightgreen;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export default function JustLogin() {
  return (
    <JustLoginBlock>
      <LoginForm />
    </JustLoginBlock>
  );
}
