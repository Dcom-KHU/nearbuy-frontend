'use client';

import styled from 'styled-components';
import ChatListItem from './ChatListItem';
import ChatPage from './chatpage/ChatPage';

// 채팅 목록
const ChatList = styled.ul`
  width: 100%;
  min-width: 300px;
  height: 100vh;
  overflow: auto;
  border: 1px solid red;

  @media screen and (max-width: 707px) {
    display: none;
  }
`;

// 채팅 페이지
export default function ChatMainPage() {
  return (
    <div className='w-4/5 h-screen flex gap-10'>
      <section className='w-2/6 flex'>
        <ChatList>
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
        </ChatList>
        <ChatPage />
      </section>
    </div>
  );
}
