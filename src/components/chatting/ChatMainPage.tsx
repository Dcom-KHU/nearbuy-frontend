'use client';

import styled from 'styled-components';
import ChatListItem from './ChatListItem';
import ChatPage from './chatpage/ChatPage';

// 채팅 목록
const ChatList = styled.section`
  width: 33%;
  min-width: 300px;
  height: 100vh;
  overflow: auto;
  border: 1px solid rgb(168, 168, 168);
  @media screen and (max-width: 707px) {
    display: none;
  }
`;

// 채팅 페이지
export default function ChatMainPage() {
  return (
    <div className='w-4/5 h-screen flex gap-10 mt-10'>
      <ChatList>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ChatList>
      <ChatPage />
    </div>
  );
}
