"use client";

import styled from "styled-components";

const SocialLoginBlock = styled.div`
  // background: skyblue;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 20px;
  border-left: solid 1.5px lightgray;

  button {
    border: solid 1px gainsboro;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export default function SocialLogin() {
  return (
    <SocialLoginBlock>
      <button>정확히 뭐였는지 나중에 확인</button>
      <button>Google...?</button>
      <button>Naver...?</button>
      <button>Kakao...?</button>
    </SocialLoginBlock>
  );
}
