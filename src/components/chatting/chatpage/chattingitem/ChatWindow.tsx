'use client';

import styled from 'styled-components';

const ChatWindowBox = styled.div`
  position: absolute;
  background-color: white;
  bottom: 0;
  left: 0;
  padding: 30px;
  width: 100%;
`;
const BorderBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 9px;
  textarea {
    width: 100%;
    height: 24px;
    background: none;
  }
`;

// 채팅 보내는 부분
export default function ChatWindow() {
  return (
    <ChatWindowBox>
      <BorderBox>
        <textarea placeholder='입력을 하든지 말든지' />
      </BorderBox>
    </ChatWindowBox>
  );
}
