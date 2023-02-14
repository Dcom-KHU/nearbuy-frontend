"use client";

import styled from "styled-components";

const NaverLoginBlock = styled.button`
  background: #03c75a;
`;

export default function NaverLogin() {
  return (
    <NaverLoginBlock>
      {/*아이콘 추가해야함*/}
      <div>네이버 로그인</div>
    </NaverLoginBlock>
  );
}
