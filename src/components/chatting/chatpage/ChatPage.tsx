'use client';

import styled from 'styled-components';
import ChatUserInfo from './ChatUserInfo';
import ChatProductInfo from './ChatProductInfo';
import Chatting from './Chatting';

// 대화 내용
const ChatArticle = styled.article`
  width: 100%;
  height: 100vh;
  min-width: 836px;
  border: 1px solid black;
`;

// 채팅방
export default function ChatPage() {
  return (
    <section className='w-4/6'>
      <ChatArticle>
        <ChatUserInfo />
        <ChatProductInfo />
        <Chatting />
      </ChatArticle>
    </section>
  );
}
