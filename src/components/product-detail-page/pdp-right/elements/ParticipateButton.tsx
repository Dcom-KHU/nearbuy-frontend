"use client";

import Link from "next/link";
import styled from "styled-components";

const LinkCss = styled(Link)`
  background-color: var(--background-color);
  border-radius: 8px;
  width: 100px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-right: 11px;
  &:hover {
    color: var(--accent-color);
    font-weight: 600;
  }
`;

// 채팅하기 버튼
export default function ParticipateButton() {
  return <LinkCss href="#">참여하기</LinkCss>;
}
