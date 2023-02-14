"use client";

import styled from "styled-components";

const KakaoLoginBlock = styled.button`
  background: #fee500;
`;

export default function KakaoLogin() {
  return (
    <KakaoLoginBlock>
      {/*아이콘 추가해야함*/}
      <div>카카오 로그인</div>
    </KakaoLoginBlock>
  );
}
