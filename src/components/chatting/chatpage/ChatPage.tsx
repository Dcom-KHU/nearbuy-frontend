'use client';

import styled from 'styled-components';
import ChatUserInfo from './ChatUserInfo';
import ChatProductInfo from './ChatProductInfo';
import Chatting from './Chatting';
import ChatWindow from './chattingitem/ChatWindow';

// 대화 내용
const ChatMain = styled.main`
  width: 100%;
  height: 100%;
  min-width: 836px;
  border: 1px solid blue;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// 채팅방
export default function ChatPage() {
  return (
    <section className='w-4/6'>
      <ChatMain>
        <ChatUserInfo />
        <ChatProductInfo />
        <Chatting />
        <ChatWindow />
      </ChatMain>
    </section>
  );
}
