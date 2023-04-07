"use client";

import styled from "styled-components";

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
export default function InactiveChatButton() {
  return <InactiveChatButtonBlock>거래완료</InactiveChatButtonBlock>;
}
