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
  margin-right: 5px;
  &:hover {
    color: var(--accent-color);
    font-weight: 600;
  }
`;

const InactiveChatButtonBlock = styled.div`
  background-color: #d8d8d8;
  color: #808080;
  border-radius: 8px;
  width: 100px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-right: 5px;
`;

// 채팅하기 버튼
export default function ChatButton() {
  return <LinkCss href="#">채팅하기</LinkCss>;
}

export function InactiveChatButton() {
  return <InactiveChatButtonBlock>거래완료</InactiveChatButtonBlock>;
}
