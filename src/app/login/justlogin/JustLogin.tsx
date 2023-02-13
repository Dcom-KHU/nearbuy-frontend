"use client";

import styled from "styled-components";

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
      <div>아이디(이메일)</div>
      <div>비밀번호</div>
      <div>로그인 버튼</div>
      <div>회원가입 페이지 연결?</div>
    </JustLoginBlock>
  );
}
